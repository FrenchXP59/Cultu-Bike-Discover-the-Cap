// src/data/placesData.js

export const PLACES_DATA = [
  // Point de départ (randonnée vélo)
  {
    id: 0,
    type: "depart",
    lieu: "Point de départ (randonnée vélo)",
    latitude: 43.566486552061555,
    longitude: 7.115823122714841,
    questions: [],
    info: "Ceci est votre point de départ pour la randonnée à vélo. Préparez-vous et vérifiez votre équipement avant de partir !",
    infoShort: "Point de départ stratégique pour débuter votre aventure à vélo sur le Cap d'Antibes.",
    infoLong:
      "Ce point de départ est idéalement situé pour vous lancer dans votre randonnée à vélo, vous offrant un accès rapide aux principaux sites touristiques et historiques du Cap d'Antibes. Préparez votre équipement et profitez pleinement de ce parcours qui allie sport et découverte culturelle.",
    photo: "/images/villas/depart.jpg",
    infoPlus: "Complétez ces informations plus tard."
  },
  {
    id: 1,
    lieu: "Villa Eilenroc",
    latitude: 43.54613,
    longitude: 7.13029,
    questions: [
      {
        id: 101,
        question: "Quel est le lien entre le nom 'Eilenroc' et l'histoire de cette villa ?",
        reponses_acceptables: ["Anagramme de Cornélie", "Cornélie", "Nom inversé de Cornélie", "Inversion de Cornélie", "Nom inversé", "Anagramme", "C'est une anagramme de Cornélie", "C'est le nom inversé de Cornélie", "Nom de Cornélie inversé", "Nom retourné de Cornélie", "Mot inversé de Cornélie", "C'est Cornélie à l'envers"],
        indice: "Lisez le nom à l’envers.",
        qcm: [
          "Un mot grec signifiant paradis",
          "Un hommage à une déesse",
          "Un nom provençal",
          "Anagramme de Cornélie"
        ],
        bonne_reponse: "Anagramme de Cornélie"
      }
    ],
    defi: "Trouvez et photographiez trois espèces différentes de roses dans les jardins de la villa.",
    infoShort: "Villa Eilenroc est un lieu emblématique dont le nom cache un jeu de lettres surprenant.",
    infoLong:
      "Villa Eilenroc est un joyau historique du Cap d'Antibes, dont le nom mystérieux, une anagramme de 'Cornélie', invite les visiteurs à découvrir une histoire riche en anecdotes et en légendes. Construite en 1867 par l’architecte Charles Garnier pour un riche hollandais, elle témoigne du faste de la Belle Époque. Située dans un cadre idyllique, la villa offre des jardins luxuriants où les roses s’épanouissent, symbolisant la beauté intemporelle de cette demeure. Plongez dans son univers et laissez-vous séduire par son charme unique.",
    photo: "/images/villas/villa-eilenroc.jpg",
    infoPlus: "Donnée en legs à la ville d’Antibes en 1982, la villa Eilenroc est aujourd’hui ouverte au public à certaines périodes de l’année. Son parc de 11 hectares, bordé par le sentier du littoral, abrite un jardin d'essences méditerranéennes et une oliveraie centenaire. À l'intérieur, la décoration préservée transporte les visiteurs dans l’opulence du XIXe siècle, avec du mobilier d’époque et des salons raffinés. Son huile d’olive, produite sur place, perpétue une tradition locale et s’inscrit dans le patrimoine vivant de la région."
  },
  {
    id: 2,
    lieu: "Villa Les Chênes Verts",
    latitude: 43.55012,
    longitude: 7.12456,
    questions: [
      {
        id: 201,
        question: "Quel célèbre écrivain français a séjourné régulièrement dans cette villa ?",
        reponses_acceptables: ["Jules Verne", "Verne", "Jules-Gabriel Verne", "Jules", "L'auteur de Vingt Mille Lieues sous les mers", "L'écrivain de Vingt Mille Lieues sous les mers", "L'auteur de Voyage au centre de la Terre", "L'écrivain de Voyage au centre de la Terre"],
        indice: "Il est l’auteur du 'Tour du monde en 80 jours'.",
        qcm: [
          "Victor Hugo",
          "Jules Verne",
          "Émile Zola",
          "Gustave Flaubert"
        ],
        bonne_reponse: "Jules Verne"
      }
    ],
    defi: "Décrivez en quelques mots la vue depuis la villa, en imitant le style de Jules Verne.",
    infoShort: "Villa Les Chênes Verts a accueilli Jules Verne et offre une vue panoramique inspirante.",
    infoLong:
      "Située au cœur du Cap d'Antibes, la Villa Les Chênes Verts est célèbre pour avoir accueilli Jules Verne, l’un des écrivains visionnaires les plus marquants du XIXe siècle. Face à une mer scintillante, ce havre de paix lui offrait un cadre propice à l’écriture et à la réflexion. La vue imprenable sur la Méditerranée et la végétation luxuriante du domaine ont nourri son imaginaire, influençant peut-être certaines de ses descriptions maritimes. Laissez-vous porter par l’histoire de cette villa, témoin discret du passage d’un génie littéraire.",
    photo: "/images/villas/villa-les-chenes-verts.jpg",
    infoPlus: "Construite au XIXe siècle, la villa doit son nom aux majestueux chênes verts qui parsèment son domaine. Longtemps propriété privée, elle est aujourd’hui un symbole du lien entre la littérature et la Côte d’Azur. Bien que peu de traces directes des écrits de Jules Verne y subsistent, son séjour ici témoigne de l’attraction irrésistible qu’Antibes exerçait sur les artistes et intellectuels de son époque. Son architecture discrète, mêlant élégance et simplicité, s’intègre harmonieusement dans le paysage méditerranéen environnant."
  },
  {
    id: 3,
    lieu: "Villa Thuret",
    latitude: 43.56401,
    longitude: 7.12416,
    questions: [
      {
        id: 301,
        question: "Quelle est la particularité botanique de cette villa ?",
        reponses_acceptables: ["Jardin d’acclimatation", "Centre de recherche botanique", "Acclimatation", "Jardin acclimatation", "Jardin botanique", "Jardin exotique", "Jardin d'essai", "Parc botanique", "Jardin de plantes exotiques", "Espace d’acclimatation botanique", "Lieu d’acclimatation des plantes"],
        indice: "Elle abrite un centre de recherche très spécial.",
        qcm: [
          "Jardin d’acclimatation",
          "Serre d’orchidées rares",
          "Verger d’agrumes anciens",
          "Arboretum de plantes médicinales"
        ],
        bonne_reponse: "Jardin d’acclimatation"
      }
    ],
    defi: "Identifiez et photographiez trois plantes exotiques dans le jardin.",
    infoShort: "Villa Thuret se distingue par son jardin d’acclimatation exceptionnel, un havre de biodiversité.",
    infoLong:
      "La Villa Thuret abrite un jardin d’acclimatation unique qui sert de laboratoire botanique en plein air. Créé au XIXe siècle par le botaniste Gustave Thuret, ce lieu fascinant a été conçu pour tester l’acclimatation de plantes exotiques sur la Côte d’Azur. Aujourd’hui, il rassemble plus de 2 500 espèces venues des quatre coins du monde, offrant aux visiteurs une promenade immersive à travers une diversité végétale exceptionnelle. Chaque visite réserve de nouvelles découvertes, entre science et émerveillement.",
    photo: "/images/villas/villa-thuret.jpg",
    infoPlus: "Classé Jardin Remarquable, le domaine de 3,5 hectares appartient aujourd’hui à l’INRAE, qui y mène des recherches sur l’adaptation des espèces végétales au climat méditerranéen. Les cyprès, eucalyptus, palmiers et autres essences rares en font un véritable musée vivant à ciel ouvert. En parcourant ses allées ombragées, on comprend pourquoi tant de scientifiques et de passionnés de botanique considèrent ce jardin comme un joyau du patrimoine naturel d’Antibes."
  },
  {
    id: 4,
    lieu: "Villa La Calade",
    latitude: 43.55769,
    longitude: 7.12249,
    questions: [
      {
        id: 401,
        question: "Quel style architectural caractérise cette villa construite en 1937 ?",
        reponses_acceptables: ["Style paquebot", "Paquebot", "Style paquebot des années 30", "Architecture paquebot", "Style Streamline Moderne", "Streamline Moderne", "Style Art Déco paquebot", "Art Déco paquebot", "Style inspiré des paquebots", "Design paquebot"],
        indice: "Pensez aux grands navires de l’époque.",
        qcm: [
          "Style provençal",
          "Style Art Déco",
          "Style paquebot",
          "Style néoclassique"
        ],
        bonne_reponse: "Style paquebot"
      }
    ],
    defi: "Trouvez et photographiez trois éléments architecturaux qui rappellent un navire sur la façade.",
    infoShort: "Villa La Calade, construite en 1937, séduit par son style paquebot, une rareté architecturale.",
    infoLong:
      "Construite en 1937, la Villa La Calade est un exemple fascinant du style paquebot, inspiré par l’architecture des grands liners transatlantiques. Ses lignes épurées, ses balcons en forme de ponts et ses hublots rappellent l’élégance des paquebots des années 30. Ce bijou moderniste, conçu pour marier innovation et raffinement, reflète l’audace architecturale de son époque. Située face à la Méditerranée, elle incarne à merveille le lien entre la mer et l’architecture avant-gardiste.",
    photo: "/images/villas/villa-la-calade.jpg",
    infoPlus: "La Villa La Calade illustre l’influence du mouvement Art Déco dans l’architecture balnéaire. Son style se caractérise par des courbes dynamiques, des terrasses en cascade et une luminosité exceptionnelle grâce à de larges baies vitrées. Elle a appartenu à **Max Heilbronn**, PDG des **Galeries Lafayette** et résistant pendant la Seconde Guerre mondiale. Peu de villas de ce type subsistent sur la Côte d’Azur, faisant d’elle une véritable curiosité architecturale. Aujourd’hui privée, elle continue de fasciner les amateurs d’architecture maritime et moderne."
  },
  {
    id: 5,
    lieu: "Villa Aujourd'hui",
    latitude: 43.55116,
    longitude: 7.11980,
    questions: [
      {
        id: 501,
        question: "Quel célèbre architecte américain a conçu cette villa en 1938 ?",
        reponses_acceptables: ["Barry Dierks", "Dierks", "Barry D.", "Barry Dierks architecte", "L'architecte Barry Dierks", "L'architecte américain Barry Dierks"],
        indice: "Son prénom est Barry.",
        qcm: [
          "Frank Lloyd Wright",
          "Barry Dierks",
          "Richard Neutra",
          "Louis Kahn"
        ],
        bonne_reponse: "Barry Dierks"
      }
    ],
    defi: "Réalisez un croquis rapide de la façade en mettant en évidence ses caractéristiques modernistes.",
    infoShort: "Villa Aujourd'hui est un chef-d'œuvre moderniste conçu par Barry Dierks.",
    infoLong:
      "Construite en 1938 par l'architecte américain Barry Dierks, la Villa Aujourd'hui est une référence du modernisme en Méditerranée. Avec ses lignes épurées, ses larges baies vitrées et sa façade audacieuse, elle incarne une vision avant-gardiste du luxe balnéaire. Conçue pour fusionner avec son environnement, elle offre une connexion unique entre l’intérieur et l’extérieur, captant la lumière et la douceur du climat du Cap d’Antibes. Cette villa est un témoignage exceptionnel du design architectural du XXe siècle.",
    photo: "/images/villas/villa-aujourdhui.jpg",
    infoPlus: "Villa Aujourd’hui fut l’une des résidences prisées du Cap d’Antibes, fréquentée par des personnalités du monde du cinéma et de la haute société. Son architecte, Barry Dierks, a marqué la Côte d’Azur avec ses réalisations modernistes emblématiques. Propriété privée, elle demeure un exemple rare du style Streamline Moderne, caractérisé par ses formes arrondies et son esthétique inspirée de l’aéronautique et des paquebots de l’époque. Son élégance intemporelle en fait un joyau architectural préservé."
  },
  {
    id: 6,
    lieu: "Villa Soleil (Cap-Eden-Roc)",
    latitude: 43.5491241,
    longitude: 7.1202982,
    questions: [
      {
        id: 601,
        question: "Quelle était la fonction originale de cette villa avant de devenir un hôtel de luxe ?",
        reponses_acceptables: ["Pavillon de chasse", "Chasse", "Ancien pavillon de chasse", "Résidence de chasse", "Maison de chasse", "Domaine de chasse", "Logis de chasse", "Pavillon dédié à la chasse"],
        indice: "Elle a été construite pour un homme de presse.",
        qcm: [
          "Résidence privée",
          "Sanatorium",
          "École d’été pour artistes",
          "Pavillon de chasse"
        ],
        bonne_reponse: "Pavillon de chasse"
      }
    ],
    defi: "Prenez une photo du célèbre rocher qui a donné son nom à l’hôtel du Cap-Eden-Roc.",
    infoShort: "Villa Soleil, initialement pavillon de chasse, est devenue un symbole du luxe au Cap-Eden-Roc.",
    infoLong:
      "Nichée au cœur du Cap-Eden-Roc, la Villa Soleil a connu une transformation spectaculaire. Conçue à l'origine comme pavillon de chasse pour Auguste de Villemessant, fondateur du Figaro, elle fut progressivement agrandie avant de devenir l'un des hôtels les plus emblématiques de la Côte d'Azur. Son architecture élégante et ses terrasses ouvertes sur la Méditerranée en font un lieu d’exception, prisé par les célébrités et la haute société depuis plus d'un siècle.",
    photo: "/images/villas/villa-soleil.jpg",
    infoPlus: "Devenue l’Hôtel du Cap-Eden-Roc, cette villa mythique a accueilli des figures légendaires du cinéma, de la littérature et de la politique, d’Ernest Hemingway à Elizabeth Taylor. Son cadre idyllique et son service d’exception en ont fait une référence en matière de luxe et d’art de vivre à la française. Son célèbre ponton et sa piscine d’eau de mer creusée dans la roche sont des symboles de l’élégance intemporelle qui définit cet établissement légendaire."
  },
  {
    id: 7,
    lieu: "Villa Bloc",
    latitude: 43.56536,
    longitude: 7.13458,
    questions: [
      {
        id: 701,
        question: "Quelle est la particularité architecturale unique de cette villa construite en 1959 ?",
        reponses_acceptables: ["Volumes suspendus", "Structure suspendue", "Architecture suspendue", "Éléments en porte-à-faux", "Volumes en porte-à-faux", "Conception en suspension", "Parties suspendues", "Éléments suspendus"],
        indice: "Pensez à la sculpture et à l’architecture combinées.",
        qcm: [
          "Entièrement souterraine",
          "Volumes suspendus",
          "Construite en verre",
          "Fait de matériaux recyclés"
        ],
        bonne_reponse: "Volumes suspendus"
      }
    ],
    defi: "Réalisez un dessin abstrait inspiré par les formes sculpturales de la villa.",
    infoShort: "Villa Bloc se distingue par ses volumes suspendus, une prouesse architecturale audacieuse.",
    infoLong:
      "Construite en 1959 par l’architecte André Bloc, la Villa Bloc est une véritable sculpture habitée qui défie les conventions architecturales. Ses volumes suspendus et imbriqués jouent avec la lumière, créant un équilibre subtil entre ombre et transparence. À mi-chemin entre l’art et l’architecture, elle incarne une approche visionnaire de l’espace, où chaque angle et surface raconte une histoire de modernité et d’expérimentation. Ce chef-d’œuvre unique attire les passionnés d’architecture et de design en quête d’innovation et de perspectives nouvelles.",
    photo: "/images/villas/villa-bloc.jpg",
    infoPlus: "Œuvre majeure d’André Bloc, la Villa Bloc est une illustration parfaite du courant moderniste et de l’architecture sculpturale. Largement inspiré par l’abstraction et le constructivisme, Bloc y a expérimenté des formes radicales, jouant sur la rupture des lignes traditionnelles. La villa s’intègre harmonieusement à son environnement naturel tout en affichant une esthétique brute et avant-gardiste. Aujourd’hui classée parmi les créations architecturales remarquables du XXe siècle, elle demeure un symbole de la fusion entre art, design et habitation."
  },
  {
    id: 8,
    lieu: "Port de l'olivette",
    latitude: 43.55117,
    longitude: 7.12038,
    questions: [
      {
        id: 801,
        question: "Quel est le principal attrait du Port de l’Olivette ?",
        reponses_acceptables: ["Port de pointus", "Bateaux traditionnels", "Bateaux en bois", "Vieux bateaux", "Port historique", "Port de bateaux traditionnels", "Port de bateaux en bois", "Port de vieux bateaux", "Port typique", "Petit port historique", "Port de pêche traditionnel", "Port avec des pointus"
        ],
        indice: "Ce sont des embarcations typiques de la Méditerranée.",
        qcm: [
          "Bateaux en fibre de verre",
          "Bateaux militaires",
          "Voiliers modernes",
          "Bateaux traditionnels"
        ],
        bonne_reponse: "Bateaux traditionnels"
      }
    ],
    defi: "Trouvez et photographiez trois pointus aux couleurs différentes et identifiez le nom inscrit sur l’un d’eux.",
    infoShort: "Le Port de l'Olivette est célèbre pour ses pointus traditionnels, symbole du patrimoine maritime.",
    infoLong:
      "Le Port de l'Olivette, situé au cœur du Cap d'Antibes, est un port historique où l'on peut encore admirer les traditionnels pointus. Ces bateaux en bois, aux couleurs variées, témoignent des savoir-faire anciens et de l'histoire maritime de la région. En flânant dans ce port authentique, vous découvrirez un univers riche en traditions et en récits passionnants sur la vie en bord de mer.",
    photo: "/images/villas/port-de-l-olivette.jpg",
    infoPlus: "Le Port de l’Olivette est entretenu par une association de passionnés qui veille à la conservation des pointus et au respect des traditions maritimes. Chaque hiver, ces bateaux sont sortis de l’eau pour être soigneusement restaurés et entretenus par leurs propriétaires, perpétuant un savoir-faire artisanal transmis de génération en génération. Contrairement aux ports modernes, l’Olivette est exclusivement réservé aux embarcations traditionnelles, offrant un cadre préservé et intemporel. Son ambiance chaleureuse et ses reflets colorés au coucher du soleil en font l’un des plus beaux joyaux maritimes de la Côte d’Azur."
  },
  {
    id: 9,
    lieu: "Villa La Vigie",
    latitude: 43.56457,
    longitude: 7.11559,
    questions: [
      {
        id: 901,
        question: "Quel célèbre couturier a possédé cette villa pendant plus de deux décennies ?",
        reponses_acceptables: ["Karl Lagerfeld", "Lagerfeld", "Karl", "Karl L.", "Le couturier Karl Lagerfeld", "Le styliste Karl Lagerfeld", "Lagerfeld Karl", "Le créateur Karl Lagerfeld"],
        indice: "Il est connu pour son style monochrome et ses lunettes noires.",
        qcm: [
          "Yves Saint Laurent",
          "Christian Dior",
          "Karl Lagerfeld",
          "Coco Chanel"
        ],
        bonne_reponse: "Karl Lagerfeld"
      }
    ],
    defi: "Prenez une photo de la villa mettant en valeur sa position dominante sur la mer.",
    infoShort: "Villa La Vigie, autrefois propriété d'un grand couturier, offre une vue imprenable sur la Méditerranée.",
    infoLong:
      "Perchée sur un promontoire dominant la Méditerranée, la Villa La Vigie est une demeure d’exception qui fut la résidence du célèbre couturier Karl Lagerfeld. Ce joyau architectural allie élégance classique et modernité, avec de vastes terrasses offrant un panorama spectaculaire sur la mer. Loin du tumulte, cette villa incarne un art de vivre sophistiqué, mêlant luxe, histoire et inspiration artistique dans un cadre idyllique.",
    photo: "/images/villas/villa-la-vigie.jpg",
    infoPlus: "Longtemps utilisée comme résidence d’été par Karl Lagerfeld, la Villa La Vigie reflète le goût du créateur pour le raffinement et l’exclusivité. Restaurée avec soin, elle conserve des éléments architecturaux remarquables tout en offrant des équipements luxueux. Son emplacement privilégié, entouré de pins et de jardins méditerranéens, en fait un lieu prisé par les amateurs de sérénité et d’élégance. Aujourd’hui, cette demeure iconique continue d’attirer l’attention, témoignant de son riche passé et de l’empreinte laissée par son illustre propriétaire."
  }
];