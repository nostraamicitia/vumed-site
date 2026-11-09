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
  "match": "streptococcus pneumoniae|s. pneumoniae|pneumokok|pneumokokken",
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
  "match": "haemophilus influenzae|h. influenzae|haemophilus",
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
  "match": "hydrochloorthiazide|hctz|thiazide|thiazidediureticum",
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
  "match": "alcohol|ethanol|alcoholgebruik",
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
  "match": "globus pallidus pars externa|gpe|globus pallidus externus",
  "option_only": true
 },
 "globus pallidus pars interna": {
  "title": "Globus pallidus pars interna (GPi)",
  "short": "De GPi is de belangrijkste uitgangskern van de basale kernen; hij remt (GABA-erg) de motorische thalamus.",
  "definition": "<p>De <strong>globus pallidus pars interna</strong> is samen met de substantia nigra pars reticulata de <em>uitgangskern</em> van de basale kernen. Hij geeft tonisch remmende GABA-erge output naar de motorische kernen van de thalamus.</p><p>De directe route (striatum → GPi) remt de GPi en ontremt zo de thalamus (meer beweging); de indirecte route versterkt via de nucleus subthalamicus juist de remming. De GPi is een doelwit bij diepe hersenstimulatie (o.a. dystonie, Parkinson).</p>",
  "image_url": "",
  "wiki_title": "Globus pallidus",
  "match": "globus pallidus pars interna|gpi|globus pallidus internus",
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
  "short": "In de isovolumetrische relaxatie ontspant de ventrikel terwijl alle kleppen dicht zijn: de druk daalt snel, het volume blijft gelijk.",
  "definition": "<p>De <strong>isovolumetrische relaxatiefase</strong> is het begin van de diastole. Ze begint bij het sluiten van de aorta- en pulmonalisklep (tweede harttoon) en eindigt wanneer de AV-kleppen opengaan.</p><p>In deze fase ontspant het myocard terwijl alle vier de kleppen gesloten zijn: de ventrikeldruk daalt snel, maar het ventrikelvolume blijft gelijk (het eindsystolisch volume).</p>",
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
  "match": "diabetes mellitus|diabetes|suikerziekte|diabetes mellitus type 2|diabetes mellitus type 1",
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
  "match": "henoch-schönlein vasculitis|henoch-schönlein purpura|henoch schönlein|iga-vasculitis|purpura van henoch-schönlein",
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
  "match": "koorts|febris|pyrexie",
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
  "match": "b-cellen|b cellen|b-lymfocyten|b-cel|b-lymfocyt",
  "option_only": true
 },
 "t-cellen": {
  "title": "T-cellen",
  "short": "T-cellen zijn lymfocyten die in de thymus rijpen en antigeen herkennen dat via MHC wordt gepresenteerd; CD4-cellen helpen, CD8-cellen doden geïnfecteerde cellen.",
  "definition": "<p><strong>T-cellen</strong> ontstaan in het beenmerg en rijpen in de <em>thymus</em>, waar positieve en negatieve selectie plaatsvindt. Hun T-celreceptor herkent alleen peptiden die door MHC-moleculen worden gepresenteerd.</p><p><em>CD4⁺ T-helpercellen</em> herkennen MHC-II en sturen de afweer met cytokines (Th1, Th2, Th17, Tfh); <em>CD8⁺ cytotoxische T-cellen</em> herkennen MHC-I en doden geïnfecteerde of tumorcellen; regulatoire T-cellen remmen de afweer. Ze vormen de cellulaire adaptieve immuniteit.</p>",
  "image_url": "",
  "wiki_title": "T cell",
  "match": "t-cellen|t cellen|t-lymfocyten|t-cel|t-lymfocyt",
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
  "match": "gesprekskader bespreken|gesprekskader|kader schetsen",
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
 }
};
