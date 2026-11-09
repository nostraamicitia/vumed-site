/* answer_terms.js — shared global answer-term bank for VUmed exams.
   Pilot subject: Huid en Afweer. Loaded on every exam page before
   progressdots.js, which merges these into the page GLOSSARY so the
   answer-option 'term bank' stars + hover panel light up. Extend by
   adding keys; keys/`match` are matched against whole option text
   (case-insensitive).
   Entries with "option_only": true (distractor terms) only get an answer-
   option star; they are not highlighted in the question text. */
window.ANSWER_TERMS = {
 "prionziekte": {
  "match": "prionziekten|prionziektes|prionziekte|spongiforme encefalopathieën|spongiforme encefalopathie|overdraagbare spongiforme encefalopathie",
  "title": "Prionziekten",
  "short": "Prionziekten zijn zeldzame, dodelijke hersenziekten waarbij een verkeerd gevouwen eiwit (PrP) zich ophoopt en het hersenweefsel sponsachtig maakt — zoals de ziekte van Creutzfeldt-Jakob en BSE.",
  "definition": "<p><strong>Prionziekten</strong> (overdraagbare spongiforme encefalopathieën) zijn zeldzame, altijd dodelijke neurodegeneratieve ziekten. De oorzaak is geen micro-organisme maar een <em>eiwit</em>: het lichaamseigen PrP<sup>C</sup> klapt om naar de pathologische PrP<sup>Sc</sup>-vorm, die aggregeert in plaques en het hersenweefsel vol microscopische vacuolen zet — vandaar de <em>spongiforme</em> (sponsachtige) aanblik.</p><p>Bij de mens: de <em>ziekte van Creutzfeldt-Jakob</em> (sporadisch, erfelijk via PRNP-mutaties, of verworven), <em>kuru</em>, <em>fatale familiaire insomnie</em> en <em>GSS</em>. Bij dieren: <em>BSE</em> (“gekkekoeienziekte”) en <em>scrapie</em>. Klinisch: snel progressieve dementie, myoclonieën en ataxie, met overlijden meestal binnen een jaar.</p><p>Prionen zijn extreem resistent: gewone sterilisatie, koken, straling en de meeste desinfectantia inactiveren ze niet — een reële bron van iatrogene overdracht via instrumenten en transplantaten.</p>",
  "image_url": "",
  "wiki_titles": [
   "Transmissible spongiform encephalopathy",
   "Creutzfeldt–Jakob disease"
  ]
 },
 "PrP": {
  "match": "PrPSc|PrPC|PrP|prioneiwit|prion-eiwit",
  "title": "PrP (prioneiwit)",
  "short": "PrP is een lichaamseigen eiwit in hersencellen. In de normale vorm (PrP^C) zit het vol alfa-helices; in de ziektevorm (PrP^Sc) is het omgevouwen tot beta-sheets en slaat het onoplosbaar neer.",
  "definition": "<p><strong>PrP</strong> (prion protein) wordt gecodeerd door het <em>PRNP</em>-gen en komt normaal voor op het membraan van vooral neuronen. De gezonde vorm <strong>PrP<sup>C</sup></strong> (cellular) is rijk aan <em>alfa-helices</em>, goed oplosbaar en wordt gewoon afgebroken door proteasen.</p><p>De ziektevorm <strong>PrP<sup>Sc</sup></strong> (scrapie) heeft dezelfde aminozuurvolgorde — alleen de vouwing verschilt: veel <em>beta-sheets</em>, waardoor hydrofobe zijketens aan het oppervlak komen. Daardoor is PrP<sup>Sc</sup> onoplosbaar, protease-resistent en plakt het aan elkaar tot fibrillen en amyloïde plaques.</p><p>Het besmettelijke zit in de vorm: PrP<sup>Sc</sup> werkt als mal en dwingt gezond PrP<sup>C</sup> in dezelfde vouwing — een kettingreactie zonder DNA of RNA.</p>",
  "image_url": "",
  "wiki_titles": [
   "Major prion protein",
   "Prion"
  ]
 },
 "alfa-helix": {
  "match": "alfa-helices|alfa-helixen|alfa-helixes|alfa-helix|alfa helices|alfa helix|alpha-helices|alpha-helixes|alpha-helix|alpha helices|alpha helix|α-helices|α-helix",
  "title": "Alfa-helix",
  "short": "De alfa-helix is een veelvoorkomende secundaire eiwitstructuur: een rechtsdraaiende spiraal die bij elkaar wordt gehouden door waterstofbruggen in de ruggengraat van het eiwit.",
  "definition": "<p>De <strong>alfa-helix</strong> is een element van de <em>secundaire</em> eiwitstructuur: een rechtsdraaiende spiraal met ongeveer 3,6 aminozuren per winding. Hij wordt gestabiliseerd door waterstofbruggen tussen de C=O van aminozuur <em>n</em> en de N–H van aminozuur <em>n+4</em> — dus tussen de <em>ruggengraat</em>-atomen, niet tussen de zijketens.</p><p>De zijketens steken naar buiten: hydrofiel richting het water, hydrofoob naar de kern van het eiwit. <em>Proline</em> mist de N–H en knikt de keten — de klassieke “helix-breaker”; ook glycine destabiliseert. Voorbeelden: keratine, collageen (drie helices ineengedraaid) en de normale vorm van het prioneiwit PrP<sup>C</sup>.</p>",
  "image_url": "",
  "wiki_title": "Alpha helix"
 },
 "beta-sheet": {
  "match": "beta-sheets|bèta-sheets|β-sheets|beta sheets|beta-sheet|bèta-sheet|β-sheet|beta sheet|bètaplaat|beta-plaatstructuur",
  "title": "Beta-sheet",
  "short": "Een beta-sheet is de tweede grote secundaire eiwitstructuur: uitgestrekte ketens die naast elkaar liggen als een geplooid vel, verbonden door waterstofbruggen.",
  "definition": "<p>De <strong>beta-sheet</strong> (bèta-plaatstructuur) bestaat uit uitgestrekte polypeptideketens (β-strengen) die náást elkaar liggen en met waterstofbruggen aan elkaar vastzitten — parallel of antiparallel. Het geheel is licht geplooid, als een harmonicavel.</p><p>De zijketens wijzen afwisselend boven en onder het vlak. Liggen daar vooral <em>hydrofobe</em> zijketens, dan plakken beta-sheets van verschillende eiwitmoleculen aan elkaar: dat is precies wat er misgaat bij <em>amyloïdvorming</em> — bij prionziekten (PrP<sup>Sc</sup>), de ziekte van Alzheimer en systemische amyloïdose. Het neerslag is dan onoplosbaar en vrijwel niet meer af te breken.</p>",
  "image_url": "",
  "wiki_title": "Beta sheet"
 },
 "ATP": {
  "match": "adenosinetrifosfaat|adenosine trifosfaat|adenosine-trifosfaat|ATP",
  "title": "ATP (adenosinetrifosfaat)",
  "short": "ATP is de energiemunt van de cel: bij afsplitsing van de derde fosfaatgroep komt energie vrij die transport, contractie en biosynthese aandrijft.",
  "definition": "<p><strong>ATP</strong> (adenosinetrifosfaat) bestaat uit adenine, ribose en drie fosfaatgroepen. Hydrolyse van de eindstandige fosfaatbinding (ATP → ADP + P<sub>i</sub>) levert ongeveer 30 kJ/mol — genoeg om ongunstige reacties te koppelen aan een gunstige: spiercontractie, de Na⁺/K⁺-ATPase, en de opbouw van eiwitten, vetten en DNA.</p><p>Het meeste ATP komt uit de <em>oxidatieve fosforylering</em> in het mitochondrion: de elektronentransportketen pompt protonen naar de intermembraanruimte, en ATP-synthase laat die protonengradiënt terugstromen en maakt daarmee ATP (chemiosmose). Glycolyse en de citroenzuurcyclus leveren daarnaast rechtstreeks een kleine hoeveelheid.</p><p>De cel slaat ATP nauwelijks op — de voorraad gaat in seconden — dus productie en verbruik zijn strak gekoppeld: veel ADP versnelt de verbranding, overmaat ATP remt die af.</p>",
  "image_url": "",
  "wiki_titles": [
   "Adenosine triphosphate",
   "ATP synthase"
  ]
 },
 "dinitrofenol": {
  "match": "2,4-dinitrophenol|2,4-dinitrofenol|dinitrophenol|dinitrofenol|DNP",
  "title": "Dinitrofenol (DNP)",
  "short": "Dinitrofenol is een ontkoppelaar: het laat protonen langs ATP-synthase het mitochondrion in lekken, zodat de verbranding doorgaat maar er geen ATP meer wordt gemaakt — alle energie komt vrij als warmte.",
  "definition": "<p><strong>2,4-dinitrofenol</strong> (DNP) is het schoolvoorbeeld van een <em>ontkoppelaar</em> van de oxidatieve fosforylering. Het is een lipofiel, zwak zuur dat protonen kan opnemen en — opgelost in de binnenmembraan — weer kan afgeven aan de matrix. Daarmee omzeilt het ATP-synthase.</p><p>Gevolg: de <em>protonengradiënt</em> valt weg, dus er wordt nauwelijks nog ATP gevormd, terwijl de elektronentransportketen juist op volle toeren gaat draaien om de gradiënt te herstellen. Het zuurstofverbruik stijgt en alle vrijkomende energie gaat verloren als <em>warmte</em>: hyperthermie, zweten, tachycardie en bij hoge dosis een dodelijke oververhitting.</p><p>DNP werd ooit als afslankmiddel verkocht en is daarvoor verboden; het lichaamseigen equivalent is <em>UCP1</em> (thermogenine) in bruin vetweefsel, dat op dezelfde manier warmte maakt.</p>",
  "image_url": "",
  "wiki_titles": [
   "2,4-Dinitrophenol",
   "Oxidative phosphorylation"
  ]
 },
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
  "match": "beenmerg|het beenmerg"
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
 },
 "pneumonie": {
  "title": "Pneumonie",
  "short": "Een pneumonie is een infectie van het longweefsel (alveoli), meestal door bacteriën of virussen, met koorts, hoesten en kortademigheid.",
  "definition": "<p>Bij een <strong>pneumonie</strong> (longontsteking) raken de alveoli ontstoken en vullen ze zich met ontstekingsvocht en cellen. Daardoor is minder longoppervlak beschikbaar voor gaswisseling.</p><p>Typische klachten zijn koorts, hoesten (vaak met sputum), kortademigheid en soms pijn bij het ademen. Bij lichamelijk onderzoek kunnen crepitaties of een gedempte percussie optreden; een X-thorax toont een infiltraat. De meest voorkomende verwekker van de buiten het ziekenhuis opgelopen pneumonie is <em>Streptococcus pneumoniae</em>.</p>",
  "image_url": "",
  "wiki_title": "Pneumonia",
  "match": "pneumonie|longontsteking",
  "option_only": true
 },
 "escherichia coli": {
  "title": "Escherichia coli",
  "short": "E. coli is een gramnegatieve staafbacterie die normaal in de darm leeft en de belangrijkste verwekker is van urineweginfecties.",
  "definition": "<p><strong><em>Escherichia coli</em></strong> is een gramnegatieve, facultatief anaerobe staaf uit de familie van de <em>Enterobacteriaceae</em>. Het is een normaal onderdeel van de darmflora.</p><p>Buiten de darm is E. coli de belangrijkste verwekker van urineweginfecties (cystitis, pyelonefritis) en een belangrijke oorzaak van sepsis en neonatale meningitis. Sommige stammen (zoals EHEC en ETEC) veroorzaken diarree; EHEC kan via shigatoxine het hemolytisch-uremisch syndroom veroorzaken.</p>",
  "image_url": "",
  "wiki_title": "Escherichia coli",
  "match": "escherichia coli|e. coli|e.coli",
  "option_only": true
 },
 "streptococcus pneumoniae": {
  "title": "Streptococcus pneumoniae",
  "short": "De pneumokok is een grampositieve diplokok met een kapsel; de belangrijkste verwekker van pneumonie, otitis media en bacteriële meningitis.",
  "definition": "<p><strong><em>Streptococcus pneumoniae</em></strong> (pneumokok) is een grampositieve, lancetvormige diplokok die α-hemolyse geeft op bloedagar. Het polysacharidekapsel is de belangrijkste virulentiefactor: het beschermt tegen fagocytose.</p><p>De pneumokok koloniseert de nasofarynx en is de meest voorkomende verwekker van de buiten het ziekenhuis opgelopen pneumonie, otitis media, sinusitis en bacteriële meningitis bij volwassenen. Kinderen en ouderen worden ertegen gevaccineerd.</p>",
  "image_url": "",
  "wiki_title": "Streptococcus pneumoniae",
  "match": "streptococcus pneumoniae|s. pneumoniae|pneumokok|pneumokokken|streptococcus pneumoniae (pneumokok)",
  "option_only": true
 },
 "staphylococcus aureus": {
  "title": "Staphylococcus aureus",
  "short": "S. aureus is een grampositieve kok in trosjes, coagulasepositief, die huid- en wondinfecties, abcessen en ernstige systemische infecties veroorzaakt.",
  "definition": "<p><strong><em>Staphylococcus aureus</em></strong> is een grampositieve kok die in trosjes groeit en <em>coagulase-positief</em> is (onderscheid met andere stafylokokken). Ongeveer een derde van de mensen draagt hem in de neus.</p><p>Hij veroorzaakt huid- en wekedeleninfecties (impetigo, furunkels, abcessen, wondinfecties), maar ook osteomyelitis, septische artritis, endocarditis en sepsis. Via toxines kan hij voedselvergiftiging en het toxischeshocksyndroom veroorzaken. MRSA is een methicillineresistente variant.</p>",
  "image_url": "",
  "wiki_title": "Staphylococcus aureus",
  "match": "staphylococcus aureus|s. aureus|stafylococcus aureus",
  "option_only": true
 },
 "staphylococcus epidermidis": {
  "title": "Staphylococcus epidermidis",
  "short": "S. epidermidis is een coagulasenegatieve stafylokok van de normale huidflora; berucht om infecties van lijnen en prothesen.",
  "definition": "<p><strong><em>Staphylococcus epidermidis</em></strong> is een grampositieve, <em>coagulase-negatieve</em> stafylokok die normaal op de huid leeft.</p><p>Hij is weinig virulent, maar kan een <em>biofilm</em> vormen op kunstmateriaal. Daardoor is hij een belangrijke verwekker van infecties van intravasculaire katheters, kunstkleppen en gewrichtsprothesen. In een bloedkweek is hij ook vaak een verontreiniging vanuit de huid.</p>",
  "image_url": "",
  "wiki_title": "Staphylococcus epidermidis",
  "match": "staphylococcus epidermidis|s. epidermidis",
  "option_only": true
 },
 "pseudomonas aeruginosa": {
  "title": "Pseudomonas aeruginosa",
  "short": "P. aeruginosa is een gramnegatieve, aerobe staaf die van vochtige omgevingen houdt en vooral bij verzwakte patiënten ziekenhuisinfecties veroorzaakt.",
  "definition": "<p><strong><em>Pseudomonas aeruginosa</em></strong> is een gramnegatieve, strikt aerobe staaf die leeft in water en vochtige omgevingen. Hij is van nature resistent tegen veel antibiotica.</p><p>Hij veroorzaakt vooral opportunistische infecties: ziekenhuispneumonie (o.a. bij beademing), infecties van brandwonden, urineweginfecties bij katheters, otitis externa en chronische luchtweginfecties bij cystische fibrose. Kolonies hebben vaak een groenblauw pigment en een zoete geur.</p>",
  "image_url": "",
  "wiki_title": "Pseudomonas aeruginosa",
  "match": "pseudomonas aeruginosa|p. aeruginosa|pseudomonas",
  "option_only": true
 },
 "klebsiella pneumoniae": {
  "title": "Klebsiella pneumoniae",
  "short": "K. pneumoniae is een gramnegatieve staaf met een dik kapsel die urineweginfecties en (ziekenhuis)pneumonie veroorzaakt.",
  "definition": "<p><strong><em>Klebsiella pneumoniae</em></strong> is een gramnegatieve staaf uit de <em>Enterobacteriaceae</em> met een dik polysacharidekapsel, waardoor kolonies slijmerig zijn.</p><p>Hij veroorzaakt urineweginfecties, sepsis en pneumonie, vooral bij ouderen, alcoholisten en patiënten met diabetes of in het ziekenhuis. Klebsiella is berucht om antibioticaresistentie (ESBL- en carbapenemaseproducerende stammen).</p>",
  "image_url": "",
  "wiki_title": "Klebsiella pneumoniae",
  "match": "klebsiella pneumoniae|k. pneumoniae|klebsiella",
  "option_only": true
 },
 "haemophilus influenzae": {
  "title": "Haemophilus influenzae",
  "short": "H. influenzae is een kleine gramnegatieve staaf die luchtweginfecties, otitis en (vroeger vaak) meningitis en epiglottitis bij kinderen veroorzaakt.",
  "definition": "<p><strong><em>Haemophilus influenzae</em></strong> is een kleine, gramnegatieve coccobacil. Ondanks de naam veroorzaakt hij geen influenza (dat is een virus).</p><p>Onomkapselde stammen veroorzaken otitis media, sinusitis en exacerbaties van COPD. Het omkapselde type b (Hib) veroorzaakte vroeger veel meningitis en epiglottitis bij jonge kinderen; sinds de Hib-vaccinatie is dat zeldzaam.</p>",
  "image_url": "",
  "wiki_title": "Haemophilus influenzae",
  "match": "haemophilus influenzae|h. influenzae|haemophilus|haemofilus influenzae type b|haemophilus influenzae type b|hib",
  "option_only": true
 },
 "mycobacterium tuberculosis": {
  "title": "Mycobacterium tuberculosis",
  "short": "M. tuberculosis is de zuurvaste, langzaam groeiende staafbacterie die tuberculose veroorzaakt.",
  "definition": "<p><strong><em>Mycobacterium tuberculosis</em></strong> is een aerobe staafbacterie met een wasachtige, mycolzuurrijke celwand. Daardoor kleurt hij niet goed met de gramkleuring maar wel met de Ziehl-Neelsenkleuring (<em>zuurvast</em>).</p><p>Hij wordt aerogeen overgedragen, groeit zeer langzaam (weken in kweek) en overleeft in macrofagen. De afweer is vooral cellulair (T-cellen) en leidt tot granulomen met centrale verkazing. Hij veroorzaakt tuberculose.</p>",
  "image_url": "",
  "wiki_title": "Mycobacterium tuberculosis",
  "match": "mycobacterium tuberculosis|m. tuberculosis|tuberkelbacil",
  "option_only": true
 },
 "candida albicans": {
  "title": "Candida albicans",
  "short": "Candida albicans is een gist die normaal op slijmvliezen voorkomt en bij verminderde weerstand spruw, vaginale schimmelinfectie of invasieve infecties geeft.",
  "definition": "<p><strong><em>Candida albicans</em></strong> is een gist (schimmel) die bij veel mensen in mond, darm en vagina voorkomt. Hij kan zowel als ronde gistcel als met (pseudo)hyfen groeien.</p><p>Bij een verstoorde flora (antibiotica) of verminderde afweer veroorzaakt hij oppervlakkige infecties zoals spruw (orale candidiasis), vaginale candidiasis en intertrigo. Bij ernstig immuungecompromitteerden of patiënten met lijnen kan een invasieve candidemie ontstaan.</p>",
  "image_url": "",
  "wiki_title": "Candida albicans",
  "match": "candida albicans|c. albicans|candida",
  "option_only": true
 },
 "adenovirus": {
  "title": "Adenovirus",
  "short": "Adenovirussen zijn niet-omhulde DNA-virussen die verkoudheid, keelontsteking, conjunctivitis en gastro-enteritis veroorzaken.",
  "definition": "<p><strong>Adenovirussen</strong> zijn niet-omhulde, dubbelstrengs DNA-virussen. Omdat ze geen envelop hebben, zijn ze stabiel in de omgeving en lastig te inactiveren.</p><p>Ze veroorzaken vooral bij kinderen infecties van de bovenste luchtwegen (faryngitis), conjunctivitis (o.a. faryngoconjunctivale koorts), gastro-enteritis en soms pneumonie. Ze worden ook gebruikt als vector in vaccins en gentherapie.</p>",
  "image_url": "",
  "wiki_title": "Adenoviridae",
  "match": "adenovirus|adenovirussen",
  "option_only": true
 },
 "mazelenvirus": {
  "title": "Mazelen(virus)",
  "short": "Mazelen is een zeer besmettelijke virale kinderziekte met hoge koorts, hoesten, conjunctivitis en een vlekkerige huiduitslag; het virus is een omhuld RNA-virus.",
  "definition": "<p><strong>Mazelen</strong> (morbilli) wordt veroorzaakt door het mazelenvirus, een omhuld enkelstrengs RNA-virus (paramyxovirus). Het is een van de meest besmettelijke ziekten en verspreidt zich via aerosolen.</p><p>Na een prodromale fase met koorts, hoesten, rhinitis en conjunctivitis verschijnen <em>Koplikvlekjes</em> op het wangslijmvlies en daarna een grofvlekkige rode huiduitslag die achter de oren begint. Complicaties zijn otitis, pneumonie en zeldzaam encefalitis (ook SSPE jaren later). Mazelen onderdrukt tijdelijk het immuunsysteem. Er is een vaccin (BMR).</p>",
  "image_url": "",
  "wiki_title": "Measles",
  "match": "mazelenvirus|mazelen|morbilli|morbillivirus",
  "option_only": true
 },
 "influenzavirus": {
  "title": "Influenza(virus)",
  "short": "Influenza (griep) wordt veroorzaakt door het influenzavirus, een omhuld RNA-virus met hoge koorts, spierpijn en hoesten; jaarlijks seizoensgebonden.",
  "definition": "<p><strong>Influenza</strong> wordt veroorzaakt door influenzavirussen (type A, B en C), omhulde RNA-virussen met een gesegmenteerd genoom. Op het oppervlak zitten hemagglutinine (H) en neuraminidase (N).</p><p>Kleine mutaties in H en N (<em>antigene drift</em>) veroorzaken de jaarlijkse griepepidemie; uitwisseling van gensegmenten (<em>antigene shift</em>, alleen type A) kan pandemieën geven. Klachten: plotselinge hoge koorts, spierpijn, hoofdpijn, droge hoest. Complicatie is o.a. een secundaire bacteriële pneumonie. Jaarlijks vaccin voor risicogroepen.</p>",
  "image_url": "",
  "wiki_title": "Influenza",
  "match": "influenzavirus|influenza|griep|influenza a|influenzavirussen",
  "option_only": true
 },
 "kinkhoest": {
  "title": "Kinkhoest (pertussis)",
  "short": "Kinkhoest is een luchtweginfectie door Bordetella pertussis met langdurige hoestbuien en een gierende inademing; gevaarlijk voor zuigelingen.",
  "definition": "<p><strong>Kinkhoest</strong> (pertussis) wordt veroorzaakt door de gramnegatieve bacterie <em>Bordetella pertussis</em>, die zich hecht aan het trilhaarepitheel en toxines produceert.</p><p>Na een verkoudheidsfase volgen weken met heftige hoestbuien, vaak eindigend in een gierende inademing (‘kink’) of braken. Bij jonge zuigelingen kan kinkhoest apneus en overlijden veroorzaken; daarom wordt gevaccineerd (ook zwangeren, om de baby te beschermen).</p>",
  "image_url": "",
  "wiki_title": "Whooping cough",
  "match": "kinkhoest|pertussis|bordetella pertussis",
  "option_only": true
 },
 "difterie": {
  "title": "Difterie",
  "short": "Difterie is een infectie door Corynebacterium diphtheriae waarbij een toxine een grijs pseudomembraan in de keel en schade aan hart en zenuwen veroorzaakt.",
  "definition": "<p><strong>Difterie</strong> wordt veroorzaakt door toxineproducerende stammen van <em>Corynebacterium diphtheriae</em>, een grampositieve staaf. Het difterietoxine remt de eiwitsynthese van gastheercellen.</p><p>Lokaal ontstaat een grijswit, vastzittend <em>pseudomembraan</em> in keel en neus, met risico op luchtwegobstructie. Het toxine kan systemisch myocarditis en neuropathie geven. Door vaccinatie (DKTP) is het in Nederland zeldzaam.</p>",
  "image_url": "",
  "wiki_title": "Diphtheria",
  "match": "difterie|corynebacterium diphtheriae",
  "option_only": true
 },
 "tetanus": {
  "title": "Tetanus",
  "short": "Tetanus is een vergiftiging door het toxine van Clostridium tetani uit een wond, met pijnlijke spierkrampen en kaakklem.",
  "definition": "<p><strong>Tetanus</strong> wordt veroorzaakt door <em>Clostridium tetani</em>, een anaerobe, sporenvormende grampositieve staaf die in de bodem voorkomt en via wonden binnenkomt.</p><p>Het toxine tetanospasmine blokkeert in het ruggenmerg de afgifte van remmende neurotransmitters (glycine, GABA). Daardoor ontstaan aanhoudende spiercontracties: kaakklem (trismus), risus sardonicus, opisthotonus en ademhalingsproblemen. Preventie: vaccinatie en wondverzorging.</p>",
  "image_url": "",
  "wiki_title": "Tetanus",
  "match": "tetanus|clostridium tetani",
  "option_only": true
 },
 "poliomyelitis": {
  "title": "Poliomyelitis",
  "short": "Polio is een virale infectie (poliovirus, enterovirus) die bij een klein deel van de patiënten motorische voorhoorncellen beschadigt en slappe verlamming geeft.",
  "definition": "<p><strong>Poliomyelitis</strong> wordt veroorzaakt door het poliovirus, een niet-omhuld RNA-enterovirus dat fecaal-oraal wordt overgedragen.</p><p>De meeste infecties verlopen zonder of met milde klachten. Bij een klein deel infecteert het virus de motorische <em>voorhoorncellen</em> van het ruggenmerg, met asymmetrische slappe verlamming zonder gevoelsverlies. Door vaccinatie (DKTP) is polio in Nederland vrijwel verdwenen.</p>",
  "image_url": "",
  "wiki_title": "Polio",
  "match": "poliomyelitis|polio|poliovirus",
  "option_only": true
 },
 "rode hond": {
  "title": "Rode hond (rubella)",
  "short": "Rode hond is een milde virale ziekte met huiduitslag en zwollen klieren, maar bij infectie in de vroege zwangerschap ontstaat het congenitaal rubellasyndroom.",
  "definition": "<p><strong>Rode hond</strong> (rubella) wordt veroorzaakt door het rubellavirus, een omhuld RNA-virus. Bij kinderen verloopt het mild: lichte koorts, kleinvlekkige huiduitslag en gezwollen lymfeklieren (o.a. achter de oren en in de nek).</p><p>Gevaarlijk is infectie van een zwangere in het eerste trimester: het virus kan de foetus besmetten en het <em>congenitaal rubellasyndroom</em> veroorzaken (doofheid, cataract, hartafwijkingen). Vaccinatie gebeurt met het BMR-vaccin.</p>",
  "image_url": "",
  "wiki_title": "Rubella",
  "match": "rode hond|rubella|rubellavirus",
  "option_only": true
 },
 "herpes zoster": {
  "title": "Herpes zoster (gordelroos)",
  "short": "Herpes zoster is de reactivatie van het varicella-zostervirus uit een sensibel ganglion, met pijnlijke blaasjes in één dermatoom.",
  "definition": "<p>Na waterpokken blijft het <strong>varicella-zostervirus</strong> latent aanwezig in sensibele ganglia (spinale ganglia of hersenzenuwganglia). Bij afnemende cellulaire afweer (ouderdom, immuunsuppressie) kan het reactiveren.</p><p>Dan ontstaan pijnlijke, gegroepeerde blaasjes op een rode ondergrond in één <em>dermatoom</em>, meestal eenzijdig. Complicaties zijn postherpetische neuralgie en, bij de n. ophthalmicus, oogbetrokkenheid (zoster ophthalmicus).</p>",
  "image_url": "",
  "wiki_title": "Shingles",
  "match": "herpes zoster|gordelroos|zoster",
  "option_only": true
 },
 "cytomegalovirus": {
  "title": "Cytomegalovirus (CMV)",
  "short": "CMV is een herpesvirus dat bij gezonden mild verloopt, maar gevaarlijk is bij immuungecompromitteerden en de belangrijkste congenitale virale infectie is.",
  "definition": "<p>Het <strong>cytomegalovirus</strong> is een herpesvirus (HHV-5) dat na infectie levenslang latent aanwezig blijft. Geïnfecteerde cellen worden groot met kenmerkende ‘uilenoog’-inclusies.</p><p>Bij gezonde mensen verloopt infectie meestal ongemerkt of als een mononucleosebeeld. Bij transplantatie- en hiv-patiënten kan CMV retinitis, pneumonie en colitis veroorzaken. Congenitale CMV is de belangrijkste infectieuze oorzaak van aangeboren doofheid en ontwikkelingsachterstand.</p>",
  "image_url": "",
  "wiki_title": "Cytomegalovirus",
  "match": "cytomegalovirus|cmv",
  "option_only": true
 },
 "norovirus": {
  "title": "Norovirus",
  "short": "Norovirus is een zeer besmettelijk RNA-virus dat acute gastro-enteritis veroorzaakt met plotseling braken en diarree, vaak in uitbraken.",
  "definition": "<p>Het <strong>norovirus</strong> is een niet-omhuld RNA-virus (calicivirus). Er zijn maar weinig deeltjes nodig voor infectie en het overleeft lang in de omgeving.</p><p>Het veroorzaakt acute gastro-enteritis met plotseling braken, waterige diarree en buikkrampen, die 1 à 3 dagen duurt. Uitbraken komen vooral voor in verpleeghuizen, ziekenhuizen en op cruiseschepen; handhygiëne is de belangrijkste maatregel.</p>",
  "image_url": "",
  "wiki_title": "Norovirus",
  "match": "norovirus|noro",
  "option_only": true
 },
 "hepatitis a": {
  "title": "Hepatitis A",
  "short": "Hepatitis A is een fecaal-oraal overgedragen virale leverontsteking die acuut verloopt en nooit chronisch wordt.",
  "definition": "<p><strong>Hepatitis A</strong> wordt veroorzaakt door het hepatitis A-virus, een niet-omhuld RNA-virus dat fecaal-oraal wordt overgedragen (besmet water en voedsel, reizen).</p><p>Het geeft een acute hepatitis met moeheid, misselijkheid, geelzucht en verhoogde transaminasen; bij jonge kinderen vaak zonder klachten. Hepatitis A wordt <em>niet chronisch</em> en geeft levenslange immuniteit. Er is een vaccin.</p>",
  "image_url": "",
  "wiki_title": "Hepatitis A",
  "match": "hepatitis a|hav|hepatitis a-virus",
  "option_only": true
 },
 "hepatitis b": {
  "title": "Hepatitis B",
  "short": "Hepatitis B is een via bloed en seks overgedragen DNA-virus dat acute en chronische leverontsteking geeft, met risico op cirrose en levercelcarcinoom.",
  "definition": "<p><strong>Hepatitis B</strong> wordt veroorzaakt door het hepatitis B-virus, een omhuld (gedeeltelijk dubbelstrengs) DNA-virus. Overdracht via bloed, seksueel contact en van moeder op kind rond de geboorte.</p><p>Bij volwassenen geneest de meeste acute infectie; bij pasgeborenen wordt de infectie meestal <em>chronisch</em>. Chronische hepatitis B kan leiden tot levercirrose en hepatocellulair carcinoom. Diagnostiek via serologie (HBsAg, anti-HBc, anti-HBs). Er is een effectief vaccin.</p>",
  "image_url": "",
  "wiki_title": "Hepatitis B",
  "match": "hepatitis b|hbv|hepatitis b-virus",
  "option_only": true
 },
 "hepatitis e": {
  "title": "Hepatitis E",
  "short": "Hepatitis E is een virale leverontsteking die fecaal-oraal of via varkensvlees wordt overgedragen; meestal acuut en zelflimiterend.",
  "definition": "<p><strong>Hepatitis E</strong> wordt veroorzaakt door het hepatitis E-virus, een niet-omhuld RNA-virus. Wereldwijd verspreidt het via besmet water; in Nederland vooral via (onvoldoende verhit) varkensvlees.</p><p>Het geeft meestal een milde, zelflimiterende acute hepatitis. Bij zwangeren kan het ernstig verlopen en bij immuungecompromitteerden (bijv. na transplantatie) kan het chronisch worden.</p>",
  "image_url": "",
  "wiki_title": "Hepatitis E",
  "match": "hepatitis e|hev|hepatitis e-virus",
  "option_only": true
 },
 "covid-19": {
  "title": "COVID-19",
  "short": "COVID-19 is de ziekte veroorzaakt door het coronavirus SARS-CoV-2, met klachten van verkoudheid tot ernstige pneumonie.",
  "definition": "<p><strong>COVID-19</strong> wordt veroorzaakt door <em>SARS-CoV-2</em>, een omhuld RNA-coronavirus dat via het spike-eiwit aan de ACE2-receptor bindt. Overdracht via druppels en aerosolen.</p><p>Het klinisch beeld varieert van geen klachten of verkoudheid tot een virale pneumonie met ARDS. Verlies van reuk en smaak was een opvallend symptoom. Risicofactoren voor een ernstig beloop zijn hoge leeftijd, obesitas en comorbiditeit.</p>",
  "image_url": "",
  "wiki_title": "COVID-19",
  "match": "covid-19|covid|sars-cov-2|corona",
  "option_only": true
 },
 "malaria": {
  "title": "Malaria",
  "short": "Malaria is een door muggen overgedragen parasitaire infectie (Plasmodium) van de rode bloedcellen, met koortsaanvallen; P. falciparum kan levensbedreigend zijn.",
  "definition": "<p><strong>Malaria</strong> wordt veroorzaakt door <em>Plasmodium</em>-parasieten (o.a. <em>P. falciparum</em>, <em>P. vivax</em>) en overgebracht door de <em>Anopheles</em>-mug. De parasiet vermenigvuldigt zich eerst in de lever en daarna in rode bloedcellen.</p><p>Het uiteenvallen van geïnfecteerde erytrocyten geeft koortsaanvallen, hemolytische anemie en splenomegalie. <em>P. falciparum</em> kan cerebrale malaria en orgaanfalen geven. Diagnose met een dikke druppel/uitstrijk of sneltest; koorts na tropenreis is malaria tot het tegendeel bewezen is.</p>",
  "image_url": "",
  "wiki_title": "Malaria",
  "match": "malaria|plasmodium|plasmodium falciparum",
  "option_only": true
 },
 "meningitis": {
  "title": "Meningitis",
  "short": "Meningitis is een ontsteking van de hersenvliezen, met hoofdpijn, koorts, nekstijfheid en verminderd bewustzijn; bacteriële meningitis is een spoedgeval.",
  "definition": "<p><strong>Meningitis</strong> is een ontsteking van de leptomeningen (pia en arachnoidea) en de liquor. Oorzaken zijn bacteriën (bij volwassenen vooral pneumokok en meningokok), virussen (vaak milder) en zelden schimmels.</p><p>Klassieke symptomen: hoofdpijn, koorts, nekstijfheid en een verlaagd bewustzijn; bij meningokokken soms petechiën. Diagnose via lumbaalpunctie (liquoronderzoek). Bacteriële meningitis vereist direct antibiotica en dexamethason.</p>",
  "image_url": "",
  "wiki_title": "Meningitis",
  "match": "meningitis|hersenvliesontsteking|bacteriële meningitis",
  "option_only": true
 },
 "tuberculose": {
  "title": "Tuberculose",
  "short": "Tuberculose is een infectie met Mycobacterium tuberculosis, meestal in de longen, met langdurig hoesten, nachtzweten, gewichtsverlies en granulomen.",
  "definition": "<p><strong>Tuberculose</strong> wordt veroorzaakt door <em>Mycobacterium tuberculosis</em> en verspreidt zich via aerosolen. Na infectie wordt de bacterie meestal ingekapseld in granulomen (latente tbc); bij verminderde afweer kan actieve ziekte ontstaan.</p><p>Longtuberculose geeft langdurig hoesten (soms met bloed), koorts, nachtzweten en gewichtsverlies; typisch zijn holtevorming in de longtoppen en granulomen met centrale <em>verkazing</em>. Behandeling met een combinatie van tuberculostatica gedurende minstens 6 maanden.</p>",
  "image_url": "",
  "wiki_title": "Tuberculosis",
  "match": "tuberculose|tbc|tb",
  "option_only": true
 },
 "endocarditis": {
  "title": "Endocarditis",
  "short": "Endocarditis is een infectie van het endocard, meestal van de hartkleppen, met vegetaties, koorts en een nieuw hartgeruis.",
  "definition": "<p>Bij <strong>infectieuze endocarditis</strong> nestelen bacteriën (vaak <em>S. aureus</em>, streptokokken of enterokokken) zich op de hartkleppen en vormen vegetaties van bloedplaatjes, fibrine en micro-organismen.</p><p>Risicofactoren zijn klepafwijkingen, kunstkleppen en intraveneus drugsgebruik. Symptomen: koorts, een nieuw souffle en embolische verschijnselen (splinterbloedingen, Janewaylaesies, Oslernoduli, Rothvlekken). Diagnose via herhaalde bloedkweken en echocardiografie (Duke-criteria).</p>",
  "image_url": "",
  "wiki_title": "Infective endocarditis",
  "match": "endocarditis|infectieuze endocarditis|bacteriële endocarditis",
  "option_only": true
 },
 "pyelonefritis": {
  "title": "Pyelonefritis",
  "short": "Pyelonefritis is een bacteriële infectie van het nierbekken en de nier, met koorts, flankpijn en vaak klachten van een blaasontsteking.",
  "definition": "<p><strong>Pyelonefritis</strong> is een opstijgende urineweginfectie die de nier en het nierbekken bereikt, meestal door <em>E. coli</em>.</p><p>Kenmerkend zijn koorts, koude rillingen, flankpijn en slagpijn in de nierloge, eventueel met mictieklachten. Het is een gecompliceerde urineweginfectie die behandeld wordt met antibiotica met goede weefselpenetratie (niet nitrofurantoïne).</p>",
  "image_url": "",
  "wiki_title": "Pyelonephritis",
  "match": "pyelonefritis|nierbekkenontsteking",
  "option_only": true
 },
 "cystitis": {
  "title": "Cystitis",
  "short": "Cystitis is een ontsteking van de blaas, meestal door een bacteriële infectie, met pijnlijke en frequente mictie zonder koorts.",
  "definition": "<p><strong>Cystitis</strong> (blaasontsteking) is een infectie van de lage urinewegen, meestal door <em>E. coli</em> vanuit de darmflora. Vrouwen zijn vaker aangedaan door hun korte urethra.</p><p>Klachten: pijn bij het plassen (dysurie), vaak kleine beetjes plassen (frequentie), aandrang en soms hematurie, zonder koorts of flankpijn. Ongecompliceerde cystitis wordt behandeld met bijv. nitrofurantoïne of fosfomycine.</p>",
  "image_url": "",
  "wiki_title": "Cystitis",
  "match": "cystitis|blaasontsteking",
  "option_only": true
 },
 "bovenste luchtweginfectie": {
  "title": "Bovenste luchtweginfectie",
  "short": "Een bovenste luchtweginfectie is een (meestal virale) infectie van neus, keel, bijholten of strottenhoofd, zoals een verkoudheid.",
  "definition": "<p>Een <strong>bovenste luchtweginfectie</strong> betreft de luchtwegen boven de stembanden: neus, bijholten, farynx en larynx. Voorbeelden zijn de gewone verkoudheid (rhinitis), faryngitis, sinusitis en laryngitis.</p><p>Ze worden meestal veroorzaakt door virussen (rhino-, adeno-, coronavirussen) en zijn zelflimiterend. Antibiotica zijn zelden nodig.</p>",
  "image_url": "",
  "wiki_title": "Upper respiratory tract infection",
  "match": "bovenste luchtweginfectie|bovensteluchtweginfectie|blwi",
  "option_only": true
 },
 "bètahemolytische streptokokken groep b": {
  "title": "Groep B-streptokok (GBS)",
  "short": "De groep B-streptokok (Streptococcus agalactiae) komt voor in darm en vagina en is een belangrijke verwekker van sepsis en meningitis bij pasgeborenen.",
  "definition": "<p><strong>Groep B-streptokokken</strong> (<em>Streptococcus agalactiae</em>) zijn grampositieve, bètahemolytische ketenkokken. Ze komen bij een deel van de vrouwen voor in darm en vagina zonder klachten.</p><p>Tijdens de bevalling kan de baby besmet raken, met risico op neonatale sepsis, pneumonie en meningitis (vooral in de eerste levensdagen). Bij risicofactoren krijgt de moeder antibiotica tijdens de bevalling.</p>",
  "image_url": "",
  "wiki_title": "Group B streptococcal infection",
  "match": "bètahemolytische streptokokken groep b|groep b streptokokken|groep b-streptokokken|gbs|streptococcus agalactiae",
  "option_only": true
 },
 "teichoïnezuur": {
  "title": "Teichoïnezuur",
  "short": "Teichoïnezuren zijn polymeren in de dikke peptidoglycaanlaag van grampositieve bacteriën; ze dragen bij aan hechting en ontstekingsactivatie.",
  "definition": "<p><strong>Teichoïnezuren</strong> zijn polymeren van glycerol- of ribitolfosfaat die verankerd zijn in de peptidoglycaanlaag (wandteichoïnezuur) of in de celmembraan (lipoteichoïnezuur) van <em>grampositieve</em> bacteriën.</p><p>Ze geven de celwand een negatieve lading, helpen bij hechting aan gastheercellen en worden door Toll-like receptoren (TLR2) herkend, waardoor ze een ontstekingsreactie uitlokken. Gramnegatieve bacteriën hebben ze niet.</p>",
  "image_url": "",
  "wiki_title": "Teichoic acid",
  "match": "teichoïnezuur|teichoinezuur|lipoteichoïnezuur|teichoïnezuren",
  "option_only": true
 },
 "periplasmatische ruimte": {
  "title": "Periplasmatische ruimte",
  "short": "De periplasmatische ruimte is de ruimte tussen de binnenmembraan en de buitenmembraan van gramnegatieve bacteriën, met daarin de dunne peptidoglycaanlaag.",
  "definition": "<p>De <strong>periplasmatische ruimte</strong> ligt bij <em>gramnegatieve</em> bacteriën tussen de cytoplasmamembraan (binnenmembraan) en de buitenmembraan. Hierin bevindt zich de dunne peptidoglycaanlaag.</p><p>Het periplasma bevat allerlei eiwitten, zoals transport- en bindingseiwitten en enzymen; ook bèta-lactamasen kunnen hier antibiotica afbreken voordat ze hun doelwit bereiken.</p>",
  "image_url": "",
  "wiki_title": "Periplasm",
  "match": "periplasmatische ruimte|periplasma",
  "option_only": true
 },
 "recombinatie": {
  "title": "Recombinatie",
  "short": "Recombinatie is het uitwisselen en opnieuw combineren van stukken DNA tussen twee DNA-moleculen, zoals bij crossing-over of na opname van vreemd DNA.",
  "definition": "<p>Bij <strong>(genetische) recombinatie</strong> worden stukken DNA tussen twee DNA-moleculen uitgewisseld, waardoor nieuwe combinaties van genen ontstaan. Bij homologe recombinatie gebeurt dit tussen sterk gelijkende sequenties.</p><p>Bij eukaryoten treedt recombinatie op tijdens de meiose (crossing-over). Bij bacteriën is recombinatie de stap waarmee via transformatie, transductie of conjugatie binnengekomen DNA in het eigen chromosoom wordt ingebouwd.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "recombinatie|genetische recombinatie|homologe recombinatie",
  "option_only": true
 },
 "penicilline": {
  "title": "Penicilline",
  "short": "Penicilline is een bètalactamantibioticum dat de celwandsynthese van vooral grampositieve bacteriën remt.",
  "definition": "<p><strong>Penicilline</strong> (benzylpenicilline) is het oudste <em>bètalactamantibioticum</em>. Het bindt aan penicillinebindende eiwitten (transpeptidasen) en verhindert zo de verknoping van peptidoglycaan; de bacterie lyseert (bactericide).</p><p>Het werkt vooral tegen streptokokken, pneumokokken, meningokokken en <em>Treponema pallidum</em>. Bacteriën die bètalactamase produceren (zoals de meeste <em>S. aureus</em>) zijn resistent. De belangrijkste bijwerking is een allergische reactie, tot anafylaxie toe.</p>",
  "image_url": "",
  "wiki_title": "Penicillin",
  "match": "penicilline|benzylpenicilline|penicilline g|feneticilline",
  "option_only": true
 },
 "amoxicilline": {
  "title": "Amoxicilline",
  "short": "Amoxicilline is een breedspectrum-penicilline die ook een deel van de gramnegatieve bacteriën dekt; veel gebruikt bij luchtweginfecties.",
  "definition": "<p><strong>Amoxicilline</strong> is een aminopenicilline: een bètalactamantibioticum dat de celwandsynthese remt. Het spectrum is breder dan penicilline en omvat ook o.a. <em>H. influenzae</em> en <em>E. coli</em> (mits geen bètalactamase).</p><p>Het is in de huisartsenpraktijk eerste keus bij pneumonie en wordt ook gebruikt bij otitis en sinusitis. Met clavulaanzuur (amoxicilline-clavulaanzuur) is het ook werkzaam tegen bètalactamasevormers.</p>",
  "image_url": "",
  "wiki_title": "Amoxicillin",
  "match": "amoxicilline|amoxicillin",
  "option_only": true
 },
 "doxycycline": {
  "title": "Doxycycline",
  "short": "Doxycycline is een tetracycline: een bacteriostatisch antibioticum dat de eiwitsynthese remt via het 30S-ribosoom.",
  "definition": "<p><strong>Doxycycline</strong> behoort tot de <em>tetracyclines</em>. Het bindt aan de 30S-subeenheid van het bacteriële ribosoom en remt zo de eiwitsynthese (bacteriostatisch).</p><p>Het is werkzaam tegen veel luchtwegpathogenen en tegen intracellulaire verwekkers zoals <em>Chlamydia</em>, <em>Mycoplasma</em>, <em>Rickettsia</em> en <em>Borrelia</em> (ziekte van Lyme). Niet geven aan zwangeren en jonge kinderen (verkleuring van tanden en botten); kan fotosensibiliteit geven.</p>",
  "image_url": "",
  "wiki_title": "Doxycycline",
  "match": "doxycycline",
  "option_only": true
 },
 "meropenem": {
  "title": "Meropenem",
  "short": "Meropenem is een carbapenem: een zeer breedspectrum-bètalactamantibioticum, gereserveerd voor ernstige of resistente infecties.",
  "definition": "<p><strong>Meropenem</strong> is een <em>carbapenem</em>, een bètalactamantibioticum dat de celwandsynthese remt en stabiel is tegen de meeste bètalactamasen, inclusief ESBL.</p><p>Het heeft een zeer breed spectrum (grampositief, gramnegatief inclusief <em>Pseudomonas</em>, en anaeroben) en wordt intraveneus gegeven bij ernstige ziekenhuisinfecties. Om resistentie te voorkomen wordt het terughoudend gebruikt.</p>",
  "image_url": "",
  "wiki_title": "Meropenem",
  "match": "meropenem|carbapenem|carbapenems",
  "option_only": true
 },
 "metoprolol": {
  "title": "Metoprolol",
  "short": "Metoprolol is een cardioselectieve bètablokker (β1) die hartfrequentie en contractiekracht verlaagt; gebruikt bij hypertensie, angina pectoris en hartfalen.",
  "definition": "<p><strong>Metoprolol</strong> is een <em>β1-selectieve</em> bètablokker. Door blokkade van β1-receptoren in het hart dalen hartfrequentie, contractiliteit en geleidingssnelheid in de AV-knoop; in de nier remt het de reninesecretie.</p><p>Indicaties: hypertensie, angina pectoris, na een myocardinfarct, hartfalen en ritmestoornissen (frequentiecontrole). Bijwerkingen: bradycardie, vermoeidheid, koude extremiteiten. Bij hoge doses verdwijnt de selectiviteit en kan bronchoconstrictie optreden.</p>",
  "image_url": "",
  "wiki_title": "Metoprolol",
  "match": "metoprolol",
  "option_only": true
 },
 "bisoprolol": {
  "title": "Bisoprolol",
  "short": "Bisoprolol is een sterk β1-selectieve bètablokker, gebruikt bij hypertensie, angina pectoris en hartfalen.",
  "definition": "<p><strong>Bisoprolol</strong> is een <em>cardioselectieve</em> bètablokker met een hoge affiniteit voor β1-receptoren in het hart. Het verlaagt hartfrequentie, contractiekracht en zuurstofverbruik van het myocard.</p><p>Het wordt eenmaal daags gegeven bij hypertensie, stabiele angina pectoris, ritmestoornissen en hartfalen met verminderde ejectiefractie. Bijwerkingen zijn bradycardie, vermoeidheid en koude handen en voeten.</p>",
  "image_url": "",
  "wiki_title": "Bisoprolol",
  "match": "bisoprolol",
  "option_only": true
 },
 "hydrochloorthiazide": {
  "title": "Hydrochloorthiazide",
  "short": "Hydrochloorthiazide is een thiazidediureticum dat de Na⁺/Cl⁻-cotransporter in de distale tubulus remt; eerste keus bij hypertensie.",
  "definition": "<p><strong>Hydrochloorthiazide</strong> remt de <em>Na⁺/Cl⁻-cotransporter</em> (NCC) in de distale convoluut. Daardoor wordt meer natrium en water uitgescheiden; op de lange termijn daalt ook de perifere weerstand.</p><p>Het is een veelgebruikt eerstelijns antihypertensivum. Bijwerkingen: hypokaliëmie, hyponatriëmie, hypomagnesiëmie, hyperurikemie (jicht) en hyperglykemie; de calciumuitscheiding neemt juist af.</p>",
  "image_url": "",
  "wiki_title": "Hydrochlorothiazide",
  "match": "hydrochloorthiazide|hctz|thiazide|thiazidediureticum|thiazide diureticum|hydrochloortiazide",
  "option_only": true
 },
 "acetylsalicylzuur": {
  "title": "Acetylsalicylzuur",
  "short": "Acetylsalicylzuur (aspirine) remt onomkeerbaar het enzym cyclo-oxygenase; in lage dosis remt het de bloedplaatjesaggregatie.",
  "definition": "<p><strong>Acetylsalicylzuur</strong> acetyleert en remt <em>onomkeerbaar</em> het enzym cyclo-oxygenase (COX-1 en COX-2). Daardoor worden minder prostaglandinen en tromboxaan A<sub>2</sub> gevormd.</p><p>In lage dosis (80–100 mg) remt het via tromboxaan de bloedplaatjesaggregatie voor de hele levensduur van het plaatje (±7–10 dagen); dit wordt gebruikt ter preventie van hart- en vaatziekten. In hoge dosis werkt het pijnstillend, koortsverlagend en ontstekingsremmend. Bijwerkingen: maagulcera, bloedingen en bij kinderen het syndroom van Reye.</p>",
  "image_url": "",
  "wiki_title": "Aspirin",
  "match": "acetylsalicylzuur|aspirine|ascal|asa|carbasalaatcalcium",
  "option_only": true
 },
 "paracetamol": {
  "title": "Paracetamol",
  "short": "Paracetamol is een pijnstiller en koortsverlager zonder relevante ontstekingsremmende werking; bij overdosering levertoxisch.",
  "definition": "<p><strong>Paracetamol</strong> werkt pijnstillend en koortsverlagend, vermoedelijk via remming van prostaglandinesynthese in het centrale zenuwstelsel. Perifeer is het nauwelijks ontstekingsremmend en het remt de bloedplaatjes niet.</p><p>Het is bij gewone dosering veilig en daarom eerste stap van de pijnladder. Bij overdosering raakt glutathion in de lever uitgeput en hoopt de toxische metaboliet NAPQI zich op, met levernecrose; het antidotum is acetylcysteïne.</p>",
  "image_url": "",
  "wiki_title": "Paracetamol",
  "match": "paracetamol|acetaminofen",
  "option_only": true
 },
 "metformine": {
  "title": "Metformine",
  "short": "Metformine is het eerstekeusmiddel bij diabetes mellitus type 2; het remt vooral de glucoseproductie door de lever.",
  "definition": "<p><strong>Metformine</strong> is een biguanide dat de <em>gluconeogenese in de lever</em> remt en de insulinegevoeligheid van spier verbetert. Het stimuleert de insulineafgifte niet en geeft daarom op zichzelf geen hypoglykemie.</p><p>Het is eerste keus bij diabetes type 2 en is gewichtsneutraal. Bijwerkingen zijn vooral maag-darmklachten; zeldzaam is lactaatacidose (risico bij ernstige nierfunctiestoornis). Langdurig gebruik kan vitamine B12-tekort geven.</p>",
  "image_url": "",
  "wiki_title": "Metformin",
  "match": "metformine|metformin",
  "option_only": true
 },
 "prednison": {
  "title": "Prednison / prednisolon",
  "short": "Prednison(olon) is een synthetisch glucocorticoïd met sterke ontstekingsremmende en immunosuppressieve werking.",
  "definition": "<p><strong>Prednison</strong> is een prodrug die in de lever wordt omgezet in het actieve <strong>prednisolon</strong>. Beide zijn synthetische <em>glucocorticoïden</em>: ze binden aan de intracellulaire glucocorticoïdreceptor en veranderen de gentranscriptie.</p><p>Daardoor remmen ze de vorming van allerlei ontstekingsmediatoren en de activatie van ontstekingscellen. Gebruikt bij astma/COPD-exacerbaties, auto-immuunziekten en allergieën. Bijwerkingen bij langdurig gebruik: osteoporose, hyperglykemie, gewichtstoename, huidatrofie, infectierisico en bijnierschorsremming.</p>",
  "image_url": "",
  "wiki_title": "Prednisolone",
  "match": "prednison|prednisolon|prednisone|prednisolone",
  "option_only": true
 },
 "quetiapine": {
  "title": "Quetiapine",
  "short": "Quetiapine is een atypisch antipsychoticum dat vooral sederend werkt; gebruikt bij psychose, bipolaire stoornis en soms bij onrust.",
  "definition": "<p><strong>Quetiapine</strong> is een <em>atypisch (tweede generatie) antipsychoticum</em>. Het blokkeert dopamine-D2- en serotonine-5-HT2A-receptoren, en daarnaast sterk histamine-H1- en α1-receptoren.</p><p>Daardoor werkt het duidelijk sederend en geeft het weinig extrapiramidale bijwerkingen. Indicaties: schizofrenie, bipolaire stoornis (manie en depressie). Bijwerkingen: sufheid, orthostatische hypotensie, gewichtstoename en metabole ontregeling.</p>",
  "image_url": "",
  "wiki_title": "Quetiapine",
  "match": "quetiapine",
  "option_only": true
 },
 "chemotherapie": {
  "title": "Chemotherapie",
  "short": "Chemotherapie is behandeling met cytostatica: medicijnen die snel delende (kanker)cellen doden of hun deling remmen.",
  "definition": "<p><strong>Chemotherapie</strong> is behandeling met <em>cytostatica</em>. Deze grijpen in op de celdeling, bijvoorbeeld door DNA te beschadigen (alkylerende middelen, platinaverbindingen), de DNA-synthese te remmen (antimetabolieten) of de mitosespoel te verstoren (taxanen, vinca-alkaloïden).</p><p>Omdat ook gezonde, snel delende cellen geraakt worden, zijn bijwerkingen beenmergsuppressie, haaruitval, mucositis en misselijkheid. Chemotherapie kan curatief, (neo)adjuvant of palliatief worden ingezet.</p>",
  "image_url": "",
  "wiki_title": "Chemotherapy",
  "match": "chemotherapie|chemo|cytostatica",
  "option_only": true
 },
 "urokinase": {
  "title": "Urokinase",
  "short": "Urokinase is een plasminogeenactivator: het zet plasminogeen om in plasmine, dat fibrine afbreekt (fibrinolyse).",
  "definition": "<p><strong>Urokinase</strong> (urokinase-type plasminogeenactivator, uPA) is een serineprotease dat <em>plasminogeen</em> omzet in het actieve <em>plasmine</em>. Plasmine breekt fibrine af en lost zo bloedstolsels op.</p><p>Het wordt o.a. in de nier gemaakt. Als geneesmiddel is het een trombolyticum, net als alteplase (tPA) en streptokinase; daarnaast speelt uPA een rol bij weefselremodellering en tumorinvasie.</p>",
  "image_url": "",
  "wiki_title": "Urokinase",
  "match": "urokinase|upa",
  "option_only": true
 },
 "somatostatine analoog": {
  "title": "Somatostatine-analoog",
  "short": "Somatostatine-analogen (zoals octreotide) bootsen somatostatine na en remmen de afgifte van groeihormoon en veel maag-darmhormonen.",
  "definition": "<p><strong>Somatostatine-analogen</strong> zoals <em>octreotide</em> en <em>lanreotide</em> zijn langwerkende varianten van het hormoon somatostatine. Ze binden aan somatostatinereceptoren en remmen de afgifte van o.a. groeihormoon, TSH, insuline, glucagon en gastro-intestinale hormonen.</p><p>Ze worden gebruikt bij acromegalie, hormoonproducerende neuro-endocriene tumoren (bijv. carcinoïdsyndroom) en bij varicesbloedingen (vermindering van de splanchnische doorbloeding).</p>",
  "image_url": "",
  "wiki_title": "Octreotide",
  "match": "somatostatine analoog|somatostatine-analoog|somatostatineanaloog|octreotide|lanreotide",
  "option_only": true
 },
 "volle agonist": {
  "title": "Volle agonist",
  "short": "Een volle agonist bindt aan een receptor en activeert die maximaal: de intrinsieke activiteit (efficacy) is 1.",
  "definition": "<p>Een <strong>volle agonist</strong> bindt aan een receptor en brengt het maximaal mogelijke effect teweeg; de <em>intrinsieke activiteit</em> (efficacy) is 1.</p><p>Affiniteit (hoe goed een stof bindt) en efficacy (hoe sterk de stof de receptor activeert na binding) zijn verschillende eigenschappen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "volle agonist|volledige agonist|full agonist",
  "option_only": true
 },
 "alfa 1 receptor": {
  "title": "α1-adrenerge receptor",
  "short": "De α1-receptor is een adrenerge receptor (Gq) op gladde spier; activatie geeft vasoconstrictie, mydriasis en contractie van de blaassfincter.",
  "definition": "<p>De <strong>α1-adrenerge receptor</strong> is een G-eiwitgekoppelde receptor (Gq) die via fosfolipase C, IP<sub>3</sub> en calcium gladde spiercellen laat samentrekken.</p><p>Effecten van activatie (door noradrenaline/adrenaline): <em>vasoconstrictie</em> (bloeddrukstijging), mydriasis via de m. dilatator pupillae en contractie van de interne blaas- en prostaatsfincter. α1-blokkers (zoals doxazosine, tamsulosine) worden gebruikt bij hypertensie en BPH.</p>",
  "image_url": "",
  "wiki_title": "Alpha-1 adrenergic receptor",
  "match": "alfa 1 receptor|alfa-1 receptor|alfa-1-receptor|α1-receptor|alfa1-receptor|alfa 1-receptor|α1 receptor",
  "option_only": true
 },
 "alfa 2 receptor": {
  "title": "α2-adrenerge receptor",
  "short": "De α2-receptor is een remmende adrenerge receptor (Gi), o.a. presynaptisch, die de afgifte van noradrenaline vermindert.",
  "definition": "<p>De <strong>α2-adrenerge receptor</strong> is gekoppeld aan een Gi-eiwit en remt adenylaatcyclase (minder cAMP).</p><p>Hij zit onder meer <em>presynaptisch</em> op noradrenerge zenuwuiteinden, waar hij als negatieve terugkoppeling de afgifte van noradrenaline remt; centraal verlaagt dit de sympathische activiteit. Ook remt hij de insulineafgifte. Agonisten zoals clonidine worden gebruikt als antihypertensivum en sedativum.</p>",
  "image_url": "",
  "wiki_title": "Alpha-2 adrenergic receptor",
  "match": "alfa 2 receptor|alfa-2 receptor|alfa-2-receptor|α2-receptor|alfa2-receptor|alfa 2-receptor|α2 receptor",
  "option_only": true
 },
 "beta 1 receptor": {
  "title": "β1-adrenerge receptor",
  "short": "De β1-receptor is een adrenerge receptor (Gs) vooral in het hart; activatie verhoogt hartfrequentie en contractiekracht en de reninesecretie.",
  "definition": "<p>De <strong>β1-adrenerge receptor</strong> is gekoppeld aan een Gs-eiwit: activatie verhoogt cAMP en proteïnekinase A.</p><p>Hij zit vooral in het <em>hart</em>, waar hij hartfrequentie (positief chronotroop), contractiekracht (positief inotroop) en geleidingssnelheid verhoogt, en in de juxtaglomerulaire cellen van de nier, waar hij de <em>reninesecretie</em> stimuleert. Bètablokkers als metoprolol werken vooral hierop.</p>",
  "image_url": "",
  "wiki_title": "Beta-1 adrenergic receptor",
  "match": "beta 1 receptor|beta-1 receptor|beta-1-receptor|bèta-1-receptor|β1-receptor|beta1-receptor|beta 1-receptor|β1 receptor",
  "option_only": true
 },
 "beta 2 receptor": {
  "title": "β2-adrenerge receptor",
  "short": "De β2-receptor is een adrenerge receptor (Gs) op gladde spier; activatie geeft bronchodilatatie en vasodilatatie in skeletspier.",
  "definition": "<p>De <strong>β2-adrenerge receptor</strong> is via een Gs-eiwit gekoppeld aan cAMP-verhoging, wat in gladde spier <em>relaxatie</em> geeft.</p><p>Effecten: bronchodilatatie, vasodilatatie in skeletspier, relaxatie van de uterus, en metabool glycogenolyse in lever en spier en verschuiving van kalium de cel in. β2-agonisten (salbutamol, formoterol) worden gebruikt bij astma en COPD.</p>",
  "image_url": "",
  "wiki_title": "Beta-2 adrenergic receptor",
  "match": "beta 2 receptor|beta-2 receptor|beta-2-receptor|bèta-2-receptor|β2-receptor|beta2-receptor|beta 2-receptor|β2 receptor",
  "option_only": true
 },
 "acetylcholine": {
  "title": "Acetylcholine",
  "short": "Acetylcholine is de neurotransmitter van de neuromusculaire overgang, van alle autonome ganglia en van het parasympathische zenuwstelsel.",
  "definition": "<p><strong>Acetylcholine</strong> wordt gemaakt uit choline en acetyl-CoA en na afgifte snel afgebroken door <em>acetylcholinesterase</em>.</p><p>Het werkt op <em>nicotinerge</em> receptoren (ionkanalen: neuromusculaire eindplaat, autonome ganglia, bijniermerg) en <em>muscarinerge</em> receptoren (G-eiwitgekoppeld: doelorganen van het parasympathicus en de zweetklieren). Centraal speelt het een rol bij aandacht en geheugen; bij de ziekte van Alzheimer is er een cholinerg tekort.</p>",
  "image_url": "",
  "wiki_title": "Acetylcholine",
  "match": "acetylcholine|ach",
  "option_only": true
 },
 "serotonine": {
  "title": "Serotonine",
  "short": "Serotonine (5-HT) is een monoamine uit tryptofaan; neurotransmitter voor stemming, slaap en eetlust en in de darm en bloedplaatjes actief.",
  "definition": "<p><strong>Serotonine</strong> (5-hydroxytryptamine) wordt gemaakt uit het aminozuur <em>tryptofaan</em>. Het meeste zit in enterochromaffiene cellen van de darm en wordt in bloedplaatjes opgeslagen.</p><p>In het brein komen serotonerge neuronen uit de raphekernen van de hersenstam; ze beïnvloeden stemming, angst, slaap, eetlust en pijn. SSRI's remmen de heropname en worden bij depressie en angststoornissen gebruikt. In de darm stimuleert serotonine de motiliteit; perifeer veroorzaakt het vasoconstrictie of -dilatatie afhankelijk van het vaatbed.</p>",
  "image_url": "",
  "wiki_title": "Serotonin",
  "match": "serotonine|5-ht|5-hydroxytryptamine|serotonin",
  "option_only": true
 },
 "phenylethanolamine n-methyltransferase": {
  "title": "Fenylethanolamine-N-methyltransferase (PNMT)",
  "short": "PNMT is het enzym in het bijniermerg dat noradrenaline omzet in adrenaline; het wordt gestimuleerd door cortisol.",
  "definition": "<p><strong>PNMT</strong> (fenylethanolamine-N-methyltransferase) katalyseert de laatste stap van de catecholaminesynthese: de methylering van <em>noradrenaline tot adrenaline</em>.</p><p>De syntheseroute is tyrosine → L-DOPA → dopamine → noradrenaline → adrenaline. PNMT komt vooral voor in de chromaffiene cellen van het <em>bijniermerg</em>. Cortisol uit de omringende bijnierschors, dat via het portale vaatstelsel het merg bereikt, induceert PNMT.</p>",
  "image_url": "",
  "wiki_title": "Phenylethanolamine N-methyltransferase",
  "match": "phenylethanolamine n-methyltransferase|fenylethanolamine-n-methyltransferase|phenylethanolamine-n-methyltransferase|pnmt",
  "option_only": true
 },
 "catalase": {
  "title": "Catalase",
  "short": "Catalase is een enzym dat waterstofperoxide omzet in water en zuurstof; bacteriën met catalase (zoals stafylokokken) zijn catalasepositief.",
  "definition": "<p><strong>Catalase</strong> breekt <em>waterstofperoxide</em> af: 2 H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O + O<sub>2</sub>. In menselijke cellen zit het vooral in de peroxisomen en beschermt het tegen oxidatieve schade.</p><p>In de microbiologie is de catalasetest een snelle manier om grampositieve kokken te onderscheiden: <em>stafylokokken</em> zijn catalasepositief (bruisen met H<sub>2</sub>O<sub>2</sub>), <em>streptokokken</em> catalasenegatief. Catalasepositieve micro-organismen zijn ook beter bestand tegen de oxidatieve burst van fagocyten.</p>",
  "image_url": "",
  "wiki_title": "Catalase",
  "match": "catalase",
  "option_only": true
 },
 "glucose": {
  "title": "Glucose",
  "short": "Glucose is een monosacharide (C₆H₁₂O₆) en de belangrijkste brandstof van het lichaam; de bloedspiegel wordt strak geregeld door insuline en glucagon.",
  "definition": "<p><strong>Glucose</strong> is een hexose en de centrale brandstof van het metabolisme. Cellen breken het af via de glycolyse en daarna (aeroob) via de citroenzuurcyclus en oxidatieve fosforylering tot CO<sub>2</sub> en water, met vorming van ATP.</p><p>Het lichaam slaat glucose op als <em>glycogeen</em> in lever en spier. De bloedglucose (normaal nuchter ±4–6 mmol/L) wordt verlaagd door insuline en verhoogd door glucagon, adrenaline en cortisol. Het brein is sterk afhankelijk van glucose.</p>",
  "image_url": "",
  "wiki_title": "Glucose",
  "match": "glucose|druivensuiker|bloedglucose",
  "option_only": true
 },
 "glucose-1-fosfaat (g1p)": {
  "title": "Glucose-1-fosfaat",
  "short": "Glucose-1-fosfaat is het product van de glycogeenafbraak door glycogeenfosforylase en een tussenstap bij de glycogeensynthese.",
  "definition": "<p><strong>Glucose-1-fosfaat</strong> ontstaat wanneer glycogeenfosforylase glucose-eenheden van glycogeen afsplitst. Fosfoglucomutase zet het vervolgens om in <em>glucose-6-fosfaat</em>, dat de glycolyse in kan of (in de lever) via glucose-6-fosfatase tot vrij glucose wordt omgezet.</p><p>Bij de glycogeensynthese loopt de route andersom: glucose-6-fosfaat → glucose-1-fosfaat → UDP-glucose, dat door glycogeensynthase aan de keten wordt gekoppeld.</p>",
  "image_url": "",
  "wiki_title": "Glucose 1-phosphate",
  "match": "glucose-1-fosfaat (g1p)|glucose-1-fosfaat|g1p|glucose 1-fosfaat",
  "option_only": true
 },
 "spier glycogeen": {
  "title": "Spierglycogeen",
  "short": "Spierglycogeen is de glucosevoorraad in skeletspier; het wordt alleen voor de spier zelf gebruikt en levert bij intensieve inspanning snel energie via de glycolyse.",
  "definition": "<p><strong>Spierglycogeen</strong> is een vertakt polymeer van glucose dat in skeletspiercellen ligt opgeslagen (totaal enkele honderden grammen). Omdat spier geen glucose-6-fosfatase heeft, kan het glucose niet aan het bloed afgeven: de voorraad is alleen voor de spier zelf.</p><p>Bij inspanning wordt het via glycogenolyse en glycolyse afgebroken, ook anaeroob (met lactaatvorming).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "spier glycogeen|spierglycogeen|glycogeen in spier",
  "option_only": true
 },
 "vetzuren": {
  "title": "Vetzuren",
  "short": "Vetzuren zijn koolstofketens met een carboxylgroep; ze worden via bèta-oxidatie in de mitochondriën verbrand en leveren veel ATP, maar alleen aeroob.",
  "definition": "<p><strong>Vetzuren</strong> zijn lange koolwaterstofketens met een carboxylgroep, verzadigd of onverzadigd. Ze worden opgeslagen als triglyceriden in vetweefsel en bij behoefte door lipolyse vrijgemaakt.</p><p>In de cel worden ze met carnitine de mitochondriën in getransporteerd en via <em>bèta-oxidatie</em> afgebroken tot acetyl-CoA, dat de citroenzuurcyclus in gaat. Vetzuren leveren per gram veel meer energie dan glucose, maar alleen via zuurstofafhankelijke stofwisseling en relatief langzaam. In de lever kunnen ze ketonlichamen vormen.</p>",
  "image_url": "",
  "wiki_title": "Fatty acid",
  "match": "vetzuren|vrije vetzuren|vetzuur|vetzuurverbranding|vetzuuroxidatie",
  "option_only": true
 },
 "foliumzuur": {
  "title": "Foliumzuur",
  "short": "Foliumzuur (vitamine B11/B9) is nodig voor DNA-synthese; tekort geeft megaloblastaire anemie en verhoogt het risico op een neuralebuisdefect.",
  "definition": "<p><strong>Foliumzuur</strong> (folaat) is als tetrahydrofolaat een drager van één-koolstofgroepen, nodig voor de synthese van purines en thymidine en dus voor <em>DNA-synthese</em> en celdeling.</p><p>Tekort geeft een <em>megaloblastaire (macrocytaire) anemie</em>. Een tekort rond de conceptie verhoogt het risico op neuralebuisdefecten (spina bifida); daarom wordt vrouwen met kinderwens aangeraden vanaf 4 weken voor de conceptie tot 10 weken zwangerschap foliumzuur te slikken.</p>",
  "image_url": "",
  "wiki_title": "Folate",
  "match": "foliumzuur|folaat|vitamine b11|vitamine b9",
  "option_only": true
 },
 "vitamine b1": {
  "title": "Vitamine B1 (thiamine)",
  "short": "Thiamine is een cofactor voor o.a. pyruvaatdehydrogenase; tekort (vaak bij alcoholisme) geeft beriberi en Wernicke-encefalopathie.",
  "definition": "<p><strong>Thiamine</strong> (vitamine B1) is als thiaminepyrofosfaat cofactor van enzymen in het koolhydraatmetabolisme, zoals <em>pyruvaatdehydrogenase</em>, α-ketoglutaraatdehydrogenase en transketolase.</p><p>Tekort komt vooral voor bij alcoholmisbruik en ondervoeding. Het geeft <em>beriberi</em> (neuropathie, hartfalen) en de <em>Wernicke-encefalopathie</em> (verwardheid, ataxie, oogbewegingsstoornissen), eventueel gevolgd door het syndroom van Korsakov. Geef thiamine vóór glucose bij een risicopatiënt.</p>",
  "image_url": "",
  "wiki_title": "Thiamine",
  "match": "vitamine b1|thiamine|thiamine (vitamine b1)",
  "option_only": true
 },
 "vitamine b6": {
  "title": "Vitamine B6 (pyridoxine)",
  "short": "Vitamine B6 is als pyridoxaalfosfaat cofactor bij het aminozuurmetabolisme en de synthese van neurotransmitters en heem.",
  "definition": "<p><strong>Vitamine B6</strong> (pyridoxine) wordt omgezet in <em>pyridoxaalfosfaat</em>, de cofactor van transaminasen en decarboxylasen. Het is nodig voor het aminozuurmetabolisme, de synthese van neurotransmitters (GABA, serotonine, dopamine) en van heem.</p><p>Tekort is zeldzaam en kan optreden bij gebruik van isoniazide; het geeft perifere neuropathie, glossitis en een sideroblastaire anemie. Overdosering geeft eveneens neuropathie.</p>",
  "image_url": "",
  "wiki_title": "Vitamin B6",
  "match": "vitamine b6|pyridoxine|pyridoxaalfosfaat",
  "option_only": true
 },
 "calcium/d3": {
  "title": "Calcium en vitamine D3",
  "short": "Calcium met vitamine D3 wordt gegeven ter preventie en behandeling van osteoporose, vooral bij ouderen en bij gebruik van corticosteroïden of bisfosfonaten.",
  "definition": "<p>Een combinatiepreparaat van <strong>calcium en vitamine D3</strong> (colecalciferol) ondersteunt de botmineralisatie. Vitamine D bevordert de calciumopname in de darm; calcium is de bouwstof van hydroxyapatiet in bot.</p><p>Het wordt voorgeschreven bij osteoporose (naast bisfosfonaten), bij ouderen met een laag vitamine D en bij langdurig corticosteroïdgebruik. Bijwerkingen zijn obstipatie en zelden hypercalciëmie.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "calcium/d3|calcium/vitamine d|calcium en vitamine d|calcium/vitamine d3",
  "option_only": true
 },
 "magnesium": {
  "title": "Magnesium",
  "short": "Magnesium is een belangrijk intracellulair kation, cofactor van ATP-afhankelijke enzymen en nodig voor stabiele zenuw- en spierprikkelbaarheid.",
  "definition": "<p><strong>Magnesium</strong> (Mg<sup>2+</sup>) zit vooral in bot en intracellulair. Het is cofactor van honderden enzymen, met name die met ATP werken, en stabiliseert de membraanpotentiaal.</p><p>Hypomagnesiëmie (o.a. door diuretica, PPI's, alcohol of diarree) geeft spierkrampen, tetanie, ritmestoornissen en kan hypokaliëmie en hypocalciëmie onderhouden (PTH-secretie daalt). Magnesiumsulfaat wordt gebruikt bij (pre-)eclampsie en torsade de pointes.</p>",
  "image_url": "",
  "wiki_title": "Magnesium in biology",
  "match": "magnesium|mg2+|magnesiumsulfaat",
  "option_only": true
 },
 "oestrogeen": {
  "title": "Oestrogeen",
  "short": "Oestrogenen (vooral oestradiol) zijn vrouwelijke geslachtshormonen uit de ovaria die de geslachtskenmerken, cyclus en botdichtheid beïnvloeden.",
  "definition": "<p><strong>Oestrogenen</strong> (oestradiol, oestron, oestriol) zijn steroïdhormonen die vooral door de granulosacellen in de ovariële follikel worden gemaakt, door aromatisering van androgenen. In de zwangerschap maakt de placenta veel oestriol.</p><p>Ze zorgen voor de vrouwelijke secundaire geslachtskenmerken, laten het endometrium prolifereren (folliculaire fase), geven rond de ovulatie positieve terugkoppeling (LH-piek) en beschermen botmassa. Na de menopauze daalt de spiegel, wat o.a. osteoporose bevordert.</p>",
  "image_url": "",
  "wiki_title": "Estrogen",
  "match": "oestrogeen|oestrogenen|oestradiol|estradiol|estrogeen",
  "option_only": true
 },
 "alcohol": {
  "title": "Alcohol (ethanol)",
  "short": "Ethanol wordt in de lever afgebroken via acetaldehyde tot azijnzuur; overmatig gebruik schaadt lever, brein, hart en pancreas.",
  "definition": "<p><strong>Ethanol</strong> wordt vooral in de lever geoxideerd door <em>alcoholdehydrogenase</em> tot acetaldehyde en daarna door aldehydedehydrogenase tot acetaat. Hierbij ontstaat veel NADH, wat de gluconeogenese remt (hypoglykemie) en vetstapeling in de lever bevordert.</p><p>Chronisch overmatig gebruik geeft leververvetting, alcoholische hepatitis en cirrose, pancreatitis, cardiomyopathie, hypertensie, neuropathie, thiaminetekort (Wernicke-Korsakov) en een verhoogd risico op verschillende kankers.</p>",
  "image_url": "",
  "wiki_title": "Alcohol (drug)",
  "match": "alcohol|ethanol|alcoholgebruik|overmatig alcoholgebruik|alcoholmisbruik",
  "option_only": true
 },
 "roken": {
  "title": "Roken",
  "short": "Roken is de belangrijkste vermijdbare oorzaak van ziekte en sterfte: het veroorzaakt o.a. longkanker, COPD en hart- en vaatziekten.",
  "definition": "<p>Tabaksrook bevat nicotine (verslavend), koolmonoxide, teer en tientallen kankerverwekkende stoffen. <strong>Roken</strong> beschadigt het luchtwegepitheel en het endotheel en bevordert ontsteking en trombose.</p><p>Het is een hoofdoorzaak van longkanker en andere kankers (o.a. mond, slokdarm, blaas), COPD, atherosclerose (myocardinfarct, CVA, perifeer arterieel vaatlijden) en complicaties in de zwangerschap. Stoppen loont op elke leeftijd.</p>",
  "image_url": "",
  "wiki_title": "Tobacco smoking",
  "match": "roken|tabaksgebruik|tabak",
  "option_only": true
 },
 "il-1 en tnf": {
  "title": "IL-1 en TNF",
  "short": "IL-1 en TNF-α zijn pro-inflammatoire cytokines van macrofagen die koorts, de acutefase-reactie en endotheelactivatie veroorzaken.",
  "definition": "<p><strong>Interleukine-1</strong> en <strong>tumornecrosefactor-α</strong> zijn de klassieke <em>pro-inflammatoire cytokines</em>, vooral afgegeven door geactiveerde macrofagen.</p><p>Ze activeren het endotheel (adhesiemoleculen, leukocytenrekrutering), veroorzaken koorts via prostaglandine E<sub>2</sub> in de hypothalamus en zetten (samen met IL-6) de lever aan tot productie van acutefase-eiwitten zoals CRP. TNF-remmers worden gebruikt bij reumatoïde artritis en IBD.</p>",
  "image_url": "",
  "wiki_title": "Tumor necrosis factor",
  "match": "il-1 en tnf|il-1|tnf|tnf-alfa|tnf-α|interleukine-1|tumornecrosefactor",
  "option_only": true
 },
 "complement factoren": {
  "title": "Complement",
  "short": "Het complementsysteem is een cascade van plasma-eiwitten die micro-organismen opsoneert, ontsteking aanjaagt en via het membraanaanvalscomplex cellen lyseert.",
  "definition": "<p>Het <strong>complementsysteem</strong> bestaat uit plasma-eiwitten (C1–C9 en regulatoren) die in een cascade worden geactiveerd via de klassieke (antilichamen), de lectine- en de alternatieve route.</p><p>Belangrijke functies: <em>opsonisatie</em> (C3b), aantrekken van ontstekingscellen en mestcelactivatie (anafylatoxinen C3a en C5a) en lysis van micro-organismen door het <em>membraanaanvalscomplex</em> (C5b–C9). Tekort aan late complementfactoren geeft een verhoogd risico op <em>Neisseria</em>-infecties.</p>",
  "image_url": "",
  "wiki_title": "Complement system",
  "match": "complement factoren|complementfactoren|complement|complementsysteem",
  "option_only": true
 },
 "antilichamen": {
  "title": "Antilichamen",
  "short": "Antilichamen (immunoglobulinen) zijn door plasmacellen gemaakte Y-vormige eiwitten die specifiek een antigeen binden.",
  "definition": "<p><strong>Antilichamen</strong> worden gemaakt door <em>plasmacellen</em> (gedifferentieerde B-cellen). Ze bestaan uit twee zware en twee lichte ketens; het Fab-deel bindt het antigeen, het Fc-deel bepaalt de effectorfunctie.</p><p>Ze werken door neutralisatie van toxines en virussen, opsonisatie voor fagocytose en activatie van complement. Er zijn vijf klassen: IgM (eerste respons), IgG (meest in bloed, passeert placenta), IgA (slijmvliezen), IgE (allergie, parasieten) en IgD.</p>",
  "image_url": "",
  "wiki_title": "Antibody",
  "match": "antilichamen|antistoffen|immunoglobulinen|antilichaam",
  "option_only": true
 },
 "n. musculocutaneus": {
  "title": "N. musculocutaneus",
  "short": "De n. musculocutaneus (C5–C7) innerveert de flexoren van de bovenarm (m. biceps, m. brachialis, m. coracobrachialis) en de huid van de laterale onderarm.",
  "definition": "<p>De <strong>n. musculocutaneus</strong> komt uit de fasciculus lateralis van de plexus brachialis (C5–C7). Hij doorboort de m. coracobrachialis en loopt tussen de m. biceps brachii en de m. brachialis.</p><p>Motorisch innerveert hij de voorste spiergroep van de bovenarm: <em>m. coracobrachialis, m. biceps brachii en m. brachialis</em> (flexie in de elleboog, supinatie). Zijn sensibele eindtak (n. cutaneus antebrachii lateralis) verzorgt de huid van de laterale onderarm.</p>",
  "image_url": "",
  "wiki_title": "Musculocutaneous nerve",
  "match": "n. musculocutaneus|nervus musculocutaneus|n musculocutaneus",
  "option_only": true
 },
 "n. axillaris": {
  "title": "N. axillaris",
  "short": "De n. axillaris (C5–C6) innerveert de m. deltoideus en m. teres minor en de huid over de deltoideus; kwetsbaar bij een schouderluxatie of collum chirurgicum-fractuur.",
  "definition": "<p>De <strong>n. axillaris</strong> ontspringt uit de fasciculus posterior van de plexus brachialis (C5–C6). Hij loopt door de laterale okselspleet (spatium quadrangulare) samen met de a. circumflexa humeri posterior, rond het collum chirurgicum van de humerus.</p><p>Hij innerveert de <em>m. deltoideus</em> (abductie van de arm voorbij ±15°) en de <em>m. teres minor</em> (exorotatie), en sensibel de huid over het onderste deel van de deltoideus (‘regimental badge area’). Letsel bij schouderluxatie of fractuur van het collum chirurgicum.</p>",
  "image_url": "",
  "wiki_title": "Axillary nerve",
  "match": "n. axillaris|nervus axillaris|n axillaris",
  "option_only": true
 },
 "n. ulnaris": {
  "title": "N. ulnaris",
  "short": "De n. ulnaris (C8–T1) loopt achter de epicondylus medialis (‘telefoonbotje’) en innerveert de meeste intrinsieke handspieren en de huid van de pink.",
  "definition": "<p>De <strong>n. ulnaris</strong> komt uit de fasciculus medialis van de plexus brachialis (C8–T1). Hij loopt achter de epicondylus medialis van de humerus door de sulcus nervi ulnaris en via het kanaal van Guyon naar de hand.</p><p>In de onderarm innerveert hij de m. flexor carpi ulnaris en het ulnaire deel van de m. flexor digitorum profundus; in de hand de meeste intrinsieke spieren (mm. interossei, hypothenar, mm. lumbricales III–IV, m. adductor pollicis). Sensibel: de pink en ulnaire helft van de ringvinger. Uitval geeft een klauwhand en een positief teken van Froment.</p>",
  "image_url": "",
  "wiki_title": "Ulnar nerve",
  "match": "n. ulnaris|nervus ulnaris|n ulnaris",
  "option_only": true
 },
 "n. radialis": {
  "title": "N. radialis",
  "short": "De n. radialis (C5–T1) innerveert alle extensoren van boven- en onderarm; letsel (bijv. bij een humerusschachtfractuur) geeft een dropshand.",
  "definition": "<p>De <strong>n. radialis</strong> is de grootste tak van de fasciculus posterior van de plexus brachialis (C5–T1). Hij loopt in de sulcus nervi radialis spiraalsgewijs om de achterkant van de humerusschacht.</p><p>Motorisch innerveert hij de <em>extensoren</em>: m. triceps brachii, m. brachioradialis, en via de r. profundus de extensoren van pols en vingers en de m. supinator. Sensibel verzorgt hij de achterzijde van arm en onderarm en de dorsale zijde van de radiale hand (eerste webspace). Letsel geeft een <em>dropshand</em>.</p>",
  "image_url": "",
  "wiki_title": "Radial nerve",
  "match": "n. radialis|nervus radialis|n radialis",
  "option_only": true
 },
 "n. suprascapularis": {
  "title": "N. suprascapularis",
  "short": "De n. suprascapularis (C5–C6) innerveert de m. supraspinatus en m. infraspinatus.",
  "definition": "<p>De <strong>n. suprascapularis</strong> komt uit de truncus superior van de plexus brachialis (C5–C6). Hij loopt over de schouder naar dorsaal en gaat door de incisura scapulae onder het lig. transversum scapulae superius.</p><p>Hij innerveert twee spieren van de rotator cuff: de <em>m. supraspinatus</em> (start van abductie) en de <em>m. infraspinatus</em> (exorotatie), en geeft sensibele takjes aan het schoudergewricht.</p>",
  "image_url": "",
  "wiki_title": "Suprascapular nerve",
  "match": "n. suprascapularis|nervus suprascapularis",
  "option_only": true
 },
 "a. axillaris": {
  "title": "A. axillaris",
  "short": "De a. axillaris is de voortzetting van de a. subclavia vanaf de buitenrand van de eerste rib tot de onderrand van de m. teres major.",
  "definition": "<p>De <strong>a. axillaris</strong> begint aan de laterale rand van de <em>eerste rib</em> als voortzetting van de a. subclavia en eindigt aan de onderrand van de m. teres major, waarna zij a. brachialis heet.</p><p>De m. pectoralis minor verdeelt haar in drie delen, die samen zes takken afgeven: a. thoracica superior, a. thoracoacromialis, a. thoracica lateralis, a. subscapularis en de aa. circumflexae humeri anterior en posterior. De fasciculi van de plexus brachialis liggen om haar heen.</p>",
  "image_url": "",
  "wiki_title": "Axillary artery",
  "match": "a. axillaris|arteria axillaris",
  "option_only": true
 },
 "a. subclavia": {
  "title": "A. subclavia",
  "short": "De a. subclavia voorziet de arm, een deel van de hals en het brein (via de a. vertebralis) van bloed; rechts uit de truncus brachiocephalicus, links direct uit de aortaboog.",
  "definition": "<p>De <strong>a. subclavia</strong> ontspringt rechts uit de truncus brachiocephalicus en links direct uit de aortaboog. Zij loopt over de eerste rib achter de m. scalenus anterior (scalenusspleet, samen met de plexus brachialis).</p><p>Belangrijke takken: <em>a. vertebralis</em> (naar het brein), a. thoracica interna, truncus thyrocervicalis en truncus costocervicalis. Aan de buitenrand van de eerste rib gaat zij over in de a. axillaris.</p>",
  "image_url": "",
  "wiki_title": "Subclavian artery",
  "match": "a. subclavia|arteria subclavia",
  "option_only": true
 },
 "a. ulnaris": {
  "title": "A. ulnaris",
  "short": "De a. ulnaris is een van de twee eindtakken van de a. brachialis en loopt aan de ulnaire zijde van de onderarm naar de hand, waar zij vooral de oppervlakkige handboog vormt.",
  "definition": "<p>De <strong>a. ulnaris</strong> ontstaat in de fossa cubiti uit de a. brachialis (samen met de a. radialis). Zij loopt diep aan de ulnaire zijde van de onderarm en daarna via het kanaal van Guyon naar de hand.</p><p>Vlak na haar oorsprong geeft zij de a. interossea communis af. In de hand vormt zij vooral de <em>arcus palmaris superficialis</em>. De doorgankelijkheid wordt getest met de test van Allen.</p>",
  "image_url": "",
  "wiki_title": "Ulnar artery",
  "match": "a. ulnaris|arteria ulnaris",
  "option_only": true
 },
 "vena cava superior": {
  "title": "Vena cava superior",
  "short": "De vena cava superior voert het bloed van hoofd, hals, armen en thoraxwand terug naar het rechteratrium.",
  "definition": "<p>De <strong>vena cava superior</strong> ontstaat door samenvloeiing van de linker en rechter v. brachiocephalica, achter het sternum rechts, en mondt uit in het <em>rechteratrium</em>.</p><p>Zij draineert hoofd, hals, armen en (via de v. azygos) de thoraxwand. Compressie door een tumor (vaak longcarcinoom of lymfoom) geeft het vena cava superior-syndroom: zwelling van gezicht en armen en gestuwde halsvenen.</p>",
  "image_url": "",
  "wiki_title": "Superior vena cava",
  "match": "vena cava superior|v. cava superior|bovenste holle ader",
  "option_only": true
 },
 "ductus thoracicus": {
  "title": "Ductus thoracicus",
  "short": "De ductus thoracicus is het grootste lymfevat; hij voert de lymfe van het grootste deel van het lichaam af naar de linker veneuze hoek.",
  "definition": "<p>De <strong>ductus thoracicus</strong> begint in de buik bij de cisterna chyli, loopt door de hiatus aorticus van het diafragma omhoog door het achterste mediastinum en mondt uit in de <em>linker veneuze hoek</em> (samenkomst v. jugularis interna en v. subclavia sinistra).</p><p>Hij draineert de lymfe van de benen, de buik (inclusief chylus met vetten uit de darm), de linker thoraxhelft, de linker arm en de linker kant van hoofd en hals. De rechter bovenkwadrant draineert via de ductus lymphaticus dexter.</p>",
  "image_url": "",
  "wiki_title": "Thoracic duct",
  "match": "ductus thoracicus|borstbuis",
  "option_only": true
 },
 "trachea": {
  "title": "Trachea",
  "short": "De trachea is de luchtpijp van het strottenhoofd tot de splitsing (carina), verstevigd door C-vormige kraakbeenringen en bekleed met trilhaarepitheel.",
  "definition": "<p>De <strong>trachea</strong> loopt van de onderrand van het cricoïd (±C6) tot de <em>carina</em> (±T4–T5), waar hij splitst in de linker en rechter hoofdbronchus.</p><p>Ze wordt opengehouden door 16–20 C-vormige ringen van hyalien kraakbeen die dorsaal open zijn; daar ligt de m. trachealis (gladde spier), tegen de slokdarm aan. De binnenkant is bekleed met <em>meerrijig trilhaarcilindrisch epitheel</em> met slijmbekercellen (respiratoir epitheel).</p>",
  "image_url": "",
  "wiki_title": "Trachea",
  "match": "trachea|luchtpijp",
  "option_only": true
 },
 "ductus alveolaris": {
  "title": "Ductus alveolaris",
  "short": "Ductus alveolares zijn de gangetjes na de bronchioli respiratorii waarvan de wand vrijwel geheel uit alveoli bestaat.",
  "definition": "<p>De <strong>ductus alveolaris</strong> volgt in de luchtwegboom op de bronchiolus respiratorius en eindigt in de sacculi alveolares. De wand bestaat bijna helemaal uit openingen naar alveoli, met tussen de openingen kleine bundeltjes gladde spier.</p><p>Hij hoort bij het <em>respiratoire deel</em> van de long, waar gaswisseling plaatsvindt (samen met bronchioli respiratorii en alveoli), in tegenstelling tot het geleidende deel (trachea t/m bronchioli terminales).</p>",
  "image_url": "",
  "wiki_title": "Alveolar duct",
  "match": "ductus alveolaris|ductuli alveolares|alveolaire gang",
  "option_only": true
 },
 "pneumothorax": {
  "title": "Pneumothorax",
  "short": "Een pneumothorax is lucht in de pleuraholte, waardoor de long (deels) inklapt; acuut kortademig met pijn, bij spanningspneumothorax levensbedreigend.",
  "definition": "<p>Bij een <strong>pneumothorax</strong> komt lucht tussen de pleurabladen, waardoor de negatieve intrapleurale druk verdwijnt en de long door zijn elastische terugslag inklapt.</p><p>Hij kan spontaan ontstaan (primair bij lange, slanke jonge mannen door blebs; secundair bij longziekte zoals COPD) of na trauma. Klachten: plotselinge pijn op de borst en kortademigheid; verminderd ademgeruis en hypersonore percussie. Bij een <em>spanningspneumothorax</em> hoopt lucht zich op als een ventiel, met verschuiving van het mediastinum en circulatoire shock: direct ontlasten.</p>",
  "image_url": "",
  "wiki_title": "Pneumothorax",
  "match": "pneumothorax|klaplong",
  "option_only": true
 },
 "longfibrose": {
  "title": "Longfibrose",
  "short": "Bij longfibrose wordt het longinterstitium vervangen door bindweefsel; de long wordt stug, met een restrictief beeld en verminderde diffusie.",
  "definition": "<p>Bij <strong>longfibrose</strong> leidt beschadiging en abnormaal herstel van het longinterstitium tot verlittekening. Oorzaken zijn idiopathisch (IPF), stofblootstelling (asbest, silica), auto-immuunziekten, medicatie, bestraling of chronische extrinsieke allergische alveolitis.</p><p>De long wordt stijver (lagere compliantie): een <em>restrictieve</em> longfunctiestoornis (lage TLC en VC, normale of verhoogde FEV1/FVC) met verlaagde diffusiecapaciteit. Klachten: progressieve kortademigheid en droge hoest; bij auscultatie fijne ‘knisper’crepitaties; vaak trommelstokvingers.</p>",
  "image_url": "",
  "wiki_title": "Pulmonary fibrosis",
  "match": "longfibrose|pulmonale fibrose|idiopathische pulmonale fibrose|ipf",
  "option_only": true
 },
 "hypersensitivity pneumonitis": {
  "title": "Extrinsieke allergische alveolitis",
  "short": "Extrinsieke allergische alveolitis is een immuunreactie (type III/IV) in de alveoli op ingeademde organische stoffen, zoals schimmelsporen of vogeleiwitten.",
  "definition": "<p>Bij <strong>hypersensitivity pneumonitis</strong> (extrinsieke allergische alveolitis) reageert het immuunsysteem op herhaald ingeademde organische antigenen: schimmelsporen uit hooi (boerenlong), vogeleiwitten (duivenmelkerslong) of bevochtigerwater.</p><p>Het mechanisme is een type III- (immuuncomplex) en type IV- (T-cel) reactie met lymfocytaire alveolitis en kleine granulomen. Acuut: koorts, hoesten en kortademigheid enkele uren na blootstelling; chronisch kan longfibrose ontstaan. Behandeling: blootstelling vermijden, eventueel corticosteroïden.</p>",
  "image_url": "",
  "wiki_title": "Hypersensitivity pneumonitis",
  "match": "hypersensitivity pneumonitis|extrinsieke allergische alveolitis|eaa|boerenlong|vogelhoudersziekte",
  "option_only": true
 },
 "x-thorax": {
  "title": "X-thorax",
  "short": "Een X-thorax is een röntgenfoto van de borstkas; het eerste beeldvormend onderzoek bij verdenking op longafwijkingen, hartfalen of pneumothorax.",
  "definition": "<p>Een <strong>X-thorax</strong> is een röntgenopname van de borstkas, meestal posterieur-anterieur en lateraal. Lucht is zwart, weke delen grijs en bot wit.</p><p>Het is snel, goedkoop en met een lage stralingsdosis, en wordt gebruikt om o.a. pneumonie (infiltraat), pleuravocht, pneumothorax, longtumoren, hartvergroting en tekenen van hartfalen op te sporen. Kleine of subtiele afwijkingen zijn er minder goed op te zien dan op een CT.</p>",
  "image_url": "",
  "wiki_title": "Chest radiograph",
  "match": "x-thorax|thoraxfoto|röntgenfoto van de thorax|x thorax|x-thorax (röntgenfoto)",
  "option_only": true
 },
 "echo abdomen": {
  "title": "Echo abdomen",
  "short": "Een echo abdomen is een echografisch onderzoek van de buikorganen; zonder straling en goed voor galblaas, galwegen, lever, nieren en vrij vocht.",
  "definition": "<p>Bij een <strong>echo abdomen</strong> wordt met geluidsgolven een beeld gemaakt van de buikorganen. Het onderzoek gebruikt geen ioniserende straling, is goedkoop en direct beschikbaar.</p><p>Het is bijzonder geschikt voor het aantonen van galstenen en cholecystitis, verwijde galwegen, leverafwijkingen, nierstuwing (hydronefrose), een abdominaal aorta-aneurysma en vrij vocht. Darmgas en een dikke buikwand beperken het zicht; de kwaliteit hangt af van de onderzoeker.</p>",
  "image_url": "",
  "wiki_title": "Abdominal ultrasonography",
  "match": "echo abdomen|echografie abdomen|echo van de buik|abdominale echografie|echo-abdomen",
  "option_only": true
 },
 "ct abdomen": {
  "title": "CT abdomen",
  "short": "Een CT abdomen is een röntgenscan in dwarsdoorsneden van de buik, vaak met contrast; goed voor acute buik, tumoren, abcessen en trauma.",
  "definition": "<p>Bij een <strong>CT abdomen</strong> worden met röntgenstraling dunne dwarsdoorsneden van de buik gemaakt, meestal met intraveneus (en soms oraal) contrast.</p><p>Het geeft een overzichtelijk beeld van alle buikorganen, de darm en het retroperitoneum en wordt gebruikt bij een acute buik (bijv. perforatie, diverticulitis, appendicitis bij volwassenen), bij het stadiëren van tumoren, het opsporen van abcessen en bij trauma. Nadelen zijn de stralingsbelasting en het contrastmiddel (nierfunctie, allergie).</p>",
  "image_url": "",
  "wiki_title": "CT scan",
  "match": "ct abdomen|ct-abdomen|ct van de buik|ct-scan abdomen",
  "option_only": true
 },
 "hersenstam": {
  "title": "Hersenstam",
  "short": "De hersenstam (mesencephalon, pons, medulla oblongata) verbindt grote hersenen en ruggenmerg en bevat kernen van hersenzenuwen en centra voor ademhaling en circulatie.",
  "definition": "<p>De <strong>hersenstam</strong> bestaat uit het mesencephalon (middenhersenen), de pons en de medulla oblongata. Alle opstijgende en afdalende banen tussen hersenen en ruggenmerg lopen erdoorheen.</p><p>Hij bevat de kernen van de hersenzenuwen III–XII, de formatio reticularis (bewustzijn, slaap-waakritme) en vitale centra voor ademhaling en hart- en vaatregulatie. Uitval van de hersenstam is daardoor snel levensbedreigend; hersenstamreflexen worden getest bij de vaststelling van hersendood.</p>",
  "image_url": "",
  "wiki_title": "Brainstem",
  "match": "hersenstam|truncus cerebri|truncus encephali",
  "option_only": true
 },
 "hypothalamus": {
  "title": "Hypothalamus",
  "short": "De hypothalamus is het regelcentrum van de homeostase: hij stuurt hypofyse, autonoom zenuwstelsel, temperatuur, honger, dorst en circadiaan ritme.",
  "definition": "<p>De <strong>hypothalamus</strong> is een klein deel van het diencephalon, onder de thalamus en rond de derde ventrikel. Hij is via het infundibulum verbonden met de hypofyse.</p><p>Hij maakt releasing- en inhibiting-hormonen (o.a. TRH, CRH, GnRH, GHRH, dopamine) die via het portale systeem de voorkwab sturen, en ADH en oxytocine die in de achterkwab worden afgegeven. Daarnaast regelt hij lichaamstemperatuur, honger en verzadiging, dorst, het slaap-waakritme (nucleus suprachiasmaticus) en het autonome zenuwstelsel.</p>",
  "image_url": "",
  "wiki_title": "Hypothalamus",
  "match": "hypothalamus",
  "option_only": true
 },
 "thalamus": {
  "title": "Thalamus",
  "short": "De thalamus is het grote schakelstation in het diencephalon: vrijwel alle sensorische informatie (behalve reuk) wordt hier verwerkt op weg naar de cortex.",
  "definition": "<p>De <strong>thalamus</strong> is een paarige, eivormige kern in het diencephalon aan weerszijden van de derde ventrikel. Hij bestaat uit veel subkernen met elk een eigen corticale projectie.</p><p>Sensorische banen (somatosensoriek via de VPL/VPM, zien via het corpus geniculatum laterale, horen via het corpus geniculatum mediale) schakelen hier om naar de cortex. Ook motorische lussen van basale kernen en cerebellum lopen via de thalamus, en hij speelt een rol bij bewustzijn en aandacht.</p>",
  "image_url": "",
  "wiki_title": "Thalamus",
  "match": "thalamus",
  "option_only": true
 },
 "globus pallidus pars externa": {
  "title": "Globus pallidus pars externa (GPe)",
  "short": "De GPe is onderdeel van de basale kernen en vormt een schakel in de indirecte route; hij remt de nucleus subthalamicus.",
  "definition": "<p>De <strong>globus pallidus pars externa</strong> is het laterale deel van de globus pallidus. Hij ontvangt remmende (GABA-erge) input van het striatum en stuurt zelf remmende projecties naar de nucleus subthalamicus.</p><p>Hij is een kernschakel van de <em>indirecte route</em> van de basale kernen (cortex → striatum → GPe → nucleus subthalamicus → GPi/SNr → thalamus), die beweging per saldo afremt.</p>",
  "image_url": "",
  "wiki_title": "Globus pallidus",
  "match": "globus pallidus pars externa|gpe|globus pallidus externus|globus pallidus externa",
  "option_only": true
 },
 "globus pallidus pars interna": {
  "title": "Globus pallidus pars interna (GPi)",
  "short": "De GPi is de belangrijkste uitgangskern van de basale kernen; hij remt (GABA-erg) de motorische thalamus.",
  "definition": "<p>De <strong>globus pallidus pars interna</strong> is samen met de substantia nigra pars reticulata de <em>uitgangskern</em> van de basale kernen. Hij geeft tonisch remmende GABA-erge output naar de motorische kernen van de thalamus.</p><p>De directe route (striatum → GPi) remt de GPi en ontremt zo de thalamus (meer beweging); de indirecte route versterkt via de nucleus subthalamicus juist de remming. De GPi is een doelwit bij diepe hersenstimulatie (o.a. dystonie, Parkinson).</p>",
  "image_url": "",
  "wiki_title": "Globus pallidus",
  "match": "globus pallidus pars interna|gpi|globus pallidus internus|globus pallidus interna",
  "option_only": true
 },
 "nucleus subthalamicus": {
  "title": "Nucleus subthalamicus",
  "short": "De nucleus subthalamicus is een exciterende (glutamaterge) kern van de basale kernen in de indirecte route; laesie geeft hemiballisme.",
  "definition": "<p>De <strong>nucleus subthalamicus</strong> ligt onder de thalamus, boven de substantia nigra. Het is de enige <em>exciterende</em> (glutamaterge) kern van de basale kernen.</p><p>Hij ontvangt remmende input van de GPe en prikkelt de GPi en substantia nigra pars reticulata, waardoor de thalamus sterker geremd wordt (indirecte route). Een laesie (bijv. een lacunair infarct) geeft contralateraal <em>hemiballisme</em>. Het is ook een doelwit voor diepe hersenstimulatie bij de ziekte van Parkinson.</p>",
  "image_url": "",
  "wiki_title": "Subthalamic nucleus",
  "match": "nucleus subthalamicus|stn|subthalamische kern",
  "option_only": true
 },
 "aquaductus cerebri": {
  "title": "Aquaductus cerebri",
  "short": "De aquaductus cerebri is het nauwe kanaal in het mesencephalon dat de derde en vierde ventrikel verbindt.",
  "definition": "<p>De <strong>aquaductus cerebri</strong> (van Sylvius) loopt door het mesencephalon en verbindt de <em>derde ventrikel</em> met de <em>vierde ventrikel</em>. Eromheen ligt de periaqueductale grijze stof.</p><p>Omdat hij zo nauw is, is het een typische plek voor obstructie (bijv. aangeboren stenose of een tumor in de pijnappelklierregio). Dat geeft een niet-communicerende hydrocephalus met verwijding van de laterale en derde ventrikels.</p>",
  "image_url": "",
  "wiki_title": "Cerebral aqueduct",
  "match": "aquaductus cerebri|aqueductus cerebri|aquaduct van sylvius|aqueduct van sylvius",
  "option_only": true
 },
 "laterale ventrikels": {
  "title": "Laterale ventrikels",
  "short": "De laterale ventrikels zijn de twee grootste liquorholtes, één in elke hersenhelft; ze staan via de foramina van Monro in verbinding met de derde ventrikel.",
  "definition": "<p>De <strong>laterale ventrikels</strong> liggen in de beide hemisferen van het telencephalon en hebben een C-vorm met een voorhoorn, lichaam, achterhoorn en onderhoorn (in de temporaalkwab).</p><p>Ze bevatten plexus choroideus, die liquor produceert. Via de foramina interventricularia (Monro) stroomt de liquor naar de derde ventrikel, daarna via de aquaductus naar de vierde ventrikel en de subarachnoïdale ruimte.</p>",
  "image_url": "",
  "wiki_title": "Lateral ventricles",
  "match": "laterale ventrikels|laterale ventrikel|ventriculi laterales|zijventrikels",
  "option_only": true
 },
 "canalis centralis": {
  "title": "Canalis centralis",
  "short": "De canalis centralis is het smalle, met ependym beklede kanaal in het midden van het ruggenmerg; de voortzetting van de vierde ventrikel.",
  "definition": "<p>De <strong>canalis centralis</strong> loopt door het midden van de grijze stof van het ruggenmerg en is een restant van het lumen van de neurale buis. Het is bekleed met ependymcellen en sluit aan op de vierde ventrikel.</p><p>Bij volwassenen is het kanaal vaak deels dichtgegroeid. Een abnormale verwijding heet hydromyelie; een holte in het ruggenmerg (syringomyelie) kan kruisende pijn- en temperatuurvezels beschadigen.</p>",
  "image_url": "",
  "wiki_title": "Central canal",
  "match": "canalis centralis|centraal kanaal|centrale kanaal",
  "option_only": true
 },
 "septum pellucidum": {
  "title": "Septum pellucidum",
  "short": "Het septum pellucidum is een dun, doorschijnend tussenschot tussen de voorhoorns van de twee laterale ventrikels.",
  "definition": "<p>Het <strong>septum pellucidum</strong> is een dunne, dubbele plaat van glia en zenuwvezels die in de mediaanlijn loopt tussen het corpus callosum (boven) en de fornix (onder). Het scheidt de voorhoorns van de linker en rechter laterale ventrikel.</p><p>Afwezigheid ervan komt voor bij ontwikkelingsstoornissen zoals septo-optische dysplasie; een holte tussen de twee bladen (cavum septi pellucidi) is meestal een normvariant.</p>",
  "image_url": "",
  "wiki_title": "Septum pellucidum",
  "match": "septum pellucidum",
  "option_only": true
 },
 "metencephalon": {
  "title": "Metencephalon",
  "short": "Het metencephalon is het embryonale hersenblaasje waaruit de pons en het cerebellum ontstaan.",
  "definition": "<p>Tijdens de ontwikkeling deelt het rhombencephalon (achterhersenen) zich in het <strong>metencephalon</strong> en het myelencephalon.</p><p>Uit het metencephalon ontstaan de <em>pons</em> en het <em>cerebellum</em>; het lumen wordt het bovenste deel van de vierde ventrikel. Uit het myelencephalon ontstaat de medulla oblongata.</p>",
  "image_url": "",
  "wiki_title": "Metencephalon",
  "match": "metencephalon",
  "option_only": true
 },
 "telencephalon": {
  "title": "Telencephalon",
  "short": "Het telencephalon is het embryonale hersendeel waaruit de grote hersenhelften ontstaan: hersenschors, witte stof, basale kernen en de laterale ventrikels.",
  "definition": "<p>Het prosencephalon (voorhersenen) deelt zich in het <strong>telencephalon</strong> en het diencephalon.</p><p>Uit het telencephalon ontstaan de twee cerebrale hemisferen met de cortex, de onderliggende witte stof, de basale kernen (striatum, globus pallidus), de amygdala en hippocampus, en de <em>laterale ventrikels</em> als holtes.</p>",
  "image_url": "",
  "wiki_title": "Cerebrum",
  "match": "telencephalon|eindhersenen",
  "option_only": true
 },
 "diencephalon": {
  "title": "Diencephalon",
  "short": "Het diencephalon (tussenhersenen) omvat thalamus, hypothalamus, epithalamus (met epifyse) en subthalamus, rond de derde ventrikel.",
  "definition": "<p>Het <strong>diencephalon</strong> ontstaat uit het achterste deel van het prosencephalon en ligt tussen de hemisferen en het mesencephalon. Het lumen is de <em>derde ventrikel</em>.</p><p>Belangrijke onderdelen: de <em>thalamus</em> (sensorisch schakelstation), de <em>hypothalamus</em> (homeostase, hypofysesturing), de epithalamus met de epifyse (melatonine) en de subthalamus. Ook de retina en de n. opticus ontstaan als uitstulping van het diencephalon.</p>",
  "image_url": "",
  "wiki_title": "Diencephalon",
  "match": "diencephalon|tussenhersenen",
  "option_only": true
 },
 "ruggenmerg": {
  "title": "Ruggenmerg",
  "short": "Het ruggenmerg verbindt de hersenen met de rest van het lichaam; het bevat banen in de witte stof en neuronen voor reflexen in de grijze stof.",
  "definition": "<p>Het <strong>ruggenmerg</strong> (medulla spinalis) loopt in het wervelkanaal van het foramen magnum tot ongeveer L1–L2 (conus medullaris), waarna de cauda equina volgt. Het geeft 31 paar spinale zenuwen af.</p><p>In dwarsdoorsnede ligt de vlindervormige <em>grijze stof</em> (voorhoorn: motorneuronen; achterhoorn: sensorische schakeling) binnenin, omgeven door <em>witte stof</em> met opstijgende (bijv. achterstrengen, tractus spinothalamicus) en afdalende banen (tractus corticospinalis).</p>",
  "image_url": "",
  "wiki_title": "Spinal cord",
  "match": "ruggenmerg|medulla spinalis",
  "option_only": true
 },
 "spinale ganglia": {
  "title": "Spinale ganglia",
  "short": "Spinale ganglia liggen in de achterwortels van de spinale zenuwen en bevatten de cellichamen van de sensorische (pseudo-unipolaire) neuronen.",
  "definition": "<p>Een <strong>spinaal ganglion</strong> (dorsaalwortelganglion) is een verdikking van de achterwortel, vlak bij het foramen intervertebrale.</p><p>Het bevat de cellichamen van de <em>primaire sensorische neuronen</em>. Deze zijn pseudo-unipolair: één uitloper splitst in een perifere tak naar de receptor en een centrale tak naar het ruggenmerg. Er liggen geen synapsen in het ganglion. Het varicella-zostervirus kan hier latent blijven.</p>",
  "image_url": "",
  "wiki_title": "Dorsal root ganglion",
  "match": "spinale ganglia|spinaal ganglion|ganglion spinale|dorsale wortelganglia|ganglia spinalia",
  "option_only": true
 },
 "n. oculomotorius": {
  "title": "N. oculomotorius (III)",
  "short": "De n. oculomotorius (III) innerveert de meeste uitwendige oogspieren, de ooglidheffer en (parasympathisch) de pupilvernauwer en accommodatie.",
  "definition": "<p>De <strong>n. oculomotorius</strong> komt uit het mesencephalon en innerveert de m. rectus superior, inferior en medialis, de m. obliquus inferior en de m. levator palpebrae superioris.</p><p>Parasympathische vezels (uit de kern van Edinger-Westphal, schakeling in het ganglion ciliare) innerveren de m. sphincter pupillae (miosis) en de m. ciliaris (accommodatie). Uitval geeft een oog dat naar buiten-onder staat, ptosis en een wijde, lichtstijve pupil.</p>",
  "image_url": "",
  "wiki_title": "Oculomotor nerve",
  "match": "n. oculomotorius|nervus oculomotorius|n. iii|hersenzenuw iii",
  "option_only": true
 },
 "n. trochlearis": {
  "title": "N. trochlearis (IV)",
  "short": "De n. trochlearis (IV) innerveert alleen de m. obliquus superior; hij is de enige hersenzenuw die dorsaal uit de hersenstam treedt.",
  "definition": "<p>De <strong>n. trochlearis</strong> is de dunste hersenzenuw en de enige die aan de <em>dorsale</em> zijde van de hersenstam uittreedt (onder de colliculi inferiores) en kruist.</p><p>Hij innerveert de <em>m. obliquus superior</em>, die het oog vooral naar beneden draait als het naar binnen kijkt, en intorsie geeft. Uitval geeft verticale dubbelbeelden, vooral bij naar beneden kijken (traplopen, lezen), met compenserende hoofdkanteling naar de gezonde kant.</p>",
  "image_url": "",
  "wiki_title": "Trochlear nerve",
  "match": "n. trochlearis|nervus trochlearis|n. iv|hersenzenuw iv",
  "option_only": true
 },
 "n. trigeminus": {
  "title": "N. trigeminus (V)",
  "short": "De n. trigeminus (V) is de gevoelszenuw van het gezicht (drie takken: V1, V2, V3) en de motorische zenuw van de kauwspieren.",
  "definition": "<p>De <strong>n. trigeminus</strong> treedt uit de pons en splitst in het ganglion trigeminale in drie takken: n. ophthalmicus (V1), n. maxillaris (V2) en n. mandibularis (V3).</p><p>Sensibel verzorgt hij het gezicht, het hoornvlies (afferent deel van de cornea-reflex), mond- en neusslijmvlies en de voorste twee derde van de tong (aanraking). De motorische vezels (alleen in V3) innerveren de kauwspieren (m. masseter, m. temporalis, mm. pterygoidei).</p>",
  "image_url": "",
  "wiki_title": "Trigeminal nerve",
  "match": "n. trigeminus|nervus trigeminus|n. v|hersenzenuw v",
  "option_only": true
 },
 "nervus glossopharyngeus": {
  "title": "N. glossopharyngeus (IX)",
  "short": "De n. glossopharyngeus (IX) verzorgt smaak en gevoel van het achterste derde van de tong en de keel, en ontvangt informatie van de sinus caroticus.",
  "definition": "<p>De <strong>n. glossopharyngeus</strong> treedt uit de medulla oblongata en verlaat de schedel via het foramen jugulare.</p><p>Functies: sensibiliteit en smaak van het achterste derde van de tong, gevoel van de farynx (afferent deel van de braakreflex) en het middenoor, en afferente informatie van de baroreceptoren in de <em>sinus caroticus</em> en chemoreceptoren in het glomus caroticum. Motorisch innerveert hij de m. stylopharyngeus en parasympathisch de glandula parotidea (via het ganglion oticum).</p>",
  "image_url": "",
  "wiki_title": "Glossopharyngeal nerve",
  "match": "nervus glossopharyngeus|n. glossopharyngeus|n. ix|hersenzenuw ix",
  "option_only": true
 },
 "arteria cerebri anterior": {
  "title": "A. cerebri anterior",
  "short": "De a. cerebri anterior voorziet de mediale zijde van frontaal- en pariëtaalkwab; een infarct geeft vooral uitval van het contralaterale been.",
  "definition": "<p>De <strong>a. cerebri anterior</strong> is een eindtak van de a. carotis interna. Beide aa. cerebri anteriores zijn verbonden via de a. communicans anterior (cirkel van Willis) en lopen over het corpus callosum naar achteren.</p><p>Zij verzorgen de mediale oppervlakte van de frontaal- en pariëtaalkwab, inclusief het deel van de motorische en sensorische cortex voor <em>been en voet</em>. Een infarct geeft daardoor vooral een contralaterale parese en gevoelsstoornis van het been, soms met gedragsveranderingen en incontinentie.</p>",
  "image_url": "",
  "wiki_title": "Anterior cerebral artery",
  "match": "arteria cerebri anterior|a. cerebri anterior|aca",
  "option_only": true
 },
 "microglia": {
  "title": "Microglia",
  "short": "Microglia zijn de immuuncellen (macrofagen) van het centrale zenuwstelsel; ze ruimen dode cellen en ziekteverwekkers op.",
  "definition": "<p><strong>Microglia</strong> zijn kleine gliacellen van <em>mesodermale</em> (myeloïde) oorsprong; ze stammen af van voorlopers uit de dooierzak die vroeg in de ontwikkeling het brein binnentrekken.</p><p>Ze zijn de residente macrofagen van het CZS: ze patrouilleren, fagocyteren celresten en ziekteverwekkers, presenteren antigenen en maken cytokines. Ze spelen ook een rol bij het snoeien van synapsen in de ontwikkeling en bij neurodegeneratieve ziekten.</p>",
  "image_url": "",
  "wiki_title": "Microglia",
  "match": "microglia|microgliacellen|microgliacel",
  "option_only": true
 },
 "ependymcellen": {
  "title": "Ependymcellen",
  "short": "Ependymcellen zijn gliacellen die de ventrikels en het centrale kanaal bekleden; ze helpen de liquorstroom en vormen samen met de plexus choroideus liquor.",
  "definition": "<p><strong>Ependymcellen</strong> vormen een kubisch tot cilindrisch epitheelachtig laagje dat de ventrikels van het brein en de canalis centralis van het ruggenmerg bekleedt. Veel van hen dragen cilia en microvilli.</p><p>De cilia helpen de liquor te laten stromen. In de plexus choroideus zijn gespecialiseerde ependymcellen met tight junctions verantwoordelijk voor de productie van liquor (bloed-liquorbarrière).</p>",
  "image_url": "",
  "wiki_title": "Ependyma",
  "match": "ependymcellen|ependym|ependymcel",
  "option_only": true
 },
 "oligodendroglioom": {
  "title": "Oligodendroglioom",
  "short": "Een oligodendroglioom is een diffuus gliaal hersentumor van oligodendrogliale oorsprong, met 1p/19q-codeletie; vaak presentatie met epilepsie.",
  "definition": "<p>Een <strong>oligodendroglioom</strong> is een diffuus infiltrerend glioom met als moleculaire kenmerken een <em>IDH-mutatie</em> en <em>codeletie van 1p/19q</em>. Het komt vooral voor bij volwassenen, meestal in de frontaalkwab.</p><p>Patiënten presenteren zich vaak met epileptische aanvallen. Microscopisch hebben de cellen een rond kern met een helder perinucleair halo (‘gebakken ei’). De prognose is relatief gunstig vergeleken met andere diffuse gliomen.</p>",
  "image_url": "",
  "wiki_title": "Oligodendroglioma",
  "match": "oligodendroglioom|oligodendrogliomen",
  "option_only": true
 },
 "neurogenese": {
  "title": "Neurogenese",
  "short": "Neurogenese is het ontstaan van nieuwe neuronen uit neurale stam- en voorlopercellen; vooral in de embryonale periode.",
  "definition": "<p><strong>Neurogenese</strong> is de vorming van neuronen uit neurale stamcellen en voorlopercellen. Het overgrote deel vindt prenataal plaats in de ventriculaire zone van de neurale buis, waarna de jonge neuronen naar hun eindpositie migreren.</p><p>Bij volwassenen is neurogenese zeer beperkt en vindt ze vooral nog plaats in de gyrus dentatus van de hippocampus (en bij dieren in de subventriculaire zone).</p>",
  "image_url": "",
  "wiki_title": "Neurogenesis",
  "match": "neurogenese|neurogenesis",
  "option_only": true
 },
 "proliferatie": {
  "title": "Proliferatie",
  "short": "Proliferatie is de toename van het aantal cellen door celdeling.",
  "definition": "<p><strong>Proliferatie</strong> is vermeerdering van cellen door celdeling (mitose). Het is een basisproces bij groei en ontwikkeling, weefselherstel en vernieuwing van bijvoorbeeld huid, darmepitheel en bloedcellen.</p><p>Proliferatie wordt gereguleerd door groeifactoren en de celcyclus-controlepunten. Ongecontroleerde proliferatie is een kenmerk van kanker.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "proliferatie|celproliferatie",
  "option_only": true
 },
 "differentiatie": {
  "title": "Differentiatie",
  "short": "Differentiatie is het proces waarbij een minder gespecialiseerde cel een gespecialiseerde vorm en functie krijgt.",
  "definition": "<p>Bij <strong>(cel)differentiatie</strong> zet een cel bepaalde genen aan en andere uit, waardoor ze een specifieke structuur en functie krijgt — bijvoorbeeld een stamcel die een neuron, spiercel of rode bloedcel wordt.</p><p>Differentiatie wordt gestuurd door signalen uit de omgeving (groeifactoren, cel-celcontact) en transcriptiefactoren. In tumoren geeft de mate van differentiatie (goed tot slecht gedifferentieerd) informatie over agressiviteit.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "differentiatie|celdifferentiatie",
  "option_only": true
 },
 "maturatie": {
  "title": "Maturatie",
  "short": "Maturatie is rijping: het proces waarin een cel, weefsel of organisme zijn uiteindelijke, volwassen vorm en functie bereikt.",
  "definition": "<p><strong>Maturatie</strong> betekent rijping. In de embryologie en voortplanting gaat het bijvoorbeeld om de rijping van geslachtscellen (oöcyt- en spermatozoönmaturatie), waarbij de meiose wordt voltooid en de cel bevruchtingsklaar wordt.</p><p>In bredere zin gebruikt men het voor de rijping van organen (bijv. longrijping, rijping van het zenuwstelsel) en van cellen van het immuunsysteem (bijv. T-celmaturatie in de thymus).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "maturatie|rijping",
  "option_only": true
 },
 "plasmamembraan": {
  "title": "Plasmamembraan",
  "short": "De plasmamembraan is de fosfolipide-dubbellaag met eiwitten die de cel omgeeft en regelt wat de cel in- en uitgaat.",
  "definition": "<p>De <strong>plasmamembraan</strong> is een dubbele laag fosfolipiden met een hydrofobe kern, waarin cholesterol en eiwitten (integraal en perifeer) zitten. Het vloeibaar-mozaïekmodel beschrijft hoe deze componenten zijdelings kunnen bewegen.</p><p>De membraan is selectief permeabel: kleine apolaire moleculen diffunderen erdoorheen, ionen en grote polaire moleculen hebben kanalen of transporters nodig. Membraaneiwitten werken daarnaast als receptoren, enzymen en hechtingsmoleculen.</p>",
  "image_url": "",
  "wiki_title": "Cell membrane",
  "match": "plasmamembraan|celmembraan|cytoplasmamembraan",
  "option_only": true
 },
 "endotheelcellen": {
  "title": "Endotheelcellen",
  "short": "Endotheelcellen bekleden als één dunne laag de binnenkant van alle bloed- en lymfevaten en regelen vaattonus, stolling en doorlaatbaarheid.",
  "definition": "<p><strong>Endotheel</strong> is een enkellaags plaveiselepitheel dat de binnenwand (tunica intima) van bloed- en lymfevaten en het hart bekleedt.</p><p>Endotheelcellen zijn actief: ze maken vaatverwijders (NO, prostacycline) en -vernauwers (endotheline), houden het bloed vloeibaar (antistollingsfactoren) maar kunnen bij beschadiging de stolling activeren (von Willebrandfactor), en laten leukocyten via adhesiemoleculen het weefsel in tijdens ontsteking.</p>",
  "image_url": "",
  "wiki_title": "Endothelium",
  "match": "endotheelcellen|endotheel|endotheelcel",
  "option_only": true
 },
 "gladde spiercellen": {
  "title": "Gladde spiercellen",
  "short": "Gladde spiercellen zijn spoelvormige, onwillekeurig aangestuurde spiercellen zonder dwarsstreping, in de wand van vaten en holle organen.",
  "definition": "<p><strong>Gladde spiercellen</strong> zijn spoelvormige cellen met één centraal gelegen kern. Actine en myosine liggen niet in sarcomeren, daarom ontbreekt de dwarsstreping. Contractie wordt via calcium-calmoduline en myosine-lichteketenkinase gereguleerd.</p><p>Ze komen voor in de wand van bloedvaten, luchtwegen, maag-darmkanaal, blaas en uterus en worden aangestuurd door het autonome zenuwstelsel, hormonen en lokale factoren. Ze kunnen langdurig samentrekken met weinig energieverbruik.</p>",
  "image_url": "",
  "wiki_title": "Smooth muscle",
  "match": "gladde spiercellen|glad spierweefsel|gladde spier|gladde spiercel",
  "option_only": true
 },
 "dwarsgestreept skeletspierweefsel": {
  "title": "Dwarsgestreept skeletspierweefsel",
  "short": "Skeletspierweefsel bestaat uit lange, meerkernige spiervezels met dwarsstreping door sarcomeren; het wordt willekeurig aangestuurd.",
  "definition": "<p><strong>Dwarsgestreept skeletspierweefsel</strong> bestaat uit spiervezels: zeer lange cellen met vele, aan de rand gelegen kernen, ontstaan door fusie van myoblasten.</p><p>De regelmatige rangschikking van actine en myosine in <em>sarcomeren</em> geeft de dwarsstreping. Contractie start na prikkeling door een motorneuron (acetylcholine op de eindplaat) en calciumafgifte uit het sarcoplasmatisch reticulum. Herstel na schade verloopt via satellietcellen.</p>",
  "image_url": "",
  "wiki_title": "Skeletal muscle",
  "match": "dwarsgestreept skeletspierweefsel|skeletspierweefsel|skeletspier|dwarsgestreepte spier|skeletspieren",
  "option_only": true
 },
 "losmazig bindweefsel": {
  "title": "Losmazig bindweefsel",
  "short": "Losmazig bindweefsel is los georganiseerd bindweefsel met veel grondsubstantie, cellen en weinig vezels; het vult ruimtes en draagt vaten en zenuwen.",
  "definition": "<p><strong>Losmazig bindweefsel</strong> bevat relatief veel grondsubstantie en cellen (fibroblasten, macrofagen, mestcellen, leukocyten) en een los netwerk van collagene en elastische vezels.</p><p>Het ligt onder epitheel (bijv. lamina propria van slijmvliezen, papillaire dermis), rond bloedvaten en zenuwen en tussen organen. Het is flexibel, goed doorbloed en een belangrijke plaats voor afweer en oedeemvorming. Ter vergelijking: straf bindweefsel (pezen, banden) bestaat vooral uit dicht opeengepakte collagene vezels.</p>",
  "image_url": "",
  "wiki_title": "Loose connective tissue",
  "match": "losmazig bindweefsel|los bindweefsel|areolair bindweefsel",
  "option_only": true
 },
 "elastisch kraakbeen": {
  "title": "Elastisch kraakbeen",
  "short": "Elastisch kraakbeen is kraakbeen met veel elastische vezels, waardoor het buigzaam is; het zit o.a. in de oorschelp en de epiglottis.",
  "definition": "<p><strong>Elastisch kraakbeen</strong> lijkt op hyalien kraakbeen, maar de matrix bevat daarnaast een dicht netwerk van <em>elastische vezels</em>. Het is omgeven door perichondrium.</p><p>Het is buigzaam en veert terug in zijn vorm. Het komt voor in de oorschelp, de uitwendige gehoorgang, de buis van Eustachius, de epiglottis en enkele kleine kraakbeentjes van de larynx.</p>",
  "image_url": "",
  "wiki_title": "Elastic cartilage",
  "match": "elastisch kraakbeen",
  "option_only": true
 },
 "meerlagig kubisch epitheel": {
  "title": "Meerlagig kubisch epitheel",
  "short": "Meerlagig kubisch epitheel bestaat uit twee of meer lagen kubusvormige cellen en komt vooral voor in de afvoergangen van klieren.",
  "definition": "<p><strong>Meerlagig kubisch epitheel</strong> is zeldzaam in het lichaam. Meestal bestaat het uit twee lagen kubische cellen.</p><p>Het bekleedt vooral de grotere <em>afvoergangen van exocriene klieren</em>, zoals die van zweetklieren, speekselklieren en de borstklier, waar het een beschermende functie heeft.</p>",
  "image_url": "",
  "wiki_title": "Stratified cuboidal epithelium",
  "match": "meerlagig kubisch epitheel|meerlagig kubusvormig epitheel",
  "option_only": true
 },
 "submucosa": {
  "title": "Submucosa",
  "short": "De submucosa is de bindweefsellaag onder het slijmvlies van het maag-darmkanaal, met grotere bloedvaten, lymfevaten en de plexus van Meissner.",
  "definition": "<p>De wand van het maag-darmkanaal bestaat van binnen naar buiten uit mucosa, <strong>submucosa</strong>, muscularis externa en serosa/adventitia.</p><p>De submucosa is een laag van los tot straf bindweefsel met grotere bloed- en lymfevaten en de <em>plexus submucosus</em> (van Meissner), die secretie en lokale doorbloeding regelt. In het duodenum bevat zij de klieren van Brunner en in de oesofagus mukeuze klieren.</p>",
  "image_url": "",
  "wiki_title": "Submucosa",
  "match": "submucosa|tela submucosa",
  "option_only": true
 },
 "mucosa": {
  "title": "Mucosa (slijmvlies)",
  "short": "De mucosa is het slijmvlies: de binnenste laag van holle organen, bestaande uit epitheel, lamina propria en (in de darm) een laagje spier.",
  "definition": "<p>De <strong>mucosa</strong> bekleedt de binnenkant van holle organen die met de buitenwereld in contact staan, zoals het maag-darmkanaal, de luchtwegen en de urinewegen.</p><p>Ze bestaat uit een <em>epitheel</em> (aangepast aan de functie: bijv. meerlagig plaveisel in de slokdarm, enkellaags cilindrisch in de darm), een <em>lamina propria</em> van losmazig bindweefsel met vaten en afweercellen en, in het maag-darmkanaal, een dun spierlaagje (muscularis mucosae).</p>",
  "image_url": "",
  "wiki_title": "Mucous membrane",
  "match": "mucosa|slijmvlies|tunica mucosa",
  "option_only": true
 },
 "draaigewricht": {
  "title": "Draaigewricht",
  "short": "Een draaigewricht laat alleen rotatie om één as toe, zoals het gewricht tussen atlas en dens van de axis of het proximale radio-ulnaire gewricht.",
  "definition": "<p>Een <strong>draaigewricht</strong> (articulatio trochoidea) is een eenassig gewricht waarbij een cilindervormig botdeel draait binnen een ring van bot en ligament.</p><p>Voorbeelden: het gewricht tussen de <em>dens axis</em> en de atlas (hoofd draaien, ‘nee’ schudden) en het <em>proximale radio-ulnaire gewricht</em>, waarin de radiuskop draait binnen het lig. anulare (pro- en supinatie).</p>",
  "image_url": "",
  "wiki_title": "Pivot joint",
  "match": "draaigewricht|articulatio trochoidea|rolgewricht",
  "option_only": true
 },
 "epifyse": {
  "title": "Epifyse",
  "short": "De epifyse is het uiteinde van een pijpbeen, of de pijnappelklier (glandula pinealis) die melatonine maakt — het woord heeft twee betekenissen.",
  "definition": "<p>Bij een <strong>pijpbeen</strong> is de epifyse het verbrede uiteinde, bedekt met gewrichtskraakbeen. Bij kinderen ligt tussen epifyse en metafyse de groeischijf (epifysairschijf), waar het bot in de lengte groeit; na de puberteit sluit die.</p><p>In de hersenen wordt met <strong>epifyse</strong> ook de <em>glandula pinealis</em> (pijnappelklier) bedoeld, een onderdeel van de epithalamus dat in het donker melatonine afgeeft en zo het dag-nachtritme ondersteunt.</p>",
  "image_url": "",
  "wiki_title": "Epiphysis",
  "match": "epifyse|epiphysis",
  "option_only": true
 },
 "oorschelp": {
  "title": "Oorschelp",
  "short": "De oorschelp is het uitwendige oor van elastisch kraakbeen en huid; hij vangt geluid op en helpt bij het lokaliseren van geluid.",
  "definition": "<p>De <strong>oorschelp</strong> (auricula) bestaat uit een plaat <em>elastisch kraakbeen</em> bedekt met huid; alleen de oorlel bevat geen kraakbeen maar vet en bindweefsel.</p><p>De plooien (helix, antihelix, tragus, concha) vangen geluid op en leiden het naar de uitwendige gehoorgang; door hun vorm helpen ze bij het bepalen of een geluid van voren, achteren, boven of onder komt.</p>",
  "image_url": "",
  "wiki_title": "Auricle (anatomy)",
  "match": "oorschelp|auricula|pinna",
  "option_only": true
 },
 "het oor": {
  "title": "Het oor",
  "short": "Het oor bestaat uit buiten-, midden- en binnenoor en verzorgt het gehoor en het evenwicht.",
  "definition": "<p>Het <strong>oor</strong> is opgebouwd uit drie delen. Het <em>buitenoor</em> (oorschelp en gehoorgang) vangt geluid op; het <em>middenoor</em> (trommelvlies en gehoorbeentjes hamer, aambeeld en stijgbeugel) versterkt de trillingen; het <em>binnenoor</em> zet ze om in zenuwsignalen.</p><p>Het binnenoor bevat het slakkenhuis (cochlea) voor het gehoor en het vestibulaire systeem (halfcirkelvormige kanalen, utriculus en sacculus) voor evenwicht. Signalen lopen via de n. vestibulocochlearis (VIII) naar de hersenstam.</p>",
  "image_url": "",
  "wiki_title": "Ear",
  "match": "het oor|oor",
  "option_only": true
 },
 "hypertensie": {
  "title": "Hypertensie",
  "short": "Hypertensie is een blijvend verhoogde bloeddruk (≥140/90 mmHg op het spreekuur); een belangrijke risicofactor voor hart- en vaatziekten.",
  "definition": "<p>Bij <strong>hypertensie</strong> is de bloeddruk herhaaldelijk verhoogd: op het spreekuur ≥140/90 mmHg. Meestal is er geen aanwijsbare oorzaak (<em>primaire/essentiële</em> hypertensie); bij een minderheid is er een secundaire oorzaak, zoals nierziekte, nierarteriestenose, hyperaldosteronisme of feochromocytoom.</p><p>Hypertensie geeft meestal geen klachten, maar beschadigt op termijn vaten en organen: linkerventrikelhypertrofie, hartfalen, CVA, nierschade en retinopathie. Behandeling: leefstijl (zout, gewicht, beweging, alcohol) en medicatie (o.a. diuretica, ACE-remmers/ARB's, calciumantagonisten).</p>",
  "image_url": "",
  "wiki_title": "Hypertension",
  "match": "hypertensie|hoge bloeddruk|arteriële hypertensie",
  "option_only": true
 },
 "myocardinfarct": {
  "title": "Myocardinfarct",
  "short": "Bij een myocardinfarct sterft hartspierweefsel af doordat een kransslagader (meestal door een trombus op een gescheurde plaque) afsluit.",
  "definition": "<p>Een <strong>myocardinfarct</strong> ontstaat meestal doordat een atherosclerotische plaque in een coronairarterie scheurt, waarna een trombus het vat (deels) afsluit. Het hartspierweefsel achter de afsluiting raakt ischemisch en gaat na 20–30 minuten necrotisch.</p><p>Klachten: drukkende pijn op de borst, uitstralend naar arm, kaak of rug, met zweten, misselijkheid en benauwdheid. Diagnose op basis van klachten, ECG (ST-elevatie of niet) en een stijging van troponine. Complicaties zijn ritmestoornissen, hartfalen en mechanische complicaties. Snelle reperfusie (PCI) is cruciaal.</p>",
  "image_url": "",
  "wiki_title": "Myocardial infarction",
  "match": "myocardinfarct|hartinfarct|acuut myocardinfarct|ami",
  "option_only": true
 },
 "mitralisklepstenose": {
  "title": "Mitralisklepstenose",
  "short": "Bij mitralisstenose is de klep tussen linkeratrium en linkerventrikel vernauwd, meestal door reuma; het linkeratrium raakt overbelast, met boezemfibrilleren en longstuwing.",
  "definition": "<p>Bij een <strong>mitralisklepstenose</strong> opent de mitralisklep onvoldoende. De belangrijkste oorzaak wereldwijd is <em>acuut reuma</em> in het verleden; bij ouderen ook verkalking.</p><p>De druk in het linkeratrium stijgt, het atrium verwijdt (risico op <em>boezemfibrilleren</em> en trombo-embolie) en de druk wordt doorgegeven naar de longvenen: longstuwing, kortademigheid en uiteindelijk pulmonale hypertensie. Bij auscultatie: een luide eerste toon, openingssnap en een laagfrequent diastolisch geruis.</p>",
  "image_url": "",
  "wiki_title": "Mitral valve stenosis",
  "match": "mitralisklepstenose|mitralisstenose",
  "option_only": true
 },
 "ventriculaire vullingsfase": {
  "title": "Ventriculaire vullingsfase",
  "short": "De vullingsfase is het deel van de diastole waarin de AV-kleppen open zijn en bloed vanuit de atria de ventrikels instroomt.",
  "definition": "<p>Tijdens de <strong>ventriculaire vullingsfase</strong> is de druk in de ventrikel lager dan in het atrium; de mitralis- en tricuspidalisklep staan open en de aorta- en pulmonalisklep zijn dicht.</p><p>De vulling verloopt in drie stappen: snelle passieve vulling direct na opening van de AV-kleppen, daarna langzame vulling (diastase), en ten slotte de <em>atriale contractie</em>, die vooral bij een hoge hartfrequentie of stijve ventrikel een belangrijk deel bijdraagt.</p>",
  "image_url": "",
  "wiki_title": "Cardiac cycle",
  "match": "ventriculaire vullingsfase|vullingsfase|ventrikelvulling|diastolische vulling",
  "option_only": true
 },
 "isovolumetrische relaxatiefase": {
  "title": "Isovolumetrische relaxatiefase",
  "short": "In de isovolumetrische relaxatie ontspant de ventrikel terwijl alle kleppen gesloten zijn: de druk daalt snel, het volume blijft gelijk.",
  "definition": "<p>De <strong>isovolumetrische relaxatiefase</strong> is het begin van de diastole. Het myocard ontspant terwijl zowel de semilunaire kleppen als de AV-kleppen gesloten zijn, zodat de ventrikeldruk snel daalt bij een gelijkblijvend volume (het eindsystolisch volume). Zodra de ventrikeldruk onder de atriumdruk zakt, openen de AV-kleppen en begint de vulling.</p>",
  "image_url": "",
  "wiki_title": "Cardiac cycle",
  "match": "isovolumetrische relaxatiefase|isovolumetrische relaxatie|isovolumische relaxatie",
  "option_only": true
 },
 "ejectiefase": {
  "title": "Ejectiefase",
  "short": "In de ejectiefase is de ventrikeldruk hoger dan de druk in aorta/a. pulmonalis: de semilunaire kleppen staan open en het slagvolume wordt uitgepompt.",
  "definition": "<p>De <strong>ejectiefase</strong> volgt op de isovolumetrische contractie. Zodra de druk in de linkerventrikel hoger wordt dan in de aorta (en rechts dan in de a. pulmonalis), openen de semilunaire kleppen en wordt bloed uitgedreven.</p><p>Eerst gaat dat snel, daarna langzamer. Tijdens deze fase daalt het ventrikelvolume van het einddiastolisch naar het eindsystolisch volume; het verschil is het slagvolume. De fase eindigt met het sluiten van de semilunaire kleppen (tweede harttoon).</p>",
  "image_url": "",
  "wiki_title": "Cardiac cycle",
  "match": "ejectiefase|ejectie|uitdrijvingsfase|ventriculaire ejectie",
  "option_only": true
 },
 "verzamelbuizen": {
  "title": "Verzamelbuis",
  "short": "De verzamelbuis is het laatste deel van het nefron; hier wordt onder invloed van ADH water en van aldosteron natrium (met kaliumuitscheiding) teruggeresorbeerd.",
  "definition": "<p>De <strong>verzamelbuizen</strong> verzamelen de voorurine van meerdere nefronen en lopen van de cortex door het merg naar de nierpapil. Het corticale deel heet de corticale verzamelbuis.</p><p>Er zijn twee belangrijke celtypen: <em>hoofdcellen</em>, die onder invloed van aldosteron natrium opnemen (ENaC) en kalium uitscheiden, en onder invloed van ADH aquaporine-2 inbouwen voor wateropname; en <em>schaltcellen</em>, die H⁺ of HCO₃⁻ uitscheiden voor het zuur-base-evenwicht. Hier wordt bepaald hoe geconcentreerd de urine uiteindelijk is.</p>",
  "image_url": "",
  "wiki_title": "Collecting duct system",
  "match": "verzamelbuizen|verzamelbuis|corticale verzamelbuis|ductus colligens|tubulus colligens",
  "option_only": true
 },
 "opstijgende been van de lis van henle": {
  "title": "Opstijgende been van de lis van Henle",
  "short": "Het opstijgende been van de lis van Henle is ondoorlaatbaar voor water maar resorbeert actief NaCl (NKCC2); zo ontstaat de concentratiegradiënt in het merg.",
  "definition": "<p>Het <strong>opstijgende been</strong> van de lis van Henle heeft een dun en een dik deel. Het is <em>impermeabel voor water</em>.</p><p>In het dikke opstijgende deel wordt actief Na⁺, K⁺ en 2Cl⁻ opgenomen via de NKCC2-cotransporter (het aangrijpingspunt van lisdiuretica zoals furosemide). Daardoor wordt de tubulusvloeistof verdund (‘verdunnend segment’) en het interstitium van het merg hypertoon, de basis van het tegenstroommechanisme.</p>",
  "image_url": "",
  "wiki_title": "Loop of Henle",
  "match": "opstijgende been van de lis van henle|opstijgend been van de lis van henle|dikke opstijgende been|opstijgende lis van henle",
  "option_only": true
 },
 "afdalende been van de lis van henle": {
  "title": "Afdalende been van de lis van Henle",
  "short": "Het afdalende been van de lis van Henle is goed doorlaatbaar voor water maar nauwelijks voor zout; water verlaat de tubulus naar het hypertone merg.",
  "definition": "<p>Het <strong>afdalende been</strong> van de lis van Henle loopt van de cortex het niermerg in. De wand bevat veel aquaporine-1 en is daardoor <em>goed doorlaatbaar voor water</em>, maar weinig voor opgeloste stoffen.</p><p>Omdat het interstitium dieper in het merg steeds hypertoner wordt, verlaat water passief de tubulus: de tubulusvloeistof wordt geconcentreerd naar de punt van de lis toe.</p>",
  "image_url": "",
  "wiki_title": "Loop of Henle",
  "match": "afdalende been van de lis van henle|afdalend been van de lis van henle|dunne afdalende been|afdalende lis van henle",
  "option_only": true
 },
 "respiratoire alkalose": {
  "title": "Respiratoire alkalose",
  "short": "Bij een respiratoire alkalose stijgt de pH doordat door hyperventilatie te veel CO₂ wordt uitgeademd (lage pCO₂).",
  "definition": "<p>Bij een <strong>respiratoire alkalose</strong> is de pCO<sub>2</sub> verlaagd door <em>hyperventilatie</em>, waardoor de pH stijgt. Oorzaken: angst/paniek, pijn, hypoxie (hoogte, longembolie, pneumonie), koorts, zwangerschap, salicylaatintoxicatie en levercirrose.</p><p>De nier compenseert (langzaam, over dagen) door minder bicarbonaat terug te resorberen. Acute klachten: tintelingen rond de mond en in de vingers, duizeligheid en soms tetanie, door daling van het geïoniseerde calcium.</p>",
  "image_url": "",
  "wiki_title": "Respiratory alkalosis",
  "match": "respiratoire alkalose",
  "option_only": true
 },
 "metabole alkalose": {
  "title": "Metabole alkalose",
  "short": "Bij een metabole alkalose is het bicarbonaat verhoogd en de pH gestegen, bijv. door braken (verlies van maagzuur) of diuretica.",
  "definition": "<p>Bij een <strong>metabole alkalose</strong> is de HCO<sub>3</sub><sup>−</sup>-concentratie in het bloed verhoogd. Belangrijke oorzaken: verlies van zuur door <em>braken</em> of maagzuigdrainage, gebruik van lis- of thiazidediuretica, hyperaldosteronisme en ernstige hypokaliëmie.</p><p>Volumedepletie houdt de alkalose in stand doordat de nier dan bicarbonaat vasthoudt. De ademhaling compenseert door hypoventilatie (pCO<sub>2</sub> stijgt).</p>",
  "image_url": "",
  "wiki_title": "Metabolic alkalosis",
  "match": "metabole alkalose",
  "option_only": true
 },
 "diabetes mellitus": {
  "title": "Diabetes mellitus",
  "short": "Diabetes mellitus is een chronisch verhoogde bloedglucose door een tekort aan insuline (type 1) of verminderde insulinegevoeligheid met relatief tekort (type 2).",
  "definition": "<p>Bij <strong>diabetes mellitus</strong> is de bloedglucose chronisch te hoog. Bij <em>type 1</em> vernietigt een auto-immuunproces de bètacellen van de pancreas (absoluut insulinetekort, vaak op jonge leeftijd, risico op ketoacidose). Bij <em>type 2</em> is er insulineresistentie (vaak met overgewicht) en een tekortschietende insulineproductie.</p><p>Klachten: dorst, veel plassen, moeheid en gewichtsverlies. Op termijn ontstaan microvasculaire (retinopathie, nefropathie, neuropathie) en macrovasculaire complicaties (hart- en vaatziekten). Diagnose o.a. nuchter glucose ≥7,0 mmol/L of HbA1c ≥48 mmol/mol.</p>",
  "image_url": "",
  "wiki_title": "Diabetes",
  "match": "diabetes mellitus|diabetes|suikerziekte|diabetes mellitus type 2|diabetes mellitus type 1|diabetes mellitus 2",
  "option_only": true
 },
 "obesitas": {
  "title": "Obesitas",
  "short": "Obesitas is ernstig overgewicht (BMI ≥30 kg/m²) met verhoogd risico op diabetes type 2, hart- en vaatziekten, artrose en bepaalde kankers.",
  "definition": "<p>Bij <strong>obesitas</strong> is er een overmaat aan lichaamsvet, gedefinieerd als een <em>BMI ≥30 kg/m²</em>. Vooral vet in de buik (grote middelomtrek, visceraal vet) is metabool ongunstig.</p><p>Obesitas verhoogt het risico op insulineresistentie en diabetes type 2, hypertensie, dyslipidemie, hart- en vaatziekten, slaapapneu, leververvetting, artrose en verschillende vormen van kanker. Oorzaken zijn een combinatie van leefstijl, omgeving, genetische aanleg en soms medicatie of hormonale ziekten.</p>",
  "image_url": "",
  "wiki_title": "Obesity",
  "match": "obesitas|ernstig overgewicht|adipositas",
  "option_only": true
 },
 "anafylaxie": {
  "title": "Anafylaxie",
  "short": "Anafylaxie is een acute, levensbedreigende systemische allergische reactie (meestal IgE-gemedieerd) met huidreactie, luchtwegobstructie en/of shock.",
  "definition": "<p><strong>Anafylaxie</strong> ontstaat meestal doordat een allergeen (bijv. pinda, wespengif, penicilline) kruisverbindingen maakt met IgE op mestcellen en basofielen. Die geven massaal histamine en andere mediatoren af.</p><p>Gevolg binnen minuten: urticaria en angio-oedeem, bronchospasme en larynxoedeem, vaatverwijding en capillaire lekkage met bloeddrukdaling (anafylactische shock), en maag-darmklachten. Eerste behandeling is direct <em>adrenaline intramusculair</em>.</p>",
  "image_url": "",
  "wiki_title": "Anaphylaxis",
  "match": "anafylaxie|anafylactische shock|anafylactische reactie",
  "option_only": true
 },
 "allergie": {
  "title": "Allergie",
  "short": "Een allergie is een overdreven immuunreactie op een onschuldige stof (allergeen), klassiek IgE-gemedieerd: een type I-overgevoeligheidsreactie.",
  "definition": "<p>Bij een <strong>allergie</strong> reageert het immuunsysteem op een onschadelijk antigeen, zoals pollen, huisstofmijt of voedsel. Bij de eerste blootstelling ontstaat <em>sensibilisatie</em>: B-cellen maken onder invloed van Th2-cellen IgE, dat zich aan mestcellen bindt.</p><p>Bij herblootstelling binden allergenen dat IgE, waardoor mestcellen histamine, leukotriënen en prostaglandinen afgeven (type I-reactie): niezen, jeuk, urticaria, astma of anafylaxie. Een late fase met eosinofielen kan volgen.</p>",
  "image_url": "",
  "wiki_title": "Allergy",
  "match": "allergie|allergische reactie|type i-overgevoeligheid",
  "option_only": true
 },
 "overgevoeligheid": {
  "title": "Overgevoeligheid",
  "short": "Een overgevoeligheidsreactie is een immuunreactie die schade aan het eigen lichaam veroorzaakt; ingedeeld in type I t/m IV (Gell en Coombs).",
  "definition": "<p>Bij <strong>overgevoeligheid</strong> veroorzaakt een immuunreactie weefselschade. Volgens Gell en Coombs onderscheidt men vier typen:</p><p><em>Type I</em> (IgE, mestcellen; snel: allergie, anafylaxie), <em>type II</em> (IgG/IgM tegen celgebonden antigenen: bijv. auto-immuun hemolytische anemie), <em>type III</em> (immuuncomplexen die neerslaan: bijv. SLE, serumziekte) en <em>type IV</em> (vertraagd, T-cel-gemedieerd: bijv. contacteczeem, tuberculinereactie).</p>",
  "image_url": "",
  "wiki_title": "Hypersensitivity",
  "match": "overgevoeligheid|overgevoeligheidsreactie|hypersensitiviteit",
  "option_only": true
 },
 "systemische lupus erythematosus": {
  "title": "Systemische lupus erythematosus (SLE)",
  "short": "SLE is een systemische auto-immuunziekte met antinucleaire antistoffen en immuuncomplexen; gewrichten, huid, nieren en bloed kunnen aangedaan zijn.",
  "definition": "<p><strong>Systemische lupus erythematosus</strong> is een chronische auto-immuunziekte die vooral jonge vrouwen treft. Er worden antistoffen gevormd tegen kerncomponenten (ANA, anti-dsDNA, anti-Sm), die met antigenen <em>immuuncomplexen</em> vormen die neerslaan in weefsels (type III-reactie) en complement verbruiken.</p><p>Kenmerken: artralgie/artritis, vlindervormig erytheem in het gezicht, fotosensitiviteit, serositis, nefritis, cytopenieën en neurologische verschijnselen. Behandeling met o.a. hydroxychloroquine, corticosteroïden en immunosuppressiva.</p>",
  "image_url": "",
  "wiki_title": "Systemic lupus erythematosus",
  "match": "systemische lupus erythematosus|sle|lupus|systemic lupus erythematosus",
  "option_only": true
 },
 "sclerodermie (systemic sclerosis)": {
  "title": "Systemische sclerose (sclerodermie)",
  "short": "Systemische sclerose is een auto-immuunziekte met fibrose van huid en organen en vaatafwijkingen; typisch zijn Raynaud, strakke huid en anti-Scl-70/anticentromeer.",
  "definition": "<p>Bij <strong>systemische sclerose</strong> (sclerodermie) leiden auto-immuniteit en schade aan kleine bloedvaten tot overmatige collageenvorming en <em>fibrose</em> van huid en inwendige organen.</p><p>Bijna alle patiënten hebben het fenomeen van Raynaud. De huid wordt strak en verdikt (sclerodactylie), en er kunnen slikklachten (oesofagus), longfibrose, pulmonale hypertensie en een renale crisis ontstaan. Bij de beperkte vorm (CREST) zijn vaak anticentromeer-antistoffen aanwezig, bij de diffuse vorm anti-Scl-70 (topo-isomerase I).</p>",
  "image_url": "",
  "wiki_title": "Systemic scleroderma",
  "match": "sclerodermie (systemic sclerosis)|sclerodermie|systemische sclerose|systemic sclerosis",
  "option_only": true
 },
 "m. bechterew (ankylosing spondylitis)": {
  "title": "Ziekte van Bechterew (spondylitis ankylopoetica)",
  "short": "De ziekte van Bechterew is een chronische ontsteking van de wervelkolom en SI-gewrichten, vaak bij jonge mannen met HLA-B27, met ochtendstijfheid en lage rugpijn.",
  "definition": "<p>De <strong>ziekte van Bechterew</strong> is een axiale spondyloartritis: een chronische ontsteking van de <em>sacro-iliacale gewrichten</em> en de wervelkolom, met name de aanhechtingen van banden en pezen (enthesitis).</p><p>Ze begint meestal voor het 40e jaar met inflammatoire lage rugpijn: ochtendstijfheid, verbetering bij bewegen, ’s nachts pijn. Er is een sterke associatie met <em>HLA-B27</em>. Op termijn kan verbening de wervelkolom verstijven (‘bamboo spine’). Extra-articulair: uveïtis anterior, IBD en psoriasis.</p>",
  "image_url": "",
  "wiki_title": "Ankylosing spondylitis",
  "match": "m. bechterew (ankylosing spondylitis)|m. bechterew|ziekte van bechterew|ankylosing spondylitis|spondylitis ankylopoetica|axiale spondyloartritis",
  "option_only": true
 },
 "artrose (osteoarthritis)": {
  "title": "Artrose",
  "short": "Artrose is degeneratie van gewrichtskraakbeen met botreactie; het geeft startpijn en pijn bij belasting, vooral in knieën, heupen en handen bij ouderen.",
  "definition": "<p>Bij <strong>artrose</strong> slijt en verdwijnt het gewrichtskraakbeen, met reactieve veranderingen van het bot: <em>osteofyten</em>, subchondrale sclerose en cysten, en versmalling van de gewrichtsspleet op de röntgenfoto.</p><p>Risicofactoren: leeftijd, overgewicht, eerder letsel en aanleg. Klachten: pijn bij belasting, startpijn en korte ochtendstijfheid (&lt;30 minuten), soms crepitaties en verminderde beweeglijkheid. Typische plaatsen: knie, heup, DIP- en PIP-gewrichten (Heberden- en Bouchardknobbels) en het CMC-1-gewricht.</p>",
  "image_url": "",
  "wiki_title": "Osteoarthritis",
  "match": "artrose (osteoarthritis)|artrose|osteoarthritis|osteoartrose",
  "option_only": true
 },
 "septische artritis": {
  "title": "Septische artritis",
  "short": "Septische artritis is een bacteriële infectie van een gewricht (vaak S. aureus): acuut, pijnlijk, gezwollen, warm gewricht met koorts; een spoedgeval.",
  "definition": "<p>Bij <strong>septische artritis</strong> raakt een gewricht geïnfecteerd, meestal via de bloedbaan, soms na een punctie of operatie. De meest voorkomende verwekker is <em>Staphylococcus aureus</em>; bij seksueel actieve jongvolwassenen ook <em>Neisseria gonorrhoeae</em>.</p><p>Het geeft een acuut rood, warm, gezwollen en zeer pijnlijk gewricht (vaak de knie) met bewegingsbeperking en meestal koorts. Diagnose door punctie (troebel synoviaal vocht met veel leukocyten, kweek). Snel draineren en antibiotica zijn nodig om kraakbeenvernietiging te voorkomen.</p>",
  "image_url": "",
  "wiki_title": "Septic arthritis",
  "match": "septische artritis|bacteriële artritis|septische arthritis",
  "option_only": true
 },
 "reactieve artritis": {
  "title": "Reactieve artritis",
  "short": "Reactieve artritis is een steriele gewrichtsontsteking enkele weken na een darm- of urogenitale infectie, vaak bij HLA-B27-dragers.",
  "definition": "<p><strong>Reactieve artritis</strong> ontstaat 1–4 weken na een infectie van de darm (<em>Salmonella</em>, <em>Shigella</em>, <em>Campylobacter</em>, <em>Yersinia</em>) of de urogenitale tractus (<em>Chlamydia trachomatis</em>). Het gewricht zelf is niet geïnfecteerd.</p><p>Typisch is een asymmetrische oligoartritis van vooral de benen, eventueel met enthesitis, dactylitis, urethritis en conjunctivitis/uveïtis. Het behoort tot de spondyloartritiden en is geassocieerd met HLA-B27.</p>",
  "image_url": "",
  "wiki_title": "Reactive arthritis",
  "match": "reactieve artritis|reactieve arthritis|ziekte van reiter",
  "option_only": true
 },
 "henoch-schönlein vasculitis": {
  "title": "IgA-vasculitis (Henoch-Schönlein)",
  "short": "IgA-vasculitis is een vasculitis van kleine vaten met IgA-neerslagen, vooral bij kinderen: palpabele purpura op de benen, buikpijn, artritis en nierbetrokkenheid.",
  "definition": "<p><strong>IgA-vasculitis</strong> (vroeger Henoch-Schönlein purpura) is de meest voorkomende vasculitis bij kinderen, vaak na een bovenste luchtweginfectie. IgA-bevattende immuuncomplexen slaan neer in de wand van kleine vaten.</p><p>Kenmerkende tetrade: <em>palpabele purpura</em> op billen en benen (bij normale bloedplaatjes), artralgie/artritis, koliekachtige buikpijn (soms invaginatie) en nierbetrokkenheid (hematurie, IgA-nefropathie-achtig beeld). Meestal zelflimiterend; nierfunctie vervolgen.</p>",
  "image_url": "",
  "wiki_title": "IgA vasculitis",
  "match": "henoch-schönlein vasculitis|henoch-schönlein purpura|henoch schönlein|iga-vasculitis|purpura van henoch-schönlein|de ziekte van henoch schönlein",
  "option_only": true
 },
 "psoriasis vulgaris": {
  "title": "Psoriasis vulgaris",
  "short": "Psoriasis is een chronische ontstekingsziekte van de huid met scherp begrensde rode plaques met zilverwitte schilfers, vaak op ellebogen, knieën en hoofdhuid.",
  "definition": "<p>Bij <strong>psoriasis vulgaris</strong> stimuleert een T-cel-gemedieerde ontsteking (o.a. de IL-23/Th17-as) een sterk versnelde deling en onvolledige verhoorning van keratinocyten.</p><p>Dat geeft scherp begrensde, erythemateuze plaques met <em>zilverwitte schilfering</em>, typisch op de strekzijden (ellebogen, knieën), de hoofdhuid en de bilnaad. Kenmerkend zijn het köbnerfenomeen en nagelafwijkingen (putjes, olievlekken). Een deel van de patiënten ontwikkelt artritis psoriatica.</p>",
  "image_url": "",
  "wiki_title": "Psoriasis",
  "match": "psoriasis vulgaris|psoriasis",
  "option_only": true
 },
 "erytheem": {
  "title": "Erytheem",
  "short": "Erytheem is roodheid van de huid door verwijding van de bloedvaatjes in de dermis; bij druk verbleekt het (wegdrukbaar).",
  "definition": "<p><strong>Erytheem</strong> is een rode verkleuring van de huid door <em>hyperemie</em>: verwijde capillairen in de dermis. Kenmerkend is dat het bij druk (glasspateltest) wegdrukbaar is, in tegenstelling tot een bloeding in de huid (purpura, petechiën).</p><p>Het is een efflorescentie die voorkomt bij ontsteking, infectie (bijv. erysipelas), allergische reacties, zonverbranding en bij veel huidziekten.</p>",
  "image_url": "",
  "wiki_title": "Erythema",
  "match": "erytheem|erythema|roodheid",
  "option_only": true
 },
 "orthoergisch contacteczeem": {
  "title": "Orthoergisch contacteczeem",
  "short": "Orthoergisch (irritatief) contacteczeem ontstaat door herhaald contact met irriterende stoffen zoals water en zeep, zonder allergie.",
  "definition": "<p><strong>Orthoergisch contacteczeem</strong> is een niet-allergische ontsteking van de huid die ontstaat wanneer de huidbarrière herhaaldelijk wordt beschadigd door irriterende stoffen — bijvoorbeeld water, zeep, schoonmaakmiddelen of oplosmiddelen.</p><p>Het treft vooral de handen van mensen in natte beroepen (kappers, schoonmakers, zorgpersoneel). Er is geen sensibilisatie nodig, dus het kan bij iedereen optreden bij voldoende blootstelling. De huid is droog, rood, schilferend en kloverig.</p>",
  "image_url": "",
  "wiki_title": "Irritant contact dermatitis",
  "match": "orthoergisch contacteczeem|irritatief contacteczeem|toxisch contacteczeem",
  "option_only": true
 },
 "inclusion body myositis": {
  "title": "Inclusion body myositis",
  "short": "Inclusion body myositis is een langzaam progressieve spierziekte bij ouderen, met typisch zwakte van de vingerbuigers en de m. quadriceps.",
  "definition": "<p><strong>Inclusion body myositis</strong> is de meest voorkomende verworven spierziekte boven de 50 jaar. Er is een combinatie van ontsteking (T-cellen in de spier) en degeneratie met <em>‘rimmed vacuoles’</em> en eiwitophopingen in de spiervezels.</p><p>De zwakte is vaak asymmetrisch en treft typisch de diepe vingerflexoren (moeite met knijpen) en de m. quadriceps (vallen, moeite met opstaan); ook slikklachten komen voor. In tegenstelling tot polymyositis reageert IBM nauwelijks op immunosuppressieve behandeling.</p>",
  "image_url": "",
  "wiki_title": "Inclusion body myositis",
  "match": "inclusion body myositis|ibm|inclusion-body myositis",
  "option_only": true
 },
 "epilepsie": {
  "title": "Epilepsie",
  "short": "Epilepsie is een hersenaandoening met herhaalde, niet-uitgelokte epileptische aanvallen door abnormale, synchrone ontladingen van neuronen.",
  "definition": "<p>Bij <strong>epilepsie</strong> heeft iemand de neiging tot herhaalde epileptische aanvallen. Een aanval ontstaat door een plotselinge, overmatige en gesynchroniseerde ontlading van groepen neuronen.</p><p>Aanvallen kunnen focaal beginnen (in één hersengebied; met of zonder bewustzijnsdaling) of gegeneraliseerd (beide hemisferen; bijv. tonisch-klonische aanvallen of absences). Oorzaken: genetisch, structureel (litteken, tumor, ontwikkelingsstoornis), infectieus, metabool of onbekend. Diagnostiek met anamnese/heteroanamnese, EEG en MRI.</p>",
  "image_url": "",
  "wiki_title": "Epilepsy",
  "match": "epilepsie",
  "option_only": true
 },
 "astigmatisme": {
  "title": "Astigmatisme",
  "short": "Bij astigmatisme is het hoornvlies (of de lens) ongelijk gekromd, waardoor licht niet in één punt wordt gefocust en alles wat wazig of vervormd is.",
  "definition": "<p>Bij <strong>astigmatisme</strong> is de breking van het oog niet in alle richtingen gelijk, meestal omdat het hoornvlies meer de vorm van een rugbybal dan van een voetbal heeft.</p><p>Lichtstralen in verschillende vlakken worden op verschillende afstanden gefocust, zodat er op het netvlies geen scherp punt ontstaat: zowel dichtbij als veraf is het beeld wazig of vervormd. Correctie met een <em>cilinderglas</em> (bril of torische lens).</p>",
  "image_url": "",
  "wiki_title": "Astigmatism",
  "match": "astigmatisme|cilindrische afwijking",
  "option_only": true
 },
 "ablatio retinae": {
  "title": "Ablatio retinae",
  "short": "Bij een ablatio retinae laat het netvlies los van de onderliggende pigmentlaag; klachten zijn lichtflitsen, mouches volantes en een gordijn voor het oog.",
  "definition": "<p>Bij een <strong>ablatio retinae</strong> (netvliesloslating) raakt de neurosensorische retina los van het retinale pigmentepitheel. Meestal begint het met een scheurtje in het netvlies, waardoor vocht uit het glasvocht onder het netvlies loopt (rhegmatogeen); risicofactoren zijn myopie, leeftijd en eerdere oogoperaties.</p><p>Klachten: lichtflitsen, plotseling veel ‘vliegjes’ (mouches volantes) en een zich uitbreidende schaduw of gordijn in het gezichtsveld, zonder pijn. Het is een spoedgeval: chirurgisch herstel voordat de macula loslaat.</p>",
  "image_url": "",
  "wiki_title": "Retinal detachment",
  "match": "ablatio retinae|netvliesloslating|amotio retinae",
  "option_only": true
 },
 "stembandpoliep": {
  "title": "Stembandpoliep",
  "short": "Een stembandpoliep is een goedaardige, meestal eenzijdige zwelling op de stemband, vaak door stemmisbruik of roken; het geeft heesheid.",
  "definition": "<p>Een <strong>stembandpoliep</strong> is een goedaardige, vaak eenzijdige uitgroei van de stemband, meestal aan de vrije rand. Ze ontstaat door overbelasting van de stem (schreeuwen), roken of irritatie (reflux); soms na een bloedinkje in de stemband.</p><p>De belangrijkste klacht is <em>heesheid</em> en een minder belastbare stem. Diagnose door laryngoscopie; behandeling is meestal microchirurgische verwijdering en stemtherapie.</p>",
  "image_url": "",
  "wiki_title": "Vocal fold polyp",
  "match": "stembandpoliep|stembandpoliepen",
  "option_only": true
 },
 "de ziekte van von willebrand": {
  "title": "Ziekte van Von Willebrand",
  "short": "De ziekte van Von Willebrand is de meest voorkomende erfelijke bloedingsziekte: een tekort of defect van de von Willebrandfactor, met slijmvliesbloedingen.",
  "definition": "<p>Bij de <strong>ziekte van Von Willebrand</strong> is de von Willebrandfactor (vWF) verminderd of afwijkend. vWF verbindt bloedplaatjes met het beschadigde subendotheel en beschermt factor VIII tegen afbraak.</p><p>Het is de meest voorkomende erfelijke stollingsstoornis (meestal autosomaal dominant). Er zijn vooral <em>slijmvliesbloedingen</em>: neusbloedingen, tandvleesbloedingen, hevige menstruaties en nabloeden na ingrepen. De bloedingstijd is verlengd; de APTT kan verlengd zijn door een lager factor VIII.</p>",
  "image_url": "",
  "wiki_title": "Von Willebrand disease",
  "match": "de ziekte van von willebrand|ziekte van von willebrand|von willebrand|von willebrandziekte",
  "option_only": true
 },
 "hemofilie a": {
  "title": "Hemofilie A",
  "short": "Hemofilie A is een X-gebonden erfelijk tekort aan stollingsfactor VIII, met gewrichts- en spierbloedingen, vooral bij jongens.",
  "definition": "<p><strong>Hemofilie A</strong> is een geslachtsgebonden recessieve aandoening (X-chromosoom) met een tekort aan <em>factor VIII</em>; hemofilie B is een tekort aan factor IX. Vooral jongens/mannen zijn aangedaan; vrouwen zijn meestal draagster.</p><p>Omdat de secundaire hemostase (fibrinevorming) tekortschiet, ontstaan diepe bloedingen: in gewrichten (hemartros), spieren en na trauma of ingrepen. De APTT is verlengd, PT en bloedplaatjes zijn normaal. Behandeling met factor VIII-concentraat of emicizumab.</p>",
  "image_url": "",
  "wiki_title": "Haemophilia A",
  "match": "hemofilie a|haemofilie a|hemophilia a",
  "option_only": true
 },
 "auto-immuun hemolytische anemie": {
  "title": "Auto-immuun hemolytische anemie",
  "short": "Bij AIHA maakt het lichaam antistoffen tegen de eigen rode bloedcellen, die daardoor worden afgebroken; de directe antiglobulinetest (Coombs) is positief.",
  "definition": "<p>Bij <strong>auto-immuun hemolytische anemie</strong> binden auto-antistoffen aan erytrocyten, die vervolgens vooral in de milt worden afgebroken (type II-overgevoeligheid). Bij <em>warme</em> AIHA gaat het om IgG; bij <em>koude</em> AIHA om IgM met complementactivatie.</p><p>Laboratorium: anemie met verhoogde reticulocyten, verhoogd LDH en ongeconjugeerd bilirubine, verlaagd haptoglobine, sferocyten en een positieve directe antiglobulinetest (Coombs). Oorzaken: idiopathisch, lymfoproliferatieve ziekten, SLE, infecties (Mycoplasma, EBV) of geneesmiddelen.</p>",
  "image_url": "",
  "wiki_title": "Autoimmune hemolytic anemia",
  "match": "auto-immuun hemolytische anemie|aiha|autoimmuun hemolytische anemie|auto-immuunhemolytische anemie",
  "option_only": true
 },
 "maligniteit": {
  "title": "Maligniteit",
  "short": "Een maligniteit is een kwaadaardige tumor: ongecontroleerd groeiende cellen die omliggend weefsel binnendringen en kunnen uitzaaien.",
  "definition": "<p>Een <strong>maligniteit</strong> (kanker) is een tumor waarvan de cellen ongeremd delen, het omliggende weefsel <em>infiltreren</em> en via bloed- of lymfevaten kunnen <em>metastaseren</em>. Dat onderscheidt ze van goedaardige (benigne) tumoren, die expansief groeien zonder invasie.</p><p>Maligniteiten ontstaan door een opeenstapeling van genetische veranderingen (activatie van oncogenen, uitschakeling van tumorsuppressorgenen). Systemische verschijnselen kunnen zijn: gewichtsverlies, moeheid, nachtzweten, anemie, trombose en paraneoplastische syndromen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "maligniteit|maligne tumor|kanker|kwaadaardige tumor",
  "option_only": true
 },
 "tumor": {
  "title": "Tumor",
  "short": "Een tumor (neoplasma) is een gezwel door autonome, overmatige celgroei; die kan goedaardig (benigne) of kwaadaardig (maligne) zijn.",
  "definition": "<p>In de pathologie betekent <strong>tumor</strong> letterlijk zwelling, maar meestal bedoelt men een <em>neoplasma</em>: weefsel dat ontstaat door celgroei die niet meer gereguleerd wordt en doorgaat zonder de oorspronkelijke prikkel.</p><p>Benigne tumoren groeien meestal langzaam en expansief, zijn goed begrensd en zaaien niet uit. Maligne tumoren groeien invasief en kunnen metastaseren. ‘Tumor’ is ook een van de klassieke ontstekingsverschijnselen (zwelling).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "tumor|gezwel|neoplasma",
  "option_only": true
 },
 "maagcarcinoom": {
  "title": "Maagcarcinoom",
  "short": "Een maagcarcinoom is een kwaadaardige tumor (meestal adenocarcinoom) van de maag; risicofactoren zijn o.a. H. pylori, roken en zoutrijke voeding.",
  "definition": "<p>Het <strong>maagcarcinoom</strong> is meestal een adenocarcinoom, uitgaand van het klierepitheel. Het intestinale type ontstaat via een reeks van chronische (H. pylori-)gastritis, atrofie, intestinale metaplasie en dysplasie; het diffuse type (zegelringcellen) infiltreert de wand zonder duidelijke massa (linitis plastica).</p><p>Klachten komen vaak laat: verminderde eetlust, vroege verzadiging, gewichtsverlies, epigastrische pijn, anemie of slikklachten. Metastasen kunnen zich manifesteren als een klier van Virchow (links supraclaviculair) of ovariummetastasen (Krukenberg).</p>",
  "image_url": "",
  "wiki_title": "Stomach cancer",
  "match": "maagcarcinoom|maagkanker|adenocarcinoom van de maag",
  "option_only": true
 },
 "ulcus pepticum": {
  "title": "Ulcus pepticum",
  "short": "Een ulcus pepticum is een zweer in maag of duodenum door aantasting door maagzuur, meestal bij H. pylori-infectie of NSAID-gebruik.",
  "definition": "<p>Een <strong>ulcus pepticum</strong> is een defect in de wand van maag (ulcus ventriculi) of duodenum (ulcus duodeni) dat dieper gaat dan de muscularis mucosae. Het ontstaat door een verstoorde balans tussen aanvallende factoren (zuur, pepsine) en beschermende factoren (slijm, bicarbonaat, doorbloeding).</p><p>De belangrijkste oorzaken zijn <em>Helicobacter pylori</em> en <em>NSAID's</em> (inclusief aspirine). Klachten: epigastrische pijn, soms gerelateerd aan maaltijden. Complicaties: bloeding, perforatie en obstructie. Behandeling: protonpompremmer en H. pylori-eradicatie.</p>",
  "image_url": "",
  "wiki_title": "Peptic ulcer disease",
  "match": "ulcus pepticum|maagzweer|ulcus duodeni|ulcus ventriculi|peptisch ulcus",
  "option_only": true
 },
 "acute cholecystitis": {
  "title": "Acute cholecystitis",
  "short": "Acute cholecystitis is een ontsteking van de galblaas, meestal doordat een galsteen de ductus cysticus afsluit; pijn rechtsboven, koorts en een positief teken van Murphy.",
  "definition": "<p>Bij een <strong>acute cholecystitis</strong> blokkeert meestal een galsteen de <em>ductus cysticus</em>. De galblaas zwelt, de wand raakt geïrriteerd en ontstoken, en secundair kan een bacteriële infectie ontstaan.</p><p>Klachten: aanhoudende pijn rechts in de bovenbuik (langer dan een galsteenkoliek), koorts en een positief <em>teken van Murphy</em> (pijn en stokkende inademing bij palpatie onder de ribboog). De echo toont galstenen, een verdikte galblaaswand en vocht rond de galblaas. Behandeling: antibiotica en (vroege) cholecystectomie.</p>",
  "image_url": "",
  "wiki_title": "Cholecystitis",
  "match": "acute cholecystitis|cholecystitis|galblaasontsteking",
  "option_only": true
 },
 "diarree": {
  "title": "Diarree",
  "short": "Diarree is het vaker dan normaal (≥3x per dag) produceren van brijige tot waterdunne ontlasting.",
  "definition": "<p><strong>Diarree</strong> betekent een verhoogde frequentie (meestal ≥3 keer per dag) en verminderde consistentie van de ontlasting. Acute diarree (&lt;2 weken) is meestal infectieus (virussen zoals norovirus, bacteriën, parasieten).</p><p>Mechanismen: <em>secretoir</em> (bijv. door toxines zoals choleratoxine), <em>osmotisch</em> (bijv. lactose-intolerantie, laxantia), <em>inflammatoir</em> (bijv. IBD, invasieve bacteriën, met bloed en slijm) en versnelde motiliteit. Het belangrijkste risico is uitdroging en elektrolytverlies.</p>",
  "image_url": "",
  "wiki_title": "Diarrhea",
  "match": "diarree",
  "option_only": true
 },
 "bacteriële overgroei": {
  "title": "Bacteriële overgroei van de dunne darm",
  "short": "Bij bacteriële overgroei zijn er te veel bacteriën in de dunne darm, met een opgeblazen gevoel, diarree, malabsorptie en B12-tekort.",
  "definition": "<p>Normaal bevat de dunne darm weinig bacteriën. Bij <strong>bacteriële overgroei</strong> (SIBO) nemen die sterk toe, bijvoorbeeld door verminderde motiliteit (diabetes, sclerodermie), anatomische afwijkingen (blinde lis, divertikels, na operaties) of verminderd maagzuur.</p><p>De bacteriën deconjugeren galzouten (vetmalabsorptie, steatorroe), fermenteren koolhydraten (opgeblazen gevoel, winderigheid, diarree) en verbruiken vitamine B12 (tekort). Foliumzuur kan juist hoog zijn. Diagnose o.a. via een waterstofademtest; behandeling met antibiotica.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "bacteriële overgroei|bacteriële overgroei van de dunne darm|sibo|dunnedarmbacteriële overgroei",
  "option_only": true
 },
 "elementaire voeding": {
  "title": "Elementaire voeding",
  "short": "Elementaire voeding is sondevoeding of drinkvoeding waarin eiwitten als losse aminozuren aanwezig zijn, zodat er nauwelijks vertering nodig is.",
  "definition": "<p>In <strong>elementaire voeding</strong> zitten de voedingsstoffen in hun eenvoudigste vorm: eiwitten als vrije aminozuren, koolhydraten als kleine sachariden en weinig vet. Daardoor is nauwelijks enzymatische vertering nodig en wordt ze gemakkelijk opgenomen.</p><p>Ze wordt gebruikt bij ernstige malabsorptie of verteringsstoornissen, bij sommige vormen van voedselallergie (bijv. koemelkallergie, eosinofiele oesofagitis) en soms bij de ziekte van Crohn. Elementaire voeding smaakt slecht en wordt daarom vaak per sonde gegeven.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "elementaire voeding|elementair dieet",
  "option_only": true
 },
 "drinkvoeding (nutridrink)": {
  "title": "Drinkvoeding",
  "short": "Drinkvoeding is een energie- en eiwitrijke drink (zoals Nutridrink) als aanvulling op de gewone voeding bij (dreigende) ondervoeding.",
  "definition": "<p><strong>Drinkvoeding</strong> is een kant-en-klare, energie- en eiwitrijke vloeibare voeding, verrijkt met vitamines en mineralen. Een bekend merk is Nutridrink.</p><p>Ze wordt gegeven als bijvoeding wanneer iemand met gewone maaltijden onvoldoende binnenkrijgt, bijvoorbeeld bij ziekte, ouderdom of na een operatie.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "drinkvoeding (nutridrink)|drinkvoeding|nutridrink",
  "option_only": true
 },
 "acuut ernstig bloedverlies": {
  "title": "Acuut ernstig bloedverlies",
  "short": "Bij acuut ernstig bloedverlies daalt het circulerend volume; het lichaam reageert met tachycardie en vaatvernauwing, en bij groot verlies ontstaat hypovolemische shock.",
  "definition": "<p>Bij <strong>acuut bloedverlies</strong> verliest het lichaam in korte tijd veel bloedvolume. De baroreceptorreflex activeert het sympathische zenuwstelsel: tachycardie, vasoconstrictie (bleke, koude huid) en verhoogde contractiliteit; het RAAS en ADH houden zout en water vast.</p><p>In de eerste uren is het <em>hemoglobine nog normaal</em>, omdat bloed met cellen én plasma tegelijk verloren gaat; pas na verdunning met weefselvocht (en infusie) daalt het Hb. Bij groot verlies (&gt;30–40%) ontstaat hypovolemische shock met hypotensie en orgaanhypoperfusie.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "acuut ernstig bloedverlies|acuut bloedverlies|hemorragische shock",
  "option_only": true
 },
 "anemie": {
  "title": "Anemie",
  "short": "Anemie is een te laag hemoglobinegehalte in het bloed, waardoor het zuurstoftransport vermindert.",
  "definition": "<p>Bij <strong>anemie</strong> is de hemoglobineconcentratie verlaagd (bij volwassenen ongeveer &lt;8,5 mmol/L bij mannen en &lt;7,5 mmol/L bij vrouwen). Klachten: moeheid, kortademigheid bij inspanning, bleekheid en hartkloppingen.</p><p>Indeling op het MCV: <em>microcytair</em> (o.a. ijzergebrek, thalassemie), <em>normocytair</em> (o.a. acuut bloedverlies, chronische ziekte, nierfalen) en <em>macrocytair</em> (o.a. vitamine B12- of foliumzuurtekort). Daarnaast onderscheidt men verminderde aanmaak van versterkte afbraak (hemolyse) of verlies.</p>",
  "image_url": "",
  "wiki_title": "Anemia",
  "match": "anemie|bloedarmoede",
  "option_only": true
 },
 "koorts": {
  "title": "Koorts",
  "short": "Koorts is een verhoogde lichaamstemperatuur (≥38,0 °C) doordat de hypothalamus het setpoint hoger instelt, meestal als reactie op infectie.",
  "definition": "<p>Bij <strong>koorts</strong> wordt het temperatuursetpoint in de hypothalamus verhoogd. Pyrogenen zoals bacteriële producten en cytokines (IL-1, IL-6, TNF) stimuleren daar de productie van prostaglandine E<sub>2</sub>.</p><p>Het lichaam ervaart de normale temperatuur dan als te koud: vasoconstrictie en rillingen verhogen de temperatuur. Als het setpoint weer daalt, volgen zweten en vasodilatatie. Koortsremmers (paracetamol, NSAID's) remmen de prostaglandinesynthese. Hyperthermie (bijv. hitteberoerte) is iets anders: daar is het setpoint níet verhoogd.</p>",
  "image_url": "",
  "wiki_title": "Fever",
  "match": "koorts|febris|pyrexie|hoge koorts",
  "option_only": true
 },
 "reflex": {
  "title": "Reflex",
  "short": "Een reflex is een snelle, onwillekeurige, stereotiepe reactie op een prikkel, via een vaste zenuwbaan (reflexboog).",
  "definition": "<p>Een <strong>reflex</strong> is een automatische reactie op een sensorische prikkel. De onderdelen van de reflexboog zijn: receptor, afferente zenuw, schakelcentrum (ruggenmerg of hersenstam), efferente zenuw en effector (spier of klier).</p><p>Voorbeelden zijn de kniepeesreflex (monosynaptisch), de terugtrekreflex en autonome reflexen zoals de baroreceptorreflex. Reflexen kunnen aangeboren zijn of, zoals bij de conditionering van Pavlov, aangeleerd (geconditioneerde reflex).</p>",
  "image_url": "",
  "wiki_title": "Reflex",
  "match": "reflex|reflexen",
  "option_only": true
 },
 "lever": {
  "title": "Lever",
  "short": "De lever is de grootste klier van het lichaam: hij regelt stofwisseling van suikers, vetten en eiwitten, maakt gal en eiwitten (o.a. albumine, stollingsfactoren) en ontgift stoffen.",
  "definition": "<p>De <strong>lever</strong> ligt rechtsboven in de buik en krijgt bloed uit de a. hepatica en (voor ±75%) uit de <em>v. portae</em>, met voedingsstoffen uit de darm.</p><p>Functies: opslag en afgifte van glucose (glycogeen, gluconeogenese), vet- en cholesterolmetabolisme, aanmaak van plasma-eiwitten (albumine, stollingsfactoren), ureumvorming, galproductie, afbraak van bilirubine en ontgifting van geneesmiddelen en alcohol. Functionele eenheden zijn de leverlobjes met hepatocyten rond sinusoïden.</p>",
  "image_url": "",
  "wiki_title": "Liver",
  "match": "lever|hepar",
  "option_only": true
 },
 "hepatocyten": {
  "title": "Hepatocyten",
  "short": "Hepatocyten zijn de levercellen die vrijwel alle metabole, synthetiserende en ontgiftende functies van de lever uitvoeren.",
  "definition": "<p><strong>Hepatocyten</strong> vormen ±80% van het levervolume. Ze liggen in balkjes langs de sinusoïden en hebben veel mitochondriën, glad en ruw ER en Golgi.</p><p>Ze maken plasma-eiwitten (albumine, stollingsfactoren), gal, glucose (gluconeogenese) en ureum, slaan glycogeen, vet en vitamines op en ontgiften stoffen via het cytochroom P450-systeem. Tussen naburige hepatocyten liggen de galcanaliculi.</p>",
  "image_url": "",
  "wiki_title": "Hepatocyte",
  "match": "hepatocyten|levercellen|hepatocyt",
  "option_only": true
 },
 "maag": {
  "title": "Maag",
  "short": "De maag slaat voedsel tijdelijk op, mengt het met maagzuur en pepsine en geeft het geleidelijk af aan het duodenum.",
  "definition": "<p>De <strong>maag</strong> bestaat uit cardia, fundus, corpus, antrum en pylorus. Het slijmvlies bevat klieren met <em>pariëtale cellen</em> (zoutzuur en intrinsieke factor), <em>hoofdcellen</em> (pepsinogeen), slijmcellen en endocriene cellen (o.a. G-cellen met gastrine in het antrum).</p><p>De maag doodt micro-organismen, start de eiwitvertering en mengt voedsel tot chymus. Intrinsieke factor is nodig voor opname van vitamine B12 in het terminale ileum.</p>",
  "image_url": "",
  "wiki_title": "Stomach",
  "match": "maag|gaster|ventriculus",
  "option_only": true
 },
 "pancreas": {
  "title": "Pancreas",
  "short": "De pancreas is zowel een exocriene klier (verteringsenzymen en bicarbonaat naar het duodenum) als een endocriene klier (insuline en glucagon uit de eilandjes van Langerhans).",
  "definition": "<p>De <strong>pancreas</strong> ligt retroperitoneaal achter de maag, met de kop in de bocht van het duodenum.</p><p>Het <em>exocriene</em> deel (±98%) maakt verteringsenzymen (trypsine(ogeen), lipase, amylase) en bicarbonaatrijk sap, dat via de ductus pancreaticus samen met de galweg in het duodenum uitmondt. Het <em>endocriene</em> deel bestaat uit de eilandjes van Langerhans met bètacellen (insuline), alfacellen (glucagon) en deltacellen (somatostatine).</p>",
  "image_url": "",
  "wiki_title": "Pancreas",
  "match": "pancreas|alvleesklier",
  "option_only": true
 },
 "galblaas": {
  "title": "Galblaas",
  "short": "De galblaas slaat gal uit de lever op en dikt die in; na een vetrijke maaltijd trekt hij samen onder invloed van cholecystokinine.",
  "definition": "<p>De <strong>galblaas</strong> ligt aan de onderzijde van de lever en is via de ductus cysticus verbonden met de galwegen. Ze slaat de gal die de lever continu maakt op en concentreert die door water en zout terug te resorberen.</p><p>Na een (vetrijke) maaltijd geeft het duodenum <em>cholecystokinine</em> af: de galblaas trekt samen en de sfincter van Oddi ontspant, zodat gal in het duodenum komt voor de vetvertering. Galstenen kunnen koliek, cholecystitis of een choledocholithiasis geven.</p>",
  "image_url": "",
  "wiki_title": "Gallbladder",
  "match": "galblaas|vesica biliaris|vesica fellea",
  "option_only": true
 },
 "de milt": {
  "title": "Milt",
  "short": "De milt filtert het bloed: hij ruimt oude en beschadigde rode bloedcellen op en vormt een afweerorgaan tegen bacteriën in het bloed.",
  "definition": "<p>De <strong>milt</strong> ligt linksboven in de buik onder het diafragma. Ze bestaat uit <em>rode pulpa</em> (sinusoïden waar verouderde of afwijkende erytrocyten worden afgebroken) en <em>witte pulpa</em> (lymfatisch weefsel met B- en T-cellen rond arteriolen).</p><p>De milt is belangrijk voor de afweer tegen <em>gekapselde bacteriën</em> (pneumokok, meningokok, H. influenzae). Na splenectomie is het risico op een ernstige sepsis daardoor verhoogd; deze patiënten worden gevaccineerd.</p>",
  "image_url": "",
  "wiki_title": "Spleen",
  "match": "de milt|milt|lien|splenomegalie",
  "option_only": true
 },
 "appendix": {
  "title": "Appendix",
  "short": "De appendix is een wormvormig aanhangsel van het caecum met veel lymfatisch weefsel; ontsteking ervan (appendicitis) is een veelvoorkomende acute buik.",
  "definition": "<p>De <strong>appendix vermiformis</strong> is een smal, blind eindigend aanhangsel van het caecum, meestal rechtsonder in de buik. De wand bevat veel lymfoïde follikels.</p><p>Bij <em>appendicitis</em> raakt het lumen afgesloten (bijv. door een fecoliet of lymfoïde hyperplasie), waarna ontsteking en infectie volgen. Typisch begint de pijn rond de navel en verplaatst zich naar rechtsonder (punt van McBurney), met misselijkheid en koorts.</p>",
  "image_url": "",
  "wiki_title": "Appendix (anatomy)",
  "match": "appendix|blindedarm|appendix vermiformis|wormvormig aanhangsel",
  "option_only": true
 },
 "colon ascendens": {
  "title": "Colon ascendens",
  "short": "Het colon ascendens is het opstijgende deel van de dikke darm rechts in de buik, van caecum tot flexura hepatica; het ligt secundair retroperitoneaal.",
  "definition": "<p>Het <strong>colon ascendens</strong> loopt aan de rechterzijde van de buik omhoog van het caecum tot de <em>flexura coli dextra</em> (hepatica) onder de lever, waar het overgaat in het colon transversum.</p><p>Het ligt secundair retroperitoneaal. De bloedvoorziening komt uit de a. mesenterica superior (a. ileocolica en a. colica dextra). In dit deel is de ontlasting nog vloeibaar en wordt veel water en zout teruggeresorbeerd.</p>",
  "image_url": "",
  "wiki_title": "Ascending colon",
  "match": "colon ascendens|opstijgende colon|opstijgend colon",
  "option_only": true
 },
 "de navelstreng": {
  "title": "Navelstreng",
  "short": "De navelstreng verbindt de foetus met de placenta en bevat normaal twee navelarteriën en één navelvene, ingebed in gelei van Wharton.",
  "definition": "<p>De <strong>navelstreng</strong> bevat normaal <em>twee aa. umbilicales</em>, die zuurstofarm bloed van de foetus naar de placenta voeren, en <em>één v. umbilicalis</em>, die zuurstofrijk bloed naar de foetus terugbrengt. De vaten liggen in gelei van Wharton, omgeven door amnion.</p><p>Na de geboorte sluiten de vaten: de navelvene wordt het lig. teres hepatis en de navelarteriën de mediale umbilicale plooien. Een navelstreng met één arterie is geassocieerd met aangeboren afwijkingen.</p>",
  "image_url": "",
  "wiki_title": "Umbilical cord",
  "match": "de navelstreng|navelstreng|funiculus umbilicalis",
  "option_only": true
 },
 "secundaire follikel": {
  "title": "Secundaire follikel",
  "short": "Een secundaire follikel is een groeiende ovariële follikel met meerdere lagen granulosacellen, een zona pellucida en theca, die een vochtholte (antrum) gaat vormen.",
  "definition": "<p>In het ovarium rijpen follikels van <em>primordiaal</em> → <em>primair</em> → <strong>secundair</strong> → tertiair (Graafse follikel).</p><p>In een secundaire follikel is de oöcyt omgeven door meerdere lagen granulosacellen en een zona pellucida, met daaromheen een theca interna en externa. Tussen de granulosacellen ontstaan vochtholtes die samenvloeien tot een <em>antrum</em>. Thecacellen maken onder invloed van LH androgenen, die granulosacellen onder invloed van FSH omzetten in oestrogeen.</p>",
  "image_url": "",
  "wiki_title": "Ovarian follicle",
  "match": "secundaire follikel|secundaire follikels|antrale follikel",
  "option_only": true
 },
 "spermatogonia": {
  "title": "Spermatogonia",
  "short": "Spermatogonia zijn de stamcellen van de spermatogenese aan de basaalmembraan van de tubuli seminiferi; ze delen mitotisch.",
  "definition": "<p><strong>Spermatogonia</strong> zijn diploïde kiemcellen die tegen de basaalmembraan van de tubuli seminiferi liggen, buiten de bloed-testisbarrière van de Sertolicellen.</p><p>Vanaf de puberteit delen ze <em>mitotisch</em>: een deel blijft stamcel, een deel wordt primaire spermatocyt. Die doorloopt de meiose (secundaire spermatocyt → spermatide), waarna spermiogenese het spermatozoön vormt. Het hele proces duurt ±64–74 dagen.</p>",
  "image_url": "",
  "wiki_title": "Spermatogonium",
  "match": "spermatogonia|spermatogonium|spermatogoniën",
  "option_only": true
 },
 "angiogenese": {
  "title": "Angiogenese",
  "short": "Angiogenese is de vorming van nieuwe bloedvaten uit bestaande vaten, gestimuleerd door o.a. VEGF; belangrijk bij wondgenezing en tumorgroei.",
  "definition": "<p>Bij <strong>angiogenese</strong> spruiten nieuwe capillairen uit bestaande vaten. Endotheelcellen breken de basaalmembraan af, migreren, prolifereren en vormen nieuwe buisjes, gevolgd door rekrutering van pericyten.</p><p>Het belangrijkste stimulerende signaal is <em>VEGF</em>, dat o.a. bij hypoxie wordt gemaakt. Angiogenese is essentieel bij embryonale ontwikkeling, wondgenezing (granulatieweefsel) en de menstruele cyclus, maar ook bij tumorgroei en diabetische retinopathie; VEGF-remmers worden daarom bij kanker en maculadegeneratie gebruikt.</p>",
  "image_url": "",
  "wiki_title": "Angiogenesis",
  "match": "angiogenese|neovascularisatie|angiogenesis",
  "option_only": true
 },
 "fibrineuze ontsteking": {
  "title": "Fibrineuze ontsteking",
  "short": "Bij een fibrineuze ontsteking lekt door sterke vaatbeschadiging fibrinogeen uit de vaten, dat als fibrine neerslaat, vaak op sereuze vliezen (bijv. pericarditis).",
  "definition": "<p>Bij een <strong>fibrineuze ontsteking</strong> is de vaatwand zo doorlaatbaar dat ook grote eiwitten zoals fibrinogeen het weefsel in lekken. Daar wordt het omgezet in <em>fibrine</em>, dat als een eosinofiel, draderig netwerk neerslaat.</p><p>Het komt typisch voor op sereuze vliezen (pericard, pleura, peritoneum): bij een fibrineuze pericarditis ontstaat een ‘broodboter’-aspect en een pericardwrijven. Als de fibrine niet wordt opgeruimd, kan het ingroeien tot littekenweefsel (verklevingen).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "fibrineuze ontsteking|fibrineus exsudaat",
  "option_only": true
 },
 "sereuze ontsteking": {
  "title": "Sereuze ontsteking",
  "short": "Bij een sereuze ontsteking lekt een dun, eiwitarm, celarm vocht uit, zoals in een brandblaar of bij een pleura-effusie.",
  "definition": "<p>Bij een <strong>sereuze ontsteking</strong> bestaat het exsudaat uit dun, helder vocht met relatief weinig eiwit en cellen, afkomstig uit het plasma of uit mesotheelcellen.</p><p>Voorbeelden zijn de vochtblaar bij een brandwond of virale huidinfectie en vochtophoping in lichaamsholten (sereuze effusie, bijv. pleuravocht bij een milde ontsteking). Het is de mildste vorm van exsudatieve ontsteking.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "sereuze ontsteking|sereus exsudaat",
  "option_only": true
 },
 "ulcererende ontsteking": {
  "title": "Ulcererende ontsteking",
  "short": "Bij een ulcererende ontsteking gaat het oppervlakte-epitheel lokaal verloren, met een defect (ulcus) waarvan de bodem ontstoken is.",
  "definition": "<p>Een <strong>ulcus</strong> is een lokaal defect van het epitheel en (een deel van) het onderliggende weefsel, ontstaan door necrose en afstoting van ontstoken weefsel.</p><p>Het komt vooral voor op slijmvliezen (maag, duodenum, darm) en de huid (bijv. ulcus cruris). De bodem van het ulcus bevat necrotisch materiaal en fibrine met daaronder een ontstekingsinfiltraat; in het chronische stadium ontstaat granulatieweefsel en fibrose.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "ulcererende ontsteking|ulceratie|ulcus",
  "option_only": true
 },
 "myeloïde voorlopercellen": {
  "title": "Myeloïde voorlopercellen",
  "short": "Myeloïde voorlopercellen zijn beenmergcellen waaruit erytrocyten, trombocyten, granulocyten en monocyten ontstaan.",
  "definition": "<p>De hematopoëtische stamcel splitst zich in een <em>lymfoïde</em> en een <strong>myeloïde</strong> lijn. Uit de myeloïde voorlopercel (CMP) ontstaan via verdere tussenstappen de <em>erytrocyten</em>, <em>megakaryocyten</em> (bloedplaatjes), <em>granulocyten</em> (neutrofielen, eosinofielen, basofielen), <em>monocyten</em>/macrofagen en mestcellen.</p><p>Uit de lymfoïde lijn ontstaan B-cellen, T-cellen en NK-cellen.</p>",
  "image_url": "",
  "wiki_title": "Common myeloid progenitor",
  "match": "myeloïde voorlopercellen|myeloïde voorlopercel|myeloïde progenitor|myeloïde stamcel",
  "option_only": true
 },
 "myeloïde blasten": {
  "title": "Myeloïde blasten",
  "short": "Myeloïde blasten zijn onrijpe voorlopercellen van de myeloïde reeks; een sterk verhoogd aantal in beenmerg of bloed past bij acute myeloïde leukemie (AML).",
  "definition": "<p><strong>Myeloblasten</strong> zijn de vroegst herkenbare voorlopers van de granulocyten. Normaal vormen ze minder dan 5% van de cellen in het beenmerg en komen ze niet in het bloed voor.</p><p>Bij <em>acute myeloïde leukemie</em> stapelen onrijpe myeloïde blasten zich op (≥20% in het beenmerg), wat de normale aanmaak verdringt: anemie, trombocytopenie en infecties. Ze kunnen <em>Auerstaafjes</em> bevatten en zijn vaak positief voor myeloperoxidase.</p>",
  "image_url": "",
  "wiki_title": "Myeloblast",
  "match": "myeloïde blasten|myeloblasten|myeloblast",
  "option_only": true
 },
 "lymfoïde blasten": {
  "title": "Lymfoïde blasten",
  "short": "Lymfoïde blasten (lymfoblasten) zijn onrijpe voorlopers van B- of T-lymfocyten; opstapeling past bij acute lymfatische leukemie (ALL).",
  "definition": "<p><strong>Lymfoblasten</strong> zijn onrijpe cellen van de lymfoïde reeks waaruit B- en T-lymfocyten ontstaan.</p><p>Bij <em>acute lymfatische leukemie</em>, de meest voorkomende kinderkanker, stapelen ze zich op in beenmerg en bloed. Ze zijn klein met weinig cytoplasma, bevatten geen Auerstaafjes en zijn myeloperoxidase-negatief; ze zijn vaak TdT-positief. Typering via flowcytometrie (B- of T-cel-markers).</p>",
  "image_url": "",
  "wiki_title": "Lymphoblast",
  "match": "lymfoïde blasten|lymfoblasten|lymfoblast",
  "option_only": true
 },
 "b-cellen": {
  "title": "B-cellen",
  "short": "B-cellen zijn lymfocyten die na activatie uitrijpen tot plasmacellen die antilichamen maken; ze rijpen in het beenmerg.",
  "definition": "<p><strong>B-cellen</strong> ontstaan en rijpen in het beenmerg. Elke B-cel draagt een unieke B-celreceptor (membraangebonden antilichaam).</p><p>Na binding van een antigeen en meestal hulp van een T-helpercel (in de kiemcentra van lymfeklieren) prolifereren ze en differentiëren ze tot <em>plasmacellen</em> (antilichaamproductie) en geheugen-B-cellen. Daarbij vinden klasseswitch en affiniteitsrijping plaats. B-cellen kunnen ook antigeen presenteren.</p>",
  "image_url": "",
  "wiki_title": "B cell",
  "match": "b-cellen|b cellen|b-lymfocyten|b-cel|b-lymfocyt|b cel",
  "option_only": true
 },
 "t-cellen": {
  "title": "T-cellen",
  "short": "T-cellen zijn lymfocyten die in de thymus rijpen en antigeen herkennen dat via MHC wordt gepresenteerd; CD4-cellen helpen, CD8-cellen doden geïnfecteerde cellen.",
  "definition": "<p><strong>T-cellen</strong> ontstaan in het beenmerg en rijpen in de <em>thymus</em>, waar positieve en negatieve selectie plaatsvindt. Hun T-celreceptor herkent alleen peptiden die door MHC-moleculen worden gepresenteerd.</p><p><em>CD4⁺ T-helpercellen</em> herkennen MHC-II en sturen de afweer met cytokines (Th1, Th2, Th17, Tfh); <em>CD8⁺ cytotoxische T-cellen</em> herkennen MHC-I en doden geïnfecteerde of tumorcellen; regulatoire T-cellen remmen de afweer. Ze vormen de cellulaire adaptieve immuniteit.</p>",
  "image_url": "",
  "wiki_title": "T cell",
  "match": "t-cellen|t cellen|t-lymfocyten|t-cel|t-lymfocyt|t cel",
  "option_only": true
 },
 "neutrofielen": {
  "title": "Neutrofiele granulocyten",
  "short": "Neutrofielen zijn de meest voorkomende witte bloedcellen; ze zijn als eerste ter plekke bij een acute bacteriële ontsteking en fagocyteren bacteriën.",
  "definition": "<p><strong>Neutrofiele granulocyten</strong> hebben een gesegmenteerde kern en korrels met afbrekende enzymen. Ze leven maar kort (uren tot dagen) en worden in grote aantallen in het beenmerg gemaakt.</p><p>Bij een acute ontsteking verlaten ze als eerste de bloedbaan (marginatie, rollen, adhesie, diapedese) en volgen ze chemotactische signalen (o.a. IL-8, C5a). Ze fagocyteren en doden bacteriën met een oxidatieve burst en enzymen en kunnen ‘NETs’ uitwerpen. Pus bestaat grotendeels uit dode neutrofielen.</p>",
  "image_url": "",
  "wiki_title": "Neutrophil",
  "match": "neutrofielen|neutrofiele granulocyten|neutrofiel|neutrofiele granulocyt",
  "option_only": true
 },
 "dendritische cellen": {
  "title": "Dendritische cellen",
  "short": "Dendritische cellen zijn de belangrijkste antigeenpresenterende cellen: ze nemen antigeen op in weefsels en activeren naïeve T-cellen in de lymfeklier.",
  "definition": "<p><strong>Dendritische cellen</strong> zitten in weefsels die in contact staan met de buitenwereld, zoals huid (Langerhanscellen) en slijmvliezen. Met hun uitlopers nemen ze antigenen op.</p><p>Na activatie (bijv. via Toll-like receptoren) migreren ze naar de lymfeklier, waar ze antigeenfragmenten op MHC-I en MHC-II presenteren, met costimulerende moleculen. Ze zijn de enige cellen die effectief <em>naïeve T-cellen</em> activeren en vormen zo de brug tussen aangeboren en verworven afweer.</p>",
  "image_url": "",
  "wiki_title": "Dendritic cell",
  "match": "dendritische cellen|dendritische cel|langerhanscellen",
  "option_only": true
 },
 "samenvatten": {
  "title": "Samenvatten (gesprekstechniek)",
  "short": "Samenvatten is een gesprekstechniek waarbij de arts de kern van wat de patiënt heeft verteld kort in eigen woorden teruggeeft, om te checken en te structureren.",
  "definition": "<p>Bij <strong>samenvatten</strong> vat de arts meerdere uitspraken of een heel gespreksdeel van de patiënt kort samen. Het doel is te controleren of de informatie goed begrepen is, overzicht te geven en het gesprek te structureren, bijvoorbeeld als afsluiting van een fase voordat een nieuw onderwerp begint.</p><p>Samenvatten gaat over de inhoud van een groter deel van het gesprek; het verschilt daarin van parafraseren, dat één uitspraak teruggeeft.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "samenvatten|samenvatting geven",
  "option_only": true
 },
 "parafraseren": {
  "title": "Parafraseren (gesprekstechniek)",
  "short": "Parafraseren is het in eigen woorden teruggeven van de inhoud van één uitspraak van de patiënt, om te laten merken dat je luistert en te checken of je het goed begrijpt.",
  "definition": "<p>Bij <strong>parafraseren</strong> herhaalt de arts de <em>inhoud</em> van wat de patiënt net zei in eigen, vaak kortere woorden (bijvoorbeeld: “U heeft dus vooral ’s nachts last”). Het is een vorm van actief luisteren.</p><p>Parafraseren nodigt de patiënt uit om verder te vertellen of te corrigeren. Het verschilt van het reflecteren van gevoelens, dat zich richt op de emotie achter de woorden.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "parafraseren|parafrase",
  "option_only": true
 },
 "agenderen": {
  "title": "Agenderen (gesprekstechniek)",
  "short": "Agenderen is aan het begin van een consult samen met de patiënt vaststellen welke onderwerpen besproken worden.",
  "definition": "<p>Bij <strong>agenderen</strong> inventariseert de arts aan het begin van het gesprek welke vragen en klachten de patiënt wil bespreken, en vult die aan met eigen punten (bijv. uitslagen of controles). Samen wordt besloten wat er in dit consult aan bod komt en in welke volgorde.</p><p>Het voorkomt dat belangrijke punten aan het eind van het gesprek nog opduiken (‘deurknopvragen’) en geeft het consult structuur.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "agenderen|agenda bespreken|agenda opstellen",
  "option_only": true
 },
 "gesprekskader bespreken": {
  "title": "Gesprekskader bespreken",
  "short": "Het gesprekskader bespreken betekent aan het begin van een gesprek uitleggen wat het doel, de duur en de opbouw van het gesprek zijn.",
  "definition": "<p>Bij het <strong>bespreken van het gesprekskader</strong> vertelt de arts aan het begin wat de aanleiding en het doel van het gesprek zijn, hoeveel tijd er is, en hoe het gesprek ongeveer verloopt (bijvoorbeeld eerst vragen stellen, dan onderzoek, dan bespreken).</p><p>Het geeft de patiënt duidelijkheid en houvast, en vormt samen met agenderen het startpunt van een gestructureerd consult.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "gesprekskader bespreken|gesprekskader|kader schetsen|het gesprekskader aangeven",
  "option_only": true
 },
 "hardop denken": {
  "title": "Hardop denken",
  "short": "Hardop denken is het voor de patiënt uitspreken van je overwegingen tijdens onderzoek of besluitvorming, zodat de patiënt kan meekijken en meedenken.",
  "definition": "<p>Bij <strong>hardop denken</strong> verwoordt de arts wat hij of zij doet en overweegt, bijvoorbeeld tijdens het lichamelijk onderzoek (“ik voel nu aan uw buik of de lever vergroot is”) of bij het afwegen van mogelijke oorzaken.</p><p>Het maakt het klinisch redeneren transparant, vermindert onzekerheid bij de patiënt en ondersteunt gedeelde besluitvorming.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "hardop denken|hardop-denken",
  "option_only": true
 },
 "gedragsbehoud": {
  "title": "Gedragsbehoud (stages of change)",
  "short": "Gedragsbehoud is de fase in het model van Prochaska en DiClemente waarin het nieuwe gedrag al langer (meestal >6 maanden) wordt volgehouden.",
  "definition": "<p>Het <strong>transtheoretisch model</strong> (stages of change) van Prochaska en DiClemente beschrijft fasen van gedragsverandering: precontemplatie, contemplatie, preparatie, actie en <strong>gedragsbehoud</strong>; terugval kan op elk moment optreden.</p><p>In de fase van gedragsbehoud heeft iemand het nieuwe gedrag (bijvoorbeeld gestopt met roken) al langer dan ongeveer zes maanden volgehouden. Het accent ligt dan op het voorkomen van terugval.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "gedragsbehoud|maintenance",
  "option_only": true
 },
 "preparatie": {
  "title": "Preparatie (stages of change)",
  "short": "Preparatie is de fase in het model van Prochaska en DiClemente waarin iemand van plan is binnenkort (binnen ±1 maand) te veranderen en al voorbereidingen treft.",
  "definition": "<p>In het <strong>transtheoretisch model</strong> van gedragsverandering volgt de <strong>preparatiefase</strong> op contemplatie. De persoon heeft besloten om te veranderen, meestal binnen een maand, en zet al kleine stappen: een stopdatum kiezen, informatie zoeken, hulp regelen.</p><p>De volgende fase is actie, waarin het gedrag daadwerkelijk wordt veranderd.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "preparatie|voorbereidingsfase",
  "option_only": true
 },
 "actie": {
  "title": "Actie (stages of change)",
  "short": "Actie is de fase in het model van Prochaska en DiClemente waarin iemand het gedrag daadwerkelijk heeft veranderd, korter dan ongeveer zes maanden geleden.",
  "definition": "<p>In het <strong>transtheoretisch model</strong> van gedragsverandering is de <strong>actiefase</strong> de periode waarin iemand het nieuwe gedrag actief uitvoert, bijvoorbeeld net gestopt is met roken. Deze fase duurt tot ongeveer zes maanden na de verandering.</p><p>Het risico op terugval is in deze fase groot; ondersteuning richt zich op volhouden en omgaan met verleidingen. Daarna volgt de fase van gedragsbehoud.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "actie|actiefase",
  "option_only": true
 },
 "sociale leertheorie": {
  "title": "Sociale leertheorie",
  "short": "De sociale leertheorie (Bandura) stelt dat mensen gedrag leren door anderen te observeren en na te doen, en benadrukt eigen-effectiviteit.",
  "definition": "<p>Volgens de <strong>sociale leertheorie</strong> van Albert Bandura leren mensen niet alleen door eigen ervaring en beloning, maar ook door <em>observatie en modeling</em>: het zien van gedrag bij anderen en de gevolgen daarvan.</p><p>Een kernbegrip is <em>eigen-effectiviteit</em> (self-efficacy): het vertrouwen dat je het gedrag zelf kunt uitvoeren. Daarnaast spelen uitkomstverwachtingen en wederzijdse beïnvloeding van persoon, gedrag en omgeving een rol.</p>",
  "image_url": "",
  "wiki_title": "Social learning theory",
  "match": "sociale leertheorie|sociaal-cognitieve theorie|sociale cognitieve theorie",
  "option_only": true
 },
 "coping theorie": {
  "title": "Copingtheorie",
  "short": "Copingtheorie (Lazarus en Folkman) beschrijft hoe mensen een stressor beoordelen en ermee omgaan, probleemgericht of emotiegericht.",
  "definition": "<p>Volgens het <strong>stress-copingmodel</strong> van Lazarus en Folkman hangt de stressreactie af van de <em>beoordeling</em> van een situatie: is het een bedreiging (primaire beoordeling) en heb ik de middelen om ermee om te gaan (secundaire beoordeling)?</p><p><em>Coping</em> zijn de pogingen om met de stressor om te gaan: probleemgericht (de situatie aanpakken) of emotiegericht (de emoties reguleren, bijv. door afleiding of steun zoeken).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "coping theorie|copingtheorie|coping",
  "option_only": true
 },
 "sociale omgeving": {
  "title": "Sociale omgeving (determinant)",
  "short": "De sociale omgeving als gezondheidsdeterminant omvat de invloed van familie, vrienden, sociale normen, sociaal netwerk en sociaaleconomische positie.",
  "definition": "<p>In modellen van <strong>determinanten van gezondheid</strong> (zoals het model van Lalonde of Dahlgren en Whitehead) is de <strong>sociale omgeving</strong> een van de factoren die gezondheid beïnvloeden, naast biologische factoren, leefstijl, fysieke omgeving en gezondheidszorg.</p><p>Het gaat om sociale steun en netwerken, normen en gewoonten in de omgeving, opleiding, werk, inkomen en woonsituatie. Deze factoren verklaren een belangrijk deel van de sociaaleconomische gezondheidsverschillen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "sociale omgeving|sociale omgevingsfactoren",
  "option_only": true
 },
 "fysieke omgeving": {
  "title": "Fysieke omgeving (determinant)",
  "short": "De fysieke omgeving als gezondheidsdeterminant omvat de natuurlijke en gebouwde omgeving: lucht, water, geluid, woning en de inrichting van de wijk.",
  "definition": "<p>In modellen van <strong>determinanten van gezondheid</strong> is de <strong>fysieke omgeving</strong> alles buiten de persoon dat niet sociaal is: luchtverontreiniging, waterkwaliteit, geluid, straling, de kwaliteit van de woning, en de inrichting van de omgeving (groen, fietspaden, voedselaanbod).</p><p>Deze factoren beïnvloeden gezondheid direct (bijv. fijnstof en longziekten) en indirect via gedrag (bijv. een beweegvriendelijke wijk).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "fysieke omgeving|fysieke omgevingsfactoren|materiële omgeving",
  "option_only": true
 },
 "secundaire preventie": {
  "title": "Secundaire preventie",
  "short": "Secundaire preventie is het vroeg opsporen van een ziekte voordat er klachten zijn, zodat behandeling eerder kan beginnen, zoals bij bevolkingsonderzoek.",
  "definition": "<p><strong>Secundaire preventie</strong> richt zich op het vroegtijdig opsporen van ziekte bij mensen zonder klachten, in een stadium waarin behandeling nog meer effect heeft. Voorbeelden zijn bevolkingsonderzoek naar borst-, baarmoederhals- en darmkanker, de hielprik en bloeddrukmetingen.</p><p>Primaire preventie voorkomt dat ziekte ontstaat (vaccinatie, stoppen met roken); tertiaire preventie beperkt de gevolgen van bestaande ziekte (revalidatie, voorkomen van complicaties).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "secundaire preventie",
  "option_only": true
 },
 "ziektepreventie": {
  "title": "Ziektepreventie",
  "short": "Ziektepreventie omvat alle maatregelen om het ontstaan, de verergering of de gevolgen van ziekte te voorkomen.",
  "definition": "<p><strong>Ziektepreventie</strong> wordt ingedeeld naar het moment van ingrijpen: <em>primair</em> (voorkomen dat ziekte ontstaat), <em>secundair</em> (vroege opsporing) en <em>tertiair</em> (gevolgen van ziekte beperken). Een andere indeling is naar doelgroep: universeel, selectief (risicogroepen), geïndiceerd (mensen met beginnende klachten) en zorggerelateerd.</p><p>Het is een onderdeel van gezondheidsbevordering, dat breder is en ook het versterken van gezondheid omvat.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "ziektepreventie|preventie",
  "option_only": true
 },
 "gezondheidsvoorlichting": {
  "title": "Gezondheidsvoorlichting",
  "short": "Gezondheidsvoorlichting is het planmatig geven van informatie om kennis, houding en gedrag rond gezondheid te beïnvloeden.",
  "definition": "<p><strong>Gezondheidsvoorlichting</strong> is een methode binnen gezondheidsbevordering. Het richt zich op het overdragen van kennis en het beïnvloeden van attitudes, zodat mensen gezondere keuzes maken — bijvoorbeeld campagnes over roken, alcohol of veilig vrijen.</p><p>Voorlichting alleen verandert gedrag vaak beperkt; het werkt beter in combinatie met maatregelen in de omgeving en regelgeving.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "gezondheidsvoorlichting|voorlichting",
  "option_only": true
 },
 "strafrechter": {
  "title": "Strafrechter",
  "short": "De strafrechter beoordeelt of iemand een strafbaar feit heeft gepleegd en legt een straf op; het initiatief ligt bij het Openbaar Ministerie.",
  "definition": "<p>Het <strong>strafrecht</strong> gaat over gedragingen die de wet strafbaar stelt, zoals mishandeling of dood door schuld. Het Openbaar Ministerie besluit of iemand wordt vervolgd; de <strong>strafrechter</strong> beslist over schuld en straf (bijv. geldboete, taakstraf, gevangenisstraf).</p><p>Het doel is vergelding en bescherming van de samenleving, niet het vergoeden van de schade aan het slachtoffer (al kan een slachtoffer zich in het strafproces voegen).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "strafrechter|strafrecht",
  "option_only": true
 },
 "bestuursrechter": {
  "title": "Bestuursrechter",
  "short": "De bestuursrechter beoordeelt geschillen tussen burgers en de overheid, bijvoorbeeld over een besluit van een gemeente of ziektekostenregeling.",
  "definition": "<p>De <strong>bestuursrechter</strong> beslist over geschillen tussen een burger (of bedrijf) en een <em>overheidsorgaan</em>. Het gaat om besluiten zoals een vergunning, een uitkering, een indicatie voor zorg (Wlz, Wmo) of een maatregel van de inspectie.</p><p>Voordat iemand naar de bestuursrechter kan, moet meestal eerst bezwaar worden gemaakt bij het bestuursorgaan zelf.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "bestuursrechter|bestuursrecht",
  "option_only": true
 },
 "onafhankelijke t-toets": {
  "title": "Onafhankelijke t-toets",
  "short": "De onafhankelijke t-toets vergelijkt de gemiddelden van een continue, normaal verdeelde variabele tussen twee onafhankelijke groepen.",
  "definition": "<p>De <strong>onafhankelijke (ongepaarde) t-toets</strong> toetst of het gemiddelde van een continue uitkomst verschilt tussen twee groepen die niets met elkaar te maken hebben, bijvoorbeeld de bloeddruk in een behandel- en een controlegroep.</p><p>Voorwaarden: de uitkomst is (ongeveer) normaal verdeeld in beide groepen, de waarnemingen zijn onafhankelijk en de varianties zijn ongeveer gelijk (anders de Welch-variant). Bij metingen bij dezelfde personen gebruik je de gepaarde t-toets; bij scheve data een non-parametrische toets (Mann-Whitney).</p>",
  "image_url": "",
  "wiki_title": "Student's t-test",
  "match": "onafhankelijke t-toets|ongepaarde t-toets|independent samples t-test|t-toets voor onafhankelijke steekproeven",
  "option_only": true
 },
 "case control onderzoek": {
  "title": "Patiënt-controleonderzoek",
  "short": "In een patiënt-controleonderzoek vergelijk je mensen mét een ziekte (cases) met mensen zonder (controles) op eerdere blootstelling; de associatiemaat is de odds ratio.",
  "definition": "<p>Een <strong>case-control onderzoek</strong> start bij de <em>uitkomst</em>: men selecteert patiënten met de ziekte (cases) en een vergelijkbare groep zonder de ziekte (controles), en kijkt terug hoe vaak beide groepen in het verleden aan een determinant waren blootgesteld.</p><p>Het is efficiënt voor zeldzame ziekten en ziekten met een lange latentietijd. Omdat het aantal cases door de onderzoeker wordt gekozen, kun je geen incidentie of relatief risico berekenen, wel de <em>odds ratio</em>. Het is gevoelig voor recall bias en selectiebias.</p>",
  "image_url": "",
  "wiki_title": "Case–control study",
  "match": "case control onderzoek|case-control onderzoek|patiënt-controleonderzoek|case-controlonderzoek",
  "option_only": true
 },
 "prospectief cohort onderzoek": {
  "title": "Prospectief cohortonderzoek",
  "short": "In een prospectief cohortonderzoek volg je een groep mensen vanaf nu in de tijd en meet je wie de uitkomst ontwikkelt, afhankelijk van blootstelling.",
  "definition": "<p>In een <strong>prospectief cohortonderzoek</strong> wordt een groep (cohort) zonder de uitkomst geselecteerd, wordt de blootstelling bij aanvang gemeten en worden de deelnemers in de toekomst gevolgd om te zien wie de uitkomst krijgt.</p><p>Hiermee kun je de <em>incidentie</em> en het <em>relatief risico</em> berekenen, en is de tijdsvolgorde duidelijk. Nadelen: duur, lange looptijd, uitval tijdens follow-up, en ongeschikt voor zeldzame uitkomsten.</p>",
  "image_url": "",
  "wiki_title": "Prospective cohort study",
  "match": "prospectief cohort onderzoek|prospectief cohortonderzoek|prospectieve cohortstudie",
  "option_only": true
 },
 "retrospectief cohort onderzoek": {
  "title": "Retrospectief cohortonderzoek",
  "short": "In een retrospectief cohortonderzoek gebruik je bestaande gegevens om een groep vanaf een moment in het verleden tot nu te volgen.",
  "definition": "<p>Bij een <strong>retrospectief (historisch) cohortonderzoek</strong> worden zowel de blootstelling als de uitkomst achteraf uit bestaande gegevens gehaald, bijvoorbeeld uit dossiers of registraties. Het cohort wordt gedefinieerd op een moment in het verleden en ‘in de data’ vooruit gevolgd.</p><p>Net als bij het prospectieve cohort kun je incidentie en relatief risico berekenen, maar het is sneller en goedkoper. De kwaliteit hangt af van de beschikbare gegevens, die niet voor het onderzoek zijn verzameld.</p>",
  "image_url": "",
  "wiki_title": "Retrospective cohort study",
  "match": "retrospectief cohort onderzoek|retrospectief cohortonderzoek|historisch cohortonderzoek|retrospectieve cohortstudie",
  "option_only": true
 },
 "binaire perceptie": {
  "title": "Binaire risicoperceptie",
  "short": "Bij binaire risicoperceptie vertalen mensen een kans naar ‘het gebeurt wel’ of ‘het gebeurt niet’, in plaats van in percentages te denken.",
  "definition": "<p>Bij <strong>binaire perceptie</strong> van risico denken mensen in twee categorieën: <em>ja of nee</em>, ‘ik krijg het’ of ‘ik krijg het niet’. Een kans van bijvoorbeeld 30% wordt dan niet als een getal ervaren, maar omgezet in een verwachting dat iets wel of niet zal gebeuren.</p><p>Het is een van de manieren waarop mensen in de praktijk met risico-informatie omgaan, naast heuristieken zoals de beschikbaarheids- en representativiteitsheuristiek.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "binaire perceptie|binaire risicoperceptie",
  "option_only": true
 },
 "illusionaire vervalsing": {
  "title": "Illusionaire vervalsing",
  "short": "Een illusionaire vervalsing (illusie) is het verkeerd waarnemen van een werkelijk bestaande prikkel, bijvoorbeeld een jas aan de kapstok aanzien voor een persoon.",
  "definition": "<p>Een <strong>illusionaire vervalsing</strong> is een waarnemingsstoornis waarbij een <em>bestaande</em> prikkel verkeerd wordt geïnterpreteerd: een schaduw wordt een gestalte, het geruis van de verwarming klinkt als stemmen.</p><p>Het verschilt van een hallucinatie, waarbij iets wordt waargenomen zonder dat er een prikkel is. Illusies komen voor bij vermoeidheid, angst, delier en in schemerlicht, ook bij gezonde mensen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "illusionaire vervalsing|illusie|illusies",
  "option_only": true
 },
 "dwanggedachte": {
  "title": "Dwanggedachte (obsessie)",
  "short": "Een dwanggedachte (obsessie) is een steeds terugkerende, opdringerige gedachte die als onzinnig of ongewenst wordt ervaren en angst oproept.",
  "definition": "<p>Een <strong>dwanggedachte</strong> of obsessie is een gedachte, impuls of beeld die zich steeds opdringt, die de persoon als <em>eigen</em> maar ongewenst of overdreven herkent, en die angst of onrust geeft (bijv. angst voor besmetting of de gedachte iemand iets aan te doen).</p><p>Vaak volgen dwanghandelingen (compulsies) om de angst te verminderen, zoals wassen of controleren. Het verschil met een waan is dat de persoon het irrationele van de gedachte inziet. Kenmerkend voor de obsessieve-compulsieve stoornis (OCS).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "dwanggedachte|dwanggedachten|obsessie|obsessies",
  "option_only": true
 },
 "depressieve stoornis": {
  "title": "Depressieve stoornis",
  "short": "Een depressieve stoornis kenmerkt zich door minstens twee weken een sombere stemming en/of verlies van interesse en plezier, met o.a. slaap-, eetlust- en concentratieproblemen.",
  "definition": "<p>Voor een <strong>depressieve stoornis</strong> (DSM-5) moeten gedurende minstens twee weken vijf of meer symptomen aanwezig zijn, waaronder ten minste één kernsymptoom: <em>depressieve stemming</em> of <em>verlies van interesse of plezier</em> (anhedonie).</p><p>Andere symptomen: veranderde eetlust of gewicht, slapeloosheid of juist veel slapen, psychomotorische remming of agitatie, vermoeidheid, schuldgevoelens of waardeloosheid, concentratieproblemen en gedachten aan de dood. Behandeling met psychotherapie en/of antidepressiva.</p>",
  "image_url": "",
  "wiki_title": "Major depressive disorder",
  "match": "depressieve stoornis|depressie|depressieve episode|majeure depressie",
  "option_only": true
 },
 "silent variant": {
  "title": "Silent variant (stille variant)",
  "short": "Een silent (synonieme) variant is een DNA-verandering in een codon die géén ander aminozuur oplevert, doordat de genetische code gedegenereerd is.",
  "definition": "<p>Bij een <strong>silent variant</strong> verandert één nucleotide in de coderende sequentie, maar het nieuwe codon codeert voor <em>hetzelfde aminozuur</em> (bijv. GCU en GCC coderen allebei voor alanine). In de eiwitnotatie wordt dat geschreven als bijv. p.(Ala170=).</p><p>Dat is mogelijk omdat de genetische code <em>gedegenereerd</em> is: de meeste aminozuren hebben meerdere codons. Meestal heeft zo’n variant geen effect, al kan hij soms de splicing beïnvloeden.</p>",
  "image_url": "",
  "wiki_title": "Silent mutation",
  "match": "silent variant|stille variant|silent mutatie|synonieme variant",
  "option_only": true
 },
 "ao-antagonisme": {
  "title": "AB0-antagonisme",
  "short": "Bij AB0-antagonisme breken maternale anti-A- of anti-B-antistoffen (IgG) de rode bloedcellen van het kind af; meestal bij een moeder met bloedgroep O en een kind met A of B.",
  "definition": "<p>Bij <strong>AB0-antagonisme</strong> heeft de moeder meestal <em>bloedgroep O</em> en het kind bloedgroep A of B. Mensen met bloedgroep O maken van nature anti-A- en anti-B-antistoffen, waarvan een deel IgG is en de placenta kan passeren.</p><p>Die antistoffen veroorzaken hemolyse van de foetale erytrocyten, wat bij de pasgeborene leidt tot een ongeconjugeerde hyperbilirubinemie. Het verloopt meestal milder dan rhesusantagonisme en kan ook bij een eerste zwangerschap voorkomen. De directe antiglobulinetest (Coombs) bij het kind is vaak (zwak) positief.</p>",
  "image_url": "",
  "wiki_title": "Hemolytic disease of the newborn (ABO)",
  "match": "ao-antagonisme|ab0-antagonisme|abo-antagonisme|ab0-incompatibiliteit|bloedgroepantagonisme",
  "option_only": true
 },
 "hyposfagma": {
  "title": "Hyposfagma",
  "short": "Een hyposfagma is een onschuldige bloeding onder het bindvlies van het oog: een scherp begrensde felrode vlek, zonder pijn of visusklachten.",
  "definition": "<p>Bij een <strong>hyposfagma</strong> knapt een bloedvaatje onder de conjunctiva. Het oog krijgt een scherp begrensde, felrode vlek op het oogwit, zonder pijn, afscheiding of slechter zien.</p><p>Oorzaken: hoesten, persen, niezen, wrijven, hypertensie of antistolling; vaak is er geen oorzaak. Het verdwijnt vanzelf binnen 1–3 weken. Alleen bij trauma, herhaling of bloedingsneiging is verder onderzoek nodig.</p>",
  "image_url": "",
  "wiki_title": "Subconjunctival bleeding",
  "match": "hyposfagma|subconjunctivale bloeding",
  "option_only": true
 },
 "tia": {
  "title": "Transient ischaemic attack (TIA)",
  "short": "Een TIA is een kortdurende uitval van een hersenfunctie door tijdelijke ischemie, zonder blijvend infarct; een belangrijk waarschuwingssignaal voor een herseninfarct.",
  "definition": "<p>Bij een <strong>TIA</strong> (transient ischaemic attack) ontstaan plotseling focale neurologische klachten (bijv. halfzijdige verlamming, afasie, monoculaire blindheid) die meestal binnen enkele minuten tot een uur volledig verdwijnen, zonder infarct op beeldvorming.</p><p>De oorzaak is meestal een embolie (vanuit de carotis of het hart, bijv. bij boezemfibrilleren) of een kleine-vatenafwijking. Na een TIA is het risico op een herseninfarct in de eerste dagen sterk verhoogd; snelle analyse en secundaire preventie (antistolling of plaatjesremmers, statine, bloeddruk) zijn nodig.</p>",
  "image_url": "",
  "wiki_title": "Transient ischemic attack",
  "match": "tia|transient ischaemic attack|transient ischemic attack",
  "option_only": true
 },
 "fadh2": {
  "title": "FADH₂",
  "short": "FADH₂ is de gereduceerde vorm van de elektronendrager FAD; ze levert elektronen aan complex II van de elektronentransportketen.",
  "definition": "<p><strong>FAD</strong> (flavine-adenine-dinucleotide) is een co-enzym afgeleid van riboflavine (vitamine B2). Het neemt twee elektronen en twee protonen op en wordt dan <strong>FADH₂</strong>.</p><p>FADH₂ ontstaat o.a. in de citroenzuurcyclus (succinaatdehydrogenase) en in de bèta-oxidatie van vetzuren. De elektronen gaan via complex II (en ubiquinon) de elektronentransportketen in; omdat complex I wordt overgeslagen, levert FADH₂ minder ATP op (±1,5) dan NADH (±2,5).</p>",
  "image_url": "",
  "wiki_title": "Flavin adenine dinucleotide",
  "match": "fadh2|fadh₂|fad|flavine-adenine-dinucleotide",
  "option_only": true
 },
 "nad+": {
  "title": "NAD⁺",
  "short": "NAD⁺ is een elektronendrager die bij oxidatiereacties wordt gereduceerd tot NADH; NADH levert de elektronen aan complex I van de ademhalingsketen.",
  "definition": "<p><strong>NAD⁺</strong> (nicotinamide-adenine-dinucleotide) is een co-enzym afgeleid van niacine (vitamine B3). Het neemt bij oxidatiereacties een hydride-ion op en wordt dan <em>NADH</em>.</p><p>NADH wordt gevormd in de glycolyse, door pyruvaatdehydrogenase, in de citroenzuurcyclus en in de bèta-oxidatie. Het geeft zijn elektronen af aan <em>complex I</em> van de elektronentransportketen. Zonder zuurstof wordt NAD⁺ geregenereerd door pyruvaat om te zetten in lactaat.</p>",
  "image_url": "",
  "wiki_title": "Nicotinamide adenine dinucleotide",
  "match": "nad+|nad⁺|nadh|nicotinamide-adenine-dinucleotide",
  "option_only": true
 },
 "adp": {
  "title": "ADP (adenosinedifosfaat)",
  "short": "ADP is adenosine met twee fosfaatgroepen; het ontstaat bij ATP-verbruik en wordt in de mitochondriën weer tot ATP gefosforyleerd. Ook activeert het bloedplaatjes.",
  "definition": "<p><strong>ADP</strong> ontstaat wanneer ATP wordt gehydrolyseerd voor energieverbruik (ATP → ADP + P<sub>i</sub>). ATP-synthase zet ADP en fosfaat weer om in ATP. Een hoge ADP-concentratie stimuleert daardoor de celademhaling (respiratoire controle).</p><p>Daarnaast is ADP een belangrijk signaal in de hemostase: bloedplaatjes geven het af en het activeert andere plaatjes via de P2Y12-receptor. Clopidogrel en ticagrelor blokkeren die receptor.</p>",
  "image_url": "",
  "wiki_title": "Adenosine diphosphate",
  "match": "adp|adenosinedifosfaat",
  "option_only": true
 },
 "crp": {
  "title": "CRP (C-reactief proteïne)",
  "short": "CRP is een acutefase-eiwit uit de lever dat binnen een dag sterk stijgt bij ontsteking of infectie, vooral bacterieel.",
  "definition": "<p><strong>C-reactief proteïne</strong> wordt door de lever gemaakt onder invloed van vooral <em>IL-6</em>. Het bindt aan fosfocholine op micro-organismen en beschadigde cellen en activeert zo complement (opsonisatie).</p><p>Het CRP stijgt binnen 6–12 uur na het begin van een ontsteking en daalt snel bij herstel, waardoor het een nuttige maat is voor ontstekingsactiviteit. Bacteriële infecties geven vaak een hoger CRP dan virale, maar de waarde is niet specifiek.</p>",
  "image_url": "",
  "wiki_title": "C-reactive protein",
  "match": "crp|c-reactief proteïne|c-reactief proteine",
  "option_only": true
 },
 "bof": {
  "title": "Bof",
  "short": "Bof is een virale infectie (paramyxovirus) met pijnlijke zwelling van de oorspeekselklieren; complicaties zijn orchitis, meningitis en doofheid.",
  "definition": "<p><strong>Bof</strong> (parotitis epidemica) wordt veroorzaakt door het bofvirus, een omhuld RNA-virus. Het wordt via druppels overgedragen.</p><p>Het typische beeld is een pijnlijke zwelling van één of beide <em>glandulae parotideae</em>, met koorts en malaise. Complicaties zijn orchitis (vooral na de puberteit), oöforitis, pancreatitis, meningitis en eenzijdige doofheid. Er wordt tegen gevaccineerd met het BMR-vaccin.</p>",
  "image_url": "",
  "wiki_title": "Mumps",
  "match": "bof|parotitis epidemica|bofvirus",
  "option_only": true
 },
 "astma": {
  "title": "Astma",
  "short": "Astma is een chronische ontsteking van de luchtwegen met wisselende, reversibele luchtwegobstructie en hyperreactiviteit; klachten zijn piepen, benauwdheid en hoesten.",
  "definition": "<p>Bij <strong>astma</strong> zijn de luchtwegen chronisch ontstoken (vaak eosinofiel/Th2-gemedieerd) en <em>hyperreactief</em>: op prikkels zoals allergenen, inspanning, koude lucht of rook ontstaan bronchoconstrictie, slijmvliesoedeem en slijmproductie.</p><p>De obstructie is variabel en grotendeels <em>reversibel</em> (verbetering van de FEV1 na een luchtwegverwijder). Klachten: aanvallen van piepen, kortademigheid, een beklemd gevoel op de borst en hoesten, vaak ’s nachts. Behandeling met inhalatiecorticosteroïden en luchtwegverwijders.</p>",
  "image_url": "",
  "wiki_title": "Asthma",
  "match": "astma|asthma|astma bronchiale",
  "option_only": true
 },
 "nier": {
  "title": "Nier",
  "short": "De nieren filteren het bloed en regelen water-, zout- en zuur-base-evenwicht en bloeddruk; ook maken ze hormonen (renine, EPO, actief vitamine D).",
  "definition": "<p>De <strong>nieren</strong> liggen retroperitoneaal aan weerszijden van de wervelkolom. De functionele eenheid is het <em>nefron</em>: glomerulus, proximale tubulus, lis van Henle, distale tubulus en verzamelbuis. Samen filteren de nieren ongeveer 180 liter per dag, waarvan meer dan 99% wordt teruggeresorbeerd.</p><p>Ze scheiden afvalstoffen (ureum, creatinine) en geneesmiddelen uit, regelen het volume en de samenstelling van de lichaamsvloeistoffen en de pH, en maken <em>renine</em> (bloeddruk), <em>erytropoëtine</em> (aanmaak van rode bloedcellen) en <em>calcitriol</em> (actief vitamine D).</p>",
  "image_url": "",
  "wiki_title": "Kidney",
  "match": "nier|nieren|ren",
  "option_only": true
 },
 "ureter": {
  "title": "Ureter",
  "short": "De ureter is de spierbuis die urine van het nierbekken naar de blaas transporteert, door peristaltiek.",
  "definition": "<p>De <strong>ureter</strong> loopt retroperitoneaal van het nierbekken over de m. psoas naar beneden, kruist de vasa iliaca en mondt schuin uit in de blaas, waardoor terugstromen wordt voorkomen. De wand bevat <em>urotheel</em> (overgangsepitheel) en gladde spier.</p><p>Er zijn drie natuurlijke vernauwingen waar nierstenen vaak vastlopen: de overgang van nierbekken naar ureter, de kruising met de vasa iliaca en de intrede in de blaas. Bij een operatie in het bekken kan de ureter worden beschadigd (hij loopt onder de a. uterina door: ‘water onder de brug’).</p>",
  "image_url": "",
  "wiki_title": "Ureter",
  "match": "ureter|urineleider|ureteren",
  "option_only": true
 },
 "fibula": {
  "title": "Fibula",
  "short": "De fibula (kuitbeen) is het dunne, laterale bot van het onderbeen; het draagt weinig gewicht maar vormt de laterale malleolus van de enkel.",
  "definition": "<p>De <strong>fibula</strong> ligt lateraal van de tibia. Het caput fibulae articuleert met de tibia onder de knie, maar maakt geen deel uit van het kniegewricht. Distaal vormt de fibula de <em>malleolus lateralis</em>, onderdeel van de enkelvork.</p><p>Het bot is vooral een aanhechtingsplaats voor spieren en draagt weinig lichaamsgewicht. De n. fibularis communis loopt vlak om het collum fibulae heen en is daar kwetsbaar (klapvoet bij letsel of druk).</p>",
  "image_url": "",
  "wiki_title": "Fibula",
  "match": "fibula|kuitbeen",
  "option_only": true
 },
 "duodenum": {
  "title": "Duodenum (twaalfvingerige darm)",
  "short": "Het duodenum is het eerste, C-vormige deel van de dunne darm; hier komen gal en pancreassap bij de voedselbrij.",
  "definition": "<p>Het <strong>duodenum</strong> loopt van de pylorus in een C-bocht om de pancreaskop heen en gaat bij de flexura duodenojejunalis over in het jejunum. Het ligt grotendeels retroperitoneaal. In de pars descendens mondt via de papil van Vater de ductus choledochus samen met de ductus pancreaticus uit. Klieren van Brunner in de submucosa maken bicarbonaatrijk slijm dat het zure chymus neutraliseert; endocriene cellen maken o.a. secretine en cholecystokinine.</p>",
  "image_url": "",
  "wiki_title": "Duodenum",
  "match": "duodenum|twaalfvingerige darm",
  "option_only": true
 },
 "colon": {
  "title": "Colon (dikke darm)",
  "short": "Het colon is de dikke darm van caecum tot rectum; het resorbeert water en zouten en dikt de ontlasting in.",
  "definition": "<p>Het <strong>colon</strong> bestaat uit caecum, colon ascendens, transversum, descendens en sigmoideum, gevolgd door het rectum. Kenmerkend zijn taeniae coli, haustra en appendices epiploicae. Het slijmvlies heeft geen villi maar wel diepe crypten met veel slijmbekercellen. Het colon resorbeert water en elektrolyten, en de darmflora fermenteert vezels tot korteketenvetzuren.</p>",
  "image_url": "",
  "wiki_title": "Large intestine",
  "match": "colon|dikke darm|dikkedarm",
  "option_only": true
 },
 "dikke darm": {
  "title": "Dikke darm",
  "short": "De dikke darm (caecum, colon en rectum) resorbeert water en zouten en vormt de ontlasting.",
  "definition": "<p>De <strong>dikke darm</strong> loopt van de ileocaecaalklep tot de anus en bestaat uit caecum met appendix, colon en rectum. Hij resorbeert vooral water en natrium, en bevat een rijke bacteriële flora die onverteerbare vezels fermenteert en vitamine K maakt. Het slijmvlies is vlak met crypten en veel slijmbekercellen.</p>",
  "image_url": "",
  "wiki_title": "Large intestine",
  "match": "dikke darm",
  "option_only": true
 },
 "dunne darm": {
  "title": "Dunne darm",
  "short": "De dunne darm (duodenum, jejunum, ileum) is het belangrijkste deel van het maag-darmkanaal voor vertering en opname van voedingsstoffen.",
  "definition": "<p>De <strong>dunne darm</strong> is enkele meters lang en bestaat uit duodenum, jejunum en ileum. Kringplooien, villi en microvilli vergroten het oppervlak enorm. Hier worden koolhydraten, eiwitten en vetten verteerd door pancreasenzymen en brush-border-enzymen en opgenomen; in het terminale ileum worden ook vitamine B12 en galzouten geresorbeerd.</p>",
  "image_url": "",
  "wiki_title": "Small intestine",
  "match": "dunne darm|intestinum tenue",
  "option_only": true
 },
 "jejunum": {
  "title": "Jejunum",
  "short": "Het jejunum is het middelste deel van de dunne darm, met hoge kringplooien en veel opname van voedingsstoffen.",
  "definition": "<p>Het <strong>jejunum</strong> volgt op het duodenum en ligt vooral linksboven in de buik, opgehangen aan het mesenterium. Vergeleken met het ileum heeft het een dikkere wand, hogere kringplooien (plicae circulares), minder vet in het mesenterium en weinig lange vaatarcades. Het grootste deel van de opname van suikers, aminozuren en vetten vindt hier plaats.</p>",
  "image_url": "",
  "wiki_title": "Jejunum",
  "match": "jejunum",
  "option_only": true
 },
 "ileum": {
  "title": "Ileum",
  "short": "Het ileum is het laatste deel van de dunne darm; het terminale ileum neemt vitamine B12 en galzouten op.",
  "definition": "<p>Het <strong>ileum</strong> ligt vooral rechtsonder in de buik en eindigt bij de ileocaecaalklep. Het heeft lagere kringplooien dan het jejunum en veel lymfatisch weefsel in de vorm van Peyerse platen. Het <em>terminale ileum</em> resorbeert vitamine B12 (gebonden aan intrinsieke factor) en galzouten, die via de enterohepatische kringloop terug naar de lever gaan.</p>",
  "image_url": "",
  "wiki_title": "Ileum",
  "match": "ileum",
  "option_only": true
 },
 "terminale ileum": {
  "title": "Terminale ileum",
  "short": "Het terminale ileum is het laatste stuk van de dunne darm, waar vitamine B12 en galzouten worden opgenomen.",
  "definition": "<p>Het <strong>terminale ileum</strong> is het eindstuk van het ileum vlak voor de ileocaecaalklep. Hier worden vitamine B12 (als complex met intrinsieke factor) en geconjugeerde galzouten actief opgenomen. Ziekte of resectie van dit deel, bijvoorbeeld bij de ziekte van Crohn, kan B12-tekort en galzuurdiarree geven.</p>",
  "image_url": "",
  "wiki_title": "Ileum",
  "match": "terminale ileum|terminaal ileum",
  "option_only": true
 },
 "caecum": {
  "title": "Caecum",
  "short": "Het caecum is het blind eindigende begin van de dikke darm rechtsonder in de buik, waaraan de appendix hangt.",
  "definition": "<p>Het <strong>caecum</strong> ligt in de rechter fossa iliaca, onder de inmonding van het ileum via de ileocaecaalklep. Aan de achter-mediale zijde hangt de appendix vermiformis. Het caecum heeft de grootste diameter van het colon en wordt doorbloed door takken van de a. ileocolica (a. mesenterica superior).</p>",
  "image_url": "",
  "wiki_title": "Cecum",
  "match": "caecum|blindedarm (caecum)",
  "option_only": true
 },
 "colon descendens": {
  "title": "Colon descendens",
  "short": "Het colon descendens is het dalende deel van de dikke darm aan de linkerzijde van de buik.",
  "definition": "<p>Het <strong>colon descendens</strong> loopt van de flexura coli sinistra (lienalis) langs de linkerflank naar beneden tot het colon sigmoideum. Het ligt secundair retroperitoneaal en wordt doorbloed door de a. mesenterica inferior (a. colica sinistra). De ontlasting is hier al grotendeels ingedikt.</p>",
  "image_url": "",
  "wiki_title": "Descending colon",
  "match": "colon descendens|afdalend colon",
  "option_only": true
 },
 "oesophagus": {
  "title": "Oesophagus (slokdarm)",
  "short": "De oesophagus is de gespierde buis die voedsel van de keelholte naar de maag vervoert.",
  "definition": "<p>De <strong>oesophagus</strong> is ongeveer 25 cm lang en loopt achter de trachea door het mediastinum en via de hiatus oesophageus van het diafragma naar de maag. Het slijmvlies is meerlagig onverhoornd plaveiselepitheel. Het bovenste deel bevat dwarsgestreepte, het onderste deel gladde spier. De onderste slokdarmsfincter voorkomt terugstroom van maaginhoud.</p>",
  "image_url": "",
  "wiki_title": "Esophagus",
  "match": "oesophagus|slokdarm|oesofagus|esophagus",
  "option_only": true
 },
 "blaas": {
  "title": "Blaas (vesica urinaria)",
  "short": "De blaas is een gespierd hol orgaan in het kleine bekken dat urine verzamelt en bij mictie leegt.",
  "definition": "<p>De <strong>blaas</strong> ligt achter de symfyse. De wand bestaat uit urotheel (overgangsepitheel), dat zich aanpast aan de vullingsgraad, en de m. detrusor (gladde spier). Het driehoekige trigonum ligt tussen de twee ureteruitmondingen en de urethra-opening. Vulling en lediging worden gestuurd door autonome en willekeurige zenuwen (parasympathisch: contractie van de detrusor).</p>",
  "image_url": "",
  "wiki_title": "Urinary bladder",
  "match": "blaas|urineblaas|vesica urinaria",
  "option_only": true
 },
 "nierbekken": {
  "title": "Nierbekken (pyelum)",
  "short": "Het nierbekken is de trechtervormige verzamelruimte in de nier waar urine uit de kelken samenkomt voordat ze de ureter in gaat.",
  "definition": "<p>Het <strong>nierbekken</strong> ontstaat uit de samenvloeiing van grote nierkelken (calices majores), die weer urine ontvangen uit de kleine kelken rond de nierpapillen. Het gaat bij de pyelo-ureterale overgang over in de ureter. De wand is bekleed met urotheel en bevat gladde spier die de urine voortstuwt.</p>",
  "image_url": "",
  "wiki_title": "Renal pelvis",
  "match": "nierbekken|pyelum|pelvis renalis",
  "option_only": true
 },
 "uterus": {
  "title": "Uterus (baarmoeder)",
  "short": "De uterus is het peervormige, gespierde orgaan in het kleine bekken waarin het embryo innestelt en de foetus groeit.",
  "definition": "<p>De <strong>uterus</strong> bestaat uit fundus, corpus en cervix. De wand heeft drie lagen: endometrium (slijmvlies dat cyclisch opbouwt en afstoot), myometrium (dikke laag gladde spier) en perimetrium. De uterus ligt meestal geanteverteerd en geanteflecteerd en wordt doorbloed door de a. uterina.</p>",
  "image_url": "",
  "wiki_title": "Uterus",
  "match": "uterus|baarmoeder",
  "option_only": true
 },
 "ovarium": {
  "title": "Ovarium (eierstok)",
  "short": "Het ovarium is de vrouwelijke geslachtsklier die eicellen laat rijpen en oestrogenen en progesteron maakt.",
  "definition": "<p>Het <strong>ovarium</strong> ligt aan weerszijden van de uterus in de fossa ovarica. In de cortex liggen follikels in verschillende stadia van rijping; na de ovulatie wordt de follikel een corpus luteum dat progesteron maakt. Het ovarium wordt doorbloed door de a. ovarica uit de aorta en is via het lig. suspensorium ovarii en het lig. ovarii proprium opgehangen.</p>",
  "image_url": "",
  "wiki_title": "Ovary",
  "match": "ovarium|eierstok|ovaria",
  "option_only": true
 },
 "gonaden": {
  "title": "Gonaden",
  "short": "Gonaden zijn de geslachtsklieren: testes bij de man en ovaria bij de vrouw; ze maken geslachtscellen en geslachtshormonen.",
  "definition": "<p>De <strong>gonaden</strong> ontstaan embryonaal uit de genitale richel van het intermediair mesoderm, waarin oerkiemcellen vanuit de dooierzakwand migreren. Onder invloed van het SRY-gen ontwikkelt de indifferente gonade zich tot testis; zonder SRY ontstaat een ovarium. Ze worden aangestuurd door LH en FSH uit de hypofyse.</p>",
  "image_url": "",
  "wiki_title": "Gonad",
  "match": "gonaden|gonade|geslachtsklieren",
  "option_only": true
 },
 "vitamine b12": {
  "title": "Vitamine B12 (cobalamine)",
  "short": "Vitamine B12 is nodig voor DNA-synthese en de myelinevorming; opname vereist intrinsieke factor uit de maag en een gezond terminaal ileum.",
  "definition": "<p><strong>Vitamine B12</strong> komt alleen uit dierlijke producten. In de maag bindt het aan intrinsieke factor (van pariëtale cellen); het complex wordt in het terminale ileum opgenomen. B12 is cofactor van methioninesynthase (koppeling met foliumzuur) en methylmalonyl-CoA-mutase. Tekort ontstaat door bijv. auto-immuungastritis (pernicieuze anemie), maag- of ileumresectie, metformine of veganisme, en geeft macrocytaire anemie en neurologische schade.</p>",
  "image_url": "",
  "wiki_title": "Vitamin B12",
  "match": "vitamine b12|cobalamine|b12",
  "option_only": true
 },
 "vitamine a": {
  "title": "Vitamine A (retinol)",
  "short": "Vitamine A is een in vet oplosbare vitamine die nodig is voor het zien in het donker, de opbouw van epitheel en de afweer.",
  "definition": "<p><strong>Vitamine A</strong> komt als retinol uit dierlijke producten en als bètacaroteen uit groenten. In de retina vormt retinal samen met opsine het lichtgevoelige rodopsine. Retinoïnezuur reguleert de groei en differentiatie van epitheel. Tekort geeft nachtblindheid, droge ogen (xeroftalmie) en meer infecties; overmaat is teratogeen en levertoxisch.</p>",
  "image_url": "",
  "wiki_title": "Vitamin A",
  "match": "vitamine a|retinol|retinoïnezuur",
  "option_only": true
 },
 "vitamine c": {
  "title": "Vitamine C (ascorbinezuur)",
  "short": "Vitamine C is een in water oplosbare vitamine die nodig is voor de collageensynthese en werkt als antioxidant.",
  "definition": "<p><strong>Vitamine C</strong> is cofactor van prolyl- en lysylhydroxylase, die collageen stabiliseren. Het bevordert ook de opname van non-heemijzer en werkt als antioxidant. Tekort geeft <em>scheurbuik</em>: tandvleesbloedingen, perifolliculaire bloedinkjes, slechte wondgenezing en loszittende tanden.</p>",
  "image_url": "",
  "wiki_title": "Vitamin C",
  "match": "vitamine c|ascorbinezuur",
  "option_only": true
 },
 "vitamine d": {
  "title": "Vitamine D",
  "short": "Vitamine D bevordert de opname van calcium en fosfaat uit de darm en is nodig voor sterke botten.",
  "definition": "<p><strong>Vitamine D</strong> wordt in de huid onder invloed van UVB-licht gemaakt of via de voeding opgenomen. De lever zet het om in 25-OH-vitamine D en de nier (onder invloed van PTH) in het actieve 1,25-(OH)₂-vitamine D (calcitriol). Calcitriol verhoogt de opname van calcium en fosfaat in de darm. Tekort geeft rachitis bij kinderen en osteomalacie bij volwassenen.</p>",
  "image_url": "",
  "wiki_title": "Vitamin D",
  "match": "vitamine d|calcitriol|colecalciferol|vitamine d3",
  "option_only": true
 },
 "vitamine e": {
  "title": "Vitamine E (tocoferol)",
  "short": "Vitamine E is een in vet oplosbare antioxidant die celmembranen beschermt tegen oxidatieve schade.",
  "definition": "<p><strong>Vitamine E</strong> (tocoferol) beschermt meervoudig onverzadigde vetzuren in membranen tegen lipideperoxidatie. Tekort is zeldzaam en komt vooral voor bij vetmalabsorptie (bijv. cystische fibrose, cholestase); het geeft neurologische klachten zoals ataxie en neuropathie, en hemolytische anemie bij prematuren.</p>",
  "image_url": "",
  "wiki_title": "Vitamin E",
  "match": "vitamine e|tocoferol",
  "option_only": true
 },
 "vitamine k": {
  "title": "Vitamine K",
  "short": "Vitamine K is nodig voor de activatie van stollingsfactoren II, VII, IX en X en eiwit C en S in de lever.",
  "definition": "<p><strong>Vitamine K</strong> is cofactor van het enzym γ-glutamylcarboxylase, dat glutamaatresten van stollingsfactoren carboxyleert zodat ze calcium kunnen binden. Cumarines (zoals acenocoumarol en fenprocoumon) remmen de recycling van vitamine K. Pasgeborenen krijgen vitamine K om bloedingen te voorkomen, omdat ze weinig voorraad en nog geen darmflora hebben.</p>",
  "image_url": "",
  "wiki_title": "Vitamin K",
  "match": "vitamine k|fytomenadion|vitamine k1",
  "option_only": true
 },
 "calcium": {
  "title": "Calcium",
  "short": "Calcium is nodig voor botten, spiercontractie, zenuwgeleiding en stolling; de bloedspiegel wordt geregeld door PTH, vitamine D en calcitonine.",
  "definition": "<p>Het meeste <strong>calcium</strong> zit in botten als hydroxyapatiet. In het bloed is ongeveer de helft eiwitgebonden (vooral aan albumine) en de rest vrij geïoniseerd, de biologisch actieve vorm. Calcium is tweede boodschapper in cellen en essentieel voor spiercontractie, neurotransmitterafgifte en stolling. Afwijkingen geven bijv. tetanie (hypocalciëmie) of dorst, obstipatie en verwardheid (hypercalciëmie).</p>",
  "image_url": "",
  "wiki_title": "Calcium in biology",
  "match": "calcium|ca2+|calciumion",
  "option_only": true
 },
 "natrium": {
  "title": "Natrium",
  "short": "Natrium is het belangrijkste kation buiten de cel; het bepaalt grotendeels het extracellulaire volume en de osmolaliteit.",
  "definition": "<p><strong>Natrium</strong> wordt door de Na⁺/K⁺-ATPase buiten de cel gehouden, waardoor een gradiënt ontstaat die nodig is voor actiepotentialen en secundair actief transport. De hoeveelheid natrium in het lichaam bepaalt het extracellulaire volume (via RAAS en natriuretische peptiden); de natriumconcentratie weerspiegelt vooral de waterbalans (via ADH en dorst).</p>",
  "image_url": "",
  "wiki_title": "Sodium in biology",
  "match": "natrium|na+|natriumion",
  "option_only": true
 },
 "kalium": {
  "title": "Kalium",
  "short": "Kalium is het belangrijkste kation in de cel; de spiegel in het bloed is cruciaal voor de membraanpotentiaal van hart en spieren.",
  "definition": "<p>Ongeveer 98% van het <strong>kalium</strong> zit intracellulair. De extracellulaire concentratie (3,5–5 mmol/L) bepaalt de rustmembraanpotentiaal. Insuline, bèta-2-agonisten en alkalose verschuiven kalium de cel in; aldosteron bevordert de uitscheiding in de nier. Zowel te hoge als te lage waarden kunnen gevaarlijke hartritmestoornissen geven.</p>",
  "image_url": "",
  "wiki_title": "Potassium in biology",
  "match": "kalium|k+|kaliumion",
  "option_only": true
 },
 "ijzer": {
  "title": "IJzer",
  "short": "IJzer is nodig voor hemoglobine, myoglobine en enzymen; het lichaam regelt de ijzervoorraad vooral via de opname in de darm.",
  "definition": "<p><strong>IJzer</strong> wordt vooral in het duodenum opgenomen, als heemijzer of als Fe²⁺. In het bloed wordt het vervoerd door transferrine en opgeslagen als ferritine. Het hormoon hepcidine uit de lever remt de opname en afgifte. Het lichaam heeft geen actieve uitscheidingsroute, dus verlies gaat vooral via bloedverlies.</p>",
  "image_url": "",
  "wiki_title": "Iron in biology",
  "match": "ijzer|fe|ijzersuppletie",
  "option_only": true
 },
 "albumine": {
  "title": "Albumine",
  "short": "Albumine is het meest voorkomende plasma-eiwit; het houdt vocht in de bloedbaan (colloïd-osmotische druk) en vervoert veel stoffen.",
  "definition": "<p><strong>Albumine</strong> wordt in de lever gemaakt. Het zorgt voor het grootste deel van de colloïd-osmotische druk en bindt o.a. calcium, bilirubine, vrije vetzuren, hormonen en geneesmiddelen. Een laag albumine komt voor bij leverziekte, nefrotisch syndroom, ondervoeding en ontsteking (negatief acutefase-eiwit) en kan oedeem geven.</p>",
  "image_url": "",
  "wiki_title": "Human serum albumin",
  "match": "albumine|serumalbumine",
  "option_only": true
 },
 "creatinine": {
  "title": "Creatinine",
  "short": "Creatinine is een afbraakproduct van creatinefosfaat uit spieren; de bloedwaarde wordt gebruikt om de nierfunctie te schatten.",
  "definition": "<p><strong>Creatinine</strong> ontstaat in een vrij constant tempo uit creatine in spieren en wordt vooral door glomerulaire filtratie uitgescheiden. Daarom stijgt de serumwaarde als de nierfunctie (GFR) daalt; op basis van creatinine, leeftijd en geslacht wordt de eGFR berekend. Spiermassa beïnvloedt de waarde: bij weinig spiermassa kan een normaal creatinine een verminderde nierfunctie maskeren.</p>",
  "image_url": "",
  "wiki_title": "Creatinine",
  "match": "creatinine|kreatinine|serumcreatinine",
  "option_only": true
 },
 "aminozuren": {
  "title": "Aminozuren",
  "short": "Aminozuren zijn de bouwstenen van eiwitten; ze bevatten een aminogroep, een carboxylgroep en een specifieke zijketen.",
  "definition": "<p>Er zijn 20 standaard-<strong>aminozuren</strong>, waarvan 9 essentieel (ze moeten uit de voeding komen). Ze worden via peptidebindingen aan elkaar gekoppeld tot eiwitten. Daarnaast zijn ze grondstof voor o.a. neurotransmitters, hormonen, heem en nucleotiden, en kunnen ze worden afgebroken voor energie of gluconeogenese; de stikstof wordt dan via de ureumcyclus afgevoerd.</p>",
  "image_url": "",
  "wiki_title": "Amino acid",
  "match": "aminozuren|aminozuur",
  "option_only": true
 },
 "glycogeen": {
  "title": "Glycogeen",
  "short": "Glycogeen is de opslagvorm van glucose in lever en spier: een sterk vertakt polymeer van glucose-eenheden.",
  "definition": "<p><strong>Glycogeen</strong> bestaat uit glucose-eenheden met α-1,4-bindingen en vertakkingen via α-1,6-bindingen. Glycogeensynthase bouwt het op (gestimuleerd door insuline), glycogeenfosforylase breekt het af (gestimuleerd door glucagon en adrenaline). Leverglycogeen houdt de bloedglucose op peil; spierglycogeen dient alleen de spier zelf.</p>",
  "image_url": "",
  "wiki_title": "Glycogen",
  "match": "glycogeen",
  "option_only": true
 },
 "triglyceriden": {
  "title": "Triglyceriden",
  "short": "Triglyceriden zijn vetten opgebouwd uit glycerol met drie vetzuren; ze zijn de belangrijkste energieopslag in vetweefsel.",
  "definition": "<p><strong>Triglyceriden</strong> worden uit de voeding via chylomicronen en uit de lever via VLDL door het bloed vervoerd. Lipoproteïnelipase in de capillairen splitst ze, zodat vetzuren in spier- en vetweefsel worden opgenomen. Een verhoogd triglyceridengehalte komt voor bij obesitas, diabetes, alcoholgebruik en erfelijke vetstofwisselingsstoornissen; zeer hoge waarden geven risico op pancreatitis.</p>",
  "image_url": "",
  "wiki_title": "Triglyceride",
  "match": "triglyceriden|triglyceride|triacylglycerol",
  "option_only": true
 },
 "insuline": {
  "title": "Insuline",
  "short": "Insuline is het hormoon uit de bètacellen van de pancreas dat de bloedglucose verlaagt en opbouwprocessen stimuleert.",
  "definition": "<p><strong>Insuline</strong> wordt afgegeven als de glucose stijgt. Het bevordert de opname van glucose in spier en vet (via GLUT4), de opslag als glycogeen en vet, en de eiwitsynthese, en remt gluconeogenese, glycogenolyse en lipolyse. Het wordt gemaakt als proinsuline; de afsplitsing van C-peptide maakt het actief. Als geneesmiddel is het onmisbaar bij diabetes type 1.</p>",
  "image_url": "",
  "wiki_title": "Insulin",
  "match": "insuline|insulin",
  "option_only": true
 },
 "glucagon": {
  "title": "Glucagon",
  "short": "Glucagon is het hormoon uit de alfacellen van de pancreas dat de bloedglucose verhoogt, vooral via de lever.",
  "definition": "<p><strong>Glucagon</strong> wordt afgegeven bij een lage glucose en bij eiwitrijke maaltijden. In de lever stimuleert het glycogenolyse, gluconeogenese en ketogenese via cAMP. Het is daarmee de tegenspeler van insuline. Glucagon kan intramusculair worden gegeven bij een ernstige hypoglykemie als iemand niet kan eten.</p>",
  "image_url": "",
  "wiki_title": "Glucagon",
  "match": "glucagon",
  "option_only": true
 },
 "cortisol": {
  "title": "Cortisol",
  "short": "Cortisol is het belangrijkste glucocorticoïd uit de bijnierschors; het is een stresshormoon met effecten op stofwisseling en afweer.",
  "definition": "<p><strong>Cortisol</strong> wordt gemaakt in de zona fasciculata onder invloed van ACTH, met een dagritme (hoog in de ochtend). Het verhoogt de bloedglucose (gluconeogenese), breekt eiwitten af, remt ontsteking en afweer en ondersteunt de bloeddruk. Overmaat geeft het syndroom van Cushing, tekort bijnierinsufficiëntie (ziekte van Addison).</p>",
  "image_url": "",
  "wiki_title": "Cortisol",
  "match": "cortisol|hydrocortison",
  "option_only": true
 },
 "acth": {
  "title": "ACTH (corticotropine)",
  "short": "ACTH is een hormoon uit de hypofysevoorkwab dat de bijnierschors aanzet tot de productie van cortisol.",
  "definition": "<p><strong>ACTH</strong> ontstaat door splitsing van het voorlopereiwit POMC, waaruit ook MSH ontstaat (daardoor kan veel ACTH hyperpigmentatie geven). De afgifte wordt gestimuleerd door CRH uit de hypothalamus en geremd door cortisol (negatieve terugkoppeling). Het stimuleert vooral de zona fasciculata en heeft een groeibevorderend effect op de bijnierschors.</p>",
  "image_url": "",
  "wiki_title": "Adrenocorticotropic hormone",
  "match": "acth|corticotropine|adrenocorticotroop hormoon",
  "option_only": true
 },
 "prolactine": {
  "title": "Prolactine",
  "short": "Prolactine is een hormoon uit de hypofysevoorkwab dat de melkproductie stimuleert; dopamine remt de afgifte.",
  "definition": "<p><strong>Prolactine</strong> wordt gemaakt door lactotrofe cellen van de hypofysevoorkwab. Het stimuleert de borstklier tot melkproductie; zuigen aan de tepel verhoogt de afgifte. Dopamine uit de hypothalamus remt de afgifte tonisch. Een verhoogd prolactine (bijv. door een prolactinoom of dopamineblokkerende middelen) remt GnRH, met cyclusstoornissen, galactorroe en libidoverlies.</p>",
  "image_url": "",
  "wiki_title": "Prolactin",
  "match": "prolactine|prl",
  "option_only": true
 },
 "progesteron": {
  "title": "Progesteron",
  "short": "Progesteron is een steroïdhormoon uit het corpus luteum en de placenta dat het endometrium voorbereidt op en de zwangerschap ondersteunt.",
  "definition": "<p><strong>Progesteron</strong> wordt in de luteale fase door het corpus luteum gemaakt en in de zwangerschap vanaf ongeveer 10 weken door de placenta. Het zet het endometrium om naar de secretoire fase, ontspant het myometrium, maakt cervixslijm taai en verhoogt de basale lichaamstemperatuur. Daling van progesteron aan het eind van de cyclus leidt tot menstruatie.</p>",
  "image_url": "",
  "wiki_title": "Progesterone",
  "match": "progesteron|progestageen",
  "option_only": true
 },
 "adrenaline": {
  "title": "Adrenaline (epinefrine)",
  "short": "Adrenaline is een catecholamine uit het bijniermerg dat de ‘fight-or-flight’-reactie aanstuurt via alfa- en bèta-receptoren.",
  "definition": "<p><strong>Adrenaline</strong> wordt door chromaffiene cellen van het bijniermerg afgegeven bij stress. Het verhoogt hartfrequentie en contractiekracht (β1), verwijdt de bronchi (β2), vernauwt vaten in huid en darm (α1) en verhoogt de bloedglucose. Als geneesmiddel is het het middel bij anafylaxie (intramusculair) en wordt het gebruikt bij reanimatie.</p>",
  "image_url": "",
  "wiki_title": "Adrenaline",
  "match": "adrenaline|epinefrine|epinephrine",
  "option_only": true
 },
 "dopamine": {
  "title": "Dopamine",
  "short": "Dopamine is een catecholamine-neurotransmitter, belangrijk voor motoriek, beloning en de remming van prolactine.",
  "definition": "<p><strong>Dopamine</strong> wordt gemaakt uit tyrosine via L-DOPA. Belangrijke dopaminerge banen zijn de nigrostriatale baan (motoriek; verlies bij Parkinson), de mesolimbische en mesocorticale banen (beloning, motivatie, psychose) en de tubero-infundibulaire baan (remming van prolactine). Antipsychotica blokkeren D2-receptoren.</p>",
  "image_url": "",
  "wiki_title": "Dopamine",
  "match": "dopamine",
  "option_only": true
 },
 "histamine": {
  "title": "Histamine",
  "short": "Histamine is een mediator uit mestcellen en basofielen die vaatverwijding, lekkage, jeuk en bronchoconstrictie veroorzaakt.",
  "definition": "<p><strong>Histamine</strong> ontstaat uit histidine en ligt opgeslagen in de granula van mestcellen en basofielen. Via H1-receptoren veroorzaakt het vaatverwijding, verhoogde vaatpermeabiliteit, jeuk en bronchoconstrictie; via H2-receptoren stimuleert het de maagzuursecretie. In het brein werkt het als neurotransmitter voor waakzaamheid.</p>",
  "image_url": "",
  "wiki_title": "Histamine",
  "match": "histamine",
  "option_only": true
 },
 "glutamaat": {
  "title": "Glutamaat (glutaminezuur)",
  "short": "Glutamaat is de belangrijkste prikkelende neurotransmitter in het centrale zenuwstelsel en een centraal aminozuur in de stofwisseling.",
  "definition": "<p><strong>Glutamaat</strong> werkt op ionotrope receptoren (AMPA, NMDA, kainaat) en metabotrope receptoren. NMDA-receptoren spelen een sleutelrol bij leren en geheugen (langetermijnpotentiëring). Overmatige activatie leidt tot instroom van calcium en celdood (excitotoxiciteit), bijvoorbeeld bij ischemie. In de stofwisseling is glutamaat een knooppunt van transaminering en stikstofafvoer.</p>",
  "image_url": "",
  "wiki_title": "Glutamic acid",
  "match": "glutamaat|glutaminezuur|glutamate",
  "option_only": true
 },
 "stikstofoxide": {
  "title": "Stikstofoxide (NO)",
  "short": "Stikstofoxide (NO) is een gasvormige signaalstof uit het endotheel die gladde spier ontspant en zo vaten verwijdt.",
  "definition": "<p><strong>NO</strong> wordt gemaakt uit arginine door NO-synthase. In het endotheel ontstaat het o.a. door schuifspanning en acetylcholine; het diffundeert naar de gladde spiercel, activeert guanylaatcyclase en verhoogt cGMP, wat relaxatie geeft. NO remt ook de plaatjesaggregatie. Nitraten en PDE5-remmers versterken deze route.</p>",
  "image_url": "",
  "wiki_title": "Nitric oxide",
  "match": "stikstofoxide|stikstofmonoxide|no|nitric oxide",
  "option_only": true
 },
 "lysozym": {
  "title": "Lysozym",
  "short": "Lysozym is een antibacterieel enzym in traanvocht, speeksel en slijm dat de peptidoglycaanwand van bacteriën afbreekt.",
  "definition": "<p><strong>Lysozym</strong> splitst de bindingen tussen N-acetylmuraminezuur en N-acetylglucosamine in peptidoglycaan. Het werkt vooral tegen grampositieve bacteriën, die een dikke, onbeschermde peptidoglycaanlaag hebben. Het is onderdeel van de aangeboren afweer en komt voor in tranen, speeksel, moedermelk en de granula van neutrofielen.</p>",
  "image_url": "",
  "wiki_title": "Lysozyme",
  "match": "lysozym|lysozyme",
  "option_only": true
 },
 "pepsinogeen": {
  "title": "Pepsinogeen",
  "short": "Pepsinogeen is het inactieve voorstadium van pepsine, gemaakt door de hoofdcellen van de maag.",
  "definition": "<p><strong>Pepsinogeen</strong> wordt afgegeven door hoofdcellen in de maagklieren. In het zure milieu (pH &lt; 4) splitst het zichzelf tot actief <em>pepsine</em>, een protease dat de eiwitvertering start. Pepsine wordt geïnactiveerd in het neutrale milieu van het duodenum.</p>",
  "image_url": "",
  "wiki_title": "Pepsin",
  "match": "pepsinogeen|pepsine",
  "option_only": true
 },
 "lisinopril": {
  "title": "Lisinopril",
  "short": "Lisinopril is een ACE-remmer die de vorming van angiotensine II remt; gebruikt bij hypertensie en hartfalen.",
  "definition": "<p><strong>Lisinopril</strong> remt het angiotensine-converterend enzym. Daardoor ontstaat minder angiotensine II (minder vasoconstrictie en aldosteron) en wordt minder bradykinine afgebroken. Het verlaagt de bloeddruk en beschermt hart en nieren. Bijwerkingen: prikkelhoest (bradykinine), hyperkaliëmie, stijging van creatinine en zelden angio-oedeem.</p>",
  "image_url": "",
  "wiki_title": "Lisinopril",
  "match": "lisinopril",
  "option_only": true
 },
 "enalapril": {
  "title": "Enalapril",
  "short": "Enalapril is een ACE-remmer (prodrug) die wordt gebruikt bij hypertensie en hartfalen.",
  "definition": "<p><strong>Enalapril</strong> wordt in de lever omgezet in het actieve enalaprilaat, dat het angiotensine-converterend enzym remt. Zo dalen angiotensine II en aldosteron. Bijwerkingen zijn droge hoest, hyperkaliëmie, nierfunctieverslechtering (vooral bij nierarteriestenose) en angio-oedeem; het is gecontra-indiceerd in de zwangerschap.</p>",
  "image_url": "",
  "wiki_title": "Enalapril",
  "match": "enalapril",
  "option_only": true
 },
 "ace remmer": {
  "title": "ACE-remmer",
  "short": "ACE-remmers remmen de omzetting van angiotensine I naar angiotensine II; ze verlagen de bloeddruk en beschermen hart en nieren.",
  "definition": "<p><strong>ACE-remmers</strong> (bijv. lisinopril, enalapril, perindopril) remmen het angiotensine-converterend enzym. Daardoor dalen vasoconstrictie en aldosteronafgifte, en stijgt bradykinine. Ze worden gebruikt bij hypertensie, hartfalen, na een myocardinfarct en bij diabetische nefropathie. Bijwerkingen: prikkelhoest, hyperkaliëmie, creatininestijging en angio-oedeem; niet geven in de zwangerschap.</p>",
  "image_url": "",
  "wiki_title": "ACE inhibitor",
  "match": "ace remmer|ace-remmer|ace-remmers|ace remmers",
  "option_only": true
 },
 "losartan": {
  "title": "Losartan",
  "short": "Losartan is een angiotensine II-receptorblokker (ARB) bij hypertensie en hartfalen.",
  "definition": "<p><strong>Losartan</strong> blokkeert de AT1-receptor, waardoor angiotensine II geen vasoconstrictie en aldosteronafgifte meer kan veroorzaken. Omdat het bradykinine niet beïnvloedt, geeft het minder vaak hoest dan ACE-remmers. Bijwerkingen zijn hyperkaliëmie en nierfunctieverslechtering; niet geven in de zwangerschap.</p>",
  "image_url": "",
  "wiki_title": "Losartan",
  "match": "losartan",
  "option_only": true
 },
 "irbesartan": {
  "title": "Irbesartan",
  "short": "Irbesartan is een angiotensine II-receptorblokker (ARB) bij hypertensie en diabetische nierziekte.",
  "definition": "<p><strong>Irbesartan</strong> blokkeert de AT1-receptor voor angiotensine II en verlaagt zo de bloeddruk en de aldosteronafgifte. Het wordt gebruikt bij hypertensie en vertraagt de achteruitgang bij diabetische nefropathie. Bijwerkingen en contra-indicaties zijn vergelijkbaar met die van andere ARB's.</p>",
  "image_url": "",
  "wiki_title": "Irbesartan",
  "match": "irbesartan",
  "option_only": true
 },
 "nifedipine": {
  "title": "Nifedipine",
  "short": "Nifedipine is een dihydropyridine-calciumantagonist die vooral de bloedvaten verwijdt.",
  "definition": "<p><strong>Nifedipine</strong> blokkeert L-type calciumkanalen in vasculaire gladde spier, wat arteriële vaatverwijding geeft. Het heeft weinig effect op het hart. Het wordt gebruikt bij hypertensie, angina pectoris, het fenomeen van Raynaud en als weeënremmer. Bijwerkingen: enkeloedeem, hoofdpijn, flushing en reflextachycardie.</p>",
  "image_url": "",
  "wiki_title": "Nifedipine",
  "match": "nifedipine",
  "option_only": true
 },
 "verapamil": {
  "title": "Verapamil",
  "short": "Verapamil is een calciumantagonist die vooral op het hart werkt: het remt de AV-geleiding en verlaagt de hartfrequentie.",
  "definition": "<p><strong>Verapamil</strong> (een fenylalkylamine) blokkeert L-type calciumkanalen in hart en vaten. Het vertraagt de geleiding in de AV-knoop en vermindert de contractiekracht. Indicaties: supraventriculaire tachycardieën, frequentiecontrole bij boezemfibrilleren, angina pectoris en hypertensie. Niet combineren met bètablokkers (risico op bradycardie en AV-blok); obstipatie is een bekende bijwerking.</p>",
  "image_url": "",
  "wiki_title": "Verapamil",
  "match": "verapamil",
  "option_only": true
 },
 "doxazosine": {
  "title": "Doxazosine",
  "short": "Doxazosine is een α1-blokker die vaten en de gladde spier van blaashals en prostaat ontspant.",
  "definition": "<p><strong>Doxazosine</strong> blokkeert α1-adrenerge receptoren, waardoor arteriolen verwijden en de bloeddruk daalt. Ook ontspant het de gladde spier in de prostaat en blaashals, wat de plasstraal verbetert bij benigne prostaathyperplasie. Bekende bijwerking is orthostatische hypotensie, vooral bij de eerste dosis.</p>",
  "image_url": "",
  "wiki_title": "Doxazosin",
  "match": "doxazosine",
  "option_only": true
 },
 "simvastatine": {
  "title": "Simvastatine",
  "short": "Simvastatine is een statine: een HMG-CoA-reductaseremmer die het LDL-cholesterol verlaagt.",
  "definition": "<p><strong>Simvastatine</strong> remt HMG-CoA-reductase, het snelheidsbepalende enzym van de cholesterolsynthese in de lever. De lever maakt daardoor meer LDL-receptoren aan en haalt meer LDL uit het bloed. Statines verlagen het risico op hart- en vaatziekten. Bijwerkingen: spierklachten (zelden rabdomyolyse) en leverenzymstijging; simvastatine heeft veel interacties via CYP3A4.</p>",
  "image_url": "",
  "wiki_title": "Simvastatin",
  "match": "simvastatine|statine|statines",
  "option_only": true
 },
 "clopidogrel": {
  "title": "Clopidogrel",
  "short": "Clopidogrel is een plaatjesremmer die de ADP-receptor P2Y12 op bloedplaatjes onomkeerbaar blokkeert.",
  "definition": "<p><strong>Clopidogrel</strong> is een prodrug die via CYP2C19 in de lever wordt geactiveerd. De actieve metaboliet blokkeert de P2Y12-receptor, zodat ADP de plaatjes niet meer kan activeren. Het wordt gebruikt na een acuut coronair syndroom en stentplaatsing (vaak samen met acetylsalicylzuur) en bij herseninfarct en perifeer vaatlijden. Bijwerking: bloedingen.</p>",
  "image_url": "",
  "wiki_title": "Clopidogrel",
  "match": "clopidogrel",
  "option_only": true
 },
 "fenprocoumon": {
  "title": "Fenprocoumon",
  "short": "Fenprocoumon is een langwerkende cumarine (vitamine K-antagonist) voor antistolling; de dosering wordt gestuurd op de INR.",
  "definition": "<p><strong>Fenprocoumon</strong> remt het enzym vitamine K-epoxidereductase, waardoor de lever minder functionele factoren II, VII, IX en X maakt. Het werkt traag en heeft een lange halfwaardetijd. De dosering wordt via de trombosedienst op geleide van de INR ingesteld. Er zijn veel interacties met voeding en geneesmiddelen; antidotum is vitamine K (en bij ernstige bloeding stollingsfactorconcentraat).</p>",
  "image_url": "",
  "wiki_title": "Phenprocoumon",
  "match": "fenprocoumon|marcoumar",
  "option_only": true
 },
 "acenocoumarol": {
  "title": "Acenocoumarol",
  "short": "Acenocoumarol is een kortwerkende cumarine (vitamine K-antagonist) voor antistolling, gedoseerd op geleide van de INR.",
  "definition": "<p><strong>Acenocoumarol</strong> werkt net als fenprocoumon door remming van de vitamine K-cyclus, maar heeft een kortere halfwaardetijd. Het wordt gebruikt bij o.a. boezemfibrilleren, trombose en kunstkleppen. Controle via de INR is nodig; veel geneesmiddelen (zoals antibiotica) en wisselende vitamine K-inname beïnvloeden het effect.</p>",
  "image_url": "",
  "wiki_title": "Acenocoumarol",
  "match": "acenocoumarol|sintrom",
  "option_only": true
 },
 "kogelgewricht": {
  "title": "Kogelgewricht",
  "short": "Een kogelgewricht is een drieassig synoviaal gewricht met een bolle kop in een kom, zoals heup en schouder.",
  "definition": "<p>Bij een <strong>kogelgewricht</strong> (articulatio spheroidea) past een bolvormige gewrichtskop in een holle kom. Beweging is mogelijk om drie assen: flexie/extensie, abductie/adductie en rotatie (en daarmee circumductie). Voorbeelden zijn het heupgewricht (diepe kom, stabiel) en het schoudergewricht (ondiepe kom, zeer beweeglijk maar minder stabiel).</p>",
  "image_url": "",
  "wiki_title": "Ball-and-socket joint",
  "match": "kogelgewricht|articulatio spheroidea|bolgewricht",
  "option_only": true
 },
 "zadelgewricht": {
  "title": "Zadelgewricht",
  "short": "Een zadelgewricht is een tweeassig gewricht waarvan beide gewrichtsvlakken zadelvormig zijn, zoals het CMC-1-gewricht van de duim.",
  "definition": "<p>Bij een <strong>zadelgewricht</strong> (articulatio sellaris) zijn beide gewrichtsvlakken in de ene richting bol en in de andere richting hol, als twee zadels die op elkaar passen. Er is beweging mogelijk om twee assen. Het klassieke voorbeeld is het carpometacarpale gewricht van de duim, dat oppositie mogelijk maakt.</p>",
  "image_url": "",
  "wiki_title": "Saddle joint",
  "match": "zadelgewricht|articulatio sellaris",
  "option_only": true
 },
 "ellipsoid gewricht": {
  "title": "Ellipsoïd gewricht",
  "short": "Een ellipsoïd gewricht (eigewricht) is een tweeassig gewricht met een ovale kop in een ovale kom, zoals het radiocarpale gewricht.",
  "definition": "<p>Bij een <strong>ellipsoïd gewricht</strong> (articulatio ellipsoidea) past een eivormige, bolle gewrichtskop in een ovale kom. Er is beweging mogelijk om twee assen (flexie/extensie en abductie/adductie), maar geen echte rotatie. Voorbeelden zijn het radiocarpale (pols)gewricht en het atlanto-occipitale gewricht.</p>",
  "image_url": "",
  "wiki_title": "Condyloid joint",
  "match": "ellipsoid gewricht|ellipsoïd gewricht|eigewricht|articulatio ellipsoidea",
  "option_only": true
 },
 "vlak gewricht": {
  "title": "Vlak gewricht",
  "short": "Een vlak gewricht heeft (vrijwel) vlakke gewrichtsvlakken die alleen kleine glijbewegingen toestaan.",
  "definition": "<p>Bij een <strong>vlak gewricht</strong> (articulatio plana) glijden twee vrijwel vlakke gewrichtsvlakken langs elkaar. De beweeglijkheid is klein en wordt beperkt door kapsel en banden. Voorbeelden zijn de facetgewrichten van de wervelkolom, het acromioclaviculaire gewricht en gewrichten tussen de handwortelbeentjes.</p>",
  "image_url": "",
  "wiki_title": "Plane joint",
  "match": "vlak gewricht|articulatio plana|glijgewricht",
  "option_only": true
 },
 "articulatio coxae": {
  "title": "Heupgewricht (articulatio coxae)",
  "short": "Het heupgewricht is een kogelgewricht tussen de femurkop en het acetabulum van het bekken.",
  "definition": "<p>De <strong>articulatio coxae</strong> verbindt de caput femoris met het acetabulum. Het diepe acetabulum, het labrum en sterke banden (lig. iliofemorale, pubofemorale en ischiofemorale) maken het een zeer stabiel gewricht. De femurkop wordt vooral doorbloed via de aa. circumflexae femoris; bij een mediale collumfractuur dreigt daardoor avasculaire necrose.</p>",
  "image_url": "",
  "wiki_title": "Hip",
  "match": "articulatio coxae|heupgewricht",
  "option_only": true
 },
 "tussenwervelschijf": {
  "title": "Tussenwervelschijf (discus intervertebralis)",
  "short": "De tussenwervelschijf ligt tussen twee wervellichamen en bestaat uit een vezelige ring met een geleiachtige kern; ze vangt schokken op.",
  "definition": "<p>Een <strong>tussenwervelschijf</strong> bestaat uit de <em>annulus fibrosus</em> (concentrische lagen vezelig kraakbeen) en de centrale <em>nucleus pulposus</em> (waterrijke gel, restant van de chorda dorsalis). Ze verdeelt druk en maakt beweging tussen wervels mogelijk. Bij degeneratie verliest de schijf water; een scheur in de annulus kan leiden tot een hernia nuclei pulposi.</p>",
  "image_url": "",
  "wiki_title": "Intervertebral disc",
  "match": "tussenwervelschijf|discus intervertebralis|tussenwervelschijven",
  "option_only": true
 },
 "hyalien kraakbeen": {
  "title": "Hyalien kraakbeen",
  "short": "Hyalien kraakbeen is het meest voorkomende kraakbeen: glad en drukbestendig, met collageen type II; het bekleedt gewrichtsvlakken.",
  "definition": "<p><strong>Hyalien kraakbeen</strong> bestaat uit chondrocyten in lacunes, omgeven door een matrix van collageen type II en proteoglycanen die veel water binden. Het heeft geen bloedvaten en wordt gevoed via diffusie. Het komt voor als gewrichtskraakbeen, in de ribben, de luchtwegen en als groeischijf; ook het embryonale skelet is grotendeels hyalien kraakbeen.</p>",
  "image_url": "",
  "wiki_title": "Hyaline cartilage",
  "match": "hyalien kraakbeen|hyaliene kraakbeen",
  "option_only": true
 },
 "elastinevezels": {
  "title": "Elastinevezels",
  "short": "Elastinevezels zijn rekbare vezels in de extracellulaire matrix die weefsel na uitrekking terug laten veren.",
  "definition": "<p><strong>Elastische vezels</strong> bestaan uit een kern van elastine omgeven door microfibrillen van fibrilline. Ze kunnen tot ongeveer anderhalf keer hun lengte uitrekken en daarna terugveren. Ze komen veel voor in de wand van grote arteriën, longen, huid en elastisch kraakbeen. Mutaties in fibrilline geven het syndroom van Marfan.</p>",
  "image_url": "",
  "wiki_title": "Elastic fiber",
  "match": "elastinevezels|elastische vezels|elastine",
  "option_only": true
 },
 "elastisch bindweefsel": {
  "title": "Elastisch bindweefsel",
  "short": "Elastisch bindweefsel bevat veel elastische vezels en komt voor waar weefsel moet kunnen rekken en terugveren.",
  "definition": "<p><strong>Elastisch bindweefsel</strong> bestaat grotendeels uit parallel of netvormig gerangschikte elastische vezels. Het komt voor in de wand van grote (elastische) arteriën zoals de aorta, in de ligamenta flava tussen de wervelbogen en in het lig. nuchae. Het zorgt voor veerkracht, zoals de windketelfunctie van de aorta.</p>",
  "image_url": "",
  "wiki_title": "Elastic fiber",
  "match": "elastisch bindweefsel",
  "option_only": true
 },
 "geordend straf bindweefsel": {
  "title": "Geordend straf bindweefsel",
  "short": "Geordend straf bindweefsel bestaat uit dicht opeengepakte, parallel lopende collageenvezels en is erg trekvast in één richting.",
  "definition": "<p>In <strong>geordend straf bindweefsel</strong> liggen collageen type I-vezels parallel, met daartussen rijen fibroblasten (tenocyten). Het weefsel is zeer sterk in de lengterichting maar weinig doorbloed, waardoor het traag herstelt. Het vormt pezen, ligamenten en aponeurosen.</p>",
  "image_url": "",
  "wiki_title": "Dense regular connective tissue",
  "match": "geordend straf bindweefsel|regelmatig straf bindweefsel",
  "option_only": true
 },
 "ongeordend straf bindweefsel": {
  "title": "Ongeordend straf bindweefsel",
  "short": "Ongeordend straf bindweefsel heeft dicht opeengepakte collageenvezels in alle richtingen en weerstaat trekkracht vanuit elke kant.",
  "definition": "<p>In <strong>ongeordend straf bindweefsel</strong> lopen de collageenvezels in een dicht netwerk in verschillende richtingen. Daardoor is het bestand tegen krachten uit allerlei richtingen. Het komt voor in de reticulaire dermis, orgaankapsels, periost, perichondrium en de dura mater.</p>",
  "image_url": "",
  "wiki_title": "Dense irregular connective tissue",
  "match": "ongeordend straf bindweefsel|onregelmatig straf bindweefsel",
  "option_only": true
 },
 "mesenchymale cellen": {
  "title": "Mesenchymale cellen",
  "short": "Mesenchymale cellen zijn embryonale, ongedifferentieerde bindweefselcellen waaruit o.a. bot, kraakbeen, spier en bindweefsel ontstaan.",
  "definition": "<p><strong>Mesenchym</strong> is los embryonaal bindweefsel, grotendeels afkomstig van het mesoderm. De stervormige mesenchymale cellen kunnen differentiëren tot fibroblasten, chondroblasten, osteoblasten, adipocyten, gladde spiercellen en endotheel. Ook bij volwassenen bestaan nog mesenchymale stamcellen, o.a. in het beenmerg.</p>",
  "image_url": "",
  "wiki_title": "Mesenchyme",
  "match": "mesenchymale cellen|mesenchym|mesenchymale stamcellen",
  "option_only": true
 },
 "osteoprogenitorcel": {
  "title": "Osteoprogenitorcel",
  "short": "Osteoprogenitorcellen zijn voorlopercellen in periost en endost die kunnen uitgroeien tot osteoblasten.",
  "definition": "<p><strong>Osteoprogenitorcellen</strong> zijn afgeleid van mesenchymale stamcellen en liggen in de binnenste laag van het periost, in het endost en langs de kanalen van Havers. Onder invloed van o.a. RUNX2 en mechanische belasting differentiëren ze tot osteoblasten, wat belangrijk is bij botgroei en fractuurgenezing.</p>",
  "image_url": "",
  "wiki_title": "Osteoprogenitor cell",
  "match": "osteoprogenitorcel|osteoprogenitorcellen|osteoprogenitor",
  "option_only": true
 },
 "osteoclast": {
  "title": "Osteoclast",
  "short": "Een osteoclast is een grote, meerkernige cel die botweefsel afbreekt (botresorptie).",
  "definition": "<p><strong>Osteoclasten</strong> ontstaan uit de monocyt-macrofaaglijn door fusie van voorlopercellen. Ze hechten aan het botoppervlak en vormen een afgesloten ruimte onder een geplooide rand (ruffled border), waarin ze zuur en enzymen (o.a. cathepsine K) uitscheiden. Ze worden geactiveerd via RANKL en geremd door osteoprotegerine en calcitonine; bisfosfonaten remmen hun werking.</p>",
  "image_url": "",
  "wiki_title": "Osteoclast",
  "match": "osteoclast|osteoclasten",
  "option_only": true
 },
 "hydroxyapathiet": {
  "title": "Hydroxyapatiet",
  "short": "Hydroxyapatiet is het calciumfosfaatkristal dat bot en tandglazuur hun hardheid geeft.",
  "definition": "<p><strong>Hydroxyapatiet</strong> (Ca₁₀(PO₄)₆(OH)₂) vormt het anorganische deel van botmatrix, ongeveer twee derde van het botgewicht. De kristallen liggen tussen en op de collageen type I-vezels; collageen geeft trekvastheid, hydroxyapatiet drukvastheid. Fluoride kan de hydroxylgroep vervangen tot het zuurbestendiger fluorapatiet.</p>",
  "image_url": "",
  "wiki_title": "Hydroxyapatite",
  "match": "hydroxyapathiet|hydroxyapatiet",
  "option_only": true
 },
 "tibia": {
  "title": "Tibia (scheenbeen)",
  "short": "De tibia is het grote, gewichtdragende bot aan de mediale zijde van het onderbeen.",
  "definition": "<p>De <strong>tibia</strong> vormt met de femur het kniegewricht (via de condylus medialis en lateralis van het tibiaplateau) en met de talus het bovenste spronggewricht; distaal vormt zij de malleolus medialis. De voorrand ligt direct onder de huid. Aan de tuberositas tibiae hecht de patellapees.</p>",
  "image_url": "",
  "wiki_title": "Tibia",
  "match": "tibia|scheenbeen",
  "option_only": true
 },
 "femur": {
  "title": "Femur (dijbeen)",
  "short": "De femur is het langste en sterkste bot van het lichaam, tussen heup en knie.",
  "definition": "<p>De <strong>femur</strong> heeft proximaal de femurkop, het collum en de trochanter major en minor, en distaal de condylus medialis en lateralis. Het collum maakt een hoek met de schacht (collodiafysaire hoek). Collumfracturen komen veel voor bij ouderen met osteoporose; de bloedvoorziening van de kop kan daarbij in gevaar komen.</p>",
  "image_url": "",
  "wiki_title": "Femur",
  "match": "femur|dijbeen",
  "option_only": true
 },
 "ulna": {
  "title": "Ulna (ellepijp)",
  "short": "De ulna is het mediale bot van de onderarm (aan de pinkzijde); proximaal vormt het de punt van de elleboog.",
  "definition": "<p>De <strong>ulna</strong> heeft proximaal het olecranon en het processus coronoideus, die samen de incisura trochlearis vormen voor het scharniergewricht met de humerus. Distaal heeft zij een kop en een processus styloideus. Samen met de radius maakt zij pro- en supinatie mogelijk via de proximale en distale radio-ulnaire gewrichten.</p>",
  "image_url": "",
  "wiki_title": "Ulna",
  "match": "ulna|ellepijp",
  "option_only": true
 },
 "radius": {
  "title": "Radius (spaakbeen)",
  "short": "De radius is het laterale bot van de onderarm (aan de duimzijde) dat distaal het grootste deel van het polsgewricht vormt.",
  "definition": "<p>De <strong>radius</strong> heeft proximaal een schijfvormige kop die draait in het lig. anulare, en distaal een brede basis die articuleert met de handwortel. Bij pronatie draait de radius om de ulna heen. Een distale radiusfractuur is een van de meest voorkomende fracturen, vaak na een val op de uitgestrekte hand.</p>",
  "image_url": "",
  "wiki_title": "Radius (bone)",
  "match": "radius|spaakbeen",
  "option_only": true
 },
 "os lunatum": {
  "title": "Os lunatum",
  "short": "Het os lunatum is het maanvormige handwortelbeentje in het midden van de proximale rij.",
  "definition": "<p>Het <strong>os lunatum</strong> ligt tussen het os scaphoideum en het os triquetrum en articuleert met de radius. Het kan na een hyperextensietrauma naar palmair luxeren en dan de n. medianus in de carpale tunnel comprimeren. Avasculaire necrose van het lunatum heet de ziekte van Kienböck.</p>",
  "image_url": "",
  "wiki_title": "Lunate bone",
  "match": "os lunatum|maanvormig been",
  "option_only": true
 },
 "os pisiforme": {
  "title": "Os pisiforme",
  "short": "Het os pisiforme is een klein, erwtvormig handwortelbeentje aan de pinkzijde, een sesambeen in de pees van de m. flexor carpi ulnaris.",
  "definition": "<p>Het <strong>os pisiforme</strong> ligt palmair op het os triquetrum en is goed voelbaar aan de ulnaire zijde van de pols. Het is een sesambeentje in de pees van de m. flexor carpi ulnaris en vormt een begrenzing van het kanaal van Guyon, waardoor de n. en a. ulnaris lopen.</p>",
  "image_url": "",
  "wiki_title": "Pisiform bone",
  "match": "os pisiforme|erwtvormig been",
  "option_only": true
 },
 "os hamatum": {
  "title": "Os hamatum",
  "short": "Het os hamatum is een handwortelbeentje in de distale rij aan de pinkzijde, met een haakvormig uitsteeksel (hamulus).",
  "definition": "<p>Het <strong>os hamatum</strong> articuleert met de vierde en vijfde middenhandsbeentjes. De <em>hamulus</em> is een aanhechtingspunt voor het retinaculum flexorum en begrenst het kanaal van Guyon. Een fractuur van de hamulus komt voor bij golf-, tennis- en honkbalspelers.</p>",
  "image_url": "",
  "wiki_title": "Hamate bone",
  "match": "os hamatum|haakvormig been",
  "option_only": true
 },
 "os sacrum": {
  "title": "Os sacrum (heiligbeen)",
  "short": "Het os sacrum is het driehoekige bot uit vijf vergroeide sacrale wervels dat de achterwand van het bekken vormt.",
  "definition": "<p>Het <strong>os sacrum</strong> articuleert boven met de vijfde lendenwervel, aan beide zijden met de ossa ilia (sacro-iliacale gewrichten) en onder met het stuitbeen. Door de foramina sacralia treden de sacrale zenuwen uit. Het promontorium is een belangrijk oriëntatiepunt in de verloskunde.</p>",
  "image_url": "",
  "wiki_title": "Sacrum",
  "match": "os sacrum|heiligbeen|sacrum",
  "option_only": true
 },
 "os cuneiforme": {
  "title": "Os cuneiforme",
  "short": "De ossa cuneiformia zijn drie wigvormige voetwortelbeentjes tussen het os naviculare en de eerste drie middenvoetsbeentjes.",
  "definition": "<p>Er zijn drie <strong>ossa cuneiformia</strong> (mediale, intermediale en laterale). Door hun wigvorm helpen ze de dwarse voetboog te vormen. Ze articuleren met het os naviculare, met elkaar, met het os cuboideum en met de basis van metatarsale I–III (onderdeel van het gewricht van Lisfranc).</p>",
  "image_url": "",
  "wiki_title": "Cuneiform bones",
  "match": "os cuneiforme|ossa cuneiformia|wigvormig been",
  "option_only": true
 },
 "a. radialis": {
  "title": "A. radialis",
  "short": "De a. radialis is een eindtak van de a. brachialis die aan de duimzijde van de onderarm naar de hand loopt; hier voel je de pols.",
  "definition": "<p>De <strong>a. radialis</strong> loopt langs de radiale zijde van de onderarm en is bij de pols goed palpabel lateraal van de pees van de m. flexor carpi radialis. Ze loopt door de anatomische snuifdoos naar de handrug en vormt in de hand vooral de diepe handboog (arcus palmaris profundus). Ze wordt veel gebruikt voor arteriële bloedafname en voor hartkatheterisatie.</p>",
  "image_url": "",
  "wiki_title": "Radial artery",
  "match": "a. radialis|arteria radialis",
  "option_only": true
 },
 "a. femoralis": {
  "title": "A. femoralis",
  "short": "De a. femoralis is de grote slagader van het bovenbeen, de voortzetting van de a. iliaca externa onder het ligamentum inguinale.",
  "definition": "<p>De <strong>a. femoralis</strong> loopt vanaf het ligamentum inguinale door de trigonum femorale, lateraal van de v. femoralis en mediaal van de n. femoralis. In de lies is de pols goed voelbaar. Ze geeft de a. profunda femoris af en loopt verder door het kanaal van Hunter, waarna ze in de knieholte a. poplitea heet. Ze wordt gebruikt als toegang voor katheterisaties.</p>",
  "image_url": "",
  "wiki_title": "Femoral artery",
  "match": "a. femoralis|arteria femoralis",
  "option_only": true
 },
 "a. iliaca communis": {
  "title": "A. iliaca communis",
  "short": "De aa. iliacae communes ontstaan uit de splitsing van de aorta abdominalis ter hoogte van L4.",
  "definition": "<p>De <strong>a. iliaca communis</strong> loopt aan weerszijden schuin naar beneden en splitst zich ter hoogte van het sacro-iliacale gewricht in de a. iliaca externa (naar het been) en de a. iliaca interna (naar het bekken). De ureter kruist de iliacale vaten ongeveer bij deze splitsing.</p>",
  "image_url": "",
  "wiki_title": "Common iliac artery",
  "match": "a. iliaca communis|arteria iliaca communis",
  "option_only": true
 },
 "a. iliaca interna": {
  "title": "A. iliaca interna",
  "short": "De a. iliaca interna voorziet de bekkenorganen, de bilspieren en het perineum van bloed.",
  "definition": "<p>De <strong>a. iliaca interna</strong> ontstaat uit de a. iliaca communis en loopt het kleine bekken in. Ze heeft een voorste en achterste stam, met takken naar blaas, uterus (a. uterina), rectum, bilspieren (aa. gluteae) en perineum (a. pudenda interna). Bij de foetus lopen de navelarteriën vanuit deze arterie naar de placenta.</p>",
  "image_url": "",
  "wiki_title": "Internal iliac artery",
  "match": "a. iliaca interna|arteria iliaca interna|a. hypogastrica",
  "option_only": true
 },
 "a. mesenterica inferior": {
  "title": "A. mesenterica inferior",
  "short": "De a. mesenterica inferior voorziet het distale derde van het colon transversum, het colon descendens, sigmoïd en bovenste rectum.",
  "definition": "<p>De <strong>a. mesenterica inferior</strong> ontspringt ter hoogte van L3 uit de aorta abdominalis. Haar takken zijn de a. colica sinistra, de aa. sigmoideae en de a. rectalis superior. Via de arcade van Riolan en de marginale arterie (van Drummond) staat ze in verbinding met de a. mesenterica superior.</p>",
  "image_url": "",
  "wiki_title": "Inferior mesenteric artery",
  "match": "a. mesenterica inferior|arteria mesenterica inferior",
  "option_only": true
 },
 "arteria gastrica sinistra": {
  "title": "A. gastrica sinistra",
  "short": "De a. gastrica sinistra is een tak van de truncus coeliacus die de kleine curvatuur van de maag en de distale slokdarm voorziet.",
  "definition": "<p>De <strong>a. gastrica sinistra</strong> is de kleinste tak van de truncus coeliacus. Ze loopt naar de cardia, geeft takjes aan de distale oesophagus en loopt dan langs de kleine curvatuur, waar ze anastomoseert met de a. gastrica dextra. Een ulcus aan de kleine curvatuur kan uit deze arterie bloeden.</p>",
  "image_url": "",
  "wiki_title": "Left gastric artery",
  "match": "arteria gastrica sinistra|a. gastrica sinistra",
  "option_only": true
 },
 "a. thyroidea inferior": {
  "title": "A. thyroidea inferior",
  "short": "De a. thyroidea inferior is een tak van de truncus thyrocervicalis die de onderpool van de schildklier en de bijschildklieren voorziet.",
  "definition": "<p>De <strong>a. thyroidea inferior</strong> komt uit de truncus thyrocervicalis (tak van de a. subclavia) en loopt achter de a. carotis naar de schildklier. Ze voorziet ook de bijschildklieren. Vlak bij de schildklier kruist ze de n. laryngeus recurrens, waar de chirurg bij een thyreoïdectomie extra op moet letten.</p>",
  "image_url": "",
  "wiki_title": "Inferior thyroid artery",
  "match": "a. thyroidea inferior|arteria thyroidea inferior",
  "option_only": true
 },
 "truncus brachiocephalicus": {
  "title": "Truncus brachiocephalicus",
  "short": "De truncus brachiocephalicus is de eerste en grootste tak van de aortaboog en splitst in de rechter a. subclavia en a. carotis communis.",
  "definition": "<p>De <strong>truncus brachiocephalicus</strong> ontspringt als eerste tak van de arcus aortae, achter het manubrium sterni. Ter hoogte van het rechter sternoclaviculaire gewricht splitst hij in de a. subclavia dextra en a. carotis communis dextra. Links ontbreekt zo'n stam: daar ontspringen de a. carotis communis en a. subclavia apart uit de aortaboog.</p>",
  "image_url": "",
  "wiki_title": "Brachiocephalic artery",
  "match": "truncus brachiocephalicus|a. anonyma",
  "option_only": true
 },
 "a. subclavia dextra": {
  "title": "A. subclavia dextra",
  "short": "De rechter a. subclavia ontspringt uit de truncus brachiocephalicus en voorziet de rechterarm en via de a. vertebralis een deel van het brein.",
  "definition": "<p>De <strong>a. subclavia dextra</strong> ontstaat uit de truncus brachiocephalicus. Embryonaal ontstaat ze deels uit de rechter vierde kieuwboogarterie. Een bekende variant is een a. lusoria: een rechter a. subclavia die als laatste tak uit de aortaboog komt en achter de slokdarm langs loopt.</p>",
  "image_url": "",
  "wiki_title": "Subclavian artery",
  "match": "a. subclavia dextra|arteria subclavia dextra|rechter a. subclavia",
  "option_only": true
 },
 "a. subclavia sinistra": {
  "title": "A. subclavia sinistra",
  "short": "De linker a. subclavia ontspringt direct uit de aortaboog als laatste van de drie grote takken.",
  "definition": "<p>De <strong>a. subclavia sinistra</strong> komt rechtstreeks uit de arcus aortae. Ze geeft o.a. de a. vertebralis, a. thoracica interna en truncus thyrocervicalis af en gaat over de eerste rib heen over in de a. axillaris. Bij een stenose vlak voor de a. vertebralis kan een subclavian-steal-fenomeen ontstaan.</p>",
  "image_url": "",
  "wiki_title": "Subclavian artery",
  "match": "a. subclavia sinistra|arteria subclavia sinistra|linker a. subclavia",
  "option_only": true
 },
 "aorta": {
  "title": "Aorta",
  "short": "De aorta is de grootste slagader; ze voert zuurstofrijk bloed van de linkerventrikel naar de lichaamscirculatie.",
  "definition": "<p>De <strong>aorta</strong> bestaat uit de aorta ascendens (met de kransslagaders), de arcus aortae (met truncus brachiocephalicus, a. carotis communis sinistra en a. subclavia sinistra), de aorta thoracica descendens en de aorta abdominalis, die ter hoogte van L4 splitst. De wand is rijk aan elastische lamellen, wat zorgt voor de windketelfunctie.</p>",
  "image_url": "",
  "wiki_title": "Aorta",
  "match": "aorta|lichaamsslagader",
  "option_only": true
 },
 "vena cava inferior": {
  "title": "Vena cava inferior",
  "short": "De vena cava inferior voert het bloed uit benen, bekken en buik terug naar het rechteratrium.",
  "definition": "<p>De <strong>vena cava inferior</strong> ontstaat ter hoogte van L5 uit de samenvloeiing van de vv. iliacae communes en loopt rechts van de aorta omhoog. Ze ontvangt o.a. de nier- en levervenen en gaat door het centrum tendineum van het diafragma (ter hoogte van T8) naar het rechteratrium.</p>",
  "image_url": "",
  "wiki_title": "Inferior vena cava",
  "match": "vena cava inferior|v. cava inferior|onderste holle ader",
  "option_only": true
 },
 "vena hepatica": {
  "title": "Vena hepatica (levervene)",
  "short": "De venae hepaticae voeren het bloed uit de lever af naar de vena cava inferior.",
  "definition": "<p>De drie grote <strong>venae hepaticae</strong> (rechts, midden, links) verzamelen het bloed uit de centrale venen van de leverlobjes en monden vlak onder het diafragma uit in de vena cava inferior. Ze lopen tussen de leversegmenten in. Afsluiting ervan heet het syndroom van Budd-Chiari.</p>",
  "image_url": "",
  "wiki_title": "Hepatic veins",
  "match": "vena hepatica|v. hepatica|venae hepaticae|levervene",
  "option_only": true
 },
 "vena emissaria": {
  "title": "Vena emissaria",
  "short": "Venae emissariae zijn klapvrije venen die door de schedel heen de durale sinussen verbinden met venen buiten de schedel.",
  "definition": "<p><strong>Venae emissariae</strong> lopen door kleine openingen in de schedel (bijv. het foramen mastoideum). Ze hebben geen kleppen, zodat bloed in beide richtingen kan stromen. Daardoor kunnen infecties van de hoofdhuid of het gezicht zich naar de durale sinussen verspreiden.</p>",
  "image_url": "",
  "wiki_title": "Emissary veins",
  "match": "vena emissaria|venae emissariae|emissaire venen",
  "option_only": true
 },
 "sinus sagittalis superior": {
  "title": "Sinus sagittalis superior",
  "short": "De sinus sagittalis superior is de durale sinus in de bovenrand van de falx cerebri, waarin veel corticale venen en de liquor uitmonden.",
  "definition": "<p>De <strong>sinus sagittalis superior</strong> loopt in de middellijn van voor naar achter langs de bovenrand van de falx cerebri naar de confluens sinuum. Er monden overbruggende venen in uit, en via de arachnoïdale granulaties wordt hier liquor naar het veneuze bloed afgevoerd. Trombose ervan (sinustrombose) geeft hoofdpijn en tekenen van verhoogde druk.</p>",
  "image_url": "",
  "wiki_title": "Superior sagittal sinus",
  "match": "sinus sagittalis superior",
  "option_only": true
 },
 "sinus transversus": {
  "title": "Sinus transversus",
  "short": "De sinus transversus is een durale sinus die van de confluens sinuum zijwaarts langs de aanhechting van het tentorium loopt.",
  "definition": "<p>De <strong>sinus transversus</strong> loopt aan weerszijden horizontaal in de achterrand van het tentorium cerebelli. Hij ontvangt bloed uit de confluens sinuum (vaak rechts vooral uit de sinus sagittalis superior) en gaat over in de sinus sigmoideus. Asymmetrie tussen links en rechts is normaal.</p>",
  "image_url": "",
  "wiki_title": "Transverse sinuses",
  "match": "sinus transversus",
  "option_only": true
 },
 "sinus sigmoideus": {
  "title": "Sinus sigmoideus",
  "short": "De sinus sigmoideus is de S-vormige voortzetting van de sinus transversus die via het foramen jugulare overgaat in de v. jugularis interna.",
  "definition": "<p>De <strong>sinus sigmoideus</strong> loopt in een S-vormige groeve aan de binnenkant van het os temporale, vlak achter het mastoïd. Hij mondt uit in de bulbus van de v. jugularis interna. Door de nabijheid van het middenoor en mastoïd kan een mastoïditis uitbreiden tot een sinus sigmoideus-trombose.</p>",
  "image_url": "",
  "wiki_title": "Sigmoid sinus",
  "match": "sinus sigmoideus",
  "option_only": true
 },
 "sinus cavernosus": {
  "title": "Sinus cavernosus",
  "short": "De sinus cavernosus ligt aan weerszijden van de sella turcica; erdoorheen lopen de a. carotis interna en verschillende hersenzenuwen.",
  "definition": "<p>De <strong>sinus cavernosus</strong> is een netwerk van veneuze ruimtes naast het corpus van het os sphenoidale. Door de sinus lopen de a. carotis interna en de n. abducens (VI); in de laterale wand lopen de n. oculomotorius (III), n. trochlearis (IV) en de takken V1 en V2 van de n. trigeminus. Infecties uit het gezicht kunnen via de v. ophthalmica een sinus cavernosus-trombose veroorzaken.</p>",
  "image_url": "",
  "wiki_title": "Cavernous sinus",
  "match": "sinus cavernosus",
  "option_only": true
 },
 "m. deltoideus": {
  "title": "M. deltoideus",
  "short": "De m. deltoideus is de driehoekige schouderspier die de arm abduceert; geïnnerveerd door de n. axillaris.",
  "definition": "<p>De <strong>m. deltoideus</strong> ontspringt van de clavicula, het acromion en de spina scapulae en hecht aan op de tuberositas deltoidea van de humerus. Het middelste deel abduceert de arm (vooral boven ±15°), het voorste deel helpt bij anteflexie en endorotatie, het achterste deel bij retroflexie en exorotatie. Innervatie: n. axillaris (C5–C6).</p>",
  "image_url": "",
  "wiki_title": "Deltoid muscle",
  "match": "m. deltoideus|musculus deltoideus|deltaspier",
  "option_only": true
 },
 "m. pectoralis minor": {
  "title": "M. pectoralis minor",
  "short": "De m. pectoralis minor is een dunne borstspier die van de ribben naar het processus coracoideus loopt en de scapula naar voren-onder trekt.",
  "definition": "<p>De <strong>m. pectoralis minor</strong> ontspringt van ribben 3–5 en hecht aan het processus coracoideus. Hij stabiliseert de scapula tegen de thorax en helpt bij geforceerde inademing. De spier ligt over de a. axillaris en verdeelt die in drie delen. Innervatie: n. pectoralis medialis.</p>",
  "image_url": "",
  "wiki_title": "Pectoralis minor",
  "match": "m. pectoralis minor|musculus pectoralis minor|kleine borstspier",
  "option_only": true
 },
 "m. subclavius": {
  "title": "M. subclavius",
  "short": "De m. subclavius is een kleine spier onder de clavicula die het sternoclaviculaire gewricht stabiliseert.",
  "definition": "<p>De <strong>m. subclavius</strong> loopt van de eerste rib naar de onderzijde van de clavicula. Hij trekt de clavicula naar mediaal-beneden en stabiliseert zo het sternoclaviculaire gewricht. Bij een claviculafractuur beschermt hij enigszins de onderliggende vaten en de plexus brachialis. Innervatie: n. subclavius (C5–C6).</p>",
  "image_url": "",
  "wiki_title": "Subclavius muscle",
  "match": "m. subclavius|musculus subclavius",
  "option_only": true
 },
 "m. latissimus dorsi": {
  "title": "M. latissimus dorsi",
  "short": "De m. latissimus dorsi is de brede rugspier die de arm adduceert, endoroteert en naar achteren trekt.",
  "definition": "<p>De <strong>m. latissimus dorsi</strong> ontspringt van de onderste borst- en lendenwervels, de fascia thoracolumbalis, de crista iliaca en de onderste ribben, en hecht aan in de bodem van de sulcus intertubercularis van de humerus. Hij is belangrijk bij klimmen, roeien en zwemmen. Innervatie: n. thoracodorsalis (C6–C8).</p>",
  "image_url": "",
  "wiki_title": "Latissimus dorsi muscle",
  "match": "m. latissimus dorsi|musculus latissimus dorsi|brede rugspier",
  "option_only": true
 },
 "m. levator scapulae": {
  "title": "M. levator scapulae",
  "short": "De m. levator scapulae heft de scapula en kantelt haar; hij loopt van de bovenste halswervels naar de bovenhoek van de scapula.",
  "definition": "<p>De <strong>m. levator scapulae</strong> ontspringt van de processus transversi van C1–C4 en hecht aan de angulus superior en de mediale rand van de scapula. Hij heft het schouderblad en draait de cavitas glenoidalis naar beneden; bij een gefixeerde scapula buigt hij de nek opzij. Innervatie: n. dorsalis scapulae en cervicale takken.</p>",
  "image_url": "",
  "wiki_title": "Levator scapulae muscle",
  "match": "m. levator scapulae|musculus levator scapulae",
  "option_only": true
 },
 "pees van de m. supraspinatus": {
  "title": "Pees van de m. supraspinatus",
  "short": "De m. supraspinatus is een rotatorcuffspier die de abductie van de arm inzet; de pees loopt onder het acromion door.",
  "definition": "<p>De <strong>m. supraspinatus</strong> ligt in de fossa supraspinata van de scapula en hecht via een pees aan op de bovenkant van het tuberculum majus. Hij start de abductie en drukt de humeruskop in de kom. Omdat de pees door de nauwe subacromiale ruimte loopt, raakt deze vaak geïrriteerd of gescheurd (impingement, cuffruptuur). Innervatie: n. suprascapularis.</p>",
  "image_url": "",
  "wiki_title": "Supraspinatus muscle",
  "match": "pees van de m. supraspinatus|m. supraspinatus|supraspinatuspees",
  "option_only": true
 },
 "pees van de m. infraspinatus": {
  "title": "Pees van de m. infraspinatus",
  "short": "De m. infraspinatus is een rotatorcuffspier aan de achterkant van de scapula die de arm naar buiten draait.",
  "definition": "<p>De <strong>m. infraspinatus</strong> ligt in de fossa infraspinata en hecht aan het middelste facet van het tuberculum majus. Het is de belangrijkste exorotator van de schouder en stabiliseert samen met de andere cuffspieren de humeruskop. Innervatie: n. suprascapularis.</p>",
  "image_url": "",
  "wiki_title": "Infraspinatus muscle",
  "match": "pees van de m. infraspinatus|m. infraspinatus|infraspinatuspees",
  "option_only": true
 },
 "n. abducens": {
  "title": "N. abducens (VI)",
  "short": "De n. abducens (VI) innerveert de m. rectus lateralis, die het oog naar buiten beweegt.",
  "definition": "<p>De <strong>n. abducens</strong> ontspringt aan de grens van pons en medulla en heeft een lang intracraniëel verloop, door de sinus cavernosus naar de orbita. Daardoor is hij gevoelig voor verhoogde intracraniële druk. Uitval geeft horizontale dubbelbeelden en een oog dat niet goed naar buiten kan bewegen.</p>",
  "image_url": "",
  "wiki_title": "Abducens nerve",
  "match": "n. abducens|nervus abducens|hersenzenuw vi|n. vi",
  "option_only": true
 },
 "nervus vagus": {
  "title": "N. vagus (X)",
  "short": "De n. vagus (X) is de belangrijkste parasympathische zenuw; hij innerveert hart, longen en het maag-darmkanaal tot het distale colon transversum.",
  "definition": "<p>De <strong>n. vagus</strong> verlaat de schedel via het foramen jugulare en loopt in de halsvaatschede omlaag. Hij levert parasympathische vezels aan hart (vertraging), luchtwegen en darm, motorische vezels aan farynx en larynx (o.a. via de n. laryngeus recurrens) en sensibele informatie uit de inwendige organen, zoals van baroreceptoren in de aortaboog.</p>",
  "image_url": "",
  "wiki_title": "Vagus nerve",
  "match": "nervus vagus|n. vagus|vagus|hersenzenuw x",
  "option_only": true
 },
 "n. facialis": {
  "title": "N. facialis (VII)",
  "short": "De n. facialis (VII) innerveert de mimische spieren en verzorgt ook smaak (voorste 2/3 tong), traan- en speekselsecretie.",
  "definition": "<p>De <strong>n. facialis</strong> treedt uit bij de brughoek, loopt door het os temporale (canalis facialis) en verlaat de schedel via het foramen stylomastoideum; daarna splitst hij zich in de glandula parotidea in vijf takken. Naast de mimische spieren innerveert hij de m. stapedius. Bij een perifere facialisparese is de hele gezichtshelft verlamd, inclusief het voorhoofd.</p>",
  "image_url": "",
  "wiki_title": "Facial nerve",
  "match": "n. facialis|nervus facialis|hersenzenuw vii|aangezichtszenuw",
  "option_only": true
 },
 "n. accessorius": {
  "title": "N. accessorius (XI)",
  "short": "De n. accessorius (XI) innerveert de m. sternocleidomastoideus en m. trapezius.",
  "definition": "<p>De spinale wortels van de <strong>n. accessorius</strong> komen uit het bovenste halsmerg, gaan omhoog door het foramen magnum en verlaten de schedel via het foramen jugulare. In de laterale halsdriehoek loopt de zenuw oppervlakkig, waar hij kwetsbaar is bij lymfeklierbiopten. Uitval geeft zwakte bij het optrekken van de schouder en het draaien van het hoofd.</p>",
  "image_url": "",
  "wiki_title": "Accessory nerve",
  "match": "n. accessorius|nervus accessorius|hersenzenuw xi",
  "option_only": true
 },
 "n. hypoglossus": {
  "title": "N. hypoglossus (XII)",
  "short": "De n. hypoglossus (XII) innerveert de tongspieren.",
  "definition": "<p>De <strong>n. hypoglossus</strong> komt uit de medulla oblongata, verlaat de schedel via het canalis hypoglossi en loopt onder de mandibula naar de tong. Hij innerveert alle intrinsieke en de meeste extrinsieke tongspieren. Bij uitval wijkt de uitgestoken tong af naar de aangedane kant, met atrofie en fasciculaties bij een perifere laesie.</p>",
  "image_url": "",
  "wiki_title": "Hypoglossal nerve",
  "match": "n. hypoglossus|nervus hypoglossus|hersenzenuw xii",
  "option_only": true
 },
 "n. opticus": {
  "title": "N. opticus (II)",
  "short": "De n. opticus (II) voert visuele informatie van de retina naar het chiasma opticum.",
  "definition": "<p>De <strong>n. opticus</strong> bestaat uit de axonen van de retinale ganglioncellen. Strikt genomen is het een baan van het centrale zenuwstelsel: hij is omgeven door hersenvliezen en gemyeliniseerd door oligodendrocyten (daarom aangedaan bij MS). In het chiasma kruisen de vezels van de nasale netvlieshelften.</p>",
  "image_url": "",
  "wiki_title": "Optic nerve",
  "match": "n. opticus|nervus opticus|oogzenuw|hersenzenuw ii",
  "option_only": true
 },
 "n. phrenicus": {
  "title": "N. phrenicus",
  "short": "De n. phrenicus (C3–C5) innerveert het diafragma.",
  "definition": "<p>De <strong>n. phrenicus</strong> ontstaat uit C3–C5 (‘C3, 4, 5 keeps the diaphragm alive’), loopt over de m. scalenus anterior naar beneden en door het mediastinum langs het pericard naar het diafragma. Hij is motorisch voor het diafragma en sensibel voor pericard, pleura en peritoneum onder het diafragma; irritatie kan daardoor pijn in de schouder geven.</p>",
  "image_url": "",
  "wiki_title": "Phrenic nerve",
  "match": "n. phrenicus|nervus phrenicus",
  "option_only": true
 },
 "n. ischiadicus": {
  "title": "N. ischiadicus",
  "short": "De n. ischiadicus (L4–S3) is de dikste zenuw van het lichaam en innerveert de hamstrings en alle spieren onder de knie.",
  "definition": "<p>De <strong>n. ischiadicus</strong> verlaat het bekken via het foramen ischiadicum majus, meestal onder de m. piriformis, en loopt aan de achterzijde van het bovenbeen. Boven de knieholte splitst hij in de n. tibialis en de n. fibularis communis. Hij is kwetsbaar bij een intramusculaire injectie in het verkeerde kwadrant van de bil en bij een posterieure heupluxatie.</p>",
  "image_url": "",
  "wiki_title": "Sciatic nerve",
  "match": "n. ischiadicus|nervus ischiadicus|heupzenuw",
  "option_only": true
 },
 "n. infraorbitalis": {
  "title": "N. infraorbitalis",
  "short": "De n. infraorbitalis is een tak van de n. maxillaris (V2) die de huid van wang, onderooglid, zijkant neus en bovenlip verzorgt.",
  "definition": "<p>De <strong>n. infraorbitalis</strong> loopt over de orbitabodem door de canalis infraorbitalis en komt via het foramen infraorbitale op het gezicht. Bij een orbitabodemfractuur (blow-out) kan de zenuw beschadigd raken, met gevoelloosheid van wang en bovenlip als gevolg.</p>",
  "image_url": "",
  "wiki_title": "Infraorbital nerve",
  "match": "n. infraorbitalis|nervus infraorbitalis",
  "option_only": true
 },
 "n. cutaneus antebrachii medialis": {
  "title": "N. cutaneus antebrachii medialis",
  "short": "De n. cutaneus antebrachii medialis is een sensibele zenuw uit de fasciculus medialis voor de huid van de mediale onderarm.",
  "definition": "<p>De <strong>n. cutaneus antebrachii medialis</strong> (C8–T1) komt rechtstreeks uit de fasciculus medialis van de plexus brachialis. Hij loopt met de v. basilica mee en verzorgt de huid aan de mediale (ulnaire) zijde van de onderarm tot de pols. Het is een zuiver sensibele zenuw.</p>",
  "image_url": "",
  "wiki_title": "Medial cutaneous nerve of forearm",
  "match": "n. cutaneus antebrachii medialis",
  "option_only": true
 },
 "perifere zenuwen": {
  "title": "Perifere zenuwen",
  "short": "Perifere zenuwen verbinden het centrale zenuwstelsel met spieren, huid en organen; ze bestaan uit bundels axonen omgeven door bindweefsel.",
  "definition": "<p>Een <strong>perifere zenuw</strong> bevat motorische, sensibele en autonome axonen, al dan niet gemyeliniseerd door Schwann-cellen. Elk axon is omgeven door endoneurium, bundels door perineurium en de hele zenuw door epineurium. Anders dan in het CZS kunnen perifere axonen na beschadiging uitgroeien (ongeveer 1 mm per dag) als de zenuwschede intact is.</p>",
  "image_url": "",
  "wiki_title": "Nerve",
  "match": "perifere zenuwen|perifere zenuw",
  "option_only": true
 },
 "motorneuronen": {
  "title": "Motorneuronen",
  "short": "Motorneuronen sturen skeletspieren aan; het bovenste motorneuron loopt van cortex naar ruggenmerg, het onderste van ruggenmerg naar spier.",
  "definition": "<p>Het <strong>bovenste motorneuron</strong> ligt in de motorische cortex en projecteert via de piramidebaan naar hersenstam en ruggenmerg; uitval geeft spasticiteit, hyperreflexie en een Babinski-reflex. Het <strong>onderste motorneuron</strong> ligt in de voorhoorn van het ruggenmerg of in hersenzenuwkernen en innerveert de spiervezels; uitval geeft slappe verlamming, atrofie, fasciculaties en hyporeflexie.</p>",
  "image_url": "",
  "wiki_title": "Motor neuron",
  "match": "motorneuronen|motor neuron|motorneuron|motorische neuronen",
  "option_only": true
 },
 "derde ventrikel": {
  "title": "Derde ventrikel",
  "short": "De derde ventrikel is een smalle liquorholte in de middellijn, tussen beide thalami.",
  "definition": "<p>De <strong>derde ventrikel</strong> ligt in het diencephalon. Ze ontvangt liquor uit de laterale ventrikels via de foramina van Monro en staat via de aquaductus cerebri in verbinding met de vierde ventrikel. In de wanden liggen de thalamus en hypothalamus; het dak bevat plexus choroideus.</p>",
  "image_url": "",
  "wiki_title": "Third ventricle",
  "match": "derde ventrikel|ventriculus tertius",
  "option_only": true
 },
 "vierde ventrikel": {
  "title": "Vierde ventrikel",
  "short": "De vierde ventrikel is de liquorholte tussen hersenstam en cerebellum, met openingen naar de subarachnoïdale ruimte.",
  "definition": "<p>De <strong>vierde ventrikel</strong> ligt achter pons en medulla oblongata en vóór het cerebellum; de bodem heet de fossa rhomboidea. Via het mediane foramen van Magendie en de laterale foramina van Luschka stroomt liquor naar de subarachnoïdale ruimte (o.a. de cisterna magna). Naar caudaal loopt hij over in de canalis centralis.</p>",
  "image_url": "",
  "wiki_title": "Fourth ventricle",
  "match": "vierde ventrikel|ventriculus quartus",
  "option_only": true
 },
 "plexus choreoïdus": {
  "title": "Plexus choroideus",
  "short": "De plexus choroideus is het vaatrijke weefsel in de ventrikels dat liquor produceert.",
  "definition": "<p>De <strong>plexus choroideus</strong> bestaat uit kluwens capillairen bedekt met gespecialiseerd ependym. De epitheelcellen zijn verbonden door tight junctions en vormen zo de bloed-liquorbarrière. Per dag wordt ongeveer 500 ml liquor gemaakt. De plexus ligt in de laterale ventrikels, het dak van de derde en vierde ventrikel.</p>",
  "image_url": "",
  "wiki_title": "Choroid plexus",
  "match": "plexus choreoïdus|plexus choroideus|plexus chorioideus",
  "option_only": true
 },
 "cisterna magna": {
  "title": "Cisterna magna",
  "short": "De cisterna magna is de grootste verwijding van de subarachnoïdale ruimte, tussen cerebellum en medulla oblongata.",
  "definition": "<p>De <strong>cisterna magna</strong> (cisterna cerebellomedullaris) ontvangt liquor uit de vierde ventrikel via het foramen van Magendie. Vroeger werd hier soms een suboccipitale punctie gedaan om liquor af te nemen. Een vergrote cisterna magna komt voor bij sommige achterste-schedelgroefafwijkingen.</p>",
  "image_url": "",
  "wiki_title": "Cisterna magna",
  "match": "cisterna magna|cisterna cerebellomedullaris",
  "option_only": true
 },
 "cisterna interpeduncularis": {
  "title": "Cisterna interpeduncularis",
  "short": "De cisterna interpeduncularis is een verwijding van de subarachnoïdale ruimte tussen de hersenstelen (crura cerebri).",
  "definition": "<p>De <strong>cisterna interpeduncularis</strong> ligt aan de voorzijde van het mesencephalon, tussen de pedunculi cerebri. Erin liggen de splitsing van de a. basilaris en het begin van de n. oculomotorius. Bij een subarachnoïdale bloeding kan hier bloed op CT zichtbaar zijn.</p>",
  "image_url": "",
  "wiki_title": "Interpeduncular cistern",
  "match": "cisterna interpeduncularis",
  "option_only": true
 },
 "cerebellum": {
  "title": "Cerebellum (kleine hersenen)",
  "short": "Het cerebellum coördineert beweging, evenwicht en houding en speelt een rol bij motorisch leren.",
  "definition": "<p>Het <strong>cerebellum</strong> ligt in de achterste schedelgroeve achter de hersenstam, verbonden via drie paar pedunculi. Het vergelijkt bedoelde met uitgevoerde bewegingen en stuurt bij. Uitval geeft ataxie, intentietremor, dysmetrie, dysdiadochokinese, nystagmus en dysartrie aan dezelfde kant als de laesie.</p>",
  "image_url": "",
  "wiki_title": "Cerebellum",
  "match": "cerebellum|kleine hersenen",
  "option_only": true
 },
 "cerebrum": {
  "title": "Cerebrum (grote hersenen)",
  "short": "Het cerebrum bestaat uit de twee hersenhelften met cortex, witte stof en basale kernen.",
  "definition": "<p>Het <strong>cerebrum</strong> ontstaat uit het telencephalon. Elke hemisfeer heeft een frontale, pariëtale, temporale en occipitale kwab en de insula. De hemisferen zijn verbonden door het corpus callosum. De cortex verzorgt o.a. waarneming, motoriek, taal, geheugen en uitvoerende functies.</p>",
  "image_url": "",
  "wiki_title": "Cerebrum",
  "match": "cerebrum|grote hersenen",
  "option_only": true
 },
 "cortex cerebri": {
  "title": "Cortex cerebri (hersenschors)",
  "short": "De cortex cerebri is de buitenste laag grijze stof van de grote hersenen, sterk geplooid in gyri en sulci.",
  "definition": "<p>De <strong>cortex cerebri</strong> is 2–4 mm dik en grotendeels opgebouwd uit zes lagen (neocortex). Er worden primaire gebieden (bijv. motorische en somatosensorische cortex), unimodale associatiegebieden en multimodale associatiegebieden onderscheiden. De indeling in Brodmann-gebieden is gebaseerd op verschillen in celopbouw.</p>",
  "image_url": "",
  "wiki_title": "Cerebral cortex",
  "match": "cortex cerebri|hersenschors|cerebrale cortex",
  "option_only": true
 },
 "corpus callosum": {
  "title": "Corpus callosum (hersenbalk)",
  "short": "Het corpus callosum is de grote bundel witte stof die de twee hersenhelften verbindt.",
  "definition": "<p>Het <strong>corpus callosum</strong> bevat honderden miljoenen axonen die overeenkomstige gebieden van beide hemisferen verbinden. Het bestaat uit rostrum, genu, truncus en splenium. Bij een doorsnijding of agenesie ontstaan disconnectiesyndromen; patiënten kunnen bijvoorbeeld een voorwerp in de linkerhand niet benoemen.</p>",
  "image_url": "",
  "wiki_title": "Corpus callosum",
  "match": "corpus callosum|hersenbalk",
  "option_only": true
 },
 "commisura posterior": {
  "title": "Commissura posterior",
  "short": "De commissura posterior is een kleine vezelbundel boven de aquaductus die betrokken is bij de pupilreflex.",
  "definition": "<p>De <strong>commissura posterior</strong> ligt op de overgang van diencephalon naar mesencephalon, net boven de ingang van de aquaductus cerebri. Er kruisen vezels van de pretectale kernen, die zorgen voor de consensuele pupilreactie (beide pupillen vernauwen bij licht in één oog).</p>",
  "image_url": "",
  "wiki_title": "Posterior commissure",
  "match": "commisura posterior|commissura posterior",
  "option_only": true
 },
 "commisura hippocampi": {
  "title": "Commissura fornicis (hippocampi)",
  "short": "De commissura hippocampi verbindt de fornices van beide kanten en daarmee de linker en rechter hippocampus.",
  "definition": "<p>De <strong>commissura hippocampi</strong> (commissura fornicis) ligt onder het splenium van het corpus callosum, tussen de twee crura van de fornix. Via deze vezels wisselen beide hippocampi informatie uit.</p>",
  "image_url": "",
  "wiki_title": "Commissure of fornix",
  "match": "commisura hippocampi|commissura hippocampi|commissura fornicis",
  "option_only": true
 },
 "hippocampus": {
  "title": "Hippocampus",
  "short": "De hippocampus ligt in de mediale temporaalkwab en is essentieel voor het vastleggen van nieuwe herinneringen.",
  "definition": "<p>De <strong>hippocampus</strong> is onderdeel van het limbisch systeem en ligt in de bodem van de onderhoorn van de laterale ventrikel. Hij is nodig om nieuwe episodische en ruimtelijke herinneringen op te slaan (consolidatie). De belangrijkste uitgang is de fornix. Hij is gevoelig voor hypoxie en wordt vroeg aangetast bij de ziekte van Alzheimer.</p>",
  "image_url": "",
  "wiki_title": "Hippocampus",
  "match": "hippocampus",
  "option_only": true
 },
 "nucleus caudatus": {
  "title": "Nucleus caudatus",
  "short": "De nucleus caudatus is een C-vormige kern van de basale ganglia langs de laterale ventrikel; samen met het putamen vormt hij het striatum.",
  "definition": "<p>De <strong>nucleus caudatus</strong> heeft een kop (caput) in de wand van de voorhoorn van de laterale ventrikel, een lichaam en een staart die meebuigt in de temporaalkwab. Hij ontvangt vooral input uit de prefrontale en associatiecortex en speelt een rol bij cognitieve en motivationele lussen. Bij de ziekte van Huntington atrofieert de kop van de caudatus.</p>",
  "image_url": "",
  "wiki_title": "Caudate nucleus",
  "match": "nucleus caudatus|caudatus",
  "option_only": true
 },
 "nucleus anterior van de thalamus": {
  "title": "Nucleus anterior thalami",
  "short": "De nucleus anterior van de thalamus maakt deel uit van het circuit van Papez en is betrokken bij geheugen en emotie.",
  "definition": "<p>De <strong>nucleus anterior thalami</strong> ontvangt input uit de corpora mamillaria via de tractus mamillothalamicus en projecteert naar de gyrus cinguli. Zo vormt hij een schakel in het circuit van Papez (hippocampus → fornix → corpora mamillaria → nucleus anterior → gyrus cinguli → hippocampus).</p>",
  "image_url": "",
  "wiki_title": "Anterior nuclei of thalamus",
  "match": "nucleus anterior van de thalamus|nucleus anterior thalami|nuclei anteriores thalami",
  "option_only": true
 },
 "bulbus olfactorius": {
  "title": "Bulbus olfactorius",
  "short": "De bulbus olfactorius is de eerste schakelplaats van de reukbaan, gelegen boven de lamina cribrosa.",
  "definition": "<p>In de <strong>bulbus olfactorius</strong> komen de axonen van de reukreceptoren (n. olfactorius) door de lamina cribrosa binnen en schakelen in glomeruli om op mitraalcellen. Via de tractus olfactorius gaat de informatie rechtstreeks naar de reukcortex, zonder schakeling in de thalamus. Een fractuur van de lamina cribrosa kan reukverlies (anosmie) geven.</p>",
  "image_url": "",
  "wiki_title": "Olfactory bulb",
  "match": "bulbus olfactorius|reukkolf",
  "option_only": true
 },
 "tractus opticus": {
  "title": "Tractus opticus",
  "short": "De tractus opticus loopt van het chiasma opticum naar het corpus geniculatum laterale en bevat vezels van beide ogen voor de tegenovergestelde gezichtshelft.",
  "definition": "<p>Na de kruising in het chiasma bevat elke <strong>tractus opticus</strong> de vezels van het temporale netvlies van hetzelfde oog en het nasale netvlies van het andere oog. Een laesie geeft daarom een homonieme hemianopsie aan de tegenovergestelde kant. Een klein deel van de vezels gaat naar de pretectale kernen voor de pupilreflex.</p>",
  "image_url": "",
  "wiki_title": "Optic tract",
  "match": "tractus opticus",
  "option_only": true
 },
 "a. cerebri media": {
  "title": "A. cerebri media",
  "short": "De a. cerebri media is de grootste eindtak van de a. carotis interna en voorziet de laterale zijde van de hemisfeer.",
  "definition": "<p>De <strong>a. cerebri media</strong> loopt door de fissura lateralis (Sylvii) en voorziet het grootste deel van de laterale hemisfeer, inclusief de motorische en sensorische cortex voor gezicht en arm en (in de dominante hemisfeer) de taalgebieden. Lenticulostriatale takjes voorzien de basale kernen en de capsula interna. Een infarct geeft o.a. contralaterale uitval van gezicht en arm en afasie of neglect.</p>",
  "image_url": "",
  "wiki_title": "Middle cerebral artery",
  "match": "a. cerebri media|arteria cerebri media|acm|mca",
  "option_only": true
 },
 "a. cerebri posterior": {
  "title": "A. cerebri posterior",
  "short": "De a. cerebri posterior ontstaat uit de a. basilaris en voorziet de occipitaalkwab, de onderkant van de temporaalkwab en de thalamus.",
  "definition": "<p>De <strong>a. cerebri posterior</strong> ontstaat uit de splitsing van de a. basilaris en is via de a. communicans posterior verbonden met de carotiscirculatie. Ze voorziet de occipitaalkwab (visuele cortex), de mediale onderkant van de temporaalkwab en via perforerende takjes de thalamus en het mesencephalon. Een infarct geeft typisch een contralaterale homonieme hemianopsie.</p>",
  "image_url": "",
  "wiki_title": "Posterior cerebral artery",
  "match": "a. cerebri posterior|arteria cerebri posterior|acp|pca",
  "option_only": true
 },
 "arteria communicans anterior": {
  "title": "A. communicans anterior",
  "short": "De a. communicans anterior verbindt de linker en rechter a. cerebri anterior in de cirkel van Willis.",
  "definition": "<p>De <strong>a. communicans anterior</strong> is een kort vat dat de beide aa. cerebri anteriores verbindt aan de voorzijde van de cirkel van Willis. Het is een veelvoorkomende plaats voor sacculaire (bes)aneurysmata, die bij ruptuur een subarachnoïdale bloeding geven.</p>",
  "image_url": "",
  "wiki_title": "Anterior communicating artery",
  "match": "arteria communicans anterior|a. communicans anterior",
  "option_only": true
 },
 "arteria cerebelli superior": {
  "title": "A. cerebelli superior",
  "short": "De a. cerebelli superior is een tak van de a. basilaris die de bovenkant van het cerebellum en delen van de hersenstam voorziet.",
  "definition": "<p>De <strong>a. cerebelli superior</strong> ontspringt vlak onder de splitsing van de a. basilaris. Tussen deze arterie en de a. cerebri posterior loopt de n. oculomotorius. Ze voorziet de bovenzijde van het cerebellum, de cerebellaire kernen en delen van pons en mesencephalon.</p>",
  "image_url": "",
  "wiki_title": "Superior cerebellar artery",
  "match": "arteria cerebelli superior|a. cerebelli superior",
  "option_only": true
 },
 "a. meningea media": {
  "title": "A. meningea media",
  "short": "De a. meningea media voorziet de dura mater; ze loopt aan de binnenkant van de schedel onder het pterion.",
  "definition": "<p>De <strong>a. meningea media</strong> is een tak van de a. maxillaris en komt de schedel binnen via het foramen spinosum. Ze loopt tussen dura en schedelbot en heeft een voorste tak die onder het dunne pterion ligt. Een schedelfractuur op die plek kan de arterie scheuren, met een epiduraal hematoom als gevolg.</p>",
  "image_url": "",
  "wiki_title": "Middle meningeal artery",
  "match": "a. meningea media|arteria meningea media",
  "option_only": true
 },
 "episodisch geheugen": {
  "title": "Episodisch geheugen",
  "short": "Het episodisch geheugen bevat persoonlijke gebeurtenissen met hun tijd en plaats.",
  "definition": "<p>Het <strong>episodisch geheugen</strong> is een onderdeel van het declaratieve (expliciete) langetermijngeheugen. Het slaat specifieke, persoonlijk beleefde gebeurtenissen op, zoals wat je gisteren hebt gegeten. Het is sterk afhankelijk van de hippocampus en de mediale temporaalkwab en wordt vroeg aangetast bij de ziekte van Alzheimer.</p>",
  "image_url": "",
  "wiki_title": "Episodic memory",
  "match": "episodisch geheugen",
  "option_only": true
 },
 "semantisch geheugen": {
  "title": "Semantisch geheugen",
  "short": "Het semantisch geheugen bevat algemene feitenkennis en betekenissen, los van wanneer je ze leerde.",
  "definition": "<p>Het <strong>semantisch geheugen</strong> is het deel van het declaratieve geheugen waarin kennis over de wereld ligt opgeslagen, zoals woordbetekenissen en feiten (Parijs is de hoofdstad van Frankrijk). Het is vooral verbonden met de (voorste) temporaalkwab en is selectief aangedaan bij semantische dementie.</p>",
  "image_url": "",
  "wiki_title": "Semantic memory",
  "match": "semantisch geheugen",
  "option_only": true
 },
 "werkgeheugen": {
  "title": "Werkgeheugen",
  "short": "Het werkgeheugen houdt informatie kort actief vast en bewerkt die, bijvoorbeeld bij hoofdrekenen.",
  "definition": "<p>Het <strong>werkgeheugen</strong> heeft een beperkte capaciteit (een paar items) en houdt informatie seconden vast terwijl je ermee bezig bent. Volgens het model van Baddeley bestaat het uit een centrale uitvoerder, een fonologische lus en een visueel-ruimtelijk schetsblok. Het is sterk afhankelijk van de prefrontale cortex.</p>",
  "image_url": "",
  "wiki_title": "Working memory",
  "match": "werkgeheugen|kortetermijngeheugen",
  "option_only": true
 },
 "synaptogenese": {
  "title": "Synaptogenese",
  "short": "Synaptogenese is de vorming van nieuwe synapsen tussen neuronen; het piekt in de eerste levensjaren.",
  "definition": "<p>Bij <strong>synaptogenese</strong> maken axonen en dendrieten contact en ontstaan functionele synapsen. Na de geboorte vindt een explosieve toename van synapsen plaats; daarna worden weinig gebruikte synapsen weer opgeruimd (pruning), een proces dat in de prefrontale cortex tot in de adolescentie doorgaat.</p>",
  "image_url": "",
  "wiki_title": "Synaptogenesis",
  "match": "synaptogenese|synapsvorming",
  "option_only": true
 },
 "astrocyt": {
  "title": "Astrocyt",
  "short": "Astrocyten zijn stervormige gliacellen in het CZS die neuronen ondersteunen, ionen en neurotransmitters regelen en de bloed-hersenbarrière helpen vormen.",
  "definition": "<p><strong>Astrocyten</strong> zijn de talrijkste gliacellen. Met hun uitlopers (eindvoetjes) omhullen ze capillairen en induceren ze de tight junctions van de bloed-hersenbarrière. Ze nemen kalium en glutamaat op, slaan glycogeen op en vormen na schade een glialitteken (gliose). Ze brengen GFAP tot expressie; tumoren ervan heten astrocytomen.</p>",
  "image_url": "",
  "wiki_title": "Astrocyte",
  "match": "astrocyt|astrocyten",
  "option_only": true
 },
 "satellietcel": {
  "title": "Satellietcel",
  "short": "De term satellietcel wordt gebruikt voor de stamcellen van skeletspier en voor de steuncellen rond neuronen in perifere ganglia.",
  "definition": "<p>In <strong>skeletspier</strong> liggen satellietcellen tussen de basale lamina en het sarcolemma van de spiervezel. Het zijn spierstamcellen die bij schade delen en fuseren met bestaande vezels voor herstel en groei. In <strong>perifere ganglia</strong> (spinale en autonome ganglia) zijn satellietcellen gliacellen die de cellichamen van neuronen omringen en ondersteunen.</p>",
  "image_url": "",
  "wiki_title": "Myosatellite cell",
  "match": "satellietcel|satellietcellen",
  "option_only": true
 },
 "neuritis vestibularis": {
  "title": "Neuritis vestibularis",
  "short": "Neuritis vestibularis is een (vermoedelijk virale) ontsteking van de n. vestibularis met acute, dagenlange draaiduizeligheid zonder gehoorverlies.",
  "definition": "<p>Bij <strong>neuritis vestibularis</strong> valt het evenwichtsorgaan aan één kant plotseling uit. Dat geeft heftige draaiduizeligheid, misselijkheid, braken en een horizontale nystagmus naar de gezonde kant, zonder gehoorverlies of andere neurologische uitval. De head-impulstest is afwijkend. Het herstel verloopt over dagen tot weken via centrale compensatie.</p>",
  "image_url": "",
  "wiki_title": "Vestibular neuritis",
  "match": "neuritis vestibularis|neuronitis vestibularis",
  "option_only": true
 },
 "neuropathie": {
  "title": "Neuropathie",
  "short": "Neuropathie is een aandoening van perifere zenuwen, met gevoelsstoornissen, krachtsverlies en/of verlaagde reflexen.",
  "definition": "<p>Een <strong>neuropathie</strong> kan één zenuw treffen (mononeuropathie, bijv. carpaletunnelsyndroom), meerdere zenuwen asymmetrisch (mononeuritis multiplex) of symmetrisch veel zenuwen tegelijk (polyneuropathie, typisch beginnend in de voeten). Oorzaken zijn o.a. diabetes, alcohol, vitamine B12-tekort, medicatie (chemotherapie), auto-immuniteit en erfelijke aandoeningen.</p>",
  "image_url": "",
  "wiki_title": "Peripheral neuropathy",
  "match": "neuropathie|perifere neuropathie",
  "option_only": true
 },
 "tremor": {
  "title": "Tremor",
  "short": "Tremor is een onwillekeurige, ritmische, oscillerende beweging van een lichaamsdeel.",
  "definition": "<p><strong>Tremoren</strong> worden ingedeeld naar wanneer ze optreden. Een <em>rusttremor</em> (bijv. bij de ziekte van Parkinson) is aanwezig als het lichaamsdeel ontspannen is. Een <em>houdingstremor</em> (bijv. essentiële tremor, fysiologisch versterkt bij angst, cafeïne of hyperthyreoïdie) treedt op bij het vasthouden van een houding. Een <em>intentietremor</em> neemt toe bij het naderen van een doel en wijst op cerebellaire pathologie.</p>",
  "image_url": "",
  "wiki_title": "Tremor",
  "match": "tremor|beven",
  "option_only": true
 },
 "ziekte van parkinson": {
  "title": "Ziekte van Parkinson",
  "short": "De ziekte van Parkinson is een neurodegeneratieve ziekte door verlies van dopaminerge neuronen in de substantia nigra, met rusttremor, bradykinesie en rigiditeit.",
  "definition": "<p>Bij de <strong>ziekte van Parkinson</strong> gaan dopaminerge neuronen in de substantia nigra pars compacta verloren, met Lewy-lichaampjes (alfa-synucleïne). Kernsymptomen zijn bradykinesie, rigiditeit, rusttremor en later houdingsinstabiliteit; vaak ook niet-motorische klachten zoals reukverlies, obstipatie, depressie en slaapstoornissen. Behandeling met levodopa en dopamine-agonisten.</p>",
  "image_url": "",
  "wiki_title": "Parkinson's disease",
  "match": "ziekte van parkinson|parkinson|morbus parkinson",
  "option_only": true
 },
 "vasculaire dementie": {
  "title": "Vasculaire dementie",
  "short": "Vasculaire dementie is dementie door schade aan het brein door herseninfarcten, bloedingen of ziekte van de kleine vaten.",
  "definition": "<p>Bij <strong>vasculaire dementie</strong> ontstaan cognitieve stoornissen door cerebrovasculaire schade. Het beloop kan trapsgewijs zijn (na elk infarct een verslechtering) of geleidelijk bij uitgebreide witte-stofafwijkingen. Typisch zijn een vertraagd denken en problemen met aandacht en uitvoerende functies, vaak met focale neurologische verschijnselen. Risicofactoren zijn die van hart- en vaatziekten.</p>",
  "image_url": "",
  "wiki_title": "Vascular dementia",
  "match": "vasculaire dementie",
  "option_only": true
 },
 "mci": {
  "title": "Mild cognitive impairment (MCI)",
  "short": "MCI is een lichte achteruitgang van het geheugen of andere cognitieve functies die groter is dan normaal voor de leeftijd, zonder dat het dagelijks functioneren wezenlijk beperkt is.",
  "definition": "<p>Bij <strong>mild cognitive impairment</strong> zijn cognitieve stoornissen aantoonbaar bij testen, maar kan iemand zich in het dagelijks leven nog grotendeels redden; dat onderscheidt MCI van dementie. Een deel van de mensen met MCI (vooral met geheugenstoornissen) ontwikkelt later de ziekte van Alzheimer; een ander deel blijft stabiel of verbetert.</p>",
  "image_url": "",
  "wiki_title": "Mild cognitive impairment",
  "match": "mci|mild cognitive impairment|lichte cognitieve stoornis",
  "option_only": true
 },
 "psychose": {
  "title": "Psychose",
  "short": "Een psychose is een toestand waarin het contact met de werkelijkheid verstoord is, met wanen en/of hallucinaties.",
  "definition": "<p>Bij een <strong>psychose</strong> komen wanen, hallucinaties en/of ernstig verward denken en gedrag voor. Psychosen komen voor bij schizofrenie, bipolaire stoornis, ernstige depressie, delier, middelengebruik en lichamelijke ziekten. De positieve symptomen hangen samen met een overmaat aan dopamine in de mesolimbische baan; behandeling met antipsychotica.</p>",
  "image_url": "",
  "wiki_title": "Psychosis",
  "match": "psychose|psychotische stoornis",
  "option_only": true
 },
 "kortdurende psychotische stoornis": {
  "title": "Kortdurende psychotische stoornis",
  "short": "Bij een kortdurende psychotische stoornis duren de psychotische symptomen minstens een dag maar korter dan een maand, met volledig herstel.",
  "definition": "<p>Een <strong>kortdurende psychotische stoornis</strong> (DSM-5) begint plotseling, vaak na een duidelijke stressor of rond de bevalling. Er zijn wanen, hallucinaties, gedesorganiseerde spraak of gedrag. De symptomen duren minimaal één dag en maximaal één maand, waarna het functioneren weer op het oude niveau komt.</p>",
  "image_url": "",
  "wiki_title": "Brief psychotic disorder",
  "match": "kortdurende psychotische stoornis",
  "option_only": true
 },
 "waanstoornis": {
  "title": "Waanstoornis",
  "short": "Een waanstoornis kenmerkt zich door één of meer wanen die minstens een maand bestaan, zonder andere duidelijke psychotische verschijnselen.",
  "definition": "<p>Bij een <strong>waanstoornis</strong> heeft iemand een of meer vaak niet-bizarre wanen (bijv. achtervolgings-, jaloersheids- of lichamelijke waan), terwijl het functioneren buiten het waanthema relatief goed blijft. Hallucinaties zijn afwezig of passen bij de waan, en er is geen sprake van schizofrenie.</p>",
  "image_url": "",
  "wiki_title": "Delusional disorder",
  "match": "waanstoornis",
  "option_only": true
 },
 "psychotische stoornis door een middel": {
  "title": "Psychotische stoornis door een middel",
  "short": "Een psychotische stoornis door een middel wordt uitgelokt door gebruik van of onttrekking aan drugs, alcohol of medicatie.",
  "definition": "<p>Bij een <strong>middelengeïnduceerde psychotische stoornis</strong> ontstaan wanen of hallucinaties tijdens of kort na intoxicatie of onttrekking, bijvoorbeeld door cannabis, cocaïne, amfetamine of alcohol, of door geneesmiddelen zoals corticosteroïden of dopaminerge middelen. De klachten verdwijnen meestal na stoppen; houden ze lang aan, dan moet aan een primaire psychotische stoornis worden gedacht.</p>",
  "image_url": "",
  "wiki_title": "Substance-induced psychosis",
  "match": "psychotische stoornis door een middel|middelengeïnduceerde psychotische stoornis",
  "option_only": true
 },
 "visuele hallucinatie": {
  "title": "Visuele hallucinatie",
  "short": "Een visuele hallucinatie is iets zien wat er niet is, zonder dat er een prikkel aanwezig is.",
  "definition": "<p>Een <strong>hallucinatie</strong> is een waarneming zonder prikkel, met het karakter van een echte waarneming. <em>Visuele</em> hallucinaties passen vaker bij een organische oorzaak, zoals een delier, Lewy body-dementie, de ziekte van Parkinson, intoxicaties of onttrekking, dan bij een primaire psychiatrische stoornis. Ze verschillen van een illusie, waarbij een bestaande prikkel verkeerd wordt waargenomen.</p>",
  "image_url": "",
  "wiki_title": "Hallucination",
  "match": "visuele hallucinatie|visuele hallucinaties",
  "option_only": true
 },
 "disperceptie": {
  "title": "Disperceptie",
  "short": "Disperceptie is een overkoepelende term voor stoornissen in de waarneming, zoals illusies en hallucinaties.",
  "definition": "<p>Onder <strong>disperceptie</strong> valt elke vervalsing van de waarneming: illusies (een bestaande prikkel wordt verkeerd waargenomen), hallucinaties (waarneming zonder prikkel) en pseudohallucinaties (waarbij de persoon beseft dat het niet echt is). Ze kunnen alle zintuigen betreffen.</p>",
  "image_url": "",
  "wiki_title": "Perceptual disturbance",
  "match": "disperceptie|dispercepties|waarnemingsstoornis",
  "option_only": true
 },
 "dranggedachte": {
  "title": "Dranggedachte",
  "short": "Een dranggedachte is een sterk opdringerige gedachte of impuls die tot een handeling aanzet.",
  "definition": "<p>Een <strong>dranggedachte</strong> is een gedachte of impuls die zich opdringt en aanzet tot handelen, zoals een drang om iets te doen of te controleren. In de psychopathologie wordt het vaak in één adem genoemd met dwanggedachten (obsessies), die als ongewenst en angstwekkend worden ervaren en waarvan de persoon het onzinnige inziet.</p>",
  "image_url": "",
  "wiki_title": "Compulsive behavior",
  "match": "dranggedachte|dranggedachten",
  "option_only": true
 },
 "angststoornis": {
  "title": "Angststoornis",
  "short": "Een angststoornis kenmerkt zich door overmatige, aanhoudende angst of bezorgdheid die het functioneren beperkt.",
  "definition": "<p>Tot de <strong>angststoornissen</strong> behoren o.a. de paniekstoornis, agorafobie, sociale angststoornis, specifieke fobie en gegeneraliseerde angststoornis. Er zijn psychische (angst, piekeren) en lichamelijke klachten (hartkloppingen, benauwdheid, zweten) en vaak vermijdingsgedrag. Behandeling met cognitieve gedragstherapie (exposure) en/of SSRI's.</p>",
  "image_url": "",
  "wiki_title": "Anxiety disorder",
  "match": "angststoornis|angststoornissen",
  "option_only": true
 },
 "aanpassingsstoornis": {
  "title": "Aanpassingsstoornis",
  "short": "Een aanpassingsstoornis is een overmatige emotionele of gedragsmatige reactie op een duidelijke stressor, binnen drie maanden na die stressor.",
  "definition": "<p>Bij een <strong>aanpassingsstoornis</strong> ontstaan klachten zoals somberheid, angst of gedragsproblemen als reactie op een identificeerbare gebeurtenis (bijv. ziekte, scheiding, ontslag). De klachten zijn sterker dan te verwachten of beperken het functioneren, maar voldoen niet aan de criteria van een andere stoornis, en verdwijnen meestal binnen zes maanden nadat de stressor is weggevallen.</p>",
  "image_url": "",
  "wiki_title": "Adjustment disorder",
  "match": "aanpassingsstoornis",
  "option_only": true
 },
 "vermijdende persoonlijkheidsstoornis": {
  "title": "Vermijdende persoonlijkheidsstoornis",
  "short": "De vermijdende persoonlijkheidsstoornis kenmerkt zich door sociale geremdheid, gevoelens van tekortschieten en overgevoeligheid voor afwijzing.",
  "definition": "<p>Mensen met een <strong>vermijdende persoonlijkheidsstoornis</strong> (cluster C) willen graag contact, maar vermijden sociale situaties uit angst voor kritiek, afwijzing of schaamte. Ze zien zichzelf als sociaal onhandig of minderwaardig. Er is overlap met de sociale angststoornis.</p>",
  "image_url": "",
  "wiki_title": "Avoidant personality disorder",
  "match": "vermijdende persoonlijkheidsstoornis|ontwijkende persoonlijkheidsstoornis",
  "option_only": true
 },
 "autismespectrumstoornis": {
  "title": "Autismespectrumstoornis",
  "short": "Autismespectrumstoornis is een neurologische ontwikkelingsstoornis met beperkingen in sociale communicatie en beperkte, repetitieve gedragspatronen en interesses.",
  "definition": "<p>Bij een <strong>autismespectrumstoornis</strong> zijn er vanaf de vroege ontwikkeling problemen met sociaal-emotionele wederkerigheid, non-verbale communicatie en het aangaan van relaties, gecombineerd met stereotiep gedrag, star vasthouden aan routines, beperkte interesses en afwijkende reacties op zintuiglijke prikkels. Het verloop en de ernst variëren sterk; er is een grote erfelijke component.</p>",
  "image_url": "",
  "wiki_title": "Autism spectrum",
  "match": "autismespectrumstoornis|autisme|ass",
  "option_only": true
 },
 "adhd": {
  "title": "ADHD",
  "short": "ADHD is een ontwikkelingsstoornis met aandachtsproblemen en/of hyperactiviteit en impulsiviteit die in meerdere situaties optreden.",
  "definition": "<p>Bij <strong>ADHD</strong> beginnen de klachten vóór het twaalfde jaar en zijn ze aanwezig in meerdere omgevingen (thuis, school). Er is een overwegend onoplettend, een overwegend hyperactief-impulsief en een gecombineerd beeld. Er is een sterke erfelijke component. Behandeling bestaat uit psycho-educatie, gedragsmatige interventies en zo nodig medicatie zoals methylfenidaat.</p>",
  "image_url": "",
  "wiki_title": "Attention deficit hyperactivity disorder",
  "match": "adhd|aandachtstekortstoornis",
  "option_only": true
 },
 "slaapstoornis": {
  "title": "Slaapstoornis",
  "short": "Slaapstoornissen zijn problemen met de hoeveelheid, kwaliteit of timing van de slaap, of afwijkend gedrag tijdens de slaap.",
  "definition": "<p>Onder <strong>slaapstoornissen</strong> vallen o.a. insomnie (moeite met in- of doorslapen), hypersomnie en narcolepsie, slaapgerelateerde ademhalingsstoornissen (zoals obstructieve slaapapneu), circadiane ritmestoornissen en parasomnieën (bijv. slaapwandelen, REM-slaapgedragsstoornis). Slechte slaap gaat vaak samen met psychische en lichamelijke aandoeningen.</p>",
  "image_url": "",
  "wiki_title": "Sleep disorder",
  "match": "slaapstoornis|slaapstoornissen",
  "option_only": true
 },
 "spanningshoofdpijn": {
  "title": "Spanningshoofdpijn",
  "short": "Spanningshoofdpijn is een drukkende, dubbelzijdige hoofdpijn van lichte tot matige intensiteit, zonder misselijkheid.",
  "definition": "<p><strong>Spanningshoofdpijn</strong> is de meest voorkomende vorm van hoofdpijn. Ze voelt als een band of druk rond het hoofd, verergert niet bij lichamelijke inspanning en gaat niet gepaard met braken; licht- of geluidsovergevoeligheid komt hooguit één van beide voor. Ze kan episodisch of chronisch (≥15 dagen per maand) zijn. Overmatig pijnstillergebruik kan medicatie-overgebruikshoofdpijn geven.</p>",
  "image_url": "",
  "wiki_title": "Tension headache",
  "match": "spanningshoofdpijn|spanningstype hoofdpijn|episodische spanningshoofdpijn",
  "option_only": true
 },
 "migraine ophthalmique": {
  "title": "Migraine met visuele aura",
  "short": "Bij migraine met visuele aura gaan neurologische, meestal visuele verschijnselen (zoals flikkerende zigzaglijnen) aan de hoofdpijn vooraf.",
  "definition": "<p>Bij een <strong>visuele aura</strong> ziet iemand flikkerende lichtjes, zigzaglijnen (fortificatiespectrum) of een uitbreidende blinde vlek, die zich in 5–60 minuten ontwikkelen en weer verdwijnen. Men denkt dat een golf van depolarisatie over de cortex (cortical spreading depression) hieraan ten grondslag ligt. Daarna volgt meestal een migraineaanval, soms blijft de hoofdpijn weg.</p>",
  "image_url": "",
  "wiki_title": "Migraine",
  "match": "migraine ophthalmique|migraine met aura|oftalmische migraine",
  "option_only": true
 },
 "epileptische aanval": {
  "title": "Epileptische aanval",
  "short": "Een epileptische aanval is een kortdurende verandering in gedrag, bewustzijn of waarneming door een abnormale, overmatige ontlading van neuronen.",
  "definition": "<p>Een <strong>epileptische aanval</strong> kan focaal beginnen (in één hersengebied, met of zonder bewustzijnsdaling) of gegeneraliseerd zijn (bijv. tonisch-klonisch of absence). Een aanval kan uitgelokt worden (bijv. door hypoglykemie, alcoholonthouding of koorts bij jonge kinderen) of passen bij epilepsie. Een aanval die langer dan 5 minuten duurt wordt behandeld als status epilepticus.</p>",
  "image_url": "",
  "wiki_title": "Epileptic seizure",
  "match": "epileptische aanval|insult|epileptisch insult",
  "option_only": true
 },
 "sinustrombose": {
  "title": "Cerebrale sinustrombose",
  "short": "Bij een sinustrombose is een durale veneuze sinus afgesloten door een stolsel, met hoofdpijn en tekenen van verhoogde intracraniële druk.",
  "definition": "<p>Een <strong>cerebrale sinustrombose</strong> komt vaker voor bij jonge vrouwen, met risicofactoren als orale anticonceptie, zwangerschap en kraambed, trombofilie, infecties en dehydratie. Klachten zijn hoofdpijn (vaak progressief), papiloedeem, epileptische aanvallen, focale uitval en verminderd bewustzijn; veneuze infarcten zijn vaak hemorragisch. Diagnose met CT- of MR-venografie; behandeling met antistolling.</p>",
  "image_url": "",
  "wiki_title": "Cerebral venous sinus thrombosis",
  "match": "sinustrombose|cerebrale veneuze trombose|sinus trombose",
  "option_only": true
 },
 "herseninfarct": {
  "title": "Herseninfarct",
  "short": "Een herseninfarct ontstaat door afsluiting van een hersenarterie, waardoor hersenweefsel afsterft; het geeft plotselinge focale uitval.",
  "definition": "<p>Een <strong>herseninfarct</strong> wordt veroorzaakt door trombose (bijv. bij atherosclerose of kleine-vatenziekte) of embolie (vaak uit het hart bij boezemfibrilleren of uit de carotis). Klachten ontstaan plotseling, afhankelijk van het vaatgebied: halfzijdige verlamming, gevoelsstoornis, afasie, gezichtsvelduitval. Acute behandeling binnen het tijdvenster: intraveneuze trombolyse en/of trombectomie.</p>",
  "image_url": "",
  "wiki_title": "Ischemic stroke",
  "match": "herseninfarct|ischemisch cva|stroke (herseninfarct)|ischemisch herseninfarct",
  "option_only": true
 },
 "cva": {
  "title": "CVA (beroerte)",
  "short": "Een CVA (beroerte) is plotselinge neurologische uitval door een herseninfarct of hersenbloeding.",
  "definition": "<p>Een <strong>cerebrovasculair accident</strong> is in ongeveer 80% van de gevallen een herseninfarct en in de rest een hersenbloeding (intracerebraal of subarachnoïdaal). Beeldvorming (CT) is nodig om bloeding en infarct te onderscheiden, omdat de behandeling sterk verschilt. Belangrijke risicofactoren zijn hypertensie, roken, diabetes, hypercholesterolemie en boezemfibrilleren.</p>",
  "image_url": "",
  "wiki_title": "Stroke",
  "match": "cva|beroerte|cerebrovasculair accident|stroke",
  "option_only": true
 },
 "acusticusneurinoom": {
  "title": "Acusticusneurinoom (vestibulair schwannoom)",
  "short": "Een acusticusneurinoom is een goedaardige tumor van de Schwann-cellen van de n. vestibularis, in de inwendige gehoorgang of brughoek.",
  "definition": "<p>Een <strong>vestibulair schwannoom</strong> groeit langzaam vanuit de n. vestibularis (VIII). Klassiek begint het met eenzijdig, geleidelijk perceptief gehoorverlies en oorsuizen; grotere tumoren in de brughoek kunnen de n. facialis, n. trigeminus en het cerebellum en de hersenstam drukken. Dubbelzijdige schwannomen passen bij neurofibromatose type 2. Diagnose met MRI.</p>",
  "image_url": "",
  "wiki_title": "Vestibular schwannoma",
  "match": "acusticusneurinoom|vestibulair schwannoom|brughoektumor",
  "option_only": true
 },
 "hypofyse-adenoom": {
  "title": "Hypofyseadenoom",
  "short": "Een hypofyseadenoom is een goedaardige tumor van de hypofysevoorkwab, al dan niet hormoonproducerend.",
  "definition": "<p><strong>Hypofyseadenomen</strong> worden ingedeeld naar grootte (micro- &lt;1 cm, macroadenoom ≥1 cm) en naar hormoonproductie: o.a. prolactinoom, groeihormoon (acromegalie), ACTH (ziekte van Cushing) of niet-functionerend. Grote adenomen kunnen het chiasma opticum drukken (bitemporale hemianopsie) en uitval van andere hypofysehormonen geven.</p>",
  "image_url": "",
  "wiki_title": "Pituitary adenoma",
  "match": "hypofyse-adenoom|hypofyseadenoom|hypofysetumor",
  "option_only": true
 },
 "pilocytair astrocytoom": {
  "title": "Pilocytair astrocytoom",
  "short": "Een pilocytair astrocytoom is een goed begrensde, laaggradige (WHO graad 1) hersentumor, vooral bij kinderen en vaak in het cerebellum.",
  "definition": "<p>Het <strong>pilocytair astrocytoom</strong> komt vooral voor bij kinderen en jongvolwassenen, in het cerebellum, rond de n. opticus (vooral bij NF1) of de hersenstam. Op beeldvorming is het vaak een cyste met een aankleurende wandnodulus. Microscopisch zijn er langgerekte haarachtige cellen en Rosenthal-vezels. Complete resectie geeft een uitstekende prognose.</p>",
  "image_url": "",
  "wiki_title": "Pilocytic astrocytoma",
  "match": "pilocytair astrocytoom|pilocytisch astrocytoom",
  "option_only": true
 },
 "laaggradig glioom": {
  "title": "Laaggradig glioom",
  "short": "Een laaggradig glioom is een langzaam groeiende primaire hersentumor uitgaande van gliacellen (WHO graad 1–2).",
  "definition": "<p><strong>Laaggradige gliomen</strong> omvatten o.a. diffuse astrocytomen en oligodendrogliomen (vaak met een IDH-mutatie) bij volwassenen, en pilocytaire astrocytomen bij kinderen. Ze presenteren zich vaak met epileptische aanvallen. Diffuse vormen groeien infiltrerend en kunnen in de loop van jaren overgaan in een hooggradig glioom.</p>",
  "image_url": "",
  "wiki_title": "Glioma",
  "match": "laaggradig glioom|laaggradige glioom|low-grade glioom",
  "option_only": true
 },
 "streptococcus pyogenes": {
  "title": "Streptococcus pyogenes (groep A-streptokok)",
  "short": "Groep A-streptokok: grampositieve, bètahemolytische kok in ketens die o.a. keelontsteking, impetigo, erysipelas en roodvonk veroorzaakt.",
  "definition": "<p><strong><em>Streptococcus pyogenes</em></strong> koloniseert keel en huid. Het M-eiwit beschermt tegen fagocytose; pyrogene exotoxinen veroorzaken roodvonk en het toxischeshocksyndroom. Invasieve infecties zijn o.a. cellulitis en necrotiserende fasciitis. Na een infectie kunnen immunologische complicaties optreden: acuut reuma en poststreptokokken-glomerulonefritis. Penicilline is eerste keus.</p>",
  "image_url": "",
  "wiki_title": "Streptococcus pyogenes",
  "match": "streptococcus pyogenes|s. pyogenes|groep a-streptokok|groep a streptokok|groep-a-streptokokken",
  "option_only": true
 },
 "enterokokken": {
  "title": "Enterokokken",
  "short": "Enterokokken zijn grampositieve kokken uit de darmflora die van nature resistent zijn tegen cefalosporines.",
  "definition": "<p><strong>Enterokokken</strong> (vooral <em>E. faecalis</em> en <em>E. faecium</em>) zijn grampositieve kokken in paren of korte ketens. Ze veroorzaken urineweginfecties, wondinfecties, intra-abdominale infecties en endocarditis, vaak in het ziekenhuis. Ze zijn intrinsiek ongevoelig voor cefalosporines; amoxicilline werkt meestal tegen <em>E. faecalis</em>. Vancomycineresistente stammen (VRE) zijn een ziekenhuishygiëneprobleem.</p>",
  "image_url": "",
  "wiki_title": "Enterococcus",
  "match": "enterokokken|enterococcus|enterococcus faecalis|enterococcus faecium",
  "option_only": true
 },
 "neisseria meningitidis": {
  "title": "Neisseria meningitidis (meningokok)",
  "short": "De meningokok is een gramnegatieve diplokok die meningitis en een snel fataal verlopende sepsis met petechiën kan veroorzaken.",
  "definition": "<p><strong><em>Neisseria meningitidis</em></strong> koloniseert de nasofarynx en wordt via druppels overgedragen. Het kapsel en endotoxine (LOS) maken hem zeer virulent. Een invasieve infectie geeft meningitis en/of een fulminante sepsis met petechiën en purpura (soms met bijnierbloedingen). Er wordt gevaccineerd tegen serogroepen ACWY en B; contacten krijgen profylaxe.</p>",
  "image_url": "",
  "wiki_title": "Neisseria meningitidis",
  "match": "neisseria meningitidis|meningokok|meningokokken",
  "option_only": true
 },
 "listeria monocytogenes": {
  "title": "Listeria monocytogenes",
  "short": "Listeria is een grampositieve staaf die via voedsel wordt opgelopen en vooral bij zwangeren, pasgeborenen, ouderen en afweergestoorden infecties geeft.",
  "definition": "<p><strong><em>Listeria monocytogenes</em></strong> kan groeien bij koelkasttemperatuur en komt voor in rauwmelkse kaas, paté en gerookte vis. Hij groeit intracellulair en verspreidt zich van cel tot cel via actinestaarten. Infecties: meningitis en sepsis, en bij zwangeren risico op miskraam of neonatale infectie. Cefalosporines werken niet; amoxicilline wel.</p>",
  "image_url": "",
  "wiki_title": "Listeria monocytogenes",
  "match": "listeria monocytogenes|listeria",
  "option_only": true
 },
 "legionella pneumophila": {
  "title": "Legionella pneumophila",
  "short": "Legionella is een gramnegatieve staaf uit warm water die een ernstige (atypische) pneumonie kan veroorzaken: de veteranenziekte.",
  "definition": "<p><strong><em>Legionella pneumophila</em></strong> groeit in warmwatersystemen, koeltorens en bubbelbaden en wordt via aerosolen ingeademd; er is geen overdracht van mens op mens. Risicofactoren zijn hogere leeftijd, roken en immuunsuppressie. Naast pneumonie kunnen diarree, verwardheid en hyponatriëmie optreden. Diagnose met de urine-antigeentest; bètalactamantibiotica werken niet, macroliden en chinolonen wel.</p>",
  "image_url": "",
  "wiki_title": "Legionella pneumophila",
  "match": "legionella pneumophila|legionella|veteranenziekte",
  "option_only": true
 },
 "mycoplasma pneumoniae": {
  "title": "Mycoplasma pneumoniae",
  "short": "Mycoplasma pneumoniae is een bacterie zonder celwand die bij jongeren een ‘atypische’ pneumonie veroorzaakt.",
  "definition": "<p><strong><em>Mycoplasma pneumoniae</em></strong> heeft geen peptidoglycaanwand en is daardoor ongevoelig voor bètalactamantibiotica en niet zichtbaar met een gramkleuring. Het veroorzaakt vooral bij schoolkinderen en jongvolwassenen een geleidelijk beginnende luchtweginfectie met droge hoest. Er kunnen koude agglutininen (hemolyse) en extrapulmonale verschijnselen optreden. Behandeling met macroliden of doxycycline.</p>",
  "image_url": "",
  "wiki_title": "Mycoplasma pneumoniae",
  "match": "mycoplasma pneumoniae|mycoplasma",
  "option_only": true
 },
 "chlamydia pneumoniae": {
  "title": "Chlamydia pneumoniae",
  "short": "Chlamydia pneumoniae is een obligaat intracellulaire bacterie die milde luchtweginfecties en atypische pneumonie veroorzaakt.",
  "definition": "<p><strong><em>Chlamydia pneumoniae</em></strong> wordt via druppels overgedragen en veroorzaakt faryngitis, sinusitis, bronchitis en een meestal milde atypische pneumonie. Omdat de bacterie intracellulair leeft, werken bètalactamantibiotica niet; doxycycline of macroliden wel.</p>",
  "image_url": "",
  "wiki_title": "Chlamydia pneumoniae",
  "match": "chlamydia pneumoniae|chlamydophila pneumoniae",
  "option_only": true
 },
 "salmonella enteritidis": {
  "title": "Salmonella enteritidis",
  "short": "Salmonella enteritidis is een gramnegatieve staaf die via besmette eieren en kip een voedselinfectie met diarree en koorts veroorzaakt.",
  "definition": "<p>Niet-tyfeuze <strong>salmonellae</strong> zoals <em>S. enteritidis</em> komen via onvoldoende verhitte eieren, kip of besmet voedsel binnen. Na 6–72 uur ontstaan koorts, buikkrampen en diarree, meestal zelflimiterend. Bij zuigelingen, ouderen, afweergestoorden en mensen met vaatprothesen kan bacteriëmie optreden. Antibiotica zijn meestal niet nodig.</p>",
  "image_url": "",
  "wiki_title": "Salmonella enterica",
  "match": "salmonella enteritidis|salmonella|salmonellose",
  "option_only": true
 },
 "campylobacter jejuni": {
  "title": "Campylobacter jejuni",
  "short": "Campylobacter jejuni is een gekromde gramnegatieve staaf en een belangrijke oorzaak van bacteriële gastro-enteritis, vaak via kip.",
  "definition": "<p><strong><em>Campylobacter jejuni</em></strong> wordt opgelopen via onvoldoende verhit gevogelte, rauwe melk of besmet water. Het geeft koorts, buikkrampen en (soms bloederige) diarree. Een bekende late complicatie is het syndroom van Guillain-Barré, door kruisreactie van antistoffen met gangliosiden in zenuwen; ook reactieve artritis komt voor.</p>",
  "image_url": "",
  "wiki_title": "Campylobacter jejuni",
  "match": "campylobacter jejuni|campylobacter",
  "option_only": true
 },
 "yersinia enterocolitica": {
  "title": "Yersinia enterocolitica",
  "short": "Yersinia enterocolitica is een gramnegatieve staaf die via varkensvlees een enterocolitis kan veroorzaken die appendicitis kan nabootsen.",
  "definition": "<p><strong><em>Yersinia enterocolitica</em></strong> groeit ook bij lage temperatuur. Infectie geeft koorts, diarree en buikpijn; door ontsteking van het terminale ileum en de mesenteriale lymfeklieren kan het beeld lijken op appendicitis (pseudo-appendicitis). Na infectie kunnen reactieve artritis en erythema nodosum ontstaan, vooral bij HLA-B27-dragers. IJzerstapeling (hemochromatose) is een risicofactor voor ernstige infectie.</p>",
  "image_url": "",
  "wiki_title": "Yersinia enterocolitica",
  "match": "yersinia enterocolitica|yersinia",
  "option_only": true
 },
 "enterotoxigene escherichia coli": {
  "title": "Enterotoxigene E. coli (ETEC)",
  "short": "ETEC is een E. coli-variant die met toxines waterige diarree veroorzaakt; de belangrijkste oorzaak van reizigersdiarree.",
  "definition": "<p><strong>ETEC</strong> hecht zich aan het dunnedarmepitheel en maakt een hitte-labiel toxine (verwant aan choleratoxine, verhoogt cAMP) en/of een hitte-stabiel toxine (verhoogt cGMP). Daardoor worden chloride en water de darm in gepompt: secretoire, waterige diarree zonder bloed of koorts. Besmetting via voedsel en water; behandeling vooral met vocht en zouten.</p>",
  "image_url": "",
  "wiki_title": "Enterotoxigenic Escherichia coli",
  "match": "enterotoxigene escherichia coli|etec|enterotoxigene e. coli",
  "option_only": true
 },
 "reizigersdiarree": {
  "title": "Reizigersdiarree",
  "short": "Reizigersdiarree is diarree die optreedt tijdens of kort na een reis, meestal door besmet voedsel of water.",
  "definition": "<p><strong>Reizigersdiarree</strong> wordt meestal veroorzaakt door bacteriën, met enterotoxigene <em>E. coli</em> als belangrijkste verwekker; daarnaast <em>Campylobacter</em>, <em>Shigella</em>, <em>Salmonella</em>, virussen en parasieten zoals <em>Giardia</em>. Het is meestal zelflimiterend binnen enkele dagen. De basis van de behandeling is het aanvullen van vocht en zouten (ORS).</p>",
  "image_url": "",
  "wiki_title": "Travelers' diarrhea",
  "match": "reizigersdiarree",
  "option_only": true
 },
 "clostridium difficile": {
  "title": "Clostridioides difficile",
  "short": "C. difficile is een sporenvormende anaerobe staaf die na antibioticagebruik een toxine-gemedieerde colitis kan veroorzaken.",
  "definition": "<p><strong><em>Clostridioides difficile</em></strong> kan het colon koloniseren als de normale flora door antibiotica is verstoord. Toxine A en B beschadigen het colonepitheel, met waterige diarree, buikpijn en in ernstige gevallen pseudomembraneuze colitis of toxisch megacolon. De sporen zijn resistent tegen alcohol, dus handen wassen met zeep is nodig. Behandeling: vancomycine of fidaxomicine oraal.</p>",
  "image_url": "",
  "wiki_title": "Clostridioides difficile infection",
  "match": "clostridium difficile|clostridioides difficile|c. difficile",
  "option_only": true
 },
 "bacteroides fragilis": {
  "title": "Bacteroides fragilis",
  "short": "Bacteroides fragilis is een gramnegatieve anaerobe staaf uit de darmflora en een belangrijke verwekker van buikabcessen.",
  "definition": "<p><strong><em>Bacteroides fragilis</em></strong> is een van de talrijkste anaeroben in het colon. Bij perforatie of darmchirurgie kan hij in de buikholte terechtkomen en (met andere bacteriën) abcessen en peritonitis veroorzaken; het kapsel bevordert abcesvorming. Hij maakt vaak bètalactamase; metronidazol, amoxicilline-clavulaanzuur en carbapenems werken wel.</p>",
  "image_url": "",
  "wiki_title": "Bacteroides fragilis",
  "match": "bacteroides fragilis|bacteroides",
  "option_only": true
 },
 "lactobacillus spp": {
  "title": "Lactobacillus",
  "short": "Lactobacillen zijn grampositieve staafjes die melkzuur maken; ze domineren de gezonde vaginale flora en komen voor in darm en gefermenteerd voedsel.",
  "definition": "<p><strong>Lactobacillen</strong> fermenteren suikers tot melkzuur. In de vagina houden ze (onder invloed van oestrogeen en glycogeen) de pH laag, wat beschermt tegen ziekteverwekkers; afname ervan leidt tot bacteriële vaginose. Ze worden ook gebruikt in yoghurt en probiotica en zijn zelden ziekteverwekkend.</p>",
  "image_url": "",
  "wiki_title": "Lactobacillus",
  "match": "lactobacillus spp|lactobacillus|lactobacillen|melkzuurbacteriën",
  "option_only": true
 },
 "treponema pallidum": {
  "title": "Treponema pallidum",
  "short": "Treponema pallidum is de spirocheet die syfilis veroorzaakt.",
  "definition": "<p><strong><em>Treponema pallidum</em></strong> is een dunne, spiraalvormige bacterie die niet te kweken is en niet zichtbaar is met een gramkleuring. Ze wordt seksueel en via de placenta overgedragen. Diagnostiek gebeurt meestal serologisch (treponemale en non-treponemale tests) of met PCR uit een ulcus. Penicilline blijft het middel van keus.</p>",
  "image_url": "",
  "wiki_title": "Treponema pallidum",
  "match": "treponema pallidum|treponema",
  "option_only": true
 },
 "syfilis": {
  "title": "Syfilis (lues)",
  "short": "Syfilis is een seksueel overdraagbare infectie door Treponema pallidum, die in stadia verloopt.",
  "definition": "<p><strong>Syfilis</strong> begint (primair) met een pijnloos ulcus (sjanker) op de plek van besmetting. Weken later volgt het secundaire stadium met huiduitslag (ook op handpalmen en voetzolen), condylomata lata en algemene klachten. Na een latente fase kan na jaren tertiaire syfilis ontstaan (gummata, cardiovasculaire en neurosyfilis). Congenitale syfilis wordt voorkomen door screening in de zwangerschap.</p>",
  "image_url": "",
  "wiki_title": "Syphilis",
  "match": "syfilis|lues|syphilis",
  "option_only": true
 },
 "leptospira spp": {
  "title": "Leptospira (ziekte van Weil)",
  "short": "Leptospira zijn spirocheten die via urine van ratten en vee in water terechtkomen en leptospirose veroorzaken.",
  "definition": "<p><strong>Leptospirose</strong> wordt opgelopen via contact met besmet oppervlaktewater of dierenurine, via huidwondjes of slijmvliezen. Het begint met koorts, hoofdpijn en spierpijn (vooral kuiten) en conjunctivale roodheid. Een ernstige vorm (ziekte van Weil) geeft icterus, nierfalen en bloedingen. Behandeling met doxycycline of penicilline.</p>",
  "image_url": "",
  "wiki_title": "Leptospirosis",
  "match": "leptospira spp|leptospira|leptospirose|ziekte van weil",
  "option_only": true
 },
 "cryptococcus neoformans": {
  "title": "Cryptococcus neoformans",
  "short": "Cryptococcus neoformans is een gist met een dik kapsel die vooral bij afweergestoorden (hiv) meningitis veroorzaakt.",
  "definition": "<p><strong><em>Cryptococcus neoformans</em></strong> komt voor in duivenpoep en grond en wordt ingeademd. Bij patiënten met een sterk verminderde cellulaire afweer verspreidt hij zich naar het CZS en veroorzaakt een subacute meningitis met hoofdpijn en verhoogde liquordruk. Diagnose met antigeentest in serum of liquor (vroeger Oost-Indische-inktkleuring); behandeling met amfotericine B en flucytosine.</p>",
  "image_url": "",
  "wiki_title": "Cryptococcus neoformans",
  "match": "cryptococcus neoformans|cryptococcus|cryptococcose",
  "option_only": true
 },
 "aspergillus fumigatus": {
  "title": "Aspergillus fumigatus",
  "short": "Aspergillus fumigatus is een schimmel waarvan de sporen overal in de lucht zijn; bij neutropenie kan hij een invasieve longinfectie geven.",
  "definition": "<p><strong><em>Aspergillus</em></strong> kan verschillende ziektebeelden geven: allergische bronchopulmonale aspergillose (bij astma en CF), een aspergilloom (schimmelbal in een bestaande holte) en invasieve aspergillose bij ernstig afweergestoorde patiënten, met invasie van bloedvaten. Diagnostiek met CT, galactomannan en kweek; behandeling met voriconazol.</p>",
  "image_url": "",
  "wiki_title": "Aspergillus fumigatus",
  "match": "aspergillus fumigatus|aspergillus|aspergillose",
  "option_only": true
 },
 "epstein-barrvirus": {
  "title": "Epstein-Barrvirus (EBV)",
  "short": "EBV is een herpesvirus dat B-cellen infecteert; het veroorzaakt de ziekte van Pfeiffer en is geassocieerd met enkele kankers.",
  "definition": "<p>Het <strong>Epstein-Barrvirus</strong> wordt via speeksel overgedragen. Op jonge leeftijd verloopt infectie vaak ongemerkt; bij adolescenten geeft het vaak mononucleosis infectiosa. Het virus blijft levenslang latent in B-cellen. EBV is geassocieerd met o.a. het Burkittlymfoom, het nasofarynxcarcinoom, sommige Hodgkinlymfomen en posttransplantatie-lymfoproliferatieve ziekte.</p>",
  "image_url": "",
  "wiki_title": "Epstein–Barr virus",
  "match": "epstein-barrvirus|epstein-barrvirus (ebv)|ebv|epstein-barr virus",
  "option_only": true
 },
 "varicella-zostervirus": {
  "title": "Varicella-zostervirus (VZV)",
  "short": "Het varicella-zostervirus veroorzaakt waterpokken en blijft daarna latent in sensibele ganglia, van waaruit het als gordelroos kan reactiveren.",
  "definition": "<p>Het <strong>varicella-zostervirus</strong> (HHV-3) is zeer besmettelijk via aerosolen en blaasjesvocht. De primaire infectie, <em>waterpokken</em>, geeft koorts en jeukende blaasjes in verschillende stadia tegelijk. Het virus nestelt zich in sensibele ganglia; reactivatie geeft <em>herpes zoster</em>. Gevaarlijk is infectie bij zwangeren, pasgeborenen en afweergestoorden (pneumonie, encefalitis).</p>",
  "image_url": "",
  "wiki_title": "Varicella zoster virus",
  "match": "varicella-zostervirus|varicella zoster|varicella zostervirus (vzv)|vzv|waterpokken|varicella",
  "option_only": true
 },
 "herpes simplexvirus": {
  "title": "Herpes simplexvirus (HSV)",
  "short": "Het herpes simplexvirus veroorzaakt blaasjes op huid en slijmvliezen en blijft daarna latent in sensibele ganglia.",
  "definition": "<p>Er zijn twee typen: <strong>HSV-1</strong> (vooral oraal, koortslip, gingivostomatitis) en <strong>HSV-2</strong> (vooral genitaal), al overlappen ze. Na de primaire infectie blijft het virus latent in sensibele ganglia en kan het reactiveren. Ernstige vormen zijn herpesencefalitis, keratitis, eczema herpeticum en neonatale herpes. Behandeling met (val)aciclovir.</p>",
  "image_url": "",
  "wiki_title": "Herpes simplex virus",
  "match": "herpes simplexvirus|herpes simplex|hsv|hsv-1|hsv-2",
  "option_only": true
 },
 "herpes genitalis": {
  "title": "Herpes genitalis",
  "short": "Herpes genitalis is een seksueel overdraagbare infectie met HSV-2 of HSV-1, met pijnlijke blaasjes en zweertjes in het genitale gebied.",
  "definition": "<p>Bij <strong>herpes genitalis</strong> ontstaan na besmetting pijnlijke groepjes blaasjes die openbreken tot oppervlakkige ulcera, vaak met koorts, pijn bij het plassen en vergrote lieslymfeklieren. Het virus blijft latent in de sacrale ganglia en kan recidiveren. Een primaire infectie rond de bevalling geeft een groot risico op neonatale herpes.</p>",
  "image_url": "",
  "wiki_title": "Genital herpes",
  "match": "herpes genitalis|genitale herpes",
  "option_only": true
 },
 "humaan papillomavirus (hpv)": {
  "title": "Humaan papillomavirus (HPV)",
  "short": "HPV is een DNA-virus dat wratten veroorzaakt; hoog-risicotypes (o.a. 16 en 18) veroorzaken baarmoederhalskanker en andere kankers.",
  "definition": "<p>Het <strong>humaan papillomavirus</strong> infecteert basale cellen van huid en slijmvlies. Laag-risicotypes (6, 11) geven wratten en condylomata acuminata. Hoog-risicotypes maken de eiwitten E6 en E7, die p53 en Rb uitschakelen; persisterende infectie kan leiden tot cervixcarcinoom en kankers van anus, vulva, penis en orofarynx. Er is een vaccin en een bevolkingsonderzoek met hrHPV-test.</p>",
  "image_url": "",
  "wiki_title": "Human papillomavirus infection",
  "match": "humaan papillomavirus (hpv)|hpv|humaan papillomavirus",
  "option_only": true
 },
 "hiv": {
  "title": "Hiv (humaan immunodeficiëntievirus)",
  "short": "Hiv is een retrovirus dat CD4-T-helpercellen infecteert; zonder behandeling ontstaat aids.",
  "definition": "<p><strong>Hiv</strong> bindt met gp120 aan CD4 en een co-receptor (CCR5 of CXCR4), schrijft zijn RNA via reverse transcriptase om naar DNA en bouwt dat in het genoom in. Het aantal CD4-cellen daalt geleidelijk; onder ±200/µl ontstaan opportunistische infecties en tumoren (aids). Overdracht via seks, bloed en van moeder op kind. Combinatietherapie (cART) onderdrukt het virus volledig.</p>",
  "image_url": "",
  "wiki_title": "HIV",
  "match": "hiv|humaan immunodeficiëntievirus|aids",
  "option_only": true
 },
 "hepatitis c": {
  "title": "Hepatitis C",
  "short": "Hepatitis C is een via bloed overgedragen RNA-virus dat vaak chronisch wordt en tot cirrose en levercelkanker kan leiden.",
  "definition": "<p>Het <strong>hepatitis C-virus</strong> (flavivirus) wordt vooral via bloed overgedragen (drugsgebruik met naalden, vroeger transfusies). Een acute infectie verloopt meestal zonder klachten, maar wordt in de meerderheid chronisch. Na jaren kunnen fibrose, cirrose en hepatocellulair carcinoom ontstaan. Er is geen vaccin, maar direct werkende antivirale middelen genezen de infectie in vrijwel alle gevallen.</p>",
  "image_url": "",
  "wiki_title": "Hepatitis C",
  "match": "hepatitis c|hcv|hepatitis c-virus",
  "option_only": true
 },
 "hepatitis d": {
  "title": "Hepatitis D",
  "short": "Hepatitis D is een defect virus dat alleen samen met hepatitis B kan vermenigvuldigen en een ernstiger leverziekte geeft.",
  "definition": "<p>Het <strong>hepatitis D-virus</strong> heeft het oppervlakte-antigeen van hepatitis B (HBsAg) nodig voor zijn envelop. Het kan dus alleen tegelijk met HBV (co-infectie) of bij iemand met chronische HBV (superinfectie) voorkomen. Superinfectie leidt vaak tot snel progressieve leverziekte. Vaccinatie tegen hepatitis B beschermt ook tegen hepatitis D.</p>",
  "image_url": "",
  "wiki_title": "Hepatitis D",
  "match": "hepatitis d|hdv|deltahepatitis",
  "option_only": true
 },
 "rotavirus": {
  "title": "Rotavirus",
  "short": "Rotavirus is een dubbelstrengs RNA-virus dat bij jonge kinderen een ernstige gastro-enteritis met braken en waterige diarree veroorzaakt.",
  "definition": "<p><strong>Rotavirus</strong> wordt fecaal-oraal overgedragen en beschadigt de villi van de dunne darm. Vooral kinderen onder de 2 jaar krijgen koorts, braken en waterige diarree, met risico op uitdroging. Er bestaat een oraal levend vaccin, inmiddels opgenomen in het Rijksvaccinatieprogramma.</p>",
  "image_url": "",
  "wiki_title": "Rotavirus",
  "match": "rotavirus",
  "option_only": true
 },
 "rhinovirus": {
  "title": "Rhinovirus",
  "short": "Rhinovirussen zijn de belangrijkste verwekkers van de gewone verkoudheid.",
  "definition": "<p><strong>Rhinovirussen</strong> zijn kleine, niet-omhulde RNA-virussen (picornavirussen) met meer dan 100 serotypes, waardoor je er steeds opnieuw verkouden van kunt worden. Ze vermenigvuldigen zich het best bij de iets lagere temperatuur in de neus. Ze kunnen ook astma- en COPD-exacerbaties uitlokken.</p>",
  "image_url": "",
  "wiki_title": "Rhinovirus",
  "match": "rhinovirus|rhinovirussen",
  "option_only": true
 },
 "enterovirus": {
  "title": "Enterovirussen",
  "short": "Enterovirussen zijn niet-omhulde RNA-virussen die via de darm binnenkomen en o.a. hand-voet-mondziekte, virale meningitis en polio kunnen veroorzaken.",
  "definition": "<p>Tot de <strong>enterovirussen</strong> horen o.a. poliovirus, coxsackievirussen, echovirussen en enterovirus D68 en A71. Ze worden fecaal-oraal en via druppels overgedragen, met een piek in zomer en najaar. Infecties zijn vaak mild, maar kunnen meningitis, myocarditis, hand-voet-mondziekte en (zelden) verlammingen geven.</p>",
  "image_url": "",
  "wiki_title": "Enterovirus",
  "match": "enterovirus|enterovirussen",
  "option_only": true
 },
 "virale meningitis": {
  "title": "Virale meningitis",
  "short": "Virale meningitis is een ontsteking van de hersenvliezen door een virus; meestal milder dan bacteriële meningitis.",
  "definition": "<p><strong>Virale meningitis</strong> wordt vaak veroorzaakt door enterovirussen, daarnaast o.a. door HSV-2 en VZV. Er zijn hoofdpijn, koorts, nekstijfheid en lichtschuwheid, meestal zonder verlaagd bewustzijn. Liquor toont een lymfocytaire pleiocytose met normaal glucose en licht verhoogd eiwit. Het beloop is meestal goedaardig.</p>",
  "image_url": "",
  "wiki_title": "Viral meningitis",
  "match": "virale meningitis|aseptische meningitis",
  "option_only": true
 },
 "tuberculeuze meningitis": {
  "title": "Tuberculeuze meningitis",
  "short": "Tuberculeuze meningitis is een subacuut verlopende hersenvliesontsteking door Mycobacterium tuberculosis.",
  "definition": "<p>Bij <strong>tuberculeuze meningitis</strong> ontstaan in dagen tot weken hoofdpijn, koorts, gedragsverandering en uitval van hersenzenuwen, vooral door ontsteking aan de schedelbasis. De liquor toont lymfocyten, een sterk verhoogd eiwit en een verlaagd glucose. Complicaties zijn hydrocephalus en infarcten. Behandeling met tuberculostatica en dexamethason.</p>",
  "image_url": "",
  "wiki_title": "Tuberculous meningitis",
  "match": "tuberculeuze meningitis|tbc-meningitis",
  "option_only": true
 },
 "neuroborreliose": {
  "title": "Neuroborreliose",
  "short": "Neuroborreliose is een uiting van de ziekte van Lyme in het zenuwstelsel, met o.a. radiculitis, facialisparese en meningitis.",
  "definition": "<p>Bij <strong>neuroborreliose</strong> verspreidt <em>Borrelia burgdorferi</em> zich naar het zenuwstelsel, weken tot maanden na een tekenbeet. Typisch zijn hevige, ’s nachts verergerende radiculaire pijn (meningoradiculitis, syndroom van Bannwarth), een (soms dubbelzijdige) perifere facialisparese en lymfocytaire meningitis. Diagnose via liquoronderzoek; behandeling met doxycycline of ceftriaxon.</p>",
  "image_url": "",
  "wiki_title": "Lyme neuroborreliosis",
  "match": "neuroborreliose|lyme-neuroborreliose",
  "option_only": true
 },
 "toxoplasmose": {
  "title": "Toxoplasmose",
  "short": "Toxoplasmose is een infectie met de parasiet Toxoplasma gondii, opgelopen via kattenpoep of onvoldoende verhit vlees.",
  "definition": "<p><strong><em>Toxoplasma gondii</em></strong> heeft de kat als eindgastheer. Bij gezonde mensen verloopt infectie meestal ongemerkt of als een mononucleose-achtig beeld. Bij een eerste infectie in de zwangerschap kan de parasiet de foetus infecteren (chorioretinitis, hydrocephalus, intracraniële verkalkingen). Bij afweergestoorden kan reactivatie toxoplasma-encefalitis geven.</p>",
  "image_url": "",
  "wiki_title": "Toxoplasmosis",
  "match": "toxoplasmose|toxoplasma gondii|toxoplasma",
  "option_only": true
 },
 "giardiasis": {
  "title": "Giardiasis",
  "short": "Giardiasis is een darminfectie met de protozo Giardia lamblia, met langdurige diarree, opgeblazen gevoel en vetrijke ontlasting.",
  "definition": "<p><strong><em>Giardia lamblia</em></strong> wordt via cysten in besmet water of voedsel opgelopen. De trofozoïeten hechten aan het dunnedarmepitheel zonder het te binnendringen. Klachten: waterige, vettige, stinkende ontlasting, buikkrampen, winderigheid en gewichtsverlies, soms wekenlang. Diagnose met PCR of microscopie van ontlasting; behandeling met metronidazol of tinidazol.</p>",
  "image_url": "",
  "wiki_title": "Giardiasis",
  "match": "giardiasis|giardia lamblia|giardia",
  "option_only": true
 },
 "strongyloidiasis": {
  "title": "Strongyloidiasis",
  "short": "Strongyloidiasis is een infectie met de draadworm Strongyloides stercoralis, die zich in de mens kan blijven vermenigvuldigen.",
  "definition": "<p>Larven van <strong><em>Strongyloides stercoralis</em></strong> dringen via de huid binnen (blootsvoets lopen in de tropen), reizen via de longen naar de darm en kunnen de mens opnieuw infecteren (auto-infectie), waardoor infecties decennia kunnen blijven bestaan. Vaak zijn er weinig klachten en eosinofilie. Bij immuunsuppressie (vooral corticosteroïden) kan een levensbedreigende hyperinfectie ontstaan. Behandeling met ivermectine.</p>",
  "image_url": "",
  "wiki_title": "Strongyloidiasis",
  "match": "strongyloidiasis|strongyloides stercoralis|strongyloides",
  "option_only": true
 },
 "leishmaniasis": {
  "title": "Leishmaniasis",
  "short": "Leishmaniasis is een parasitaire infectie door Leishmania, overgebracht door zandvliegen, met huidzweren of een ernstige viscerale vorm.",
  "definition": "<p>Bij <strong>cutane leishmaniasis</strong> ontstaat op de plek van de beet een langzaam groeiende, pijnloze zweer. Bij <strong>viscerale leishmaniasis</strong> (kala-azar) infecteert de parasiet macrofagen in milt, lever en beenmerg, met koorts, sterke splenomegalie, pancytopenie en gewichtsverlies; onbehandeld is dit dodelijk. Komt voor rond de Middellandse Zee, Afrika, Azië en Zuid-Amerika.</p>",
  "image_url": "",
  "wiki_title": "Leishmaniasis",
  "match": "leishmaniasis|leishmania",
  "option_only": true
 },
 "dengue": {
  "title": "Dengue (knokkelkoorts)",
  "short": "Dengue is een door Aedes-muggen overgebrachte virusinfectie met hoge koorts, hevige spier- en gewrichtspijn en huiduitslag.",
  "definition": "<p><strong>Dengue</strong> wordt veroorzaakt door een flavivirus met vier serotypes. Na een paar dagen incubatie volgen hoge koorts, hoofdpijn achter de ogen, spier- en gewrichtspijn en een rash. Een tweede infectie met een ander serotype geeft een groter risico op ernstige dengue met plasmalekkage, bloedingen en shock (door antistof-afhankelijke versterking). Behandeling is ondersteunend; NSAID's worden vermeden.</p>",
  "image_url": "",
  "wiki_title": "Dengue fever",
  "match": "dengue|knokkelkoorts|denguevirus",
  "option_only": true
 },
 "ebola": {
  "title": "Ebola",
  "short": "Ebola is een zeer ernstige virale hemorragische koorts, overgedragen via lichaamsvloeistoffen van besmette mensen of dieren.",
  "definition": "<p>Het <strong>ebolavirus</strong> is een filovirus. Na 2–21 dagen ontstaan koorts, zwakte, spierpijn, braken en diarree; in een deel van de gevallen volgen bloedingen en multi-orgaanfalen. De sterfte is hoog. Overdracht gebeurt via direct contact met bloed en lichaamsvloeistoffen, ook van overledenen; strikte isolatie is nodig. Er is inmiddels een vaccin tegen het Zaïre-type.</p>",
  "image_url": "",
  "wiki_title": "Ebola",
  "match": "ebola|ebolavirus|ebolakoorts",
  "option_only": true
 },
 "rabies": {
  "title": "Rabiës (hondsdolheid)",
  "short": "Rabiës is een vrijwel altijd dodelijke virale encefalitis, overgedragen via beten of krabben van besmette zoogdieren.",
  "definition": "<p>Het <strong>rabiësvirus</strong> reist via perifere zenuwen naar het centrale zenuwstelsel; de incubatietijd varieert van weken tot maanden. Zodra klachten optreden (agitatie, hydrofobie, verlammingen) is de ziekte vrijwel altijd fataal. Na een risicovolle beet is direct wondverzorging en postexpositieprofylaxe (vaccinatie, zo nodig met immunoglobuline) nodig.</p>",
  "image_url": "",
  "wiki_title": "Rabies",
  "match": "rabies|rabiës|hondsdolheid",
  "option_only": true
 },
 "roodvonk": {
  "title": "Roodvonk (scarlatina)",
  "short": "Roodvonk is een infectie met groep A-streptokokken die een toxine maken, met keelpijn, koorts, een fijnvlekkige rash en een frambozentong.",
  "definition": "<p>Bij <strong>roodvonk</strong> veroorzaken pyrogene exotoxinen van <em>Streptococcus pyogenes</em> een ruwe, fijnpapuleuze rode huiduitslag (schuurpapiergevoel), vooral in de plooien, met bleke huid rond de mond en een aardbeien- of frambozentong. Daarna schilfert de huid, vooral aan handen en voeten. Het komt vooral voor bij kinderen van 3–10 jaar; behandeling met penicilline.</p>",
  "image_url": "",
  "wiki_title": "Scarlet fever",
  "match": "roodvonk|scarlatina",
  "option_only": true
 },
 "pediculosis": {
  "title": "Pediculosis (luizen)",
  "short": "Pediculosis is besmetting met luizen, zoals hoofdluis, met jeuk en neten aan de haren.",
  "definition": "<p>Bij <strong>pediculosis capitis</strong> leven hoofdluizen op de hoofdhuid en zuigen ze bloed; de eitjes (neten) worden vlak bij de hoofdhuid aan de haren vastgeplakt. De jeuk komt door een overgevoeligheidsreactie op het speeksel. Overdracht gaat via direct hoofd-hoofdcontact. Behandeling: kammen met een netenkam, eventueel met dimeticon. Kleerluizen kunnen ziekten zoals vlektyfus overbrengen.</p>",
  "image_url": "",
  "wiki_title": "Head louse",
  "match": "pediculosis|hoofdluis|luizen|pediculosis capitis",
  "option_only": true
 },
 "scabiës": {
  "title": "Scabiës (schurft)",
  "short": "Scabiës is een besmettelijke huidaandoening door de mijt Sarcoptes scabiei, met hevige nachtelijke jeuk en gangetjes in de huid.",
  "definition": "<p>Bij <strong>scabiës</strong> graaft de vrouwtjesmijt gangetjes in de hoornlaag, vooral tussen de vingers, aan de polsen, oksels, genitaliën en rond de navel. De jeuk (vooral ’s nachts en bij warmte) ontstaat door een allergische reactie en begint pas na enkele weken. Overdracht via langdurig huidcontact. Behandeling met permetrinecrème of ivermectine, voor alle huisgenoten tegelijk.</p>",
  "image_url": "",
  "wiki_title": "Scabies",
  "match": "scabiës|scabies|schurft|sarcoptes scabiei",
  "option_only": true
 },
 "lipopolysaccharide": {
  "title": "Lipopolysaccharide (LPS, endotoxine)",
  "short": "Lipopolysaccharide is een bestanddeel van de buitenmembraan van gramnegatieve bacteriën dat als endotoxine een sterke ontstekingsreactie uitlokt.",
  "definition": "<p><strong>LPS</strong> bestaat uit lipide A (het toxische deel, verankerd in de buitenmembraan), een kernpolysacharide en een O-antigeen. Het wordt herkend door TLR4 op macrofagen, die daarop massaal TNF, IL-1 en IL-6 afgeven. In grote hoeveelheden kan dat leiden tot koorts, verwijde vaten, stollingsactivatie (DIS) en septische shock.</p>",
  "image_url": "",
  "wiki_title": "Lipopolysaccharide",
  "match": "lipopolysaccharide|lps|endotoxine",
  "option_only": true
 },
 "peptidoglycaanlaag": {
  "title": "Peptidoglycaan",
  "short": "Peptidoglycaan is het netwerk van suikers en peptiden dat de bacteriële celwand stevigheid geeft.",
  "definition": "<p><strong>Peptidoglycaan</strong> bestaat uit ketens van afwisselend N-acetylglucosamine en N-acetylmuraminezuur, onderling verbonden via korte peptidebruggen. Grampositieve bacteriën hebben een dikke laag (houdt het kristalviolet vast), gramnegatieve een dunne laag tussen twee membranen. Bètalactamantibiotica remmen de verknoping, vancomycine de opbouw en lysozym breekt het af.</p>",
  "image_url": "",
  "wiki_title": "Peptidoglycan",
  "match": "peptidoglycaanlaag|peptidoglycaan|mureïne",
  "option_only": true
 },
 "resistentie": {
  "title": "Antibioticaresistentie",
  "short": "Resistentie betekent dat een micro-organisme ongevoelig is (geworden) voor een middel dat het normaal zou remmen of doden.",
  "definition": "<p><strong>Antibioticaresistentie</strong> kan intrinsiek zijn (bijv. <em>Mycoplasma</em> zonder celwand) of verworven via mutaties of overdracht van resistentiegenen (bijv. via plasmiden). Mechanismen zijn afbraak van het middel (bètalactamasen), verandering van het doelwit (bijv. PBP2a bij MRSA), verminderde opname of actieve uitpomp (effluxpompen). Overmatig antibioticagebruik selecteert resistente stammen.</p>",
  "image_url": "",
  "wiki_title": "Antimicrobial resistance",
  "match": "resistentie|antibioticaresistentie",
  "option_only": true
 },
 "vaccinatie": {
  "title": "Vaccinatie",
  "short": "Vaccinatie is het toedienen van een antigeen om een beschermende, langdurige afweerreactie op te wekken zonder de ziekte door te maken.",
  "definition": "<p>Bij <strong>actieve immunisatie</strong> wordt een verzwakt of gedood micro-organisme, een onderdeel ervan (eiwit, polysacharide, toxoïd) of een mRNA/vector die het antigeen laat aanmaken toegediend. Het lichaam maakt geheugen-B- en T-cellen. Voldoende vaccinatiegraad geeft ook groepsimmuniteit. Passieve immunisatie (antistoffen toedienen) geeft directe maar tijdelijke bescherming.</p>",
  "image_url": "",
  "wiki_title": "Vaccination",
  "match": "vaccinatie|vaccin|vaccineren|immunisatie",
  "option_only": true
 },
 "antibiotica": {
  "title": "Antibiotica",
  "short": "Antibiotica zijn middelen die bacteriën doden of hun groei remmen; ze werken niet tegen virussen.",
  "definition": "<p><strong>Antibiotica</strong> grijpen aan op structuren die bacteriën wel en menselijke cellen niet (of anders) hebben: de celwand (bètalactams, vancomycine), het ribosoom (o.a. macroliden, tetracyclines, aminoglycosiden), DNA-synthese (chinolonen, metronidazol) of foliumzuursynthese (trimethoprim, sulfonamiden). Bacteriostatisch betekent groeiremmend, bactericide dodend. Onnodig gebruik bevordert resistentie.</p>",
  "image_url": "",
  "wiki_title": "Antibiotic",
  "match": "antibiotica|antibioticum",
  "option_only": true
 },
 "ciprofloxacine": {
  "title": "Ciprofloxacine",
  "short": "Ciprofloxacine is een fluorochinolon dat het bacteriële DNA-gyrase remt; werkzaam tegen veel gramnegatieve bacteriën.",
  "definition": "<p><strong>Ciprofloxacine</strong> remt DNA-gyrase en topo-isomerase IV, waardoor de bacterie haar DNA niet kan repliceren (bactericide). Het werkt goed tegen gramnegatieve staven, inclusief <em>Pseudomonas</em>, en wordt o.a. gebruikt bij gecompliceerde urineweginfecties en prostatitis. Bijwerkingen: peesruptuur, QT-verlenging, verwardheid en <em>C. difficile</em>-infectie.</p>",
  "image_url": "",
  "wiki_title": "Ciprofloxacin",
  "match": "ciprofloxacine|ciprofloxacin|fluorochinolon",
  "option_only": true
 },
 "tobramycine": {
  "title": "Tobramycine",
  "short": "Tobramycine is een aminoglycoside dat de bacteriële eiwitsynthese remt (30S) en goed werkt tegen Pseudomonas.",
  "definition": "<p><strong>Tobramycine</strong> bindt aan de 30S-subeenheid van het ribosoom, wat tot foutieve eiwitten en celdood leidt (bactericide, concentratieafhankelijk). Het werkt tegen gramnegatieve aerobe bacteriën en wordt o.a. per inhalatie gebruikt bij cystische fibrose. Belangrijke bijwerkingen zijn nefrotoxiciteit en ototoxiciteit; spiegels worden gecontroleerd.</p>",
  "image_url": "",
  "wiki_title": "Tobramycin",
  "match": "tobramycine|aminoglycoside",
  "option_only": true
 },
 "metronidazol": {
  "title": "Metronidazol",
  "short": "Metronidazol is een antibioticum tegen anaerobe bacteriën en bepaalde protozoën.",
  "definition": "<p><strong>Metronidazol</strong> wordt in anaerobe micro-organismen omgezet in reactieve deeltjes die het DNA beschadigen. Het werkt tegen anaerobe bacteriën (o.a. <em>Bacteroides</em>, <em>Clostridioides</em>) en protozoën zoals <em>Giardia</em>, <em>Trichomonas</em> en <em>Entamoeba</em>. Bijwerkingen: metaalsmaak, misselijkheid en een disulfiramachtige reactie met alcohol.</p>",
  "image_url": "",
  "wiki_title": "Metronidazole",
  "match": "metronidazol|flagyl",
  "option_only": true
 },
 "amoxicilline/clavulaanzuur": {
  "title": "Amoxicilline-clavulaanzuur",
  "short": "Amoxicilline-clavulaanzuur combineert een penicilline met een bètalactamaseremmer, waardoor ook bètalactamasevormende bacteriën worden gedekt.",
  "definition": "<p>Clavulaanzuur heeft zelf nauwelijks antibacteriële werking maar remt veel <em>bètalactamasen</em>, zodat amoxicilline niet wordt afgebroken. De combinatie werkt daardoor ook tegen o.a. <em>S. aureus</em> (geen MRSA), <em>H. influenzae</em>, <em>Moraxella</em>, veel <em>E. coli</em> en anaeroben zoals <em>Bacteroides</em>. Bijwerkingen: diarree en (zelden) cholestatische hepatitis.</p>",
  "image_url": "",
  "wiki_title": "Amoxicillin/clavulanic acid",
  "match": "amoxicilline/clavulaanzuur|amoxicilline-clavulaanzuur|augmentin|co-amoxiclav",
  "option_only": true
 },
 "copd": {
  "title": "COPD",
  "short": "COPD is een chronische longziekte met niet volledig omkeerbare luchtwegobstructie, meestal door roken.",
  "definition": "<p>Bij <strong>COPD</strong> leiden chronische ontsteking van de kleine luchtwegen en afbraak van alveolewanden (emfyseem) tot een blijvende obstructie: FEV1/FVC &lt; 0,7 na bronchodilatatie. Klachten zijn kortademigheid bij inspanning, chronische hoest en sputum, met periodes van verergering (exacerbaties). Belangrijkste behandeling: stoppen met roken, luchtwegverwijders, beweegprogramma's en vaccinaties.</p>",
  "image_url": "",
  "wiki_title": "Chronic obstructive pulmonary disease",
  "match": "copd|chronic obstructive pulmonary disease|chronisch obstructieve longziekte",
  "option_only": true
 },
 "acute bronchitis": {
  "title": "Acute bronchitis",
  "short": "Acute bronchitis is een (meestal virale) ontsteking van de grote luchtwegen met hoesten, al dan niet met sputum.",
  "definition": "<p>Bij <strong>acute bronchitis</strong> raakt het slijmvlies van de bronchi ontstoken, vaak na een verkoudheid. De hoest kan enkele weken aanhouden. Er zijn geen tekenen van een pneumonie (zoals lokale crepitaties of hoge koorts met ernstig ziek-zijn). Bij gezonde mensen zijn antibiotica niet nodig, ook niet bij gekleurd sputum.</p>",
  "image_url": "",
  "wiki_title": "Acute bronchitis",
  "match": "acute bronchitis|bronchitis",
  "option_only": true
 },
 "verkoudheid": {
  "title": "Verkoudheid (common cold)",
  "short": "Een verkoudheid is een virale infectie van neus en keel met niezen, loopneus, keelpijn en soms lichte koorts.",
  "definition": "<p>Een <strong>verkoudheid</strong> wordt meestal veroorzaakt door rhinovirussen, daarnaast door corona-, adeno- en andere virussen. Klachten zijn een verstopte of loopneus, niezen, keelpijn en hoesten, die binnen ongeveer een week tot tien dagen afnemen. De behandeling is symptomatisch; antibiotica hebben geen zin.</p>",
  "image_url": "",
  "wiki_title": "Common cold",
  "match": "verkoudheid|common cold",
  "option_only": true
 },
 "sinusitis": {
  "title": "Sinusitis (bijholteontsteking)",
  "short": "Sinusitis is een ontsteking van het slijmvlies van neus en bijholten, met verstopte neus, pijn in het gezicht en afscheiding.",
  "definition": "<p>Acute <strong>rhinosinusitis</strong> ontstaat meestal na een virale verkoudheid; soms volgt een bacteriële infectie (pneumokok, <em>H. influenzae</em>, <em>Moraxella</em>). Klachten zijn een verstopte neus, (purulente) afscheiding, pijn of drukgevoel boven de bijholten en verminderde reuk. Meestal herstelt het binnen enkele weken zonder antibiotica. Chronische sinusitis duurt langer dan 12 weken.</p>",
  "image_url": "",
  "wiki_title": "Sinusitis",
  "match": "sinusitis|bijholteontsteking|rhinosinusitis",
  "option_only": true
 },
 "laryngitis": {
  "title": "Laryngitis",
  "short": "Laryngitis is een ontsteking van het strottenhoofd, met heesheid en soms keelpijn en hoesten.",
  "definition": "<p>Acute <strong>laryngitis</strong> is meestal viraal en gaat vaak samen met een verkoudheid; ook stembelasting kan een oorzaak zijn. De stembanden zwellen, wat heesheid of stemverlies geeft. Bij jonge kinderen kan een subglottische laryngitis (pseudokroep) een blafhoest en inspiratoire stridor geven. Chronische laryngitis kan ontstaan door roken of reflux.</p>",
  "image_url": "",
  "wiki_title": "Laryngitis",
  "match": "laryngitis|strottenhoofdontsteking",
  "option_only": true
 },
 "stembandverlamming": {
  "title": "Stembandverlamming",
  "short": "Bij een stembandverlamming beweegt een stemband niet goed door uitval van de n. laryngeus recurrens, met heesheid als gevolg.",
  "definition": "<p>Een <strong>stembandparese</strong> ontstaat meestal door schade aan de n. laryngeus recurrens, die links om de aortaboog en rechts om de a. subclavia loopt. Oorzaken zijn schildklier- of thoraxchirurgie, tumoren (long, slokdarm, schildklier, mediastinum) en idiopathisch. Een eenzijdige parese geeft een hese, ‘lekkende’ stem; een dubbelzijdige kan benauwdheid en stridor geven.</p>",
  "image_url": "",
  "wiki_title": "Vocal cord paresis",
  "match": "stembandverlamming|stembandparese|recurrensparese",
  "option_only": true
 },
 "longembolie": {
  "title": "Longembolie",
  "short": "Bij een longembolie sluit een stolsel (meestal uit de beenvenen) een longslagader af, met acute benauwdheid en pijn bij het ademen.",
  "definition": "<p>Een <strong>longembolie</strong> ontstaat meestal door een trombus uit de diepe venen van been of bekken. Risicofactoren volgen de trias van Virchow: stase (immobilisatie), hypercoagulabiliteit (kanker, oestrogenen, zwangerschap, erfelijke trombofilie) en vaatwandschade (operatie, trauma). Klachten: plotselinge dyspneu, pleuritische pijn, tachycardie, soms hemoptoë of collaps. Diagnostiek met een beslisregel, D-dimeer en CT-angiografie; behandeling met antistolling.</p>",
  "image_url": "",
  "wiki_title": "Pulmonary embolism",
  "match": "longembolie|pulmonale embolie|longembolieën",
  "option_only": true
 },
 "pulmonale hypertensie": {
  "title": "Pulmonale hypertensie",
  "short": "Pulmonale hypertensie is een verhoogde druk in de longslagaders, die op termijn rechtszijdig hartfalen veroorzaakt.",
  "definition": "<p>Bij <strong>pulmonale hypertensie</strong> is de gemiddelde druk in de a. pulmonalis verhoogd (&gt;20 mmHg in rust bij hartkatheterisatie). Oorzaken: linkszijdige hartziekte (meest voorkomend), longziekten met hypoxie, chronische longembolieën, en zeldzamer pulmonale arteriële hypertensie. Klachten zijn kortademigheid en vermoeidheid bij inspanning; later ontstaan oedeem en tekenen van rechtsfalen.</p>",
  "image_url": "",
  "wiki_title": "Pulmonary hypertension",
  "match": "pulmonale hypertensie",
  "option_only": true
 },
 "longcarcinoom": {
  "title": "Longcarcinoom",
  "short": "Longkanker is een kwaadaardige tumor uitgaande van het epitheel van de luchtwegen; roken is de belangrijkste oorzaak.",
  "definition": "<p>Het <strong>longcarcinoom</strong> wordt ingedeeld in niet-kleincellig (o.a. adenocarcinoom en plaveiselcelcarcinoom) en kleincellig longcarcinoom. Klachten zijn o.a. aanhoudende hoest, hemoptoë, kortademigheid, gewichtsverlies en recidiverende pneumonieën; vaak wordt het pas laat ontdekt. Paraneoplastische syndromen (zoals SIADH, hypercalciëmie, Lambert-Eaton) komen voor.</p>",
  "image_url": "",
  "wiki_title": "Lung cancer",
  "match": "longcarcinoom|longkanker|bronchuscarcinoom",
  "option_only": true
 },
 "ct-thorax": {
  "title": "CT-thorax",
  "short": "Een CT-thorax is een röntgenscan in dwarsdoorsneden van de borstkas, gedetailleerder dan een X-thorax.",
  "definition": "<p>Een <strong>CT-thorax</strong> geeft een driedimensionaal beeld van longen, mediastinum, pleura en thoraxwand. Met intraveneus contrast (CT-angiografie) is het het standaardonderzoek bij verdenking op longembolie. Een hoge-resolutie-CT (HRCT) is geschikt voor interstitiële longziekten; een lage-dosis-CT wordt gebruikt voor screening en follow-up van longnodules.</p>",
  "image_url": "",
  "wiki_title": "CT scan",
  "match": "ct-thorax|ct thorax|ct van de thorax",
  "option_only": true
 },
 "sputumkweek": {
  "title": "Sputumkweek",
  "short": "Bij een sputumkweek wordt opgehoest slijm in het laboratorium gekweekt om de verwekker van een luchtweginfectie en de gevoeligheid voor antibiotica te bepalen.",
  "definition": "<p>Voor een betrouwbare <strong>sputumkweek</strong> moet het materiaal uit de diepere luchtwegen komen en niet vooral uit speeksel (beoordeeld via het aantal plaveiselcellen en leukocyten). Een kweek duurt meestal 1–3 dagen; voor mycobacteriën weken. In de huisartsenpraktijk wordt het weinig gedaan; in het ziekenhuis vooral bij ernstige pneumonie, COPD-exacerbaties en verdenking op tuberculose.</p>",
  "image_url": "",
  "wiki_title": "Sputum culture",
  "match": "sputumkweek|sputum kweek",
  "option_only": true
 },
 "ecg": {
  "title": "ECG (elektrocardiogram)",
  "short": "Een ECG registreert de elektrische activiteit van het hart via elektroden op de huid.",
  "definition": "<p>Een standaard <strong>12-afleidingen-ECG</strong> laat de P-top (boezemdepolarisatie), het QRS-complex (kamerdepolarisatie) en de T-top (repolarisatie) zien. Het wordt gebruikt om ritmestoornissen, geleidingsstoornissen, ischemie en infarct, hypertrofie en elektrolytstoornissen (bijv. hyperkaliëmie) op te sporen.</p>",
  "image_url": "",
  "wiki_title": "Electrocardiography",
  "match": "ecg|elektrocardiogram|ekg",
  "option_only": true
 },
 "ritmestoornis": {
  "title": "Hartritmestoornis",
  "short": "Een hartritmestoornis is een afwijkend hartritme: te snel, te langzaam of onregelmatig.",
  "definition": "<p><strong>Hartritmestoornissen</strong> worden ingedeeld in brady-aritmieën (bijv. sinusknoopdysfunctie, AV-blok) en tachy-aritmieën, die supraventriculair (bijv. boezemfibrilleren, AVNRT) of ventriculair (ventrikeltachycardie, ventrikelfibrilleren) kunnen zijn. Klachten variëren van hartkloppingen en duizeligheid tot syncope en plotse dood. Diagnose met ECG of langdurige ritmeregistratie.</p>",
  "image_url": "",
  "wiki_title": "Cardiac arrhythmia",
  "match": "ritmestoornis|hartritmestoornis|aritmie",
  "option_only": true
 },
 "paroxysmaal atriumfibrilleren": {
  "title": "Paroxysmaal atriumfibrilleren",
  "short": "Bij paroxysmaal atriumfibrilleren treden aanvallen van boezemfibrilleren op die binnen 7 dagen vanzelf stoppen.",
  "definition": "<p>Bij <strong>atriumfibrilleren</strong> is de elektrische activiteit van de boezems chaotisch; de kamers slaan onregelmatig en vaak snel. In de paroxysmale vorm duren episodes korter dan een week en eindigen ze spontaan. Er is een verhoogd risico op trombo-embolie (vooral herseninfarct) vanuit het linkerhartoor; afhankelijk van de CHA₂DS₂-VASc-score wordt antistolling gegeven.</p>",
  "image_url": "",
  "wiki_title": "Atrial fibrillation",
  "match": "paroxysmaal atriumfibrilleren|paroxysmaal boezemfibrilleren|atriumfibrilleren|boezemfibrilleren",
  "option_only": true
 },
 "ventrikelfibrilleren": {
  "title": "Ventrikelfibrilleren",
  "short": "Ventrikelfibrilleren is een chaotische elektrische activiteit van de kamers zonder effectieve pompfunctie: een circulatiestilstand.",
  "definition": "<p>Bij <strong>ventrikelfibrilleren</strong> pompt het hart geen bloed meer; binnen seconden treedt bewusteloosheid op. Het ontstaat vaak bij acute ischemie, een oud infarctlitteken, cardiomyopathie of elektrolytstoornissen. De behandeling is direct reanimeren en zo snel mogelijk defibrilleren (AED).</p>",
  "image_url": "",
  "wiki_title": "Ventricular fibrillation",
  "match": "ventrikelfibrilleren|ventrikelfibrillatie|vf",
  "option_only": true
 },
 "bradycardie": {
  "title": "Bradycardie",
  "short": "Bradycardie is een trage hartslag, bij volwassenen meestal onder 50–60 slagen per minuut.",
  "definition": "<p><strong>Bradycardie</strong> kan fysiologisch zijn (bijv. bij getrainde sporters en tijdens de slaap) of pathologisch, door sinusknoopdysfunctie, AV-blok, medicatie (bètablokkers, digoxine, verapamil), hypothyreoïdie, hypothermie of verhoogde intracraniële druk. Klachten zijn moeheid, duizeligheid en syncope.</p>",
  "image_url": "",
  "wiki_title": "Bradycardia",
  "match": "bradycardie",
  "option_only": true
 },
 "verlengd qt-syndroom": {
  "title": "Lang-QT-syndroom",
  "short": "Bij een verlengd QT-interval duurt de repolarisatie van de kamers te lang, met risico op torsade de pointes en plotse dood.",
  "definition": "<p>Het <strong>lange-QT-syndroom</strong> kan aangeboren zijn (mutaties in kalium- of natriumkanalen) of verworven, door geneesmiddelen (o.a. antiaritmica, sommige antipsychotica, antibiotica zoals macroliden en chinolonen) en elektrolytstoornissen (hypokaliëmie, hypomagnesiëmie). Klachten zijn syncope of plotse hartstilstand, soms uitgelokt door schrik, inspanning of zwemmen.</p>",
  "image_url": "",
  "wiki_title": "Long QT syndrome",
  "match": "verlengd qt-syndroom|lang-qt-syndroom|long qt syndroom|qt-verlenging",
  "option_only": true
 },
 "aortaklepstenose": {
  "title": "Aortaklepstenose",
  "short": "Bij aortaklepstenose opent de aortaklep onvoldoende, waardoor de linkerventrikel tegen verhoogde weerstand moet pompen.",
  "definition": "<p><strong>Aortaklepstenose</strong> ontstaat meestal door degeneratieve verkalking op oudere leeftijd of bij een aangeboren bicuspide klep. De linkerventrikel hypertrofieert. Bij auscultatie is er een systolisch ejectiegeruis aan de basis, vaak uitstralend naar de carotiden. Klachten (angina, syncope bij inspanning, hartfalen) wijzen op een ernstige stenose; behandeling is klepvervanging (chirurgisch of TAVI).</p>",
  "image_url": "",
  "wiki_title": "Aortic stenosis",
  "match": "aortaklepstenose|aortastenose",
  "option_only": true
 },
 "aortaklepinsufficiëntie": {
  "title": "Aortaklepinsufficiëntie",
  "short": "Bij aortaklepinsufficiëntie sluit de aortaklep niet goed, waardoor bloed in de diastole terugstroomt naar de linkerventrikel.",
  "definition": "<p>Bij <strong>aortaklepinsufficiëntie</strong> ontstaat volumebelasting van de linkerventrikel, die verwijdt. Oorzaken zijn o.a. een bicuspide klep, endocarditis, verwijding van de aortawortel (hypertensie, Marfan, dissectie). Kenmerkend zijn een diastolisch decrescendo-geruis langs de linker sternumrand en een grote polsdruk (snel stijgende en dalende pols).</p>",
  "image_url": "",
  "wiki_title": "Aortic insufficiency",
  "match": "aortaklepinsufficiëntie|aorta-insufficiëntie|aortaklepinsufficientie",
  "option_only": true
 },
 "mitralisinsufficiëntie": {
  "title": "Mitralisinsufficiëntie",
  "short": "Bij mitralisinsufficiëntie sluit de mitralisklep onvoldoende, waardoor bloed in de systole terugstroomt naar het linkeratrium.",
  "definition": "<p><strong>Mitralisinsufficiëntie</strong> kan primair zijn (klepprolaps, endocarditis, reumatische klepziekte) of secundair aan verwijding of ischemie van de linkerventrikel. Het linkeratrium raakt overbelast, met risico op boezemfibrilleren en longstuwing. Bij auscultatie hoort men een holosystolisch geruis aan de apex, uitstralend naar de oksel.</p>",
  "image_url": "",
  "wiki_title": "Mitral insufficiency",
  "match": "mitralisinsufficiëntie|mitralisklepinsufficiëntie|mitralisinsufficientie",
  "option_only": true
 },
 "ventrikelseptum defect": {
  "title": "Ventrikelseptumdefect (VSD)",
  "short": "Een VSD is een aangeboren opening in het septum tussen de linker- en rechterventrikel, met een links-rechtsshunt.",
  "definition": "<p>Bij een <strong>ventrikelseptumdefect</strong> stroomt bloed in de systole van links naar rechts, wat een luid holosystolisch geruis links parasternaal geeft. Kleine (vaak musculaire) defecten sluiten vaak spontaan. Grote defecten geven volumebelasting van de longcirculatie en hartfalen op jonge leeftijd; zonder sluiting kan pulmonale hypertensie (Eisenmenger) ontstaan.</p>",
  "image_url": "",
  "wiki_title": "Ventricular septal defect",
  "match": "ventrikelseptum defect|ventrikelseptumdefect|vsd",
  "option_only": true
 },
 "open foramen ovale": {
  "title": "Open foramen ovale (PFO)",
  "short": "Een open foramen ovale is een niet volledig gesloten verbinding tussen de boezems, een restant van de foetale circulatie.",
  "definition": "<p>Het <strong>foramen ovale</strong> laat in de foetale circulatie bloed van het rechter- naar het linkeratrium stromen. Na de geboorte stijgt de druk links en sluit het functioneel; bij ongeveer een kwart van de volwassenen blijft het anatomisch open. Meestal geeft dat geen klachten, maar het kan een paradoxale embolie (veneuze stolsel naar de systeemcirculatie) mogelijk maken.</p>",
  "image_url": "",
  "wiki_title": "Patent foramen ovale",
  "match": "open foramen ovale|patent foramen ovale|pfo",
  "option_only": true
 },
 "hypotensie": {
  "title": "Hypotensie",
  "short": "Hypotensie is een lage bloeddruk; klinisch relevant als ze leidt tot klachten of onvoldoende doorbloeding van organen.",
  "definition": "<p><strong>Hypotensie</strong> kan constitutioneel en onschuldig zijn. Pathologische hypotensie ontstaat bij ondervulling (bloedverlies, dehydratie), vaatverwijding (sepsis, anafylaxie, medicatie), verminderde pompfunctie (cardiogeen) of obstructie (tamponnade, longembolie). Orthostatische hypotensie treedt op bij opstaan. Een daling van de doorbloeding geeft duizeligheid, verwardheid, oligurie en uiteindelijk shock.</p>",
  "image_url": "",
  "wiki_title": "Hypotension",
  "match": "hypotensie|lage bloeddruk",
  "option_only": true
 },
 "orthostatische hypotensie": {
  "title": "Orthostatische hypotensie",
  "short": "Orthostatische hypotensie is een bloeddrukdaling bij het opstaan door onvoldoende compensatie van het autonome zenuwstelsel.",
  "definition": "<p>Bij <strong>orthostatische hypotensie</strong> daalt de systolische bloeddruk met ≥20 mmHg (of de diastolische met ≥10 mmHg) binnen 3 minuten na overeind komen. Normaal zorgt de baroreflex voor vasoconstrictie en een hogere hartfrequentie. Oorzaken zijn o.a. ondervulling, medicatie (antihypertensiva, diuretica, antidepressiva) en autonome neuropathie. Klachten: duizeligheid, wazig zien en wegraking bij opstaan.</p>",
  "image_url": "",
  "wiki_title": "Orthostatic hypotension",
  "match": "orthostatische hypotensie",
  "option_only": true
 },
 "pericarditis": {
  "title": "Pericarditis",
  "short": "Pericarditis is een ontsteking van het hartzakje, met scherpe, houdingsafhankelijke pijn op de borst.",
  "definition": "<p><strong>Pericarditis</strong> wordt meestal veroorzaakt door een virus, maar ook door bacteriën, auto-immuunziekten, nierfalen, tumoren of na een hartinfarct of hartoperatie. Typisch zijn scherpe pijn die verergert bij plat liggen en diep inademen, een pericardwrijven en diffuse ST-elevatie op het ECG. Bij veel vocht in het hartzakje kan een harttamponnade ontstaan.</p>",
  "image_url": "",
  "wiki_title": "Pericarditis",
  "match": "pericarditis|hartzakontsteking",
  "option_only": true
 },
 "sepsis": {
  "title": "Sepsis",
  "short": "Sepsis is een levensbedreigende orgaandisfunctie door een ontregelde afweerreactie op een infectie.",
  "definition": "<p>Bij <strong>sepsis</strong> leidt de reactie van het lichaam op een infectie tot schade aan de eigen organen: hypotensie, verwardheid, snelle ademhaling, nierfalen, stollingsstoornissen en een verhoogd lactaat. Septische shock is sepsis met hypotensie die vasopressoren vereist. Snelle herkenning (bijv. qSOFA), bloedkweken, antibiotica binnen een uur en vochtresuscitatie zijn essentieel.</p>",
  "image_url": "",
  "wiki_title": "Sepsis",
  "match": "sepsis|bloedvergiftiging",
  "option_only": true
 },
 "glomerulonefritis": {
  "title": "Glomerulonefritis",
  "short": "Glomerulonefritis is een (meestal immunologische) ontsteking van de glomeruli, met hematurie, proteïnurie, hypertensie en/of nierfunctieverlies.",
  "definition": "<p>Bij een <strong>nefritisch syndroom</strong> zijn er erytrocytencilinders, hematurie, hypertensie, oedeem en een dalende nierfunctie. Oorzaken zijn o.a. IgA-nefropathie, poststreptokokken-glomerulonefritis, ANCA-vasculitis, lupusnefritis en anti-GBM-ziekte. Een snel progressieve vorm met halvemaanvorming kan binnen weken tot nierfalen leiden en vereist snelle diagnostiek met nierbiopt.</p>",
  "image_url": "",
  "wiki_title": "Glomerulonephritis",
  "match": "glomerulonefritis",
  "option_only": true
 },
 "acute postinfectieuze glomerulonefritis": {
  "title": "Acute postinfectieuze glomerulonefritis",
  "short": "Een glomerulonefritis die 1–3 weken na een (streptokokken)infectie ontstaat, door neerslag van immuuncomplexen in de glomeruli.",
  "definition": "<p>Bij <strong>acute postinfectieuze glomerulonefritis</strong> ontstaat vooral bij kinderen, enkele weken na een keel- of huidinfectie met groep A-streptokokken, een nefritisch beeld: colakleurige urine, oedeem rond de ogen en hypertensie. Het complement (C3) is verlaagd. Het nierbiopt toont subepitheliale ‘humps’. Bij kinderen herstelt het meestal volledig.</p>",
  "image_url": "",
  "wiki_title": "Poststreptococcal glomerulonephritis",
  "match": "acute postinfectieuze glomerulonefritis|poststreptokokken glomerulonefritis|poststreptokokkenglomerulonefritis",
  "option_only": true
 },
 "nierinsufficiëntie": {
  "title": "Nierinsufficiëntie (nierfalen)",
  "short": "Bij nierinsufficiëntie schiet de nierfunctie tekort, met ophoping van afvalstoffen en verstoring van water-, zout- en zuurhuishouding.",
  "definition": "<p><strong>Acuut nierfalen</strong> ontstaat binnen uren tot dagen en wordt ingedeeld in prerenaal (ondervulling), renaal (bijv. acute tubulusnecrose, glomerulonefritis) en postrenaal (obstructie). <strong>Chronische nierschade</strong> is een eGFR &lt; 60 of nierschade langer dan 3 maanden, meestal door diabetes en hypertensie. Gevolgen zijn o.a. hyperkaliëmie, metabole acidose, anemie (minder EPO), botziekte en hypertensie.</p>",
  "image_url": "",
  "wiki_title": "Kidney failure",
  "match": "nierinsufficiëntie|nierfalen|nierinsufficientie|chronische nierschade",
  "option_only": true
 },
 "proteïnurie": {
  "title": "Proteïnurie",
  "short": "Proteïnurie is verhoogd eiwitverlies in de urine, een teken van nierschade.",
  "definition": "<p>Normaal laat de glomerulaire filter nauwelijks eiwit door, en wordt het kleine beetje gefilterd eiwit in de proximale tubulus teruggeresorbeerd. <strong>Proteïnurie</strong> ontstaat bij glomerulaire schade (bijv. diabetes, glomerulonefritis), tubulaire schade of overloop (bijv. lichte ketens bij myeloom). Bij &gt;3,5 g/dag spreekt men van nefrotische proteïnurie. Albuminurie is een vroege marker van diabetische nefropathie en vaatschade.</p>",
  "image_url": "",
  "wiki_title": "Proteinuria",
  "match": "proteïnurie|eiwituitscheiding|albuminurie",
  "option_only": true
 },
 "dehydratie": {
  "title": "Dehydratie",
  "short": "Dehydratie is een tekort aan lichaamsvocht, door te weinig inname of te veel verlies (braken, diarree, zweten, polyurie).",
  "definition": "<p>Bij <strong>dehydratie</strong> daalt het circulerend volume, met dorst, droge slijmvliezen, verminderde huidturgor, tachycardie, orthostatische hypotensie en weinig plassen. Kinderen en ouderen zijn extra kwetsbaar. Afhankelijk van verlies van water ten opzichte van zout kan de natriumconcentratie normaal, verhoogd of verlaagd zijn. Behandeling met orale rehydratie of infuus.</p>",
  "image_url": "",
  "wiki_title": "Dehydration",
  "match": "dehydratie|uitdroging|ondervulling",
  "option_only": true
 },
 "oedeem": {
  "title": "Oedeem",
  "short": "Oedeem is een ophoping van vocht in het interstitium, bijvoorbeeld als zwelling van enkels of onderbenen.",
  "definition": "<p><strong>Oedeem</strong> ontstaat volgens de wetten van Starling door een verhoogde hydrostatische druk (hartfalen, veneuze insufficiëntie, overvulling), een verlaagde colloïd-osmotische druk (laag albumine bij nefrotisch syndroom, leverziekte, ondervoeding), een verhoogde vaatpermeabiliteit (ontsteking, allergie) of een verminderde lymfeafvoer (lymfoedeem). Putjesvormend oedeem blijft na indrukken even zichtbaar.</p>",
  "image_url": "",
  "wiki_title": "Edema",
  "match": "oedeem|vochtophoping",
  "option_only": true
 },
 "hyperkaliëmie": {
  "title": "Hyperkaliëmie",
  "short": "Hyperkaliëmie is een te hoog kalium in het bloed; gevaarlijk door het risico op hartritmestoornissen.",
  "definition": "<p><strong>Hyperkaliëmie</strong> ontstaat door verminderde uitscheiding (nierfalen, ACE-remmers, ARB's, kaliumsparende diuretica, hypoaldosteronisme), verschuiving uit de cel (acidose, insulinetekort, celafbraak) of overmatige inname. Op het ECG ziet men spitse T-toppen, verbrede QRS-complexen en uiteindelijk ventrikelfibrilleren. Acute behandeling: calciumgluconaat (membraanstabilisatie), insuline met glucose en salbutamol, en kalium verwijderen.</p>",
  "image_url": "",
  "wiki_title": "Hyperkalemia",
  "match": "hyperkaliëmie|hyperkaliemie",
  "option_only": true
 },
 "hypernatriëmie": {
  "title": "Hypernatriëmie",
  "short": "Hypernatriëmie is een te hoog natrium in het bloed, meestal door een tekort aan water ten opzichte van zout.",
  "definition": "<p><strong>Hypernatriëmie</strong> (&gt;145 mmol/L) ontstaat vooral als iemand onvoldoende kan drinken (ouderen, zuigelingen, verminderd bewustzijn) of water verliest via koorts, diarree of diabetes insipidus. Cellen in het brein krimpen, met sufheid, verwardheid en insulten. Correctie moet langzaam om hersenoedeem te voorkomen.</p>",
  "image_url": "",
  "wiki_title": "Hypernatremia",
  "match": "hypernatriëmie|hypernatriemie",
  "option_only": true
 },
 "hypercalciëmie": {
  "title": "Hypercalciëmie",
  "short": "Hypercalciëmie is een te hoog calcium in het bloed, meestal door primaire hyperparathyreoïdie of een maligniteit.",
  "definition": "<p>Klachten van <strong>hypercalciëmie</strong> zijn samen te vatten als ‘stones, bones, groans and psychic moans’: nierstenen en polyurie, botpijn, obstipatie, misselijkheid en buikpijn, vermoeidheid en verwardheid; ook een verkort QT-interval. Bij maligniteit gaat het om PTHrP-productie, botmetastasen of (bij lymfomen) overmatig calcitriol. Behandeling: ruim vocht en bisfosfonaten.</p>",
  "image_url": "",
  "wiki_title": "Hypercalcaemia",
  "match": "hypercalciëmie|hypercalciemie",
  "option_only": true
 },
 "metabole acidose": {
  "title": "Metabole acidose",
  "short": "Bij een metabole acidose is het bicarbonaat verlaagd en daalt de pH, door ophoping van zuren of verlies van bicarbonaat.",
  "definition": "<p>Een <strong>metabole acidose</strong> wordt ingedeeld met de aniongap. Een <em>verhoogde</em> aniongap past bij ophoping van zuren: lactaat, ketonen (diabetische ketoacidose), nierfalen of intoxicaties (methanol, ethyleenglycol, salicylaten). Een <em>normale</em> aniongap past bij verlies van bicarbonaat via diarree of een renale tubulaire acidose. De ademhaling compenseert met diepe, snelle ademhaling (Kussmaul).</p>",
  "image_url": "",
  "wiki_title": "Metabolic acidosis",
  "match": "metabole acidose",
  "option_only": true
 },
 "hypoventilatie": {
  "title": "Hypoventilatie",
  "short": "Hypoventilatie is te weinig ademen voor de stofwisseling, waardoor het CO₂ in het bloed stijgt (respiratoire acidose).",
  "definition": "<p>Bij <strong>hypoventilatie</strong> daalt de alveolaire ventilatie, met hypercapnie en vaak hypoxemie. Oorzaken zijn een verminderde ademprikkel (opioïden, sedativa, hersenstamletsel), neuromusculaire ziekten, ernstige obesitas, thoraxwandafwijkingen en ernstige COPD. Het lichaam compenseert met renale retentie van bicarbonaat.</p>",
  "image_url": "",
  "wiki_title": "Hypoventilation",
  "match": "hypoventilatie",
  "option_only": true
 },
 "hyperglycemie": {
  "title": "Hyperglykemie",
  "short": "Hyperglykemie is een te hoge bloedglucose, zoals bij diabetes mellitus.",
  "definition": "<p>Bij <strong>hyperglykemie</strong> komt glucose boven de nierdrempel (ongeveer 10 mmol/L) in de urine, wat osmotische diurese, dorst en polyurie geeft. Ernstige ontregeling kan leiden tot diabetische ketoacidose (vooral type 1) of een hyperosmolair hyperglykemisch syndroom (vooral type 2). Ook stress, infectie en corticosteroïden kunnen de glucose verhogen.</p>",
  "image_url": "",
  "wiki_title": "Hyperglycemia",
  "match": "hyperglycemie|hyperglykemie",
  "option_only": true
 },
 "hypoglycemie": {
  "title": "Hypoglykemie",
  "short": "Hypoglykemie is een te lage bloedglucose, met klachten zoals trillen, zweten, honger en bij ernstige vormen verwardheid en bewustzijnsverlies.",
  "definition": "<p>Een <strong>hypoglykemie</strong> (meestal &lt;4 mmol/L bij diabetes) komt vooral voor bij gebruik van insuline of sulfonylureumderivaten, bij te weinig eten, inspanning of alcohol. Eerst ontstaan adrenerge klachten (trillen, zweten, hartkloppingen, honger), daarna neuroglycopene klachten (verwardheid, gedragsverandering, insulten, coma). Behandeling: snelle suikers of glucose intraveneus, of glucagon.</p>",
  "image_url": "",
  "wiki_title": "Hypoglycemia",
  "match": "hypoglycemie|hypoglykemie",
  "option_only": true
 },
 "polydipsie": {
  "title": "Polydipsie",
  "short": "Polydipsie is overmatige dorst en vochtinname.",
  "definition": "<p><strong>Polydipsie</strong> gaat vaak samen met polyurie. Oorzaken zijn o.a. diabetes mellitus (osmotische diurese), diabetes insipidus (centraal of nefrogeen), hypercalciëmie, diuretica en primaire (psychogene) polydipsie. Een dorstproef kan helpen deze oorzaken te onderscheiden.</p>",
  "image_url": "",
  "wiki_title": "Polydipsia",
  "match": "polydipsie",
  "option_only": true
 },
 "hypothyreoïdie": {
  "title": "Hypothyreoïdie",
  "short": "Hypothyreoïdie is een te trage schildklierwerking, met vermoeidheid, kouwelijkheid, gewichtstoename en obstipatie.",
  "definition": "<p><strong>Hypothyreoïdie</strong> wordt in Nederland meestal veroorzaakt door de auto-immuunziekte van Hashimoto, daarnaast na thyreoïdectomie of radioactief jodium, door medicatie (amiodaron, lithium) of zelden door hypofyse-uitval. Klachten: traagheid, kouwelijkheid, droge huid, gewichtstoename, obstipatie, bradycardie en depressieve klachten. Bij primaire hypothyreoïdie is het TSH verhoogd en het vrij T4 laag; behandeling met levothyroxine.</p>",
  "image_url": "",
  "wiki_title": "Hypothyroidism",
  "match": "hypothyreoïdie|hypothyreoidie|trage schildklier",
  "option_only": true
 },
 "hyperthyreoïdie": {
  "title": "Hyperthyreoïdie",
  "short": "Hyperthyreoïdie is een te snelle schildklierwerking, met hartkloppingen, gewichtsverlies, warmte-intolerantie en onrust.",
  "definition": "<p><strong>Hyperthyreoïdie</strong> wordt o.a. veroorzaakt door de ziekte van Graves, een toxisch multinodulair struma, een toxisch adenoom of een (tijdelijke) thyreoïditis. Klachten: hartkloppingen of boezemfibrilleren, gewichtsverlies ondanks goede eetlust, zweten, tremor, onrust, slecht slapen en diarree. Diagnose: laag TSH met verhoogd vrij T4.</p>",
  "image_url": "",
  "wiki_title": "Hyperthyroidism",
  "match": "hyperthyreoïdie|hyperthyreoidie|hyperthyreoïdie|overactieve schildklier",
  "option_only": true
 },
 "myxoedeem": {
  "title": "Myxoedeem",
  "short": "Myxoedeem is deegachtige zwelling van de huid door stapeling van glycosaminoglycanen; het begrip wordt ook gebruikt voor ernstige hypothyreoïdie.",
  "definition": "<p>Bij ernstige <strong>hypothyreoïdie</strong> stapelen glycosaminoglycanen zich op in de huid, waardoor een niet-putjesvormend, deegachtig oedeem ontstaat, vooral rond de ogen en aan handen en voeten. Een myxoedeemcoma is een levensbedreigende ontsporing met hypothermie en verlaagd bewustzijn. Pretibiaal myxoedeem is daarentegen een specifiek kenmerk van de ziekte van Graves.</p>",
  "image_url": "",
  "wiki_title": "Myxedema",
  "match": "myxoedeem|myxoedema",
  "option_only": true
 },
 "schildklier": {
  "title": "Schildklier (glandula thyroidea)",
  "short": "De schildklier is een vlindervormige klier in de hals die de schildklierhormonen T4 en T3 en calcitonine maakt.",
  "definition": "<p>De <strong>schildklier</strong> ligt vóór de trachea, onder het strottenhoofd. Folliculaire cellen nemen jodium op en maken thyroglobuline, waarmee T4 en T3 worden gevormd; deze regelen het basaal metabolisme. De afgifte wordt gestuurd door TSH uit de hypofyse. Parafolliculaire C-cellen maken calcitonine. Embryonaal daalt de schildklier af vanaf de tongbasis (ductus thyroglossus).</p>",
  "image_url": "",
  "wiki_title": "Thyroid",
  "match": "schildklier|glandula thyroidea|thyroid",
  "option_only": true
 },
 "hypofyse": {
  "title": "Hypofyse",
  "short": "De hypofyse is een kleine klier onder de hersenen die via hormonen veel andere klieren aanstuurt.",
  "definition": "<p>De <strong>hypofyse</strong> ligt in de sella turcica en is via de hypofysesteel met de hypothalamus verbonden. De <em>voorkwab</em> (adenohypofyse) maakt GH, prolactine, TSH, ACTH, LH en FSH onder invloed van releasing-hormonen. De <em>achterkwab</em> (neurohypofyse) geeft ADH en oxytocine af, die in de hypothalamus worden gemaakt.</p>",
  "image_url": "",
  "wiki_title": "Pituitary gland",
  "match": "hypofyse|glandula pituitaria|hersenaanhangsel",
  "option_only": true
 },
 "hypofyse voorkwab": {
  "title": "Hypofysevoorkwab (adenohypofyse)",
  "short": "De hypofysevoorkwab maakt groeihormoon, prolactine, TSH, ACTH, LH en FSH.",
  "definition": "<p>De <strong>adenohypofyse</strong> ontstaat embryonaal uit het zakje van Rathke (een uitstulping van het dak van de mondholte). De hormoonafgifte wordt gestuurd door releasing- en inhibiting-hormonen uit de hypothalamus, die via het portale vaatstelsel van de hypofysesteel aankomen. Dopamine remt de prolactineafgifte.</p>",
  "image_url": "",
  "wiki_title": "Anterior pituitary",
  "match": "hypofyse voorkwab|hypofysevoorkwab|adenohypofyse",
  "option_only": true
 },
 "bijniermerg": {
  "title": "Bijniermerg",
  "short": "Het bijniermerg maakt adrenaline en noradrenaline; het functioneert als een omgebouwd sympathisch ganglion.",
  "definition": "<p>Het <strong>bijniermerg</strong> ontstaat uit de neurale lijst. De chromaffiene cellen worden direct geïnnerveerd door preganglionaire sympathische vezels (via acetylcholine op nicotinerge receptoren) en geven bij stress catecholaminen af in het bloed, vooral adrenaline. Een tumor van deze cellen heet een feochromocytoom.</p>",
  "image_url": "",
  "wiki_title": "Adrenal medulla",
  "match": "bijniermerg|medulla glandulae suprarenalis",
  "option_only": true
 },
 "zona fasciculata": {
  "title": "Zona fasciculata",
  "short": "De zona fasciculata is de middelste en breedste laag van de bijnierschors en maakt vooral cortisol.",
  "definition": "<p>De bijnierschors bestaat van buiten naar binnen uit zona glomerulosa (aldosteron), <strong>zona fasciculata</strong> (glucocorticoïden) en zona reticularis (androgenen). De cellen van de fasciculata liggen in lange rijen, zijn rijk aan lipidedruppels en worden vooral door ACTH gestimuleerd.</p>",
  "image_url": "",
  "wiki_title": "Zona fasciculata",
  "match": "zona fasciculata",
  "option_only": true
 },
 "zona reticularis": {
  "title": "Zona reticularis",
  "short": "De zona reticularis is de binnenste laag van de bijnierschors en maakt vooral bijnierandrogenen zoals DHEA.",
  "definition": "<p>In de <strong>zona reticularis</strong> liggen de cellen in een netwerk van strengen. Ze maken onder invloed van ACTH vooral DHEA en DHEA-sulfaat, die perifeer kunnen worden omgezet in testosteron en oestrogenen. Bij vrouwen dragen ze bij aan de oksel- en schaambeharing; overmaat (bijv. bij congenitale bijnierhyperplasie) geeft virilisatie.</p>",
  "image_url": "",
  "wiki_title": "Zona reticularis",
  "match": "zona reticularis",
  "option_only": true
 },
 "prohormonen": {
  "title": "Prohormonen",
  "short": "Prohormonen zijn inactieve voorlopers van hormonen die door splitsing of omzetting actief worden.",
  "definition": "<p>Veel peptidehormonen worden als groter <strong>prohormoon</strong> gemaakt en in secretoire blaasjes door proteasen geknipt, bijvoorbeeld proinsuline → insuline + C-peptide en POMC → ACTH en MSH. Ook sommige niet-peptidehormonen worden als voorloper afgegeven, zoals T4 (dat perifeer wordt omgezet in het actievere T3).</p>",
  "image_url": "",
  "wiki_title": "Prohormone",
  "match": "prohormonen|prohormoon",
  "option_only": true
 },
 "groeihormoonreceptorantagonist": {
  "title": "Groeihormoonreceptorantagonist (pegvisomant)",
  "short": "Een groeihormoonreceptorantagonist blokkeert de werking van groeihormoon op weefsels; gebruikt bij acromegalie.",
  "definition": "<p><strong>Pegvisomant</strong> is een gemodificeerd groeihormoonmolecuul dat aan de groeihormoonreceptor bindt maar die niet activeert. Daardoor daalt de productie van IGF-1, die de klachten van acromegalie veroorzaakt. Het wordt gebruikt als operatie en somatostatine-analogen onvoldoende effect hebben; het verkleint de tumor zelf niet.</p>",
  "image_url": "",
  "wiki_title": "Pegvisomant",
  "match": "groeihormoonreceptorantagonist|pegvisomant",
  "option_only": true
 },
 "maturity onset diabetes of the young (mody)": {
  "title": "MODY",
  "short": "MODY is een erfelijke, autosomaal dominante vorm van diabetes door een mutatie in één gen, met een begin op jonge leeftijd.",
  "definition": "<p>Bij <strong>MODY</strong> is er een monogene stoornis in de bètacelfunctie (bijv. in GCK, HNF1A of HNF4A). Kenmerkend zijn een begin vóór ongeveer 25 jaar, diabetes in meerdere opeenvolgende generaties, geen auto-antistoffen en meestal geen overgewicht. Het type bepaalt de behandeling: sommige vormen reageren goed op sulfonylureumderivaten, de GCK-vorm heeft vaak geen behandeling nodig.</p>",
  "image_url": "",
  "wiki_title": "Maturity onset diabetes of the young",
  "match": "maturity onset diabetes of the young (mody)|mody|maturity onset diabetes of the young",
  "option_only": true
 },
 "metabool syndroom": {
  "title": "Metabool syndroom",
  "short": "Het metabool syndroom is een combinatie van buikvetzucht, hoge bloeddruk, verhoogde glucose en een ongunstig lipidenprofiel, met een verhoogd risico op hart- en vaatziekten.",
  "definition": "<p>Er is sprake van een <strong>metabool syndroom</strong> als minstens drie van de volgende kenmerken aanwezig zijn: een vergrote middelomtrek, verhoogde triglyceriden, verlaagd HDL-cholesterol, verhoogde bloeddruk en verhoogde nuchtere glucose. Insulineresistentie speelt een centrale rol. Het verhoogt het risico op diabetes type 2, hart- en vaatziekten en leververvetting.</p>",
  "image_url": "",
  "wiki_title": "Metabolic syndrome",
  "match": "metabool syndroom|metabolisch syndroom",
  "option_only": true
 },
 "overgewicht": {
  "title": "Overgewicht",
  "short": "Overgewicht is een te hoog lichaamsgewicht ten opzichte van de lengte, gedefinieerd als een BMI tussen 25 en 30 kg/m².",
  "definition": "<p>Bij <strong>overgewicht</strong> (BMI 25–30) en vooral bij obesitas (BMI ≥30) neemt het risico op diabetes type 2, hart- en vaatziekten, artrose en sommige kankers toe. De verdeling van het vet is belangrijk: buikvet (gemeten met de middelomtrek) is metabool ongunstiger dan vet op heupen en bovenbenen.</p>",
  "image_url": "",
  "wiki_title": "Overweight",
  "match": "overgewicht",
  "option_only": true
 },
 "hypercholesterolemie": {
  "title": "Hypercholesterolemie",
  "short": "Hypercholesterolemie is een verhoogd cholesterolgehalte in het bloed, vooral van LDL-cholesterol; een risicofactor voor atherosclerose.",
  "definition": "<p><strong>Hypercholesterolemie</strong> ontstaat door een combinatie van leefstijl en aanleg. De erfelijke vorm, familiaire hypercholesterolemie, berust meestal op een mutatie in de LDL-receptor en geeft al op jonge leeftijd zeer hoge LDL-waarden, peesxanthomen en vroege hart- en vaatziekten. Behandeling: leefstijl en statines, eventueel ezetimibe of PCSK9-remmers.</p>",
  "image_url": "",
  "wiki_title": "Hypercholesterolemia",
  "match": "hypercholesterolemie|hypercholesterolaemie|verhoogd cholesterol",
  "option_only": true
 },
 "hyperlipidemie": {
  "title": "Hyperlipidemie",
  "short": "Hyperlipidemie is een verhoogd gehalte aan vetten (cholesterol en/of triglyceriden) in het bloed.",
  "definition": "<p><strong>Hyperlipidemie</strong> kan primair (erfelijk) of secundair zijn, bijvoorbeeld bij diabetes, hypothyreoïdie, nefrotisch syndroom, alcoholgebruik of medicatie. Een verhoogd LDL is een belangrijke risicofactor voor atherosclerose; zeer hoge triglyceriden geven risico op pancreatitis.</p>",
  "image_url": "",
  "wiki_title": "Hyperlipidemia",
  "match": "hyperlipidemie|dyslipidemie",
  "option_only": true
 },
 "familiaire hypertriglyceridemie": {
  "title": "Familiaire hypertriglyceridemie",
  "short": "Familiaire hypertriglyceridemie is een erfelijke stoornis met een verhoogde VLDL-productie en hoge triglyceriden.",
  "definition": "<p>Bij <strong>familiaire hypertriglyceridemie</strong> maakt de lever te veel triglyceriderijke VLDL. Het LDL-cholesterol is meestal niet verhoogd. Overgewicht, alcohol en diabetes verergeren de afwijking. Bij zeer hoge waarden ontstaat risico op acute pancreatitis.</p>",
  "image_url": "",
  "wiki_title": "Hypertriglyceridemia",
  "match": "familiaire hypertriglyceridemie",
  "option_only": true
 },
 "familiaire gecombineerde hyperlipidemie": {
  "title": "Familiaire gecombineerde hyperlipidemie",
  "short": "Bij familiaire gecombineerde hyperlipidemie zijn zowel LDL-cholesterol als triglyceriden verhoogd, met een wisselend patroon binnen families.",
  "definition": "<p><strong>Familiaire gecombineerde hyperlipidemie</strong> is de meest voorkomende erfelijke vetstofwisselingsstoornis. De lever maakt te veel apoB-bevattende lipoproteïnen. Familieleden kunnen verschillende patronen hebben (hoog cholesterol, hoge triglyceriden of beide). Het risico op vroegtijdige hart- en vaatziekten is verhoogd.</p>",
  "image_url": "",
  "wiki_title": "Familial combined hyperlipidemia",
  "match": "familiaire gecombineerde hyperlipidemie|fch",
  "option_only": true
 },
 "chylomicronemie": {
  "title": "Chylomicronemie",
  "short": "Chylomicronemie is ophoping van chylomicronen in het nuchtere bloed, met zeer hoge triglyceriden en risico op pancreatitis.",
  "definition": "<p>Normaal worden <strong>chylomicronen</strong> (die vetten uit de darm vervoeren) binnen uren afgebroken door lipoproteïnelipase. Bij een erfelijk tekort aan dit enzym of zijn cofactor apoC-II, of bij een combinatie van aanleg en secundaire factoren, blijven ze aanwezig. Het plasma ziet er melkachtig uit. Klachten zijn recidiverende pancreatitis, eruptieve xanthomen en lipaemia retinalis.</p>",
  "image_url": "",
  "wiki_title": "Chylomicronemia",
  "match": "chylomicronemie|chylomicronemiesyndroom",
  "option_only": true
 },
 "obstipatie": {
  "title": "Obstipatie",
  "short": "Obstipatie is een te harde en/of te weinig frequente ontlasting, vaak met moeizaam persen.",
  "definition": "<p>Van <strong>obstipatie</strong> spreekt men bij minder dan drie keer per week ontlasting, harde ontlasting, persen of een gevoel van onvolledige lediging. Oorzaken zijn o.a. weinig vezels en vocht, weinig beweging, medicatie (opioïden, ijzer, anticholinergica, calciumantagonisten), hypothyreoïdie, hypercalciëmie, neurologische ziekten en obstructie door een tumor. Behandeling met leefstijladviezen en laxantia zoals macrogol.</p>",
  "image_url": "",
  "wiki_title": "Constipation",
  "match": "obstipatie|verstopping|constipatie",
  "option_only": true
 },
 "ileus": {
  "title": "Ileus",
  "short": "Een ileus is een stilstand van de darmpassage, door een mechanische afsluiting of door verlamming van de darm.",
  "definition": "<p>Bij een <strong>mechanische ileus</strong> is de darm afgesloten, bijvoorbeeld door verklevingen, een beklemde hernia, een tumor of een volvulus; er zijn koliekachtige buikpijn, braken, een opgezette buik en hoogklinkende peristaltiek. Bij een <strong>paralytische ileus</strong> (na operaties, bij peritonitis, elektrolytstoornissen of medicatie) staat de darm stil en is het stil bij auscultatie. Diagnose met X-buikoverzicht of CT.</p>",
  "image_url": "",
  "wiki_title": "Bowel obstruction",
  "match": "ileus|darmafsluiting",
  "option_only": true
 },
 "gastritis": {
  "title": "Gastritis",
  "short": "Gastritis is een ontsteking van het maagslijmvlies, meestal door Helicobacter pylori, NSAID's of alcohol.",
  "definition": "<p><strong>Gastritis</strong> kan acuut of chronisch zijn. Chronische actieve gastritis wordt vooral veroorzaakt door <em>Helicobacter pylori</em> en kan leiden tot atrofie, intestinale metaplasie en een verhoogd risico op maagcarcinoom en MALT-lymfoom. Auto-immuungastritis treft vooral het corpus, met vitamine B12-tekort. Veel patiënten hebben geen klachten.</p>",
  "image_url": "",
  "wiki_title": "Gastritis",
  "match": "gastritis|maagslijmvliesontsteking",
  "option_only": true
 },
 "helicobacter pylori": {
  "title": "Helicobacter pylori",
  "short": "Helicobacter pylori is een gekromde gramnegatieve bacterie die in de maag leeft en gastritis, ulcera, maagcarcinoom en MALT-lymfoom kan veroorzaken.",
  "definition": "<p><strong><em>Helicobacter pylori</em></strong> overleeft in het zure milieu door urease, dat ureum omzet in ammoniak, en nestelt zich onder de slijmlaag. Besmetting gebeurt meestal op jonge leeftijd. Diagnose met een ademtest, antigeentest in de ontlasting of biopten. Eradicatie gebeurt met een protonpompremmer en twee antibiotica.</p>",
  "image_url": "",
  "wiki_title": "Helicobacter pylori",
  "match": "helicobacter pylori|h. pylori|helicobacter",
  "option_only": true
 },
 "appendicitis": {
  "title": "Appendicitis",
  "short": "Appendicitis is een ontsteking van de appendix, met buikpijn die vaak rond de navel begint en naar rechtsonder trekt.",
  "definition": "<p>Bij <strong>appendicitis</strong> raakt het lumen van de appendix afgesloten (bijv. door een fecoliet of lymfoïde hyperplasie), waarna ontsteking en infectie volgen. Klachten: pijn eerst rond de navel, later rechtsonder (McBurney), misselijkheid, koorts en lokale peritoneale prikkeling. Zonder behandeling kan perforatie optreden. Diagnose met echo en/of CT; behandeling meestal appendectomie.</p>",
  "image_url": "",
  "wiki_title": "Appendicitis",
  "match": "appendicitis|blindedarmontsteking",
  "option_only": true
 },
 "coloncarcinoom": {
  "title": "Coloncarcinoom (darmkanker)",
  "short": "Coloncarcinoom is een kwaadaardige tumor van de dikke darm, meestal een adenocarcinoom dat ontstaat uit een poliep.",
  "definition": "<p>Het <strong>colorectaal carcinoom</strong> ontstaat meestal via de adenoom-carcinoomsequentie, waarbij mutaties (o.a. in APC, KRAS, p53) zich opstapelen. Risicofactoren zijn leeftijd, familiaire belasting (FAP, Lynch-syndroom), IBD, rood en bewerkt vlees, alcohol en roken. Klachten: veranderd ontlastingspatroon, bloed bij de ontlasting en ijzergebreksanemie. In Nederland is er een bevolkingsonderzoek met de FIT-test.</p>",
  "image_url": "",
  "wiki_title": "Colorectal cancer",
  "match": "coloncarcinoom|darmkanker|colorectaal carcinoom|dikkedarmkanker",
  "option_only": true
 },
 "colitis ulcerosa": {
  "title": "Colitis ulcerosa",
  "short": "Colitis ulcerosa is een chronische ontstekingsziekte van het slijmvlies van de dikke darm, die altijd in het rectum begint en zich doorlopend naar proximaal uitbreidt.",
  "definition": "<p>Bij <strong>colitis ulcerosa</strong> is alleen de mucosa ontstoken, zonder ‘skip lesions’. Klachten: bloederige diarree met slijm, aandrang en buikkrampen. Extra-intestinale verschijnselen zijn o.a. artritis, uveïtis, erythema nodosum en primaire scleroserende cholangitis. Langdurige ziekte verhoogt het risico op coloncarcinoom. Roken lijkt (in tegenstelling tot bij Crohn) beschermend.</p>",
  "image_url": "",
  "wiki_title": "Ulcerative colitis",
  "match": "colitis ulcerosa|ulceratieve colitis",
  "option_only": true
 },
 "coeliakie": {
  "title": "Coeliakie",
  "short": "Coeliakie is een auto-immuunziekte waarbij gluten een ontsteking van de dunne darm met vlokatrofie veroorzaken.",
  "definition": "<p>Bij <strong>coeliakie</strong> (geassocieerd met HLA-DQ2/DQ8) wordt gliadine door weefseltransglutaminase gemodificeerd en daarna door T-cellen herkend, wat leidt tot vlokatrofie en crypthyperplasie. Klachten: diarree, buikpijn, gewichtsverlies, groeiachterstand, ijzergebrek en vermoeidheid, maar ook atypische presentaties. Diagnose met anti-tTG-antistoffen en een duodenumbiopt; behandeling is een levenslang glutenvrij dieet.</p>",
  "image_url": "",
  "wiki_title": "Coeliac disease",
  "match": "coeliakie|glutenintolerantie|glutenenteropathie",
  "option_only": true
 },
 "gastroenteritis": {
  "title": "Gastro-enteritis",
  "short": "Gastro-enteritis is een ontsteking van maag en darm, meestal door een virus, met braken en diarree.",
  "definition": "<p>Acute <strong>gastro-enteritis</strong> wordt meestal veroorzaakt door virussen (norovirus, rotavirus), soms door bacteriën (<em>Campylobacter</em>, <em>Salmonella</em>) of parasieten. Het belangrijkste risico is uitdroging, vooral bij jonge kinderen en ouderen. Behandeling bestaat vooral uit orale rehydratie; antibiotica zijn zelden nodig.</p>",
  "image_url": "",
  "wiki_title": "Gastroenteritis",
  "match": "gastroenteritis|gastro-enteritis|buikgriep",
  "option_only": true
 },
 "peritonitis": {
  "title": "Peritonitis",
  "short": "Peritonitis is een ontsteking van het buikvlies, meestal door een perforatie of infectie van een buikorgaan.",
  "definition": "<p><strong>Secundaire peritonitis</strong> ontstaat bij perforatie (bijv. ulcus, appendicitis, diverticulitis) of na buikoperaties. Klachten: hevige buikpijn, koorts, een plankharde buik met défense musculaire en loslaatpijn, en een stille buik. Spontane bacteriële peritonitis komt voor bij ascites door levercirrose. Behandeling: antibiotica en vaak chirurgie.</p>",
  "image_url": "",
  "wiki_title": "Peritonitis",
  "match": "peritonitis|buikvliesontsteking",
  "option_only": true
 },
 "peritoneum": {
  "title": "Peritoneum (buikvlies)",
  "short": "Het peritoneum is het sereuze vlies dat de buikwand (pariëtaal) en de buikorganen (visceraal) bekleedt.",
  "definition": "<p>Het <strong>peritoneum</strong> bestaat uit mesotheel op een laagje bindweefsel. Tussen het pariëtale en viscerale blad ligt de peritoneaalholte met een klein beetje vocht. Organen kunnen intraperitoneaal liggen (bijv. maag, jejunum, ileum, colon transversum) of retroperitoneaal (bijv. nieren, pancreas, duodenum grotendeels). Het pariëtale blad is pijngevoelig en goed te lokaliseren, het viscerale niet.</p>",
  "image_url": "",
  "wiki_title": "Peritoneum",
  "match": "peritoneum|buikvlies",
  "option_only": true
 },
 "maagperforatie": {
  "title": "Maagperforatie",
  "short": "Bij een maagperforatie ontstaat een gat in de maagwand, meestal door een ulcus, waardoor maaginhoud in de buikholte lekt.",
  "definition": "<p>Een <strong>perforatie</strong> van maag of duodenum geeft plotselinge, hevige bovenbuikpijn die zich snel over de hele buik uitbreidt, met een plankharde buik (chemische peritonitis). Op een staande X-thorax of CT is vrij lucht onder het diafragma te zien. Risicofactoren zijn NSAID-gebruik, <em>H. pylori</em> en roken. Behandeling is meestal chirurgisch sluiten.</p>",
  "image_url": "",
  "wiki_title": "Gastrointestinal perforation",
  "match": "maagperforatie|perforatie van de maag|ulcusperforatie",
  "option_only": true
 },
 "refluxklachten": {
  "title": "Gastro-oesofageale reflux",
  "short": "Bij refluxklachten stroomt maaginhoud terug in de slokdarm, met zuurbranden en oprispingen.",
  "definition": "<p><strong>Gastro-oesofageale refluxziekte</strong> ontstaat bij een tekortschietende onderste slokdarmsfincter, een hiatus hernia of verhoogde druk in de buik (overgewicht, zwangerschap). Klachten zijn zuurbranden achter het borstbeen en zure oprispingen, soms hoesten of heesheid. Complicaties: oesofagitis, stenose en Barrett-slokdarm. Behandeling met leefstijladviezen en protonpompremmers.</p>",
  "image_url": "",
  "wiki_title": "Gastroesophageal reflux disease",
  "match": "refluxklachten|reflux|gastro-oesofageale reflux|zuurbranden|refluxziekte",
  "option_only": true
 },
 "omeprazol": {
  "title": "Omeprazol",
  "short": "Omeprazol is een protonpompremmer die de maagzuurproductie sterk vermindert.",
  "definition": "<p><strong>Omeprazol</strong> remt de H⁺/K⁺-ATPase van de pariëtale cellen onomkeerbaar. Het wordt gebruikt bij refluxziekte, ulcus pepticum, H. pylori-eradicatie en als maagbescherming bij NSAID-gebruik. Langdurig gebruik kan leiden tot o.a. hypomagnesiëmie, vitamine B12-tekort en een iets verhoogd risico op darminfecties; omeprazol remt CYP2C19.</p>",
  "image_url": "",
  "wiki_title": "Omeprazole",
  "match": "omeprazol|protonpompremmer|ppi",
  "option_only": true
 },
 "h2 antagonisten": {
  "title": "H2-receptorantagonisten",
  "short": "H2-antagonisten blokkeren de histamine-H2-receptor op pariëtale cellen en verminderen zo de zuurproductie.",
  "definition": "<p><strong>H2-receptorantagonisten</strong> zoals famotidine remmen de door histamine gestimuleerde zuursecretie. Ze zijn minder krachtig dan protonpompremmers en verloren daardoor terrein, maar worden nog gebruikt bij lichte refluxklachten. Ze werken sneller in maar korter dan PPI's.</p>",
  "image_url": "",
  "wiki_title": "H2 receptor antagonist",
  "match": "h2 antagonisten|h2-antagonisten|h2-receptorantagonist|ranitidine|famotidine",
  "option_only": true
 },
 "antacida": {
  "title": "Antacida",
  "short": "Antacida zijn zwakke basen die maagzuur direct neutraliseren en snel verlichting geven bij zuurbranden.",
  "definition": "<p><strong>Antacida</strong> bevatten bijvoorbeeld magnesium- of aluminiumhydroxide of calciumcarbonaat. Ze werken binnen minuten maar kort. Magnesiumzouten kunnen diarree geven, aluminiumzouten obstipatie. Ze kunnen de opname van andere geneesmiddelen (bijv. tetracyclines, ijzer, levothyroxine) verminderen.</p>",
  "image_url": "",
  "wiki_title": "Antacid",
  "match": "antacida|antacidum|maagzuurbinders",
  "option_only": true
 },
 "movicolon": {
  "title": "Macrogol (Movicolon)",
  "short": "Movicolon is een osmotisch laxans op basis van macrogol dat water in de darm vasthoudt en de ontlasting zachter maakt.",
  "definition": "<p><strong>Macrogol</strong> (polyethyleenglycol) wordt nauwelijks opgenomen en bindt water in het darmlumen, waardoor de ontlasting zachter en volumineuzer wordt. Het is een eerste keus laxans bij obstipatie, ook bij kinderen en bij opioïdgebruik. De elektrolyten in Movicolon voorkomen netto zoutverlies.</p>",
  "image_url": "",
  "wiki_title": "Polyethylene glycol",
  "match": "movicolon|macrogol",
  "option_only": true
 },
 "gastro-duodenoscopie": {
  "title": "Gastroduodenoscopie",
  "short": "Bij een gastroduodenoscopie worden slokdarm, maag en duodenum met een flexibele endoscoop bekeken.",
  "definition": "<p>Bij een <strong>gastroduodenoscopie</strong> gaat een flexibele scoop via de mond naar het duodenum. Er kunnen biopten worden genomen (bijv. voor coeliakie of H. pylori) en behandelingen worden uitgevoerd, zoals het stelpen van een bloeding of het oprekken van een stenose. Het onderzoek gebeurt met keelverdoving, eventueel met sedatie.</p>",
  "image_url": "",
  "wiki_title": "Esophagogastroduodenoscopy",
  "match": "gastro-duodenoscopie|gastroduodenoscopie|gastroscopie",
  "option_only": true
 },
 "coloscopie": {
  "title": "Coloscopie",
  "short": "Bij een coloscopie wordt de hele dikke darm met een flexibele endoscoop bekeken, na darmvoorbereiding.",
  "definition": "<p>Een <strong>coloscopie</strong> wordt gedaan bij o.a. bloed bij de ontlasting, een veranderd ontlastingspatroon, ijzergebreksanemie, een positieve FIT-test en voor surveillance bij poliepen of IBD. Poliepen kunnen direct worden verwijderd en er kunnen biopten worden genomen. Risico's zijn bloeding en (zelden) perforatie.</p>",
  "image_url": "",
  "wiki_title": "Colonoscopy",
  "match": "coloscopie|colonoscopie",
  "option_only": true
 },
 "diagnostische laparoscopie": {
  "title": "Diagnostische laparoscopie",
  "short": "Bij een diagnostische laparoscopie wordt via kleine sneetjes met een camera in de buikholte gekeken.",
  "definition": "<p>Bij een <strong>laparoscopie</strong> wordt de buik opgeblazen met CO₂ en via kleine incisies een camera en instrumenten ingebracht. Het wordt diagnostisch gebruikt bij onduidelijke buikpijn, verdenking op endometriose of buitenbaarmoederlijke zwangerschap en voor stadiëring van tumoren; vaak kan in dezelfde ingreep worden behandeld.</p>",
  "image_url": "",
  "wiki_title": "Laparoscopy",
  "match": "diagnostische laparoscopie|laparoscopie|kijkoperatie",
  "option_only": true
 },
 "mri abdomen": {
  "title": "MRI-abdomen",
  "short": "Een MRI van de buik maakt met een magneetveld gedetailleerde beelden van de buikorganen, zonder röntgenstraling.",
  "definition": "<p>Een <strong>MRI-abdomen</strong> is vooral geschikt voor het karakteriseren van lever- en pancreaslaesies, het afbeelden van de galwegen (MRCP), de dunne darm bij de ziekte van Crohn en het rectum bij stadiëring van rectumcarcinoom. Het duurt langer dan een CT en is gevoeliger voor beweging; metalen implantaten kunnen een contra-indicatie zijn.</p>",
  "image_url": "",
  "wiki_title": "Magnetic resonance imaging",
  "match": "mri abdomen|mri van de buik|mri-abdomen",
  "option_only": true
 },
 "mri": {
  "title": "MRI",
  "short": "MRI maakt met een sterk magneetveld en radiogolven gedetailleerde beelden van weke delen, zonder ioniserende straling.",
  "definition": "<p>Bij <strong>MRI</strong> worden waterstofkernen in een sterk magneetveld door radiogolven aangeslagen; het signaal bij terugkeer verschilt per weefseltype. MRI is bijzonder geschikt voor hersenen, ruggenmerg, gewrichten, weke delen en het bekken. Nadelen zijn de lange duur, kosten en beperkingen bij pacemakers en sommige metalen implantaten.</p>",
  "image_url": "",
  "wiki_title": "Magnetic resonance imaging",
  "match": "mri|mri-scan|magnetic resonance imaging",
  "option_only": true
 },
 "x-boz": {
  "title": "X-buikoverzicht (X-BOZ)",
  "short": "Een X-buikoverzicht is een röntgenfoto van de buik, vooral gebruikt om darmafsluiting of vrij lucht aan te tonen.",
  "definition": "<p>Een <strong>X-BOZ</strong> toont darmgaspatronen, verwijde darmlissen met vloeistofspiegels (ileus), vrij lucht (perforatie, beter te zien op een staande X-thorax), stenen en vreemde voorwerpen. Door de beperkte informatie is het in veel situaties vervangen door een echo of CT.</p>",
  "image_url": "",
  "wiki_title": "Abdominal x-ray",
  "match": "x-boz|buikoverzichtsfoto|x-buikoverzicht",
  "option_only": true
 },
 "leukocyten": {
  "title": "Leukocyten (witte bloedcellen)",
  "short": "Leukocyten zijn de witte bloedcellen van het afweersysteem: granulocyten, monocyten en lymfocyten.",
  "definition": "<p><strong>Leukocyten</strong> worden in het beenmerg gemaakt (lymfocyten rijpen deels in thymus en lymfoïde organen). Normaal zijn er ongeveer 4–10 × 10⁹/L in het bloed. De differentiatie onderscheidt neutrofielen, lymfocyten, monocyten, eosinofielen en basofielen; de verhouding geeft aanwijzingen voor bijv. bacteriële infectie, virale infectie, allergie of leukemie.</p>",
  "image_url": "",
  "wiki_title": "White blood cell",
  "match": "leukocyten|witte bloedcellen|leukocyt",
  "option_only": true
 },
 "leukocytose": {
  "title": "Leukocytose",
  "short": "Leukocytose is een verhoogd aantal witte bloedcellen, meestal door infectie of ontsteking.",
  "definition": "<p>Bij <strong>leukocytose</strong> is het aantal leukocyten boven ongeveer 10 × 10⁹/L. Een neutrofiele leukocytose met linksverschuiving past bij bacteriële infectie; ook stress, corticosteroïden, roken, trauma en necrose kunnen het verhogen. Sterk verhoogde waarden met onrijpe cellen in het bloed wijzen op leukemie of een leukemoïde reactie.</p>",
  "image_url": "",
  "wiki_title": "Leukocytosis",
  "match": "leukocytose",
  "option_only": true
 },
 "granulocyten": {
  "title": "Granulocyten",
  "short": "Granulocyten zijn witte bloedcellen met korrels in het cytoplasma: neutrofielen, eosinofielen en basofielen.",
  "definition": "<p><strong>Granulocyten</strong> ontstaan uit de myeloïde lijn via myeloblast, promyelocyt, myelocyt, metamyelocyt en staafkernige vorm. <em>Neutrofielen</em> fagocyteren bacteriën, <em>eosinofielen</em> spelen een rol bij parasitaire infecties en allergie, <em>basofielen</em> geven histamine af. Ze maken deel uit van de aangeboren afweer.</p>",
  "image_url": "",
  "wiki_title": "Granulocyte",
  "match": "granulocyten|granulocyt",
  "option_only": true
 },
 "myelocyten": {
  "title": "Myelocyten",
  "short": "Myelocyten zijn tussenstadia in de rijping van granulocyten, na de promyelocyt; normaal komen ze alleen in het beenmerg voor.",
  "definition": "<p>In een <strong>myelocyt</strong> verschijnen voor het eerst de specifieke korrels die bepalen of de cel een neutrofiel, eosinofiel of basofiel wordt. Het is het laatste stadium dat nog kan delen. Myelocyten in het perifere bloed (‘linksverschuiving’ of een leuko-erytroblastair beeld) passen bij ernstige infectie, chronische myeloïde leukemie of beenmerginfiltratie.</p>",
  "image_url": "",
  "wiki_title": "Myelocyte",
  "match": "myelocyten|myelocyt",
  "option_only": true
 },
 "trombopenie": {
  "title": "Trombocytopenie",
  "short": "Trombocytopenie is een te laag aantal bloedplaatjes, met een verhoogde neiging tot bloedingen.",
  "definition": "<p>Bij <strong>trombocytopenie</strong> (&lt;150 × 10⁹/L) ontstaan pas bij lage waarden (&lt;20–50) spontane huid- en slijmvliesbloedingen zoals petechiën en neusbloedingen. Oorzaken: verminderde aanmaak (beenmergziekte, chemotherapie, B12-tekort), versterkte afbraak (ITP, HIT, DIS, TTP), sequestratie in een vergrote milt of verdunning. Een pseudotrombopenie door klontering in EDTA-buizen moet worden uitgesloten.</p>",
  "image_url": "",
  "wiki_title": "Thrombocytopenia",
  "match": "trombopenie|trombocytopenie",
  "option_only": true
 },
 "autoimmuuntrombocytopenie (aitp)": {
  "title": "Immuuntrombocytopenie (ITP)",
  "short": "Bij ITP breken auto-antistoffen tegen bloedplaatjes deze af, met een geïsoleerde trombocytopenie.",
  "definition": "<p>Bij <strong>immuuntrombocytopenie</strong> worden plaatjes met antistoffen beladen en in de milt afgebroken; ook de aanmaak wordt geremd. Bij kinderen volgt het vaak op een virale infectie en herstelt het meestal spontaan; bij volwassenen is het vaker chronisch. Het is een diagnose na uitsluiting van andere oorzaken. Behandeling bij bloedingen of zeer lage waarden: corticosteroïden, immunoglobulinen, TPO-agonisten.</p>",
  "image_url": "",
  "wiki_title": "Immune thrombocytopenic purpura",
  "match": "autoimmuuntrombocytopenie (aitp)|itp|aitp|immuuntrombocytopenie|idiopathische trombocytopenische purpura",
  "option_only": true
 },
 "heparine-geïnduceerde trombopenie (hit)": {
  "title": "Heparine-geïnduceerde trombocytopenie (HIT)",
  "short": "HIT is een immuunreactie op heparine waarbij antistoffen bloedplaatjes activeren, met trombocytopenie en juist trombose.",
  "definition": "<p>Bij <strong>HIT</strong> vormen antistoffen complexen met heparine en plaatjesfactor 4. Deze activeren bloedplaatjes, waardoor het plaatjesgetal daalt (meestal 5–10 dagen na start) en er paradoxaal veneuze en arteriële trombose ontstaat. Heparine moet direct worden gestopt en vervangen door een niet-heparine antistollingsmiddel.</p>",
  "image_url": "",
  "wiki_title": "Heparin-induced thrombocytopenia",
  "match": "heparine-geïnduceerde trombopenie (hit)|heparine-geïnduceerde trombocytopenie",
  "option_only": true
 },
 "ijzergebreksanemie": {
  "title": "IJzergebreksanemie",
  "short": "IJzergebreksanemie is bloedarmoede door een tekort aan ijzer, met kleine, bleke rode bloedcellen.",
  "definition": "<p><strong>IJzergebreksanemie</strong> geeft een microcytaire, hypochrome anemie met een laag ferritine. Oorzaken zijn bloedverlies (menstruatie, maag-darmkanaal), te weinig inname, verhoogde behoefte (groei, zwangerschap) of verminderde opname (coeliakie, maagresectie). Bij mannen en vrouwen na de menopauze moet een bron van bloedverlies in de tractus digestivus worden uitgesloten.</p>",
  "image_url": "",
  "wiki_title": "Iron-deficiency anemia",
  "match": "ijzergebreksanemie|ijzergebrek",
  "option_only": true
 },
 "hemolyse": {
  "title": "Hemolyse",
  "short": "Hemolyse is het voortijdig afbreken van rode bloedcellen, in de bloedbaan of in milt en lever.",
  "definition": "<p>Bij <strong>hemolyse</strong> zijn het LDH en ongeconjugeerd bilirubine verhoogd, het haptoglobine verlaagd en het aantal reticulocyten gestegen. Oorzaken kunnen in de cel liggen (membraandefecten zoals sferocytose, enzymdefecten zoals G6PD-deficiëntie, hemoglobinopathieën) of erbuiten (auto-antistoffen, transfusiereacties, mechanische beschadiging, infecties zoals malaria). Hemolyse kan ook een kunstmatige laboratoriumfout zijn bij moeizame bloedafname.</p>",
  "image_url": "",
  "wiki_title": "Hemolysis",
  "match": "hemolyse|hemolytische anemie",
  "option_only": true
 },
 "hemochromatose": {
  "title": "Hemochromatose",
  "short": "Hemochromatose is een erfelijke ijzerstapelingsziekte waarbij te veel ijzer uit de darm wordt opgenomen.",
  "definition": "<p>Bij <strong>hereditaire hemochromatose</strong> (meestal homozygotie voor de C282Y-mutatie in het HFE-gen) is er te weinig hepcidine, waardoor ijzer ongeremd wordt opgenomen. IJzer stapelt in lever, pancreas, hart, gewrichten en huid, met leverfibrose of -cirrose, diabetes, cardiomyopathie, artropathie en een bronzen huid. De transferrineverzadiging en het ferritine zijn verhoogd; behandeling met aderlatingen.</p>",
  "image_url": "",
  "wiki_title": "Hemochromatosis",
  "match": "hemochromatose|hereditaire hemochromatose|ijzerstapeling",
  "option_only": true
 },
 "bloedtransfusie": {
  "title": "Bloedtransfusie",
  "short": "Bij een bloedtransfusie krijgt een patiënt bloed of bloedproducten (erytrocyten, plaatjes, plasma) van een donor.",
  "definition": "<p>Bij een <strong>erytrocytentransfusie</strong> moeten de AB0- en rhesusbloedgroepen en eventuele irregulaire antistoffen passen. Risico's zijn o.a. een acute hemolytische reactie bij AB0-incompatibiliteit, koorts- en allergische reacties, overvulling (TACO), transfusiegerelateerde longschade (TRALI) en, zeldzaam, infecties. Een transfusie wordt gegeven op basis van klinische noodzaak en een Hb-drempel.</p>",
  "image_url": "",
  "wiki_title": "Blood transfusion",
  "match": "bloedtransfusie|transfusie",
  "option_only": true
 },
 "factor v leiden mutatie": {
  "title": "Factor V Leiden",
  "short": "Factor V Leiden is een erfelijke mutatie waardoor factor V ongevoelig is voor afbraak door geactiveerd proteïne C, met een verhoogd tromboserisico.",
  "definition": "<p>Bij <strong>factor V Leiden</strong> (een puntmutatie in het F5-gen) kan geactiveerd proteïne C factor Va niet goed inactiveren (APC-resistentie). Het is de meest voorkomende erfelijke trombofilie bij mensen van Europese afkomst. Het verhoogt het risico op veneuze trombose, vooral in combinatie met orale anticonceptie, zwangerschap of immobilisatie.</p>",
  "image_url": "",
  "wiki_title": "Factor V Leiden",
  "match": "factor v leiden mutatie|factor v leiden|fvl",
  "option_only": true
 },
 "lupus anticoagulans": {
  "title": "Lupus anticoagulans",
  "short": "Lupus anticoagulans is een antifosfolipide-antistof die in het lab de stolling verlengt, maar in het lichaam juist trombose bevordert.",
  "definition": "<p><strong>Lupus anticoagulans</strong> wordt aangetoond met stollingstests (bijv. een verlengde APTT die niet corrigeert bij menging). Samen met anti-cardiolipine en anti-β2-glycoproteïne I vormt het de basis van het antifosfolipidensyndroom: veneuze en arteriële trombose en zwangerschapscomplicaties (herhaalde miskramen). Het komt voor met of zonder SLE.</p>",
  "image_url": "",
  "wiki_title": "Lupus anticoagulant",
  "match": "lupus anticoagulans",
  "option_only": true
 },
 "hemofilie c": {
  "title": "Hemofilie C (factor XI-deficiëntie)",
  "short": "Hemofilie C is een erfelijk tekort aan stollingsfactor XI, met meestal milde bloedingsneiging na operaties of trauma.",
  "definition": "<p><strong>Factor XI-deficiëntie</strong> erft autosomaal (recessief) over en treft daardoor mannen en vrouwen; het komt relatief vaak voor bij Asjkenazische joden. De APTT is verlengd. Spontane bloedingen zijn zeldzaam; vooral na ingrepen in weefsels met veel fibrinolyse (mond, neus, urinewegen) kan nabloeding optreden.</p>",
  "image_url": "",
  "wiki_title": "Factor XI deficiency",
  "match": "hemofilie c|factor xi-deficiëntie|factor xi deficiëntie",
  "option_only": true
 },
 "factor xiii deficiëntie": {
  "title": "Factor XIII-deficiëntie",
  "short": "Bij factor XIII-deficiëntie wordt het fibrinestolsel niet goed verknoopt, met nabloedingen terwijl PT en APTT normaal zijn.",
  "definition": "<p><strong>Factor XIII</strong> verknoopt fibrinemonomeren tot een stabiel stolsel. Bij een (zeldzaam, autosomaal recessief) tekort zijn de standaard stollingstests normaal, maar ontstaan nabloedingen, bloedingen uit de navelstreng bij pasgeborenen, slechte wondgenezing en hersenbloedingen. Diagnose met een specifieke factor XIII-bepaling.</p>",
  "image_url": "",
  "wiki_title": "Factor XIII deficiency",
  "match": "factor xiii deficiëntie|factor xiii-deficiëntie",
  "option_only": true
 },
 "de ziekte van glanzmann": {
  "title": "Trombasthenie van Glanzmann",
  "short": "Bij de ziekte van Glanzmann ontbreekt de GPIIb/IIIa-receptor op bloedplaatjes, waardoor ze niet aan elkaar kunnen binden.",
  "definition": "<p>De <strong>trombasthenie van Glanzmann</strong> is een zeldzame, autosomaal recessieve plaatjesfunctiestoornis. Zonder functioneel GPIIb/IIIa kunnen plaatjes geen fibrinogeenbruggen vormen en dus niet aggregeren. Het plaatjesgetal is normaal, maar er zijn slijmvliesbloedingen en een verlengde bloedingstijd. Dezelfde receptor is het doelwit van GPIIb/IIIa-remmers.</p>",
  "image_url": "",
  "wiki_title": "Glanzmann's thrombasthenia",
  "match": "de ziekte van glanzmann|ziekte van glanzmann|trombasthenie van glanzmann",
  "option_only": true
 },
 "hodgkin lymfoom": {
  "title": "Hodgkinlymfoom",
  "short": "Het Hodgkinlymfoom is een kwaadaardige ziekte van het lymfeweefsel, gekenmerkt door Reed-Sternbergcellen.",
  "definition": "<p>Het <strong>Hodgkinlymfoom</strong> komt vooral voor bij jongvolwassenen en ouderen. Het begint vaak met een pijnloze lymfeklierzwelling in de hals of het mediastinum en verspreidt zich via aangrenzende kliergroepen. B-symptomen (koorts, nachtzweten, gewichtsverlies) en jeuk komen voor. In het weefsel zijn grote Reed-Sternbergcellen (CD15+, CD30+) in een ontstekingsachtergrond te zien. De prognose is meestal goed.</p>",
  "image_url": "",
  "wiki_title": "Hodgkin lymphoma",
  "match": "hodgkin lymfoom|hodgkinlymfoom|ziekte van hodgkin",
  "option_only": true
 },
 "diffuus grootcellig b cel lymfoom": {
  "title": "Diffuus grootcellig B-cellymfoom",
  "short": "Het diffuus grootcellig B-cellymfoom is een agressief non-Hodgkinlymfoom dat snel groeit maar vaak goed op behandeling reageert.",
  "definition": "<p><strong>DLBCL</strong> is het meest voorkomende non-Hodgkinlymfoom. Het presenteert zich vaak met snel groeiende lymfeklieren of een tumor buiten de klieren (bijv. maag, hersenen), soms met B-symptomen. Microscopisch zijn er grote B-cellen in een diffuus groeipatroon. Behandeling met R-CHOP-chemotherapie kan een groot deel genezen.</p>",
  "image_url": "",
  "wiki_title": "Diffuse large B-cell lymphoma",
  "match": "diffuus grootcellig b cel lymfoom|diffuus grootcellig b-cellymfoom|dlbcl",
  "option_only": true
 },
 "chronische lymfatische leukemie": {
  "title": "Chronische lymfatische leukemie (CLL)",
  "short": "CLL is een langzaam verlopende leukemie met ophoping van rijpe, maar disfunctionele B-lymfocyten, vooral bij ouderen.",
  "definition": "<p>Bij <strong>CLL</strong> is er een lymfocytose met kleine rijpe B-cellen (CD5+, CD23+) en kenmerkende ‘Gumprecht-schaduwen’ in het uitstrijkje. Vaak wordt het toevallig ontdekt. Later kunnen lymfadenopathie, splenomegalie, anemie, trombopenie, hypogammaglobulinemie (infecties) en auto-immuuncytopenieën optreden. Behandeling pas bij actieve ziekte.</p>",
  "image_url": "",
  "wiki_title": "Chronic lymphocytic leukemia",
  "match": "chronische lymfatische leukemie|cll",
  "option_only": true
 },
 "igg": {
  "title": "IgG",
  "short": "IgG is de meest voorkomende antistofklasse in het bloed; het is belangrijk bij de secundaire immuunrespons en passeert de placenta.",
  "definition": "<p><strong>IgG</strong> is een monomeer en heeft vier subklassen. Het werkt via neutralisatie, opsonisatie (via Fcγ-receptoren op fagocyten) en complementactivatie. Het is de belangrijkste antistof bij een herhaalde blootstelling en de enige klasse die actief via de placenta naar de foetus gaat, wat pasgeborenen maandenlang beschermt.</p>",
  "image_url": "",
  "wiki_title": "Immunoglobulin G",
  "match": "igg|immunoglobuline g",
  "option_only": true
 },
 "humorale afweer": {
  "title": "Humorale afweer",
  "short": "De humorale afweer is het deel van de verworven afweer dat via antistoffen van B-cellen werkt.",
  "definition": "<p>Bij de <strong>humorale afweer</strong> herkennen B-cellen een antigeen, worden ze (meestal met hulp van T-helpercellen) geactiveerd en differentiëren ze tot plasmacellen die antistoffen maken. Antistoffen neutraliseren toxines en virussen, opsoniseren bacteriën en activeren complement. Ze zijn vooral belangrijk tegen extracellulaire bacteriën; een tekort geeft recidiverende luchtweginfecties.</p>",
  "image_url": "",
  "wiki_title": "Humoral immunity",
  "match": "humorale afweer|humorale immuniteit",
  "option_only": true
 },
 "th1 cellen": {
  "title": "Th1-cellen",
  "short": "Th1-cellen zijn CD4-T-helpercellen die via IFN-γ macrofagen activeren en zo intracellulaire ziekteverwekkers bestrijden.",
  "definition": "<p><strong>Th1-cellen</strong> ontstaan onder invloed van IL-12 en maken vooral IFN-γ. Daardoor worden macrofagen beter in het doden van opgenomen micro-organismen zoals mycobacteriën. Th1-reacties liggen ten grondslag aan type IV-overgevoeligheid en granuloomvorming. Tegenover hen staan o.a. Th2-cellen (IL-4, IL-5, IL-13; allergie en parasieten) en Th17-cellen.</p>",
  "image_url": "",
  "wiki_title": "T helper cell",
  "match": "th1 cellen|th1-cellen|th1",
  "option_only": true
 },
 "ifn-α": {
  "title": "Interferon-alfa",
  "short": "Interferon-alfa is een type I-interferon dat door geïnfecteerde cellen wordt gemaakt en naburige cellen in een antivirale toestand brengt.",
  "definition": "<p><strong>Type I-interferonen</strong> (IFN-α en IFN-β) worden vooral door plasmacytoïde dendritische cellen en geïnfecteerde cellen afgegeven. Ze remmen virale replicatie in omliggende cellen, verhogen de MHC-I-expressie en activeren NK-cellen. Als geneesmiddel werd interferon-alfa gebruikt bij chronische hepatitis B en C en sommige maligniteiten; bijwerkingen zijn griepachtige klachten en depressie.</p>",
  "image_url": "",
  "wiki_title": "Interferon type I",
  "match": "ifn-α|ifn-alfa|interferon-alfa|interferon alfa|type i interferon",
  "option_only": true
 },
 "icam-1": {
  "title": "ICAM-1",
  "short": "ICAM-1 is een adhesiemolecuul op geactiveerd endotheel dat via integrines (LFA-1) leukocyten stevig laat binden.",
  "definition": "<p><strong>ICAM-1</strong> behoort tot de immunoglobuline-superfamilie en wordt door IL-1 en TNF op endotheel tot expressie gebracht. Het bindt aan integrines zoals LFA-1 en Mac-1 op leukocyten, wat vaste adhesie en transmigratie mogelijk maakt. ICAM-1 is ook de receptor voor de meeste rhinovirussen.</p>",
  "image_url": "",
  "wiki_title": "ICAM-1",
  "match": "icam-1|intercellular adhesion molecule-1",
  "option_only": true
 },
 "cd31 (pecam-1)": {
  "title": "PECAM-1 (CD31)",
  "short": "PECAM-1 (CD31) is een adhesiemolecuul op de verbindingen tussen endotheelcellen dat de doorgang (diapedese) van leukocyten bevordert.",
  "definition": "<p><strong>PECAM-1</strong> komt voor op endotheelcellen (vooral op de celgrenzen), bloedplaatjes en leukocyten. Door homofiele binding helpt het leukocyten tussen endotheelcellen door het weefsel in te gaan. In de pathologie is CD31 een marker om endotheel en vaattumoren aan te tonen.</p>",
  "image_url": "",
  "wiki_title": "PECAM-1",
  "match": "cd31 (pecam-1)|cd31|pecam-1",
  "option_only": true
 },
 "sialyl-lewis-x gemodificeerde glycoproteïnen": {
  "title": "Sialyl-Lewis X",
  "short": "Sialyl-Lewis X is een suikerstructuur op leukocyten die bindt aan selectines op het endotheel en zo het ‘rollen’ mogelijk maakt.",
  "definition": "<p><strong>Sialyl-Lewis X</strong> is een tetrasacharide op glycoproteïnen (zoals PSGL-1) van leukocyten. Het is het ligand voor E- en P-selectine op geactiveerd endotheel. Een erfelijk defect in de vorming ervan (leukocyte adhesion deficiency type II) geeft recidiverende infecties door verstoorde leukocytenrekrutering.</p>",
  "image_url": "",
  "wiki_title": "Sialyl-Lewis X",
  "match": "sialyl-lewis-x gemodificeerde glycoproteïnen|sialyl-lewis-x|sialyl lewis x",
  "option_only": true
 },
 "fcε-receptoren": {
  "title": "Fcε-receptoren",
  "short": "Fcε-receptoren binden het Fc-deel van IgE; op mestcellen en basofielen zorgen ze voor de allergische reactie.",
  "definition": "<p>De hoog-affiene <strong>FcεRI</strong> zit op mestcellen en basofielen en houdt IgE ook zonder antigeen vast. Als een allergeen twee gebonden IgE-moleculen verbindt, degranuleert de cel en komen histamine, leukotriënen en cytokines vrij (type I-reactie). Omalizumab (anti-IgE) voorkomt de binding van IgE aan deze receptor.</p>",
  "image_url": "",
  "wiki_title": "Fc receptor",
  "match": "fcε-receptoren|fcε-receptor|fc-epsilon-receptor|fcεri",
  "option_only": true
 },
 "fcγ-receptoren": {
  "title": "Fcγ-receptoren",
  "short": "Fcγ-receptoren binden het Fc-deel van IgG; ze laten fagocyten en NK-cellen met antistoffen beladen doelwitten herkennen.",
  "definition": "<p><strong>Fcγ-receptoren</strong> komen voor op macrofagen, neutrofielen, NK-cellen en B-cellen. Ze bemiddelen opsonisatie en fagocytose van IgG-gecoate deeltjes en antilichaam-afhankelijke cellulaire cytotoxiciteit (ADCC). De neonatale Fc-receptor (FcRn) zorgt voor transport van IgG over de placenta en voor de lange halfwaardetijd van IgG.</p>",
  "image_url": "",
  "wiki_title": "Fc receptor",
  "match": "fcγ-receptoren|fcγ-receptor|fc-gamma-receptor",
  "option_only": true
 },
 "rubor": {
  "title": "Rubor (roodheid)",
  "short": "Rubor (roodheid) is een van de klassieke ontstekingsverschijnselen, door verwijding van de bloedvaten.",
  "definition": "<p>De klassieke tekenen van ontsteking zijn <strong>rubor</strong> (roodheid), calor (warmte), tumor (zwelling), dolor (pijn) en functio laesa (functieverlies). Roodheid en warmte ontstaan door arterioladilatatie onder invloed van mediatoren als histamine, prostaglandinen en NO, waardoor meer bloed door het ontstoken gebied stroomt.</p>",
  "image_url": "",
  "wiki_title": "Inflammation",
  "match": "rubor|roodheid",
  "option_only": true
 },
 "reumatoïde artritis": {
  "title": "Reumatoïde artritis",
  "short": "Reumatoïde artritis is een chronische auto-immuunziekte met symmetrische ontsteking van vooral de kleine gewrichten van handen en voeten.",
  "definition": "<p>Bij <strong>reumatoïde artritis</strong> leidt synovitis tot pannusvorming en erosie van kraakbeen en bot. Kenmerken: symmetrische polyartritis van MCP-, PIP- en MTP-gewrichten, ochtendstijfheid langer dan een uur, reumafactor en anti-CCP-antistoffen. Extra-articulair: reumanoduli, longaandoeningen, vasculitis. Vroege behandeling met DMARD's (zoals methotrexaat) voorkomt gewrichtsschade.</p>",
  "image_url": "",
  "wiki_title": "Rheumatoid arthritis",
  "match": "reumatoïde artritis|reumatoide artritis|reumatoïde arthritis",
  "option_only": true
 },
 "artritis": {
  "title": "Artritis",
  "short": "Artritis is een ontsteking van een gewricht, met pijn, zwelling, warmte en bewegingsbeperking.",
  "definition": "<p><strong>Artritis</strong> wordt ingedeeld naar het aantal gewrichten (mono-, oligo-, polyartritis) en de oorzaak: infectieus (septische artritis), kristalgeïnduceerd (jicht, pseudojicht), auto-immuun (reumatoïde artritis, spondyloartritis, SLE) of reactief. Bij een acute monoartritis is een gewrichtspunctie belangrijk om infectie en kristallen aan te tonen.</p>",
  "image_url": "",
  "wiki_title": "Arthritis",
  "match": "artritis|arthritis|gewrichtsontsteking",
  "option_only": true
 },
 "jicht": {
  "title": "Jicht",
  "short": "Jicht is een gewrichtsontsteking door neerslag van uraatkristallen bij een verhoogd urinezuur.",
  "definition": "<p>Bij <strong>jicht</strong> slaan mononatriumuraatkristallen neer in en rond gewrichten. Een aanval begint plotseling, vaak ’s nachts, met een rood, gezwollen, zeer pijnlijk gewricht. Uitlokkers zijn alcohol, purinerijk voedsel, diuretica en uitdroging. In het gewrichtsvocht zijn naaldvormige, negatief dubbelbrekende kristallen te zien. Behandeling van een aanval met NSAID's, colchicine of corticosteroïden; preventie met allopurinol.</p>",
  "image_url": "",
  "wiki_title": "Gout",
  "match": "jicht|arthritis urica|podagra",
  "option_only": true
 },
 "spondylartrose": {
  "title": "Spondylartrose",
  "short": "Spondylartrose is artrose van de facetgewrichten van de wervelkolom, vaak samen met degeneratie van tussenwervelschijven.",
  "definition": "<p>Bij <strong>spondylartrose</strong> ontstaan kraakbeenverlies, osteofyten en kapselverdikking in de facetgewrichten. Het komt veel voor op oudere leeftijd en geeft niet altijd klachten. Osteofyten kunnen het wervelkanaal of de foramina vernauwen, met wortelprikkeling of een lumbaal kanaalstenose als gevolg.</p>",
  "image_url": "",
  "wiki_title": "Spondylosis",
  "match": "spondylartrose|spondylose",
  "option_only": true
 },
 "osteoporose": {
  "title": "Osteoporose",
  "short": "Osteoporose is een verlaagde botmassa met verzwakte botstructuur, waardoor botten sneller breken.",
  "definition": "<p>Bij <strong>osteoporose</strong> is de afbraak van bot groter dan de opbouw. Risicofactoren: hoge leeftijd, postmenopauzaal oestrogeentekort, corticosteroïden, laag lichaamsgewicht, roken, alcohol en weinig beweging. Typische fracturen zijn wervelinzakkingen, heupfracturen en distale radiusfracturen. Diagnose met een DEXA-scan (T-score ≤ −2,5); behandeling o.a. met bisfosfonaten, calcium en vitamine D.</p>",
  "image_url": "",
  "wiki_title": "Osteoporosis",
  "match": "osteoporose|botontkalking",
  "option_only": true
 },
 "fosamax": {
  "title": "Alendroninezuur (Fosamax)",
  "short": "Fosamax (alendroninezuur) is een bisfosfonaat dat botafbraak door osteoclasten remt; gebruikt bij osteoporose.",
  "definition": "<p><strong>Bisfosfonaten</strong> binden aan hydroxyapatiet en worden opgenomen door osteoclasten, die daardoor minder bot afbreken. Alendroninezuur wordt eenmaal per week ingenomen, nuchter met een vol glas water, waarna iemand 30 minuten rechtop moet blijven om slokdarmirritatie te voorkomen. Zeldzame bijwerkingen zijn osteonecrose van de kaak en atypische femurfracturen.</p>",
  "image_url": "",
  "wiki_title": "Alendronic acid",
  "match": "fosamax|alendroninezuur|alendronaat|bisfosfonaat|bisfosfonaten",
  "option_only": true
 },
 "osteomyelitis": {
  "title": "Osteomyelitis",
  "short": "Osteomyelitis is een infectie van het bot, meestal door Staphylococcus aureus.",
  "definition": "<p><strong>Osteomyelitis</strong> ontstaat via de bloedbaan (vooral bij kinderen in de metafysen van lange pijpbeenderen), vanuit een nabijgelegen infectie (bijv. diabetische voet, decubitus) of na een open fractuur of operatie. Klachten: pijn, koorts, zwelling. Diagnose met MRI en kweek (bot of bloed). Chronische osteomyelitis met dood bot (sequester) vergt vaak chirurgie naast langdurige antibiotica.</p>",
  "image_url": "",
  "wiki_title": "Osteomyelitis",
  "match": "osteomyelitis|botontsteking",
  "option_only": true
 },
 "bursitis": {
  "title": "Bursitis",
  "short": "Bursitis is een ontsteking van een slijmbeurs, bijvoorbeeld bij elleboog, knie of heup.",
  "definition": "<p>Een <strong>bursa</strong> is een met vocht gevuld zakje dat wrijving tussen pees, spier, bot en huid vermindert. <strong>Bursitis</strong> ontstaat door overbelasting, druk, trauma, jicht of infectie. Oppervlakkige bursae (bij olecranon en patella) zwellen zichtbaar op; bij een rood, warm en pijnlijk beeld moet aan een septische bursitis worden gedacht.</p>",
  "image_url": "",
  "wiki_title": "Bursitis",
  "match": "bursitis|slijmbeursontsteking",
  "option_only": true
 },
 "polymyalgia reumatica": {
  "title": "Polymyalgia reumatica",
  "short": "Polymyalgia reumatica is een ontstekingsziekte bij ouderen met pijn en stijfheid in schouder- en heupgordel.",
  "definition": "<p><strong>Polymyalgia reumatica</strong> treft vooral mensen boven de 50, vaker vrouwen. Kenmerkend zijn ochtendstijfheid en pijn in nek, schouders en heupen, met moeite om op te staan of de armen te heffen, en een sterk verhoogde BSE/CRP. Er is geen echte spierzwakte. De ziekte reageert snel op lage dosis prednison en gaat soms samen met reuscelarteriitis.</p>",
  "image_url": "",
  "wiki_title": "Polymyalgia rheumatica",
  "match": "polymyalgia reumatica|polymyalgia rheumatica|pmr",
  "option_only": true
 },
 "arteritis temporalis": {
  "title": "Arteriitis temporalis (reuscelarteriitis)",
  "short": "Arteriitis temporalis is een granulomateuze vasculitis van grote en middelgrote arteriën bij ouderen, met risico op blindheid.",
  "definition": "<p>Bij <strong>reuscelarteriitis</strong> zijn vooral takken van de a. carotis externa (zoals de a. temporalis) en soms de aorta en haar takken ontstoken. Klachten: nieuwe hoofdpijn, gevoelige slaapslagader, kauwclaudicatie, visusstoornissen en algemene malaise, met een sterk verhoogde BSE/CRP. Bij verdenking direct hoge dosis prednison om blindheid te voorkomen; diagnose met echo of biopt.</p>",
  "image_url": "",
  "wiki_title": "Giant cell arteritis",
  "match": "arteritis temporalis|arteriitis temporalis|reuscelarteriitis|giant cell arteritis",
  "option_only": true
 },
 "pariarteriitis nodosa": {
  "title": "Polyarteriitis nodosa",
  "short": "Polyarteriitis nodosa is een necrotiserende vasculitis van middelgrote arteriën, zonder ANCA en zonder glomerulonefritis.",
  "definition": "<p>Bij <strong>polyarteriitis nodosa</strong> raken middelgrote spierarteriën ontstoken, met microaneurysmata en infarcten in o.a. nieren (hypertensie), darm (buikpijn), huid (livedo, ulcera) en zenuwen (mononeuritis multiplex). Een deel van de gevallen hangt samen met hepatitis B. De longen zijn meestal niet aangedaan.</p>",
  "image_url": "",
  "wiki_title": "Polyarteritis nodosa",
  "match": "pariarteriitis nodosa|polyarteriitis nodosa|periarteriitis nodosa",
  "option_only": true
 },
 "ziekte van kawasaki": {
  "title": "Ziekte van Kawasaki",
  "short": "De ziekte van Kawasaki is een vasculitis bij jonge kinderen met langdurige koorts; de belangrijkste complicatie zijn coronaire aneurysmata.",
  "definition": "<p>De <strong>ziekte van Kawasaki</strong> treft vooral kinderen onder de 5 jaar. Kenmerken: koorts van minstens vijf dagen met conjunctivitis zonder pus, veranderingen van lippen en mondslijmvlies (aardbeientong), huiduitslag, roodheid en zwelling van handen en voeten (later vervellen) en een vergrote halsklier. Behandeling met intraveneuze immunoglobulinen en acetylsalicylzuur verkleint de kans op coronaire aneurysmata.</p>",
  "image_url": "",
  "wiki_title": "Kawasaki disease",
  "match": "ziekte van kawasaki|kawasaki|mucocutaan lymfekliersyndroom",
  "option_only": true
 },
 "anti-ss-a": {
  "title": "Anti-SSA (Ro)",
  "short": "Anti-SSA (Ro) is een antinucleaire antistof die voorkomt bij het syndroom van Sjögren, SLE en subacute cutane lupus.",
  "definition": "<p><strong>Anti-SSA/Ro</strong>-antistoffen zijn IgG en kunnen de placenta passeren. Bij zwangeren met deze antistoffen kan het kind een neonatale lupus krijgen, met huiduitslag en, belangrijk, een aangeboren volledig hartblok. Ze komen vaak samen voor met anti-SSB/La.</p>",
  "image_url": "",
  "wiki_title": "Anti-SSA/Ro autoantibodies",
  "match": "anti-ss-a|anti-ssa|anti-ro",
  "option_only": true
 },
 "anti-ss-b": {
  "title": "Anti-SSB (La)",
  "short": "Anti-SSB (La) is een antinucleaire antistof die vooral voorkomt bij het syndroom van Sjögren en soms bij SLE.",
  "definition": "<p><strong>Anti-SSB/La</strong>-antistoffen komen bijna altijd samen met anti-SSA voor. Ze zijn kenmerkend voor het syndroom van Sjögren, een auto-immuunziekte van de traan- en speekselklieren met droge ogen en droge mond. Ook zij kunnen bijdragen aan neonatale lupus.</p>",
  "image_url": "",
  "wiki_title": "Anti-SSB/La autoantibodies",
  "match": "anti-ss-b|anti-ssb|anti-la",
  "option_only": true
 },
 "lupus erythematosus": {
  "title": "Lupus erythematosus",
  "short": "Lupus erythematosus is een auto-immuunziekte die beperkt kan blijven tot de huid of als systemische ziekte (SLE) meerdere organen treft.",
  "definition": "<p>Bij <strong>cutane lupus</strong> zijn er huidafwijkingen zoals discoïde plaques met littekens of een fotosensitieve uitslag. Bij <strong>systemische lupus erythematosus</strong> zijn er daarnaast antinucleaire antistoffen en ontsteking van o.a. gewrichten, nieren, serosa, bloed en zenuwstelsel. Geneesmiddelen (bijv. hydralazine, procaïnamide) kunnen een lupusachtig beeld geven met anti-histonantistoffen.</p>",
  "image_url": "",
  "wiki_title": "Lupus erythematosus",
  "match": "lupus erythematosus|lupus",
  "option_only": true
 },
 "infliximab": {
  "title": "Infliximab",
  "short": "Infliximab is een monoklonaal antilichaam tegen TNF-α, gebruikt bij o.a. de ziekte van Crohn, colitis ulcerosa en reumatoïde artritis.",
  "definition": "<p><strong>TNF-α-remmers</strong> zoals infliximab, adalimumab en etanercept remmen een centraal pro-inflammatoir cytokine. Ze worden gebruikt bij IBD, reumatoïde artritis, spondyloartritis en psoriasis. Doordat ze de cellulaire afweer verzwakken, kan latente tuberculose reactiveren; daarom wordt vooraf gescreend. Ook het risico op andere infecties is verhoogd.</p>",
  "image_url": "",
  "wiki_title": "Infliximab",
  "match": "infliximab|anti-tnf|tnf-alfa antagonist|tnf-remmer",
  "option_only": true
 },
 "azathioprine": {
  "title": "Azathioprine",
  "short": "Azathioprine is een immunosuppressivum dat de purinesynthese remt en zo de deling van lymfocyten onderdrukt.",
  "definition": "<p><strong>Azathioprine</strong> wordt omgezet in 6-mercaptopurine en dan in thioguanine-nucleotiden die in het DNA worden ingebouwd. Het wordt gebruikt bij IBD, auto-immuunhepatitis, vasculitis en na transplantatie. Bijwerkingen zijn beenmergsuppressie, levertoxiciteit en pancreatitis. Bij een TPMT-deficiëntie is het risico op ernstige beenmergsuppressie groot; allopurinol versterkt de werking.</p>",
  "image_url": "",
  "wiki_title": "Azathioprine",
  "match": "azathioprine",
  "option_only": true
 },
 "methotrexaat": {
  "title": "Methotrexaat",
  "short": "Methotrexaat is een foliumzuurantagonist; in lage dosis een basismiddel bij reumatoïde artritis en psoriasis, in hoge dosis een cytostaticum.",
  "definition": "<p><strong>Methotrexaat</strong> remt dihydrofolaatreductase. In lage, wekelijkse dosering werkt het ontstekingsremmend (o.a. via adenosine) en is het een hoeksteen bij reumatoïde artritis, psoriasis en IBD; foliumzuur vermindert bijwerkingen. Bijwerkingen: beenmergsuppressie, levertoxiciteit, mucositis en pneumonitis. Het is teratogeen en wordt via de nier uitgescheiden.</p>",
  "image_url": "",
  "wiki_title": "Methotrexate",
  "match": "methotrexaat|mtx|methotrexate",
  "option_only": true
 },
 "nsaids": {
  "title": "NSAID's",
  "short": "NSAID's remmen cyclo-oxygenase en daarmee de vorming van prostaglandinen; ze werken pijnstillend, koortsverlagend en ontstekingsremmend.",
  "definition": "<p><strong>NSAID's</strong> (zoals ibuprofen, naproxen, diclofenac) remmen COX-1 en COX-2. Door remming van beschermende prostaglandinen kunnen ze maagulcera en bloedingen geven, vooral bij ouderen; ook kunnen ze de nierfunctie verslechteren, de bloeddruk verhogen, hartfalen verergeren en het risico op hart- en vaatziekten iets verhogen. Selectieve COX-2-remmers geven minder maagschade.</p>",
  "image_url": "",
  "wiki_title": "Nonsteroidal anti-inflammatory drug",
  "match": "nsaids|nsaid|nsaid's|antiflogistica|ontstekingsremmers",
  "option_only": true
 },
 "psoriasis": {
  "title": "Psoriasis",
  "short": "Psoriasis is een chronische ontstekingsziekte van de huid met scherp begrensde rode plaques met zilverwitte schilfers.",
  "definition": "<p>Bij <strong>psoriasis</strong> stimuleert een T-celreactie (IL-23/Th17) een sterk versnelde deling van keratinocyten. Er ontstaan schilferende plaques op strekzijden, hoofdhuid en bilnaad, met nagelafwijkingen en het köbnerfenomeen. Een deel van de patiënten krijgt artritis psoriatica. Behandeling met lokale middelen, lichttherapie of systemische en biologische middelen.</p>",
  "image_url": "",
  "wiki_title": "Psoriasis",
  "match": "psoriasis",
  "option_only": true
 },
 "seborroïsch eczeem": {
  "title": "Seborroïsch eczeem",
  "short": "Seborroïsch eczeem is een chronisch terugkerend eczeem met roodheid en vettige schilfers in talgklierrijke gebieden.",
  "definition": "<p><strong>Seborroïsch eczeem</strong> komt voor op het behaarde hoofd, in de wenkbrauwen, nasolabiale plooien, achter de oren en op de borst. De gist <em>Malassezia</em> speelt een rol. Bij zuigelingen kennen we het als berg. Het komt vaker voor bij de ziekte van Parkinson en hiv. Behandeling met antimycotische middelen, eventueel kort met een mild corticosteroïd.</p>",
  "image_url": "",
  "wiki_title": "Seborrhoeic dermatitis",
  "match": "seborroïsch eczeem|seborroisch eczeem|seborroïsche dermatitis",
  "option_only": true
 },
 "contactallergisch eczeem": {
  "title": "Contactallergisch eczeem",
  "short": "Contactallergisch eczeem is een type IV-overgevoeligheidsreactie van de huid op een stof waarvoor iemand gesensibiliseerd is.",
  "definition": "<p>Bij <strong>allergisch contacteczeem</strong> wordt de huid eerst gesensibiliseerd voor een stof (bijv. nikkel, parfum, rubberchemicaliën, conserveermiddelen). Bij herhaald contact ontstaat na 1–3 dagen een jeukend eczeem, dat zich ook buiten het contactgebied kan uitbreiden. Diagnose met plakproeven (epicutane test); behandeling is vermijden van het allergeen.</p>",
  "image_url": "",
  "wiki_title": "Allergic contact dermatitis",
  "match": "contactallergisch eczeem|allergisch contacteczeem",
  "option_only": true
 },
 "nummulair eczeem": {
  "title": "Nummulair eczeem",
  "short": "Nummulair eczeem geeft muntvormige, scherp begrensde, jeukende en soms nattende eczeemplekken, vaak op de benen.",
  "definition": "<p><strong>Nummulair eczeem</strong> komt vaak voor bij een droge huid, vooral bij oudere mannen, en kan verergeren in de winter. De ronde plekken zijn vaak sterk jeukend en kunnen secundair geïnfecteerd raken. Behandeling met vette zalven en lokale corticosteroïden.</p>",
  "image_url": "",
  "wiki_title": "Nummular dermatitis",
  "match": "nummulair eczeem|eczema nummulare",
  "option_only": true
 },
 "open comedonen": {
  "title": "Open comedonen (mee-eters)",
  "short": "Open comedonen zijn verstopte talgklierfollikels met een donker propje aan de opening, een beginvorm van acne.",
  "definition": "<p>Bij acne raakt de follikel verstopt door verhoorning en talg. Een <strong>open comedo</strong> (blackhead) heeft een wijde opening; de zwarte kleur komt door geoxideerde talg en melanine, niet door vuil. Een gesloten comedo (whitehead) heeft een nauwe opening. Uit comedonen kunnen ontstoken papels en pustels ontstaan.</p>",
  "image_url": "",
  "wiki_title": "Comedo",
  "match": "open comedonen|open comedo|mee-eters|blackheads",
  "option_only": true
 },
 "conjunctivitis": {
  "title": "Conjunctivitis",
  "short": "Conjunctivitis is een ontsteking van het bindvlies, met een rood oog, tranen of afscheiding en een branderig gevoel, zonder visusdaling.",
  "definition": "<p><strong>Conjunctivitis</strong> kan viraal (vaak adenovirus, waterige afscheiding), bacterieel (purulente afscheiding) of allergisch (jeuk, beide ogen, seizoensgebonden) zijn. Het zicht is normaal en er is meestal geen echte pijn of lichtschuwheid; die passen eerder bij keratitis, uveïtis of glaucoom. Bij pasgeborenen moet aan chlamydia of gonokokken worden gedacht.</p>",
  "image_url": "",
  "wiki_title": "Conjunctivitis",
  "match": "conjunctivitis|bindvliesontsteking",
  "option_only": true
 },
 "keratitis marginalis": {
  "title": "Keratitis marginalis",
  "short": "Keratitis marginalis is een ontsteking aan de rand van het hoornvlies, vaak door een overgevoeligheidsreactie op stafylokokken bij blefaritis.",
  "definition": "<p>Bij <strong>keratitis marginalis</strong> ontstaan kleine infiltraten aan de rand van de cornea, met een heldere zone tussen het infiltraat en de limbus. Het is een immuunreactie op bacteriële antigenen, vaak bij chronische blefaritis. Klachten: rood, pijnlijk, lichtschuw oog. Behandeling van de blefaritis en eventueel kort corticosteroïddruppels onder controle.</p>",
  "image_url": "",
  "wiki_title": "Marginal keratitis",
  "match": "keratitis marginalis|marginale keratitis",
  "option_only": true
 },
 "acuut glaucoom": {
  "title": "Acuut (gesloten-kamerhoek) glaucoom",
  "short": "Bij acuut glaucoom raakt de kamerhoek plotseling afgesloten, waardoor de oogdruk sterk stijgt; een spoedgeval.",
  "definition": "<p>Bij een <strong>acuut gesloten-kamerhoekglaucoom</strong> blokkeert de iris de afvloed van kamerwater, vaak bij verziende ouderen met een ondiepe voorste oogkamer, uitgelokt door pupilverwijding (schemer, medicatie). Klachten: hevige oogpijn en hoofdpijn, misselijkheid en braken, wazig zien met halo's, een rood oog, een matte cornea en een middelwijde, lichtstijve pupil. Behandeling: oogdrukverlagende medicatie en laseriridotomie.</p>",
  "image_url": "",
  "wiki_title": "Angle-closure glaucoma",
  "match": "acuut glaucoom|acuut gesloten-kamerhoekglaucoom|glaucoomaanval",
  "option_only": true
 },
 "refractieafwijking": {
  "title": "Refractieafwijking",
  "short": "Een refractieafwijking betekent dat het oog licht niet scherp op het netvlies focust: bijziendheid, verziendheid of astigmatisme.",
  "definition": "<p>Bij <strong>myopie</strong> (bijziendheid) valt het brandpunt vóór de retina, bij <strong>hypermetropie</strong> (verziendheid) erachter, en bij <strong>astigmatisme</strong> is de breking niet in alle richtingen gelijk. Presbyopie is leeftijdsgebonden verlies van accommodatie. Verbetering van het zicht met een stenopeïsche opening wijst op een refractieprobleem. Correctie met bril, lenzen of refractiechirurgie.</p>",
  "image_url": "",
  "wiki_title": "Refractive error",
  "match": "refractieafwijking|refractiefout",
  "option_only": true
 },
 "anisometropie": {
  "title": "Anisometropie",
  "short": "Anisometropie is een duidelijk verschil in sterkte (refractie) tussen beide ogen.",
  "definition": "<p>Bij <strong>anisometropie</strong> verschilt de brekingskracht van de ogen, waardoor de beelden op de netvliezen verschillen in scherpte of grootte. Bij jonge kinderen kan het brein het onscherpe oog gaan onderdrukken, met amblyopie (lui oog) als gevolg. Vroege opsporing en correctie (eventueel met afplakken) zijn belangrijk.</p>",
  "image_url": "",
  "wiki_title": "Anisometropia",
  "match": "anisometropie",
  "option_only": true
 },
 "lagophthalmus": {
  "title": "Lagophthalmus",
  "short": "Bij lagophthalmus kan het ooglid niet volledig sluiten, waardoor het hoornvlies uitdroogt.",
  "definition": "<p><strong>Lagophthalmus</strong> ontstaat meestal door een parese van de m. orbicularis oculi bij een perifere facialisparese, of door littekens, exoftalmie (bijv. bij Graves) of na ooglidchirurgie. Het hoornvlies droogt uit, met risico op keratitis en ulcera. Behandeling met kunsttranen, oogzalf en ’s nachts afplakken.</p>",
  "image_url": "",
  "wiki_title": "Lagophthalmos",
  "match": "lagophthalmus|lagoftalmus",
  "option_only": true
 },
 "fotopsie": {
  "title": "Fotopsie",
  "short": "Fotopsieën zijn lichtflitsen zonder dat er licht is, vaak door mechanische prikkeling van het netvlies.",
  "definition": "<p><strong>Fotopsieën</strong> ontstaan vaak wanneer het glasvocht aan het netvlies trekt, bijvoorbeeld bij een achterste glasvochtloslating; ze worden dan vooral in het donker en bij oogbewegingen gezien. Plots nieuwe lichtflitsen met veel ‘vliegjes’ of een schaduw vereisen onderzoek naar een netvliesscheur of -loslating. Ook een migraine-aura kan lichtverschijnselen geven.</p>",
  "image_url": "",
  "wiki_title": "Photopsia",
  "match": "fotopsie|lichtflitsen",
  "option_only": true
 },
 "achterste glasvochtmembraanloslating": {
  "title": "Achterste glasvochtloslating",
  "short": "Bij een achterste glasvochtloslating laat het verschrompelende glasvocht los van het netvlies, met lichtflitsen en mouches volantes.",
  "definition": "<p>Met het ouder worden vervloeit het glasvocht en trekt het samen. Bij de <strong>achterste glasvochtloslating</strong> komt het los van de retina, wat lichtflitsen en zwevende vlekjes geeft. Meestal onschuldig, maar de trekkracht kan een netvliesscheur veroorzaken, met risico op netvliesloslating; daarom wordt het netvlies gecontroleerd.</p>",
  "image_url": "",
  "wiki_title": "Posterior vitreous detachment",
  "match": "achterste glasvochtmembraanloslating|achterste glasvochtloslating|glasvochtloslating",
  "option_only": true
 },
 "chromatopsie": {
  "title": "Chromatopsie",
  "short": "Chromatopsie is het zien in een bepaalde kleurtint, bijvoorbeeld alles geel of groen.",
  "definition": "<p>Bij <strong>chromatopsie</strong> lijkt de hele omgeving een kleurzweem te hebben. Een bekend voorbeeld is xanthopsie (geelzien) bij een digoxine-intoxicatie. Ook na een staaroperatie (meer blauw licht) en bij sommige andere geneesmiddelen kunnen kleurverschuivingen optreden.</p>",
  "image_url": "",
  "wiki_title": "Chromatopsia",
  "match": "chromatopsie",
  "option_only": true
 },
 "oscillopsie": {
  "title": "Oscillopsie",
  "short": "Oscillopsie is de illusie dat de omgeving heen en weer beweegt of trilt.",
  "definition": "<p><strong>Oscillopsie</strong> ontstaat als het beeld niet stabiel op het netvlies blijft, bijvoorbeeld bij dubbelzijdige uitval van het evenwichtsorgaan (vooral bij lopen of hoofdbewegingen) of bij verworven nystagmus. Bij aangeboren nystagmus komt het meestal niet voor, omdat het brein zich heeft aangepast.</p>",
  "image_url": "",
  "wiki_title": "Oscillopsia",
  "match": "oscillopsie",
  "option_only": true
 },
 "non-proliferatieve diabetische retinopathie": {
  "title": "Non-proliferatieve diabetische retinopathie",
  "short": "Non-proliferatieve diabetische retinopathie is het vroege stadium van diabetische netvliesschade, zonder vaatnieuwvorming.",
  "definition": "<p>Bij <strong>non-proliferatieve diabetische retinopathie</strong> beschadigt chronische hyperglykemie de kleine netvliesvaatjes. Er ontstaan microaneurysmata, puntbloedingen, harde exsudaten en later cotton-woolvlekken en veneuze afwijkingen. Lekkage in de macula (maculaoedeem) kan het zicht bedreigen. Bij progressie volgt de proliferatieve vorm met nieuwvorming van vaten.</p>",
  "image_url": "",
  "wiki_title": "Diabetic retinopathy",
  "match": "non-proliferatieve diabetische retinopathie|achtergrondretinopathie",
  "option_only": true
 },
 "hypertensieve retinopathie gr ii": {
  "title": "Hypertensieve retinopathie",
  "short": "Hypertensieve retinopathie zijn netvliesafwijkingen door langdurig hoge bloeddruk, ingedeeld in graden.",
  "definition": "<p>Bij <strong>hypertensieve retinopathie</strong> worden de netvliesarteriolen smaller en stugger. Lichte vormen tonen vernauwde arteriolen en ‘koperdraad’-reflexen, daarna arterioveneuze kruisingsfenomenen. Ernstigere graden geven bloedingen, cotton-woolvlekken en exsudaten, en bij maligne hypertensie papiloedeem.</p>",
  "image_url": "",
  "wiki_title": "Hypertensive retinopathy",
  "match": "hypertensieve retinopathie gr ii|hypertensieve retinopathie",
  "option_only": true
 },
 "blindheid": {
  "title": "Blindheid",
  "short": "Blindheid is ernstig verlies van het gezichtsvermogen.",
  "definition": "<p>Wereldwijd zijn de belangrijkste oorzaken van <strong>blindheid</strong> cataract, onbehandelde refractieafwijkingen, glaucoom, maculadegeneratie en diabetische retinopathie; in ontwikkelingslanden ook trachoom en vitamine A-tekort. Een groot deel ervan is te voorkomen of te behandelen.</p>",
  "image_url": "",
  "wiki_title": "Blindness",
  "match": "blindheid",
  "option_only": true
 },
 "tumarkin aanval": {
  "title": "Tumarkin-aanval (otolietcrisis)",
  "short": "Een Tumarkin-aanval is een plotselinge val zonder bewustzijnsverlies bij de ziekte van Ménière, door een acute prikkeling van de otolietorganen.",
  "definition": "<p>Bij een <strong>otolietcrisis van Tumarkin</strong> heeft de patiënt het gevoel plotseling geduwd of omvergetrokken te worden en valt, zonder duizeligheid vooraf en zonder bewustzijnsverlies. Het komt vooral voor in latere stadia van de ziekte van Ménière en kan tot letsel leiden.</p>",
  "image_url": "",
  "wiki_title": "Ménière's disease",
  "match": "tumarkin aanval|tumarkin-aanval|otolietcrisis",
  "option_only": true
 },
 "speekselvloed": {
  "title": "Speekselvloed (sialorroe)",
  "short": "Speekselvloed is overmatig speeksel in de mond of kwijlen, door teveel productie of slecht slikken.",
  "definition": "<p><strong>Sialorroe</strong> kan ontstaan door verhoogde productie (bijv. door clozapine, cholinerge middelen, misselijkheid, tandproblemen) of, vaker, door verminderd slikken of slechte mondsluiting, zoals bij de ziekte van Parkinson, ALS, een beroerte of cerebrale parese.</p>",
  "image_url": "",
  "wiki_title": "Drooling",
  "match": "speekselvloed|sialorroe|hypersalivatie|kwijlen",
  "option_only": true
 },
 "versterken en steunen": {
  "title": "Versterken en steunen",
  "short": "Gesprekstechniek waarbij de arts de patiënt aanmoedigt en waardering uitspreekt voor wat goed gaat of wat de patiënt al doet.",
  "definition": "<p>Bij <strong>versterken en steunen</strong> benoemt de arts de sterke kanten, inspanningen en eigen oplossingen van de patiënt (‘Knap dat u al zo lang volhoudt’). Dat vergroot het zelfvertrouwen en de motivatie. Het wordt o.a. gebruikt in motiverende gespreksvoering en bij het slechtnieuwsgesprek.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "versterken en steunen",
  "option_only": true
 },
 "erkennen en accepteren": {
  "title": "Erkennen en accepteren",
  "short": "Gesprekstechniek waarbij de arts de beleving en emoties van de patiënt serieus neemt en laat merken dat die er mogen zijn.",
  "definition": "<p>Bij <strong>erkennen</strong> laat de arts merken dat de gevoelens, zorgen of het standpunt van de patiënt begrijpelijk zijn, zonder het daarmee inhoudelijk eens te hoeven zijn. Dat voorkomt dat de patiënt zich onbegrepen voelt en zich gaat verdedigen. Het is een basisvaardigheid bij emoties, weerstand en slecht nieuws.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "erkennen en accepteren|erkennen",
  "option_only": true
 },
 "hier en nu": {
  "title": "Hier en nu (gesprekstechniek)",
  "short": "Gesprekstechniek waarbij de arts benoemt wat er op dit moment in het gesprek gebeurt, om een vastgelopen gesprek weer op gang te brengen.",
  "definition": "<p>Met een <strong>hier-en-nu</strong>-opmerking stapt de arts even uit de inhoud en bespreekt hij of zij het proces: ‘Ik merk dat we steeds over hetzelfde praten, hoe ervaart u dit gesprek?’ Dit heet ook metacommunicatie. Het helpt bij weerstand, irritatie of wanneer arts en patiënt langs elkaar heen praten.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "hier en nu|hier-en-nu",
  "option_only": true
 },
 "stiltes": {
  "title": "Stiltes (gesprekstechniek)",
  "short": "Bewust stiltes laten vallen geeft de patiënt ruimte om na te denken, emoties te uiten of meer te vertellen.",
  "definition": "<p>Een korte <strong>stilte</strong> na een vraag of na slecht nieuws laat de patiënt tijd om informatie te verwerken en zelf het woord te nemen. Veel artsen vullen stiltes te snel op. Stiltes zijn een vorm van non-verbaal aanmoedigen, naast knikken en oogcontact.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "stiltes|stilte laten vallen",
  "option_only": true
 },
 "positief her-etiketteren": {
  "title": "Positief her-etiketteren (reframen)",
  "short": "Bij positief her-etiketteren geeft de arts gedrag of een uitspraak van de patiënt een andere, positievere betekenis.",
  "definition": "<p>Bij <strong>positief her-etiketteren</strong> (reframing) wordt een negatief gelabeld gedrag in een ander licht gezet: ‘U noemt het zeuren, maar ik zie vooral iemand die goed voor zijn moeder wil zorgen.’ Het kan weerstand verminderen en nieuwe mogelijkheden openen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "positief her-etiketteren|positief heretiketteren|reframen",
  "option_only": true
 },
 "gevoelsreflectie maken": {
  "title": "Gevoelsreflectie",
  "short": "Bij een gevoelsreflectie benoemt de arts het gevoel dat hij of zij bij de patiënt waarneemt (‘U lijkt er erg van te schrikken’).",
  "definition": "<p>Een <strong>gevoelsreflectie</strong> richt zich niet op de inhoud maar op de emotie achter de woorden of het gedrag van de patiënt. Door het gevoel te benoemen voelt de patiënt zich begrepen en krijgt hij of zij ruimte om erover te praten. Het verschilt van parafraseren, dat de inhoud teruggeeft.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "gevoelsreflectie maken|een gevoelsreflectie maken|gevoelsreflectie|reflecteren van gevoelens",
  "option_only": true
 },
 "confronteren": {
  "title": "Confronteren (gesprekstechniek)",
  "short": "Bij confronteren wijst de arts de patiënt op tegenstrijdigheden in wat hij of zij zegt of doet.",
  "definition": "<p>Bij <strong>confronteren</strong> benoemt de arts een discrepantie, bijvoorbeeld tussen woorden en gedrag (‘U zegt dat u wilt stoppen met roken, maar u bent vorige week weer begonnen’) of tussen verbale en non-verbale signalen. Goed gedoseerd en respectvol kan het tot inzicht leiden; te vroeg of te hard kan het weerstand oproepen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "confronteren|confrontatie",
  "option_only": true
 },
 "contemplatie": {
  "title": "Contemplatie (stages of change)",
  "short": "Contemplatie is de fase in het model van Prochaska en DiClemente waarin iemand overweegt het gedrag te veranderen, maar nog twijfelt.",
  "definition": "<p>In het <strong>transtheoretisch model</strong> volgt contemplatie op precontemplatie. De persoon ziet de nadelen van het huidige gedrag, maar weegt die af tegen de voordelen; er is ambivalentie. Een arts kan in deze fase helpen de voor- en nadelen te verkennen, bijvoorbeeld met motiverende gespreksvoering. Daarna volgen preparatie, actie en gedragsbehoud.</p>",
  "image_url": "",
  "wiki_title": "Transtheoretical model",
  "match": "contemplatie",
  "option_only": true
 },
 "precontemplatie": {
  "title": "Precontemplatie (stages of change)",
  "short": "Precontemplatie is de eerste fase in het transtheoretisch model van gedragsverandering (Prochaska en DiClemente).",
  "definition": "<p>Het <strong>transtheoretisch model</strong> beschrijft de fasen precontemplatie, contemplatie, preparatie, actie en gedragsbehoud; terugval kan op elk moment optreden. In de fase van precontemplatie ziet de persoon (nog) geen reden om het eigen gedrag te veranderen. Een arts richt zich in deze fase vooral op informeren en bewustwording.</p>",
  "image_url": "",
  "wiki_title": "Transtheoretical model",
  "match": "precontemplatie",
  "option_only": true
 },
 "personaliseren": {
  "title": "Personaliseren (gesprekstechniek)",
  "short": "Personaliseren is een explorerende gespreksvaardigheid waarmee de arts het gesprek dichter bij de eigen ervaring van de patiënt brengt.",
  "definition": "<p>Bij <b>personaliseren</b> wordt vaag of afstandelijk taalgebruik van de patiënt concreet en persoonlijk gemaakt, zodat duidelijk wordt wat een klacht voor deze patiënt betekent. Andere explorerende vaardigheden zijn concretiseren, doorvragen en reflecteren.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "personaliseren",
  "option_only": true
 },
 "marchanderen": {
  "title": "Marchanderen (rouwfase)",
  "short": "Marchanderen is een fase in het rouwmodel van Kübler-Ross waarin iemand probeert het onvermijdelijke uit te stellen door te ‘onderhandelen’.",
  "definition": "<p>Kübler-Ross beschreef bij mensen met een dodelijke ziekte de fasen <strong>ontkenning, woede, marchanderen, depressie en aanvaarding</strong>. Bij marchanderen probeert iemand afspraken te maken (‘als ik maar de bruiloft van mijn dochter mag meemaken’). De fasen verlopen in de praktijk niet strikt na elkaar.</p>",
  "image_url": "",
  "wiki_title": "Five stages of grief",
  "match": "marchanderen",
  "option_only": true
 },
 "woede": {
  "title": "Woede (rouwfase)",
  "short": "Woede is een fase in het rouwmodel van Kübler-Ross, waarin iemand boos is over het verlies of de ziekte.",
  "definition": "<p>In het model van <strong>Kübler-Ross</strong> volgt woede vaak op ontkenning: ‘Waarom ik?’ De boosheid kan zich richten op naasten, God of de hulpverleners. Het is belangrijk die niet persoonlijk op te vatten en ruimte te geven aan de emotie.</p>",
  "image_url": "",
  "wiki_title": "Five stages of grief",
  "match": "woede",
  "option_only": true
 },
 "ontkenning": {
  "title": "Ontkenning (rouwfase)",
  "short": "Ontkenning is een fase in het rouwmodel van Kübler-Ross en een afweermechanisme waarbij iemand een pijnlijke werkelijkheid niet toelaat.",
  "definition": "<p><strong>Ontkenning</strong> beschermt tijdelijk tegen een overweldigende boodschap (‘Dit kan niet waar zijn’). Kübler-Ross beschreef het als eerste fase na slecht nieuws. Het kan helpen de schok op te vangen, maar langdurige ontkenning kan therapietrouw en besluitvorming in de weg staan.</p>",
  "image_url": "",
  "wiki_title": "Denial",
  "match": "ontkenning",
  "option_only": true
 },
 "diagnose-recept model": {
  "title": "Diagnose-receptmodel",
  "short": "Het diagnose-receptmodel is een arts-gecentreerde manier van consultvoeren waarin de arts diagnose en behandeling bepaalt.",
  "definition": "<p>In het <strong>diagnose-receptmodel</strong> stelt de arts vragen, onderzoekt, stelt een diagnose en schrijft een behandeling voor; de patiënt heeft een vooral passieve rol. Het staat tegenover patiëntgerichte modellen zoals gedeelde besluitvorming, waarin de waarden en voorkeuren van de patiënt meewegen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "diagnose-recept model|diagnose-receptmodel|paternalistisch model",
  "option_only": true
 },
 "informed decision making model": {
  "title": "Informed decision making-model",
  "short": "In het informed decision making-model geeft de arts alle informatie en neemt de patiënt zelf de beslissing.",
  "definition": "<p>Bij <strong>informed decision making</strong> is de arts vooral informatieverstrekker en ligt de beslissing volledig bij de goed geïnformeerde patiënt. Het staat tussen het paternalistische model (de arts beslist) en gedeelde besluitvorming (arts en patiënt beslissen samen na uitwisseling van informatie en voorkeuren).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "informed decision making model|informed decision making|geïnformeerde besluitvorming",
  "option_only": true
 },
 "capability model": {
  "title": "Capability-model",
  "short": "Het capability-model kijkt bij werk en gezondheid naar wat iemand waardevol vindt en wat hij of zij daadwerkelijk kan realiseren.",
  "definition": "<p>Het <strong>capability-model</strong> (Sen, Nussbaum) gaat niet alleen uit van beperkingen, maar van de mogelijkheden en waarden van een persoon. In de arbeids- en verzekeringsgeneeskunde wordt het gebruikt om samen met de werknemer te bepalen welke aspecten van werk belangrijk zijn en wat nodig is om die te realiseren.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "capability model|capability-benadering",
  "option_only": true
 },
 "sociale vaardigheidstraining": {
  "title": "Sociale vaardigheidstraining",
  "short": "Sociale vaardigheidstraining is een gedragstherapeutische behandeling waarin mensen sociale situaties oefenen.",
  "definition": "<p>In een <strong>sociale vaardigheidstraining</strong> worden vaardigheden zoals contact maken, voor jezelf opkomen, nee zeggen en omgaan met kritiek geoefend via instructie, rollenspel, feedback en huiswerk. Het wordt o.a. gebruikt bij sociale angst, schizofrenie en autisme.</p>",
  "image_url": "",
  "wiki_title": "Social skills",
  "match": "sociale vaardigheidstraining",
  "option_only": true
 },
 "cognitieve gedragstherapie": {
  "title": "Cognitieve gedragstherapie",
  "short": "Cognitieve gedragstherapie richt zich op het veranderen van niet-helpende gedachten en gedrag.",
  "definition": "<p>In <strong>cognitieve gedragstherapie</strong> leert iemand automatische negatieve gedachten te herkennen en te toetsen, en nieuw gedrag uit te proberen (bijv. exposure bij angst, activering bij depressie). Het is een kortdurende, gestructureerde therapie met bewezen effect bij o.a. depressie, angststoornissen, OCS, slapeloosheid en eetstoornissen.</p>",
  "image_url": "",
  "wiki_title": "Cognitive behavioral therapy",
  "match": "cognitieve gedragstherapie|cgt",
  "option_only": true
 },
 "medisch tuchtcollege": {
  "title": "Medisch tuchtcollege",
  "short": "Het tuchtcollege beoordeelt of een BIG-geregistreerde zorgverlener zich heeft gehouden aan de normen voor goede beroepsuitoefening.",
  "definition": "<p>Het <strong>tuchtrecht</strong> in de gezondheidszorg is geregeld in de Wet BIG. Klagers (patiënten, nabestaanden, de inspectie) kunnen een klacht indienen tegen een individuele zorgverlener. Het doel is de kwaliteit van de beroepsuitoefening te bewaken; het college kan maatregelen opleggen, van een waarschuwing tot doorhaling van de registratie, maar kent geen schadevergoeding toe.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "medisch tuchtcollege|tuchtcollege|tuchtrechter|tuchtrecht",
  "option_only": true
 },
 "klachtencommissie": {
  "title": "Klachtencommissie",
  "short": "Een klachtencommissie behandelt klachten van patiënten over een zorginstelling of zorgverlener, als laagdrempelige route.",
  "definition": "<p>Op grond van de Wet kwaliteit, klachten en geschillen zorg (Wkkgz) moet elke zorgaanbieder een <strong>klachtenregeling</strong> hebben met een klachtenfunctionaris en aansluiting bij een geschillencommissie. Het doel is vooral het herstellen van de relatie en het verbeteren van de zorg; een geschillencommissie kan een (beperkte) schadevergoeding toekennen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "klachtencommissie|klachtenfunctionaris",
  "option_only": true
 },
 "gezondheidsraad (gr)": {
  "title": "Gezondheidsraad",
  "short": "De Gezondheidsraad is een onafhankelijk wetenschappelijk adviesorgaan dat de regering en het parlement adviseert over volksgezondheid.",
  "definition": "<p>De <strong>Gezondheidsraad</strong> brengt gevraagd en ongevraagd advies uit op basis van de stand van de wetenschap, bijvoorbeeld over vaccinaties, bevolkingsonderzoeken, voedingsrichtlijnen en beweegrichtlijnen. De overheid beslist daarna zelf over beleid.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "gezondheidsraad (gr)|gezondheidsraad",
  "option_only": true
 },
 "zorginstituut nederland (zin)": {
  "title": "Zorginstituut Nederland",
  "short": "Zorginstituut Nederland beoordeelt welke zorg in het basispakket hoort en bevordert de kwaliteit van de zorg.",
  "definition": "<p><strong>Zorginstituut Nederland</strong> is een zelfstandig bestuursorgaan. Het adviseert over de inhoud van het verzekerde pakket (pakketbeheer), beheert kwaliteitsstandaarden en voert de financiering van de risicoverevening tussen zorgverzekeraars uit.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "zorginstituut nederland (zin)|zorginstituut nederland",
  "option_only": true
 },
 "wmo": {
  "title": "Wet maatschappelijke ondersteuning (Wmo)",
  "short": "De Wmo maakt gemeenten verantwoordelijk voor ondersteuning, zelfredzaamheid en participatie van hun inwoners.",
  "definition": "<p>De <strong>Wet maatschappelijke ondersteuning</strong> regelt dat gemeenten zorgen voor ondersteuning van burgers die dat nodig hebben om zelfstandig te wonen en mee te doen, zoals huishoudelijke hulp, woningaanpassingen, begeleiding, mantelzorgondersteuning en maatschappelijke opvang.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "wmo|wet maatschappelijke ondersteuning",
  "option_only": true
 },
 "participatiewet": {
  "title": "Participatiewet",
  "short": "De Participatiewet regelt via de gemeente bijstand en ondersteuning naar werk voor mensen die kunnen werken maar dat zonder hulp niet lukt.",
  "definition": "<p>De <strong>Participatiewet</strong> (2015) verving o.a. de Wet werk en bijstand en een deel van de Wajong. Gemeenten zijn verantwoordelijk voor de bijstandsuitkering en voor het begeleiden van mensen met een afstand tot de arbeidsmarkt naar (beschut of regulier) werk.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "participatiewet",
  "option_only": true
 },
 "civiele rechter": {
  "title": "Civiele rechter",
  "short": "De civiele rechter beslecht geschillen tussen burgers en/of organisaties, zoals over aansprakelijkheid en schadevergoeding.",
  "definition": "<p>De <strong>civiele rechter</strong> behandelt privaatrechtelijke geschillen. De procedure start op initiatief van een partij. Daarnaast bestaan de strafrechter (strafbare feiten), de bestuursrechter (geschillen met de overheid) en in de zorg het tuchtrecht, elk met een eigen doel.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "civiele rechter|civiel recht",
  "option_only": true
 },
 "een sociaal verzekeringsstelsel": {
  "title": "Sociaal verzekeringsstelsel (Bismarck)",
  "short": "Een sociaal verzekeringsstelsel financiert de zorg via verplichte, inkomensafhankelijke premies aan verzekeraars of fondsen.",
  "definition": "<p>Bij een <strong>sociaal verzekeringsstelsel</strong> (Bismarckmodel, bijv. Duitsland, Nederland) betalen werkgevers en werknemers verplichte premies; zorg wordt vaak door private aanbieders geleverd. Het staat tegenover een genationaliseerd stelsel (Beveridgemodel), dat via belastingen wordt gefinancierd met overheidsaanbieders.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "een sociaal verzekeringsstelsel|sociaal verzekeringsstelsel|bismarckmodel",
  "option_only": true
 },
 "een genationaliseerd stelsel": {
  "title": "Genationaliseerd zorgstelsel (Beveridge)",
  "short": "Een genationaliseerd zorgstelsel wordt gefinancierd uit belastingen en de zorg wordt grotendeels door de overheid geleverd.",
  "definition": "<p>Bij een <strong>genationaliseerd stelsel</strong> (Beveridgemodel, bijv. de NHS in het Verenigd Koninkrijk) is zorg in principe voor iedereen toegankelijk en grotendeels gratis bij gebruik. De overheid bepaalt het budget en organiseert de zorg; wachtlijsten zijn een bekend nadeel.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "een genationaliseerd stelsel|genationaliseerd stelsel|beveridgemodel|nationale gezondheidsdienst",
  "option_only": true
 },
 "sociaal-culturele omgeving": {
  "title": "Sociaal-culturele omgeving",
  "short": "De sociaal-culturele omgeving omvat normen, waarden, gewoonten en sociale netwerken die gezondheid en gedrag beïnvloeden.",
  "definition": "<p>In modellen van <strong>determinanten van gezondheid</strong> gaat het bij de sociaal-culturele omgeving om sociale steun, de invloed van familie en vrienden, groepsnormen, religie en culturele gewoonten (bijv. rond voeding, alcohol of hulp zoeken).</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "sociaal-culturele omgeving|sociaal culturele omgeving",
  "option_only": true
 },
 "economische omgeving": {
  "title": "Economische omgeving",
  "short": "De economische omgeving omvat factoren zoals inkomen, werkgelegenheid, prijzen en armoede die gezondheid beïnvloeden.",
  "definition": "<p>De <strong>economische omgeving</strong> bepaalt mede welke keuzes mensen kunnen maken, bijvoorbeeld via de prijs van gezond voedsel en tabak, werkloosheid en schulden. Een lage sociaaleconomische status hangt samen met een kortere (gezonde) levensverwachting.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "economische omgeving",
  "option_only": true
 },
 "politieke omgeving": {
  "title": "Politieke omgeving",
  "short": "De politieke omgeving omvat wetten, regels en beleid die gezondheid beïnvloeden, zoals accijnzen, rookverboden en zorgfinanciering.",
  "definition": "<p>De <strong>politieke omgeving</strong> is een determinant van gezondheid op macroniveau. Voorbeelden zijn tabaks- en alcoholwetgeving, verkeersveiligheid, arbeidsomstandigheden, sociale zekerheid en de organisatie en toegankelijkheid van de gezondheidszorg.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "politieke omgeving",
  "option_only": true
 },
 "transversaal cohortonderzoek": {
  "title": "Transversaal (cross-sectioneel) onderzoek",
  "short": "Bij transversaal onderzoek worden determinant en uitkomst op hetzelfde moment gemeten, zoals een momentopname.",
  "definition": "<p>Een <strong>transversaal onderzoek</strong> meet bij een groep op één tijdstip zowel blootstelling als uitkomst. Het is geschikt om de prevalentie te bepalen en snel en goedkoop, maar de tijdsvolgorde is niet duidelijk, zodat oorzaak en gevolg moeilijk te onderscheiden zijn. Een cohort volgt mensen juist in de tijd.</p>",
  "image_url": "",
  "wiki_title": "Cross-sectional study",
  "match": "transversaal cohortonderzoek|transversaal onderzoek|cross-sectioneel onderzoek|dwarsdoorsnedeonderzoek",
  "option_only": true
 },
 "informatiebias": {
  "title": "Informatiebias",
  "short": "Informatiebias is een systematische fout in een onderzoek doordat blootstelling of uitkomst verkeerd wordt gemeten of gerapporteerd.",
  "definition": "<p>Bij <strong>informatiebias</strong> worden deelnemers verkeerd ingedeeld (misclassificatie). Voorbeelden zijn recall bias (patiënten herinneren zich blootstelling beter dan controles), interviewerbias en meetfouten. Als de fout in beide groepen gelijk is (non-differentieel), wordt een verband meestal onderschat; als ze verschilt (differentieel), kan het verband in beide richtingen vertekend raken.</p>",
  "image_url": "",
  "wiki_title": "Information bias (epidemiology)",
  "match": "informatiebias|meetbias|misclassificatie",
  "option_only": true
 },
 "inhoudsvaliditeit": {
  "title": "Inhoudsvaliditeit",
  "short": "Inhoudsvaliditeit is de mate waarin een meetinstrument alle relevante aspecten van het begrip dat het wil meten dekt.",
  "definition": "<p>Bij <strong>inhoudsvaliditeit</strong> wordt bijvoorbeeld beoordeeld of een depressievragenlijst alle kernsymptomen van depressie bevraagt. Het wordt meestal door experts en patiënten beoordeeld en niet met een statistische toets. Andere vormen zijn begripsvaliditeit (construct) en criteriumvaliditeit.</p>",
  "image_url": "",
  "wiki_title": "Content validity",
  "match": "inhoudsvaliditeit|content validity",
  "option_only": true
 },
 "construct validiteit": {
  "title": "Constructvaliditeit (begripsvaliditeit)",
  "short": "Constructvaliditeit is de mate waarin een instrument samenhangt met andere metingen zoals je op basis van theorie zou verwachten.",
  "definition": "<p>Bij <strong>constructvaliditeit</strong> toets je vooraf opgestelde hypotheses: een nieuwe pijnschaal hoort bijvoorbeeld sterk samen te hangen met een bestaande pijnschaal (convergent) en zwak met een maat voor iets anders (divergent). Het wordt gebruikt als er geen gouden standaard is.</p>",
  "image_url": "",
  "wiki_title": "Construct validity",
  "match": "construct validiteit|constructvaliditeit|begripsvaliditeit",
  "option_only": true
 },
 "dichotoom": {
  "title": "Dichotome variabele",
  "short": "Een dichotome variabele kan maar twee waarden aannemen, zoals ja/nee of ziek/gezond.",
  "definition": "<p>Een <strong>dichotome</strong> (binaire) variabele is een categorische variabele met twee categorieën. Uitkomsten worden vaak samengevat als proportie of risico, en vergeleken met bijv. een chikwadraattoets of Fisher's exacte toets; als associatiemaat worden relatief risico of odds ratio gebruikt. Continue variabelen kunnen worden gedichotomiseerd, maar dat kost informatie.</p>",
  "image_url": "",
  "wiki_title": "Binary data",
  "match": "dichotoom|dichotome variabele|binaire variabele",
  "option_only": true
 },
 "gepaarde t-toets": {
  "title": "Gepaarde t-toets",
  "short": "De gepaarde t-toets vergelijkt twee gemiddelden van metingen die aan elkaar gekoppeld zijn, zoals vóór en na een behandeling bij dezelfde personen.",
  "definition": "<p>Bij de <strong>gepaarde t-toets</strong> wordt per paar het verschil berekend en getoetst of het gemiddelde verschil afwijkt van nul. Voorwaarde is dat de verschillen ongeveer normaal verdeeld zijn; anders gebruikt men de Wilcoxon signed-rank-toets. Bij twee onafhankelijke groepen gebruik je de ongepaarde t-toets.</p>",
  "image_url": "",
  "wiki_title": "Student's t-test",
  "match": "gepaarde t-toets|afhankelijke t-toets|paired t-test",
  "option_only": true
 },
 "mann-whitney u toets": {
  "title": "Mann-Whitney U-toets",
  "short": "De Mann-Whitney U-toets is een non-parametrische toets om twee onafhankelijke groepen te vergelijken als de data niet normaal verdeeld zijn.",
  "definition": "<p>De <strong>Mann-Whitney U-toets</strong> (Wilcoxon rank-sum-toets) rangschikt alle waarden van beide groepen en vergelijkt de rangsommen. Hij is het non-parametrische alternatief voor de ongepaarde t-toets en geschikt voor scheve of ordinale data en kleine groepen.</p>",
  "image_url": "",
  "wiki_title": "Mann–Whitney U test",
  "match": "mann-whitney u toets|mann-whitney-toets|wilcoxon rank-sum",
  "option_only": true
 },
 "fase ii": {
  "title": "Fase II-onderzoek",
  "short": "In fase II-onderzoek wordt een nieuw geneesmiddel bij een beperkte groep patiënten getest op werkzaamheid en de juiste dosis.",
  "definition": "<p>In <strong>fase II</strong> krijgt een groep van enkele tientallen tot honderden patiënten met de aandoening het middel, vaak vergeleken met placebo. Het doel is te bepalen of het middel werkt en welke dosis het beste effect-bijwerkingenprofiel heeft, als voorbereiding op fase III.</p>",
  "image_url": "",
  "wiki_title": "Phases of clinical research",
  "match": "fase ii|fase 2|fase-ii-onderzoek",
  "option_only": true
 },
 "fase iii": {
  "title": "Fase III-onderzoek",
  "short": "In fase III-onderzoek wordt een nieuw middel bij grote groepen patiënten vergeleken met de standaardbehandeling of placebo.",
  "definition": "<p><strong>Fase III</strong>-onderzoeken zijn meestal grote, gerandomiseerde, geblindeerde studies met honderden tot duizenden patiënten. Ze moeten de werkzaamheid en veiligheid aantonen en vormen de basis voor registratie van het geneesmiddel.</p>",
  "image_url": "",
  "wiki_title": "Phases of clinical research",
  "match": "fase iii|fase 3|fase-iii-onderzoek",
  "option_only": true
 },
 "fase iv": {
  "title": "Fase IV-onderzoek",
  "short": "Fase IV-onderzoek vindt plaats na registratie, om zeldzame of late bijwerkingen en het gebruik in de praktijk te volgen.",
  "definition": "<p>Na toelating tot de markt wordt een middel door veel meer en meer diverse patiënten gebruikt. <strong>Fase IV</strong> (postmarketing surveillance) spoort zeldzame bijwerkingen op, bijvoorbeeld via meldingen bij Lareb, en onderzoekt de effectiviteit in de dagelijkse praktijk en bij nieuwe groepen.</p>",
  "image_url": "",
  "wiki_title": "Phases of clinical research",
  "match": "fase iv|fase 4|postmarketing surveillance",
  "option_only": true
 },
 "curatief": {
  "title": "Curatief",
  "short": "Een curatieve behandeling heeft als doel genezing.",
  "definition": "<p>Bij een <strong>curatieve</strong> intentie wordt geprobeerd een ziekte volledig te genezen, bijvoorbeeld een tumor volledig te verwijderen. Daartegenover staat palliatieve behandeling, gericht op het verlichten van klachten en het verlengen van leven zonder genezing.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "curatief|curatieve behandeling",
  "option_only": true
 },
 "palliatief": {
  "title": "Palliatief",
  "short": "Palliatieve zorg is gericht op kwaliteit van leven bij een ongeneeslijke ziekte, door klachten te verlichten en ondersteuning te bieden.",
  "definition": "<p><strong>Palliatieve zorg</strong> omvat lichamelijke, psychische, sociale en spirituele zorg voor patiënten met een levensbedreigende aandoening en hun naasten. Een palliatieve behandeling (bijv. radiotherapie bij botpijn) kan het leven verlengen of klachten verminderen, maar heeft genezing niet als doel.</p>",
  "image_url": "",
  "wiki_title": "Palliative care",
  "match": "palliatief|palliatieve zorg|palliatieve behandeling",
  "option_only": true
 },
 "adjuvant": {
  "title": "Adjuvante behandeling",
  "short": "Een adjuvante behandeling wordt na de primaire (meestal chirurgische) behandeling gegeven om de kans op terugkeer van kanker te verkleinen.",
  "definition": "<p>Bij <strong>adjuvante</strong> therapie (bijv. chemotherapie, radiotherapie of hormonale therapie na een operatie) is er geen zichtbare tumor meer, maar wil men eventuele micrometastasen behandelen. <em>Neoadjuvante</em> behandeling wordt juist vóór de operatie gegeven om de tumor te verkleinen.</p>",
  "image_url": "",
  "wiki_title": "Adjuvant therapy",
  "match": "adjuvant|adjuvante behandeling|adjuvante therapie",
  "option_only": true
 },
 "trombolyse": {
  "title": "Trombolyse",
  "short": "Trombolyse is het oplossen van een stolsel met een middel dat plasminogeen activeert, zoals alteplase.",
  "definition": "<p>Bij <strong>trombolyse</strong> wordt een plasminogeenactivator (bijv. alteplase, tenecteplase) toegediend, waardoor plasmine ontstaat dat fibrine afbreekt. Het wordt gebruikt bij een acuut herseninfarct (binnen 4,5 uur), soms bij een massale longembolie en (als PCI niet snel kan) bij een STEMI. Het belangrijkste risico is een bloeding, waaronder een hersenbloeding.</p>",
  "image_url": "",
  "wiki_title": "Thrombolysis",
  "match": "trombolyse|trombolytica|alteplase",
  "option_only": true
 },
 "longtransplantatie": {
  "title": "Longtransplantatie",
  "short": "Bij een longtransplantatie worden één of beide longen vervangen door donorlongen, bij eindstadium longziekte.",
  "definition": "<p>Een <strong>longtransplantatie</strong> wordt overwogen bij ernstige, progressieve longziekte zonder andere behandelopties, zoals COPD/emfyseem, longfibrose, cystische fibrose en pulmonale arteriële hypertensie. Na transplantatie is levenslang immunosuppressie nodig. Een belangrijke late complicatie is chronische afstoting (bronchiolitis obliterans).</p>",
  "image_url": "",
  "wiki_title": "Lung transplantation",
  "match": "longtransplantatie",
  "option_only": true
 },
 "epidurale anesthesie": {
  "title": "Epidurale anesthesie",
  "short": "Bij epidurale anesthesie wordt via een katheter in de epidurale ruimte een lokaal anestheticum toegediend, bijv. als pijnstilling bij de bevalling.",
  "definition": "<p>Bij <strong>epidurale anesthesie</strong> wordt verdovingsmiddel (vaak met een opioïd) buiten de dura gegeven, waar het de zenuwwortels verdooft. Het werkt trager en is beter doseerbaar dan een spinale (intrathecale) verdoving. Bijwerkingen: bloeddrukdaling, jeuk, koorts, tijdelijk krachtsverlies en zelden postpunctionele hoofdpijn of een epiduraal hematoom.</p>",
  "image_url": "",
  "wiki_title": "Epidural administration",
  "match": "epidurale anesthesie|epiduraal",
  "option_only": true
 },
 "totale parenterale voeding": {
  "title": "Totale parenterale voeding (TPV)",
  "short": "Bij totale parenterale voeding krijgt iemand alle voedingsstoffen via een infuus in een centrale ader.",
  "definition": "<p><strong>TPV</strong> wordt gegeven als het maag-darmkanaal niet bruikbaar is of onvoldoende functioneert, zoals bij darmfalen, een langdurige ileus of een korte-darmsyndroom. Omdat de oplossing sterk geconcentreerd is, gaat het via een centrale lijn. Complicaties zijn lijninfecties, trombose, leververvetting en metabole ontregeling (zoals het refeedingsyndroom). Enterale voeding heeft de voorkeur als de darm werkt.</p>",
  "image_url": "",
  "wiki_title": "Parenteral nutrition",
  "match": "totale parenterale voeding|tpv|parenterale voeding",
  "option_only": true
 },
 "vruchtwaterpunctie": {
  "title": "Vruchtwaterpunctie (amniocentese)",
  "short": "Bij een vruchtwaterpunctie wordt onder echogeleide vruchtwater afgenomen voor onderzoek naar chromosoomafwijkingen of infecties bij de foetus.",
  "definition": "<p>Een <strong>amniocentese</strong> wordt meestal vanaf ongeveer 15–16 weken zwangerschap gedaan. Het vruchtwater bevat foetale cellen waarvan het DNA kan worden onderzocht. Er is een klein risico op een miskraam. Een vlokkentest kan eerder (vanaf ongeveer 11 weken) en onderzoekt placentaweefsel.</p>",
  "image_url": "",
  "wiki_title": "Amniocentesis",
  "match": "vruchtwaterpunctie|amniocentese",
  "option_only": true
 },
 "duplexonderzoek halsvaten": {
  "title": "Duplexonderzoek van de halsvaten",
  "short": "Duplexonderzoek van de halsvaten combineert echo en dopplermeting om vernauwingen in de halsslagaders op te sporen.",
  "definition": "<p>Met een <strong>carotisduplex</strong> worden de wand en de stroomsnelheid in de a. carotis communis, interna en externa en de a. vertebralis beoordeeld. Een verhoogde stroomsnelheid wijst op een stenose. Het wordt gedaan na een TIA of herseninfarct in het carotisgebied, omdat een ernstige symptomatische stenose een indicatie kan zijn voor endarteriëctomie.</p>",
  "image_url": "",
  "wiki_title": "Carotid ultrasonography",
  "match": "duplexonderzoek halsvaten|duplex halsvaten|carotisduplex",
  "option_only": true
 },
 "citalopram": {
  "title": "Citalopram",
  "short": "Citalopram is een SSRI (selectieve serotonineheropnameremmer) die wordt gebruikt bij depressie en angststoornissen.",
  "definition": "<p><strong>Citalopram</strong> remt de heropname van serotonine in de presynaptische zenuwcel. Het effect op de stemming begint na enkele weken. Bijwerkingen: misselijkheid, slaapproblemen, seksuele disfunctie, hyponatriëmie (vooral bij ouderen) en een dosisafhankelijke QT-verlenging. Combinatie met andere serotonerge middelen geeft risico op een serotoninesyndroom.</p>",
  "image_url": "",
  "wiki_title": "Citalopram",
  "match": "citalopram|escitalopram",
  "option_only": true
 },
 "sertraline": {
  "title": "Sertraline",
  "short": "Sertraline is een SSRI die wordt gebruikt bij depressie, angststoornissen, OCS en PTSS.",
  "definition": "<p><strong>Sertraline</strong> remt selectief de heropname van serotonine. Het heeft relatief weinig interacties en wordt ook in de zwangerschap en bij hartpatiënten veel gebruikt. Bijwerkingen zijn vooral maag-darmklachten, slapeloosheid, seksuele disfunctie en in het begin soms meer onrust.</p>",
  "image_url": "",
  "wiki_title": "Sertraline",
  "match": "sertraline",
  "option_only": true
 },
 "antipsychotica": {
  "title": "Antipsychotica",
  "short": "Antipsychotica blokkeren dopamine-D2-receptoren en worden gebruikt bij psychosen, manie en ernstige onrust.",
  "definition": "<p>Klassieke (eerste generatie) <strong>antipsychotica</strong> zoals haloperidol geven vaak extrapiramidale bijwerkingen. Atypische (tweede generatie) middelen zoals olanzapine, risperidon, quetiapine en clozapine blokkeren ook serotonine-5-HT2A-receptoren en geven minder extrapiramidale, maar vaker metabole bijwerkingen (gewichtstoename, diabetes). Blokkade in de tubero-infundibulaire baan geeft hyperprolactinemie.</p>",
  "image_url": "",
  "wiki_title": "Antipsychotic",
  "match": "antipsychotica|antipsychoticum|neuroleptica",
  "option_only": true
 },
 "olanzapine": {
  "title": "Olanzapine",
  "short": "Olanzapine is een atypisch antipsychoticum met een sterk sederend effect en een groot risico op gewichtstoename.",
  "definition": "<p><strong>Olanzapine</strong> blokkeert dopamine-D2- en serotonine-5-HT2A-receptoren, en daarnaast histamine-H1- en muscarinereceptoren. Het wordt gebruikt bij schizofrenie en bipolaire stoornis. Bekende bijwerkingen zijn sufheid, sterke gewichtstoename, diabetes en dyslipidemie; extrapiramidale bijwerkingen zijn minder frequent dan bij haloperidol.</p>",
  "image_url": "",
  "wiki_title": "Olanzapine",
  "match": "olanzapine",
  "option_only": true
 },
 "anticonvulsiva": {
  "title": "Anti-epileptica",
  "short": "Anti-epileptica (anticonvulsiva) verminderen de prikkelbaarheid van neuronen en worden gebruikt om epileptische aanvallen te voorkomen.",
  "definition": "<p><strong>Anti-epileptica</strong> werken o.a. door blokkade van natriumkanalen (fenytoïne, carbamazepine, lamotrigine), versterking van GABA (benzodiazepinen, valproaat), blokkade van calciumkanalen (ethosuximide) of via SV2A (levetiracetam). Sommige worden ook gebruikt bij neuropathische pijn of als stemmingsstabilisator. Veel middelen zijn enzyminducerend of teratogeen (vooral valproaat).</p>",
  "image_url": "",
  "wiki_title": "Anticonvulsant",
  "match": "anticonvulsiva|anti-epileptica|anticonvulsivum",
  "option_only": true
 },
 "lamotrigine": {
  "title": "Lamotrigine",
  "short": "Lamotrigine is een anti-epilepticum dat natriumkanalen blokkeert; ook gebruikt om depressieve episoden bij bipolaire stoornis te voorkomen.",
  "definition": "<p><strong>Lamotrigine</strong> stabiliseert neuronale membranen door blokkade van spanningsafhankelijke natriumkanalen en vermindert de afgifte van glutamaat. Het moet langzaam worden opgehoogd vanwege het risico op ernstige huidreacties (Stevens-Johnson-syndroom). Valproaat verhoogt de spiegel; oestrogenen verlagen hem. Het is relatief veilig in de zwangerschap.</p>",
  "image_url": "",
  "wiki_title": "Lamotrigine",
  "match": "lamotrigine",
  "option_only": true
 },
 "topiramaat": {
  "title": "Topiramaat",
  "short": "Topiramaat is een anti-epilepticum dat ook wordt gebruikt als profylaxe bij migraine.",
  "definition": "<p><strong>Topiramaat</strong> heeft meerdere werkingsmechanismen: blokkade van natriumkanalen, versterking van GABA, remming van glutamaatreceptoren en zwakke remming van koolzuuranhydrase. Bijwerkingen zijn woordvindproblemen en cognitieve vertraging, tintelingen, gewichtsverlies, nierstenen en (zeldzaam) acuut glaucoom.</p>",
  "image_url": "",
  "wiki_title": "Topiramate",
  "match": "topiramaat|topiramate",
  "option_only": true
 },
 "amantadine": {
  "title": "Amantadine",
  "short": "Amantadine is een middel tegen de ziekte van Parkinson (vooral bij dyskinesieën) en werd vroeger gebruikt tegen influenza A.",
  "definition": "<p><strong>Amantadine</strong> verhoogt de afgifte van dopamine en is een zwakke NMDA-receptorantagonist. Het wordt bij Parkinson vooral ingezet om levodopa-geïnduceerde dyskinesieën te verminderen. Als antiviraal middel blokkeerde het het M2-ionkanaal van influenza A, maar door resistentie wordt het daarvoor niet meer gebruikt. Bijwerkingen: verwardheid, hallucinaties, livedo reticularis.</p>",
  "image_url": "",
  "wiki_title": "Amantadine",
  "match": "amantadine",
  "option_only": true
 },
 "naltrexon": {
  "title": "Naltrexon",
  "short": "Naltrexon is een opioïdreceptorantagonist die wordt gebruikt om terugval bij alcoholverslaving te verminderen.",
  "definition": "<p><strong>Naltrexon</strong> blokkeert µ-opioïdreceptoren en vermindert zo het belonende effect van alcohol en opioïden. Het wordt gebruikt bij alcoholafhankelijkheid (naast psychosociale behandeling) en soms bij opioïdafhankelijkheid na detoxificatie. Bij nog lopend opioïdgebruik lokt het acute onttrekkingsverschijnselen uit.</p>",
  "image_url": "",
  "wiki_title": "Naltrexone",
  "match": "naltrexon|naltrexone",
  "option_only": true
 },
 "oxazepam": {
  "title": "Oxazepam",
  "short": "Oxazepam is een kortwerkend benzodiazepine dat angst vermindert en sederend werkt.",
  "definition": "<p><strong>Benzodiazepinen</strong> versterken het effect van GABA op de GABA-A-receptor (vaker openen van het chloridekanaal). Oxazepam heeft geen actieve metabolieten en wordt via glucuronidering geklaard, waardoor het relatief geschikt is bij ouderen en leverfunctiestoornissen. Bijwerkingen: sufheid, vallen, geheugenstoornissen en afhankelijkheid bij langdurig gebruik. Antidotum: flumazenil.</p>",
  "image_url": "",
  "wiki_title": "Oxazepam",
  "match": "oxazepam|benzodiazepine|benzodiazepinen",
  "option_only": true
 },
 "temazepam": {
  "title": "Temazepam",
  "short": "Temazepam is een benzodiazepine met een middellange werkingsduur, vooral gebruikt als slaapmiddel.",
  "definition": "<p><strong>Temazepam</strong> versterkt de remmende werking van GABA. Het wordt gebruikt bij kortdurende slapeloosheid. Bij langdurig gebruik ontstaan gewenning en afhankelijkheid; bij ouderen geeft het een verhoogd risico op vallen, sufheid overdag en verwardheid.</p>",
  "image_url": "",
  "wiki_title": "Temazepam",
  "match": "temazepam",
  "option_only": true
 },
 "morfine": {
  "title": "Morfine",
  "short": "Morfine is een sterk werkend opioïd dat µ-opioïdreceptoren activeert; gebruikt bij ernstige pijn en kortademigheid in de palliatieve fase.",
  "definition": "<p><strong>Morfine</strong> werkt pijnstillend via µ-receptoren in het centrale zenuwstelsel. Bijwerkingen zijn obstipatie (altijd een laxans erbij), misselijkheid, sufheid, ademhalingsdepressie, miosis en jeuk; bij langdurig gebruik ontstaan tolerantie en afhankelijkheid. De actieve metabolieten worden via de nier uitgescheiden en hopen op bij nierfalen. Antidotum: naloxon.</p>",
  "image_url": "",
  "wiki_title": "Morphine",
  "match": "morfine|morphine",
  "option_only": true
 },
 "oxycodon": {
  "title": "Oxycodon",
  "short": "Oxycodon is een sterk werkend opioïd voor (matig) ernstige pijn.",
  "definition": "<p><strong>Oxycodon</strong> is een µ-opioïdreceptoragonist met een vergelijkbaar effect en bijwerkingenprofiel als morfine (obstipatie, sufheid, ademhalingsdepressie). Het wordt via de lever (CYP3A4, CYP2D6) omgezet en is daarom een alternatief bij nierfunctiestoornissen. Er zijn snel- en langwerkende vormen; misbruik is een probleem.</p>",
  "image_url": "",
  "wiki_title": "Oxycodone",
  "match": "oxycodon|oxycodone",
  "option_only": true
 },
 "cocaïne": {
  "title": "Cocaïne",
  "short": "Cocaïne is een stimulerende drug die de heropname van dopamine, noradrenaline en serotonine remt en ook lokaal verdovend werkt.",
  "definition": "<p><strong>Cocaïne</strong> geeft euforie, energie en een sterk verslavend effect. Door sympathische activatie ontstaan tachycardie, hypertensie, vasoconstrictie en hyperthermie. Complicaties zijn myocardinfarct (ook bij jonge mensen), aritmieën, herseninfarct en -bloeding, en bij snuiven een perforatie van het neustussenschot. Lokaal werkt het als natriumkanaalblokker (anestheticum).</p>",
  "image_url": "",
  "wiki_title": "Cocaine",
  "match": "cocaïne|cocaine",
  "option_only": true
 },
 "glimepiride": {
  "title": "Glimepiride",
  "short": "Glimepiride is een sulfonylureumderivaat dat de bètacellen aanzet tot insulineafgifte; gebruikt bij diabetes type 2.",
  "definition": "<p><strong>Sulfonylureumderivaten</strong> sluiten ATP-gevoelige kaliumkanalen in de bètacel, waardoor de cel depolariseert en insuline afgeeft, onafhankelijk van de glucosespiegel. Daardoor kunnen ze hypoglykemieën geven, vooral bij ouderen en verminderde nierfunctie. Andere bijwerking is gewichtstoename.</p>",
  "image_url": "",
  "wiki_title": "Glimepiride",
  "match": "glimepiride|sulfonylureumderivaat|sulfonylureumderivaten",
  "option_only": true
 },
 "beta-blokker": {
  "title": "Bètablokker",
  "short": "Bètablokkers blokkeren bèta-adrenerge receptoren en verlagen hartfrequentie, contractiekracht en reninesecretie.",
  "definition": "<p><strong>Bètablokkers</strong> worden gebruikt bij hypertensie, angina pectoris, na een hartinfarct, bij hartfalen, ritmestoornissen, tremor en migraineprofylaxe. Cardioselectieve middelen (metoprolol, bisoprolol) werken vooral op β1; niet-selectieve (propranolol) ook op β2, wat bronchospasme kan geven. Bijwerkingen: bradycardie, vermoeidheid, koude extremiteiten en het maskeren van hypoglykemieverschijnselen.</p>",
  "image_url": "",
  "wiki_title": "Beta blocker",
  "match": "beta-blokker|bètablokker|betablokker|bètablokkers|beta-blokkers",
  "option_only": true
 },
 "lisdiureticum": {
  "title": "Lisdiureticum",
  "short": "Lisdiuretica remmen de NKCC2-cotransporter in de lis van Henle en zijn de krachtigste plasmiddelen.",
  "definition": "<p><strong>Lisdiuretica</strong> zoals furosemide remmen de Na⁺/K⁺/2Cl⁻-cotransporter in het dikke opstijgende deel van de lis van Henle. Ze worden gebruikt bij oedeem door hartfalen, nierziekte of levercirrose en bij longoedeem. Bijwerkingen: hypokaliëmie, hyponatriëmie, hypomagnesiëmie, metabole alkalose, uitdroging en ototoxiciteit; anders dan thiaziden verhogen ze de calciumuitscheiding.</p>",
  "image_url": "",
  "wiki_title": "Loop diuretic",
  "match": "lisdiureticum|lisdiuretica|furosemide|bumetanide",
  "option_only": true
 },
 "antihypertensiva": {
  "title": "Antihypertensiva",
  "short": "Antihypertensiva zijn geneesmiddelen die de bloeddruk verlagen.",
  "definition": "<p>Veelgebruikte <strong>antihypertensiva</strong> zijn thiazidediuretica, ACE-remmers en angiotensinereceptorblokkers, calciumantagonisten en bètablokkers. Daarnaast bestaan o.a. aldosteronantagonisten, alfablokkers en centraal werkende middelen. De keuze hangt af van comorbiditeit, leeftijd, afkomst en bijwerkingen; vaak is een combinatie nodig.</p>",
  "image_url": "",
  "wiki_title": "Antihypertensive drug",
  "match": "antihypertensiva|antihypertensivum|bloeddrukverlagers",
  "option_only": true
 },
 "resonium per os": {
  "title": "Natriumpolystyreensulfonaat (Resonium)",
  "short": "Resonium is een kationenwisselaar die in de darm kalium bindt en zo de kaliumspiegel verlaagt.",
  "definition": "<p><strong>Natriumpolystyreensulfonaat</strong> wisselt in de darm natrium uit tegen kalium, dat vervolgens met de ontlasting wordt uitgescheiden. Het werkt traag (uren) en is dus geschikt om het lichaam van kalium te ontdoen, niet om acuut gevaarlijke hyperkaliëmie snel te corrigeren. Bijwerkingen: obstipatie, natriumbelasting en zelden darmnecrose.</p>",
  "image_url": "",
  "wiki_title": "Sodium polystyrene sulfonate",
  "match": "resonium per os|resonium|kayexalaat|polystyreensulfonaat",
  "option_only": true
 },
 "calciumgluconaat intraveneus": {
  "title": "Calciumgluconaat intraveneus",
  "short": "Intraveneus calciumgluconaat stabiliseert het hartmembraan bij ernstige hyperkaliëmie en corrigeert een symptomatische hypocalciëmie.",
  "definition": "<p><strong>Calciumgluconaat</strong> verhoogt de drempelpotentiaal van hartspiercellen en vermindert zo binnen minuten het risico op ritmestoornissen bij hyperkaliëmie, zonder het kalium zelf te verlagen. Daarnaast is het de behandeling van symptomatische hypocalciëmie (tetanie) en wordt het gegeven bij magnesiumintoxicatie. Het moet langzaam worden toegediend.</p>",
  "image_url": "",
  "wiki_title": "Calcium gluconate",
  "match": "calciumgluconaat intraveneus|calciumgluconaat|calcium intraveneus",
  "option_only": true
 },
 "monoamine oxydase": {
  "title": "Monoamineoxidase (MAO)",
  "short": "Monoamineoxidase is een enzym in de buitenmembraan van mitochondriën dat monoamines zoals serotonine, noradrenaline en dopamine afbreekt.",
  "definition": "<p>Er zijn twee vormen: <strong>MAO-A</strong> (vooral serotonine en noradrenaline, ook tyramine in de darm) en <strong>MAO-B</strong> (vooral dopamine). MAO-remmers worden gebruikt bij depressie (MAO-A) en de ziekte van Parkinson (MAO-B, bijv. selegiline, rasagiline). Bij niet-selectieve remmers kan tyraminerijk voedsel (oude kaas) een hypertensieve crisis geven.</p>",
  "image_url": "",
  "wiki_title": "Monoamine oxidase",
  "match": "monoamine oxydase|monoamineoxidase|mao|monoamine oxidase",
  "option_only": true
 },
 "aldehyde dehydrogenase": {
  "title": "Aldehydedehydrogenase",
  "short": "Aldehydedehydrogenase zet het giftige acetaldehyde uit de alcoholafbraak om in acetaat.",
  "definition": "<p>Bij de afbraak van ethanol zet alcoholdehydrogenase eerst ethanol om in acetaldehyde; <strong>aldehydedehydrogenase</strong> zet dat daarna om in acetaat. Een erfelijk minder actieve variant (ALDH2, veel bij mensen van Oost-Aziatische afkomst) geeft opvliegers en misselijkheid na alcohol. Disulfiram remt dit enzym bewust om alcoholgebruik te ontmoedigen.</p>",
  "image_url": "",
  "wiki_title": "Aldehyde dehydrogenase",
  "match": "aldehyde dehydrogenase|aldehydedehydrogenase|aldh",
  "option_only": true
 },
 "tyrosine": {
  "title": "Tyrosine",
  "short": "Tyrosine is een aminozuur dat de bouwsteen vormt voor catecholaminen, schildklierhormonen en melanine.",
  "definition": "<p><strong>Tyrosine</strong> wordt gemaakt uit fenylalanine (door fenylalaninehydroxylase; bij fenylketonurie werkt dit enzym niet). Uit tyrosine ontstaan via tyrosinehydroxylase L-DOPA, dopamine, noradrenaline en adrenaline; daarnaast schildklierhormoon (T3/T4) en het pigment melanine.</p>",
  "image_url": "",
  "wiki_title": "Tyrosine",
  "match": "tyrosine",
  "option_only": true
 },
 "tyrosine hydroxylase": {
  "title": "Tyrosinehydroxylase",
  "short": "Tyrosinehydroxylase zet tyrosine om in L-DOPA; het is de snelheidsbepalende stap van de catecholaminesynthese.",
  "definition": "<p><strong>Tyrosinehydroxylase</strong> heeft tetrahydrobiopterine als cofactor. Het enzym wordt geremd door de eindproducten (terugkoppeling) en geactiveerd door fosforylering bij zenuwactiviteit. De route is tyrosine → L-DOPA → dopamine → noradrenaline → adrenaline.</p>",
  "image_url": "",
  "wiki_title": "Tyrosine hydroxylase",
  "match": "tyrosine hydroxylase|tyrosinehydroxylase",
  "option_only": true
 },
 "dopamine β-hydroxylase": {
  "title": "Dopamine-β-hydroxylase",
  "short": "Dopamine-β-hydroxylase zet in de synaptische blaasjes dopamine om in noradrenaline.",
  "definition": "<p><strong>Dopamine-β-hydroxylase</strong> zit in de blaasjes van noradrenerge neuronen en chromaffiene cellen van het bijniermerg en heeft vitamine C en koper nodig. Het katalyseert de stap dopamine → noradrenaline. Een erfelijk tekort geeft ernstige orthostatische hypotensie door het ontbreken van noradrenaline.</p>",
  "image_url": "",
  "wiki_title": "Dopamine beta-hydroxylase",
  "match": "dopamine β-hydroxylase|dopamine-β-hydroxylase|dopamine beta-hydroxylase",
  "option_only": true
 },
 "adenosine kinase": {
  "title": "Adenosinekinase",
  "short": "Adenosinekinase fosforyleert adenosine tot AMP en regelt zo de hoeveelheid adenosine in en rond cellen.",
  "definition": "<p><strong>Adenosinekinase</strong> is het belangrijkste enzym dat adenosine opruimt door het om te zetten in AMP (met ATP als fosfaatdonor). Adenosine zelf werkt als signaalstof: het vertraagt de AV-geleiding, verwijdt coronaire vaten en heeft een remmend effect in het brein.</p>",
  "image_url": "",
  "wiki_title": "Adenosine kinase",
  "match": "adenosine kinase|adenosinekinase",
  "option_only": true
 },
 "lactaat dehydrogenase (ld)": {
  "title": "Lactaatdehydrogenase (LDH)",
  "short": "LDH is een enzym in vrijwel alle cellen dat pyruvaat en lactaat in elkaar omzet; een verhoogde bloedwaarde wijst op celschade.",
  "definition": "<p><strong>Lactaatdehydrogenase</strong> zet pyruvaat om in lactaat (en omgekeerd) en regenereert daarbij NAD⁺, wat anaerobe glycolyse mogelijk maakt. In het bloed is LDH een aspecifieke marker van weefselschade: het is verhoogd bij hemolyse, myocardinfarct, leverschade, spierschade en snelgroeiende tumoren zoals lymfomen.</p>",
  "image_url": "",
  "wiki_title": "Lactate dehydrogenase",
  "match": "lactaat dehydrogenase (ld)|lactaatdehydrogenase|ldh|ld",
  "option_only": true
 },
 "ammoniak": {
  "title": "Ammoniak (ammonium)",
  "short": "Ammoniak ontstaat bij de afbraak van aminozuren; de lever zet het om in ureum. Ophoping is giftig voor het brein.",
  "definition": "<p><strong>Ammoniak</strong> wordt vooral in de darm (bacteriën) en uit aminozuren gevormd en via de v. portae naar de lever gevoerd, waar de ureumcyclus het onschadelijk maakt. Bij leverfalen of een portosystemische shunt stijgt het, wat bijdraagt aan hepatische encefalopathie. Ook erfelijke defecten in de ureumcyclus geven hyperammoniëmie.</p>",
  "image_url": "",
  "wiki_title": "Ammonia",
  "match": "ammoniak|nh3|ammonium",
  "option_only": true
 },
 "n-acetylglutamaat (glcnac)": {
  "title": "N-acetylglutamaat",
  "short": "N-acetylglutamaat is de noodzakelijke activator van carbamoylfosfaatsynthetase I, de eerste stap van de ureumcyclus.",
  "definition": "<p><strong>N-acetylglutamaat</strong> wordt in het mitochondrion van de hepatocyt gemaakt uit glutamaat en acetyl-CoA, vooral na een eiwitrijke maaltijd (gestimuleerd door arginine). Zonder N-acetylglutamaat is carbamoylfosfaatsynthetase I inactief en loopt ammoniak op. (GlcNAc is de afkorting van een ander molecuul, N-acetylglucosamine.)</p>",
  "image_url": "",
  "wiki_title": "N-Acetylglutamic acid",
  "match": "n-acetylglutamaat (glcnac)|n-acetylglutamaat",
  "option_only": true
 },
 "aceton": {
  "title": "Aceton (ketonlichaam)",
  "short": "Aceton is een ketonlichaam dat ontstaat uit acetoacetaat; het geeft de zoete ‘nagellakgeur’ van de adem bij ketose.",
  "definition": "<p>Bij vasten of insulinetekort maakt de lever uit vetzuren de <strong>ketonlichamen</strong> acetoacetaat en β-hydroxybutyraat, die door brein, hart en spier als brandstof gebruikt kunnen worden. Aceton ontstaat spontaan uit acetoacetaat, wordt niet verder gebruikt en wordt uitgeademd. Bij diabetische ketoacidose ruikt de adem daardoor fruitig.</p>",
  "image_url": "",
  "wiki_title": "Ketone bodies",
  "match": "aceton|ketonlichamen|ketonen",
  "option_only": true
 },
 "butyryl-coa": {
  "title": "Butyryl-CoA",
  "short": "Butyryl-CoA is een tussenproduct van de bèta-oxidatie van vetzuren (een geactiveerd vetzuur met vier koolstofatomen).",
  "definition": "<p><strong>Butyryl-CoA</strong> ontstaat bij de afbraak van langere vetzuren in de laatste rondes van de bèta-oxidatie. In de volgende ronde wordt het gesplitst in twee moleculen acetyl-CoA. Het is ook de geactiveerde vorm van boterzuur, dat door darmbacteriën wordt gemaakt en de brandstof is van colonepitheel.</p>",
  "image_url": "",
  "wiki_title": "Butyryl-CoA",
  "match": "butyryl-coa",
  "option_only": true
 },
 "proprionyl-coa": {
  "title": "Propionyl-CoA",
  "short": "Propionyl-CoA ontstaat bij de afbraak van vetzuren met een oneven aantal koolstofatomen en van enkele aminozuren; het wordt omgezet in succinyl-CoA.",
  "definition": "<p><strong>Propionyl-CoA</strong> wordt door propionyl-CoA-carboxylase (cofactor biotine) omgezet in methylmalonyl-CoA en daarna door methylmalonyl-CoA-mutase (cofactor vitamine B12) in succinyl-CoA, dat de citroenzuurcyclus in gaat. Een tekort aan vitamine B12 leidt daardoor tot een verhoogd methylmalonzuur.</p>",
  "image_url": "",
  "wiki_title": "Propionyl-CoA",
  "match": "proprionyl-coa|propionyl-coa",
  "option_only": true
 },
 "hyaluronzuur": {
  "title": "Hyaluronzuur",
  "short": "Hyaluronzuur is een groot, niet-gesulfateerd glycosaminoglycaan dat veel water bindt en de grondsubstantie en gewrichtsvloeistof stroperig maakt.",
  "definition": "<p><strong>Hyaluronzuur</strong> is anders dan de andere glycosaminoglycanen niet aan een eiwitkern gebonden en wordt aan het celmembraan gemaakt. Het vormt de ruggengraat waaraan proteoglycanen (zoals aggrecan in kraakbeen) binden. Het komt veel voor in synoviaal vocht, glasvocht, huid en losmazig bindweefsel.</p>",
  "image_url": "",
  "wiki_title": "Hyaluronic acid",
  "match": "hyaluronzuur|hyaluronan",
  "option_only": true
 },
 "vimentine": {
  "title": "Vimentine",
  "short": "Vimentine is een intermediair filament in cellen van mesenchymale oorsprong, zoals fibroblasten, endotheel en leukocyten.",
  "definition": "<p><strong>Vimentine</strong> geeft cellen mechanische stevigheid en verankert organellen. In de pathologie is het een immunohistochemische marker voor tumoren van mesenchymale oorsprong (sarcomen). Andere intermediaire filamenten zijn keratine (epitheel), desmine (spier), GFAP (gliacellen), neurofilamenten en lamines.</p>",
  "image_url": "",
  "wiki_title": "Vimentin",
  "match": "vimentine|vimentin",
  "option_only": true
 },
 "mutatie": {
  "title": "Mutatie",
  "short": "Een mutatie is een blijvende verandering in de DNA-volgorde.",
  "definition": "<p>Een <strong>mutatie</strong> kan één nucleotide betreffen (puntmutatie: silent, missense of nonsense), een kleine insertie of deletie (soms met frameshift), of grote stukken DNA en chromosomen. Mutaties in kiemcellen kunnen worden doorgegeven aan nakomelingen; somatische mutaties niet, maar die liggen wel ten grondslag aan kanker. Tegenwoordig spreekt men liever neutraal van een ‘variant’.</p>",
  "image_url": "",
  "wiki_title": "Mutation",
  "match": "mutatie|mutaties|genmutatie",
  "option_only": true
 },
 "fragiele x syndroom": {
  "title": "Fragiele-X-syndroom",
  "short": "Het fragiele-X-syndroom is de meest voorkomende erfelijke oorzaak van verstandelijke beperking, door een CGG-repeatexpansie in het FMR1-gen.",
  "definition": "<p>Bij het <strong>fragiele-X-syndroom</strong> leidt een expansie van meer dan 200 CGG-herhalingen tot methylering en uitschakeling van het FMR1-gen. Jongens zijn meestal ernstiger aangedaan dan meisjes. Kenmerken: verstandelijke beperking, autistiforme kenmerken, een lang gezicht met grote oren en na de puberteit vergrote testes. Bij overdracht via de moeder kan de repeat groeien (anticipatie).</p>",
  "image_url": "",
  "wiki_title": "Fragile X syndrome",
  "match": "fragiele x syndroom|fragiele-x-syndroom|fragile x",
  "option_only": true
 },
 "22q11 deletie syndroom": {
  "title": "22q11-deletiesyndroom",
  "short": "Het 22q11-deletiesyndroom ontstaat door een microdeletie op chromosoom 22 en geeft o.a. hartafwijkingen, een gehemeltespleet, hypocalciëmie en immuunstoornissen.",
  "definition": "<p>Bij het <strong>22q11-deletiesyndroom</strong> (DiGeorge) is de ontwikkeling van de derde en vierde kieuwzakjes verstoord. Kenmerken (‘CATCH-22’): hartafwijkingen (vooral conotruncaal, zoals Fallot en truncus arteriosus), afwijkend gezicht, hypoplasie van de thymus (T-celtekort), gehemeltespleet en hypocalciëmie door hypoplastische bijschildklieren. Op latere leeftijd is er een verhoogd risico op psychose.</p>",
  "image_url": "",
  "wiki_title": "DiGeorge syndrome",
  "match": "22q11 deletie syndroom|22q11-deletiesyndroom|digeorge-syndroom|velocardiofaciaal syndroom",
  "option_only": true
 },
 "syndroom van turner": {
  "title": "Syndroom van Turner",
  "short": "Het syndroom van Turner (45,X) is een chromosoomafwijking bij meisjes met o.a. kleine lengte en ovariumfalen.",
  "definition": "<p>Bij het <strong>syndroom van Turner</strong> ontbreekt (deels) één X-chromosoom. Kenmerken: kleine lengte, ovariële dysgenesie met uitblijven van de puberteit en onvruchtbaarheid, een brede nek (pterygium colli), lymfoedeem bij de geboorte, een coarctatio aortae of bicuspide aortaklep en nierafwijkingen. De intelligentie is meestal normaal. Behandeling met groeihormoon en oestrogenen.</p>",
  "image_url": "",
  "wiki_title": "Turner syndrome",
  "match": "syndroom van turner|turnersyndroom|45,x",
  "option_only": true
 },
 "syndroom van marfan": {
  "title": "Syndroom van Marfan",
  "short": "Het syndroom van Marfan is een autosomaal dominante bindweefselziekte door mutaties in het fibrilline-1-gen.",
  "definition": "<p>Bij het <strong>syndroom van Marfan</strong> zijn de microfibrillen van elastische vezels afwijkend en is TGF-β-signalering verhoogd. Kenmerken: lange, slanke gestalte met lange ledematen en vingers, hypermobiele gewrichten, borstkasafwijkingen, lensluxatie (meestal naar boven) en verwijding van de aortawortel met risico op dissectie. Behandeling o.a. met bètablokkers of ARB's en tijdige aortachirurgie.</p>",
  "image_url": "",
  "wiki_title": "Marfan syndrome",
  "match": "syndroom van marfan|marfansyndroom|marfan syndroom",
  "option_only": true
 },
 "achondroplasie": {
  "title": "Achondroplasie",
  "short": "Achondroplasie is de meest voorkomende vorm van disproportionele dwerggroei, door een activerende mutatie in FGFR3.",
  "definition": "<p>Bij <strong>achondroplasie</strong> remt het overactieve FGFR3 de enchondrale verbening in de groeischijven. Kenmerken: korte ledematen (vooral bovenarmen en bovenbenen), een relatief normale romp, een groot hoofd met een prominent voorhoofd en een normale intelligentie. Het erft autosomaal dominant over, maar ontstaat meestal de novo (vaak bij oudere vaders).</p>",
  "image_url": "",
  "wiki_title": "Achondroplasia",
  "match": "achondroplasie",
  "option_only": true
 },
 "splicing variant": {
  "title": "Splicingvariant",
  "short": "Een splicingvariant verstoort de normale splicing, waarbij introns uit het pre-mRNA worden verwijderd.",
  "definition": "<p>Een <strong>splicingvariant</strong> ligt in of vlak bij een splice site: de donorplaats aan het begin of de acceptorplaats aan het eind van een intron. Gevolgen zijn bijvoorbeeld exon skipping of het behouden van een intron, vaak met een frameshift en een afgebroken eiwit.</p>",
  "image_url": "",
  "wiki_title": "RNA splicing",
  "match": "splicing variant|splicingvariant|splice-site mutatie",
  "option_only": true
 },
 "auto-immuun hepatitis": {
  "title": "Auto-immuunhepatitis",
  "short": "Auto-immuunhepatitis is een chronische leverontsteking waarbij het afweersysteem de hepatocyten aanvalt.",
  "definition": "<p><strong>Auto-immuunhepatitis</strong> komt vaker voor bij vrouwen. Kenmerken zijn verhoogde transaminasen, een verhoogd IgG, auto-antistoffen (ANA, anti-SMA of anti-LKM1) en in het biopt een interfacehepatitis met plasmacellen. Zonder behandeling kan het tot cirrose leiden; het reageert meestal goed op prednison en azathioprine.</p>",
  "image_url": "",
  "wiki_title": "Autoimmune hepatitis",
  "match": "auto-immuun hepatitis|auto-immuunhepatitis|autoimmuunhepatitis",
  "option_only": true
 },
 "primaire biliaire cirrose (pbc)": {
  "title": "Primaire biliaire cholangitis (PBC)",
  "short": "PBC is een auto-immuunziekte waarbij de kleine galgangen in de lever langzaam worden vernietigd.",
  "definition": "<p><strong>Primaire biliaire cholangitis</strong> treft vooral vrouwen van middelbare leeftijd. Klachten: moeheid en jeuk; later icterus en cirrose. Kenmerkend zijn een verhoogd alkalisch fosfatase en γGT en antimitochondriale antistoffen (AMA). Ursodeoxycholzuur vertraagt het beloop.</p>",
  "image_url": "",
  "wiki_title": "Primary biliary cholangitis",
  "match": "primaire biliaire cirrose (pbc)|primaire biliaire cholangitis|primaire biliaire cirrose|pbc",
  "option_only": true
 },
 "alcoholische hepatitis": {
  "title": "Alcoholische hepatitis",
  "short": "Alcoholische hepatitis is een acute leverontsteking door overmatig alcoholgebruik, met icterus, koorts en een vergrote, gevoelige lever.",
  "definition": "<p>Bij <strong>alcoholische hepatitis</strong> ontstaat na jarenlang zwaar drinken een ontsteking met levercelnecrose, Mallory-Denk-lichaampjes en infiltratie van neutrofielen. Typisch is een ASAT dat hoger is dan het ALAT. Ernstige vormen hebben een hoge sterfte; behandeling bestaat uit alcoholstop, voeding en soms prednisolon.</p>",
  "image_url": "",
  "wiki_title": "Alcoholic hepatitis",
  "match": "alcoholische hepatitis",
  "option_only": true
 },
 "alcoholische pancreatitis": {
  "title": "Alcoholische pancreatitis",
  "short": "Alcoholische pancreatitis is een acute of chronische ontsteking van de pancreas door overmatig alcoholgebruik.",
  "definition": "<p>Alcohol is na galstenen de belangrijkste oorzaak van <strong>acute pancreatitis</strong>. Bij herhaalde aanvallen kan <strong>chronische pancreatitis</strong> ontstaan, met verkalkingen, chronische pijn, exocriene insufficiëntie (steatorroe) en diabetes. Stoppen met alcohol is essentieel.</p>",
  "image_url": "",
  "wiki_title": "Alcoholic pancreatitis",
  "match": "alcoholische pancreatitis",
  "option_only": true
 },
 "icterus": {
  "title": "Icterus (geelzucht)",
  "short": "Icterus is gele verkleuring van huid, sclerae en slijmvliezen door een verhoogd bilirubine.",
  "definition": "<p><strong>Icterus</strong> wordt meestal zichtbaar bij een bilirubine boven ongeveer 40–50 µmol/L. Men onderscheidt prehepatisch (hemolyse, vooral ongeconjugeerd bilirubine), hepatisch (leverziekte) en posthepatisch (galwegobstructie, met donkere urine en ontkleurde ontlasting). Bij pasgeborenen is lichte icterus in de eerste dagen fysiologisch.</p>",
  "image_url": "",
  "wiki_title": "Jaundice",
  "match": "icterus|geelzucht",
  "option_only": true
 },
 "ongeconjugeerd bilirubine": {
  "title": "Ongeconjugeerd bilirubine",
  "short": "Ongeconjugeerd bilirubine is het in vet oplosbare bilirubine dat bij de afbraak van heem ontstaat, voordat de lever het koppelt aan glucuronzuur.",
  "definition": "<p>Bij afbraak van hemoglobine ontstaat <strong>ongeconjugeerd bilirubine</strong>, dat aan albumine gebonden naar de lever gaat. Daar koppelt UGT1A1 het aan glucuronzuur (geconjugeerd, wateroplosbaar). Een verhoogd ongeconjugeerd bilirubine past bij hemolyse, het syndroom van Gilbert of neonatale icterus; bij pasgeborenen kan het de bloed-hersenbarrière passeren (kernicterus).</p>",
  "image_url": "",
  "wiki_title": "Bilirubin",
  "match": "ongeconjugeerd bilirubine|indirect bilirubine",
  "option_only": true
 },
 "bnp": {
  "title": "BNP (brain natriuretic peptide)",
  "short": "BNP is een hormoon uit de hartkamers dat vrijkomt bij rek van de wand; een verhoogde waarde past bij hartfalen.",
  "definition": "<p><strong>BNP</strong> en het inactieve NT-proBNP worden afgegeven door ventrikelcellen bij volume- of drukbelasting. BNP bevordert natriurese en vaatverwijding en remt het RAAS. Een normale waarde maakt hartfalen bij een kortademige patiënt onwaarschijnlijk. Ook nierfalen, hoge leeftijd, longembolie en boezemfibrilleren verhogen de waarde.</p>",
  "image_url": "",
  "wiki_title": "Brain natriuretic peptide",
  "match": "bnp|nt-probnp|natriuretisch peptide",
  "option_only": true
 },
 "glomerulaire mesangiumcellen": {
  "title": "Mesangiumcellen",
  "short": "Mesangiumcellen liggen tussen de capillairlissen van de glomerulus; ze geven steun, kunnen samentrekken en ruimen afzettingen op.",
  "definition": "<p><strong>Mesangiumcellen</strong> zijn gespecialiseerde gladde-spierachtige cellen in de glomerulus. Ze maken de mesangiale matrix, kunnen het filtratieoppervlak veranderen door contractie en fagocyteren afzettingen. Bij IgA-nefropathie stapelt IgA zich op in het mesangium; ook bij diabetische nefropathie neemt de mesangiale matrix toe.</p>",
  "image_url": "",
  "wiki_title": "Mesangial cell",
  "match": "glomerulaire mesangiumcellen|mesangiumcellen|mesangium",
  "option_only": true
 },
 "vas afferens": {
  "title": "Vas afferens",
  "short": "De vas afferens is de arteriool die bloed naar de glomerulus voert.",
  "definition": "<p>De <strong>vas afferens</strong> regelt de bloedtoevoer naar de glomerulus en daarmee mede de filtratiedruk. Bij een stijgende druk trekt ze samen (myogene reflex); via de tubuloglomerulaire terugkoppeling van de macula densa wordt de diameter verder bijgestuurd. In de wand liggen de juxtaglomerulaire cellen die renine maken. Prostaglandinen verwijden haar, NSAID's vernauwen haar.</p>",
  "image_url": "",
  "wiki_title": "Afferent arterioles",
  "match": "vas afferens|arteriola afferens|afferente arteriool",
  "option_only": true
 },
 "musculeuze arterie": {
  "title": "Musculeuze (gespierde) arterie",
  "short": "Musculeuze arteriën zijn middelgrote slagaders met een dikke laag gladde spier in de media, die de bloedverdeling regelen.",
  "definition": "<p>In <strong>musculeuze arteriën</strong> (zoals de a. radialis, a. femoralis en coronairarteriën) bestaat de tunica media vooral uit gladde spiercellen, met een duidelijke lamina elastica interna en externa. Door contractie of relaxatie kunnen ze de bloedtoevoer naar organen regelen. Elastische arteriën (aorta) hebben juist veel elastische lamellen.</p>",
  "image_url": "",
  "wiki_title": "Artery",
  "match": "musculeuze arterie|gespierde arterie|spierarterie",
  "option_only": true
 },
 "postcapillaire venule": {
  "title": "Postcapillaire venule",
  "short": "Postcapillaire venulen zijn de kleinste venen na de capillairen; hier verlaten leukocyten bij ontsteking de bloedbaan.",
  "definition": "<p>De wand van <strong>postcapillaire venulen</strong> bestaat uit endotheel met pericyten. Hier is de vaatwand het meest doorlaatbaar bij ontsteking (histamine laat endotheelcellen samentrekken) en vindt de extravasatie van leukocyten plaats. In lymfeklieren hebben ze hoog endotheel (HEV), waardoor lymfocyten de klier binnengaan.</p>",
  "image_url": "",
  "wiki_title": "Venule",
  "match": "postcapillaire venule|postcapillaire venulen|hoog endotheel venule",
  "option_only": true
 },
 "gefenestreerde capillairen met een diafragma": {
  "title": "Gefenestreerde capillairen met diafragma",
  "short": "Dit zijn capillairen met porieën in het endotheel die afgesloten zijn door een dun diafragma; ze komen o.a. voor in endocriene klieren en de darm.",
  "definition": "<p>In <strong>gefenestreerde capillairen</strong> bevat het endotheel kleine openingen (fenestrae) van ongeveer 60–80 nm. Bij het type <em>met diafragma</em> worden deze afgedekt door een dun eiwitvlies. Ze laten snelle uitwisseling van kleine moleculen toe en komen voor in endocriene klieren, darmvlokken en de plexus choroideus.</p>",
  "image_url": "",
  "wiki_title": "Capillary",
  "match": "gefenestreerde capillairen met een diafragma|gefenestreerde capillairen met diafragma",
  "option_only": true
 },
 "gefenestreerde capillairen zonder diafragma": {
  "title": "Gefenestreerde capillairen zonder diafragma",
  "short": "Gefenestreerde capillairen zonder diafragma hebben open poriën in het endotheel; het klassieke voorbeeld is de glomerulus.",
  "definition": "<p>In de <strong>glomerulus</strong> hebben de capillairen grote fenestrae zonder diafragma, liggend op een dikke basaalmembraan. Dat maakt een zeer hoge filtratie van water en kleine moleculen mogelijk, terwijl basaalmembraan en podocyten grote eiwitten tegenhouden.</p>",
  "image_url": "",
  "wiki_title": "Capillary",
  "match": "gefenestreerde capillairen zonder diafragma",
  "option_only": true
 },
 "discontinue sinusoïden": {
  "title": "Discontinue (sinusoïdale) capillairen",
  "short": "Sinusoïden zijn wijde capillairen met grote openingen tussen de endotheelcellen en een onvolledige basaalmembraan, o.a. in lever, milt en beenmerg.",
  "definition": "<p>In <strong>sinusoïdale capillairen</strong> kunnen grote moleculen en soms cellen de vaatwand passeren. In de lever liggen ze tussen de balkjes hepatocyten; daar zit tussen endotheel en hepatocyten de ruimte van Disse. In milt en beenmerg laten ze bloedcellen door.</p>",
  "image_url": "",
  "wiki_title": "Capillary",
  "match": "discontinue sinusoïden|sinusoïden|sinusoïdale capillairen|discontinue capillairen",
  "option_only": true
 },
 "sinusoïdale endotheelcel": {
  "title": "Sinusoïdale endotheelcel",
  "short": "Sinusoïdale endotheelcellen bekleden de leversinusoïden en hebben open poriën zonder echte basaalmembraan.",
  "definition": "<p><strong>Lever-sinusoïdale endotheelcellen</strong> bevatten groepjes fenestrae (zeefplaten) waardoor plasma vrij de ruimte van Disse in kan stromen, in contact met de microvilli van hepatocyten. Ze ruimen ook kleine deeltjes uit het bloed op. Bij fibrose verdwijnen de fenestrae (capillarisatie).</p>",
  "image_url": "",
  "wiki_title": "Liver sinusoidal endothelial cell",
  "match": "sinusoïdale endotheelcel|sinusoïdale endotheelcellen|lsec",
  "option_only": true
 },
 "fat-storing cel": {
  "title": "Stellaatcel van de lever (Ito-cel)",
  "short": "Stellaatcellen (Ito-cellen) liggen in de ruimte van Disse, slaan vitamine A op en worden bij leverschade de belangrijkste bron van fibrose.",
  "definition": "<p>In rust slaan <strong>hepatische stellaatcellen</strong> vitamine A op in vetdruppels. Bij chronische leverschade worden ze geactiveerd en veranderen ze in myofibroblasten die veel collageen maken; dat is de kern van leverfibrose en cirrose.</p>",
  "image_url": "",
  "wiki_title": "Hepatic stellate cell",
  "match": "fat-storing cel|ito-cel|stellaatcel|hepatische stellaatcel",
  "option_only": true
 },
 "slijmbekercellen": {
  "title": "Slijmbekercellen",
  "short": "Slijmbekercellen zijn eencellige klieren in het epitheel van darm en luchtwegen die slijm (mucine) afgeven.",
  "definition": "<p><strong>Slijmbekercellen</strong> hebben een bekervorm doordat hun top gevuld is met mucinekorrels. Het slijm beschermt en smeert het epitheel en vangt deeltjes en micro-organismen. Ze zijn talrijk in het colon en in het respiratoire epitheel; bij chronische irritatie (bijv. roken) neemt hun aantal toe.</p>",
  "image_url": "",
  "wiki_title": "Goblet cell",
  "match": "slijmbekercellen|slijmbekercel|goblet cells",
  "option_only": true
 },
 "cilindrisch epitheel": {
  "title": "Cilindrisch epitheel",
  "short": "Cilindrisch epitheel bestaat uit cellen die hoger zijn dan breed, met de kern aan de basis; het bekleedt o.a. maag en darm.",
  "definition": "<p><strong>Eenlagig cilindrisch epitheel</strong> komt voor in maag, dunne en dikke darm en galblaas, en is gespecialiseerd in absorptie en secretie (vaak met microvilli of slijmbekercellen). Met trilharen komt het voor in de eileider. In de slokdarm kan plaveiselepitheel door cilindrisch epitheel vervangen worden (Barrett).</p>",
  "image_url": "",
  "wiki_title": "Simple columnar epithelium",
  "match": "cilindrisch epitheel|eenlagig cilindrisch epitheel|cilinderepitheel",
  "option_only": true
 },
 "eenlagig plaveiselepitheel": {
  "title": "Eenlagig plaveiselepitheel",
  "short": "Eenlagig plaveiselepitheel bestaat uit één laag platte cellen en is geschikt voor diffusie en filtratie.",
  "definition": "<p><strong>Eenlagig plaveiselepitheel</strong> bekleedt de alveoli (pneumocyten type I), de binnenkant van bloed- en lymfevaten (endotheel), de sereuze vliezen (mesotheel) en het pariëtale blad van het kapsel van Bowman. Door de geringe dikte is snelle uitwisseling van gassen en stoffen mogelijk.</p>",
  "image_url": "",
  "wiki_title": "Simple squamous epithelium",
  "match": "eenlagig plaveiselepitheel",
  "option_only": true
 },
 "meerlagig onverhoornend plaveiselepitheel": {
  "title": "Meerlagig onverhoornd plaveiselepitheel",
  "short": "Meerlagig onverhoornd plaveiselepitheel beschermt vochtige oppervlakken tegen mechanische belasting, zoals mond, slokdarm en vagina.",
  "definition": "<p>In <strong>meerlagig onverhoornd plaveiselepitheel</strong> worden de cellen naar boven toe platter, maar ze behouden hun kern en verhoornen niet. Het komt voor in mondholte, oesophagus, vagina, ectocervix en cornea. Het verhoornde type vormt de epidermis van de huid.</p>",
  "image_url": "",
  "wiki_title": "Stratified squamous epithelium",
  "match": "meerlagig onverhoornend plaveiselepitheel|meerlagig onverhoornd plaveiselepitheel",
  "option_only": true
 },
 "meerrijig plaveiselepitheel": {
  "title": "Meerrijig (pseudostratified) epitheel",
  "short": "Meerrijig epitheel lijkt meerlagig, maar alle cellen raken de basaalmembraan; met trilharen bekleedt het de luchtwegen.",
  "definition": "<p>In <strong>meerrijig epitheel</strong> liggen de kernen op verschillende hoogtes, waardoor het meerlagig lijkt, terwijl elke cel contact maakt met de basaalmembraan. Het klassieke voorbeeld is het respiratoire epitheel (meerrijig trilhaarcilinderepitheel met slijmbekercellen) in neus, trachea en bronchi. Een ‘meerrijig plaveiselepitheel’ bestaat strikt genomen niet.</p>",
  "image_url": "",
  "wiki_title": "Pseudostratified columnar epithelium",
  "match": "meerrijig plaveiselepitheel|meerrijig epitheel|meerrijig trilhaarcilinderepitheel",
  "option_only": true
 },
 "tunica muscularis": {
  "title": "Tunica muscularis",
  "short": "De tunica muscularis is de spierlaag van de wand van het maag-darmkanaal, meestal met een binnenste circulaire en buitenste longitudinale laag.",
  "definition": "<p>De <strong>tunica muscularis</strong> zorgt voor peristaltiek en menging. Tussen de circulaire en longitudinale laag ligt de plexus myentericus (van Auerbach), die de motiliteit regelt. De maag heeft daarnaast een schuine binnenlaag. In het colon is de longitudinale laag samengetrokken tot drie taeniae coli.</p>",
  "image_url": "",
  "wiki_title": "Muscular layer",
  "match": "tunica muscularis|muscularis propria|muscularis externa",
  "option_only": true
 },
 "bronchus": {
  "title": "Bronchus",
  "short": "Een bronchus is een luchtweg die van de trachea naar de longen vertakt; de wand bevat kraakbeen, klieren en gladde spier.",
  "definition": "<p>De trachea splitst in de linker en rechter <strong>hoofdbronchus</strong>; de rechter is korter, wijder en loopt steiler, zodat ingeademde voorwerpen vaker rechts terechtkomen. Ze vertakken in lobaire en segmentale bronchi. De wand bevat kraakbeenplaatjes, seromuceuze klieren, gladde spier en respiratoir epitheel; bij de bronchioli verdwijnen kraakbeen en klieren.</p>",
  "image_url": "",
  "wiki_title": "Bronchus",
  "match": "bronchus|bronchi|hoofdbronchus",
  "option_only": true
 },
 "notochord": {
  "title": "Notochord (chorda dorsalis)",
  "short": "De notochord is een staafvormige structuur in het embryo die de as aangeeft en het bovenliggende ectoderm aanzet tot vorming van de neurale plaat.",
  "definition": "<p>De <strong>chorda dorsalis</strong> ontstaat uit het axiaal mesoderm tijdens de gastrulatie. Door signalen zoals Sonic hedgehog induceert zij de neurale plaat en de ventrale structuren van de neurale buis, en stuurt zij de vorming van de wervellichamen. Bij volwassenen blijft er alleen een restant over in de nucleus pulposus; een chordoom is een tumor van chordaresten.</p>",
  "image_url": "",
  "wiki_title": "Notochord",
  "match": "notochord|chorda dorsalis",
  "option_only": true
 },
 "axiaal mesoderm": {
  "title": "Axiaal mesoderm",
  "short": "Het axiaal mesoderm is het mesoderm in de middellijn van het embryo; hieruit ontstaat de notochord.",
  "definition": "<p>Tijdens de gastrulatie migreren cellen via de primitiefstreep. Het mesoderm wordt van mediaal naar lateraal ingedeeld in <strong>axiaal mesoderm</strong> (chorda dorsalis en prechordale plaat), paraxiaal mesoderm (somieten), intermediair mesoderm (urogenitaal stelsel) en lateraal plaatmesoderm (lichaamswand, hart, vaten).</p>",
  "image_url": "",
  "wiki_title": "Mesoderm",
  "match": "axiaal mesoderm|chordamesoderm",
  "option_only": true
 },
 "laterale plaat mesoderm": {
  "title": "Laterale plaatmesoderm",
  "short": "Het laterale plaatmesoderm splitst in een somatisch en splanchnisch blad, waaruit lichaamswand, ledematen, hart, vaten en de wand van de darm ontstaan.",
  "definition": "<p>Het <strong>laterale plaatmesoderm</strong> splitst zich in het <em>somatische</em> (pariëtale) blad, dat met het ectoderm de lichaamswand en het bindweefsel van de ledematen vormt, en het <em>splanchnische</em> (viscerale) blad, dat met het endoderm de wand van de darm, het hart en de bloedvaten vormt. De ruimte ertussen wordt de lichaamsholte (coeloom).</p>",
  "image_url": "",
  "wiki_title": "Lateral plate mesoderm",
  "match": "laterale plaat mesoderm|lateraal plaatmesoderm|laterale plaatmesoderm",
  "option_only": true
 },
 "neurulatie": {
  "title": "Neurulatie",
  "short": "Neurulatie is de vorming van de neurale buis uit de neurale plaat in de derde en vierde week van de embryonale ontwikkeling.",
  "definition": "<p>Bij <strong>neurulatie</strong> verdikt het ectoderm boven de chorda tot de neurale plaat, die zich opvouwt tot neurale plooien die in de middellijn sluiten tot de neurale buis. De sluiting begint in het midden en eindigt bij de craniale (dag ±25) en caudale (dag ±28) neuroporus. Niet sluiten geeft anencefalie of spina bifida. Uit de neurale lijst ontstaan o.a. perifere zenuwen, melanocyten en het bijniermerg.</p>",
  "image_url": "",
  "wiki_title": "Neurulation",
  "match": "neurulatie",
  "option_only": true
 },
 "nidatie": {
  "title": "Nidatie (innesteling)",
  "short": "Nidatie is de innesteling van de blastocyst in het endometrium, ongeveer 6–7 dagen na de bevruchting.",
  "definition": "<p>Bij <strong>nidatie</strong> hecht de blastocyst zich met de trofoblast aan het endometrium, meestal aan de achterwand van het corpus uteri. De syncytiotrofoblast dringt het endometrium binnen en begint hCG te maken, dat het corpus luteum in stand houdt. Innesteling buiten de uterusholte (meestal in de tuba) heet een extra-uteriene graviditeit.</p>",
  "image_url": "",
  "wiki_title": "Implantation (embryology)",
  "match": "nidatie|innesteling",
  "option_only": true
 },
 "cloaca": {
  "title": "Cloaca",
  "short": "De cloaca is het gemeenschappelijke eindstuk van de embryonale achterdarm, waarin ook de allantois uitmondt.",
  "definition": "<p>Het urorectale septum verdeelt de <strong>cloaca</strong> in een dorsaal deel (rectum en bovenste anaalkanaal) en een ventraal deel, de sinus urogenitalis (blaas en urethra). Het cloacamembraan scheurt later. Een stoornis in deze verdeling geeft anorectale misvormingen en fistels.</p>",
  "image_url": "",
  "wiki_title": "Cloaca (embryology)",
  "match": "cloaca",
  "option_only": true
 },
 "primaire spermatocyten": {
  "title": "Primaire spermatocyt",
  "short": "Een primaire spermatocyt is een diploïde kiemcel die de eerste meiotische deling ondergaat.",
  "definition": "<p>Een <strong>primaire spermatocyt</strong> ontstaat uit een spermatogonium en verdubbelt eerst haar DNA. Tijdens de lange profase van meiose I vindt crossing-over plaats tussen homologe chromosomen. Na meiose I ontstaan twee secundaire spermatocyten.</p>",
  "image_url": "",
  "wiki_title": "Spermatocyte",
  "match": "primaire spermatocyten|primaire spermatocyt|spermatocyt i",
  "option_only": true
 },
 "secundaire spermatocyten": {
  "title": "Secundaire spermatocyt",
  "short": "Een secundaire spermatocyt is een haploïde cel (met dubbele chromatiden) die direct de tweede meiotische deling ondergaat.",
  "definition": "<p><strong>Secundaire spermatocyten</strong> ontstaan uit meiose I en bestaan maar kort, omdat ze snel meiose II doorlopen. Daaruit ontstaan per secundaire spermatocyt twee spermatiden.</p>",
  "image_url": "",
  "wiki_title": "Spermatocyte",
  "match": "secundaire spermatocyten|secundaire spermatocyt|spermatocyt ii",
  "option_only": true
 },
 "spermatide": {
  "title": "Spermatide",
  "short": "Een spermatide is een haploïde cel uit de tweede meiotische deling, die via spermiogenese uitgroeit tot een spermatozoön.",
  "definition": "<p>Bij de <strong>spermiogenese</strong> verandert een ronde spermatide in een spermatozoön: het acrosoom wordt gevormd, de kern condenseert, er groeit een staart (flagel) en overtollig cytoplasma wordt afgestoten en door Sertolicellen opgenomen. Er vindt geen celdeling meer plaats.</p>",
  "image_url": "",
  "wiki_title": "Spermatid",
  "match": "spermatide|spermatiden",
  "option_only": true
 },
 "agenesie van beide nieren": {
  "title": "Bilaterale nieragenesie",
  "short": "Bij bilaterale nieragenesie zijn beide nieren niet aangelegd, met ernstig tekort aan vruchtwater en longhypoplasie als gevolg.",
  "definition": "<p>Bij <strong>bilaterale nieragenesie</strong> ontstaan de nieren niet, doordat de ureterknop niet of verkeerd met het metanefrogene mesoderm in contact komt. Er wordt geen foetale urine gemaakt, met oligo- of anhydramnion. Dat leidt tot de Potter-sequentie: longhypoplasie, een afgeplat gezicht en standsafwijkingen van de ledematen; het is niet met het leven verenigbaar.</p>",
  "image_url": "",
  "wiki_title": "Renal agenesis",
  "match": "agenesie van beide nieren|bilaterale nieragenesie|nieragenesie",
  "option_only": true
 },
 "hernia diafragmatica": {
  "title": "Hernia diafragmatica",
  "short": "Bij een hernia diafragmatica liggen buikorganen via een defect in het diafragma in de borstholte.",
  "definition": "<p>De <strong>congenitale hernia diafragmatica</strong> ontstaat meestal links-achter (hernia van Bochdalek) doordat de pleuroperitoneale membranen niet goed sluiten. Darmen en soms maag en lever liggen in de thorax en belemmeren de groei van de long (longhypoplasie, pulmonale hypertensie). De pasgeborene is direct na de geboorte benauwd met een ingevallen buik.</p>",
  "image_url": "",
  "wiki_title": "Congenital diaphragmatic hernia",
  "match": "hernia diafragmatica|congenitale hernia diafragmatica|hernia van bochdalek",
  "option_only": true
 },
 "hernia inguinalis": {
  "title": "Liesbreuk (hernia inguinalis)",
  "short": "Een liesbreuk is een uitstulping van buikvlies (met eventueel darm) via het lieskanaal of de achterwand ervan.",
  "definition": "<p>Een <strong>indirecte</strong> liesbreuk volgt het lieskanaal vanaf de inwendige liesring, lateraal van de vasa epigastrica inferiora (vaak door een open processus vaginalis). Een <strong>directe</strong> liesbreuk puilt mediaal van deze vaten uit door een zwakke achterwand. Liesbreuken komen vooral bij mannen voor; beklemming is een spoedgeval.</p>",
  "image_url": "",
  "wiki_title": "Inguinal hernia",
  "match": "hernia inguinalis|liesbreuk",
  "option_only": true
 },
 "hyaliene membraanziekte": {
  "title": "Hyalienemembraanziekte (IRDS)",
  "short": "Hyalienemembraanziekte is ademnood bij te vroeg geboren kinderen door een tekort aan surfactant.",
  "definition": "<p>Bij <strong>IRDS</strong> maken onrijpe longen (vooral vóór 32 weken) te weinig surfactant, waardoor de alveoli samenvallen. Kort na de geboorte ontstaan kreunen, neusvleugelen, intrekkingen en cyanose. Het risico wordt verlaagd door antenatale corticosteroïden aan de moeder; behandeling met CPAP en surfactant via de trachea.</p>",
  "image_url": "",
  "wiki_title": "Infant respiratory distress syndrome",
  "match": "hyaliene membraanziekte|hyalienemembraanziekte|irds|respiratory distress syndrome",
  "option_only": true
 },
 "miskraam": {
  "title": "Miskraam",
  "short": "Een miskraam is het spontaan verloren gaan van een zwangerschap vóór 16 weken (in Nederland), meestal in het eerste trimester.",
  "definition": "<p>Ongeveer 10–15% van de vastgestelde zwangerschappen eindigt in een <strong>miskraam</strong>. De meeste vroege miskramen worden veroorzaakt door chromosoomafwijkingen van het embryo. Klachten zijn bloedverlies en buikkrampen. Het risico stijgt met de leeftijd van de moeder. Bij herhaalde miskramen wordt o.a. gezocht naar het antifosfolipidensyndroom en chromosoomafwijkingen bij de ouders.</p>",
  "image_url": "",
  "wiki_title": "Miscarriage",
  "match": "miskraam|spontane abortus",
  "option_only": true
 },
 "polycysteus ovariumsyndroom": {
  "title": "Polycysteus ovariumsyndroom (PCOS)",
  "short": "PCOS is een hormonale stoornis met onregelmatige of uitblijvende ovulatie, verhoogde androgenen en/of veel kleine follikels in de ovaria.",
  "definition": "<p>Volgens de Rotterdam-criteria spreekt men van <strong>PCOS</strong> bij twee van drie kenmerken: oligo- of anovulatie, klinische of biochemische hyperandrogenisme (acne, hirsutisme) en polycysteuze ovaria op de echo. Het gaat vaak samen met insulineresistentie en overgewicht. Het is een veelvoorkomende oorzaak van subfertiliteit.</p>",
  "image_url": "",
  "wiki_title": "Polycystic ovary syndrome",
  "match": "polycysteus ovariumsyndroom|pcos|polycysteus ovarium syndroom",
  "option_only": true
 },
 "salpingitis": {
  "title": "Salpingitis",
  "short": "Salpingitis is een ontsteking van de eileiders, meestal door een opstijgende seksueel overdraagbare infectie.",
  "definition": "<p><strong>Salpingitis</strong> maakt deel uit van pelvic inflammatory disease (PID) en wordt vaak veroorzaakt door <em>Chlamydia trachomatis</em> of gonokokken. Klachten: onderbuikpijn, koorts, abnormale afscheiding en slingerpijn bij vaginaal toucher. Complicaties zijn tubo-ovarieel abces, verklevingen, buitenbaarmoederlijke zwangerschap en subfertiliteit.</p>",
  "image_url": "",
  "wiki_title": "Salpingitis",
  "match": "salpingitis|eileiderontsteking|pelvic inflammatory disease|pid",
  "option_only": true
 },
 "mammacarcinoom": {
  "title": "Mammacarcinoom (borstkanker)",
  "short": "Het mammacarcinoom is een kwaadaardige tumor van de borstklier, de meest voorkomende kanker bij vrouwen.",
  "definition": "<p>Het <strong>mammacarcinoom</strong> is meestal een invasief carcinoom uitgaande van de afvoergangen (ductaal) of lobjes (lobulair). Risicofactoren zijn leeftijd, familiaire belasting (BRCA1/2), lange oestrogeenblootstelling en alcohol. Behandeling hangt af van stadium en receptorstatus (oestrogeen, progesteron, HER2): chirurgie, radiotherapie, hormonale therapie, chemotherapie en doelgerichte therapie. Er is een bevolkingsonderzoek met mammografie.</p>",
  "image_url": "",
  "wiki_title": "Breast cancer",
  "match": "mammacarcinoom|borstkanker",
  "option_only": true
 },
 "prostaatcarcinoom": {
  "title": "Prostaatcarcinoom",
  "short": "Het prostaatcarcinoom is een kwaadaardige tumor van de prostaat, meestal een adenocarcinoom uitgaand van de perifere zone.",
  "definition": "<p><strong>Prostaatkanker</strong> komt vooral voor bij oudere mannen en groeit vaak langzaam. Vroege stadia geven meestal geen klachten; gevorderde stadia kunnen plasklachten en botmetastasen (botpijn) geven. Diagnostiek met rectaal toucher, PSA, MRI en biopten (Gleason-score). Behandeling varieert van actief volgen tot operatie, radiotherapie en hormonale therapie.</p>",
  "image_url": "",
  "wiki_title": "Prostate cancer",
  "match": "prostaatcarcinoom|prostaatkanker",
  "option_only": true
 },
 "adenocarcinoom": {
  "title": "Adenocarcinoom",
  "short": "Een adenocarcinoom is een kwaadaardige tumor van klierepitheel, zoals in darm, borst, prostaat, long en pancreas.",
  "definition": "<p>Een <strong>adenocarcinoom</strong> vormt (verwaarloosde) klierstructuren of maakt slijm. Het is de meest voorkomende vorm van kanker van colon, maag, pancreas, prostaat, borst en een groot deel van het longcarcinoom. De mate van differentiatie (graad) en het stadium bepalen de prognose.</p>",
  "image_url": "",
  "wiki_title": "Adenocarcinoma",
  "match": "adenocarcinoom|adenocarcinomen",
  "option_only": true
 },
 "adenoom": {
  "title": "Adenoom",
  "short": "Een adenoom is een goedaardige tumor van klierepitheel, bijvoorbeeld een darmpoliep of een hypofyseadenoom.",
  "definition": "<p>Een <strong>adenoom</strong> groeit expansief en zaait niet uit, maar kan (zoals in de darm) via opeenstapeling van mutaties overgaan in een adenocarcinoom. Adenomen van endocriene klieren (bijv. hypofyse, bijnier, bijschildklier) kunnen hormonen produceren en daardoor klachten geven.</p>",
  "image_url": "",
  "wiki_title": "Adenoma",
  "match": "adenoom|adenomen",
  "option_only": true
 },
 "neuro-endocrien carcinoom": {
  "title": "Neuro-endocriene tumor",
  "short": "Neuro-endocriene tumoren gaan uit van hormoonproducerende cellen, vooral in het maag-darmkanaal, de pancreas en de long.",
  "definition": "<p><strong>Neuro-endocriene neoplasmata</strong> variëren van goed gedifferentieerde, langzaam groeiende tumoren (vroeger carcinoïden) tot agressieve, slecht gedifferentieerde carcinomen (zoals het kleincellig longcarcinoom). Ze kleuren aan met chromogranine en synaptofysine. Sommige maken hormonen; bij levermetastasen van een dunnedarm-NET kan een carcinoïdsyndroom ontstaan (flushing, diarree).</p>",
  "image_url": "",
  "wiki_title": "Neuroendocrine tumor",
  "match": "neuro-endocrien carcinoom|neuro-endocriene tumor|carcinoïd",
  "option_only": true
 },
 "iliotibiaal frictiesyndroom": {
  "title": "Iliotibiaal frictiesyndroom",
  "short": "Bij het iliotibiaal frictiesyndroom ontstaat pijn aan de buitenkant van de knie door wrijving van de tractus iliotibialis over de laterale femurcondyl.",
  "definition": "<p>Het <strong>iliotibiaal frictiesyndroom</strong> is een overbelastingsblessure, vooral bij hardlopers en fietsers. De pijn zit lateraal boven het kniegewricht en neemt toe tijdens het lopen, vooral bergaf. Er is drukpijn op de laterale epicondyl. Behandeling: belasting aanpassen, rekken en versterken van de heupspieren.</p>",
  "image_url": "",
  "wiki_title": "Iliotibial band syndrome",
  "match": "iliotibiaal frictiesyndroom|itbs|runner's knee",
  "option_only": true
 },
 "carpaal tunnel syndroom": {
  "title": "Carpaletunnelsyndroom",
  "short": "Bij het carpaletunnelsyndroom is de n. medianus bekneld in de carpale tunnel, met tintelingen in duim, wijs- en middelvinger.",
  "definition": "<p>Het <strong>carpaletunnelsyndroom</strong> is de meest voorkomende zenuwbeknelling. Klachten: tintelingen en doofheid in het gebied van de n. medianus, vaak ’s nachts, verbeterend door schudden met de hand; later zwakte en atrofie van de duimmuis. Risicofactoren zijn zwangerschap, diabetes, hypothyreoïdie, reumatoïde artritis en repetitieve bewegingen. Behandeling met spalk, injectie of klieving van het lig. carpi transversum.</p>",
  "image_url": "",
  "wiki_title": "Carpal tunnel syndrome",
  "match": "carpaal tunnel syndroom|carpaletunnelsyndroom|cts",
  "option_only": true
 },
 "n. medianus": {
  "title": "N. medianus",
  "short": "De n. medianus (C6–T1) loopt door de carpale tunnel en innerveert o.a. de duimmuis en het gevoel van duim, wijs- en middelvinger.",
  "definition": "<p>De <strong>n. medianus</strong> ontstaat uit de fasciculus lateralis en medialis van de plexus brachialis. Hij innerveert de meeste flexoren van de onderarm, de spieren van de duimmuis en de laterale mm. lumbricales, en sensibel de palmaire zijde van duim, wijs-, middel- en de radiale helft van de ringvinger. Bij een hoog letsel ontstaat een ‘eedhand’.</p>",
  "image_url": "",
  "wiki_title": "Median nerve",
  "match": "n. medianus|nervus medianus",
  "option_only": true
 },
 "n. thoracicus longus": {
  "title": "N. thoracicus longus",
  "short": "De n. thoracicus longus (C5–C7) innerveert de m. serratus anterior.",
  "definition": "<p>De <strong>n. thoracicus longus</strong> loopt over de laterale borstwand naar beneden, oppervlakkig op de m. serratus anterior. Daardoor is hij kwetsbaar bij okselklierdissectie, trauma en zware belasting van de schouder. Uitval geeft een scapula alata, vooral zichtbaar bij duwen tegen een muur.</p>",
  "image_url": "",
  "wiki_title": "Long thoracic nerve",
  "match": "n. thoracicus longus|nervus thoracicus longus",
  "option_only": true
 },
 "os scaphoideum": {
  "title": "Os scaphoideum",
  "short": "Het os scaphoideum is het bootvormige handwortelbeentje aan de duimzijde van de proximale rij.",
  "definition": "<p>Het <strong>os scaphoideum</strong> overbrugt de proximale en distale handwortelrij en breekt vaak na een val op de uitgestrekte hand. Omdat de bloedvoorziening van distaal naar proximaal loopt, kan het proximale fragment na een fractuur afsterven (avasculaire necrose) en ontstaat gemakkelijk een pseudartrose. Een fractuur is op de eerste foto soms niet zichtbaar.</p>",
  "image_url": "",
  "wiki_title": "Scaphoid bone",
  "match": "os scaphoideum|scafoïd|naviculare van de hand",
  "option_only": true
 },
 "scharniergewricht": {
  "title": "Scharniergewricht",
  "short": "Een scharniergewricht laat beweging om één as toe: flexie en extensie.",
  "definition": "<p>Een <strong>scharniergewricht</strong> (ginglymus) is een eenassig gewricht, vergelijkbaar met een deurscharnier. Sterke collaterale banden voorkomen zijwaartse beweging. Voorbeelden zijn de interfalangeale gewrichten van vingers en tenen en het bovenste spronggewricht.</p>",
  "image_url": "",
  "wiki_title": "Hinge joint",
  "match": "scharniergewricht|ginglymus",
  "option_only": true
 },
 "inversie": {
  "title": "Inversie (voet)",
  "short": "Inversie is het kantelen van de voetzool naar binnen (mediaal); de tegenovergestelde beweging is eversie.",
  "definition": "<p><strong>Inversie</strong> vindt vooral plaats in het onderste spronggewricht (subtalair) en de gewrichten van de middenvoet. Ze maakt deel uit van supinatie (inversie, adductie en plantairflexie). Een inversietrauma (omslaan van de enkel) belast vooral de laterale enkelbanden.</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "inversie",
  "option_only": true
 },
 "concentrische contractie": {
  "title": "Concentrische contractie",
  "short": "Bij een concentrische contractie verkort de spier terwijl hij kracht levert, bijvoorbeeld de biceps bij het optillen van een gewicht.",
  "definition": "<p>Bij <strong>concentrische</strong> spierarbeid is de spierkracht groter dan de externe belasting en verkort de spier. Bij <em>excentrische</em> arbeid verlengt de spier onder spanning (bijv. remmend bij het neerzetten van een gewicht); dat geeft de meeste spierpijn. Bij <em>isometrische</em> arbeid blijft de lengte gelijk.</p>",
  "image_url": "",
  "wiki_title": "Muscle contraction",
  "match": "concentrische contractie|concentrische spierwerking",
  "option_only": true
 },
 "isometrische contracie": {
  "title": "Isometrische contractie",
  "short": "Bij een isometrische contractie ontwikkelt de spier kracht zonder van lengte te veranderen, bijvoorbeeld bij het vasthouden van een houding.",
  "definition": "<p>Bij <strong>isometrische</strong> spierarbeid is de spierkracht even groot als de externe belasting, zodat er geen beweging ontstaat. Voorbeelden zijn duwen tegen een muur of een houding vasthouden. Het geeft een flinke stijging van de bloeddruk.</p>",
  "image_url": "",
  "wiki_title": "Muscle contraction",
  "match": "isometrische contracie|isometrische contractie|isometrische spierwerking",
  "option_only": true
 },
 "arthrodese": {
  "title": "Artrodese",
  "short": "Een artrodese is het operatief vastzetten van een gewricht, zodat de botten aan elkaar vastgroeien.",
  "definition": "<p>Bij een <strong>artrodese</strong> worden de gewrichtsvlakken verwijderd en de botten in een functionele stand gefixeerd tot ze vergroeien. Het gewricht wordt daardoor pijnvrij en stabiel, maar verliest zijn beweeglijkheid. Het wordt o.a. toegepast bij ernstige artrose of instabiliteit van enkel, pols, duim of wervelkolom.</p>",
  "image_url": "",
  "wiki_title": "Arthrodesis",
  "match": "arthrodese|artrodese|gewrichtsfusie",
  "option_only": true
 },
 "tibiafractuur": {
  "title": "Tibiafractuur",
  "short": "Een tibiafractuur is een breuk van het scheenbeen, vaak door hoog-energetisch trauma.",
  "definition": "<p>Omdat de voorzijde van de tibia direct onder de huid ligt, zijn <strong>tibiafracturen</strong> relatief vaak open. Ze hebben een verhoogd risico op een compartimentsyndroom (toenemende pijn, vooral bij passief rekken) en vertraagde genezing door de beperkte bekleding met weke delen.</p>",
  "image_url": "",
  "wiki_title": "Tibial fracture",
  "match": "tibiafractuur|scheenbeenbreuk",
  "option_only": true
 },
 "calcaneusfractuur": {
  "title": "Calcaneusfractuur",
  "short": "Een calcaneusfractuur is een breuk van het hielbeen, meestal na een val van hoogte op de voeten.",
  "definition": "<p>Bij een <strong>calcaneusfractuur</strong> wordt de calcaneus door de talus ingedrukt. Er zijn vaak bijkomende letsels, zoals wervelfracturen (axiale belasting) of een fractuur van de andere hiel. Er is risico op een compartimentsyndroom van de voet en later artrose van het subtalaire gewricht.</p>",
  "image_url": "",
  "wiki_title": "Calcaneal fracture",
  "match": "calcaneusfractuur|hielbeenbreuk",
  "option_only": true
 },
 "patellafractuur": {
  "title": "Patellafractuur",
  "short": "Een patellafractuur is een breuk van de knieschijf, door een directe val op de knie of door een krachtige contractie van de m. quadriceps.",
  "definition": "<p>Bij een <strong>patellafractuur</strong> is de strekfunctie van de knie vaak gestoord als het strekapparaat is doorbroken. Een dislocatie van de fragmenten wordt operatief gefixeerd (bijv. met tension-band-wiring). Een bipartiete patella is een normvariant die met een fractuur verward kan worden.</p>",
  "image_url": "",
  "wiki_title": "Patella fracture",
  "match": "patellafractuur|knieschijfbreuk",
  "option_only": true
 },
 "capitatumfractuur": {
  "title": "Fractuur van het os capitatum",
  "short": "Een fractuur van het os capitatum is een zeldzame handwortelfractuur, soms samen met een scaphoïdfractuur.",
  "definition": "<p>Het <strong>os capitatum</strong> is het grootste handwortelbeentje, centraal in de distale rij. Fracturen zijn zeldzaam, ontstaan bij hyperextensie van de pols en gaan soms samen met een scaphoïdfractuur. Net als bij het scaphoïd kan de proximale pool door de bloedvoorziening afsterven.</p>",
  "image_url": "",
  "wiki_title": "Capitate bone",
  "match": "capitatumfractuur|fractuur os capitatum",
  "option_only": true
 },
 "luxatie os lunatum": {
  "title": "Lunatumluxatie",
  "short": "Bij een lunatumluxatie schiet het os lunatum naar palmair uit de handwortel, meestal na een val op de gestrekte pols.",
  "definition": "<p>Bij een <strong>lunatumluxatie</strong> en de verwante perilunaire luxatie zijn de banden rond het lunatum gescheurd. Het verplaatste lunatum kan de n. medianus in de carpale tunnel comprimeren. Op een laterale röntgenfoto is het lunatum gekanteld (‘gekanteld theekopje’). Snelle repositie en operatief herstel zijn nodig.</p>",
  "image_url": "",
  "wiki_title": "Lunate dislocation",
  "match": "luxatie os lunatum|lunatumluxatie|perilunaire luxatie",
  "option_only": true
 },
 "pseudoartrose cmc-i": {
  "title": "Pseudartrose",
  "short": "Een pseudartrose is een fractuur die niet is geheeld, waardoor er een beweeglijke ‘vals gewricht’-verbinding ontstaat.",
  "definition": "<p>Bij een <strong>pseudartrose</strong> is de botgenezing na ongeveer 6–9 maanden uitgebleven. Risicofactoren zijn een slechte doorbloeding (bijv. scaphoïd), onvoldoende stabiliteit, infectie, roken en diabetes. Behandeling bestaat meestal uit chirurgische stabilisatie, eventueel met bottransplantaat.</p>",
  "image_url": "",
  "wiki_title": "Nonunion",
  "match": "pseudoartrose cmc-i|pseudartrose|pseudoartrose",
  "option_only": true
 },
 "ziekte van mcardle": {
  "title": "Ziekte van McArdle (glycogeenstapelingsziekte type V)",
  "short": "Bij de ziekte van McArdle ontbreekt spierglycogeenfosforylase, waardoor spieren bij inspanning geen glycogeen kunnen afbreken.",
  "definition": "<p>Bij de <strong>ziekte van McArdle</strong> ontstaan bij inspanning snel spierpijn, krampen en vermoeidheid; na een korte rust kan het beter gaan (‘second wind’, door overschakelen op bloedglucose en vetzuren). Bij forse inspanning kan rabdomyolyse met myoglobinurie optreden. Bij een inspanningstest stijgt het lactaat niet. Het erft autosomaal recessief over.</p>",
  "image_url": "",
  "wiki_title": "Glycogen storage disease type V",
  "match": "ziekte van mcardle|mcardle|glycogeenstapelingsziekte type v",
  "option_only": true
 },
 "hypotonie": {
  "title": "Hypotonie (spierslapte)",
  "short": "Hypotonie is een verlaagde spierspanning; bij zuigelingen spreekt men van een ‘floppy infant’.",
  "definition": "<p>Bij <strong>hypotonie</strong> is de weerstand bij passief bewegen verlaagd. Bij pasgeborenen kan de oorzaak centraal liggen (bijv. hersenschade, syndroom van Down, Prader-Willi) of perifeer (bijv. spinale musculaire atrofie, myopathieën). Centrale oorzaken gaan meestal gepaard met relatief behouden kracht, perifere met duidelijke zwakte.</p>",
  "image_url": "",
  "wiki_title": "Hypotonia",
  "match": "hypotonie|spierhypotonie|floppy infant",
  "option_only": true
 },
 "hyperreactiviteit": {
  "title": "Bronchiale hyperreactiviteit",
  "short": "Bronchiale hyperreactiviteit is een overgevoeligheid van de luchtwegen, die al op geringe prikkels vernauwen.",
  "definition": "<p>Bij <strong>bronchiale hyperreactiviteit</strong> reageren de luchtwegen met bronchoconstrictie op prikkels zoals koude lucht, rook, inspanning of mist. Het is een kenmerk van astma, maar kan ook tijdelijk na een virale luchtweginfectie en bij COPD voorkomen. Het kan gemeten worden met een provocatietest (histamine of metacholine).</p>",
  "image_url": "",
  "wiki_title": "Bronchial hyperresponsiveness",
  "match": "hyperreactiviteit|bronchiale hyperreactiviteit|hyperreactieve luchtwegen",
  "option_only": true
 },
 "tolerantie": {
  "title": "Tolerantie",
  "short": "Tolerantie is een afgenomen reactie op een middel bij herhaald gebruik, waardoor een hogere dosis nodig is voor hetzelfde effect.",
  "definition": "<p><strong>Tolerantie</strong> kan farmacokinetisch zijn (snellere afbraak, bijv. enzyminductie) of farmacodynamisch (aanpassing van receptoren, zoals bij opioïden, benzodiazepinen en alcohol). In de immunologie betekent tolerantie het uitblijven van een afweerreactie tegen een antigeen, zoals tegen lichaamseigen weefsel.</p>",
  "image_url": "",
  "wiki_title": "Drug tolerance",
  "match": "tolerantie|gewenning",
  "option_only": true
 },
 "positieve feedback": {
  "title": "Positieve terugkoppeling",
  "short": "Bij positieve terugkoppeling versterkt de respons de oorspronkelijke prikkel, waardoor een proces zichzelf versnelt tot een eindpunt.",
  "definition": "<p><strong>Positieve feedback</strong> is relatief zeldzaam in de fysiologie, omdat het de homeostase niet bewaart. Voorbeelden zijn de LH-piek vóór de ovulatie (door stijgend oestrogeen), de weeën tijdens de bevalling (oxytocine, reflex van Ferguson), de stollingscascade en de opening van natriumkanalen tijdens de actiepotentiaal.</p>",
  "image_url": "",
  "wiki_title": "Positive feedback",
  "match": "positieve feedback|positieve terugkoppeling",
  "option_only": true
 },
 "fysiologische antagonist": {
  "title": "Fysiologische antagonist",
  "short": "Een fysiologische antagonist gaat het effect van een andere stof tegen via een ander receptor- of werkingsmechanisme.",
  "definition": "<p>Een <strong>fysiologische antagonist</strong> bindt niet aan dezelfde receptor, maar veroorzaakt via een andere route een tegengesteld effect. Voorbeeld: adrenaline (β2-receptor) gaat de door histamine (H1-receptor) veroorzaakte bronchoconstrictie en vaatverwijding tegen bij anafylaxie. Een farmacologische antagonist bindt juist aan dezelfde receptor.</p>",
  "image_url": "",
  "wiki_title": "Receptor antagonist",
  "match": "fysiologische antagonist|functionele antagonist",
  "option_only": true
 },
 "irreversibele antagonist": {
  "title": "Irreversibele antagonist",
  "short": "Een irreversibele antagonist bindt (vrijwel) blijvend aan de receptor, waardoor het maximale effect van de agonist afneemt.",
  "definition": "<p>Een <strong>irreversibele antagonist</strong> bindt covalent of zeer sterk aan de receptor. Een hogere dosis agonist kan de blokkade daarom niet opheffen: de dosis-responscurve wordt platter (lager maximaal effect). Het effect duurt tot er nieuwe receptoren zijn aangemaakt. Een voorbeeld is fenoxybenzamine bij alfa-receptoren.</p>",
  "image_url": "",
  "wiki_title": "Receptor antagonist",
  "match": "irreversibele antagonist|niet-competitieve antagonist",
  "option_only": true
 },
 "anorexie": {
  "title": "Anorexie (verminderde eetlust)",
  "short": "Anorexie betekent als symptoom verminderde of afwezige eetlust; het is iets anders dan de eetstoornis anorexia nervosa.",
  "definition": "<p>Als symptoom is <strong>anorexie</strong> een aspecifiek teken van ziekte, bijvoorbeeld bij infecties, ontsteking (cytokines), maligniteiten, leverziekte, nierfalen, depressie en als bijwerking van medicatie. Bij acute buikpathologie, zoals appendicitis, is verminderde eetlust een veelvoorkomend begeleidend symptoom.</p>",
  "image_url": "",
  "wiki_title": "Anorexia (symptom)",
  "match": "anorexie|eetlustverlies|verminderde eetlust",
  "option_only": true
 },
 "anorexia nervosa": {
  "title": "Anorexia nervosa",
  "short": "Anorexia nervosa is een eetstoornis met een te laag lichaamsgewicht door het beperken van voeding, angst om aan te komen en een verstoord lichaamsbeeld.",
  "definition": "<p>Bij <strong>anorexia nervosa</strong> houdt iemand het gewicht bewust laag, met een intense angst om dik te worden. Lichamelijke gevolgen zijn o.a. amenorroe, bradycardie, hypotensie, hypothermie, lanugobeharing, osteoporose en elektrolytstoornissen (vooral bij braken of laxeren). Het heeft de hoogste sterfte van de psychiatrische stoornissen. Bij het hervatten van voeding dreigt het refeedingsyndroom.</p>",
  "image_url": "",
  "wiki_title": "Anorexia nervosa",
  "match": "anorexia nervosa",
  "option_only": true
 },
 "bse": {
  "title": "Bezinkingssnelheid (BSE)",
  "short": "De BSE meet hoe snel rode bloedcellen in een buisje uitzakken; een verhoogde waarde wijst op ontsteking, maar is weinig specifiek.",
  "definition": "<p>De <strong>bezinkingssnelheid</strong> stijgt doordat acutefase-eiwitten (vooral fibrinogeen) en immunoglobulinen de rode bloedcellen in rouleaux laten samenklonteren. Ze stijgt en daalt trager dan het CRP. Sterk verhoogde waarden passen bij o.a. reuscelarteriitis, polymyalgia reumatica, multipel myeloom en ernstige infecties. Leeftijd, geslacht en anemie beïnvloeden de waarde.</p>",
  "image_url": "",
  "wiki_title": "Erythrocyte sedimentation rate",
  "match": "bse|bezinking|bezinkingssnelheid|erytrocytenbezinking",
  "option_only": true
 },
 "aβ-proteïne": {
  "title": "Amyloïd-β",
  "short": "Amyloïd-β is een eiwitfragment uit APP dat zich bij de ziekte van Alzheimer ophoopt in plaques en in de vaatwand.",
  "definition": "<p><strong>Amyloïd-β</strong> ontstaat door splitsing van het amyloïde-precursoreiwit (APP) door β- en γ-secretase. Vooral de langere vorm (Aβ42) klontert samen tot oligomeren en seniele plaques. Afzetting in de wand van hersenvaten heet cerebrale amyloïdangiopathie en geeft lobaire hersenbloedingen. Bij het syndroom van Down (extra kopie van APP op chromosoom 21) ontstaat Alzheimer op jongere leeftijd.</p>",
  "image_url": "",
  "wiki_title": "Amyloid beta",
  "match": "aβ-proteïne|amyloïd-bèta|amyloid-beta|aβ",
  "option_only": true
 },
 "attr-proteïne": {
  "title": "Transthyretine-amyloïd (ATTR)",
  "short": "ATTR-amyloïdose ontstaat door afzetting van transthyretine, erfelijk (mutant) of op hogere leeftijd (wildtype).",
  "definition": "<p><strong>Transthyretine</strong> is een transporteiwit voor thyroxine en retinol, gemaakt in de lever. Bij <strong>ATTR-amyloïdose</strong> valt het tetrameer uiteen en vormen de monomeren amyloïdfibrillen. De wildtypevorm treft vooral het hart van oudere mannen (cardiomyopathie, carpaletunnelsyndroom); erfelijke vormen geven ook polyneuropathie. Er zijn middelen die het tetrameer stabiliseren.</p>",
  "image_url": "",
  "wiki_title": "Transthyretin amyloidosis",
  "match": "attr-proteïne|attr|transthyretine-amyloïdose",
  "option_only": true
 },
 "al-proteïne": {
  "title": "AL-amyloïd (lichte ketens)",
  "short": "AL-amyloïdose ontstaat door afzetting van vrije lichte ketens van immunoglobulinen, gemaakt door een kloon van plasmacellen.",
  "definition": "<p>Bij <strong>AL-amyloïdose</strong> maakt een (vaak kleine) plasmaceldyscrasie, soms een multipel myeloom, overmatig lichte ketens die neerslaan als amyloïd. Organen die vaak worden aangedaan zijn nier (nefrotisch syndroom), hart (restrictieve cardiomyopathie), zenuwen, lever en tong (macroglossie). Diagnostiek o.a. met vrije lichte ketens in serum en een weefselbiopt met Congoroodkleuring.</p>",
  "image_url": "",
  "wiki_title": "AL amyloidosis",
  "match": "al-proteïne|al-amyloïdose|al-amyloïd",
  "option_only": true
 },
 "trombosebeen": {
  "title": "Trombosebeen (diepveneuze trombose)",
  "short": "Een trombosebeen is een stolsel in een diepe vene van het been, met een dik, pijnlijk, warm been.",
  "definition": "<p>Bij een <strong>diepveneuze trombose</strong> ontstaat een stolsel in de diepe venen, meestal in de kuit of bovenbeen. Risicofactoren volgen de trias van Virchow: stase, hypercoagulabiliteit en vaatwandschade (bijv. operatie, immobilisatie, kanker, zwangerschap, oestrogenen). Diagnostiek met een beslisregel (Wells), D-dimeer en compressie-echografie. De belangrijkste complicatie is een longembolie; behandeling met antistolling.</p>",
  "image_url": "",
  "wiki_title": "Deep vein thrombosis",
  "match": "trombosebeen|diepveneuze trombose|dvt|been-trombose",
  "option_only": true
 },
 "slokdarm spasmen": {
  "title": "Slokdarmspasmen",
  "short": "Bij slokdarmspasmen trekt de slokdarm ongecoördineerd en krachtig samen, met slikklachten en retrosternale pijn.",
  "definition": "<p>Bij <strong>distale oesofagusspasmen</strong> zijn de contracties te vroeg of tegelijk in plaats van in een voortschrijdende golf. Klachten: wisselende slikklachten voor vast én vloeibaar voedsel en kramp-achtige pijn achter het borstbeen, die op angina pectoris kan lijken. Diagnose met slokdarmmanometrie; op een slikfoto kan een ‘kurkentrekker’-beeld te zien zijn.</p>",
  "image_url": "",
  "wiki_title": "Diffuse esophageal spasm",
  "match": "slokdarm spasmen|slokdarmspasmen|oesofagusspasme|distale oesofagusspasmen",
  "option_only": true
 },
 "vagus": {
  "title": "N. vagus (X)",
  "short": "De n. vagus (X) is de belangrijkste parasympathische zenuw; hij innerveert hart, longen en het maag-darmkanaal.",
  "definition": "<p>De <strong>n. vagus</strong> verlaat de schedel via het foramen jugulare en loopt in de halsvaatschede omlaag. Hij levert parasympathische vezels aan hart, luchtwegen en darm, motorische vezels aan farynx en larynx en sensibele informatie uit de inwendige organen.</p>",
  "image_url": "",
  "wiki_title": "Vagus nerve",
  "match": "vagus",
  "option_only": true
 },
 "lig. gastrocolicum": {
  "title": "Ligamentum gastrocolicum",
  "short": "Het ligamentum gastrocolicum is het deel van het grote omentum tussen de grote curvatuur van de maag en het colon transversum.",
  "definition": "<p>Het <strong>ligamentum gastrocolicum</strong> maakt deel uit van het omentum majus. Het vormt een deel van de voorwand van de bursa omentalis; door het te openen krijgt de chirurg toegang tot de achterkant van de maag en de pancreas. In het ligament lopen de aa. gastro-omentales.</p>",
  "image_url": "",
  "wiki_title": "Gastrocolic ligament",
  "match": "lig. gastrocolicum|ligamentum gastrocolicum",
  "option_only": true
 },
 "lig. teres hepatis": {
  "title": "Ligamentum teres hepatis",
  "short": "Het ligamentum teres hepatis is het bindweefselrestant van de navelvene, in de onderrand van het ligamentum falciforme.",
  "definition": "<p>In de foetale circulatie voert de v. umbilicalis zuurstofrijk bloed van de placenta naar de lever en via de ductus venosus naar de v. cava inferior. Na de geboorte verbindweefselt de navelvene tot het <strong>ligamentum teres hepatis</strong>. Bij portale hypertensie kan het restlumen weer opengaan, met verwijde venen rond de navel (caput medusae).</p>",
  "image_url": "",
  "wiki_title": "Round ligament of liver",
  "match": "lig. teres hepatis|ligamentum teres hepatis|ronde leverband",
  "option_only": true
 },
 "de ziekte van graves": {
  "title": "Ziekte van Graves",
  "short": "De ziekte van Graves is een auto-immuunziekte waarbij antistoffen de TSH-receptor stimuleren, met hyperthyreoïdie als gevolg.",
  "definition": "<p>Bij de <strong>ziekte van Graves</strong> maakt het lichaam antistoffen tegen de TSH-receptor (TSI/TRAb). De schildklier wordt diffuus vergroot en overactief, met een verlaagd TSH en verhoogd vrij T4. Specifieke kenmerken zijn Graves-orbitopathie (exoftalmie) en pretibiaal myxoedeem; roken verergert de oogziekte. Behandeling met thyreostatica, radioactief jodium of operatie.</p>",
  "image_url": "",
  "wiki_title": "Graves' disease",
  "match": "de ziekte van graves|ziekte van graves|morbus basedow|graves",
  "option_only": true
 },
 "marginalisatie": {
  "title": "Marginalisatie (acculturatie)",
  "short": "Marginalisatie is een van de vier acculturatiestrategieën uit het model van Berry.",
  "definition": "<p>Het <strong>acculturatiemodel van Berry</strong> beschrijft hoe migranten omgaan met twee culturen, op basis van twee vragen: wil iemand de eigen cultuur behouden, en wil iemand contact met de nieuwe cultuur? Dat geeft vier strategieën: integratie, assimilatie, separatie en marginalisatie. Marginalisatie gaat vaak samen met meer stress en psychische problemen.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "marginalisatie",
  "option_only": true
 },
 "separatie": {
  "title": "Separatie (acculturatie)",
  "short": "Separatie is een van de vier acculturatiestrategieën uit het model van Berry.",
  "definition": "<p>Het <strong>acculturatiemodel van Berry</strong> beschrijft hoe migranten omgaan met twee culturen, op basis van twee vragen: wil iemand de eigen cultuur behouden, en wil iemand contact met de nieuwe cultuur? Dat geeft vier strategieën: integratie, assimilatie, separatie en marginalisatie.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "separatie",
  "option_only": true
 },
 "geïndiceerde preventie": {
  "title": "Geïndiceerde preventie",
  "short": "Geïndiceerde preventie richt zich op mensen met beginnende klachten of duidelijke risicofactoren, om een volledige aandoening te voorkomen.",
  "definition": "<p>Preventie wordt naar doelgroep ingedeeld in <strong>universele</strong> (hele bevolking), <strong>selectieve</strong> (risicogroepen), <strong>geïndiceerde</strong> (mensen met vroege signalen of klachten, zonder diagnose) en <strong>zorggerelateerde</strong> preventie (mensen met een ziekte). Een andere indeling is primair, secundair en tertiair.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "geïndiceerde preventie|geindiceerde preventie",
  "option_only": true
 },
 "tertiaire preventie": {
  "title": "Tertiaire preventie",
  "short": "Tertiaire preventie richt zich op mensen die al een ziekte hebben, om complicaties, verergering en functieverlies te beperken.",
  "definition": "<p><strong>Tertiaire preventie</strong> omvat bijvoorbeeld revalidatie, leefstijlbegeleiding en goede controle van chronische ziekten. Primaire preventie voorkomt dat ziekte ontstaat, secundaire preventie spoort ziekte vroeg op.</p>",
  "image_url": "",
  "wiki_title": "Preventive healthcare",
  "match": "tertiaire preventie",
  "option_only": true
 },
 "diverticulitis": {
  "title": "Diverticulitis",
  "short": "Diverticulitis is een ontsteking van een of meer divertikels (uitstulpingen) van de dikke darm.",
  "definition": "<p>Bij <b>diverticulitis</b> raakt een divertikel ontstoken, vermoedelijk door obstructie en microperforatie. Divertikels ontstaan vooral bij ouderen en bij vezelarme voeding. De ernst wordt ingedeeld volgens Hinchey (van lokale ontsteking tot abces en perforatie met peritonitis). Diagnose met echo of CT; ongecompliceerde gevallen worden meestal conservatief behandeld.</p>",
  "image_url": "",
  "wiki_title": "Diverticulitis",
  "match": "diverticulitis",
  "option_only": true
 },
 "acute myeloïde leukemie": {
  "title": "Acute myeloïde leukemie (AML)",
  "short": "AML is een agressieve kanker van het beenmerg waarbij onrijpe myeloïde voorlopercellen (blasten) zich ophopen.",
  "definition": "<p>Bij <strong>AML</strong> verdringen myeloblasten (≥20% in het beenmerg) de normale bloedaanmaak, met anemie, trombocytopenie (bloedingen) en neutropenie (infecties). Het komt vooral bij ouderen voor. Blasten kunnen Auerstaafjes bevatten. Bij acute promyelocytenleukemie (t(15;17)) dreigt diffuse intravasale stolling; die vorm reageert goed op all-trans-retinoïnezuur. Behandeling met intensieve chemotherapie, eventueel stamceltransplantatie.</p>",
  "image_url": "",
  "wiki_title": "Acute myeloid leukemia",
  "match": "acute myeloïde leukemie|aml|acute myeloide leukemie",
  "option_only": true
 },
 "acute lymfatische leukemie": {
  "title": "Acute lymfatische leukemie (ALL)",
  "short": "ALL is een kanker van onrijpe lymfoïde voorlopercellen; de meest voorkomende kinderkanker.",
  "definition": "<p>Bij <strong>ALL</strong> hopen lymfoblasten zich op in beenmerg en bloed. Klachten ontstaan door beenmergfalen (bleekheid, bloedingen, infecties), botpijn en infiltratie van lymfeklieren, lever, milt, CZS of testes. De meeste gevallen zijn van B-celoorsprong. Bij kinderen is de genezingskans met chemotherapie hoog.</p>",
  "image_url": "",
  "wiki_title": "Acute lymphoblastic leukemia",
  "match": "acute lymfatische leukemie|acute lymfoblastaire leukemie",
  "option_only": true
 },
 "chronische myeloïde leukemie": {
  "title": "Chronische myeloïde leukemie (CML)",
  "short": "CML is een myeloproliferatieve ziekte door het Philadelphiachromosoom (BCR-ABL), met een sterke toename van rijpe en rijpende granulocyten.",
  "definition": "<p>Bij <strong>CML</strong> geeft de translocatie t(9;22) het fusiegen BCR-ABL, een permanent actief tyrosinekinase. Kenmerkend zijn een forse leukocytose met alle rijpingsstadia van de myeloïde reeks, basofilie en een vergrote milt. Tyrosinekinaseremmers zoals imatinib hebben de prognose sterk verbeterd. Zonder behandeling kan een blastencrisis ontstaan.</p>",
  "image_url": "",
  "wiki_title": "Chronic myelogenous leukemia",
  "match": "chronische myeloïde leukemie|chronische myeloide leukemie|cml",
  "option_only": true
 },
 "multipel myeloom": {
  "title": "Multipel myeloom (ziekte van Kahler)",
  "short": "Het multipel myeloom is een kwaadaardige woekering van plasmacellen in het beenmerg, die een monoklonaal eiwit (M-proteïne) maken.",
  "definition": "<p>Bij het <strong>multipel myeloom</strong> veroorzaken de plasmacellen botafbraak en beenmergverdringing. Klassieke kenmerken (CRAB): hypercalciëmie, nierfunctiestoornissen (o.a. door lichte ketens), anemie en botlaesies (‘punched-out’ op röntgenfoto's). Ook de BSE is sterk verhoogd en patiënten hebben een verhoogd infectierisico. Diagnostiek met eiwitspectrum, vrije lichte ketens en beenmergonderzoek.</p>",
  "image_url": "",
  "wiki_title": "Multiple myeloma",
  "match": "multipel myeloom|ziekte van kahler|myeloom",
  "option_only": true
 },
 "m-proteïne": {
  "title": "M-proteïne (paraproteïne)",
  "short": "Een M-proteïne is een monoklonaal immunoglobuline of een lichte keten, gemaakt door één kloon van plasmacellen of B-cellen.",
  "definition": "<p>Een <strong>M-proteïne</strong> is te zien als een smalle piek (M-piek) in het eiwitspectrum en wordt getypeerd met immunofixatie. Het komt voor bij MGUS (een voorstadium zonder klachten), het multipel myeloom, AL-amyloïdose en sommige lymfomen. Vrije lichte ketens in de urine heten Bence-Jones-eiwit.</p>",
  "image_url": "",
  "wiki_title": "Paraproteinemia",
  "match": "m-proteïne|m-proteine|paraproteïne|monoklonaal eiwit",
  "option_only": true
 },
 "burkitt lymfoom": {
  "title": "Burkittlymfoom",
  "short": "Het Burkittlymfoom is een zeer snel groeiend B-cellymfoom met een translocatie van het MYC-gen.",
  "definition": "<p>Het <strong>Burkittlymfoom</strong> heeft een t(8;14) waardoor MYC sterk tot expressie komt; vrijwel alle cellen delen. Microscopisch geeft dat een ‘sterrenhemel’-beeld (macrofagen tussen de tumorcellen). De endemische vorm (Afrika, kaak) is sterk geassocieerd met EBV en malaria; de sporadische vorm zit vaak in de buik. Door de snelle celdood kan bij behandeling een tumorlysissyndroom ontstaan.</p>",
  "image_url": "",
  "wiki_title": "Burkitt lymphoma",
  "match": "burkitt lymfoom|burkittlymfoom",
  "option_only": true
 },
 "non-hodgkin lymfoom": {
  "title": "Non-Hodgkinlymfoom",
  "short": "Non-Hodgkinlymfomen zijn een grote groep kwaadaardige ziekten van B-, T- of NK-cellen, van indolent tot zeer agressief.",
  "definition": "<p><strong>Non-Hodgkinlymfomen</strong> worden ingedeeld naar celtype en gedrag. Indolente vormen (bijv. folliculair lymfoom) groeien langzaam maar zijn vaak niet te genezen; agressieve vormen (bijv. diffuus grootcellig B-cellymfoom, Burkitt) groeien snel maar zijn vaak wel curabel. Klachten: pijnloze lymfeklierzwelling, B-symptomen en extranodale lokalisaties.</p>",
  "image_url": "",
  "wiki_title": "Non-Hodgkin lymphoma",
  "match": "non-hodgkin lymfoom|non-hodgkinlymfoom|nhl",
  "option_only": true
 },
 "folliculair non hodgkin lymfoom": {
  "title": "Folliculair lymfoom",
  "short": "Het folliculair lymfoom is een langzaam groeiend B-cellymfoom met een t(14;18)-translocatie en overexpressie van BCL2.",
  "definition": "<p>Het <strong>folliculair lymfoom</strong> komt vooral bij ouderen voor en geeft vaak gegeneraliseerde, pijnloze lymfeklierzwelling die jarenlang kan wisselen. Door BCL2-overexpressie ontsnappen de cellen aan apoptose. Het is meestal niet te genezen, maar heeft een lang beloop; behandeling vaak pas bij klachten. Het kan transformeren naar een agressief lymfoom.</p>",
  "image_url": "",
  "wiki_title": "Follicular lymphoma",
  "match": "folliculair non hodgkin lymfoom|folliculair lymfoom",
  "option_only": true
 },
 "aplastische anemie": {
  "title": "Aplastische anemie",
  "short": "Bij aplastische anemie maakt het beenmerg te weinig bloedcellen van alle reeksen, door verlies van stamcellen.",
  "definition": "<p>Bij <strong>aplastische anemie</strong> is het beenmerg leeg (hypocellulair, vervangen door vet), met pancytopenie: anemie, infecties en bloedingen. De oorzaak is meestal auto-immuun (T-cellen tegen stamcellen), soms medicatie, straling, virussen of een erfelijke ziekte (Fanconi). Behandeling met immunosuppressie of stamceltransplantatie.</p>",
  "image_url": "",
  "wiki_title": "Aplastic anemia",
  "match": "aplastische anemie",
  "option_only": true
 },
 "sferocytose": {
  "title": "Hereditaire sferocytose",
  "short": "Hereditaire sferocytose is een erfelijk defect in het membraanskelet van rode bloedcellen, waardoor ze bolvormig worden en in de milt worden afgebroken.",
  "definition": "<p>Bij <strong>hereditaire sferocytose</strong> (vaak een defect in spectrine of ankyrine) verliezen erytrocyten membraan en worden ze klein en rond, zonder centrale opheldering. Ze zijn minder vervormbaar en worden in de milt afgebroken: hemolytische anemie, icterus, galstenen en splenomegalie. Het MCHC is verhoogd. Splenectomie vermindert de hemolyse.</p>",
  "image_url": "",
  "wiki_title": "Hereditary spherocytosis",
  "match": "sferocytose|hereditaire sferocytose",
  "option_only": true
 },
 "sikkelcelziekte": {
  "title": "Sikkelcelziekte",
  "short": "Sikkelcelziekte is een erfelijke hemoglobinopathie waarbij afwijkend hemoglobine (HbS) bij zuurstoftekort polymeriseert en rode bloedcellen sikkelvormig maakt.",
  "definition": "<p>Bij <strong>sikkelcelziekte</strong> (homozygoot HbS, autosomaal recessief) verstoppen sikkelcellen kleine vaatjes en worden ze snel afgebroken. Gevolgen: pijncrises, hemolytische anemie, acute chest syndrome, herseninfarcten, miltinfarcten (functionele asplenie, infecties met gekapselde bacteriën) en priapisme. Dragerschap beschermt deels tegen malaria. Behandeling o.a. met hydroxycarbamide en transfusies.</p>",
  "image_url": "",
  "wiki_title": "Sickle cell disease",
  "match": "sikkelcelziekte|sikkelcelanemie",
  "option_only": true
 },
 "de ziekte van bernard-soulier": {
  "title": "Syndroom van Bernard-Soulier",
  "short": "Bij het syndroom van Bernard-Soulier ontbreekt de GPIb-receptor op bloedplaatjes, waardoor ze niet aan de von Willebrandfactor hechten.",
  "definition": "<p>Het <strong>Bernard-Souliersyndroom</strong> is een zeldzame, autosomaal recessieve plaatjesfunctiestoornis. Zonder GPIb-IX-V kunnen plaatjes niet hechten aan vWF op het beschadigde subendotheel. Kenmerkend zijn grote plaatjes (macrotrombocyten), een licht verlaagd plaatjesgetal en slijmvliesbloedingen.</p>",
  "image_url": "",
  "wiki_title": "Bernard–Soulier syndrome",
  "match": "de ziekte van bernard-soulier|ziekte van bernard-soulier|bernard-soulier syndroom",
  "option_only": true
 },
 "beenmergonderzoek": {
  "title": "Beenmergonderzoek",
  "short": "Bij beenmergonderzoek wordt beenmerg uit de bekkenkam opgezogen en/of een biopt genomen om de bloedaanmaak te beoordelen.",
  "definition": "<p>Een <strong>beenmergaspiraat</strong> geeft informatie over de celsoorten (cytologie, flowcytometrie, cytogenetica); een <strong>biopt</strong> over de cellulariteit en architectuur (bijv. fibrose, infiltratie). Het wordt gedaan bij onverklaarde cytopenieën, verdenking op leukemie, myeloom of lymfoom en voor stadiëring.</p>",
  "image_url": "",
  "wiki_title": "Bone marrow examination",
  "match": "beenmergonderzoek|beenmergpunctie|beenmergbiopt",
  "option_only": true
 },
 "rituximab": {
  "title": "Rituximab",
  "short": "Rituximab is een monoklonaal antilichaam tegen CD20 op B-cellen; gebruikt bij lymfomen, CLL en auto-immuunziekten.",
  "definition": "<p><strong>Rituximab</strong> bindt aan CD20 op rijpe B-cellen en vernietigt ze via complement en ADCC. Plasmacellen (CD20-negatief) blijven gespaard. Indicaties zijn B-cel-non-Hodgkinlymfomen, CLL, reumatoïde artritis en ANCA-vasculitis. Bijwerkingen: infusiereacties, infecties en reactivatie van hepatitis B.</p>",
  "image_url": "",
  "wiki_title": "Rituximab",
  "match": "rituximab|anti-cd20",
  "option_only": true
 },
 "dexamethason": {
  "title": "Dexamethason",
  "short": "Dexamethason is een sterk en langwerkend glucocorticoïd zonder mineralocorticoïde werking.",
  "definition": "<p><strong>Dexamethason</strong> is ongeveer 25–30 keer zo krachtig als cortisol. Het wordt gebruikt bij hersenoedeem rond tumoren, bacteriële meningitis (vóór of met antibiotica), misselijkheid door chemotherapie, ernstige COVID-19, en ter longrijping bij dreigende vroeggeboorte. Ook gebruikt bij de dexamethasonsuppressietest voor het syndroom van Cushing.</p>",
  "image_url": "",
  "wiki_title": "Dexamethasone",
  "match": "dexamethason|dexamethasone",
  "option_only": true
 },
 "corticosteroïden": {
  "title": "Corticosteroïden",
  "short": "Corticosteroïden zijn van cortisol afgeleide middelen met sterke ontstekingsremmende en immunosuppressieve werking.",
  "definition": "<p>Glucocorticoïden binden aan een intracellulaire receptor en remmen de transcriptie van ontstekingsgenen (cytokines, COX-2) en de vorming van ontstekingsmediatoren. Ze worden lokaal (huid, inhalatie, injectie) en systemisch gebruikt. Bij langdurig systemisch gebruik: osteoporose, hyperglykemie, gewichtstoename, huidatrofie, infecties, spierzwakte, cataract en remming van de eigen bijnier (niet abrupt stoppen).</p>",
  "image_url": "",
  "wiki_title": "Corticosteroid",
  "match": "corticosteroïden|corticosteroiden|glucocorticoïden|corticosteroïd",
  "option_only": true
 },
 "hydroxychloroquine": {
  "title": "Hydroxychloroquine",
  "short": "Hydroxychloroquine is een antimalariamiddel dat als mild immunomodulerend middel wordt gebruikt bij SLE en reumatoïde artritis.",
  "definition": "<p><strong>Hydroxychloroquine</strong> remt o.a. de antigeenpresentatie en Toll-like-receptorsignalering door de pH in lysosomen te verhogen. Het is een basismiddel bij SLE (minder opvlammingen) en wordt gecombineerd bij reumatoïde artritis. Bij langdurig gebruik kan retinopathie ontstaan; daarom vindt oogheelkundige controle plaats.</p>",
  "image_url": "",
  "wiki_title": "Hydroxychloroquine",
  "match": "hydroxychloroquine|plaquenil",
  "option_only": true
 },
 "nitraten": {
  "title": "Nitraten",
  "short": "Nitraten geven NO af en verwijden vooral de venen; ze verminderen de voorbelasting van het hart en verlichten angina pectoris.",
  "definition": "<p><strong>Nitraten</strong> worden omgezet in stikstofmonoxide, dat via cGMP gladde spier ontspant. Door veneuze vaatverwijding dalen de vulling en het zuurstofverbruik van het hart; coronairen worden ook verwijd. Sublinguaal werken ze binnen minuten bij een angina-aanval. Bijwerkingen: hoofdpijn, flushing, hypotensie. Bij continu gebruik ontstaat tolerantie; niet combineren met PDE5-remmers.</p>",
  "image_url": "",
  "wiki_title": "Nitrate (medication)",
  "match": "nitraten|nitroglycerine|isosorbidedinitraat|isosorbidemononitraat",
  "option_only": true
 },
 "aldosteron-remmer": {
  "title": "Aldosteronantagonist",
  "short": "Aldosteronantagonisten (spironolacton, eplerenon) blokkeren de mineralocorticoïdreceptor; ze zijn kaliumsparend en werken bij hartfalen en hyperaldosteronisme.",
  "definition": "<p><strong>Spironolacton</strong> en <strong>eplerenon</strong> remmen het effect van aldosteron in de verzamelbuis, waardoor natrium wordt uitgescheiden en kalium wordt vastgehouden. Ze verlagen de sterfte bij hartfalen met verminderde ejectiefractie en worden gebruikt bij primair hyperaldosteronisme, ascites en therapieresistente hypertensie. Bijwerkingen: hyperkaliëmie en (vooral spironolacton) gynaecomastie.</p>",
  "image_url": "",
  "wiki_title": "Mineralocorticoid receptor antagonist",
  "match": "aldosteron-remmer|aldosteronantagonist|spironolacton|eplerenon",
  "option_only": true
 },
 "hypokaliëmie": {
  "title": "Hypokaliëmie",
  "short": "Hypokaliëmie is een te laag kalium in het bloed, met spierzwakte, obstipatie en hartritmestoornissen als risico.",
  "definition": "<p><strong>Hypokaliëmie</strong> ontstaat door verlies via nier (diuretica, hyperaldosteronisme, braken met metabole alkalose) of darm (diarree, laxantia), door verschuiving de cel in (insuline, β2-agonisten, alkalose) of zelden door te weinig inname. Op het ECG ziet men afgeplatte T-toppen en U-golven; het risico op aritmieën stijgt, vooral bij digoxinegebruik. Hypomagnesiëmie moet ook worden gecorrigeerd.</p>",
  "image_url": "",
  "wiki_title": "Hypokalemia",
  "match": "hypokaliëmie|hypokaliemie",
  "option_only": true
 },
 "hyponatriëmie": {
  "title": "Hyponatriëmie",
  "short": "Hyponatriëmie is een te laag natrium in het bloed, meestal door een relatief overschot aan water.",
  "definition": "<p><strong>Hyponatriëmie</strong> (&lt;135 mmol/L) wordt ingedeeld naar de volumestatus: ondervuld (bijv. braken, diuretica), normovolemisch (bijv. SIADH, hypothyreoïdie, bijnierinsufficiëntie) of overvuld (hartfalen, cirrose, nierfalen). Ernstige of snel ontstane hyponatriëmie geeft hersenoedeem met verwardheid, insulten en coma. Te snelle correctie kan osmotische demyelinisatie veroorzaken.</p>",
  "image_url": "",
  "wiki_title": "Hyponatremia",
  "match": "hyponatriëmie|hyponatriemie",
  "option_only": true
 },
 "tachycardie": {
  "title": "Tachycardie",
  "short": "Tachycardie is een snelle hartslag, bij volwassenen boven 100 slagen per minuut.",
  "definition": "<p>Een <strong>sinustachycardie</strong> is een fysiologische reactie op o.a. inspanning, koorts, pijn, angst, hypovolemie, anemie, hypoxie en hyperthyreoïdie. Pathologische tachycardieën zijn o.a. boezemfibrilleren, AVNRT en ventrikeltachycardie. Het ECG maakt het onderscheid.</p>",
  "image_url": "",
  "wiki_title": "Tachycardia",
  "match": "tachycardie|sinustachycardie",
  "option_only": true
 },
 "sinusbradycardie": {
  "title": "Sinusbradycardie",
  "short": "Sinusbradycardie is een regelmatig hartritme vanuit de sinusknoop met een frequentie onder 50–60 per minuut.",
  "definition": "<p>Een <strong>sinusbradycardie</strong> is normaal bij getrainde sporters en tijdens de slaap. Pathologische oorzaken zijn o.a. medicatie (bètablokkers, verapamil, digoxine), hypothyreoïdie, hypothermie, verhoogde vagustonus, verhoogde intracraniële druk (Cushing-reflex) en sinusknoopdysfunctie.</p>",
  "image_url": "",
  "wiki_title": "Sinus bradycardia",
  "match": "sinusbradycardie",
  "option_only": true
 },
 "atriumseptum defect": {
  "title": "Atriumseptumdefect (ASD)",
  "short": "Een ASD is een aangeboren opening in het septum tussen de boezems, met een links-rechtsshunt.",
  "definition": "<p>Bij een <strong>atriumseptumdefect</strong> (meestal type secundum) stroomt bloed van het linker- naar het rechteratrium, met volumebelasting van het rechterhart en de longcirculatie. Het geeft vaak pas op volwassen leeftijd klachten (vermoeidheid, kortademigheid, boezemfibrilleren). Kenmerkend is een vaste splijting van de tweede harttoon. Sluiting kan meestal via een katheter.</p>",
  "image_url": "",
  "wiki_title": "Atrial septal defect",
  "match": "atriumseptum defect|atriumseptumdefect|asd",
  "option_only": true
 },
 "persisterende ductus arteriosus": {
  "title": "Persisterende ductus arteriosus (PDA)",
  "short": "Bij een PDA sluit de ductus arteriosus na de geboorte niet, waardoor bloed van de aorta naar de a. pulmonalis stroomt.",
  "definition": "<p>De <strong>ductus arteriosus</strong> verbindt foetaal de a. pulmonalis met de aorta. Normaal sluit hij in de eerste dagen na de geboorte (door stijgende zuurstofspanning en dalende prostaglandinen). Bij prematuren en na rubella in de zwangerschap blijft hij vaker open. Er is een continu ‘machinegeruis’; sluiting met indomethacine/ibuprofen of via een katheter.</p>",
  "image_url": "",
  "wiki_title": "Patent ductus arteriosus",
  "match": "persisterende ductus arteriosus|open ductus arteriosus|pda|ductus botalli",
  "option_only": true
 },
 "transpositie van de grote vaten": {
  "title": "Transpositie van de grote arteriën",
  "short": "Bij transpositie van de grote arteriën komt de aorta uit de rechterventrikel en de a. pulmonalis uit de linker, met twee gescheiden circulaties.",
  "definition": "<p>Bij <strong>TGA</strong> is overleven na de geboorte alleen mogelijk via menging van bloed (foramen ovale, ductus arteriosus, VSD). De pasgeborene is direct na de geboorte ernstig cyanotisch. Prostaglandine houdt de ductus open en een ballonatrioseptostomie verbetert de menging, waarna een arteriële switchoperatie volgt.</p>",
  "image_url": "",
  "wiki_title": "Transposition of the great arteries",
  "match": "transpositie van de grote vaten|transpositie van de grote arteriën|tga",
  "option_only": true
 },
 "myocarditis": {
  "title": "Myocarditis",
  "short": "Myocarditis is een ontsteking van de hartspier, meestal door een virus, met pijn op de borst, ritmestoornissen of hartfalen.",
  "definition": "<p><strong>Myocarditis</strong> wordt vaak veroorzaakt door virussen (o.a. enterovirussen, parvovirus B19, SARS-CoV-2), maar ook door auto-immuunziekten, medicatie of vaccins. Klachten variëren van milde pijn op de borst met troponinestijging tot acuut hartfalen en plotse dood. Diagnose met cardiale MRI. Sporten wordt na myocarditis maanden afgeraden.</p>",
  "image_url": "",
  "wiki_title": "Myocarditis",
  "match": "myocarditis|hartspierontsteking",
  "option_only": true
 },
 "atherosclerose": {
  "title": "Atherosclerose",
  "short": "Atherosclerose is een chronisch ontstekingsproces in de vaatwand waarbij plaques met vet, ontstekingscellen en bindweefsel ontstaan.",
  "definition": "<p>Bij <strong>atherosclerose</strong> dringt LDL de intima binnen en wordt het geoxideerd; monocyten worden macrofagen en schuimcellen (fatty streak). Gladde spiercellen migreren en vormen een fibreuze kap over een lipidenkern. Scheuren van een plaque met trombose veroorzaakt een acuut coronair syndroom of herseninfarct. Risicofactoren: roken, hypertensie, LDL, diabetes, leeftijd en familiaire belasting.</p>",
  "image_url": "",
  "wiki_title": "Atherosclerosis",
  "match": "atherosclerose|aderverkalking|arteriosclerose",
  "option_only": true
 },
 "longoedeem": {
  "title": "Longoedeem",
  "short": "Longoedeem is vocht in het interstitium en de alveoli van de longen, met ernstige kortademigheid.",
  "definition": "<p><strong>Cardiaal longoedeem</strong> ontstaat door een verhoogde druk in het linkeratrium en de longcapillairen (bijv. linkszijdig hartfalen, mitralisstenose). Klachten: kortademigheid, orthopneu, crepitaties en soms roze schuimend sputum. Niet-cardiaal longoedeem ontstaat door beschadiging van de alveolocapillaire wand (ARDS). Behandeling o.a. met zuurstof, diuretica en nitraten.</p>",
  "image_url": "",
  "wiki_title": "Pulmonary edema",
  "match": "longoedeem",
  "option_only": true
 },
 "hypothermie": {
  "title": "Hypothermie",
  "short": "Hypothermie is een te lage lichaamstemperatuur, onder 35 °C.",
  "definition": "<p>Bij <strong>hypothermie</strong> vertragen stofwisseling, hartritme en ademhaling. Eerst ontstaan rillen en verwardheid; bij verdere daling verdwijnt het rillen, met bradycardie, ritmestoornissen (Osborn-golven op het ECG) en bewustzijnsdaling. Pasgeborenen, ouderen en mensen onder invloed van alcohol zijn kwetsbaar. Therapeutische hypothermie wordt gebruikt na reanimatie en bij perinatale asfyxie.</p>",
  "image_url": "",
  "wiki_title": "Hypothermia",
  "match": "hypothermie|onderkoeling",
  "option_only": true
 },
 "hypoxie": {
  "title": "Hypoxie",
  "short": "Hypoxie is een tekort aan zuurstof in weefsels; hypoxemie is een te lage zuurstofspanning in het bloed.",
  "definition": "<p>Oorzaken van <strong>hypoxemie</strong> zijn hypoventilatie, ventilatie-perfusiemismatch, shunt, diffusiestoornis en een lage zuurstofspanning in de ingeademde lucht (hoogte). Weefselhypoxie kan ook ontstaan bij anemie, koolmonoxidevergiftiging, verminderde doorbloeding of mitochondriale vergiftiging (cyanide). Cellen schakelen dan over op anaerobe stofwisseling, met lactaatvorming.</p>",
  "image_url": "",
  "wiki_title": "Hypoxia (medicine)",
  "match": "hypoxie|hypoxemie|zuurstoftekort",
  "option_only": true
 },
 "vasodilatatie": {
  "title": "Vasodilatatie",
  "short": "Vasodilatatie is verwijding van bloedvaten door ontspanning van de gladde spier in de vaatwand.",
  "definition": "<p><strong>Vasodilatatie</strong> verlaagt de vaatweerstand en verhoogt de doorbloeding. Mediatoren zijn o.a. NO, prostacycline, histamine, bradykinine, adenosine, CO₂ en melkzuur (lokale autoregulatie). Het speelt een rol bij ontsteking (roodheid en warmte), warmteafgifte en inspanning, en is het werkingsmechanisme van veel antihypertensiva.</p>",
  "image_url": "",
  "wiki_title": "Vasodilation",
  "match": "vasodilatatie|vaatverwijding",
  "option_only": true
 },
 "perifeer oedeem": {
  "title": "Perifeer oedeem",
  "short": "Perifeer oedeem is vochtophoping in de benen en voeten, vaak putjes achterlatend bij indrukken.",
  "definition": "<p><strong>Perifeer oedeem</strong> ontstaat door een verhoogde veneuze druk (rechtszijdig hartfalen, veneuze insufficiëntie, trombose), een laag albumine (nefrotisch syndroom, cirrose, ondervoeding), medicatie (calciumantagonisten, NSAID's) of lymfoedeem. Eenzijdig oedeem past vaker bij een lokale oorzaak, zoals trombose of cellulitis.</p>",
  "image_url": "",
  "wiki_title": "Edema",
  "match": "perifeer oedeem|enkeloedeem",
  "option_only": true
 },
 "microscopische hematurie": {
  "title": "Microscopische hematurie",
  "short": "Bij microscopische hematurie zijn rode bloedcellen alleen met de microscoop of een teststrook in de urine aantoonbaar.",
  "definition": "<p><strong>Hematurie</strong> kan glomerulair zijn (dysmorfe erytrocyten, erytrocytencilinders, vaak met proteïnurie; bijv. IgA-nefropathie) of niet-glomerulair (stenen, infecties, tumoren van nier, ureter of blaas). Bij ouderen en rokers moet bij hematurie een urologische maligniteit worden uitgesloten.</p>",
  "image_url": "",
  "wiki_title": "Hematuria",
  "match": "microscopische hematurie|hematurie",
  "option_only": true
 },
 "leucocyturie": {
  "title": "Leukocyturie",
  "short": "Leukocyturie is de aanwezigheid van witte bloedcellen in de urine, meestal bij een urineweginfectie.",
  "definition": "<p><strong>Leukocyturie</strong> wordt aangetoond met een teststrook (leukocytenesterase) of microscopie. Meestal past het bij een bacteriële urineweginfectie, eventueel samen met positief nitriet. ‘Steriele’ leukocyturie zonder groei in de kweek komt voor bij o.a. chlamydia, urogenitale tuberculose, tubulo-interstitiële nefritis en na antibioticagebruik.</p>",
  "image_url": "",
  "wiki_title": "Pyuria",
  "match": "leucocyturie|leukocyturie|pyurie",
  "option_only": true
 },
 "neurogene blaas": {
  "title": "Neurogene blaas",
  "short": "Bij een neurogene blaas is de blaasfunctie verstoord door een aandoening van het zenuwstelsel.",
  "definition": "<p>Bij een <strong>neurogene blaas</strong> ontstaat afhankelijk van de plaats van de laesie een overactieve blaas (letsel boven het sacrale mictiecentrum, bijv. MS of dwarslaesie) of juist een slappe blaas met retentie en overloopincontinentie (letsel van het sacrale merg, cauda equina of perifere zenuwen, bijv. diabetes). Complicaties zijn urineweginfecties en nierschade.</p>",
  "image_url": "",
  "wiki_title": "Neurogenic bladder dysfunction",
  "match": "neurogene blaas|neurogene blaasdisfunctie",
  "option_only": true
 },
 "blaascarcinoom": {
  "title": "Blaascarcinoom",
  "short": "Het blaascarcinoom is meestal een urotheelcelcarcinoom; roken is de belangrijkste risicofactor.",
  "definition": "<p>Het <strong>blaascarcinoom</strong> presenteert zich vaak met pijnloze macroscopische hematurie. Risicofactoren zijn roken, beroepsmatige blootstelling aan aromatische aminen (verf, rubber) en (in Afrika) schistosomiasis (plaveiselcelcarcinoom). Niet-spierinvasieve tumoren worden transurethraal verwijderd en komen vaak terug; spierinvasieve tumoren vereisen cystectomie of radiotherapie.</p>",
  "image_url": "",
  "wiki_title": "Bladder cancer",
  "match": "blaascarcinoom|blaaskanker|urotheelcelcarcinoom",
  "option_only": true
 },
 "niercarcinoom": {
  "title": "Niercelcarcinoom",
  "short": "Het niercelcarcinoom is een kwaadaardige tumor van het nierepitheel, meestal van het heldercellige type.",
  "definition": "<p>Het <strong>niercelcarcinoom</strong> wordt vaak toevallig ontdekt op beeldvorming. De klassieke trias (hematurie, flankpijn, palpabele massa) is zeldzaam. Paraneoplastische verschijnselen zijn polycytemie (EPO), hypercalciëmie en koorts. Risicofactoren: roken, obesitas, hypertensie en het von Hippel-Lindau-syndroom. Het groeit soms in de nierader en v. cava in.</p>",
  "image_url": "",
  "wiki_title": "Renal cell carcinoma",
  "match": "niercarcinoom|niercelcarcinoom|nierkanker",
  "option_only": true
 },
 "uretercarcinoom": {
  "title": "Urotheelcelcarcinoom van de hoge urinewegen",
  "short": "Een uretercarcinoom is een urotheelcelcarcinoom van de ureter of het nierbekken.",
  "definition": "<p>Tumoren van de <strong>hoge urinewegen</strong> zijn veel zeldzamer dan blaastumoren, maar hebben dezelfde risicofactoren (roken, aromatische aminen) en zijn ook geassocieerd met het Lynch-syndroom. Ze geven hematurie en soms flankpijn door obstructie. Na een tumor in de hoge urinewegen ontstaan vaak later ook blaastumoren.</p>",
  "image_url": "",
  "wiki_title": "Transitional cell carcinoma",
  "match": "uretercarcinoom|carcinoom van de ureter",
  "option_only": true
 },
 "testiscarcinoom": {
  "title": "Testiscarcinoom",
  "short": "Testiscarcinoom is een kwaadaardige kiemceltumor van de zaadbal, vooral bij jonge mannen.",
  "definition": "<p><strong>Testistumoren</strong> zijn meestal kiemceltumoren: seminomen en non-seminomen. Ze presenteren zich als een pijnloze, harde zwelling van de testis. Een niet-ingedaalde testis is een belangrijke risicofactor. Tumormarkers zijn AFP, β-hCG en LDH. De behandeling start met een orchidectomie via de lies; de genezingskans is zeer hoog, ook bij uitzaaiingen.</p>",
  "image_url": "",
  "wiki_title": "Testicular cancer",
  "match": "testiscarcinoom|zaadbalkanker|testistumor",
  "option_only": true
 },
 "pancreascarcinoom": {
  "title": "Pancreascarcinoom",
  "short": "Het pancreascarcinoom is een agressieve tumor, meestal een ductaal adenocarcinoom, met een slechte prognose.",
  "definition": "<p>Het <strong>pancreascarcinoom</strong> zit vaak in de pancreaskop, waar het de galweg afsluit: pijnloze icterus, een palpabele galblaas (teken van Courvoisier), jeuk, ontkleurde ontlasting en donkere urine. Tumoren in corpus en staart worden later ontdekt (rugpijn, gewichtsverlies). Risicofactoren zijn roken, chronische pancreatitis en erfelijke aanleg. Slechts een minderheid is operabel (Whipple).</p>",
  "image_url": "",
  "wiki_title": "Pancreatic cancer",
  "match": "pancreascarcinoom|alvleesklierkanker|pancreaskopcarcinoom",
  "option_only": true
 },
 "cervixcarcinoom": {
  "title": "Cervixcarcinoom",
  "short": "Het cervixcarcinoom is kanker van de baarmoederhals, vrijwel altijd veroorzaakt door een persisterende infectie met hoog-risico-HPV.",
  "definition": "<p>Het <strong>cervixcarcinoom</strong> ontstaat via voorstadia (CIN) in de transformatiezone, meestal als plaveiselcelcarcinoom. Klachten: contactbloedingen (na gemeenschap), intermenstrueel bloedverlies en afscheiding. Preventie via HPV-vaccinatie en het bevolkingsonderzoek (hrHPV-test). Behandeling afhankelijk van stadium: operatie of (chemo)radiatie.</p>",
  "image_url": "",
  "wiki_title": "Cervical cancer",
  "match": "cervixcarcinoom|baarmoederhalskanker",
  "option_only": true
 },
 "endometriumcarcinoom": {
  "title": "Endometriumcarcinoom",
  "short": "Het endometriumcarcinoom is kanker van het baarmoederslijmvlies, typisch met bloedverlies na de menopauze.",
  "definition": "<p>Het <strong>endometriumcarcinoom</strong> (type 1) hangt samen met langdurige blootstelling aan oestrogenen zonder progesteron: obesitas, weinig zwangerschappen, PCOS, tamoxifen en het Lynch-syndroom. Het presenteert zich meestal vroeg met postmenopauzaal bloedverlies en heeft dan een goede prognose. Diagnostiek met een transvaginale echo en een endometriumbiopt.</p>",
  "image_url": "",
  "wiki_title": "Endometrial cancer",
  "match": "endometriumcarcinoom|baarmoederkanker|baarmoederslijmvlieskanker",
  "option_only": true
 },
 "cannabis": {
  "title": "Cannabis",
  "short": "Cannabis bevat THC, dat via cannabinoïde receptoren ontspanning en veranderde waarneming geeft; zwaar gebruik vergroot het risico op psychose.",
  "definition": "<p><strong>Cannabis</strong> werkt via CB1-receptoren in het brein. Acuut geeft het euforie, ontspanning, verhoogde eetlust, tachycardie, rode ogen en verminderde concentratie en reactiesnelheid. Langdurig en vooral jong, zwaar gebruik van THC-rijke cannabis verhoogt het risico op psychose en schizofrenie. Het cannabinoïde-hyperemesissyndroom geeft heftig braken dat verbetert met warm douchen.</p>",
  "image_url": "",
  "wiki_title": "Cannabis (drug)",
  "match": "cannabis|hasj|wiet|thc",
  "option_only": true
 },
 "myopathie": {
  "title": "Myopathie",
  "short": "Een myopathie is een ziekte van de spier zelf, meestal met proximale spierzwakte.",
  "definition": "<p><strong>Myopathieën</strong> kunnen erfelijk zijn (bijv. spierdystrofieën, mitochondriale myopathieën) of verworven: inflammatoir (polymyositis, dermatomyositis), endocrien (hypothyreoïdie, Cushing), toxisch (statines, alcohol, corticosteroïden) of metabool. Het CK kan verhoogd zijn; een EMG en spierbiopt helpen bij de diagnose.</p>",
  "image_url": "",
  "wiki_title": "Myopathy",
  "match": "myopathie|spierziekte",
  "option_only": true
 },
 "myastheen syndroom": {
  "title": "Myasthenie (gravis) en myastheen syndroom",
  "short": "Myasthene syndromen zijn stoornissen in de prikkeloverdracht van zenuw naar spier, met zwakte die toeneemt bij inspanning.",
  "definition": "<p>Bij <strong>myasthenia gravis</strong> blokkeren antistoffen de acetylcholinereceptor; er is wisselende, inspanningsafhankelijke zwakte van oogspieren (ptosis, dubbelzien), bulbaire spieren en ledematen. Bij het <strong>Lambert-Eaton myasthene syndroom</strong> zijn antistoffen gericht tegen presynaptische calciumkanalen, vaak bij een kleincellig longcarcinoom; hier verbetert de kracht juist kort bij herhaald aanspannen en zijn de reflexen verlaagd.</p>",
  "image_url": "",
  "wiki_title": "Myasthenia gravis",
  "match": "myastheen syndroom|lambert-eaton|lambert-eaton myastheen syndroom|myasthenia gravis|myasthenie",
  "option_only": true
 },
 "spastische paraparese": {
  "title": "Spastische paraparese",
  "short": "Spastische paraparese is zwakte met verhoogde spierspanning van beide benen, door schade aan de piramidebanen.",
  "definition": "<p>Bij een <strong>spastische paraparese</strong> zijn de benen zwak en stijf, met hyperreflexie en Babinski-reflexen. Oorzaken zijn o.a. een myelopathie (compressie, MS, B12-tekort), hereditaire spastische paraparese en spastische cerebrale parese (vooral bij prematuren met periventriculaire leukomalacie). Bij een acute myelopathie is snelle beeldvorming nodig.</p>",
  "image_url": "",
  "wiki_title": "Spastic paraplegia",
  "match": "spastische paraparese",
  "option_only": true
 },
 "globale ontwikkelingsachterstand": {
  "title": "Globale ontwikkelingsachterstand",
  "short": "Bij een globale ontwikkelingsachterstand loopt een jong kind op twee of meer ontwikkelingsdomeinen duidelijk achter.",
  "definition": "<p>Van een <strong>globale ontwikkelingsachterstand</strong> spreekt men bij kinderen onder de vijf jaar met een achterstand in bijvoorbeeld motoriek, taal en spraak, cognitie en sociale ontwikkeling. Oorzaken zijn o.a. genetische afwijkingen (bijv. fragiele X, microdeleties), perinatale problemen, infecties, metabole ziekten en ernstige verwaarlozing. Diagnostiek o.a. met genetisch onderzoek.</p>",
  "image_url": "",
  "wiki_title": "Global developmental delay",
  "match": "globale ontwikkelingsachterstand|ontwikkelingsachterstand",
  "option_only": true
 },
 "ticstoornis": {
  "title": "Ticstoornis",
  "short": "Een ticstoornis kenmerkt zich door plotselinge, snelle, herhaalde bewegingen of klanken die moeilijk te onderdrukken zijn.",
  "definition": "<p><strong>Tics</strong> kunnen motorisch (knipperen, grimassen) of vocaal (keelschrapen, woorden) zijn en worden vaak voorafgegaan door een drang. Ze beginnen meestal in de kindertijd en nemen vaak af na de puberteit. Bij het <em>syndroom van Gilles de la Tourette</em> zijn er meerdere motorische en minstens één vocale tic, langer dan een jaar; vaak met ADHD of OCS.</p>",
  "image_url": "",
  "wiki_title": "Tic disorder",
  "match": "ticstoornis|tics|syndroom van gilles de la tourette|tourette",
  "option_only": true
 },
 "stereotypie": {
  "title": "Stereotypie",
  "short": "Een stereotypie is een herhaalde, doelloze beweging of handeling, zoals wiegen of handfladderen.",
  "definition": "<p><strong>Stereotypieën</strong> zijn ritmisch en patroonmatig en worden niet als ongewenst ervaren, anders dan tics. Ze komen voor bij autismespectrumstoornis, verstandelijke beperking, ernstige sensorische deprivatie, katatonie en als bijwerking (bijv. van stimulantia).</p>",
  "image_url": "",
  "wiki_title": "Stereotypy",
  "match": "stereotypie|stereotypieën|stereotiep gedrag",
  "option_only": true
 },
 "norm-overschrijdende gedragsstoornis": {
  "title": "Normoverschrijdende-gedragsstoornis",
  "short": "De normoverschrijdende-gedragsstoornis is een patroon van gedrag bij kinderen en jongeren waarbij rechten van anderen en sociale regels worden geschonden.",
  "definition": "<p>Bij een <strong>normoverschrijdende-gedragsstoornis</strong> zijn er o.a. agressie tegen mensen of dieren, vernieling, liegen of stelen en ernstige overtredingen van regels (spijbelen, weglopen). Risicofactoren zijn erfelijke aanleg, ADHD, onveilige opvoeding en armoede. Het kan overgaan in een antisociale persoonlijkheidsstoornis op volwassen leeftijd.</p>",
  "image_url": "",
  "wiki_title": "Conduct disorder",
  "match": "norm-overschrijdende gedragsstoornis|normoverschrijdende gedragsstoornis|gedragsstoornis|conduct disorder",
  "option_only": true
 },
 "depressie met psychotische kenmerken": {
  "title": "Psychotische depressie",
  "short": "Bij een depressie met psychotische kenmerken gaat een ernstige depressie samen met wanen en/of hallucinaties, vaak met een somber thema.",
  "definition": "<p>De wanen bij een <strong>psychotische depressie</strong> zijn meestal stemmingscongruent: schuld, armoede, nihilisme of ernstige ziekte. Het suïciderisico is hoog. Behandeling bestaat uit een combinatie van een antidepressivum en een antipsychoticum, of elektroconvulsietherapie, die bij deze vorm zeer effectief is.</p>",
  "image_url": "",
  "wiki_title": "Psychotic depression",
  "match": "depressie met psychotische kenmerken|psychotische depressie",
  "option_only": true
 },
 "persoonlijkheidsverandering door somatische aandoening": {
  "title": "Persoonlijkheidsverandering door een somatische aandoening",
  "short": "Een persoonlijkheidsverandering door een somatische aandoening is een blijvende verandering in karakter door hersenschade of -ziekte.",
  "definition": "<p>Bij deze stoornis verandert de persoonlijkheid duidelijk ten opzichte van vroeger, bijvoorbeeld met ontremming, apathie, prikkelbaarheid of achterdocht, als direct gevolg van een lichamelijke aandoening. Voorbeelden zijn schade aan de frontaalkwab door trauma, tumor of frontotemporale dementie, en temporaalkwabepilepsie.</p>",
  "image_url": "",
  "wiki_title": "Personality change",
  "match": "persoonlijkheidsverandering door somatische aandoening|organische persoonlijkheidsverandering",
  "option_only": true
 },
 "th2 cellen": {
  "title": "Th2-cellen",
  "short": "Th2-cellen zijn CD4-T-helpercellen die via IL-4, IL-5 en IL-13 de afweer tegen parasieten en allergische reacties sturen.",
  "definition": "<p><strong>Th2-cellen</strong> ontstaan onder invloed van IL-4. Ze stimuleren B-cellen tot de productie van IgE (IL-4, IL-13), activeren eosinofielen (IL-5) en bevorderen slijmproductie. Ze spelen een centrale rol bij allergie, allergisch astma en atopisch eczeem; biologicals tegen IL-4/IL-13 en IL-5 remmen deze route.</p>",
  "image_url": "",
  "wiki_title": "T helper cell",
  "match": "th2 cellen|th2-cellen|th2",
  "option_only": true
 },
 "th17 cellen": {
  "title": "Th17-cellen",
  "short": "Th17-cellen zijn CD4-T-helpercellen die via IL-17 neutrofielen aantrekken; belangrijk tegen bacteriën en schimmels en bij auto-immuunziekten.",
  "definition": "<p><strong>Th17-cellen</strong> ontstaan onder invloed van TGF-β en IL-6 en worden in stand gehouden door IL-23. Ze maken IL-17 en IL-22, die epitheel en neutrofielen activeren. Ze beschermen tegen extracellulaire bacteriën en <em>Candida</em>, en spelen een rol bij psoriasis, spondyloartritis en IBD; middelen tegen IL-17 en IL-23 worden bij deze ziekten gebruikt.</p>",
  "image_url": "",
  "wiki_title": "T helper 17 cell",
  "match": "th17 cellen|th17-cellen|th17",
  "option_only": true
 },
 "iga": {
  "title": "IgA",
  "short": "IgA is de belangrijkste antistof op slijmvliezen en in secreten zoals speeksel, tranen en moedermelk.",
  "definition": "<p><strong>IgA</strong> komt in het bloed als monomeer en op slijmvliezen als dimeer (secretoir IgA), verbonden door een J-keten en beschermd door een secretoire component. Het neutraliseert micro-organismen en toxines zonder ontsteking. Een selectieve IgA-deficiëntie is de meest voorkomende primaire immuundeficiëntie en geeft vaak weinig klachten; bij coeliakie-serologie kan het fout-negatieve uitslagen geven.</p>",
  "image_url": "",
  "wiki_title": "Immunoglobulin A",
  "match": "iga|immunoglobuline a",
  "option_only": true
 },
 "alkalische fosfatase": {
  "title": "Alkalische fosfatase",
  "short": "Alkalische fosfatase is een enzym uit lever (galwegen) en bot; een verhoogde waarde wijst op cholestase of verhoogde botaanmaak.",
  "definition": "<p>Verhoogd <strong>alkalisch fosfatase</strong> uit de lever past bij cholestase (galwegobstructie, PBC, PSC, infiltratie), meestal samen met een verhoogd γGT. Uit het bot komt het bij verhoogde osteoblastactiviteit: groei bij kinderen, fractuurgenezing, ziekte van Paget, botmetastasen en osteomalacie. In de zwangerschap maakt de placenta het ook.</p>",
  "image_url": "",
  "wiki_title": "Alkaline phosphatase",
  "match": "alkalische fosfatase|alkalisch fosfatase|alp",
  "option_only": true
 },
 "hyperbilirubinemie": {
  "title": "Hyperbilirubinemie",
  "short": "Hyperbilirubinemie is een verhoogd bilirubine in het bloed, zichtbaar als icterus.",
  "definition": "<p>Een <strong>ongeconjugeerde</strong> hyperbilirubinemie ontstaat bij versterkte afbraak van rode bloedcellen (hemolyse), verminderde conjugatie (syndroom van Gilbert, neonatale icterus) of verminderde opname. Een <strong>geconjugeerde</strong> hyperbilirubinemie past bij leverziekte of galwegobstructie, met donkere urine en ontkleurde ontlasting.</p>",
  "image_url": "",
  "wiki_title": "Hyperbilirubinemia",
  "match": "hyperbilirubinemie|hyperbilirubinaemie",
  "option_only": true
 },
 "galgangatresie": {
  "title": "Galgangatresie",
  "short": "Bij galgangatresie zijn de galwegen bij een pasgeborene ontstoken en afgesloten, met aanhoudende geelzucht en ontkleurde ontlasting.",
  "definition": "<p>Bij <strong>biliaire atresie</strong> worden de extrahepatische galwegen in de eerste levensweken door een fibroserend proces afgesloten. De baby is na de eerste twee weken nog steeds geel (met een verhoogd geconjugeerd bilirubine), heeft ontkleurde ontlasting en donkere urine. Snelle diagnose is cruciaal: een Kasai-operatie werkt het beste vóór 60 dagen; anders volgt cirrose en levertransplantatie.</p>",
  "image_url": "",
  "wiki_title": "Biliary atresia",
  "match": "galgangatresie|biliaire atresie",
  "option_only": true
 },
 "invaginatie": {
  "title": "Invaginatie",
  "short": "Bij invaginatie schuift een stuk darm in het aansluitende stuk, als een telescoop; vooral bij jonge kinderen.",
  "definition": "<p><strong>Invaginatie</strong> komt vooral voor tussen 6 maanden en 2 jaar, meestal ileocolisch, soms met een vergrote lymfeklier of divertikel van Meckel als ‘leidpunt’. Typisch zijn aanvallen van huilen en buikpijn met optrekken van de benen, braken, een worstvormige zwelling en later ‘bessengeleiontlasting’. Behandeling met luchtdrukreductie of chirurgie.</p>",
  "image_url": "",
  "wiki_title": "Intussusception (medical disorder)",
  "match": "invaginatie|intussusceptie",
  "option_only": true
 },
 "pancreatitis": {
  "title": "Pancreatitis",
  "short": "Pancreatitis is een ontsteking van de pancreas, acuut meestal door galstenen of alcohol.",
  "definition": "<p><strong>Acute pancreatitis</strong> geeft hevige, gordelvormige bovenbuikpijn uitstralend naar de rug, met misselijkheid en braken; het lipase is verhoogd. Andere oorzaken zijn hypertriglyceridemie, hypercalciëmie, medicatie en ERCP. Ernstige vormen geven necrose, SIRS en orgaanfalen. Chronische pancreatitis geeft pijn, exocriene en endocriene insufficiëntie.</p>",
  "image_url": "",
  "wiki_title": "Pancreatitis",
  "match": "pancreatitis|alvleesklierontsteking|acute pancreatitis",
  "option_only": true
 },
 "melaena": {
  "title": "Melaena",
  "short": "Melaena is zwarte, teerachtige, stinkende ontlasting door een bloeding hoog in het maag-darmkanaal.",
  "definition": "<p><strong>Melaena</strong> ontstaat als bloed uit slokdarm, maag of duodenum door maagzuur en bacteriën wordt omgezet. Belangrijke oorzaken zijn een ulcus pepticum en varices. Het ureum kan verhoogd zijn door eiwitresorptie. IJzerpreparaten en bismut kleuren de ontlasting ook zwart, maar niet teerachtig.</p>",
  "image_url": "",
  "wiki_title": "Melena",
  "match": "melaena|melena|teerontlasting",
  "option_only": true
 },
 "haematemesis": {
  "title": "Haematemesis",
  "short": "Haematemesis is het braken van bloed, vers rood of als ‘koffiedik’, door een bloeding in slokdarm, maag of duodenum.",
  "definition": "<p>Oorzaken van <strong>haematemesis</strong> zijn o.a. een ulcus pepticum, oesofagusvarices (bij portale hypertensie), een Mallory-Weiss-scheur na heftig braken, oesofagitis en tumoren. Koffiedikbraaksel wijst op bloed dat al met maagzuur in contact is geweest. Beoordeling van de circulatie en een spoedgastroscopie zijn nodig.</p>",
  "image_url": "",
  "wiki_title": "Hematemesis",
  "match": "haematemesis|hematemesis|bloedbraken",
  "option_only": true
 },
 "zoutzuur": {
  "title": "Zoutzuur (maagzuur)",
  "short": "Zoutzuur wordt door de pariëtale cellen van de maag uitgescheiden; het maakt de maaginhoud zuur, doodt micro-organismen en activeert pepsine.",
  "definition": "<p>De pariëtale cellen pompen H⁺ via de H⁺/K⁺-ATPase het maaglumen in; chloride volgt. Stimulatoren zijn gastrine, histamine (H2) en acetylcholine (vagus); somatostatine remt. Het lage pH (1–2) helpt bij eiwitvertering en ijzeropname en beschermt tegen infecties. Protonpompremmers en H2-antagonisten verminderen de productie.</p>",
  "image_url": "",
  "wiki_title": "Gastric acid",
  "match": "zoutzuur|hcl|maagzuur",
  "option_only": true
 },
 "vagotomie": {
  "title": "Vagotomie",
  "short": "Bij een vagotomie worden (takken van) de n. vagus doorgesneden om de maagzuursecretie te verminderen.",
  "definition": "<p>Een <strong>vagotomie</strong> werd vroeger veel gedaan bij ulcuslijden. Omdat de vagus ook de maagontlediging stimuleert, werd een trunculaire vagotomie vaak gecombineerd met een pyloroplastiek. Sinds protonpompremmers en H. pylori-eradicatie wordt het nauwelijks meer toegepast.</p>",
  "image_url": "",
  "wiki_title": "Vagotomy",
  "match": "vagotomie",
  "option_only": true
 },
 "bisacodyl": {
  "title": "Bisacodyl",
  "short": "Bisacodyl is een prikkelend (contactlaxans) laxeermiddel dat de darmperistaltiek stimuleert.",
  "definition": "<p><strong>Bisacodyl</strong> stimuleert de zenuwen in de darmwand en vermindert de wateropname in het colon. Het werkt na 6–12 uur (oraal) of na 15–60 minuten (zetpil). Het wordt gebruikt bij obstipatie, ook bij opioïdgebruik, en voor darmvoorbereiding. Bijwerkingen zijn buikkrampen en bij langdurig hoog gebruik elektrolytverlies.</p>",
  "image_url": "",
  "wiki_title": "Bisacodyl",
  "match": "bisacodyl|dulcolax",
  "option_only": true
 },
 "sigmoïdresectie": {
  "title": "Sigmoïdresectie",
  "short": "Bij een sigmoïdresectie wordt het colon sigmoideum operatief verwijderd, bijv. bij een tumor of gecompliceerde diverticulitis.",
  "definition": "<p>Na een <strong>sigmoïdresectie</strong> worden de darmuiteinden meestal weer met elkaar verbonden (anastomose). Bij een perforatie met peritonitis wordt soms een tijdelijk stoma aangelegd (Hartmann-procedure). Een gevreesde complicatie is naadlekkage, met abcessen en sepsis.</p>",
  "image_url": "",
  "wiki_title": "Sigmoidectomy",
  "match": "sigmoïdresectie|sigmoidresectie",
  "option_only": true
 },
 "echo": {
  "title": "Echografie",
  "short": "Echografie maakt met hoogfrequente geluidsgolven beelden van weke delen en organen, zonder straling.",
  "definition": "<p>Bij <strong>echografie</strong> zendt een transducer geluidsgolven uit en vangt de echo's op. Vocht is zwart, weefsel grijs; bot en lucht houden het geluid tegen. Het is goedkoop, snel en direct beschikbaar, en geschikt voor o.a. galblaas, nieren, schildklier, zwangerschap, hart (echocardiografie), vaten (duplex) en gewrichten. De kwaliteit hangt af van de onderzoeker en de patiënt.</p>",
  "image_url": "",
  "wiki_title": "Medical ultrasound",
  "match": "echo|echografie|echoscopie|ultrageluid",
  "option_only": true
 },
 "ct scan": {
  "title": "CT-scan",
  "short": "Een CT-scan maakt met röntgenstraling dwarsdoorsneden van het lichaam.",
  "definition": "<p>Bij <strong>computertomografie</strong> draait een röntgenbuis rond de patiënt en wordt een driedimensionaal beeld berekend. CT is snel en zeer geschikt voor trauma, bloedingen in het hoofd, longen, buik en bot; met contrast ook voor vaten. Nadelen zijn de stralingsbelasting en het contrastmiddel (nierfunctie, allergie).</p>",
  "image_url": "",
  "wiki_title": "CT scan",
  "match": "ct scan|ct-scan|computertomografie",
  "option_only": true
 },
 "pet/ct": {
  "title": "PET-CT",
  "short": "Een PET-CT combineert een metabole PET-scan (meestal met radioactief glucose, FDG) met een CT voor de anatomie.",
  "definition": "<p>Bij <strong>FDG-PET</strong> nemen cellen met een hoge glucosestofwisseling, zoals veel tumoren en ontstekingshaarden, meer tracer op. Gecombineerd met CT kan de plaats precies worden bepaald. Het wordt gebruikt voor stadiëring en respons van o.a. lymfomen en longkanker, en bij onverklaarde koorts of vasculitis.</p>",
  "image_url": "",
  "wiki_title": "PET-CT",
  "match": "pet/ct|pet-ct|pet-scan",
  "option_only": true
 },
 "skeletfoto's": {
  "title": "Skeletstatus (skeletfoto's)",
  "short": "Bij een skeletstatus worden röntgenfoto's van het hele skelet gemaakt, bijv. bij verdenking op multipel myeloom of kindermishandeling.",
  "definition": "<p>Een <strong>skeletstatus</strong> wordt o.a. gebruikt om lytische botlaesies op te sporen bij multipel myeloom (tegenwoordig vaak vervangen door low-dose CT of MRI), en bij jonge kinderen bij verdenking op mishandeling, om oude en nieuwe fracturen in beeld te brengen. Ook bij skeletdysplasieën wordt het gebruikt.</p>",
  "image_url": "",
  "wiki_title": "Skeletal survey",
  "match": "skeletfoto's|skeletstatus|skeletonderzoek",
  "option_only": true
 },
 "shared decision making model": {
  "title": "Gedeelde besluitvorming (shared decision making)",
  "short": "Bij gedeelde besluitvorming kiezen arts en patiënt samen een behandeling, op basis van medische informatie en de waarden van de patiënt.",
  "definition": "<p>Bij <strong>shared decision making</strong> doorlopen arts en patiënt stappen: bespreken dat er een keuze is, de opties met voor- en nadelen uitleggen, de voorkeuren en waarden van de patiënt verkennen en samen tot een besluit komen. Het staat tussen het paternalistische model (arts beslist) en het informatieve model (patiënt beslist alleen). Keuzehulpen kunnen het ondersteunen.</p>",
  "image_url": "",
  "wiki_title": "Shared decision-making in medicine",
  "match": "shared decision making model|shared decision making|gedeelde besluitvorming|overlegmodel",
  "option_only": true
 },
 "informatief model": {
  "title": "Informatief model",
  "short": "In het informatieve model geeft de arts feitelijke informatie en kiest de patiënt zelf, zonder dat de arts een advies geeft.",
  "definition": "<p>In het <strong>informatieve model</strong> (Emanuel en Emanuel) is de arts een technisch deskundige die alle relevante informatie geeft, terwijl de patiënt volledig autonoom beslist. Andere modellen zijn het paternalistische, het interpretatieve en het deliberatieve model; gedeelde besluitvorming ligt tussen deze uitersten.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "informatief model",
  "option_only": true
 },
 "wet langdurige zorg": {
  "title": "Wet langdurige zorg (Wlz)",
  "short": "De Wet langdurige zorg regelt zorg voor mensen die blijvend 24 uur per dag zorg in de nabijheid of toezicht nodig hebben.",
  "definition": "<p>De <strong>Wlz</strong> is bedoeld voor bijvoorbeeld ouderen met vergevorderde dementie en mensen met een ernstige verstandelijke, lichamelijke of zintuiglijke beperking. Het CIZ stelt de indicatie vast; de zorg kan in een instelling of thuis worden geleverd. De uitvoering ligt bij zorgkantoren.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "wet langdurige zorg|wlz",
  "option_only": true
 },
 "borrelia burgdorferi": {
  "title": "Borrelia burgdorferi",
  "short": "Borrelia burgdorferi is de spirocheet die door teken wordt overgebracht en de ziekte van Lyme veroorzaakt.",
  "definition": "<p><strong><em>Borrelia burgdorferi</em></strong> wordt overgebracht door de schapenteek (<em>Ixodes ricinus</em>), meestal pas na een aanhechting van meer dan 24 uur. Vroege lokale infectie geeft erythema migrans; verspreiding kan leiden tot neuroborreliose, lyme-artritis, carditis (AV-blok) en huidafwijkingen (acrodermatitis). Behandeling met doxycycline of ceftriaxon.</p>",
  "image_url": "",
  "wiki_title": "Borrelia burgdorferi",
  "match": "borrelia burgdorferi|borrelia",
  "option_only": true
 },
 "herpes encefalitis": {
  "title": "Herpes-simplexencefalitis",
  "short": "Herpes-simplexencefalitis is een ernstige virale ontsteking van de hersenen, typisch in de temporaalkwabben.",
  "definition": "<p>Bij <strong>HSV-encefalitis</strong> (meestal HSV-1) ontstaan koorts, hoofdpijn, verwardheid, gedrags- en spraakstoornissen en epileptische aanvallen. MRI toont afwijkingen in de mediale temporaalkwab; de liquor toont lymfocyten en HSV-PCR is positief. Onbehandeld is de sterfte hoog; bij verdenking wordt direct aciclovir intraveneus gestart.</p>",
  "image_url": "",
  "wiki_title": "Herpes simplex encephalitis",
  "match": "herpes encefalitis|herpesencefalitis|herpes simplex encefalitis|hsv-encefalitis",
  "option_only": true
 },
 "meningokokkenmeningitis": {
  "title": "Meningokokkenmeningitis",
  "short": "Meningokokkenmeningitis is een hersenvliesontsteking door Neisseria meningitidis, vaak met een snel verlopende sepsis en petechiën.",
  "definition": "<p>Bij een <strong>invasieve meningokokkeninfectie</strong> kunnen binnen uren koorts, hoofdpijn, nekstijfheid, sufheid en niet-wegdrukbare petechiën ontstaan, soms met shock en diffuse intravasale stolling. Bij verdenking (zeker met petechiën) wordt zo snel mogelijk een antibioticum gegeven. Nauwe contacten krijgen profylaxe; er is vaccinatie tegen serogroepen ACWY en B.</p>",
  "image_url": "",
  "wiki_title": "Meningococcal disease",
  "match": "meningokokkenmeningitis|meningokokkensepsis",
  "option_only": true
 },
 "tonsillitis": {
  "title": "Tonsillitis",
  "short": "Tonsillitis is een ontsteking van de keelamandelen, meestal viraal, soms door groep A-streptokokken.",
  "definition": "<p>Bij <strong>tonsillitis</strong> zijn de amandelen rood en gezwollen, soms met beslag, en zijn er keelpijn, slikklachten en koorts. Meestal gaat het om een virus (ook EBV). Bij een bacteriële oorzaak gaat het vaak om groep A-streptokokken. Complicaties zijn een peritonsillair abces (met trismus en uitpuilen van het gehemelte) en zelden acuut reuma.</p>",
  "image_url": "",
  "wiki_title": "Tonsillitis",
  "match": "tonsillitis|amandelontsteking|angina tonsillaris",
  "option_only": true
 },
 "trichomonas": {
  "title": "Trichomonas vaginalis",
  "short": "Trichomonas vaginalis is een seksueel overdraagbare protozo die vaginitis met schuimende, groengele afscheiding veroorzaakt.",
  "definition": "<p><strong>Trichomoniasis</strong> geeft bij vrouwen jeuk, branderigheid en riekende, schuimende afscheiding, soms met een ‘aardbeiencervix’; bij mannen meestal geen klachten. De beweeglijke flagellaten zijn soms te zien in een nat preparaat; PCR is gevoeliger. Behandeling met metronidazol, ook voor de partner.</p>",
  "image_url": "",
  "wiki_title": "Trichomoniasis",
  "match": "trichomonas|trichomonas vaginalis|trichomoniasis",
  "option_only": true
 },
 "ascariasis": {
  "title": "Ascariasis (spoelworm)",
  "short": "Ascariasis is een infectie met de grote spoelworm Ascaris lumbricoides, opgelopen via eitjes in besmet voedsel of grond.",
  "definition": "<p>Bij <strong>ascariasis</strong> komen larven uit de darm via bloed en longen (soms met hoest en eosinofilie: syndroom van Löffler) terug in de darm, waar ze uitgroeien tot wormen van 15–35 cm. Lichte infecties geven weinig klachten; zware infecties kunnen darmobstructie, galwegobstructie en ondervoeding geven. Behandeling met mebendazol of albendazol.</p>",
  "image_url": "",
  "wiki_title": "Ascariasis",
  "match": "ascariasis|ascaris lumbricoides|spoelworm",
  "option_only": true
 },
 "amoebiasis": {
  "title": "Amoebiasis",
  "short": "Amoebiasis is een infectie met Entamoeba histolytica, die bloederige diarree en leverabcessen kan veroorzaken.",
  "definition": "<p><strong><em>Entamoeba histolytica</em></strong> wordt via cysten in besmet water of voedsel opgelopen. Invasieve infectie van het colon geeft amoebendysenterie met kolfvormige ulcera. Via de v. portae kan een amoebenleverabces ontstaan, met koorts en pijn rechtsboven. Behandeling met metronidazol, gevolgd door een middel dat de cysten in de darm doodt.</p>",
  "image_url": "",
  "wiki_title": "Amoebiasis",
  "match": "amoebiasis|amoebendysenterie|entamoeba histolytica",
  "option_only": true
 },
 "trichophyton rubrum": {
  "title": "Trichophyton rubrum",
  "short": "Trichophyton rubrum is een dermatofyt en de meest voorkomende oorzaak van voetschimmel en schimmelnagels.",
  "definition": "<p><strong>Dermatofyten</strong> leven van keratine in de hoornlaag, haren en nagels. <em>T. rubrum</em> veroorzaakt tinea pedis (tussen de tenen), tinea unguium (onychomycose), tinea cruris en tinea corporis (ringvormige plekken met een schilferende, actieve rand). Diagnose met KOH-preparaat of kweek; behandeling met lokale of orale antimycotica (terbinafine).</p>",
  "image_url": "",
  "wiki_title": "Trichophyton rubrum",
  "match": "trichophyton rubrum|trichophyton|dermatofyt",
  "option_only": true
 },
 "psoriasis guttata": {
  "title": "Psoriasis guttata",
  "short": "Psoriasis guttata is een vorm van psoriasis met veel kleine, druppelvormige schilferende plekjes, vaak na een keelontsteking met streptokokken.",
  "definition": "<p><strong>Psoriasis guttata</strong> komt vooral bij kinderen en jongvolwassenen voor en ontstaat vaak 1–3 weken na een streptokokkeninfectie van de keel. Over romp en ledematen verschijnen talrijke kleine rode, schilferende papels. Het kan spontaan verdwijnen of overgaan in chronische plaque-psoriasis.</p>",
  "image_url": "",
  "wiki_title": "Guttate psoriasis",
  "match": "psoriasis guttata",
  "option_only": true
 },
 "retinopathie": {
  "title": "Retinopathie",
  "short": "Retinopathie is een aandoening van het netvlies, meestal door schade aan de kleine bloedvaten, zoals bij diabetes of hypertensie.",
  "definition": "<p>Belangrijke vormen van <strong>retinopathie</strong> zijn diabetische retinopathie (microaneurysmata, bloedingen, exsudaten en later nieuwvorming van vaten), hypertensieve retinopathie (vernauwde arteriolen, kruisingsfenomenen, bloedingen en bij maligne hypertensie papiloedeem) en prematurenretinopathie. Regelmatige oogcontrole bij diabetes voorkomt blindheid.</p>",
  "image_url": "",
  "wiki_title": "Retinopathy",
  "match": "retinopathie",
  "option_only": true
 },
 "diabetische retinopathie": {
  "title": "Diabetische retinopathie",
  "short": "Diabetische retinopathie is schade aan de netvliesvaatjes door langdurig hoge bloedglucose.",
  "definition": "<p>Bij <strong>diabetische retinopathie</strong> ontstaan eerst microaneurysmata, puntbloedingen en harde exsudaten (non-proliferatief). Bij ernstige ischemie groeien nieuwe, kwetsbare vaten (proliferatief), met risico op glasvochtbloedingen en tractieablatio. Maculaoedeem kan in elk stadium het zicht bedreigen. Behandeling met laser en anti-VEGF-injecties; screening voorkomt blindheid.</p>",
  "image_url": "",
  "wiki_title": "Diabetic retinopathy",
  "match": "diabetische retinopathie",
  "option_only": true
 },
 "maculadegeneratie": {
  "title": "Leeftijdsgebonden maculadegeneratie",
  "short": "Bij maculadegeneratie raakt de gele vlek (het centrum van het netvlies) beschadigd, met verlies van het centrale zien.",
  "definition": "<p>Bij <strong>LMD</strong> is er een droge vorm (drusen en atrofie) en een natte vorm (nieuwvorming van lekkende vaatjes onder het netvlies). Klachten zijn vervormd zien (rechte lijnen lijken krom), een vlek in het centrum en moeite met lezen en gezichten herkennen; het perifere zien blijft bewaard. Risicofactoren: leeftijd, roken en erfelijkheid. De natte vorm wordt met anti-VEGF-injecties behandeld.</p>",
  "image_url": "",
  "wiki_title": "Macular degeneration",
  "match": "maculadegeneratie|leeftijdsgebonden maculadegeneratie|lmd|amd",
  "option_only": true
 },
 "benigne paroxysmale positieveranderingsduizeligheid (bppd)": {
  "title": "BPPD",
  "short": "BPPD is kortdurende draaiduizeligheid bij hoofdbewegingen, doordat losse otolieten in een halfcirkelvormig kanaal zijn terechtgekomen.",
  "definition": "<p>Bij <strong>BPPD</strong> bewegen losgeraakte kalkkristallen bij een verandering van hoofdhouding (omdraaien in bed, opkijken) in meestal het achterste kanaal, wat seconden tot een minuut heftige draaiduizeligheid geeft. De Dix-Hallpike-test lokt een nystagmus uit. Behandeling met een repositiemanoeuvre (Epley).</p>",
  "image_url": "",
  "wiki_title": "Benign paroxysmal positional vertigo",
  "match": "benigne paroxysmale positieveranderingsduizeligheid (bppd)|bppd|benigne paroxysmale positieduizeligheid",
  "option_only": true
 },
 "supinatie": {
  "title": "Supinatie",
  "short": "Supinatie is het naar boven of voren draaien van de handpalm (onderarm) of het kantelen van de voetzool naar binnen.",
  "definition": "<p>In de <strong>onderarm</strong> draait de radius bij supinatie parallel naast de ulna, zodat de handpalm naar voren (of boven) wijst; belangrijke supinatoren zijn de m. biceps brachii en m. supinator. Bij de <strong>voet</strong> is supinatie een gecombineerde beweging van inversie, adductie en plantairflexie.</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "supinatie",
  "option_only": true
 },
 "pronatie": {
  "title": "Pronatie",
  "short": "Pronatie is het naar beneden of achteren draaien van de handpalm, of het kantelen van de voetzool naar buiten.",
  "definition": "<p>In de <strong>onderarm</strong> kruist de radius bij pronatie over de ulna; belangrijke pronatoren zijn de m. pronator teres en m. pronator quadratus. Bij de <strong>voet</strong> is pronatie een combinatie van eversie, abductie en dorsaalflexie.</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "pronatie",
  "option_only": true
 },
 "eversie": {
  "title": "Eversie",
  "short": "Eversie is het kantelen van de voetzool naar buiten (lateraal); de tegenovergestelde beweging is inversie.",
  "definition": "<p><strong>Eversie</strong> vindt vooral plaats in het onderste spronggewricht en de gewrichten van de middenvoet. De belangrijkste everroren zijn de mm. fibulares (peronei) longus en brevis, geïnnerveerd door de n. fibularis superficialis.</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "eversie",
  "option_only": true
 },
 "abductie": {
  "title": "Abductie",
  "short": "Abductie is een beweging van een lichaamsdeel van de middellijn af, bijvoorbeeld de arm zijwaarts heffen.",
  "definition": "<p>Bij <strong>abductie</strong> beweegt een ledemaat in het frontale vlak weg van het lichaam (bij vingers en tenen: weg van de as van de hand of voet). Het tegenovergestelde is adductie. Voorbeelden van abductoren zijn de m. deltoideus en m. supraspinatus (schouder) en de m. gluteus medius en minimus (heup).</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "abductie",
  "option_only": true
 },
 "exorotatie": {
  "title": "Exorotatie",
  "short": "Exorotatie is draaien van een ledemaat om de lengteas naar buiten (lateraal).",
  "definition": "<p>Bij <strong>exorotatie</strong> draait de voorzijde van bijv. de bovenarm of het bovenbeen naar buiten. In de schouder zijn de m. infraspinatus en m. teres minor de belangrijkste exorotatoren. Bij een frozen shoulder is de exorotatie vaak als eerste en het meest beperkt.</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "exorotatie|externe rotatie|buitenwaartse rotatie",
  "option_only": true
 },
 "dorsaalflexie": {
  "title": "Dorsaalflexie",
  "short": "Dorsaalflexie is het optrekken van de voet (of het naar achteren buigen van de hand) richting de rugzijde.",
  "definition": "<p>Bij de enkel betekent <strong>dorsaalflexie</strong> dat de voetrug richting het scheenbeen beweegt; de m. tibialis anterior is de belangrijkste spier (n. fibularis profundus). Uitval geeft een klapvoet. Bij de pols betekent dorsaalflexie extensie van de hand.</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "dorsaalflexie|dorsiflexie",
  "option_only": true
 },
 "plantairflexie": {
  "title": "Plantairflexie",
  "short": "Plantairflexie is het naar beneden buigen van de voet, zoals bij op de tenen staan.",
  "definition": "<p>De belangrijkste <strong>plantairflexoren</strong> zijn de m. gastrocnemius en m. soleus (samen de m. triceps surae, via de achillespees), geïnnerveerd door de n. tibialis. Bij een achillespeesruptuur is de plantairflexie verzwakt en is de test van Thompson positief.</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "plantairflexie",
  "option_only": true
 },
 "flexie": {
  "title": "Flexie",
  "short": "Flexie is buigen: de hoek tussen twee lichaamsdelen wordt kleiner.",
  "definition": "<p>Bij <strong>flexie</strong> beweegt een lichaamsdeel meestal naar voren in het sagittale vlak (bijv. de elleboog of heup buigen). Bij knie en enkel zijn er afwijkende afspraken (kniebuiging gaat naar achteren; bij de enkel spreekt men van dorsaal- en plantairflexie). Het tegenovergestelde is extensie.</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "flexie|buiging",
  "option_only": true
 },
 "extensie": {
  "title": "Extensie",
  "short": "Extensie is strekken: de hoek tussen twee lichaamsdelen wordt groter.",
  "definition": "<p><strong>Extensie</strong> is de tegenbeweging van flexie, bijvoorbeeld het strekken van elleboog of knie. Voorbij de neutrale stand spreekt men van hyperextensie (bijv. van de rug of de pols).</p>",
  "image_url": "",
  "wiki_title": "Anatomical terms of motion",
  "match": "extensie|strekking",
  "option_only": true
 },
 "n. obturatorius": {
  "title": "N. obturatorius",
  "short": "De n. obturatorius (L2–L4) innerveert de adductoren van het bovenbeen en de huid aan de binnenkant van de dij.",
  "definition": "<p>De <strong>n. obturatorius</strong> komt uit de plexus lumbalis, loopt langs de bekkenwand en verlaat het bekken via het canalis obturatorius. Hij innerveert de mediale (adductoren)loge. Letsel kan ontstaan bij bekkenchirurgie, bekkenfracturen of bevallingen, met zwakte bij adductie en gevoelsstoornissen aan de binnenzijde van de dij.</p>",
  "image_url": "",
  "wiki_title": "Obturator nerve",
  "match": "n. obturatorius|nervus obturatorius",
  "option_only": true
 },
 "n. femoralis": {
  "title": "N. femoralis",
  "short": "De n. femoralis (L2–L4) innerveert de m. quadriceps en m. iliopsoas en de huid aan de voorkant van de dij en binnenkant van het onderbeen.",
  "definition": "<p>De <strong>n. femoralis</strong> loopt langs de m. psoas en onder het lig. inguinale door, lateraal van de a. femoralis. Hij is nodig voor kniestrekking en de kniepeesreflex. Zijn sensibele eindtak, de n. saphenus, verzorgt de mediale zijde van het onderbeen. Uitval geeft een zwakke kniestrekking en een afwezige kniepeesreflex.</p>",
  "image_url": "",
  "wiki_title": "Femoral nerve",
  "match": "n. femoralis|nervus femoralis",
  "option_only": true
 },
 "a. iliaca externa": {
  "title": "A. iliaca externa",
  "short": "De a. iliaca externa loopt van de splitsing van de a. iliaca communis naar het lig. inguinale, waar ze a. femoralis gaat heten.",
  "definition": "<p>De <strong>a. iliaca externa</strong> loopt langs de m. psoas en geeft vlak boven het lig. inguinale de a. epigastrica inferior en de a. circumflexa ilium profunda af. Bij een niertransplantatie wordt de donornier vaak op deze arterie aangesloten.</p>",
  "image_url": "",
  "wiki_title": "External iliac artery",
  "match": "a. iliaca externa|arteria iliaca externa",
  "option_only": true
 },
 "a. poplitea": {
  "title": "A. poplitea",
  "short": "De a. poplitea is de voortzetting van de a. femoralis in de knieholte; ze splitst in de a. tibialis anterior en de truncus tibiofibularis.",
  "definition": "<p>De <strong>a. poplitea</strong> ligt diep in de knieholte, vlak tegen het kniekapsel, en is daardoor kwetsbaar bij een knieluxatie. De pols is moeilijk te voelen. Er kan een popliteaal aneurysma ontstaan, dat vaak dubbelzijdig is en embolieën naar het onderbeen kan geven.</p>",
  "image_url": "",
  "wiki_title": "Popliteal artery",
  "match": "a. poplitea|arteria poplitea|knieholteslagader",
  "option_only": true
 },
 "humerus": {
  "title": "Humerus (opperarmbeen)",
  "short": "De humerus is het bot van de bovenarm, tussen schouder en elleboog.",
  "definition": "<p>De <strong>humerus</strong> heeft proximaal de kop, het collum anatomicum, de tubercula en het collum chirurgicum; langs de schacht loopt de n. radialis in een groeve; distaal liggen de epicondylen, de trochlea en het capitulum. Fracturen van het collum chirurgicum bedreigen de n. axillaris, schachtfracturen de n. radialis.</p>",
  "image_url": "",
  "wiki_title": "Humerus",
  "match": "humerus|opperarmbeen",
  "option_only": true
 },
 "patella": {
  "title": "Patella (knieschijf)",
  "short": "De patella is het grootste sesambeen van het lichaam, in de pees van de m. quadriceps.",
  "definition": "<p>De <strong>patella</strong> vergroot de hefboomwerking van de m. quadriceps bij kniestrekking en beschermt het kniegewricht. Ze glijdt in de groeve van de femur (trochlea). Patella-luxatie gebeurt meestal naar lateraal, vooral bij jonge vrouwen met losse banden of een afwijkende stand.</p>",
  "image_url": "",
  "wiki_title": "Patella",
  "match": "patella|knieschijf",
  "option_only": true
 },
 "olecranon": {
  "title": "Olecranon",
  "short": "Het olecranon is het proximale uitsteeksel van de ulna dat de punt van de elleboog vormt.",
  "definition": "<p>Het <strong>olecranon</strong> is de aanhechting van de m. triceps brachii en past bij strekking in de fossa olecrani van de humerus. Omdat het direct onder de huid ligt, is het kwetsbaar bij direct trauma; de bursa olecrani erboven kan ontsteken.</p>",
  "image_url": "",
  "wiki_title": "Olecranon",
  "match": "olecranon",
  "option_only": true
 },
 "os pubis": {
  "title": "Os pubis (schaambeen)",
  "short": "Het os pubis is het voorste deel van het heupbeen; beide schaambeenderen zijn in de symfyse met elkaar verbonden.",
  "definition": "<p>Het <strong>os pubis</strong> vormt samen met het os ilium en os ischii het heupbeen (os coxae), dat in het acetabulum samenkomt. De ramus superior en inferior begrenzen het foramen obturatum. Fracturen van de schaambeentakken komen veel voor bij ouderen na een val.</p>",
  "image_url": "",
  "wiki_title": "Pubis (bone)",
  "match": "os pubis|schaambeen",
  "option_only": true
 },
 "os cuboideum": {
  "title": "Os cuboideum",
  "short": "Het os cuboideum is een voetwortelbeentje aan de laterale zijde van de voet, tussen calcaneus en de vierde en vijfde middenvoetsbeentjes.",
  "definition": "<p>Het <strong>os cuboideum</strong> heeft aan de onderzijde een groeve waar de pees van de m. fibularis longus doorheen loopt. Het maakt deel uit van de laterale voetboog en van het gewricht van Chopart.</p>",
  "image_url": "",
  "wiki_title": "Cuboid bone",
  "match": "os cuboideum|kubusvormig been",
  "option_only": true
 },
 "os trapezoideum": {
  "title": "Os trapezoideum",
  "short": "Het os trapezoideum is een klein handwortelbeentje in de distale rij, dat articuleert met het tweede middenhandsbeentje.",
  "definition": "<p>Het <strong>os trapezoideum</strong> ligt tussen het os trapezium (aan de duimzijde) en het os capitatum. Het is het kleinste bot van de distale rij en breekt zelden.</p>",
  "image_url": "",
  "wiki_title": "Trapezoid bone",
  "match": "os trapezoideum",
  "option_only": true
 },
 "os metacarpale i": {
  "title": "Os metacarpale I",
  "short": "Het os metacarpale I is het middenhandsbeentje van de duim, dat via een zadelgewricht met het os trapezium articuleert.",
  "definition": "<p>Het <strong>eerste middenhandsbeen</strong> is korter en beweeglijker dan de andere. Bekende fracturen van de basis zijn de Bennett-fractuur (intra-articulair, met subluxatie) en de Rolando-fractuur. Artrose van het CMC-I-gewricht komt veel voor bij oudere vrouwen.</p>",
  "image_url": "",
  "wiki_title": "First metacarpal bone",
  "match": "os metacarpale i|eerste middenhandsbeen",
  "option_only": true
 },
 "articulatio humeri": {
  "title": "Schoudergewricht (articulatio humeri)",
  "short": "Het schoudergewricht is een kogelgewricht tussen de humeruskop en de ondiepe cavitas glenoidalis van de scapula.",
  "definition": "<p>De <strong>articulatio humeri</strong> is het meest beweeglijke gewricht van het lichaam, maar ook het minst stabiel. Stabiliteit komt vooral van de rotatorcuff, het labrum en het kapsel met de glenohumerale banden. Luxaties gebeuren meestal naar voren (anterieur).</p>",
  "image_url": "",
  "wiki_title": "Shoulder joint",
  "match": "articulatio humeri|glenohumeraal gewricht|schoudergewricht",
  "option_only": true
 },
 "articulio radiocarpalis": {
  "title": "Radiocarpaal gewricht",
  "short": "Het radiocarpale gewricht is het polsgewricht tussen de distale radius (met discus) en de proximale handwortelrij.",
  "definition": "<p>De <strong>articulatio radiocarpalis</strong> is een ellipsoïd gewricht tussen de radius en het os scaphoideum, lunatum en (via de discus articularis) triquetrum. Het maakt flexie, extensie en radiaal- en ulnairdeviatie mogelijk; pro- en supinatie gebeuren in de radio-ulnaire gewrichten.</p>",
  "image_url": "",
  "wiki_title": "Wrist",
  "match": "articulio radiocarpalis|articulatio radiocarpalis|radiocarpaal gewricht",
  "option_only": true
 },
 "articulationes subtalaris en talocalcaneonavicularis": {
  "title": "Onderste spronggewricht",
  "short": "Het onderste spronggewricht bestaat uit de verbinding tussen talus en calcaneus en tussen talus, calcaneus en naviculare; het maakt inversie en eversie mogelijk.",
  "definition": "<p>Het <strong>onderste spronggewricht</strong> zorgt dat de voet zich kan aanpassen aan oneffen ondergrond, door inversie en eversie. Het bovenste spronggewricht (talocrurale gewricht) daarentegen maakt vooral dorsaal- en plantairflexie mogelijk.</p>",
  "image_url": "",
  "wiki_title": "Subtalar joint",
  "match": "articulationes subtalaris en talocalcaneonavicularis|onderste spronggewricht|subtalair gewricht",
  "option_only": true
 },
 "m. gastrocnemius": {
  "title": "M. gastrocnemius",
  "short": "De m. gastrocnemius is de oppervlakkige, tweekoppige kuitspier die de voet plantair flecteert en de knie helpt buigen.",
  "definition": "<p>De <strong>m. gastrocnemius</strong> ontspringt boven de femurcondylen en hecht via de achillespees aan de calcaneus. Omdat hij over twee gewrichten loopt, is hij sterk betrokken bij lopen, rennen en springen. Een ‘tennis leg’ is een scheur in de mediale kop. Innervatie: n. tibialis.</p>",
  "image_url": "",
  "wiki_title": "Gastrocnemius muscle",
  "match": "m. gastrocnemius|musculus gastrocnemius|kuitspier",
  "option_only": true
 },
 "schouderluxatie": {
  "title": "Schouderluxatie",
  "short": "Bij een schouderluxatie schiet de humeruskop uit de kom, meestal naar voren-onder.",
  "definition": "<p>Bij een <strong>anterieure schouderluxatie</strong> (verreweg het meest voorkomend) staat de arm in lichte abductie en exorotatie, met een afgeplatte schouderronding en een leeg gevoel onder het acromion. Controleer altijd de n. axillaris (gevoel op de schouder). Bij jongeren is recidief luxeren vaak; bij ouderen komen cuffscheuren voor. Posterieure luxaties komen voor bij epileptische aanvallen en elektrocutie.</p>",
  "image_url": "",
  "wiki_title": "Dislocated shoulder",
  "match": "schouderluxatie|luxatie van de schouder",
  "option_only": true
 },
 "luxatie van het caput femoris": {
  "title": "Heupluxatie",
  "short": "Bij een heupluxatie schiet de femurkop uit het acetabulum, meestal naar achteren door groot geweld (bijv. dashboardletsel).",
  "definition": "<p>Bij een <strong>posterieure heupluxatie</strong> staat het been verkort, in flexie, adductie en endorotatie. Er is risico op letsel van de n. ischiadicus en op avasculaire necrose van de femurkop; snelle repositie is nodig. Bij een heupprothese kan luxatie al bij geringe beweging optreden.</p>",
  "image_url": "",
  "wiki_title": "Hip dislocation",
  "match": "luxatie van het caput femoris|heupluxatie",
  "option_only": true
 },
 "fibulafractuur": {
  "title": "Fibulafractuur",
  "short": "Een fibulafractuur is een breuk van het kuitbeen, vaak distaal als onderdeel van een enkelfractuur.",
  "definition": "<p>Distale <strong>fibulafracturen</strong> worden ingedeeld volgens Weber (A, B, C) op basis van de hoogte ten opzichte van de syndesmose; hoe hoger, hoe groter de kans op instabiliteit. Een hoge fibulafractuur kan samengaan met een mediaal enkelletsel (Maisonneuve). Een fractuur van het caput fibulae kan de n. fibularis communis beschadigen.</p>",
  "image_url": "",
  "wiki_title": "Fibula fracture",
  "match": "fibulafractuur|kuitbeenbreuk",
  "option_only": true
 },
 "fractuur caput fibulae": {
  "title": "Fractuur van het caput fibulae",
  "short": "Een fractuur van het caput fibulae ligt vlak bij de n. fibularis communis, die daarbij beschadigd kan raken.",
  "definition": "<p>Het <strong>caput fibulae</strong> ligt lateraal onder de knie. De n. fibularis communis loopt er direct omheen, zodat een fractuur (of druk, bijvoorbeeld van gips) een klapvoet kan veroorzaken. Het kan ook samengaan met letsel van het laterale bandapparaat van de knie.</p>",
  "image_url": "",
  "wiki_title": "Fibula",
  "match": "fractuur caput fibulae|fibulakopfractuur",
  "option_only": true
 },
 "crurisfractuur": {
  "title": "Crurisfractuur",
  "short": "Een crurisfractuur is een breuk van het onderbeen waarbij tibia en fibula beide gebroken zijn.",
  "definition": "<p>Een <strong>crurisfractuur</strong> ontstaat meestal door groot geweld (verkeer, sport). Omdat de tibia oppervlakkig ligt, zijn het relatief vaak open fracturen. Belangrijke complicaties zijn een compartimentsyndroom, infectie en vertraagde of uitblijvende genezing. Behandeling meestal met een intramedullaire pen.</p>",
  "image_url": "",
  "wiki_title": "Tibial fracture",
  "match": "crurisfractuur|onderbeenfractuur",
  "option_only": true
 },
 "arthrotomie": {
  "title": "Artrotomie",
  "short": "Een artrotomie is het chirurgisch openen van een gewricht.",
  "definition": "<p>Een <strong>artrotomie</strong> wordt o.a. gedaan om een septische artritis te spoelen, losse delen te verwijderen of een gewricht te herstellen of te vervangen. Veel ingrepen worden tegenwoordig artroscopisch (via een kijkoperatie) gedaan.</p>",
  "image_url": "",
  "wiki_title": "Arthrotomy",
  "match": "arthrotomie|artrotomie",
  "option_only": true
 },
 "voordarm": {
  "title": "Voordarm (foregut)",
  "short": "De voordarm is het craniale deel van de embryonale darmbuis, waaruit o.a. slokdarm, maag, lever, pancreas en een deel van het duodenum ontstaan.",
  "definition": "<p>Uit de <strong>voordarm</strong> ontstaan de farynx, de onderste luchtwegen (longknop), oesophagus, maag, het proximale duodenum, lever, galblaas en pancreas. Hij wordt doorbloed door de truncus coeliacus. Pijn uit voordarmorganen wordt in het epigastrium gevoeld.</p>",
  "image_url": "",
  "wiki_title": "Foregut",
  "match": "voordarm|foregut",
  "option_only": true
 },
 "intermediair mesoderm": {
  "title": "Intermediair mesoderm",
  "short": "Uit het intermediair mesoderm ontwikkelen zich de nieren en de geslachtsorganen.",
  "definition": "<p>Het <strong>intermediair mesoderm</strong> ligt tussen het paraxiale mesoderm (somieten) en het laterale plaatmesoderm. Hieruit ontstaan achtereenvolgens pronephros, mesonephros (met de gang van Wolff) en metanephros (de blijvende nier), en ook de gonaden.</p>",
  "image_url": "",
  "wiki_title": "Intermediate mesoderm",
  "match": "intermediair mesoderm",
  "option_only": true
 },
 "velamenteuze insertie": {
  "title": "Velamenteuze insertie van de navelstreng",
  "short": "Bij een velamenteuze insertie hecht de navelstreng aan de vliezen in plaats van aan de placenta, waardoor de vaten onbeschermd door de vliezen lopen.",
  "definition": "<p>Bij een <strong>velamenteuze insertie</strong> lopen de navelstrengvaten zonder gelei van Wharton door de vliezen naar de placenta. Liggen ze vóór de baarmoedermond (vasa praevia), dan kunnen ze bij het breken van de vliezen scheuren, met snel foetaal bloedverlies. Het komt vaker voor bij meerlingen en IVF.</p>",
  "image_url": "",
  "wiki_title": "Velamentous cord insertion",
  "match": "velamenteuze insertie|velamenteuze insertie van de navelstreng",
  "option_only": true
 },
 "langdurig gebroken vliezen": {
  "title": "Langdurig gebroken vliezen",
  "short": "Bij langdurig gebroken vliezen is het vruchtwater langer dan 24 uur voor de geboorte gebroken, met een verhoogd infectierisico.",
  "definition": "<p>Na het breken van de vliezen kunnen bacteriën uit de vagina opstijgen, met risico op een infectie van vruchtwater en vliezen (chorioamnionitis) en neonatale infectie (o.a. groep B-streptokokken). Bij langdurig gebroken vliezen wordt daarom vaak de baring ingeleid en worden moeder en kind gecontroleerd op tekenen van infectie.</p>",
  "image_url": "",
  "wiki_title": "Prelabor rupture of membranes",
  "match": "langdurig gebroken vliezen|lang gebroken vliezen|prom",
  "option_only": true
 },
 "schildklier hormoon": {
  "title": "Schildklierhormoon (T4 en T3)",
  "short": "Schildklierhormoon (T4 en het actievere T3) regelt het basaal metabolisme, de groei en de ontwikkeling van het zenuwstelsel.",
  "definition": "<p>De schildklier maakt vooral <strong>T4</strong>, dat in de weefsels wordt omgezet in het actievere <strong>T3</strong>. Het hormoon werkt via kernreceptoren en verhoogt o.a. de stofwisseling, warmteproductie en gevoeligheid voor catecholaminen. In de foetale en vroege kinderjaren is het essentieel voor de hersenontwikkeling; daarom wordt congenitale hypothyreoïdie met de hielprik opgespoord.</p>",
  "image_url": "",
  "wiki_title": "Thyroid hormones",
  "match": "schildklier hormoon|schildklierhormoon|thyroxine|t4|t3",
  "option_only": true
 },
 "de ziekte van hashimoto": {
  "title": "Ziekte van Hashimoto",
  "short": "De ziekte van Hashimoto is een auto-immuunontsteking van de schildklier die meestal tot hypothyreoïdie leidt.",
  "definition": "<p>Bij <strong>Hashimoto-thyreoïditis</strong> infiltreren lymfocyten de schildklier, met antistoffen tegen thyreoperoxidase (anti-TPO). De klier kan eerst vergroot zijn en wordt later vaak kleiner, met geleidelijk een trage schildklierwerking. Het komt vaker voor bij vrouwen en samen met andere auto-immuunziekten. Er is een licht verhoogd risico op een schildkliermalt-lymfoom.</p>",
  "image_url": "",
  "wiki_title": "Hashimoto's thyroiditis",
  "match": "de ziekte van hashimoto|ziekte van hashimoto|hashimoto|thyreoïditis van hashimoto",
  "option_only": true
 },
 "foliumzuur deficientie": {
  "title": "Foliumzuurdeficiëntie",
  "short": "Een tekort aan foliumzuur geeft een macrocytaire (megaloblastaire) anemie en verhoogt in de zwangerschap het risico op een neuralebuisdefect.",
  "definition": "<p>Een <strong>foliumzuurtekort</strong> ontstaat door weinig groenten in de voeding, alcoholisme, malabsorptie (coeliakie), verhoogde behoefte (zwangerschap, hemolyse) of medicatie (methotrexaat, trimethoprim, anti-epileptica). Anders dan bij B12-tekort zijn er geen neurologische afwijkingen en is het methylmalonzuur normaal; homocysteïne is bij beide verhoogd.</p>",
  "image_url": "",
  "wiki_title": "Folate deficiency",
  "match": "foliumzuur deficientie|foliumzuurdeficiëntie|foliumzuurtekort",
  "option_only": true
 },
 "vitamine b12 deficientie": {
  "title": "Vitamine B12-deficiëntie",
  "short": "Een vitamine B12-tekort geeft een macrocytaire anemie en neurologische schade, zoals polyneuropathie en een gecombineerde strengziekte.",
  "definition": "<p>Oorzaken van een <strong>B12-tekort</strong> zijn auto-immuungastritis (pernicieuze anemie, antistoffen tegen intrinsieke factor), maag- of ileumresectie, ziekte van Crohn, metformine, langdurig PPI-gebruik en veganistisch eten. Naast anemie ontstaan neuropathie, degeneratie van achterstrengen en piramidebanen, cognitieve stoornissen en glossitis. Methylmalonzuur en homocysteïne zijn verhoogd.</p>",
  "image_url": "",
  "wiki_title": "Vitamin B12 deficiency",
  "match": "vitamine b12 deficientie|vitamine b12-deficiëntie|b12-tekort|pernicieuze anemie",
  "option_only": true
 },
 "miltruptuur": {
  "title": "Miltruptuur",
  "short": "Bij een miltruptuur scheurt de milt, meestal na een trauma, met een levensbedreigende inwendige bloeding.",
  "definition": "<p>Een <strong>miltruptuur</strong> ontstaat vooral na een stomp buiktrauma links (soms met ribfracturen). Een vergrote milt (bijv. bij de ziekte van Pfeiffer of malaria) kan al bij gering trauma scheuren. Klachten: pijn linksboven, soms uitstralend naar de linkerschouder (teken van Kehr), en tekenen van shock. Behandeling afhankelijk van stabiliteit: observatie, embolisatie of splenectomie.</p>",
  "image_url": "",
  "wiki_title": "Splenic injury",
  "match": "miltruptuur|scheuring van de milt",
  "option_only": true
 },
 "leucocytose": {
  "title": "Leukocytose",
  "short": "Leukocytose is een verhoogd aantal witte bloedcellen, meestal door infectie of ontsteking.",
  "definition": "<p>Bij <strong>leukocytose</strong> is het aantal leukocyten boven ongeveer 10 × 10⁹/L. Een neutrofiele leukocytose met linksverschuiving past bij bacteriële infectie; ook stress, corticosteroïden, roken, trauma en necrose kunnen het verhogen. Sterk verhoogde waarden met onrijpe cellen in het bloed wijzen op leukemie of een leukemoïde reactie.</p>",
  "image_url": "",
  "wiki_title": "Leukocytosis",
  "match": "leucocytose",
  "option_only": true
 },
 "niet-steroïdale anti-inflammatoire drugs (nsaids)": {
  "title": "NSAID's",
  "short": "NSAID's remmen cyclo-oxygenase en daarmee de vorming van prostaglandinen; ze werken pijnstillend, koortsverlagend en ontstekingsremmend.",
  "definition": "<p><strong>NSAID's</strong> (zoals ibuprofen, naproxen, diclofenac) remmen COX-1 en COX-2. Door remming van beschermende prostaglandinen kunnen ze maagulcera en bloedingen geven, vooral bij ouderen; ook kunnen ze de nierfunctie verslechteren, de bloeddruk verhogen, hartfalen verergeren en het risico op hart- en vaatziekten iets verhogen. Selectieve COX-2-remmers geven minder maagschade.</p>",
  "image_url": "",
  "wiki_title": "Nonsteroidal anti-inflammatory drug",
  "match": "niet-steroïdale anti-inflammatoire drugs (nsaids)",
  "option_only": true
 },
 "nsaid’s": {
  "title": "NSAID's",
  "short": "NSAID's remmen cyclo-oxygenase en daarmee de vorming van prostaglandinen; ze werken pijnstillend, koortsverlagend en ontstekingsremmend.",
  "definition": "<p><strong>NSAID's</strong> (zoals ibuprofen, naproxen, diclofenac) remmen COX-1 en COX-2. Door remming van beschermende prostaglandinen kunnen ze maagulcera en bloedingen geven, vooral bij ouderen; ook kunnen ze de nierfunctie verslechteren, de bloeddruk verhogen, hartfalen verergeren en het risico op hart- en vaatziekten iets verhogen. Selectieve COX-2-remmers geven minder maagschade.</p>",
  "image_url": "",
  "wiki_title": "Nonsteroidal anti-inflammatory drug",
  "match": "nsaid’s",
  "option_only": true
 },
 "lobaire pneumonie, veroorzaakt door pneumokokken": {
  "title": "Pneumonie",
  "short": "Een pneumonie is een infectie van het longweefsel (alveoli), meestal door bacteriën of virussen, met koorts, hoesten en kortademigheid.",
  "definition": "<p>Bij een <strong>pneumonie</strong> (longontsteking) raken de alveoli ontstoken en vullen ze zich met ontstekingsvocht en cellen. Daardoor is minder longoppervlak beschikbaar voor gaswisseling.</p><p>Typische klachten zijn koorts, hoesten (vaak met sputum), kortademigheid en soms pijn bij het ademen. Bij lichamelijk onderzoek kunnen crepitaties of een gedempte percussie optreden; een X-thorax toont een infiltraat. De meest voorkomende verwekker van de buiten het ziekenhuis opgelopen pneumonie is <em>Streptococcus pneumoniae</em>.</p>",
  "image_url": "",
  "wiki_title": "Pneumonia",
  "match": "lobaire pneumonie, veroorzaakt door pneumokokken",
  "option_only": true
 },
 "abducens": {
  "title": "N. abducens (VI)",
  "short": "De n. abducens (VI) innerveert de m. rectus lateralis, die het oog naar buiten beweegt.",
  "definition": "<p>De <strong>n. abducens</strong> ontspringt aan de grens van pons en medulla en heeft een lang intracraniëel verloop, door de sinus cavernosus naar de orbita. Daardoor is hij gevoelig voor verhoogde intracraniële druk. Uitval geeft horizontale dubbelbeelden en een oog dat niet goed naar buiten kan bewegen.</p>",
  "image_url": "",
  "wiki_title": "Abducens nerve",
  "match": "abducens",
  "option_only": true
 },
 "facialis": {
  "title": "N. facialis (VII)",
  "short": "De n. facialis (VII) innerveert de mimische spieren en verzorgt ook smaak (voorste 2/3 tong), traan- en speekselsecretie.",
  "definition": "<p>De <strong>n. facialis</strong> treedt uit bij de brughoek, loopt door het os temporale (canalis facialis) en verlaat de schedel via het foramen stylomastoideum; daarna splitst hij zich in de glandula parotidea in vijf takken. Naast de mimische spieren innerveert hij de m. stapedius. Bij een perifere facialisparese is de hele gezichtshelft verlamd, inclusief het voorhoofd.</p>",
  "image_url": "",
  "wiki_title": "Facial nerve",
  "match": "facialis",
  "option_only": true
 },
 "oculomotorius": {
  "title": "N. oculomotorius (III)",
  "short": "De n. oculomotorius (III) innerveert de meeste uitwendige oogspieren, de ooglidheffer en (parasympathisch) de pupilvernauwer en accommodatie.",
  "definition": "<p>De <strong>n. oculomotorius</strong> komt uit het mesencephalon en innerveert de m. rectus superior, inferior en medialis, de m. obliquus inferior en de m. levator palpebrae superioris.</p><p>Parasympathische vezels (uit de kern van Edinger-Westphal, schakeling in het ganglion ciliare) innerveren de m. sphincter pupillae (miosis) en de m. ciliaris (accommodatie). Uitval geeft een oog dat naar buiten-onder staat, ptosis en een wijde, lichtstijve pupil.</p>",
  "image_url": "",
  "wiki_title": "Oculomotor nerve",
  "match": "oculomotorius",
  "option_only": true
 },
 "thiazidediuretica": {
  "title": "Hydrochloorthiazide",
  "short": "Hydrochloorthiazide is een thiazidediureticum dat de Na⁺/Cl⁻-cotransporter in de distale tubulus remt; eerste keus bij hypertensie.",
  "definition": "<p><strong>Hydrochloorthiazide</strong> remt de <em>Na⁺/Cl⁻-cotransporter</em> (NCC) in de distale convoluut. Daardoor wordt meer natrium en water uitgescheiden; op de lange termijn daalt ook de perifere weerstand.</p><p>Het is een veelgebruikt eerstelijns antihypertensivum. Bijwerkingen: hypokaliëmie, hyponatriëmie, hypomagnesiëmie, hyperurikemie (jicht) en hyperglykemie; de calciumuitscheiding neemt juist af.</p>",
  "image_url": "",
  "wiki_title": "Hydrochlorothiazide",
  "match": "thiazidediuretica",
  "option_only": true
 },
 "valvulaire aortastenose": {
  "title": "Aortaklepstenose",
  "short": "Bij aortaklepstenose opent de aortaklep onvoldoende, waardoor de linkerventrikel tegen verhoogde weerstand moet pompen.",
  "definition": "<p><strong>Aortaklepstenose</strong> ontstaat meestal door degeneratieve verkalking op oudere leeftijd of bij een aangeboren bicuspide klep. De linkerventrikel hypertrofieert. Bij auscultatie is er een systolisch ejectiegeruis aan de basis, vaak uitstralend naar de carotiden. Klachten (angina, syncope bij inspanning, hartfalen) wijzen op een ernstige stenose; behandeling is klepvervanging (chirurgisch of TAVI).</p>",
  "image_url": "",
  "wiki_title": "Aortic stenosis",
  "match": "valvulaire aortastenose",
  "option_only": true
 },
 "mycobacterium tuberculosis (tuberculose)": {
  "title": "Mycobacterium tuberculosis",
  "short": "M. tuberculosis is de zuurvaste, langzaam groeiende staafbacterie die tuberculose veroorzaakt.",
  "definition": "<p><strong><em>Mycobacterium tuberculosis</em></strong> is een aerobe staafbacterie met een wasachtige, mycolzuurrijke celwand. Daardoor kleurt hij niet goed met de gramkleuring maar wel met de Ziehl-Neelsenkleuring (<em>zuurvast</em>).</p><p>Hij wordt aerogeen overgedragen, groeit zeer langzaam (weken in kweek) en overleeft in macrofagen. De afweer is vooral cellulair (T-cellen) en leidt tot granulomen met centrale verkazing. Hij veroorzaakt tuberculose.</p>",
  "image_url": "",
  "wiki_title": "Mycobacterium tuberculosis",
  "match": "mycobacterium tuberculosis (tuberculose)",
  "option_only": true
 },
 "bofvirus": {
  "title": "Bof",
  "short": "Bof is een virale infectie (paramyxovirus) met pijnlijke zwelling van de oorspeekselklieren; complicaties zijn orchitis, meningitis en doofheid.",
  "definition": "<p><strong>Bof</strong> (parotitis epidemica) wordt veroorzaakt door het bofvirus, een omhuld RNA-virus. Het wordt via druppels overgedragen.</p><p>Het typische beeld is een pijnlijke zwelling van één of beide <em>glandulae parotideae</em>, met koorts en malaise. Complicaties zijn orchitis (vooral na de puberteit), oöforitis, pancreatitis, meningitis en eenzijdige doofheid. Er wordt tegen gevaccineerd met het BMR-vaccin.</p>",
  "image_url": "",
  "wiki_title": "Mumps",
  "match": "bofvirus",
  "option_only": true
 },
 "holocriene signalering": {
  "title": "Holocriene secretie",
  "short": "Secretiewijze waarbij de hele kliercel uiteenvalt en zo zijn inhoud vrijgeeft (talgklier).",
  "definition": "<p>Bij <b>holocriene secretie</b> vult de kliercel zich met product en gaat vervolgens volledig te gronde; de celresten vormen samen het secreet.</p><p>De talgklier (glandula sebacea) is het klassieke voorbeeld: de cel wordt zelf het talg.</p>",
  "image_url": "",
  "wiki_title": "Holocrine",
  "match": "holocriene signalering",
  "option_only": true
 },
 "epstein-barrvirusinfectie": {
  "title": "Epstein-Barrvirus (EBV)",
  "short": "EBV is een herpesvirus dat B-cellen infecteert; het veroorzaakt de ziekte van Pfeiffer en is geassocieerd met enkele kankers.",
  "definition": "<p>Het <strong>Epstein-Barrvirus</strong> wordt via speeksel overgedragen. Op jonge leeftijd verloopt infectie vaak ongemerkt; bij adolescenten geeft het vaak mononucleosis infectiosa. Het virus blijft levenslang latent in B-cellen. EBV is geassocieerd met o.a. het Burkittlymfoom, het nasofarynxcarcinoom, sommige Hodgkinlymfomen en posttransplantatie-lymfoproliferatieve ziekte.</p>",
  "image_url": "",
  "wiki_title": "Epstein–Barr virus",
  "match": "epstein-barrvirusinfectie",
  "option_only": true
 },
 "herpes simplexvirus type 1": {
  "title": "Herpes simplexvirus (HSV)",
  "short": "Het herpes simplexvirus veroorzaakt blaasjes op huid en slijmvliezen en blijft daarna latent in sensibele ganglia.",
  "definition": "<p>Er zijn twee typen: <strong>HSV-1</strong> (vooral oraal, koortslip, gingivostomatitis) en <strong>HSV-2</strong> (vooral genitaal), al overlappen ze. Na de primaire infectie blijft het virus latent in sensibele ganglia en kan het reactiveren. Ernstige vormen zijn herpesencefalitis, keratitis, eczema herpeticum en neonatale herpes. Behandeling met (val)aciclovir.</p>",
  "image_url": "",
  "wiki_title": "Herpes simplex virus",
  "match": "herpes simplexvirus type 1",
  "option_only": true
 },
 "diabetes type 2": {
  "title": "Diabetes mellitus",
  "short": "Diabetes mellitus is een chronisch verhoogde bloedglucose door een tekort aan insuline (type 1) of verminderde insulinegevoeligheid met relatief tekort (type 2).",
  "definition": "<p>Bij <strong>diabetes mellitus</strong> is de bloedglucose chronisch te hoog. Bij <em>type 1</em> vernietigt een auto-immuunproces de bètacellen van de pancreas (absoluut insulinetekort, vaak op jonge leeftijd, risico op ketoacidose). Bij <em>type 2</em> is er insulineresistentie (vaak met overgewicht) en een tekortschietende insulineproductie.</p><p>Klachten: dorst, veel plassen, moeheid en gewichtsverlies. Op termijn ontstaan microvasculaire (retinopathie, nefropathie, neuropathie) en macrovasculaire complicaties (hart- en vaatziekten). Diagnose o.a. nuchter glucose ≥7,0 mmol/L of HbA1c ≥48 mmol/mol.</p>",
  "image_url": "",
  "wiki_title": "Diabetes",
  "match": "diabetes type 2",
  "option_only": true
 },
 "appendicitis acuta": {
  "title": "Appendicitis",
  "short": "Appendicitis is een ontsteking van de appendix, met buikpijn die vaak rond de navel begint en naar rechtsonder trekt.",
  "definition": "<p>Bij <strong>appendicitis</strong> raakt het lumen van de appendix afgesloten (bijv. door een fecoliet of lymfoïde hyperplasie), waarna ontsteking en infectie volgen. Klachten: pijn eerst rond de navel, later rechtsonder (McBurney), misselijkheid, koorts en lokale peritoneale prikkeling. Zonder behandeling kan perforatie optreden. Diagnose met echo en/of CT; behandeling meestal appendectomie.</p>",
  "image_url": "",
  "wiki_title": "Appendicitis",
  "match": "appendicitis acuta",
  "option_only": true
 },
 "het beenmerg": {
  "title": "Beenmerg",
  "short": "Weefsel in de holten van botten waar alle bloedcellen worden gevormd (hematopoëse).",
  "definition": "<p>Het <b>beenmerg</b> vult de holten van botten. In het rode beenmerg vindt de hematopoëse plaats: de vorming van rode en witte bloedcellen en bloedplaatjes uit stamcellen.</p><p>Het is tevens de plaats waar B-lymfocyten uitrijpen.</p>",
  "image_url": "",
  "wiki_title": "Bone marrow",
  "match": "het beenmerg",
  "option_only": true
 },
 "thiazide diureticum": {
  "title": "Hydrochloorthiazide",
  "short": "Hydrochloorthiazide is een thiazidediureticum dat de Na⁺/Cl⁻-cotransporter in de distale tubulus remt; eerste keus bij hypertensie.",
  "definition": "<p><strong>Hydrochloorthiazide</strong> remt de <em>Na⁺/Cl⁻-cotransporter</em> (NCC) in de distale convoluut. Daardoor wordt meer natrium en water uitgescheiden; op de lange termijn daalt ook de perifere weerstand.</p><p>Het is een veelgebruikt eerstelijns antihypertensivum. Bijwerkingen: hypokaliëmie, hyponatriëmie, hypomagnesiëmie, hyperurikemie (jicht) en hyperglykemie; de calciumuitscheiding neemt juist af.</p>",
  "image_url": "",
  "wiki_title": "Hydrochlorothiazide",
  "match": "thiazide diureticum",
  "option_only": true
 },
 "hydrochloortiazide": {
  "title": "Hydrochloorthiazide",
  "short": "Hydrochloorthiazide is een thiazidediureticum dat de Na⁺/Cl⁻-cotransporter in de distale tubulus remt; eerste keus bij hypertensie.",
  "definition": "<p><strong>Hydrochloorthiazide</strong> remt de <em>Na⁺/Cl⁻-cotransporter</em> (NCC) in de distale convoluut. Daardoor wordt meer natrium en water uitgescheiden; op de lange termijn daalt ook de perifere weerstand.</p><p>Het is een veelgebruikt eerstelijns antihypertensivum. Bijwerkingen: hypokaliëmie, hyponatriëmie, hypomagnesiëmie, hyperurikemie (jicht) en hyperglykemie; de calciumuitscheiding neemt juist af.</p>",
  "image_url": "",
  "wiki_title": "Hydrochlorothiazide",
  "match": "hydrochloortiazide",
  "option_only": true
 },
 "t cel": {
  "title": "T-cellen",
  "short": "T-cellen zijn lymfocyten die in de thymus rijpen en antigeen herkennen dat via MHC wordt gepresenteerd; CD4-cellen helpen, CD8-cellen doden geïnfecteerde cellen.",
  "definition": "<p><strong>T-cellen</strong> ontstaan in het beenmerg en rijpen in de <em>thymus</em>, waar positieve en negatieve selectie plaatsvindt. Hun T-celreceptor herkent alleen peptiden die door MHC-moleculen worden gepresenteerd.</p><p><em>CD4⁺ T-helpercellen</em> herkennen MHC-II en sturen de afweer met cytokines (Th1, Th2, Th17, Tfh); <em>CD8⁺ cytotoxische T-cellen</em> herkennen MHC-I en doden geïnfecteerde of tumorcellen; regulatoire T-cellen remmen de afweer. Ze vormen de cellulaire adaptieve immuniteit.</p>",
  "image_url": "",
  "wiki_title": "T cell",
  "match": "t cel",
  "option_only": true
 },
 "b cel": {
  "title": "B-cellen",
  "short": "B-cellen zijn lymfocyten die na activatie uitrijpen tot plasmacellen die antilichamen maken; ze rijpen in het beenmerg.",
  "definition": "<p><strong>B-cellen</strong> ontstaan en rijpen in het beenmerg. Elke B-cel draagt een unieke B-celreceptor (membraangebonden antilichaam).</p><p>Na binding van een antigeen en meestal hulp van een T-helpercel (in de kiemcentra van lymfeklieren) prolifereren ze en differentiëren ze tot <em>plasmacellen</em> (antilichaamproductie) en geheugen-B-cellen. Daarbij vinden klasseswitch en affiniteitsrijping plaats. B-cellen kunnen ook antigeen presenteren.</p>",
  "image_url": "",
  "wiki_title": "B cell",
  "match": "b cel",
  "option_only": true
 },
 "streptococcus pneumoniae (pneumokok)": {
  "title": "Streptococcus pneumoniae",
  "short": "De pneumokok is een grampositieve diplokok met een kapsel; de belangrijkste verwekker van pneumonie, otitis media en bacteriële meningitis.",
  "definition": "<p><strong><em>Streptococcus pneumoniae</em></strong> (pneumokok) is een grampositieve, lancetvormige diplokok die α-hemolyse geeft op bloedagar. Het polysacharidekapsel is de belangrijkste virulentiefactor: het beschermt tegen fagocytose.</p><p>De pneumokok koloniseert de nasofarynx en is de meest voorkomende verwekker van de buiten het ziekenhuis opgelopen pneumonie, otitis media, sinusitis en bacteriële meningitis bij volwassenen. Kinderen en ouderen worden ertegen gevaccineerd.</p>",
  "image_url": "",
  "wiki_title": "Streptococcus pneumoniae",
  "match": "streptococcus pneumoniae (pneumokok)",
  "option_only": true
 },
 "diabetes mellitus 2": {
  "title": "Diabetes mellitus",
  "short": "Diabetes mellitus is een chronisch verhoogde bloedglucose door een tekort aan insuline (type 1) of verminderde insulinegevoeligheid met relatief tekort (type 2).",
  "definition": "<p>Bij <strong>diabetes mellitus</strong> is de bloedglucose chronisch te hoog. Bij <em>type 1</em> vernietigt een auto-immuunproces de bètacellen van de pancreas (absoluut insulinetekort, vaak op jonge leeftijd, risico op ketoacidose). Bij <em>type 2</em> is er insulineresistentie (vaak met overgewicht) en een tekortschietende insulineproductie.</p><p>Klachten: dorst, veel plassen, moeheid en gewichtsverlies. Op termijn ontstaan microvasculaire (retinopathie, nefropathie, neuropathie) en macrovasculaire complicaties (hart- en vaatziekten). Diagnose o.a. nuchter glucose ≥7,0 mmol/L of HbA1c ≥48 mmol/mol.</p>",
  "image_url": "",
  "wiki_title": "Diabetes",
  "match": "diabetes mellitus 2",
  "option_only": true
 },
 "overmatig alcoholgebruik": {
  "title": "Alcohol (ethanol)",
  "short": "Ethanol wordt in de lever afgebroken via acetaldehyde tot azijnzuur; overmatig gebruik schaadt lever, brein, hart en pancreas.",
  "definition": "<p><strong>Ethanol</strong> wordt vooral in de lever geoxideerd door <em>alcoholdehydrogenase</em> tot acetaldehyde en daarna door aldehydedehydrogenase tot acetaat. Hierbij ontstaat veel NADH, wat de gluconeogenese remt (hypoglykemie) en vetstapeling in de lever bevordert.</p><p>Chronisch overmatig gebruik geeft leververvetting, alcoholische hepatitis en cirrose, pancreatitis, cardiomyopathie, hypertensie, neuropathie, thiaminetekort (Wernicke-Korsakov) en een verhoogd risico op verschillende kankers.</p>",
  "image_url": "",
  "wiki_title": "Alcohol (drug)",
  "match": "overmatig alcoholgebruik",
  "option_only": true
 },
 "alcoholmisbruik": {
  "title": "Alcohol (ethanol)",
  "short": "Ethanol wordt in de lever afgebroken via acetaldehyde tot azijnzuur; overmatig gebruik schaadt lever, brein, hart en pancreas.",
  "definition": "<p><strong>Ethanol</strong> wordt vooral in de lever geoxideerd door <em>alcoholdehydrogenase</em> tot acetaldehyde en daarna door aldehydedehydrogenase tot acetaat. Hierbij ontstaat veel NADH, wat de gluconeogenese remt (hypoglykemie) en vetstapeling in de lever bevordert.</p><p>Chronisch overmatig gebruik geeft leververvetting, alcoholische hepatitis en cirrose, pancreatitis, cardiomyopathie, hypertensie, neuropathie, thiaminetekort (Wernicke-Korsakov) en een verhoogd risico op verschillende kankers.</p>",
  "image_url": "",
  "wiki_title": "Alcohol (drug)",
  "match": "alcoholmisbruik",
  "option_only": true
 },
 "hoge koorts": {
  "title": "Koorts",
  "short": "Koorts is een verhoogde lichaamstemperatuur (≥38,0 °C) doordat de hypothalamus het setpoint hoger instelt, meestal als reactie op infectie.",
  "definition": "<p>Bij <strong>koorts</strong> wordt het temperatuursetpoint in de hypothalamus verhoogd. Pyrogenen zoals bacteriële producten en cytokines (IL-1, IL-6, TNF) stimuleren daar de productie van prostaglandine E<sub>2</sub>.</p><p>Het lichaam ervaart de normale temperatuur dan als te koud: vasoconstrictie en rillingen verhogen de temperatuur. Als het setpoint weer daalt, volgen zweten en vasodilatatie. Koortsremmers (paracetamol, NSAID's) remmen de prostaglandinesynthese. Hyperthermie (bijv. hitteberoerte) is iets anders: daar is het setpoint níet verhoogd.</p>",
  "image_url": "",
  "wiki_title": "Fever",
  "match": "hoge koorts",
  "option_only": true
 },
 "globus pallidus externa": {
  "title": "Globus pallidus pars externa (GPe)",
  "short": "De GPe is onderdeel van de basale kernen en vormt een schakel in de indirecte route; hij remt de nucleus subthalamicus.",
  "definition": "<p>De <strong>globus pallidus pars externa</strong> is het laterale deel van de globus pallidus. Hij ontvangt remmende (GABA-erge) input van het striatum en stuurt zelf remmende projecties naar de nucleus subthalamicus.</p><p>Hij is een kernschakel van de <em>indirecte route</em> van de basale kernen (cortex → striatum → GPe → nucleus subthalamicus → GPi/SNr → thalamus), die beweging per saldo afremt.</p>",
  "image_url": "",
  "wiki_title": "Globus pallidus",
  "match": "globus pallidus externa",
  "option_only": true
 },
 "globus pallidus interna": {
  "title": "Globus pallidus pars interna (GPi)",
  "short": "De GPi is de belangrijkste uitgangskern van de basale kernen; hij remt (GABA-erg) de motorische thalamus.",
  "definition": "<p>De <strong>globus pallidus pars interna</strong> is samen met de substantia nigra pars reticulata de <em>uitgangskern</em> van de basale kernen. Hij geeft tonisch remmende GABA-erge output naar de motorische kernen van de thalamus.</p><p>De directe route (striatum → GPi) remt de GPi en ontremt zo de thalamus (meer beweging); de indirecte route versterkt via de nucleus subthalamicus juist de remming. De GPi is een doelwit bij diepe hersenstimulatie (o.a. dystonie, Parkinson).</p>",
  "image_url": "",
  "wiki_title": "Globus pallidus",
  "match": "globus pallidus interna",
  "option_only": true
 },
 "haemofilus influenzae type b": {
  "title": "Haemophilus influenzae",
  "short": "H. influenzae is een kleine gramnegatieve staaf die luchtweginfecties, otitis en (vroeger vaak) meningitis en epiglottitis bij kinderen veroorzaakt.",
  "definition": "<p><strong><em>Haemophilus influenzae</em></strong> is een kleine, gramnegatieve coccobacil. Ondanks de naam veroorzaakt hij geen influenza (dat is een virus).</p><p>Onomkapselde stammen veroorzaken otitis media, sinusitis en exacerbaties van COPD. Het omkapselde type b (Hib) veroorzaakte vroeger veel meningitis en epiglottitis bij jonge kinderen; sinds de Hib-vaccinatie is dat zeldzaam.</p>",
  "image_url": "",
  "wiki_title": "Haemophilus influenzae",
  "match": "haemofilus influenzae type b",
  "option_only": true
 },
 "haemophilus influenzae type b": {
  "title": "Haemophilus influenzae",
  "short": "H. influenzae is een kleine gramnegatieve staaf die luchtweginfecties, otitis en (vroeger vaak) meningitis en epiglottitis bij kinderen veroorzaakt.",
  "definition": "<p><strong><em>Haemophilus influenzae</em></strong> is een kleine, gramnegatieve coccobacil. Ondanks de naam veroorzaakt hij geen influenza (dat is een virus).</p><p>Onomkapselde stammen veroorzaken otitis media, sinusitis en exacerbaties van COPD. Het omkapselde type b (Hib) veroorzaakte vroeger veel meningitis en epiglottitis bij jonge kinderen; sinds de Hib-vaccinatie is dat zeldzaam.</p>",
  "image_url": "",
  "wiki_title": "Haemophilus influenzae",
  "match": "haemophilus influenzae type b",
  "option_only": true
 },
 "de ziekte van henoch schönlein": {
  "title": "IgA-vasculitis (Henoch-Schönlein)",
  "short": "IgA-vasculitis is een vasculitis van kleine vaten met IgA-neerslagen, vooral bij kinderen: palpabele purpura op de benen, buikpijn, artritis en nierbetrokkenheid.",
  "definition": "<p><strong>IgA-vasculitis</strong> (vroeger Henoch-Schönlein purpura) is de meest voorkomende vasculitis bij kinderen, vaak na een bovenste luchtweginfectie. IgA-bevattende immuuncomplexen slaan neer in de wand van kleine vaten.</p><p>Kenmerkende tetrade: <em>palpabele purpura</em> op billen en benen (bij normale bloedplaatjes), artralgie/artritis, koliekachtige buikpijn (soms invaginatie) en nierbetrokkenheid (hematurie, IgA-nefropathie-achtig beeld). Meestal zelflimiterend; nierfunctie vervolgen.</p>",
  "image_url": "",
  "wiki_title": "IgA vasculitis",
  "match": "de ziekte van henoch schönlein",
  "option_only": true
 },
 "het gesprekskader aangeven": {
  "title": "Gesprekskader bespreken",
  "short": "Het gesprekskader bespreken betekent aan het begin van een gesprek uitleggen wat het doel, de duur en de opbouw van het gesprek zijn.",
  "definition": "<p>Bij het <strong>bespreken van het gesprekskader</strong> vertelt de arts aan het begin wat de aanleiding en het doel van het gesprek zijn, hoeveel tijd er is, en hoe het gesprek ongeveer verloopt (bijvoorbeeld eerst vragen stellen, dan onderzoek, dan bespreken).</p><p>Het geeft de patiënt duidelijkheid en houvast, en vormt samen met agenderen het startpunt van een gestructureerd consult.</p>",
  "image_url": "",
  "wiki_title": "",
  "match": "het gesprekskader aangeven",
  "option_only": true
 }
};
