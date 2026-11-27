/* Anatomie-platen gefilterd op de leerdoelen (itemlijsten uit de practicumhandleidingen op Canvas,
   en voor Bouw en Bewegen de vakbrede "Itemlijst anatomie").
   Laad dit NA anatomie_platen.js: het haalt per plaat de structuren weg die niet in de itemlijst
   van dat vak staan. Wel gehouden: de bloedvoorziening, innervatie en lymfedrainage van genoemde
   organen en de porto-cavale/cavo-cavale anastomosen, omdat de itemlijsten die expliciet als leerstof noemen.
   Een plaat die hier niet staat, blijft heel. Een plaat die na filteren leeg is, verdwijnt.
   Bronnen (per vak):
   - Metabole systemen: PR1 Larynx en longen, PR2 Maagdarmkanaal (2024-2025)
   - Circulatie en volumeregulatie: Hart en urinewegen, Vaten en nieren
   - Homeostase: Autonome en endocriene organen
   - Bouw en Bewegen: Itemlijst anatomie + practica week 1-3 */
(function () {
  var NIET_IN_LEERDOELEN = {
    'humerus-scapula-ventraal': ['Fossa coronoidea', 'Angulus inferior scapulae', 'Fossa subscapularis'],
    'venen-romp-ventraal': ['V. subclavia', 'V. axillaris', 'V. thoracica lateralis', 'V. saphena magna', 'V. cephalica',
      'Vv. jugulares (externa, interna, anterior)'],
    'arterien-maag': [],
    'arterien-colon': [],
    'aorta-abdominalis': ['Aa. phrenicae inferiores', 'A. suprarenalis media', 'A. renalis dextra', 'Aa. lumbales',
      'Aa. iliacae communes', 'A. iliaca interna', 'A. iliaca externa', 'A. epigastrica inferior', 'A. sacralis mediana',
      'Aa. testiculares / ovaricae'],
    'bijnieren-nieren': ['Glandula suprarenalis dextra', 'A. suprarenalis media dextra', 'Aa. suprarenales superiores dextrae',
      'V. phrenica inferior sinistra', 'A. phrenica inferior sinistra', 'A. suprarenalis inferior sinistra',
      'V. suprarenalis sinistra', 'A. en v. testicularis / ovarica sinistra', 'A. en v. renalis dextra', 'Ureter dexter'],
    'venen-cava-inferior': ['Vv. phrenicae inferiores', 'V. renalis dextra', 'Vv. lumbales', 'V. iliaca communis',
      'V. sacralis mediana', 'V. iliaca externa', 'V. iliaca interna', 'Vv. ovaricae / testiculares', 'Vv. suprarenales sinistrae'],
    'buikorganen-in-situ': ['Vesica urinaria'],
    'bursa-omentalis': ['Ren dexter', 'Splen', 'Glandula suprarenalis sinistra', 'A. phrenica inferior sinistra'],
    'doorsnede-foramen-omentale': ['Splen', 'Ren sinister'],
    'lever': ['Lig. coronarium (pars hepatorenalis)', 'Fissura ligamenti venosi'],
    'jejunum-ileum': ['Tela submucosa', 'Tunica mucosa', 'Tunica serosa', 'Stratum longitudinale', 'Stratum circulare'],
    'sagittaal-buik': ['Vesica urinaria', 'Prostata', 'Vesicula seminalis', 'Excavatio rectovesicalis'],
    'transversaal-T12': ['Ren dexter', 'Glandula suprarenalis sinistra', 'Lig. splenorenale', 'Splen', 'M. rectus abdominis'],
    'transversaal-L2': ['Sulcus paracolicus dexter', 'M. psoas major', 'Discus intervertebralis (L2–L3)', 'M. erector spinae',
      'M. quadratus lumborum', 'M. obliquus internus abdominis', 'Linea alba'],
    'nier-doorsnede': ['Corpus adiposum sinus renalis', 'Radii medullares'],
    'longen-in-situ': ['V. jugularis interna', 'Glandula thyroidea'],
    'longprojectie': ['Clavicula', 'Splen'],
    'longen-mediaal': ['Impressio tracheae et oesophagi', 'Sulcus aortae descendentis', 'Sulcus oesophageus',
      'Sulcus a. subclaviae', 'Impressio oesophagea', 'Impressio trachealis', 'Lig. pulmonale'],
    'mediastinum-ventraal': ['V. jugularis interna sinistra'],
    'larynx-voor-achter': ['Membrana thyrohyoidea', 'Cartilago corniculata'],
    'larynx-mediaal': ['Membrana thyrohyoidea', 'Cartilago corniculata', 'Lig. thyroepiglotticum'],
    'schildklier-ventraal': ['A. et v. subclavia', 'Membrana thyrohyoidea', 'Cartilago thyroidea (lamina)', 'M. cricothyroideus',
      'Nodi lymphoidei pretracheales', 'Costa I'],
    'bijschildklieren-lateraal': ['Oesophagus', 'M. constrictor pharyngis inferior'],
  };
  /* Hoe vaak komt de structuur voor in vragen van de oude tentamens van dat vak (vraagtekst + opties,
     zonder uitleg)? Gegenereerd met een woordmatch; alleen gebruikt waar `asked` nog niet met de hand is ingevuld.
     Let op: een orgaannaam (oesophagus, pancreas) telt ook mee in vragen die niet over anatomie gaan. */
  var IN_TENTAMENVRAGEN = {
    "arterien-maag": {
    "Aorta abdominalis": 1,
    "Truncus coeliacus": 2
    },
    "arterien-colon": {
    "A. mesenterica superior": 1,
    "A. colica media": 1,
    "A. mesenterica inferior": 1
    },
    "aorta-abdominalis": {
    "Truncus coeliacus": 2,
    "A. mesenterica inferior": 1,
    "Aorta abdominalis": 1,
    "A. mesenterica superior": 1
    },
    "bijnieren-nieren": {
    "Oesophagus": 47,
    "Truncus coeliacus": 2,
    "A. mesenterica inferior": 1,
    "A. mesenterica superior": 1,
    "Aorta abdominalis": 1,
    "V. cava inferior": 4
    },
    "venen-cava-inferior": {
    "V. cava inferior": 4,
    "Vv. hepaticae": 1
    },
    "vena-portae": {
    "V. gastrica dextra": 1,
    "V. portae hepatis": 2,
    "V. mesenterica superior": 1,
    "V. gastrica sinistra": 1
    },
    "buikorganen-in-situ": {
    "Omentum majus": 4,
    "Colon transversum": 6,
    "Taeniae coli": 1,
    "Flexura coli dextra": 1,
    "Intestinum tenue": 23,
    "Colon ascendens": 9,
    "Caecum": 5,
    "Colon sigmoideum": 14
    },
    "bursa-omentalis": {
    "Vesica biliaris": 8,
    "Caput pancreatis": 1,
    "Flexura coli sinistra": 1
    },
    "doorsnede-foramen-omentale": {
    "V. cava inferior": 4,
    "Colon transversum": 6,
    "Bursa omentalis": 2,
    "Pancreas": 31,
    "Omentum majus": 4,
    "Aorta abdominalis": 1
    },
    "galwegen": {
    "Ductus hepaticus communis": 1,
    "Ductus cysticus": 1,
    "Ductus choledochus": 2,
    "Colon transversum": 6,
    "Ductus hepaticus dexter et sinister": 1,
    "Caput pancreatis": 1
    },
    "lever": {
    "Vesica biliaris": 8,
    "Ductus choledochus": 2,
    "Area nuda": 1,
    "V. cava inferior": 4,
    "Porta hepatis": 3,
    "Lig. teres hepatis": 2,
    "Lig. falciforme": 2
    },
    "jejunum-ileum": {
    "Plicae circulares": 4,
    "Mesenterium": 5
    },
    "colon": {
    "Omentum majus": 4,
    "Colon transversum": 6,
    "Appendices omentales": 2,
    "Colon ascendens": 9,
    "Caecum": 5,
    "Rectum": 14,
    "Colon sigmoideum": 14,
    "Colon descendens": 12
    },
    "sagittaal-buik": {
    "Omentum minus": 3,
    "Bursa omentalis": 2,
    "Colon transversum": 6,
    "Intestinum tenue": 23,
    "Rectum": 14,
    "Aorta abdominalis": 1,
    "Pancreas": 31,
    "Truncus coeliacus": 2,
    "Oesophagus": 47
    },
    "transversaal-T12": {
    "Lig. falciforme": 2,
    "V. portae hepatis": 2,
    "V. cava inferior": 4,
    "Bursa omentalis": 2,
    "Aorta abdominalis": 1,
    "Omentum minus": 3
    },
    "transversaal-L2": {
    "Ileum": 14,
    "Colon ascendens": 9,
    "V. cava inferior": 4,
    "Aorta abdominalis": 1,
    "Colon descendens": 12,
    "Jejunum": 18,
    "Omentum majus": 4,
    "Appendices omentales": 2
    },
    "nier-doorsnede": {
    "Cortex renalis": 3,
    "Medulla renalis (pyramides renales)": 3,
    "Ureter": 18,
    "Pelvis renalis": 7
    },
    "longen-in-situ": {
    "Pleura parietalis (pars costalis)": 3,
    "Fissura obliqua": 3,
    "Pleura parietalis (pars diaphragmatica)": 3,
    "A. et v. thoracica interna": 1
    },
    "longprojectie": {
    "Trachea": 18,
    "Recessus costodiaphragmaticus": 1,
    "Vesica biliaris": 8,
    "Arcus aortae": 4,
    "Apex pulmonis": 6
    },
    "longen-mediaal": {
    "Hilum pulmonis": 5,
    "Apex pulmonis": 6
    },
    "mediastinum-ventraal": {
    "Thymus": 2,
    "Truncus brachiocephalicus": 2,
    "V. cava superior": 6,
    "Pleura parietalis (pars costalis)": 3,
    "Pleura parietalis (pars diaphragmatica)": 3,
    "Pleura parietalis (pars mediastinalis)": 3,
    "Pericardium": 1,
    "N. laryngeus recurrens sinister": 1,
    "Arcus aortae": 4
    },
    "larynx-voor-achter": {
    "Epiglottis": 7,
    "Os hyoideum": 5,
    "Cartilago arytenoidea": 2,
    "Lig. vocale": 7,
    "Cartilago cricoidea": 5,
    "Trachea": 18
    },
    "larynx-mediaal": {
    "Epiglottis": 7,
    "Os hyoideum": 5,
    "Cartilago arytenoidea": 2,
    "Lig. vocale": 7,
    "Lig. cricothyroideum": 3,
    "Cartilago cricoidea": 5
    },
    "schildklier-ventraal": {
    "A. et v. thyroidea superior": 4,
    "A. carotis communis": 4,
    "A. thyroidea inferior": 4,
    "V. thyroidea inferior": 1,
    "Truncus thyrocervicalis": 3,
    "N. vagus (rechts)": 11,
    "Lobus pyramidalis": 1,
    "Lobus dexter glandulae thyroideae": 1,
    "Lobus sinister glandulae thyroideae": 1,
    "Isthmus glandulae thyroideae": 1,
    "N. vagus (links)": 11
    },
    "bijschildklieren-lateraal": {
    "A. carotis communis": 4,
    "A. thyroidea inferior": 4,
    "A. thyroidea superior": 4,
    "Glandula thyroidea (lobus dexter)": 1,
    "Glandula parathyroidea inferior": 2
    }
    };
  var P = window.ANATOMIE_PLATEN || [];
  P.forEach(function (p) {
    var weg = NIET_IN_LEERDOELEN[p.id];
    if (weg && weg.length) p.items = p.items.filter(function (it) { return weg.indexOf(it.lat) < 0; });
    var tel = IN_TENTAMENVRAGEN[p.id] || {};
    p.items.forEach(function (it) { if (it.asked == null && tel[it.lat]) it.asked = tel[it.lat]; });
  });
  window.ANATOMIE_PLATEN = P.filter(function (p) { return p.items.length; });
})();
