export const PLACES_DATA = [
  {
    id: 0,
    type: "start",
    name: "Starting Point (Bike Tour)",
    latitude: 43.566486552061555,
    longitude: 7.115823122714841,
    questions: [],
    info: "This is your starting point for the bike tour. Get ready and check your equipment before you set off!",
    infoShort: "Get your wheels ready – this is where your cultural ride begins!",
    infoLong:
      "This starting point is perfectly located to launch your bike tour, giving you quick access to the main historical and tourist sites of Cap d'Antibes. Prepare your gear and fully enjoy this route that blends sport with cultural discovery.",
    photo: "/images/villas/depart.jpg",
    infoPlus: "More details to come."
  },
  {
    id: 1,
    name: "Villa Eilenroc",
    latitude: 43.54613,
    longitude: 7.13029,
    questions: [
      {
        id: 101,
        question: "What is the link between the name ‘Eilenroc’ and the history of this villa?",
        reponses_acceptables: [
          "Anagram of Cornélie",
          "Cornélie",
          "Name reversed from Cornélie",
          "Anagram",
          "It's an anagram of Cornélie",
          "It's Cornélie spelled backwards"
        ],
        indice: "Read the name backwards.",
        qcm: [
          "A Greek word meaning paradise",
          "A tribute to a goddess",
          "A Provencal name",
          "Anagram of Cornélie"
        ],
        bonne_reponse: "Anagram of Cornélie"
      }
    ],
    defi:
      "If the villa is open, photograph three different roses in the garden. Identify them or invent your own names.",
    infoShort: "374 Av. Mrs Beaumont, 06160 Antibes",
    infoLong:
      "Villa Eilenroc is a historic gem of Cap d'Antibes whose mysterious name is an anagram of 'Cornélie'. Built in 1867 by architect Charles Garnier for a wealthy Dutch patron, it reflects Belle Époque opulence. Its lush gardens, where roses bloom, symbolize the timeless beauty of this estate. Immerse yourself in its enchanting atmosphere and let its unique charm captivate you.",
    photo: "/images/villas/villa-eilenroc.jpg",
    infoPlus:
      "Bequeathed to the city of Antibes in 1982, Villa Eilenroc is open to the public at certain times of the year. Its 11-hectare park, bordered by the coastal path, hosts a Mediterranean plant garden and a centenary olive grove. Inside, period furnishings evoke 19th-century luxury. Its locally-pressed olive oil continues a living regional tradition."
  },
  {
    id: 2,
    name: "Villa Les Chênes Verts",
    latitude: 43.55012,
    longitude: 7.12456,
    questions: [
      {
        id: 201,
        question: "Which famous French writer regularly stayed at this villa?",
        reponses_acceptables: [
          "Jules Verne",
          "Verne",
          "Jules-Gabriel Verne",
          "The author of Twenty Thousand Leagues Under the Sea"
        ],
        indice: "He also wrote ‘Around the World in 80 Days’.",
        qcm: [
          "Victor Hugo",
          "Jules Verne",
          "Émile Zola",
          "Gustave Flaubert"
        ],
        bonne_reponse: "Jules Verne"
      }
    ],
    defi:
      "Observe the villa’s front steps. What do the decorative elements symbolize? Hint: think of a famous 19th-century invention…",
    infoShort: "148 Bd J. F. Kennedy, 06160 Antibes",
    infoLong:
      "Located at the heart of Cap d'Antibes, Villa Les Chênes Verts is known for hosting Jules Verne, one of the 19th-century’s most visionary writers. Overlooking a sparkling sea, this peaceful retreat inspired much of his maritime imagination. Enjoy its literary heritage and lush surroundings.",
    photo: "/images/villas/villa-les-chenes-verts.jpg",
    infoPlus:
      "Built in the 19th century, the villa is named after the majestic evergreen oaks on its grounds. Though few direct traces of Verne’s works remain, his stay here testifies to Antibes’ irresistible draw for artists and intellectuals of the era."
  },
  {
    id: 3,
    name: "Villa Thuret",
    latitude: 43.56401,
    longitude: 7.12416,
    questions: [
      {
        id: 301,
        question: "What is this villa’s botanical specialty?",
        reponses_acceptables: [
          "Acclimatization garden",
          "Botanical research center",
          "Exotic plant trial garden"
        ],
        indice: "It hosts a very special research center.",
        qcm: [
          "Acclimatization garden",
          "Rare orchid greenhouse",
          "Ancient citrus orchard",
          "Medicinal plant arboretum"
        ],
        bonne_reponse: "Acclimatization garden"
      }
    ],
    defi:
      "From the gate or path, try to spot and photograph three different plant species. If the garden is open, look for exotic plants (signs posted). Otherwise, note what you see and imagine their origins.",
    infoShort: "90 Chemin Gustave Raymond, 06160 Antibes",
    infoLong:
      "Villa Thuret houses a unique botanical acclimatization garden that served as an outdoor research lab. Created in the 19th century by botanist Gustave Thuret, it now contains over 2,500 species from around the world. A must for plant lovers and science enthusiasts alike.",
    photo: "/images/villas/villa-thuret.jpg",
    infoPlus:
      "Designated a Remarkable Garden, the 3.5-hectare estate is now managed by INRAE, which studies species’ adaptation to the Mediterranean climate. Cypress, eucalyptus, palms and other rare specimens form a living open-air museum."
  },
  {
    id: 4,
    name: "Villa La Calade",
    latitude: 43.55769,
    longitude: 7.12249,
    questions: [
      {
        id: 401,
        question: "Which architectural style characterizes this villa built in 1937?",
        reponses_acceptables: [
          "Streamline Moderne",
          "Ship-style architecture",
          "Ocean-liner inspired",
          "Ocean-liner style",
          "Paquebot style",
          "Art Deco paquebot"
        ],
        indice: "Think of the great ocean liners of the era — rounded balconies, metal railings, and nautical lines.",
        qcm: [
          "Mediterranean revival",
          "Streamline Moderne",
          "Classical Art Deco",
          "Neoclassical"
        ],
        bonne_reponse: "Streamline Moderne"
      }
    ],
    defi: "Find and photograph three architectural elements on the façade that evoke a ship.",
    infoShort: "81 Passage du Diable, 06160 Antibes",
    infoLong:
      "Built in 1937, Villa La Calade is a striking example of ship-style architecture inspired by transatlantic liners. Its sleek lines, terrace-like balconies and porthole windows echo 1930s elegance. Designed to blend innovation with refinement, it faces the Mediterranean, forging a bond between sea and modernism.",
    photo: "/images/villas/villa-la-calade.jpg",
    infoPlus:
      "This modernist gem, once owned by Max Heilbronn of Galeries Lafayette, is one of the Côte d’Azur’s rare paquebot-style villas. It continues to fascinate architecture buffs with its curved terraces and panoramic sea views."
  },
  {
    id: 5,
    name: "Villa Aujourd'hui",
    latitude: 43.55116,
    longitude: 7.1198,
    questions: [
      {
        id: 501,
        question: "Which famous American architect designed this villa in 1938?",
        reponses_acceptables: ["Barry Dierks", "Dierks", "Barry"],
        indice: "His first name is Barry.",
        qcm: [
          "Frank Lloyd Wright",
          "Barry Dierks",
          "Richard Neutra",
          "Louis Kahn"
        ],
        bonne_reponse: "Barry Dierks"
      }
    ],
    defi:
      "Sketch the façade, capturing its modernist flair.",
    infoShort: "1546 Boulevard Maréchal Juin, Cap d'Antibes",
    infoLong:
      "Designed in 1938 by American architect Barry Dierks, Villa Aujourd'hui exemplifies Mediterranean modernism. Its clean lines, vast windows and daring façade blend interior and exterior, capturing light and the region’s gentle climate.",
    photo: "/images/villas/villa-aujourdhui.jpg",
    infoPlus:
      "A favorite among cinema and high-society figures, Villa Aujourd'hui remains a rare Streamline Moderne icon, its curves inspired by aeronautics and ocean liners."
  },
  {
    id: 6,
    name: "Villa Soleil (Cap-Eden-Roc)",
    latitude: 43.5491241,
    longitude: 7.1202982,
    questions: [
      {
        id: 601,
        question: "What was this villa’s original function before becoming a luxury hotel?",
        reponses_acceptables: ["Hunting lodge", "Pavilion for hunting"],
        indice: "It was built for a press magnate.",
        qcm: [
          "Private residence",
          "Sanatorium",
          "Summer art school",
          "Hunting lodge"
        ],
        bonne_reponse: "Hunting lodge"
      }
    ],
    defi:
      "Photograph the gate or the umbrella pines that hide the villa. A way to capture a legendary site without seeing it directly.",
    infoShort: "167-165 Bd J. F. Kennedy, 06160 Antibes",
    infoLong:
      "Nestled in Cap-Eden-Roc, Villa Soleil began as Auguste de Villemessant’s hunting lodge. Over time it evolved into one of the Côte d’Azur’s most iconic hotels, beloved by celebrities for its elegant architecture and sea-facing terraces.",
    photo: "/images/villas/villa-soleil.jpg",
    infoPlus:
      "Now the Hôtel du Cap-Eden-Roc, it has hosted legends from Hemingway to Elizabeth Taylor. Its cliffside pool and iconic jetty epitomize timeless luxury."
  },
  {
    id: 7,
    name: "Villa Bloc",
    latitude: 43.56536,
    longitude: 7.13458,
    questions: [
      {
        id: 701,
        question: "What unique architectural feature defines this villa built in 1959?",
        reponses_acceptables: ["Cantilevered volumes", "Suspended structure"],
        indice: "Think of sculpture meeting architecture.",
        qcm: [
          "Fully underground",
          "Cantilevered volumes",
          "Glass structure",
          "Recycled materials"
        ],
        bonne_reponse: "Cantilevered volumes"
      }
    ],
    defi:
      "Create an abstract drawing inspired by the sculptural forms of the villa.",
    infoShort: "31 Avenue Aimée-Bourreau, Antibes",
    infoLong:
      "Designed by André Bloc in 1959, Villa Bloc is a radical sculptural residence that defies architectural norms. Its suspended volumes and interlocking forms play with light and shadow, merging art and architecture in an avant-garde vision.",
    photo: "/images/villas/villa-bloc.jpg",
    infoPlus:
      "A masterpiece of modernist sculpture, Villa Bloc remains a landmark of 20th-century innovation on the Côte d’Azur."
  },
  {
    id: 8,
    name: "Port de l’Olivette",
    latitude: 43.55117,
    longitude: 7.12038,
    questions: [
      {
        id: 801,
        question: "What is the main attraction at Port de l’Olivette?",
        reponses_acceptables: ["Traditional fishing boats", "Wooden boats", "Historic pointus"],
        indice: "These are typical Mediterranean vessels.",
        qcm: [
          "Fiberglass boats",
          "Military vessels",
          "Modern yachts",
          "Traditional wooden boats"
        ],
        bonne_reponse: "Traditional wooden boats"
      }
    ],
    defi:
      "Photograph three pointus (traditional boats) in different colors and note the name on one of them.",
    infoShort: "1471 Boulevard du Maréchal Juin, Antibes",
    infoLong:
      "Port de l’Olivette is a historic harbor at Cap d'Antibes where traditional wooden pointus still dock. Their vibrant hues and artisanal curves embody the spirit of the Mediterranean’s maritime heritage.",
    photo: "/images/villas/port-de-l-olivette.jpg",
    infoPlus:
      "Maintained by local enthusiasts, these boats are cared for each winter, preserving centuries-old traditions. Unlike modern marinas, Olivette is exclusive to these historic vessels."
  },
  {
    id: 9,
    name: "Villa La Vigie",
    latitude: 43.564188,
    longitude: 7.115879,
    questions: [
      {
        id: 901,
        question: "Which famous fashion designer owned this villa for over a decade?",
        reponses_acceptables: ["Karl Lagerfeld", "Lagerfeld"],
        indice: "Known for his monochrome outfits and dark sunglasses.",
        qcm: [
          "Yves Saint Laurent",
          "Christian Dior",
          "Karl Lagerfeld",
          "Coco Chanel"
        ],
        bonne_reponse: "Karl Lagerfeld"
      }
    ],
    defi:
      "From Port Crouton, follow the coastal path toward Villa La Vigie. Sketch or photograph the villa from an unusual angle. Bonus: imagine a fashion shoot here.",
    infoShort: "30-37 Boulevard Édouard-Baudoin, Antibes",
    infoLong:
      "Built in 1902 by Sir William Ingram, Villa La Vigie exudes classic charm and exotic landscaping. Karl Lagerfeld made it his home from 1986, filling it with his collections in a timeless, minimalist setting overlooking the Mediterranean.",
    photo: "/images/villas/villa-la-vigie.jpg",
    infoPlus:
      "Restored with care, it retains original architectural details alongside luxurious modern comforts. Surrounded by pine groves, it remains a serene retreat for design and fashion lovers."
  },
  {
    id: 10,
    name: "Villa L’Olivette",
    latitude: 43.551153,
    longitude: 7.121158,
    questions: [
      {
        id: 1001,
        question: "Which comedic artist, known by a playful stage name, bought Villa L’Olivette in 1919?",
        reponses_acceptables: ["Dranem", "Armand Ménard", "Armand 'Dranem' Ménard"],
        indice: "His real name is Armand Ménard, but he chose an anacyclic pseudonym.",
        qcm: [
          "Maurice Chevalier",
          "Armand 'Dranem' Ménard",
          "Charles Trenet",
          "Henri Garat"
        ],
        bonne_reponse: "Armand 'Dranem' Ménard"
      }
    ],
    defi:
      "Strike your best music-hall pose in front of one of the sculpted busts — be the Dranem of the day!",
    infoShort: "1421 Boulevard du Maréchal Juin, Antibes",
    infoLong:
      "Built in 1903 by a decorative painter, Villa L’Olivette became the home of comedian Dranem in 1919. Facing the lovely Olivette beach, its joyful spirit lives on in the sculpted busts that adorn its entrance.",
    photo: "/images/villas/l-olivette.jpg",
    infoPlus:
      "After Dranem’s death in 1935, the villa passed through many hands, yet its intimate charm and panoramic sea views remain unchanged—a testament to its storied past."
  }
];
