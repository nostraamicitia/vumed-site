/* answer_terms.js — shared global answer-term bank for VUmed exams.
   Pilot subject: Huid en Afweer. Loaded on every exam page before
   progressdots.js, which merges these into the page GLOSSARY so the
   answer-option 'term bank' stars + hover panel light up. Extend by
   adding keys; keys/`match` are matched against whole option text
   (case-insensitive). */
window.ANSWER_TERMS = {
 "lysosoom": {
  "title": "Lysosoom",
  "short": "Membraanblaasje vol verterende enzymen dat afvalstoffen en opgenomen materiaal afbreekt.",
  "definition": "<p>Het <b>lysosoom</b> is een blaasje omgeven door één membraan, gevuld met hydrolytische enzymen die bij een lage pH (~4,5) macromoleculen afbreken. Het is de 'maag' van de cel.</p><p>Het verteert materiaal dat via endocytose of fagocytose is opgenomen en ruimt via autofagie versleten celonderdelen op.</p>",
  "image_url": "",
  "wiki_title": "Lysosome",
  "match": "lysosoom|lysosomen"
 },
 "peroxisoom": {
  "title": "Peroxisoom",
  "short": "Klein organel dat vetzuren afbreekt en daarbij waterstofperoxide vormt, dat het met catalase onschadelijk maakt.",
  "definition": "<p>Het <b>peroxisoom</b> is een klein, door één membraan omgeven organel. Het breekt lange vetzuren af (β-oxidatie) en ontgift stoffen, waarbij waterstofperoxide (H₂O₂) ontstaat.</p><p>Het enzym catalase in het peroxisoom zet dit reactieve H₂O₂ meteen om in water en zuurstof.</p>",
  "image_url": "",
  "wiki_title": "Peroxisome",
  "match": "peroxisoom|peroxisomen"
 },
 "golgi-complex": {
  "title": "Golgi-complex",
  "short": "Stapel afgeplatte blaasjes die eiwitten en lipiden uit het ER modificeert, sorteert en verpakt voor transport.",
  "definition": "<p>Het <b>Golgi-complex</b> (Golgi-apparaat) bestaat uit een stapel afgeplatte membraanzakjes. Het ontvangt eiwitten en lipiden vanuit het endoplasmatisch reticulum.</p><p>Hier worden ze verder bewerkt (bijvoorbeeld glycosylering), gesorteerd en in transportblaasjes verpakt richting hun bestemming.</p>",
  "image_url": "",
  "wiki_title": "Golgi apparatus",
  "match": "golgi-complex|golgi complex|golgi-systeem|golgi systeem|golgi-apparaat|golgi apparaat"
 },
 "ruw endoplasmatisch reticulum": {
  "title": "Ruw endoplasmatisch reticulum",
  "short": "Deel van het ER bezet met ribosomen; hier worden eiwitten voor secretie en membranen gemaakt.",
  "definition": "<p>Het <b>ruw endoplasmatisch reticulum</b> dankt zijn 'ruwe' aanzien aan de ribosomen op het oppervlak. Deze ribosomen synthetiseren eiwitten die het ER in worden geloodst.</p><p>In het ER-lumen worden die eiwitten gevouwen en van suikergroepen voorzien, op weg naar het Golgi-complex, de membranen of secretie.</p>",
  "image_url": "",
  "wiki_title": "Endoplasmic reticulum",
  "match": "ruw endoplasmatisch reticulum|ruw ER"
 },
 "glad endoplasmatisch reticulum": {
  "title": "Glad endoplasmatisch reticulum",
  "short": "ER zonder ribosomen; maakt lipiden, ontgift stoffen en slaat calcium op.",
  "definition": "<p>Het <b>glad endoplasmatisch reticulum</b> heeft geen ribosomen. Het synthetiseert lipiden en steroïden, ontgift geneesmiddelen (vooral in de lever) en slaat Ca²⁺ op.</p><p>In spiercellen (sarcoplasmatisch reticulum) regelt de calciumopslag de spiercontractie.</p>",
  "image_url": "",
  "wiki_title": "Endoplasmic reticulum",
  "match": "glad endoplasmatisch reticulum|glad ER"
 },
 "ribosoom": {
  "title": "Ribosoom",
  "short": "Moleculaire machine die met behulp van mRNA aminozuren aaneenrijgt tot een eiwit (translatie).",
  "definition": "<p>Het <b>ribosoom</b> is opgebouwd uit ribosomaal RNA en eiwitten. Het leest de codons van het mRNA af en koppelt de bijbehorende aminozuren aan elkaar.</p><p>Ribosomen komen vrij in het cytoplasma voor of gebonden aan het ruw endoplasmatisch reticulum.</p>",
  "image_url": "",
  "wiki_title": "Ribosome",
  "match": "ribosoom|ribosomen"
 },
 "mitochondrion": {
  "title": "Mitochondrion",
  "short": "De 'energiecentrale' van de cel; produceert ATP via de citroenzuurcyclus en oxidatieve fosforylering.",
  "definition": "<p>Het <b>mitochondrion</b> heeft een dubbele membraan; de binnenste is sterk geplooid (cristae). Hier vinden de citroenzuurcyclus en de elektronentransportketen plaats.</p><p>Zo levert het mitochondrion het grootste deel van de ATP van de cel. Het bevat eigen DNA en kan zich delen.</p>",
  "image_url": "",
  "wiki_title": "Mitochondrion",
  "match": "mitochondrion|mitochondriën|mitochondrien|mitochondria|mitochondrium"
 },
 "actine": {
  "title": "Actine",
  "short": "Eiwit dat microfilamenten vormt; betrokken bij celvorm, celbeweging en spiercontractie.",
  "definition": "<p><b>Actine</b> is een van de meest voorkomende eiwitten in de cel. Losse moleculen (G-actine) polymeriseren tot dunne draden (F-actine): de microfilamenten van het cytoskelet.</p><p>Actinefilamenten geven de cel vorm, maken beweging en deling mogelijk en vormen samen met myosine het contractiele apparaat van spiercellen.</p>",
  "image_url": "",
  "wiki_title": "Actin",
  "match": "actine|actinefilamenten|actinefilament"
 },
 "myosine": {
  "title": "Myosine",
  "short": "Motoreiwit dat langs actinefilamenten beweegt en zo spiercontractie en intracellulair transport aandrijft.",
  "definition": "<p><b>Myosine</b> is een motoreiwit dat onder verbruik van ATP kracht levert door langs actinefilamenten te 'lopen'.</p><p>In spiercellen glijden myosine- en actinefilamenten langs elkaar, wat de spier doet samentrekken (het glijdende-filamentmodel).</p>",
  "image_url": "",
  "wiki_title": "Myosin",
  "match": "myosine|myosinefilamenten|myosinefilament"
 },
 "tubuline": {
  "title": "Tubuline",
  "short": "Het eiwit waaruit microtubuli zijn opgebouwd; belangrijk voor celvorm, transport en de mitosespoel.",
  "definition": "<p><b>Tubuline</b> komt voor als α- en β-tubuline, die samen dimeren vormen. Deze polymeriseren tot holle buisjes: de microtubuli.</p><p>Microtubuli bepalen mede de celvorm, dienen als 'rails' voor transport en vormen tijdens de deling de mitosespoel die de chromosomen scheidt.</p>",
  "image_url": "",
  "wiki_title": "Tubulin",
  "match": "tubuline"
 },
 "microtubuli": {
  "title": "Microtubuli",
  "short": "Holle buisjes van tubuline; het stevigste onderdeel van het cytoskelet, sporen voor transport en de mitosespoel.",
  "definition": "<p><b>Microtubuli</b> zijn holle buisjes opgebouwd uit tubuline-dimeren. Ze zijn dynamisch: ze groeien en krimpen aan hun uiteinden.</p><p>Ze geven de cel structuur, vormen de rails voor de motoreiwitten kinesine en dyneïne, en bouwen tijdens de celdeling de mitosespoel.</p>",
  "image_url": "",
  "wiki_title": "Microtubule",
  "match": "microtubuli|microtubulus"
 },
 "intermediaire filamenten": {
  "title": "Intermediaire filamenten",
  "short": "Stevige, touwachtige cytoskeletvezels (zoals keratine) die de cel mechanische trekkracht geven.",
  "definition": "<p><b>Intermediaire (tussen-)filamenten</b> zijn taaie, touwachtige vezels die dikker zijn dan microfilamenten en dunner dan microtubuli. Ze geven cellen mechanische stevigheid.</p><p>Voorbeelden zijn keratine (epitheel), vimentine (bindweefsel), desmine (spier) en lamine (celkern). Ze hechten aan desmosomen.</p>",
  "image_url": "",
  "wiki_title": "Intermediate filament",
  "match": "intermediaire filamenten|intermediair filament"
 },
 "kinesine": {
  "title": "Kinesine",
  "short": "Motoreiwit dat blaasjes en organellen langs microtubuli naar het plusuiteinde (celrand) transporteert.",
  "definition": "<p><b>Kinesine</b> is een motoreiwit dat onder ATP-verbruik lading langs microtubuli vervoert, doorgaans naar het plus-uiteinde (richting celmembraan).</p><p>Samen met dyneïne (dat de andere kant op loopt) verzorgt het het gerichte transport van blaasjes en organellen.</p>",
  "image_url": "",
  "wiki_title": "Kinesin",
  "match": "kinesine"
 },
 "dyneine": {
  "title": "Dyneïne",
  "short": "Motoreiwit dat lading langs microtubuli naar het minuiteinde (celkern) transporteert; drijft ook trilharen aan.",
  "definition": "<p><b>Dyneïne</b> is een motoreiwit dat langs microtubuli naar het min-uiteinde (richting celkern) beweegt, tegengesteld aan kinesine.</p><p>Het verzorgt intracellulair transport en levert de kracht voor de beweging van cilia en flagellen.</p>",
  "image_url": "",
  "wiki_title": "Dynein",
  "match": "dyneine|dyneïne"
 },
 "keratine": {
  "title": "Keratine",
  "short": "Vezelig structuureiwit (intermediair filament) dat opperhuid, haren en nagels stevigheid en waterbestendigheid geeft.",
  "definition": "<p><b>Keratine</b> is een taai, onoplosbaar structuureiwit uit de groep intermediaire filamenten. Keratinocyten maken het aan terwijl ze naar de oppervlakte schuiven.</p><p>In het stratum corneum vormen dode, met keratine gevulde cellen een waterafstotende barrière. Keratine is ook het hoofdbestanddeel van haar en nagels.</p>",
  "image_url": "",
  "wiki_title": "Keratin",
  "match": "keratine"
 },
 "tonofilament": {
  "title": "Tonofilament",
  "short": "Bundels keratine-tussenfilamenten in epitheelcellen die op desmosomen aanhechten en de cel stevigheid geven.",
  "definition": "<p><b>Tonofilamenten</b> zijn bundels intermediaire filamenten van keratine die door het cytoplasma van epitheelcellen lopen en aan de binnenzijde van desmosomen en hemidesmosomen hechten.</p><p>Zo ontstaat een doorlopend mechanisch netwerk door de hele epidermis dat trekkrachten over vele cellen verdeelt.</p>",
  "image_url": "",
  "wiki_title": "Intermediate filament",
  "match": "tonofilament|tonofilamenten"
 },
 "desmosoom": {
  "title": "Desmosoom",
  "short": "Sterke celverbinding (macula adherens) die naburige keratinocyten aan elkaar koppelt voor mechanische stevigheid.",
  "definition": "<p>Een <b>desmosoom</b> is een knoopvormige adhesieverbinding die twee cellen stevig verbindt via cadherines (desmogleïne en desmocolline), verankerd aan het keratine-cytoskelet (tonofilamenten).</p><p>Desmosomen geven weefsel dat aan trekkracht blootstaat, zoals huid, zijn stevigheid. Bij pemphigus vulgaris worden ze door auto-antistoffen aangevallen.</p>",
  "image_url": "",
  "wiki_title": "Desmosome",
  "match": "desmosoom|desmosomen"
 },
 "hemidesmosoom": {
  "title": "Hemidesmosoom",
  "short": "'Half desmosoom' dat basale keratinocyten verankert aan de basaalmembraan onder de epidermis.",
  "definition": "<p>Een <b>hemidesmosoom</b> verankert de basale cellen van de epidermis aan de onderliggende basaalmembraan, vooral via integrine α6β4.</p><p>Anders dan een desmosoom (dat twee cellen verbindt) koppelt het één cel aan de extracellulaire matrix. Verstoring ligt ten grondslag aan bulleus pemfigoïd.</p>",
  "image_url": "",
  "wiki_title": "Hemidesmosome",
  "match": "hemidesmosoom|hemidesmosomen|hemisdesmosoom"
 },
 "tight junctions": {
  "title": "Tight junction",
  "short": "Verbinding die de membranen van naburige cellen dicht afsluit en zo een lekvrije barrière vormt.",
  "definition": "<p>Een <b>tight junction</b> (zonula occludens) sluit de ruimte tussen twee cellen volledig af, zodat er niets ongecontroleerd tussendoor lekt.</p><p>Zo houdt hij bijvoorbeeld darm- en huidbarrières waterdicht en scheidt hij het apicale van het basolaterale membraandeel.</p>",
  "image_url": "",
  "wiki_title": "Tight junction",
  "match": "tight junctions|tight junction"
 },
 "gap junctions": {
  "title": "Gap junction",
  "short": "Kanaaltjes tussen aangrenzende cellen waardoor ionen en kleine moleculen rechtstreeks kunnen overgaan.",
  "definition": "<p>Een <b>gap junction</b> is een kanaalverbinding (van connexinen) die het cytoplasma van twee cellen rechtstreeks verbindt.</p><p>Ionen en kleine moleculen stromen er direct doorheen, wat cellen elektrisch en metabool koppelt — belangrijk in hart- en gladde spier.</p>",
  "image_url": "",
  "wiki_title": "Gap junction",
  "match": "gap junctions|gap junction"
 },
 "adherens junctions": {
  "title": "Adherensverbinding",
  "short": "Celverbinding die actinefilamenten van naburige cellen koppelt via cadherines.",
  "definition": "<p>Een <b>adherensverbinding</b> (adherens junction, zonula adherens) verbindt cellen via cadherines die intracellulair aan het actine-cytoskelet gekoppeld zijn.</p><p>Samen met desmosomen zorgt hij voor mechanische samenhang van epitheel.</p>",
  "image_url": "",
  "wiki_title": "Adherens junction",
  "match": "adherens junctions|adherens junction|adhaerensverbindingen|adherensverbinding|adherensverbindingen"
 },
 "ankerfibril": {
  "title": "Ankerfibril",
  "short": "Vezel van collageen type VII die de basaalmembraan verankert aan de onderliggende dermis.",
  "definition": "<p>Een <b>ankerfibril</b> bestaat uit collageen type VII en loopt van de lamina densa van de basaalmembraan de dermis in.</p><p>Zo verankert hij de epidermis stevig aan de dermis. Defecten veroorzaken de blaarziekte dystrofische epidermolysis bullosa.</p>",
  "image_url": "",
  "wiki_title": "Anchoring fibrils",
  "match": "ankerfibril|ankerfibrillen"
 },
 "autocriene signalering": {
  "title": "Autocriene signalering",
  "short": "De cel scheidt een signaalstof af waarop hij zélf reageert.",
  "definition": "<p>Bij <b>autocriene signalering</b> geeft een cel een signaalmolecuul af dat bindt aan receptoren op diezelfde cel.</p><p>De cel stuurt dus zichzelf. Dit komt onder meer voor bij groeiregulatie en bij tumorcellen die hun eigen groei aanjagen.</p>",
  "image_url": "",
  "wiki_title": "Autocrine signaling",
  "match": "autocriene signalering|autocrien|autocriene secretie|autocriene celsignalering"
 },
 "paracriene signalering": {
  "title": "Paracriene signalering",
  "short": "Een cel scheidt een signaalstof af die alleen op nabijgelegen cellen inwerkt.",
  "definition": "<p>Bij <b>paracriene signalering</b> werkt het afgegeven signaalmolecuul lokaal in op cellen in de directe omgeving.</p><p>De stof wordt snel afgebroken of opgenomen, zodat het effect beperkt blijft tot de buurt. Voorbeeld: histamine bij ontsteking.</p>",
  "image_url": "",
  "wiki_title": "Paracrine signaling",
  "match": "paracriene signalering|paracrien|paracriene secretie|paracriene celsignalering"
 },
 "endocriene signalering": {
  "title": "Endocriene signalering",
  "short": "Klieren geven hormonen af aan het bloed, dat ze naar verre doelorganen vervoert.",
  "definition": "<p>Bij <b>endocriene signalering</b> scheiden endocriene klieren hormonen rechtstreeks in de bloedbaan uit.</p><p>Via het bloed bereiken de hormonen doelcellen elders in het lichaam die de bijbehorende receptor dragen. Het effect is trager maar wijdverbreid.</p>",
  "image_url": "",
  "wiki_title": "Endocrine system",
  "match": "endocriene signalering|endocrien|endocriene secretie|endocriene celsignalering"
 },
 "holocriene secretie": {
  "title": "Holocriene secretie",
  "short": "Secretiewijze waarbij de hele kliercel uiteenvalt en zo zijn inhoud vrijgeeft (talgklier).",
  "definition": "<p>Bij <b>holocriene secretie</b> vult de kliercel zich met product en gaat vervolgens volledig te gronde; de celresten vormen samen het secreet.</p><p>De talgklier (glandula sebacea) is het klassieke voorbeeld: de cel wordt zelf het talg.</p>",
  "image_url": "",
  "wiki_title": "Holocrine",
  "match": "holocriene secretie|holocrien|holocriene signalering"
 },
 "merocriene secretie": {
  "title": "Merocriene secretie",
  "short": "Secretie via exocytose, waarbij de kliercel intact blijft (eccriene zweetklier).",
  "definition": "<p>Bij <b>merocriene (eccriene) secretie</b> geeft de cel zijn product af via exocytose van blaasjes, zonder zelf beschadigd te raken.</p><p>Dit is de meest voorkomende vorm; de eccriene zweetklier werkt zo.</p>",
  "image_url": "",
  "wiki_title": "Merocrine",
  "match": "merocriene secretie|merocrien|merocriene signalering"
 },
 "apocriene secretie": {
  "title": "Apocriene secretie",
  "short": "Secretie waarbij het topje van de kliercel mét product afsnoert (apocriene zweet- en melkklier).",
  "definition": "<p>Bij <b>apocriene secretie</b> snoert het apicale deel van de cel af, samen met wat cytoplasma en het secretieproduct.</p><p>De apocriene zweetklieren (oksel, lies) en de borstklier scheiden zo af.</p>",
  "image_url": "",
  "wiki_title": "Apocrine",
  "match": "apocriene secretie|apocrien|apocriene signalering"
 },
 "flippase": {
  "title": "Flippase",
  "short": "Enzym dat fosfolipiden (zoals fosfatidylserine) van de buiten- naar de binnenkant van de celmembraan verplaatst.",
  "definition": "<p>Een <b>flippase</b> verplaatst onder ATP-verbruik specifieke fosfolipiden naar de cytoplasmatische (binnen)zijde van de membraan.</p><p>Zo houdt de cel fosfatidylserine aan de binnenkant. Verdwijnt die asymmetrie en komt fosfatidylserine buiten, dan is dat een 'eet mij'-signaal bij apoptose.</p>",
  "image_url": "",
  "wiki_title": "Flippase",
  "match": "flippase"
 },
 "scramblase": {
  "title": "Scramblase",
  "short": "Enzym dat fosfolipiden willekeurig tussen beide membraanhelften verplaatst en zo de membraanasymmetrie opheft.",
  "definition": "<p>Een <b>scramblase</b> verplaatst fosfolipiden in beide richtingen tussen de membraanhelften, zonder ATP en zonder voorkeur.</p><p>Bij activatie (bijvoorbeeld tijdens apoptose) brengt het fosfatidylserine naar buiten als signaal voor macrofagen.</p>",
  "image_url": "",
  "wiki_title": "Scramblase",
  "match": "scramblase"
 },
 "fosfatidylserine": {
  "title": "Fosfatidylserine",
  "short": "Fosfolipide dat normaal aan de binnenkant van de membraan zit; naar buiten gekeerd is het een 'eet mij'-signaal.",
  "definition": "<p><b>Fosfatidylserine</b> is een negatief geladen fosfolipide dat door flippase aan de binnenzijde van de celmembraan wordt gehouden.</p><p>Bij apoptose verschijnt het aan de buitenkant en herkennen macrofagen de stervende cel eraan om hem op te ruimen.</p>",
  "image_url": "",
  "wiki_title": "Phosphatidylserine",
  "match": "fosfatidylserine"
 },
 "glycolipide": {
  "title": "Glycolipide",
  "short": "Lipide met een suikergroep aan de buitenkant van de celmembraan; betrokken bij herkenning en bescherming.",
  "definition": "<p>Een <b>glycolipide</b> is een membraanlipide waaraan aan de buitenzijde een suikerketen hangt.</p><p>Samen met glycoproteïnen vormt het de glycocalyx, die een rol speelt bij celherkenning en bescherming van het celoppervlak.</p>",
  "image_url": "",
  "wiki_title": "Glycolipid",
  "match": "glycolipide|glycolipiden"
 },
 "glycoproteine": {
  "title": "Glycoproteïne",
  "short": "Eiwit met aangehechte suikerketens; veel membraan- en secretie-eiwitten zijn geglycosyleerd.",
  "definition": "<p>Een <b>glycoproteïne</b> is een eiwit waaraan tijdens de rijping in ER en Golgi suikerketens zijn gekoppeld (glycosylering).</p><p>Ze zitten veel in de celmembraan en in secreten en spelen een rol bij herkenning, adhesie en bescherming.</p>",
  "image_url": "",
  "wiki_title": "Glycoprotein",
  "match": "glycoproteïne|glycoproteine|glycoproteïnen|glycoproteinen|glycoproteinen"
 },
 "proteoglycaan": {
  "title": "Proteoglycaan",
  "short": "Eiwit met lange glycosaminoglycaan-ketens; waterbindend hoofdbestanddeel van de extracellulaire matrix.",
  "definition": "<p>Een <b>proteoglycaan</b> bestaat uit een kerneiwit met glycosaminoglycaan-ketens (zoals chondroïtinesulfaat). Door hun negatieve lading trekken ze veel water aan.</p><p>Ze vormen een gel-achtige grondsubstantie in bindweefsel en kraakbeen die druk opvangt en waarin vezels zijn ingebed.</p>",
  "image_url": "",
  "wiki_title": "Proteoglycan",
  "match": "proteoglycaan|proteoglycanen"
 },
 "cholesterol": {
  "title": "Cholesterol",
  "short": "Vetachtige stof die de celmembraan stevigheid en de juiste vloeibaarheid geeft en grondstof is voor steroïden.",
  "definition": "<p><b>Cholesterol</b> is een steroïd dat tussen de fosfolipiden van de celmembraan zit en de membraanvloeibaarheid stabiliseert.</p><p>Het is bovendien de grondstof voor steroïdhormonen, vitamine D en galzouten.</p>",
  "image_url": "",
  "wiki_title": "Cholesterol",
  "match": "cholesterol"
 },
 "clathrine": {
  "title": "Clathrine",
  "short": "Eiwit dat een korfje vormt om een stukje membraan en zo blaasjes doet inknoppen bij endocytose.",
  "definition": "<p><b>Clathrine</b> vormt aan de binnenzijde van de membraan een driepotige mandstructuur die een deel van de membraan naar binnen buigt.</p><p>Zo ontstaat een clathrine-omhuld blaasje: het mechanisme achter receptorgemedieerde endocytose.</p>",
  "image_url": "",
  "wiki_title": "Clathrin",
  "match": "clathrine|clathrin"
 },
 "rab eiwit": {
  "title": "Rab-eiwit",
  "short": "Klein GTP-bindend eiwit dat blaasjes naar het juiste doelmembraan dirigeert.",
  "definition": "<p><b>Rab-eiwitten</b> zijn kleine GTPasen die als 'adreslabels' op transportblaasjes werken.</p><p>Ze bepalen naar welk doelmembraan een blaasje gaat en helpen het daar aan te meren, voordat SNARE-eiwitten de fusie voltooien.</p>",
  "image_url": "",
  "wiki_title": "Rab (G-protein)",
  "match": "rab eiwit|rab eiwitten|rab-eiwit"
 },
 "v-snare": {
  "title": "v-SNARE",
  "short": "SNARE-eiwit op het transportblaasje dat met de t-SNARE op het doelmembraan de blaasjesfusie tot stand brengt.",
  "definition": "<p>Een <b>v-SNARE</b> zit op het transportblaasje (vesikel). Het windt zich om de complementaire t-SNARE op het doelmembraan.</p><p>Die koppeling trekt beide membranen tegen elkaar aan, zodat ze fuseren en het blaasje zijn inhoud afgeeft.</p>",
  "image_url": "",
  "wiki_title": "SNARE (protein)",
  "match": "v-snare|v-snare eiwit"
 },
 "t-snare": {
  "title": "t-SNARE",
  "short": "SNARE-eiwit op het doelmembraan (target) dat met de v-SNARE de fusie van een transportblaasje regelt.",
  "definition": "<p>Een <b>t-SNARE</b> zit op het doel- (target)membraan. Samen met de v-SNARE van het aankomende blaasje vormt het een strak SNARE-complex.</p><p>Dat brengt de membranen samen en drijft de fusie aan, waarna de blaasjesinhoud wordt vrijgegeven.</p>",
  "image_url": "",
  "wiki_title": "SNARE (protein)",
  "match": "t-snare|t-snare eiwit"
 },
 "adaptine": {
  "title": "Adaptine",
  "short": "Adaptoreiwit dat clathrine met de te vervoeren lading en de membraan verbindt bij blaasjesvorming.",
  "definition": "<p><b>Adaptine</b> (onderdeel van AP-complexen) koppelt het clathrine-korfje aan de membraan en aan de receptoren van de lading.</p><p>Zo wordt de juiste vracht in het inknoppende clathrine-blaasje opgenomen.</p>",
  "image_url": "",
  "wiki_title": "Adaptin",
  "match": "adaptine|adaptin|adaptine eiwit|adaptin eiwitten"
 },
 "dynamine": {
  "title": "Dynamine",
  "short": "GTPase dat als een ring om de hals van een inknoppend blaasje sluit en het van de membraan afknijpt.",
  "definition": "<p><b>Dynamine</b> is een groot GTP-splitsend eiwit dat zich om de nek van een bijna afgesnoerd clathrine-blaasje wikkelt.</p><p>Door GTP-hydrolyse knijpt het de nek dicht, zodat het blaasje loskomt van de membraan.</p>",
  "image_url": "",
  "wiki_title": "Dynamin",
  "match": "dynamine|dynamin|dynamine eiwit|dynamin eiwitten"
 },
 "endocytose": {
  "title": "Endocytose",
  "short": "Opname van stoffen door de cel via inknopping van de membraan tot een blaasje.",
  "definition": "<p>Bij <b>endocytose</b> stulpt de celmembraan naar binnen en snoert een blaasje af met daarin opgenomen materiaal.</p><p>Varianten zijn fagocytose (grote deeltjes), pinocytose (vloeistof) en receptorgemedieerde endocytose (specifieke moleculen).</p>",
  "image_url": "",
  "wiki_title": "Endocytosis",
  "match": "endocytose"
 },
 "fagocytose": {
  "title": "Fagocytose",
  "short": "Het 'opeten' van grote deeltjes of hele cellen (zoals bacteriën) door een cel via insluiting in een fagosoom.",
  "definition": "<p><b>Fagocytose</b> is een vorm van endocytose waarbij een cel grote deeltjes omsluit, zoals bacteriën, celresten of stofdeeltjes.</p><p>Het gevormde fagosoom versmelt met een lysosoom, waarna de inhoud wordt verteerd. Neutrofielen en macrofagen zijn de belangrijkste fagocyten.</p>",
  "image_url": "",
  "wiki_title": "Phagocytosis",
  "match": "fagocytose"
 },
 "autofagie": {
  "title": "Autofagie",
  "short": "Proces waarbij de cel eigen versleten onderdelen insluit en met lysosomen afbreekt en recyclet.",
  "definition": "<p><b>Autofagie</b> ('zelf-eten') is het proces waarbij de cel eigen organellen of eiwitaggregaten omsluit in een autofagosoom.</p><p>Dat fuseert met een lysosoom, waarna de inhoud wordt afgebroken en hergebruikt — belangrijk bij hongertoestand en kwaliteitsbewaking.</p>",
  "image_url": "",
  "wiki_title": "Autophagy",
  "match": "autofagie"
 },
 "apoptose": {
  "title": "Apoptose",
  "short": "Geprogrammeerde celdood: een geordend 'zelfmoordprogramma' dat de cel netjes opruimt zonder ontsteking.",
  "definition": "<p><b>Apoptose</b> is gecontroleerde celdood. De cel krimpt, het DNA wordt in stukken geknipt en de cel valt uiteen in nette blaasjes (apoptotic bodies).</p><p>Macrofagen ruimen die op zonder ontstekingsreactie. Het is essentieel voor ontwikkeling en het verwijderen van beschadigde cellen.</p>",
  "image_url": "",
  "wiki_title": "Apoptosis",
  "match": "apoptose"
 },
 "necrose": {
  "title": "Necrose",
  "short": "Ongecontroleerde celdood door schade, waarbij de cel opzwelt, openbarst en een ontstekingsreactie uitlokt.",
  "definition": "<p><b>Necrose</b> is celdood door acute schade (zuurstoftekort, toxinen, trauma). De cel zwelt op en de membraan scheurt.</p><p>De vrijkomende celinhoud lokt een ontstekingsreactie uit — anders dan bij de 'nette' apoptose.</p>",
  "image_url": "",
  "wiki_title": "Necrosis",
  "match": "necrose"
 },
 "glycolyse": {
  "title": "Glycolyse",
  "short": "Afbraak van glucose tot pyruvaat in het cytoplasma, met een kleine netto-opbrengst aan ATP en NADH.",
  "definition": "<p><b>Glycolyse</b> splitst in het cytoplasma één glucose in tien stappen tot twee moleculen pyruvaat.</p><p>Het levert netto 2 ATP en 2 NADH op en verloopt zonder zuurstof. Bij aanwezigheid van zuurstof gaat pyruvaat de citroenzuurcyclus in.</p>",
  "image_url": "",
  "wiki_title": "Glycolysis",
  "match": "glycolyse"
 },
 "citroenzuurcyclus": {
  "title": "Citroenzuurcyclus",
  "short": "Kringloop in het mitochondrion die acetyl-CoA volledig oxideert en NADH, FADH₂ en CO₂ oplevert.",
  "definition": "<p>De <b>citroenzuurcyclus</b> (Krebscyclus) vindt plaats in de mitochondriale matrix. Acetyl-CoA gaat de cyclus in en wordt stapsgewijs geoxideerd.</p><p>Er ontstaan NADH en FADH₂ (die de elektronentransportketen voeden), wat GTP/ATP en CO₂ als afvalstof.</p>",
  "image_url": "",
  "wiki_title": "Citric acid cycle",
  "match": "citroenzuurcyclus|krebscyclus"
 },
 "elektrontransportketen": {
  "title": "Elektronentransportketen",
  "short": "Reeks eiwitcomplexen in het mitochondrion die met NADH/FADH₂ een protongradiënt opbouwt voor ATP-synthese.",
  "definition": "<p>De <b>elektronentransportketen</b> in de binnenste mitochondriale membraan geeft elektronen van NADH en FADH₂ door via een reeks complexen naar zuurstof.</p><p>Daarbij worden protonen naar buiten gepompt; de terugstroom door ATP-synthase maakt ATP (oxidatieve fosforylering).</p>",
  "image_url": "",
  "wiki_title": "Electron transport chain",
  "match": "elektrontransportketen|elektronentransportketen"
 },
 "oxidatieve fosforylering": {
  "title": "Oxidatieve fosforylering",
  "short": "Vorming van het grootste deel van de ATP via de elektronentransportketen en ATP-synthase in het mitochondrion.",
  "definition": "<p>Bij <b>oxidatieve fosforylering</b> drijft de protongradiënt van de elektronentransportketen het enzym ATP-synthase aan.</p><p>Zo wordt uit ADP en fosfaat ATP gevormd — de belangrijkste ATP-bron van de cel, waarvoor zuurstof nodig is.</p>",
  "image_url": "",
  "wiki_title": "Oxidative phosphorylation",
  "match": "oxidatieve fosforylering"
 },
 "acetyl-coa": {
  "title": "Acetyl-CoA",
  "short": "Centrale metaboliet die een acetylgroep de citroenzuurcyclus in brengt; knooppunt van suiker-, vet- en eiwitafbraak.",
  "definition": "<p><b>Acetyl-CoA</b> ontstaat uit pyruvaat (uit glycolyse), vetzuren en sommige aminozuren.</p><p>Het draagt zijn acetylgroep de citroenzuurcyclus in en is zo het centrale knooppunt van het energiemetabolisme.</p>",
  "image_url": "",
  "wiki_title": "Acetyl-CoA",
  "match": "acetyl-coa|acetyl coa"
 },
 "pyruvaat": {
  "title": "Pyruvaat",
  "short": "Eindproduct van de glycolyse; gaat bij zuurstof over in acetyl-CoA, zonder zuurstof in lactaat.",
  "definition": "<p><b>Pyruvaat</b> (pyrodruivenzuur) is het eindproduct van de glycolyse.</p><p>Met zuurstof wordt het in het mitochondrion omgezet tot acetyl-CoA voor de citroenzuurcyclus; zonder zuurstof wordt het via gisting lactaat.</p>",
  "image_url": "",
  "wiki_title": "Pyruvic acid",
  "match": "pyruvaat|pyrodruivenzuur"
 },
 "nadh": {
  "title": "NADH",
  "short": "Elektronendrager die de citroenzuurcyclus 'oplaadt' en zijn elektronen aan de elektronentransportketen levert.",
  "definition": "<p><b>NADH</b> is de gereduceerde vorm van NAD⁺. Het ontstaat als tijdens glycolyse en citroenzuurcyclus elektronen worden opgenomen.</p><p>In het mitochondrion staat NADH die elektronen weer af aan de elektronentransportketen, wat ATP oplevert.</p>",
  "image_url": "",
  "wiki_title": "Nicotinamide adenine dinucleotide",
  "match": "nadh"
 },
 "citraat": {
  "title": "Citraat",
  "short": "Eerste product van de citroenzuurcyclus, gevormd uit acetyl-CoA en oxaalacetaat.",
  "definition": "<p><b>Citraat</b> (citroenzuur) ontstaat wanneer acetyl-CoA in de citroenzuurcyclus aan oxaalacetaat wordt gekoppeld.</p><p>Het is de eerste stap van de cyclus; de naamgever citroenzuurcyclus verwijst ernaar.</p>",
  "image_url": "",
  "wiki_title": "Citric acid",
  "match": "citraat"
 },
 "primaire structuur": {
  "title": "Primaire structuur",
  "short": "De volgorde (sequentie) van aminozuren in een eiwitketen.",
  "definition": "<p>De <b>primaire structuur</b> van een eiwit is simpelweg de lineaire volgorde van de aminozuren, vastgelegd door het gen.</p><p>Deze sequentie bepaalt uiteindelijk hoe het eiwit zich vouwt en dus zijn functie.</p>",
  "image_url": "",
  "wiki_title": "Protein primary structure",
  "match": "primaire structuur"
 },
 "secundaire structuur": {
  "title": "Secundaire structuur",
  "short": "Lokale, regelmatige vouwing van de eiwitketen, zoals de α-helix en de β-sheet.",
  "definition": "<p>De <b>secundaire structuur</b> is de lokale ruimtelijke vouwing van de eiwitketen, gestabiliseerd door waterstofbruggen tussen de ruggengraatatomen.</p><p>De belangrijkste vormen zijn de α-helix en de β-sheet (β-plaat).</p>",
  "image_url": "",
  "wiki_title": "Protein secondary structure",
  "match": "secundaire structuur"
 },
 "tertiaire structuur": {
  "title": "Tertiaire structuur",
  "short": "De volledige driedimensionale vouwing van één eiwitketen.",
  "definition": "<p>De <b>tertiaire structuur</b> is de totale 3D-vorm van één polypeptideketen, ontstaan door interacties tussen de zijketens (o.a. disulfidebruggen, hydrofobe interacties).</p><p>Deze vouwing bepaalt de functie; ontvouwing (denaturatie) maakt het eiwit inactief.</p>",
  "image_url": "",
  "wiki_title": "Protein tertiary structure",
  "match": "tertiaire structuur"
 },
 "quaternaire structuur": {
  "title": "Quaternaire structuur",
  "short": "Het samengaan van meerdere gevouwen eiwitketens (subunits) tot één functioneel complex.",
  "definition": "<p>De <b>quaternaire structuur</b> beschrijft hoe meerdere gevouwen ketens (subunits) samen één functioneel eiwit vormen.</p><p>Hemoglobine, met zijn vier ketens, is een klassiek voorbeeld.</p>",
  "image_url": "",
  "wiki_title": "Protein quaternary structure",
  "match": "quaternaire structuur"
 },
 "glycosylering": {
  "title": "Glycosylering",
  "short": "Post-translationele toevoeging van suikerketens aan een eiwit, vooral in ER en Golgi.",
  "definition": "<p><b>Glycosylering</b> is het aanhechten van suikerketens aan een eiwit (of lipide), voornamelijk in het endoplasmatisch reticulum en het Golgi-complex.</p><p>Het beïnvloedt vouwing, stabiliteit en herkenning; het levert glycoproteïnen en glycolipiden op.</p>",
  "image_url": "",
  "wiki_title": "Glycosylation",
  "match": "glycosylering|glycosylatie"
 },
 "fosforylering": {
  "title": "Fosforylering",
  "short": "Toevoeging van een fosfaatgroep aan een eiwit; een veelgebruikte aan/uit-schakelaar van eiwitactiviteit.",
  "definition": "<p><b>Fosforylering</b> is het koppelen van een fosfaatgroep aan een eiwit door een kinase. Een fosfatase haalt hem er weer af.</p><p>Zo schakelen cellen eiwitten razendsnel aan of uit — de basis van veel signaaltransductie.</p>",
  "image_url": "",
  "wiki_title": "Phosphorylation",
  "match": "fosforylering|fosforylatie"
 },
 "prenylering": {
  "title": "Prenylering",
  "short": "Aanhechting van een lipidenstaart aan een eiwit zodat het in de celmembraan kan verankeren.",
  "definition": "<p><b>Prenylering</b> koppelt een hydrofobe isoprenoïdgroep (farnesyl of geranylgeranyl) aan een eiwit.</p><p>De vetstaart verankert het eiwit in de membraan — belangrijk voor o.a. Ras-signaaleiwitten.</p>",
  "image_url": "",
  "wiki_title": "Prenylation",
  "match": "prenylering"
 },
 "stratum basale": {
  "title": "Stratum basale",
  "short": "De onderste laag van de epidermis waar de keratinocyten zich delen; bevat ook melanocyten en Merkelcellen.",
  "definition": "<p>Het <b>stratum basale</b> is de basale (onderste) cellaag van de epidermis, verankerd aan de basaalmembraan.</p><p>Hier delen de stamcellen van de keratinocyten zich; de dochtercellen schuiven daarna omhoog. Ook melanocyten en cellen van Merkel liggen hier.</p>",
  "image_url": "",
  "wiki_title": "Stratum basale",
  "match": "stratum basale"
 },
 "stratum spinosum": {
  "title": "Stratum spinosum",
  "short": "'Stekellaag' van de epidermis waar keratinocyten met veel desmosomen stevig verbonden zijn.",
  "definition": "<p>Het <b>stratum spinosum</b> ligt boven het stratum basale. De keratinocyten zijn er via talrijke desmosomen verbonden, wat ze na fixatie een stekelig aanzien geeft.</p><p>Hier bevinden zich ook de Langerhanscellen van het immuunsysteem.</p>",
  "image_url": "",
  "wiki_title": "Stratum spinosum",
  "match": "stratum spinosum"
 },
 "stratum granulosum": {
  "title": "Stratum granulosum",
  "short": "Korrellaag waar keratinocyten keratohyaline-korrels vormen en beginnen af te sterven.",
  "definition": "<p>In het <b>stratum granulosum</b> vullen de keratinocyten zich met keratohyaline-korrels en geven ze lipiden af die de huid waterdicht maken.</p><p>De cellen verliezen hier hun kern en organellen: het begin van de verhoorning.</p>",
  "image_url": "",
  "wiki_title": "Stratum granulosum",
  "match": "stratum granulosum"
 },
 "stratum corneum": {
  "title": "Stratum corneum",
  "short": "De buitenste hoornlaag van dode, met keratine gevulde cellen; de eigenlijke huidbarrière.",
  "definition": "<p>Het <b>stratum corneum</b> is de buitenste laag van de epidermis: platte, dode cellen (corneocyten) vol keratine, ingebed in een lipidenlaag.</p><p>Deze 'bakstenen-en-cement'-structuur vormt de belangrijkste barrière tegen uitdroging en indringers. De cellen schilferen geleidelijk af.</p>",
  "image_url": "",
  "wiki_title": "Stratum corneum",
  "match": "stratum corneum"
 },
 "stratum lucidum": {
  "title": "Stratum lucidum",
  "short": "Dunne, heldere extra hoornlaag die alleen in de dikke huid van handpalmen en voetzolen voorkomt.",
  "definition": "<p>Het <b>stratum lucidum</b> is een dunne, doorschijnende laag tussen stratum granulosum en corneum.</p><p>Het komt alleen voor in de 'dikke huid' van handpalmen en voetzolen.</p>",
  "image_url": "",
  "wiki_title": "Stratum lucidum",
  "match": "stratum lucidum"
 },
 "epidermis": {
  "title": "Epidermis",
  "short": "De opperhuid: het bovenste, uit meerlagig verhoornend plaveiselepitheel opgebouwde deel van de huid.",
  "definition": "<p>De <b>epidermis</b> (opperhuid) is de buitenste huidlaag, opgebouwd uit meerlagig verhoornend plaveiselepitheel zonder bloedvaten.</p><p>Ze bestaat vooral uit keratinocyten in opeenvolgende lagen (basale → hoornlaag) en levert de beschermende barrière.</p>",
  "image_url": "",
  "wiki_title": "Epidermis",
  "match": "epidermis|de epidermis"
 },
 "dermis": {
  "title": "Dermis",
  "short": "De lederhuid onder de epidermis: bindweefsel met collageen, bloedvaten, zenuwen, klieren en haarfollikels.",
  "definition": "<p>De <b>dermis</b> (lederhuid) ligt onder de epidermis en bestaat uit bindweefsel met collageen en elastine.</p><p>Ze bevat bloedvaten, zenuwuiteinden, zweet- en talgklieren en haarfollikels en geeft de huid stevigheid en elasticiteit. Men onderscheidt een papillaire en een reticulaire dermis.</p>",
  "image_url": "",
  "wiki_title": "Dermis",
  "match": "dermis|de dermis|papillaire dermis|reticulaire dermis"
 },
 "subcutis": {
  "title": "Subcutis",
  "short": "Het onderhuidse vetweefsel dat isoleert, energie opslaat en als stootkussen dient.",
  "definition": "<p>De <b>subcutis</b> (onderhuids bindweefsel, hypodermis) is de diepste laag en bestaat vooral uit vetweefsel.</p><p>Ze isoleert tegen kou, slaat energie op, dempt stoten en verbindt de huid met onderliggende structuren.</p>",
  "image_url": "",
  "wiki_title": "Subcutaneous tissue",
  "match": "subcutis|de subcutis|hypodermis"
 },
 "keratohyaline": {
  "title": "Keratohyaline",
  "short": "Eiwitkorrels in het stratum granulosum die bij de verhoorning van keratinocyten betrokken zijn.",
  "definition": "<p><b>Keratohyaline</b>-korrels verschijnen in de keratinocyten van het stratum granulosum.</p><p>Ze bevatten o.a. profilaggrine en dragen bij aan het samenpakken van keratinefilamenten tijdens de verhoorning.</p>",
  "image_url": "",
  "wiki_title": "Keratohyalin",
  "match": "keratohyaline|keratohyalien"
 },
 "lamina lucida": {
  "title": "Lamina lucida",
  "short": "Heldere zone van de basaalmembraan tussen de basale keratinocyten en de lamina densa.",
  "definition": "<p>De <b>lamina lucida</b> is de elektronenlichte laag van de basaalmembraan, direct onder de basale keratinocyten.</p><p>De hemidesmosomen verankeren hier de epidermis; het is een kwetsbaar 'scheurvlak' bij bepaalde blaarziekten.</p>",
  "image_url": "",
  "wiki_title": "Basement membrane",
  "match": "lamina lucida"
 },
 "keratinocyt": {
  "title": "Keratinocyt",
  "short": "De hoofdcel van de epidermis; produceert keratine en bouwt al opschuivend de huidbarrière op.",
  "definition": "<p>De <b>keratinocyt</b> maakt ongeveer 90% van de epidermiscellen uit. Vanuit het stratum basale schuift hij omhoog terwijl hij steeds meer keratine vormt.</p><p>Bovenaan aangekomen is hij een dode, verhoornde cel die de barrière vormt en uiteindelijk afschilfert.</p>",
  "image_url": "",
  "wiki_title": "Keratinocyte",
  "match": "keratinocyt|keratinocyten"
 },
 "melanocyt": {
  "title": "Melanocyt",
  "short": "Pigmentcel in het stratum basale die melanine maakt en dit aan omliggende keratinocyten afgeeft.",
  "definition": "<p>De <b>melanocyt</b> ligt in het stratum basale en produceert in melanosomen het pigment melanine.</p><p>Via uitlopers geeft hij melanine af aan naburige keratinocyten, die er hun kern mee tegen UV-schade beschermen. Verschillen in huidskleur berusten op de activiteit, niet het aantal, van melanocyten.</p>",
  "image_url": "",
  "wiki_title": "Melanocyte",
  "match": "melanocyt|melanocyten"
 },
 "cel van Merkel": {
  "title": "Cel van Merkel",
  "short": "Mechanoreceptorcel in de basale epidermis, betrokken bij de fijne tastzin.",
  "definition": "<p>De <b>cel van Merkel</b> ligt in het stratum basale, vaak bij een zenuwuiteinde waarmee hij een Merkel-tastschijf vormt, en reageert op lichte druk en textuur.</p><p>Merkelcellen zijn belangrijk voor de fijne tastzin. De zeldzame, agressieve tumor die ervan uitgaat heet het merkelcelcarcinoom.</p>",
  "image_url": "",
  "wiki_title": "Merkel cell",
  "match": "cel van merkel|cellen van merkel|merkel cel|merkelcel"
 },
 "Langerhanscel": {
  "title": "Langerhanscel",
  "short": "Dendritische immuuncel in de epidermis die antigenen opvangt en aan T-cellen presenteert.",
  "definition": "<p>De <b>Langerhanscel</b> is een dendritische cel, vooral in het stratum spinosum. Hij vangt binnendringende antigenen op.</p><p>Vervolgens migreert hij naar de lymfeklier en presenteert het antigeen aan T-lymfocyten — de schakel tussen huid en afweer.</p>",
  "image_url": "",
  "wiki_title": "Langerhans cell",
  "match": "langerhanscel|langerhanscellen|langerhans cel|langerhans cellen|cellen van langerhans"
 },
 "fibroblast": {
  "title": "Fibroblast",
  "short": "De belangrijkste bindweefselcel; produceert collageen, elastine en de overige extracellulaire matrix.",
  "definition": "<p>De <b>fibroblast</b> is de meest voorkomende cel in bindweefsel en de dermis. Hij maakt de vezels (collageen, elastine) en de grondsubstantie aan.</p><p>Bij wondgenezing migreren fibroblasten naar de wond, vormen nieuw matrixmateriaal en kunnen als myofibroblast de wond samentrekken.</p>",
  "image_url": "",
  "wiki_title": "Fibroblast",
  "match": "fibroblast|fibroblasten"
 },
 "mestcel": {
  "title": "Mestcel",
  "short": "Weefselcel vol histaminekorrels die bij allergie en ontsteking degranuleert.",
  "definition": "<p>De <b>mestcel</b> (mastcel) zit in de dermis en andere weefsels en is volgepakt met korrels vol histamine en andere ontstekingsmediatoren.</p><p>Bij binding van allergenen aan IgE op zijn oppervlak stort hij zijn korrels uit (degranulatie), wat jeuk, roodheid en zwelling geeft.</p>",
  "image_url": "",
  "wiki_title": "Mast cell",
  "match": "mestcel|mestcellen|mastcel"
 },
 "melanine": {
  "title": "Melanine",
  "short": "Bruinzwart pigment dat de huid kleurt en tegen UV-straling beschermt.",
  "definition": "<p><b>Melanine</b> wordt in melanocyten gevormd uit tyrosine (met het enzym tyrosinase) en opgeslagen in melanosomen.</p><p>Het absorbeert UV-straling en beschermt zo het DNA van de huidcellen. Er bestaan een bruinzwarte (eumelanine) en een roodgele (feomelanine) variant.</p>",
  "image_url": "",
  "wiki_title": "Melanin",
  "match": "melanine"
 },
 "melanosoom": {
  "title": "Melanosoom",
  "short": "Blaasje in de melanocyt waarin melanine wordt gemaakt en opgeslagen.",
  "definition": "<p>Een <b>melanosoom</b> is een gespecialiseerd organel in de melanocyt waarin melanine wordt gesynthetiseerd en opgeslagen.</p><p>Rijpe melanosomen worden via de uitlopers van de melanocyt aan keratinocyten afgegeven. Het aantal en de rijping bepalen de huidskleur.</p>",
  "image_url": "",
  "wiki_title": "Melanosome",
  "match": "melanosoom|melanosomen"
 },
 "filaggrine": {
  "title": "Filaggrine",
  "short": "Eiwit dat keratinefilamenten bundelt en afbraakproducten levert die de huid vocht vasthouden.",
  "definition": "<p><b>Filaggrine</b> bundelt in de bovenste epidermislagen de keratinefilamenten tot stevige bundels.</p><p>De afbraakproducten vormen de 'natural moisturizing factor' die vocht vasthoudt. Een filaggrine-gendefect is een belangrijke oorzaak van constitutioneel eczeem (atopische dermatitis).</p>",
  "image_url": "",
  "wiki_title": "Filaggrin",
  "match": "filaggrine|filagrine"
 },
 "neutrofiele granulocyt": {
  "title": "Neutrofiele granulocyt",
  "short": "Meest voorkomende witte bloedcel en eerste verdedigingslinie tegen bacteriën via fagocytose.",
  "definition": "<p>De <b>neutrofiele granulocyt</b> is de talrijkste leukocyt, met een gelobde kern, en als eerste ter plaatse bij een bacteriële infectie.</p><p>Hij ruimt bacteriën op door fagocytose en enzymen; dode neutrofielen vormen samen met bacterieresten de pus.</p>",
  "image_url": "",
  "wiki_title": "Neutrophil",
  "match": "neutrofiele granulocyt|neutrofiele granulocyten"
 },
 "eosinofiele granulocyt": {
  "title": "Eosinofiele granulocyt",
  "short": "Witte bloedcel met rood-kleurende korrels, actief bij afweer tegen parasieten en bij allergie.",
  "definition": "<p>De <b>eosinofiele granulocyt</b> heeft korrels die met eosine roodroze aankleuren en meestal een tweelobbige kern.</p><p>Hij is betrokken bij de afweer tegen wormparasieten en bij allergische processen zoals astma en eczeem; het aantal is dan vaak verhoogd.</p>",
  "image_url": "",
  "wiki_title": "Eosinophil",
  "match": "eosinofiele granulocyt|eosinofiele granulocyten"
 },
 "basofiele granulocyt": {
  "title": "Basofiele granulocyt",
  "short": "Zeldzaamste witte bloedcel; komt met histamine-korrels op voor allergie en ontsteking, verwant aan de mestcel.",
  "definition": "<p>De <b>basofiele granulocyt</b> is de zeldzaamste leukocyt. Zijn korrels kleuren met basische kleurstoffen donker aan en bevatten histamine en heparine.</p><p>Net als de mestcel speelt hij een rol bij allergische reacties en ontsteking.</p>",
  "image_url": "",
  "wiki_title": "Basophil",
  "match": "basofiele granulocyt|basofiele granulocyten"
 },
 "monocyt": {
  "title": "Monocyt",
  "short": "Grootste witte bloedcel; verlaat het bloed en rijpt in de weefsels uit tot macrofaag of dendritische cel.",
  "definition": "<p>De <b>monocyt</b> is de grootste circulerende leukocyt, met een niervormige kern. Hij circuleert enkele dagen en migreert dan de weefsels in.</p><p>Daar differentieert hij tot macrofaag of dendritische cel, die pathogenen fagocyteren en antigenen presenteren.</p>",
  "image_url": "",
  "wiki_title": "Monocyte",
  "match": "monocyt|monocyten"
 },
 "macrofaag": {
  "title": "Macrofaag",
  "short": "Grote fagocyt in de weefsels die pathogenen en celresten opruimt en antigenen presenteert.",
  "definition": "<p>De <b>macrofaag</b> ontstaat uit een monocyt die het weefsel is binnengegaan. Hij fagocyteert bacteriën, dode cellen en afval.</p><p>Als antigeenpresenterende cel activeert hij ook T-cellen en scheidt hij ontstekingsmediatoren uit. In de huid heten verwante cellen histiocyten.</p>",
  "image_url": "",
  "wiki_title": "Macrophage",
  "match": "macrofaag|macrofagen"
 },
 "lymfocyt": {
  "title": "Lymfocyt",
  "short": "Witte bloedcel van de specifieke afweer; omvat de B-cellen (antistoffen) en T-cellen.",
  "definition": "<p>De <b>lymfocyt</b> is de sleutelcel van het adaptieve (specifieke) immuunsysteem. B-lymfocyten maken antistoffen; T-lymfocyten doden geïnfecteerde cellen of sturen de afweer aan.</p><p>Lymfocyten circuleren tussen bloed, lymfe en lymfoïde organen.</p>",
  "image_url": "",
  "wiki_title": "Lymphocyte",
  "match": "lymfocyt|lymfocyten"
 },
 "plasmacel": {
  "title": "Plasmacel",
  "short": "Uit een B-cel gerijpte cel die grote hoeveelheden antistoffen (antilichamen) produceert.",
  "definition": "<p>De <b>plasmacel</b> is een geactiveerde, uitgerijpte B-lymfocyt. Zijn sterk ontwikkelde ruw endoplasmatisch reticulum maakt hem tot een antistoffabriek.</p><p>Hij scheidt grote hoeveelheden specifieke antilichamen af tegen één antigeen.</p>",
  "image_url": "",
  "wiki_title": "Plasma cell",
  "match": "plasmacel|plasmacellen"
 },
 "thymus": {
  "title": "Thymus",
  "short": "Lymfoïd orgaan achter het borstbeen waar T-lymfocyten uitrijpen en geselecteerd worden.",
  "definition": "<p>De <b>thymus</b> (zwezerik) ligt achter het borstbeen. Hier rijpen T-lymfocyten uit en worden ze getest op nut en veiligheid (positieve en negatieve selectie).</p><p>De thymus is het actiefst in de jeugd en neemt daarna geleidelijk af.</p>",
  "image_url": "",
  "wiki_title": "Thymus",
  "match": "thymus"
 },
 "milt": {
  "title": "Milt",
  "short": "Lymfoïd orgaan dat oude bloedcellen afbreekt en bloedgedragen ziekteverwekkers filtert.",
  "definition": "<p>De <b>milt</b> filtert het bloed: de rode pulpa ruimt versleten erytrocyten op, de witte pulpa herbergt lymfocyten voor de afweer tegen bloedgedragen pathogenen.</p><p>Ook dient de milt als bloedreservoir.</p>",
  "image_url": "",
  "wiki_title": "Spleen",
  "match": "milt"
 },
 "beenmerg": {
  "title": "Beenmerg",
  "short": "Weefsel in de holten van botten waar alle bloedcellen worden gevormd (hematopoëse).",
  "definition": "<p>Het <b>beenmerg</b> vult de holten van botten. In het rode beenmerg vindt de hematopoëse plaats: de vorming van rode en witte bloedcellen en bloedplaatjes uit stamcellen.</p><p>Het is tevens de plaats waar B-lymfocyten uitrijpen.</p>",
  "image_url": "",
  "wiki_title": "Bone marrow",
  "match": "beenmerg"
 },
 "lymfeklier": {
  "title": "Lymfeklier",
  "short": "Filterstation in de lymfebaan waar antigenen worden gepresenteerd en de afweerreactie op gang komt.",
  "definition": "<p>De <b>lymfeklier</b> filtert de lymfe en is een ontmoetingsplaats voor antigeenpresenterende cellen en lymfocyten.</p><p>Hier worden T- en B-cellen geactiveerd; bij infectie zwellen lymfeklieren op doordat de lymfocyten zich vermenigvuldigen.</p>",
  "image_url": "",
  "wiki_title": "Lymph node",
  "match": "lymfeklier|lymfeklieren|lymfklier|lymfklieren"
 },
 "meerlagig plaveiselepitheel": {
  "title": "Meerlagig plaveiselepitheel",
  "short": "Epitheel van meerdere lagen platte cellen; beschermt tegen mechanische belasting (o.a. de opperhuid).",
  "definition": "<p><b>Meerlagig plaveiselepitheel</b> bestaat uit meerdere cellagen met bovenop platte (plaveisel)cellen.</p><p>Het is bestand tegen slijtage en komt voor waar veel mechanische belasting is: epidermis, mondholte, slokdarm. In de huid is het verhoornd.</p>",
  "image_url": "",
  "wiki_title": "Stratified squamous epithelium",
  "match": "meerlagig plaveiselepitheel"
 },
 "overgangsepitheel": {
  "title": "Overgangsepitheel",
  "short": "Rekbaar epitheel (urotheel) dat van vorm verandert bij vullen en legen, o.a. in de blaas.",
  "definition": "<p><b>Overgangsepitheel</b> (urotheel) kan uitrekken en samentrekken: de cellen worden platter als het orgaan zich vult.</p><p>Het bekleedt de urinewegen, zoals de blaas, en is daar ook een waterdichte barrière.</p>",
  "image_url": "",
  "wiki_title": "Transitional epithelium",
  "match": "overgangsepitheel"
 },
 "meerrijig epitheel": {
  "title": "Meerrijig epitheel",
  "short": "Eenlagig epitheel waarvan de kernen op verschillende hoogtes liggen, waardoor het meerlagig lijkt.",
  "definition": "<p><b>Meerrijig (pseudomeerlagig) epitheel</b> lijkt uit meerdere lagen te bestaan doordat de celkernen op verschillende hoogtes zitten, maar alle cellen raken de basaalmembraan.</p><p>Het komt vaak trilhaardragend voor in de luchtwegen.</p>",
  "image_url": "",
  "wiki_title": "Pseudostratified columnar epithelium",
  "match": "meerrijig epitheel|meerrijïg epitheel"
 },
 "collageen": {
  "title": "Collageen",
  "short": "Sterkste structuureiwit van het lichaam; hoofdbestanddeel van bindweefsel, dermis, pezen en bot.",
  "definition": "<p><b>Collageen</b> is het meest voorkomende eiwit in het lichaam en vormt sterke, drievoudig gewonden vezels.</p><p>In de dermis geeft het de huid trekvastheid; fibroblasten maken het aan. Voor de aanmaak is vitamine C nodig (hydroxylering van proline).</p>",
  "image_url": "",
  "wiki_title": "Collagen",
  "match": "collageen"
 },
 "elastine": {
  "title": "Elastine",
  "short": "Rekbaar bindweefseleiwit dat huid, longen en bloedvaten na uitrekking hun vorm laat hervinden.",
  "definition": "<p><b>Elastine</b> vormt elastische vezels die kunnen uitrekken en daarna weer terugveren.</p><p>Het geeft de huid, longen en slagaderwanden hun elasticiteit. Afname van elastine draagt bij aan huidveroudering en rimpels.</p>",
  "image_url": "",
  "wiki_title": "Elastin",
  "match": "elastine"
 },
 "macula": {
  "title": "Macula",
  "short": "Vlakke, niet-voelbare huidverandering die alleen in kleur verschilt (een 'vlek').",
  "definition": "<p>Een <b>macula</b> is een plat, met de vinger niet-voelbaar plekje dat zich alleen door kleur onderscheidt van de omgeving.</p><p>Voorbeelden zijn een sproet of een café-au-lait-vlek. Wordt hij groter dan ~1 cm, dan spreekt men van een patch.</p>",
  "image_url": "",
  "wiki_title": "Skin condition",
  "match": "macula|maculae"
 },
 "papula": {
  "title": "Papula",
  "short": "Klein, vast, verheven en voelbaar huidknobbeltje (< ~1 cm).",
  "definition": "<p>Een <b>papula</b> (papel) is een klein, stevig, verheven bultje kleiner dan ongeveer 1 cm dat je kunt voelen.</p><p>Voorbeelden zijn een insectenbeet-reactie of de bultjes bij acne. Meerdere versmolten papels vormen een plaque.</p>",
  "image_url": "",
  "wiki_title": "Papule",
  "match": "papula|papel|papels|papula's|papula’s|papels"
 },
 "plaque": {
  "title": "Plaque",
  "short": "Verheven, plateauvormige huidafwijking groter dan ~1 cm, vaak door samenvloeien van papels.",
  "definition": "<p>Een <b>plaque</b> is een verheven, afgeplatte laesie groter dan ongeveer 1 cm — breder dan hoog.</p><p>Ze ontstaat vaak door het samenvloeien van papels en is typisch voor psoriasis.</p>",
  "image_url": "",
  "wiki_title": "Skin condition",
  "match": "plaque|plaques"
 },
 "nodulus": {
  "title": "Nodulus",
  "short": "Vaste, verheven en voelbare knobbel die dieper in de huid reikt dan een papel (> ~1 cm).",
  "definition": "<p>Een <b>nodulus</b> (nodus, knobbel) is een stevige, verheven laesie die groter is dan een papel en dieper in de dermis of subcutis reikt.</p><p>Voorbeelden zijn een dermatofibroom of sommige huidtumoren.</p>",
  "image_url": "",
  "wiki_title": "Nodule (medicine)",
  "match": "nodulus|nodus|noduli|nodi"
 },
 "vesikel": {
  "title": "Vesikel",
  "short": "Klein, met helder vocht gevuld blaasje in de huid (< ~1 cm).",
  "definition": "<p>Een <b>vesikel</b> (vesicula) is een klein blaasje gevuld met helder vocht, kleiner dan ongeveer 1 cm.</p><p>Vesikels komen voor bij o.a. herpes, waterpokken en acuut eczeem. Een groter blaasje heet een bulla.</p>",
  "image_url": "",
  "wiki_title": "Blister",
  "match": "vesikel|vesikels|vesicula|vesiculae"
 },
 "bulla": {
  "title": "Bulla",
  "short": "Groot, met vocht gevuld blaar in de huid (> ~1 cm).",
  "definition": "<p>Een <b>bulla</b> is een blaar gevuld met vocht die groter is dan ongeveer 1 cm.</p><p>Bullae komen voor bij brandwonden, bulleus pemfigoïd en pemphigus. Een kleiner exemplaar heet een vesikel.</p>",
  "image_url": "",
  "wiki_title": "Blister",
  "match": "bulla|bullae"
 },
 "pustula": {
  "title": "Pustula",
  "short": "Met pus gevuld blaasje in de huid (een 'puistje').",
  "definition": "<p>Een <b>pustula</b> (pustel) is een verheven blaasje gevuld met pus (dode neutrofielen).</p><p>Pustels kunnen steriel zijn (psoriasis pustulosa) of door bacteriën ontstaan; ze zijn kenmerkend voor acne.</p>",
  "image_url": "",
  "wiki_title": "Pustule",
  "match": "pustula|pustel|pustels|pustula|pustulae"
 },
 "urtica": {
  "title": "Urtica",
  "short": "Vluchtige, jeukende, verheven zwelling van de huid — een 'galbult' of kwaddel.",
  "definition": "<p>Een <b>urtica</b> (kwaddel, galbult) is een verheven, bleekroze zwelling door vochtophoping in de dermis, meestal sterk jeukend.</p><p>Ze ontstaat door histamine-afgifte (netelroos/urticaria) en verdwijnt doorgaans binnen 24 uur weer.</p>",
  "image_url": "",
  "wiki_title": "Hives",
  "match": "urtica|urticae"
 },
 "crusta": {
  "title": "Crusta",
  "short": "Korstje van ingedroogd wondvocht, bloed of pus op het huidoppervlak.",
  "definition": "<p>Een <b>crusta</b> (korst) is opgedroogd exsudaat — wondvocht, bloed of pus — op de huid.</p><p>Het is een secundaire efflorescentie die ontstaat nadat een blaasje of wondje is opengegaan.</p>",
  "image_url": "",
  "wiki_title": "Crust (dermatology)",
  "match": "crusta|crustae|korst"
 },
 "squama": {
  "title": "Squama",
  "short": "Zichtbare hoornschilfer door versnelde of gestoorde verhoorning van de opperhuid.",
  "definition": "<p>Een <b>squama</b> (schilfer) is een loskomend plaatje hoorncellen van het stratum corneum.</p><p>Overmatige schilfering is typerend voor psoriasis en ichthyosis.</p>",
  "image_url": "",
  "wiki_title": "Desquamation",
  "match": "squama|squamae|schilfer|schilfering"
 },
 "erosie": {
  "title": "Erosie",
  "short": "Oppervlakkig huiddefect beperkt tot de epidermis, dat zonder litteken geneest.",
  "definition": "<p>Een <b>erosie</b> is een oppervlakkig verlies van epidermis, bijvoorbeeld nadat een blaasje is opengegaan.</p><p>Omdat de dermis intact blijft, geneest een erosie zonder litteken.</p>",
  "image_url": "",
  "wiki_title": "Erosion (dermatology)",
  "match": "erosie|erosies"
 },
 "ulcus": {
  "title": "Ulcus",
  "short": "Diep huiddefect tot in de dermis of dieper, dat met een litteken geneest (een 'zweer').",
  "definition": "<p>Een <b>ulcus</b> (zweer) is een dieper weefselverlies dat tot in de dermis of subcutis reikt.</p><p>Doordat de dermis is aangetast, geneest het met littekenvorming. Een ulcus cruris (open been) is een bekend voorbeeld.</p>",
  "image_url": "",
  "wiki_title": "Ulcer (dermatology)",
  "match": "ulcus|ulcera"
 },
 "excoriatie": {
  "title": "Excoriatie",
  "short": "Oppervlakkig krab- of schaafdefect van de huid, vaak door krabben.",
  "definition": "<p>Een <b>excoriatie</b> is een oppervlakkige beschadiging van de huid door mechanische kracht, meestal krabben.</p><p>Ze reikt tot in de bovenste dermis en gaat vaak gepaard met korstjes; typisch bij jeukende aandoeningen zoals eczeem.</p>",
  "image_url": "",
  "wiki_title": "Excoriation",
  "match": "excoriatie|excoriaties"
 },
 "fissuur": {
  "title": "Fissuur",
  "short": "Pijnlijke, spleetvormige scheur in de huid, vaak op handen of hielen (kloof/rhagade).",
  "definition": "<p>Een <b>fissuur</b> (rhagade, kloof) is een smalle, spleetvormige scheur in de huid die tot in de dermis kan reiken.</p><p>Ze ontstaat vooral in droge, verdikte huid op belaste plaatsen zoals vingers, handen en hielen, en kan pijnlijk zijn.</p>",
  "image_url": "",
  "wiki_title": "Fissure",
  "match": "fissuur|rhagade|rhagaden|kloof"
 },
 "lichenificatie": {
  "title": "Lichenificatie",
  "short": "Verdikking van de huid met versterkte huidlijnen door langdurig krabben of wrijven.",
  "definition": "<p><b>Lichenificatie</b> is een leerachtige verdikking van de huid waarbij het normale huidreliëf grof geaccentueerd is.</p><p>Ze ontstaat door chronisch krabben of wrijven, zoals bij langdurig eczeem (lichen simplex chronicus).</p>",
  "image_url": "",
  "wiki_title": "Lichenification",
  "match": "lichenificatie"
 },
 "comedo": {
  "title": "Comedo",
  "short": "Verstopte talgklierporie: een mee-eter, open (zwart) of gesloten (wit).",
  "definition": "<p>Een <b>comedo</b> (mee-eter) is een met talg en hoorncellen verstopte haarfollikel-opening.</p><p>Bij een open comedo oxideert het talg en wordt het zwart (blackhead); een gesloten comedo blijft wit (whitehead). Comedonen zijn de basislaesie van acne.</p>",
  "image_url": "",
  "wiki_title": "Comedo",
  "match": "comedo|comedonen|comedo's"
 },
 "atrofie": {
  "title": "Atrofie",
  "short": "Verdunning of afname van weefsel; bij de huid een dunnere, kwetsbaardere epidermis en/of dermis.",
  "definition": "<p><b>Atrofie</b> is het slinken van een weefsel of orgaan doordat de cellen krimpen of in aantal afnemen.</p><p>Huidatrofie (bijv. na langdurig sterk corticosteroïdgebruik of door veroudering) geeft een dunne, doorschijnende, kwetsbare huid.</p>",
  "image_url": "",
  "wiki_title": "Atrophy",
  "match": "atrofie"
 },
 "hyperkeratose": {
  "title": "Hyperkeratose",
  "short": "Verdikking van de hoornlaag (stratum corneum) door overmatige verhoorning.",
  "definition": "<p><b>Hyperkeratose</b> is een verdikte hoornlaag door versterkte aanmaak of vertraagde afstoting van hoorncellen.</p><p>Het komt voor bij eelt, wratten, psoriasis en ichthyosis.</p>",
  "image_url": "",
  "wiki_title": "Hyperkeratosis",
  "match": "hyperkeratose"
 },
 "orthokeratose": {
  "title": "Orthokeratose",
  "short": "Normale verhoorning waarbij de hoorncellen hun kern volledig hebben verloren.",
  "definition": "<p><b>Orthokeratose</b> is de normale, 'rijpe' verhoorning: de hoorncellen in het stratum corneum bevatten geen kern meer.</p><p>Het staat tegenover parakeratose, waarbij nog kernresten aanwezig zijn.</p>",
  "image_url": "",
  "wiki_title": "Keratosis",
  "match": "orthokeratose"
 },
 "parakeratose": {
  "title": "Parakeratose",
  "short": "Gestoorde verhoorning waarbij de hoorncellen nog een kern bevatten; typisch bij psoriasis.",
  "definition": "<p><b>Parakeratose</b> is een verstoorde verhoorning waarbij de cellen van het stratum corneum nog kernresten hebben, door een te snelle celturnover.</p><p>Het is een kenmerkende bevinding bij psoriasis.</p>",
  "image_url": "",
  "wiki_title": "Parakeratosis",
  "match": "parakeratose"
 },
 "acanthose": {
  "title": "Acanthose",
  "short": "Verdikking van het stratum spinosum door toename van het aantal cellen.",
  "definition": "<p><b>Acanthose</b> is een verdikking van de stekellaag (stratum spinosum) doordat de keratinocyten in aantal toenemen.</p><p>Het komt onder meer voor bij psoriasis en chronisch eczeem.</p>",
  "image_url": "",
  "wiki_title": "Acanthosis",
  "match": "acanthose"
 },
 "spongiose": {
  "title": "Spongiose",
  "short": "Vochtophoping tússen de epidermiscellen ('sponsvorming'); histologisch kenmerk van acuut eczeem.",
  "definition": "<p><b>Spongiose</b> is intercellulair oedeem in de epidermis: vocht duwt de keratinocyten uiteen zodat ze een sponsachtig beeld geven.</p><p>Het is het typische histologische kenmerk van (acuut) eczeem.</p>",
  "image_url": "",
  "wiki_title": "Spongiosis",
  "match": "spongiose"
 },
 "hypergranulose": {
  "title": "Hypergranulose",
  "short": "Verdikking van het stratum granulosum door meer keratohyaline-korrelcellen.",
  "definition": "<p><b>Hypergranulose</b> is een verbreed stratum granulosum met meer korrelcellen.</p><p>Het komt onder meer voor bij lichen planus en verruca vulgaris (wratten).</p>",
  "image_url": "",
  "wiki_title": "Granular cell layer",
  "match": "hypergranulose"
 },
 "basaalcelcarcinoom": {
  "title": "Basaalcelcarcinoom",
  "short": "Meest voorkomende, langzaam groeiende huidkanker die vrijwel nooit uitzaait.",
  "definition": "<p>Het <b>basaalcelcarcinoom</b> is de meest voorkomende vorm van huidkanker, uitgaand van de basale keratinocyten. Het groeit langzaam en zaait vrijwel nooit uit, maar kan lokaal in de diepte woekeren.</p><p>Typisch is een glanzend, huidkleurig knobbeltje met teleangiëctasieën, vaak in het gezicht na jarenlange zonschade.</p>",
  "image_url": "",
  "wiki_title": "Basal-cell carcinoma",
  "match": "basaalcelcarcinoom|basaalcel carcinoom|basaalcelcarinoom|basaalcarcinoom"
 },
 "plaveiselcelcarcinoom": {
  "title": "Plaveiselcelcarcinoom",
  "short": "Op één na meest voorkomende huidkanker, uit keratinocyten; kan uitzaaien.",
  "definition": "<p>Het <b>plaveiselcelcarcinoom</b> gaat uit van de keratinocyten van de epidermis en is de op één na meest voorkomende huidkanker.</p><p>Anders dan het basaalcelcarcinoom kan het metastaseren. Het ontstaat vooral op zonbeschadigde huid, vaak vanuit een actinische keratose.</p>",
  "image_url": "",
  "wiki_title": "Squamous-cell carcinoma",
  "match": "plaveiselcelcarcinoom|plaveiselcel carcinoom"
 },
 "melanoom": {
  "title": "Melanoom",
  "short": "Kwaadaardige tumor van melanocyten; relatief zeldzaam maar het gevaarlijkst door vroege uitzaaiing.",
  "definition": "<p>Het <b>melanoom</b> is een kwaadaardige tumor van de pigmentcellen (melanocyten).</p><p>Het is de dodelijkste huidkanker omdat het vroeg kan uitzaaien. De ABCDE-regel (Asymmetrie, Begrenzing, Kleur, Diameter, Evolutie) helpt bij herkenning; de Breslowdikte bepaalt de prognose.</p>",
  "image_url": "",
  "wiki_title": "Melanoma",
  "match": "melanoom|melanomen"
 },
 "m. Bowen": {
  "title": "Morbus Bowen",
  "short": "Plaveiselcelcarcinoom in situ: kanker beperkt tot de epidermis, dat nog niet is doorgegroeid.",
  "definition": "<p><b>Morbus Bowen</b> (ziekte van Bowen) is een plaveiselcelcarcinoom in situ: de kwaadaardige cellen zitten nog volledig in de epidermis.</p><p>Het toont zich als een langzaam groeiende, roodschilferende plaque. Onbehandeld kan het overgaan in een invasief plaveiselcelcarcinoom.</p>",
  "image_url": "",
  "wiki_title": "Bowen's disease",
  "match": "m. bowen|morbus bowen|ziekte van bowen|bowen"
 },
 "actinische keratose": {
  "title": "Actinische keratose",
  "short": "Ruw, schilferend plekje door chronische zonschade; een voorstadium van plaveiselcelcarcinoom.",
  "definition": "<p>Een <b>actinische keratose</b> (keratosis actinica, zonlichtkeratose) is een ruwe, schilferende plek op chronisch aan de zon blootgestelde huid.</p><p>Het is een premaligne afwijking die kan overgaan in een plaveiselcelcarcinoom.</p>",
  "image_url": "",
  "wiki_title": "Actinic keratosis",
  "match": "actinische keratose|keratosis actinica|zonlichtkeratose"
 },
 "seborroische keratose": {
  "title": "Seborroïsche keratose",
  "short": "Veelvoorkomende goedaardige, wratachtige 'ouderdomswrat' die opgeplakt lijkt te zitten.",
  "definition": "<p>Een <b>seborroïsche keratose</b> is een goedaardige, wratachtige huidwoekering die er 'opgeplakt' uitziet.</p><p>Ze komt vaak voor op oudere leeftijd (ouderdomswrat) en is onschuldig; wel belangrijk om te onderscheiden van een melanoom.</p>",
  "image_url": "",
  "wiki_title": "Seborrheic keratosis",
  "match": "seborroïsche keratose|seborrhoïsche keratose|seborroische keratose|seborrhoisch|seborroisch"
 },
 "lichen simplex chronicus": {
  "title": "Lichen simplex chronicus",
  "short": "Verdikte, gelichenificeerde huidplek door een vicieuze cirkel van jeuk en krabben.",
  "definition": "<p><b>Lichen simplex chronicus</b> is een sterk gelichenificeerde (leerachtig verdikte) plek die ontstaat door chronisch krabben en wrijven.</p><p>Jeuk lokt krabben uit, wat de huid verdikt en de jeuk versterkt: een jeuk-krab-cyclus.</p>",
  "image_url": "",
  "wiki_title": "Lichen simplex chronicus",
  "match": "lichen simplex chronicus"
 },
 "constitutioneel eczeem": {
  "title": "Constitutioneel eczeem",
  "short": "Chronisch, jeukend, atopisch eczeem met een gestoorde huidbarrière; begint meestal op de kinderleeftijd.",
  "definition": "<p><b>Constitutioneel eczeem</b> (atopische dermatitis) is een chronische, jeukende huidontsteking die vaak al bij baby's begint.</p><p>Een gestoorde huidbarrière (o.a. door filaggrine-defect) en atopische aanleg spelen een rol. Bij kinderen zit het typisch in de elleboog- en knieplooien.</p>",
  "image_url": "",
  "wiki_title": "Atopic dermatitis",
  "match": "constitutioneel eczeem|atopisch eczeem|atopische dermatitis"
 },
 "allergisch contacteczeem": {
  "title": "Allergisch contacteczeem",
  "short": "Vertraagde (type IV) allergische huidreactie op een stof waarvoor men gevoelig is geworden, zoals nikkel.",
  "definition": "<p><b>Allergisch contacteczeem</b> is een type IV (vertraagde) allergische reactie: na eerdere sensibilisatie geven T-cellen bij hernieuwd contact een eczeemreactie.</p><p>Bekende allergenen zijn nikkel, parfums en conserveermiddelen. Het eczeem verschijnt 1–3 dagen na contact op de blootgestelde plek.</p>",
  "image_url": "",
  "wiki_title": "Contact dermatitis",
  "match": "allergisch contacteczeem"
 },
 "hemangioom": {
  "title": "Hemangioom",
  "short": "Goedaardige tumor van bloedvaten; als 'aardbeivlek' een veelvoorkomende rode zwelling bij baby's.",
  "definition": "<p>Een <b>hemangioom</b> is een goedaardige woekering van bloedvaten.</p><p>Het infantiele hemangioom ('aardbeivlek') groeit in de eerste levensmaanden en verdwijnt daarna meestal vanzelf weer.</p>",
  "image_url": "",
  "wiki_title": "Hemangioma",
  "match": "hemangioom|hemangiomen"
 },
 "teleangiectasie": {
  "title": "Teleangiëctasie",
  "short": "Blijvend verwijde, met het blote oog zichtbare kleine bloedvaatjes in de huid.",
  "definition": "<p>Een <b>teleangiëctasie</b> is een permanent verwijd klein bloedvaatje dat als een fijn rood lijntje zichtbaar is en met een glaasje weg te drukken is.</p><p>Ze komen voor bij rosacea, na langdurig corticosteroïdgebruik, bij zonschade en als kenmerk van het basaalcelcarcinoom.</p>",
  "image_url": "",
  "wiki_title": "Telangiectasia",
  "match": "teleangiectasie|teleangiëctasie|telangiëctasie|telangiectasie"
 },
 "breslowdikte": {
  "title": "Breslowdikte",
  "short": "De dikte van een melanoom in millimeters; de belangrijkste maat voor de prognose.",
  "definition": "<p>De <b>Breslowdikte</b> is de verticale dikte van een melanoom, gemeten van de bovenkant van de epidermis tot de diepste tumorcel.</p><p>Hoe dikker het melanoom, hoe groter de kans op uitzaaiing — het is de sterkste prognostische factor en bepaalt mede de marge bij de excisie.</p>",
  "image_url": "",
  "wiki_title": "Breslow's depth",
  "match": "breslowdikte|de breslowdikte"
 },
 "vismodegib": {
  "title": "Vismodegib",
  "short": "Medicijn dat de Hedgehog-signaalroute remt; gebruikt bij gevorderd of uitgezaaid basaalcelcarcinoom.",
  "definition": "<p><b>Vismodegib</b> is een doelgerichte oncologische therapie in tabletvorm. Het blokkeert het eiwit SMO in de Hedgehog-route, die bij het basaalcelcarcinoom vrijwel altijd overactief is.</p><p>Het wordt ingezet bij lokaal uitgebreid of gemetastaseerd basaalcelcarcinoom dat niet meer met chirurgie of bestraling te behandelen is.</p>",
  "image_url": "",
  "wiki_title": "Vismodegib",
  "match": "vismodegib|vismodegib systemisch"
 },
 "imiquimod": {
  "title": "Imiquimod",
  "short": "Crème die het lokale immuunsysteem activeert; gebruikt bij oppervlakkige huidkanker, actinische keratose en wratten.",
  "definition": "<p><b>Imiquimod</b> is een immuunmodulerende crème die via TLR7 het aangeboren immuunsysteem in de huid activeert.</p><p>Het wordt lokaal toegepast bij oppervlakkig basaalcelcarcinoom, actinische keratose, morbus Bowen en genitale wratten.</p>",
  "image_url": "",
  "wiki_title": "Imiquimod",
  "match": "imiquimod|imiquimodcreme|imiquimodcrème"
 },
 "5-fluorouracil": {
  "title": "5-Fluorouracil",
  "short": "Celdelingremmer; als crème gebruikt bij actinische keratose en oppervlakkige huidkanker.",
  "definition": "<p><b>5-Fluorouracil</b> (5-FU) is een cytostaticum dat de DNA-synthese remt en zo delende cellen doodt.</p><p>Als crème (bijv. Efudix) behandelt het actinische keratosen, morbus Bowen en oppervlakkig basaalcelcarcinoom; de behandelde huid wordt tijdelijk rood en pijnlijk.</p>",
  "image_url": "",
  "wiki_title": "Fluorouracil",
  "match": "5-fluorouracil|5-fluorouracilcreme|fluorouracil|efudix"
 },
 "tacrolimus": {
  "title": "Tacrolimus",
  "short": "Ontstekingsremmende calcineurineremmer; als zalf een corticosteroïd-sparend middel bij eczeem.",
  "definition": "<p><b>Tacrolimus</b> is een calcineurineremmer die de activatie van T-cellen onderdrukt.</p><p>Als zalf (Protopic) remt het eczeem zonder de huidverdunning die corticosteroïden kunnen geven; daarom vooral op dun, gevoelig huidgebied zoals het gezicht.</p>",
  "image_url": "",
  "wiki_title": "Tacrolimus",
  "match": "tacrolimus|tacrolimus zalf|protopic"
 },
 "fotodynamische therapie": {
  "title": "Fotodynamische therapie",
  "short": "Behandeling waarbij een lichtgevoelige crème plus belichting kwaadaardige huidcellen vernietigt.",
  "definition": "<p>Bij <b>fotodynamische therapie</b> (PDT) wordt een lichtgevoelige stof op de huid aangebracht die zich ophoopt in de afwijkende cellen.</p><p>Belichting met een specifieke golflengte activeert de stof, waardoor reactieve zuurstof de cellen doodt. Gebruikt bij actinische keratose, morbus Bowen en oppervlakkig basaalcelcarcinoom.</p>",
  "image_url": "",
  "wiki_title": "Photodynamic therapy",
  "match": "fotodynamische therapie"
 },
 "cryotherapie": {
  "title": "Cryotherapie",
  "short": "Bevriezen van huidafwijkingen met vloeibare stikstof, o.a. bij wratten en actinische keratose.",
  "definition": "<p><b>Cryotherapie</b> (cryochirurgie) vernietigt weefsel door het te bevriezen, meestal met vloeibare stikstof (−196 °C).</p><p>De ijskristallen doden de cellen. Het wordt gebruikt bij wratten, actinische keratosen en sommige oppervlakkige huidtumoren.</p>",
  "image_url": "",
  "wiki_title": "Cryotherapy",
  "match": "cryotherapie|cryochirurgie|cryotherapie/cryochirurgie"
 },
 "excisie": {
  "title": "Excisie",
  "short": "Chirurgisch wegsnijden van een huidafwijking, meestal met een marge gezond weefsel.",
  "definition": "<p>Een <b>excisie</b> is het operatief wegsnijden van een laesie, doorgaans met een randje gezonde huid (marge).</p><p>Bij een diagnostische excisie wordt de hele afwijking verwijderd voor onderzoek; bij huidkanker is de marge afhankelijk van het type en de dikte.</p>",
  "image_url": "",
  "wiki_title": "Wide local excision",
  "match": "excisie|diagnostische excisie"
 },
 "radiotherapie": {
  "title": "Radiotherapie",
  "short": "Behandeling met ioniserende straling die het DNA van tumorcellen beschadigt.",
  "definition": "<p><b>Radiotherapie</b> (bestraling) gebruikt ioniserende straling om het DNA van kankercellen zodanig te beschadigen dat ze afsterven.</p><p>In de dermatologie is het een alternatief voor chirurgie bij bijvoorbeeld basaal- en plaveiselcelcarcinomen, vooral bij oudere patiënten of moeilijke locaties.</p>",
  "image_url": "",
  "wiki_title": "Radiation therapy",
  "match": "radiotherapie"
 },
 "autosomaal dominant": {
  "title": "Autosomaal dominant",
  "short": "Overervingspatroon waarbij één afwijkend gen (op een niet-geslachtschromosoom) al ziekte geeft.",
  "definition": "<p>Bij <b>autosomaal dominante</b> overerving volstaat één gemuteerd allel op een autosoom om de aandoening tot uiting te laten komen.</p><p>Aangedane ouders geven het gemiddeld aan de helft van hun kinderen door; de aandoening komt in elke generatie voor, ongeacht geslacht.</p>",
  "image_url": "",
  "wiki_title": "Dominance (genetics)",
  "match": "autosomaal dominant"
 },
 "autosomaal recessief": {
  "title": "Autosomaal recessief",
  "short": "Overervingspatroon waarbij twee afwijkende genen nodig zijn voor ziekte; dragers zijn gezond.",
  "definition": "<p>Bij <b>autosomaal recessieve</b> overerving moeten beide allelen van een autosomaal gen gemuteerd zijn voor ziekte.</p><p>Dragers met één mutatie zijn gezond; twee dragers hebben 25% kans op een aangedaan kind. De aandoening slaat vaak generaties over.</p>",
  "image_url": "",
  "wiki_title": "Dominance (genetics)",
  "match": "autosomaal recessief"
 },
 "X-gebonden recessief": {
  "title": "X-gebonden recessief",
  "short": "Overerving via een recessief gen op het X-chromosoom; vooral jongens zijn aangedaan.",
  "definition": "<p>Bij <b>X-gebonden recessieve</b> overerving zit het gemuteerde gen op het X-chromosoom.</p><p>Jongens (één X) zijn bij een mutatie aangedaan; meisjes (twee X) zijn meestal draagster. Vader-op-zoon-overdracht komt niet voor.</p>",
  "image_url": "",
  "wiki_title": "Sex linkage",
  "match": "x-gebonden recessief"
 },
 "X-gebonden dominant": {
  "title": "X-gebonden dominant",
  "short": "Overerving via een dominant gen op het X-chromosoom; één mutatie volstaat, ook bij meisjes.",
  "definition": "<p>Bij <b>X-gebonden dominante</b> overerving geeft één gemuteerd allel op het X-chromosoom al ziekte, ook bij meisjes.</p><p>Een aangedane vader geeft het aan al zijn dochters en aan geen van zijn zonen door.</p>",
  "image_url": "",
  "wiki_title": "Sex linkage",
  "match": "x-gebonden dominant"
 },
 "X-inactivatie": {
  "title": "X-inactivatie",
  "short": "Uitschakeling van één van beide X-chromosomen in vrouwelijke cellen, om de gendosering gelijk te trekken.",
  "definition": "<p><b>X-inactivatie</b> (lyonisatie) legt in elke vrouwelijke cel willekeurig één van de twee X-chromosomen stil tot een Barr-lichaampje.</p><p>Zo hebben vrouwen (XX) niet het dubbele aantal actieve X-genen ten opzichte van mannen (XY). Dit verklaart het mozaïekpatroon bij X-gebonden aandoeningen.</p>",
  "image_url": "",
  "wiki_title": "X-inactivation",
  "match": "x-inactivatie"
 },
 "puntmutatie": {
  "title": "Puntmutatie",
  "short": "Verandering van één enkele DNA-base.",
  "definition": "<p>Een <b>puntmutatie</b> is de vervanging, invoeging of verwijdering van één enkele base in het DNA.</p><p>Afhankelijk van het effect op het codon spreekt men van een stille, missense of nonsense mutatie.</p>",
  "image_url": "",
  "wiki_title": "Point mutation",
  "match": "puntmutatie"
 },
 "frameshift mutatie": {
  "title": "Frameshift-mutatie",
  "short": "Invoeging of verwijdering van basen die het leesraam verschuift, waardoor alle volgende codons veranderen.",
  "definition": "<p>Een <b>frameshift-mutatie</b> ontstaat als een aantal basen (niet deelbaar door drie) wordt toegevoegd of verwijderd.</p><p>Daardoor verschuift het leesraam en veranderen alle codons erna, meestal met een sterk afwijkend, verkort eiwit tot gevolg.</p>",
  "image_url": "",
  "wiki_title": "Frameshift mutation",
  "match": "frameshift mutatie|frameshift-mutatie"
 },
 "pluripotent": {
  "title": "Pluripotent",
  "short": "Eigenschap van een stamcel die kan uitgroeien tot vrijwel alle celtypen van het lichaam.",
  "definition": "<p>Een <b>pluripotente</b> stamcel kan differentiëren tot cellen van alle drie de kiembladen — dus vrijwel elk celtype — maar niet tot een volledig organisme.</p><p>Embryonale stamcellen zijn pluripotent. Het staat tegenover multipotent (beperkt tot enkele verwante celtypen).</p>",
  "image_url": "",
  "wiki_title": "Cell potency",
  "match": "pluripotent"
 },
 "multipotent": {
  "title": "Multipotent",
  "short": "Eigenschap van een stamcel die kan uitgroeien tot een beperkt aantal verwante celtypen.",
  "definition": "<p>Een <b>multipotente</b> stamcel kan zich ontwikkelen tot meerdere, maar verwante celtypen binnen één lijn.</p><p>Een hematopoëtische stamcel bijvoorbeeld levert alle bloedcellen, maar geen huid- of zenuwcellen.</p>",
  "image_url": "",
  "wiki_title": "Cell potency",
  "match": "multipotent"
 },
 "mrna": {
  "title": "mRNA",
  "short": "Boodschapper-RNA dat de genetische code van het DNA naar de ribosomen brengt voor eiwitsynthese.",
  "definition": "<p><b>mRNA</b> (messenger RNA) is de kopie van een gen die tijdens transcriptie in de kern wordt gemaakt.</p><p>Het reist naar het cytoplasma, waar ribosomen de codons aflezen om er een eiwit van te maken (translatie).</p>",
  "image_url": "",
  "wiki_title": "Messenger RNA",
  "match": "mrna|messenger rna|boodschapper-rna"
 },
 "trna": {
  "title": "tRNA",
  "short": "Transport-RNA dat aminozuren aanvoert en via zijn anticodon aan het juiste mRNA-codon koppelt.",
  "definition": "<p><b>tRNA</b> (transfer RNA) is een klein RNA-molecuul dat aan de ene kant een specifiek aminozuur draagt en aan de andere kant een anticodon.</p><p>Op het ribosoom paart het anticodon met het mRNA-codon, zodat de aminozuren in de juiste volgorde worden ingebouwd.</p>",
  "image_url": "",
  "wiki_title": "Transfer RNA",
  "match": "trna|transfer rna"
 },
 "rrna": {
  "title": "rRNA",
  "short": "Ribosomaal RNA: het bouw- en werkbestanddeel van de ribosomen.",
  "definition": "<p><b>rRNA</b> (ribosomaal RNA) vormt samen met eiwitten de ribosomen.</p><p>Het is niet alleen structuur, maar katalyseert ook de peptidebinding tussen aminozuren — een ribozym-functie.</p>",
  "image_url": "",
  "wiki_title": "Ribosomal RNA",
  "match": "rrna|ribosomaal rna"
 },
 "mirna": {
  "title": "miRNA",
  "short": "Klein niet-coderend RNA dat de expressie van genen remt door aan mRNA te binden.",
  "definition": "<p><b>miRNA</b> (microRNA) is een kort, niet-coderend RNA dat bindt aan complementair mRNA.</p><p>Daardoor wordt dat mRNA afgebroken of niet vertaald — een fijnregeling van de genexpressie.</p>",
  "image_url": "",
  "wiki_title": "MicroRNA",
  "match": "mirna|microrna"
 }
};
