-- Atomaire hartjes-aankoop: munten eraf + hartjes erbij in één transactie.
-- Vervangt het oude client-paar (directe user_profiles.hearts-update zonder
-- await + add_coins(-cost)). Faalde of verloor die update de race, dan gaf
-- lose_heart bij de volgende fout het OUDE (lage) aantal terug en nam de client
-- dat over: "na het kopen 1 fout en al mijn hartjes zijn weg" (mail 12-11-2026).
-- Prijzen staan hier (spiegel van OFFERS in shop.html); de client stuurt alleen
-- het pakket. vumed_stats.js valt terug op het oude pad zolang deze functie
-- nog niet bestaat.
create or replace function public.buy_hearts(p_offer text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_cost int; v_gain int;
  v_hearts int; v_coins int;
begin
  if v_uid is null then
    return json_build_object('ok', false, 'reason', 'login');
  end if;
  if p_offer = 'h1' then v_cost := 50;  v_gain := 1;
  elsif p_offer = 'h5' then v_cost := 200; v_gain := 5;
  elsif p_offer = 'hf' then v_cost := 350; v_gain := 20;
  else return json_build_object('ok', false, 'reason', 'offer');
  end if;

  -- zelfde nieuwe-dag-regel als lose_heart: aanvullen tot 20, overflow blijft
  update user_profiles
     set hearts = greatest(coalesce(hearts, 0), 20), hearts_day = current_date
   where user_id = v_uid and hearts_day is distinct from current_date;

  select coalesce(hearts, 20), coalesce(total_coins, 0) into v_hearts, v_coins
    from user_profiles where user_id = v_uid for update;
  if not found then
    return json_build_object('ok', false, 'reason', 'login');
  end if;
  if v_hearts >= 20 then
    return json_build_object('ok', false, 'reason', 'full', 'hearts', v_hearts, 'coins', v_coins);
  end if;
  if v_coins < v_cost then
    return json_build_object('ok', false, 'reason', 'coins', 'hearts', v_hearts, 'coins', v_coins);
  end if;

  update user_profiles
     set hearts = least(20, v_hearts + v_gain),   -- de shop overflowt nooit voorbij 20
         hearts_day = current_date,
         hearts_updated_at = now(),
         total_coins = v_coins - v_cost
   where user_id = v_uid
  returning hearts, total_coins into v_hearts, v_coins;

  return json_build_object('ok', true, 'hearts', v_hearts, 'coins', v_coins);
end;
$$;

revoke all on function public.buy_hearts(text) from public, anon;
grant execute on function public.buy_hearts(text) to authenticated;
