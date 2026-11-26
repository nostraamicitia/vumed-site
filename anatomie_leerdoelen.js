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
  var P = window.ANATOMIE_PLATEN || [];
  P.forEach(function (p) {
    var weg = NIET_IN_LEERDOELEN[p.id];
    if (weg && weg.length) p.items = p.items.filter(function (it) { return weg.indexOf(it.lat) < 0; });
  });
  window.ANATOMIE_PLATEN = P.filter(function (p) { return p.items.length; });
})();
