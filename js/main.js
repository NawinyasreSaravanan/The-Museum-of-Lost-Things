/**
 * FOUND — THE MUSEUM OF LOST THINGS
 * Contemporary Lost & Found Exhibition Engine (Founded 2024 · 2024–2026 Archive)
 * High-Definition Real Photography · Zero Audio · Fast Hardware Acceleration
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CONTEMPORARY COLLECTION (FOUNDED 2024 · 2024–2026 ARCHIVE)
  // =========================================================================
  const MUSEUM_OBJECTS = [
    {
      id: 1,
      code: "ARCHIVE / 001",
      number: "01",
      title: "A RED HOTEL KEYCARD",
      year: "2024",
      place: "The Harbor View Room 314, Downtown Los Angeles",
      category: "MYSTERY",
      caption: "Room 314 crimson magnetic swipe card with five vertical scratches. Found on an unmade bedside table in October 2024.",
      story: "A crimson magnetic swipe keycard from The Harbor View issued on a rainy Thursday in October 2024. Found on an unmade bedside table after the occupant checked out at dawn. The magnetic stripe has five vertical swipe scratches. When front desk audited the system, Room 314 was booked under a burner address that bounced.",
      why: "Keycards expire at noon, but whatever conversation happened in Room 314 lingers permanently.",
      image: "assets/images/red_hotel_keycard_1791883988543.jpg",
      isRealPhoto: true,
      span: "card-span-7"
    },
    {
      id: 2,
      code: "ARCHIVE / 002",
      number: "02",
      title: "A TOKYO METRO COMMUTER PASS",
      year: "2024",
      place: "Shibuya Station, Tokyo",
      category: "GOODBYE",
      caption: "Transit smart card dropped near the Hachiko ticket gates during Friday rush hour in late November 2024.",
      story: "Metro commuter smart card loaded with 1,840 JPY. Found jammed between the stainless steel turnstile slats at Shibuya Station on the final train night of November 2024. The owner had taped a small purikura photo sticker of two teenagers laughing in an arcade booth to the back.",
      why: "A prepaid passage into the neon city that someone never swiped again.",
      image: "assets/images/tokyo_transit_card_1791883989142.jpg",
      isRealPhoto: true,
      span: "card-span-5"
    },
    {
      id: 3,
      code: "ARCHIVE / 003",
      number: "03",
      title: "A BLUE HAIR CLIP",
      year: "2024",
      place: "Seaside Promenade, Brighton",
      category: "JOY",
      caption: "Tortoiseshell-teal clip encrusted with dry sea salt and sand grains. Dropped on the windiest Sunday in August 2024.",
      story: "Tortoiseshell-teal cellulose hair clip encrusted with sea salt. Dropped on the pebble beach near Brighton Pier during an August gale in 2024. Found tangled in dried sea lavender. The spring mechanism still snaps crisply with the sound of a dry twig breaking.",
      why: "A momentary gust tore it away; the laughter of that afternoon stayed behind.",
      image: "assets/images/object-03.svg",
      isRealPhoto: false,
      span: "card-span-4"
    },
    {
      id: 4,
      code: "ARCHIVE / 004",
      number: "04",
      title: "A HALF-FINISHED NOTE ON A RECEIPT",
      year: "2024",
      place: "Coach Seat 12B, Trans-Pennine Highway",
      category: "REGRET",
      caption: "Written in blue gel pen on an espresso receipt: 'If I told you how quiet the apartment feels without your coat here—'.",
      story: "Thermal paper cafe receipt from September 2024. On the reverse, written in frantic blue gel pen: 'If I told you how quiet the apartment feels without your coat here—'. The sentence stops where the paper tore. Tucked between the headrest cushions of an express coach.",
      why: "The sentence that was never finished holds more truth than any polished letter.",
      image: "assets/images/object-04.svg",
      isRealPhoto: false,
      span: "card-span-8"
    },
    {
      id: 5,
      code: "ARCHIVE / 005",
      number: "05",
      title: "A BURNT CD-R MIXTAPE",
      year: "2024",
      place: "Glove Compartment, Scrapped Volvo, Gothenburg",
      category: "NOSTALGIA",
      caption: "Silver 700MB CD-R labeled in black Sharpie: 'Summer Mix '24 - Vol. 3 (Do Not Overwrite)'.",
      story: "A 700MB recordable compact disc with iridescent rainbow refractions. Written in faded black marker: 'Summer Mix '24 - Vol. 3'. Contains eighteen acoustic indie tracks and a hidden 40-second audio memo recorded in a bedroom with rain drumming on the skylight.",
      why: "Physical mixtapes remain snapshots of shared intimacy before streaming wiped away scarcity.",
      image: "assets/images/object-05.svg",
      isRealPhoto: false,
      span: "card-span-6"
    },
    {
      id: 6,
      code: "ARCHIVE / 006",
      number: "06",
      title: "A RETRO GAME CARTRIDGE",
      year: "2024",
      place: "Attic Floorboards, Kyoto",
      category: "JOY",
      caption: "Translucent turquoise cartridge with a worn gold label. Save file titled 'KAI' sits at Level 84 before the final chamber.",
      story: "A translucent portable game cartridge recovered beneath tongue-and-groove cedar floorboards in Kyoto in late 2024. Internal battery has held the save state intact. The player stands paused in front of the final gate with a team named after childhood friends.",
      why: "An entire universe preserved at the exact precipice of victory.",
      image: "assets/images/object-06.svg",
      isRealPhoto: false,
      span: "card-span-6"
    },
    {
      id: 7,
      code: "ARCHIVE / 007",
      number: "07",
      title: "AN INSTANT PHOTO PRINT",
      year: "2024",
      place: "Between Floor Cushions, Brooklyn Loft",
      category: "NOSTALGIA",
      caption: "Glossy instant snapshot print with white borders dated late 2024. Two laughing friends under warm golden window sunlight.",
      story: "Glossy square photo print retrieved from behind a radiator in Williamsburg in November 2024. Two people lean over an iron fire escape railing in golden sunset light. Hand-inscribed on the border: 'Golden Hours'.",
      why: "In a world of ephemeral feeds, instant photos are physical proof that we were young together.",
      image: "assets/images/instant_photo_print_1791883990182.jpg",
      isRealPhoto: true,
      span: "card-span-4"
    },
    {
      id: 8,
      code: "ARCHIVE / 008",
      number: "08",
      title: "A HAND-ENGRAVED SILVER RING",
      year: "2024",
      place: "Riverbed Silt, South Bank, London",
      category: "LOVE",
      caption: "925 sterling silver band inscribed inside: 'ALWAYS'. Recovered at low tide during mudlarking near Waterloo Bridge in late 2024.",
      story: "A 925 sterling silver band found in tidal silt beneath Waterloo Bridge in December 2024. Inside curve bears the delicate hand-engraved inscription: 'ALWAYS'. Glistening with water drops over Thames pebbles, untouched by rust.",
      why: "A vow crafted to be permanent, surrendered to the cold river current.",
      image: "assets/images/silver_engraved_ring_1791883988004.jpg",
      isRealPhoto: true,
      span: "card-span-4"
    },
    {
      id: 9,
      code: "ARCHIVE / 009",
      number: "09",
      title: "VINTAGE TORTOISESHELL SUNGLASSES",
      year: "2025",
      place: "Bistro Marble Table, Saint-Germain, Paris",
      category: "NOSTALGIA",
      caption: "Designer acetate sunglasses forgotten beside an espresso cup in April 2025 during the first warm afternoon of spring.",
      story: "Handcrafted tortoiseshell sunglasses discovered on a round outdoor bistro marble table in Paris in spring 2025. Soft daylight warms the amber frames while pedestrians stream down Boulevard Saint-Germain.",
      why: "We take off our glasses to see someone clearly, and sometimes walk away without them.",
      image: "assets/images/vintage_sunglasses_1791883989888.jpg",
      isRealPhoto: true,
      span: "card-span-4"
    },
    {
      id: 10,
      code: "ARCHIVE / 010",
      number: "10",
      title: "A FROZEN SMARTWATCH",
      year: "2025",
      place: "Karlín Viaduct, Prague",
      category: "CHANGE",
      caption: "OLED display shattered and locked forever at 04:17 AM. Heart rate readout shows a sudden spike to 142 BPM.",
      story: "A ceramic smartwatch with cracked sapphire crystal, retrieved from cobbles beneath Karlín Viaduct in 2025. The internal flash memory froze at 04:17:33 AM. The last biometric log registered 142 beats per minute.",
      why: "Digital clocks don't wind down; they freeze at the exact second something changed.",
      image: "assets/images/object-10.svg",
      isRealPhoto: false,
      span: "card-span-8"
    },
    {
      id: 11,
      code: "ARCHIVE / 011",
      number: "11",
      title: "AN EMPTY PERFUME ATOMIZER",
      year: "2025",
      place: "Coat Check Pocket, Vienna State Opera",
      category: "ABSENCE",
      caption: "Glass travel flacon with brass collar. Empty of liquid, but the inner silicone seal still holds scent of vetiver and cedar.",
      story: "A 10ml refillable glass atomizer found tucked inside the lining of a long-unclaimed wool overcoat in Vienna in early 2025. Removing the brass cap releases an unmistakable vapor of damp cedarwood and black pepper.",
      why: "Of all human senses, olfactory memory survives long after faces and voices fade.",
      image: "assets/images/object-11.svg",
      isRealPhoto: false,
      span: "card-span-4"
    },
    {
      id: 12,
      code: "ARCHIVE / 012",
      number: "12",
      title: "A FAST-CHARGING CABLE & PLUG",
      year: "2025",
      place: "Conference Room 4B, Canary Wharf, London",
      category: "CHANGE",
      caption: "Braided nylon USB-C cable coiled with a neon hairband. Once kept essential urgent conversations alive; forgotten on a wall port.",
      story: "A braided cable with matte-black adapter retrieved from an under-floor power terminal in Canary Wharf in March 2025. Left behind when someone packed their laptop bag in a rush to catch the Elizabeth line.",
      why: "We leave lifelines behind the moment the emergency has passed.",
      image: "assets/images/object-12.svg",
      isRealPhoto: false,
      span: "card-span-5"
    },
    {
      id: 13,
      code: "ARCHIVE / 013",
      number: "13",
      title: "A DISPOSABLE 35MM CAMERA",
      year: "2025",
      place: "Canal Bench, Kreuzberg, Berlin",
      category: "MYSTERY",
      caption: "Cardboard body with 14 unexposed frames remaining. The flash capacitor charged, waiting for someone to take the next shot.",
      story: "A single-use 27-exposure camera found on a wet timber bench beside Maybachufer canal on a Monday morning in 2025. Frame counter shows 13 shots taken: blurred club lights, laughter over kebabs, and sunrise fog.",
      why: "The fourteenth shot will never happen; the night remains permanently suspended.",
      image: "assets/images/object-13.svg",
      isRealPhoto: false,
      span: "card-span-7"
    },
    {
      id: 14,
      code: "ARCHIVE / 014",
      number: "14",
      title: "A HANDWRITTEN POSTCARD NEVER SENT",
      year: "2025",
      place: "Second-hand Guidebook, Flea Market, Paris",
      category: "REGRET",
      caption: "Stamped with a French Marianne stamp. Addressed to Chicago: 'I wanted to tell you before the train arrived...'",
      story: "A postcard depicting the Pont des Arts at twilight, written in June 2025. Message reads: 'I wanted to tell you before the train arrived, but the station was too loud. I think we will look back on this as the best thing that didn't happen.' Never mailed.",
      why: "Unposted letters are monuments to second thoughts.",
      image: "assets/images/object-14.svg",
      isRealPhoto: false,
      span: "card-span-6"
    },
    {
      id: 15,
      code: "ARCHIVE / 015",
      number: "15",
      title: "A CERAMIC COFFEE MUG SHARD",
      year: "2025",
      place: "Renovated Loft, Lower East Side, NYC",
      category: "CHANGE",
      caption: "Glazed speckled stoneware fragment reading '...RNING CO...'. Salvaged from floorboards in August 2025.",
      story: "A heavy speckled white stoneware shard with cobalt lettering fragment: 'GOOD MORNING CO...'. The handle attachment is smooth and well-worn from countless mornings holding warm liquid before commuting.",
      why: "Domestic tranquility leaves behind durable ceramic fragments when cities rebuild.",
      image: "assets/images/object-15.svg",
      isRealPhoto: false,
      span: "card-span-6"
    },
    {
      id: 16,
      code: "ARCHIVE / 016",
      number: "16",
      title: "A TAP-TO-PAY TRANSIT CARD",
      year: "2025",
      place: "Subway Grate, Union Square, NYC",
      category: "GOODBYE",
      caption: "NFC contact card with exactly two rides remaining. Dropped down the iron grate on someone's final commute.",
      story: "A transit contactless card retrieved from beneath Union Square express platform in September 2025. NFC audit indicates two rides loaded. Whoever dropped it stepped onto the uptown train and left the city.",
      why: "A ticket to anywhere in New York City left untouched on the tracks.",
      image: "assets/images/object-16.svg",
      isRealPhoto: false,
      span: "card-span-4"
    },
    {
      id: 17,
      code: "ARCHIVE / 017",
      number: "17",
      title: "A STAMPED FESTIVAL WRISTBAND",
      year: "2025",
      place: "Glastonbury Mud, Worthy Farm, Somerset",
      category: "JOY",
      caption: "Woven fabric wristband with holographic foil clasp. Cut off with kitchen scissors at 3 AM upon returning home.",
      story: "A woven jacquard wristband with iridescent security threads, encrusted with dried Somerset mud from the wet solstice of 2025. Snapped off with scissors upon entering a warm shower after five nights under nylon canvas.",
      why: "Proof of a temporary world where music, mud, and forty thousand strangers were everything.",
      image: "assets/images/object-17.svg",
      isRealPhoto: false,
      span: "card-span-4"
    },
    {
      id: 18,
      code: "ARCHIVE / 018",
      number: "18",
      title: "AN ANODIZED METAL POCKET PLAYER",
      year: "2025",
      place: "Park Bench, Vondelpark, Amsterdam",
      category: "NOSTALGIA",
      caption: "Pink aluminum player with scroll wheel. Microdrive contains 842 songs and playlists named 'Walk Home' and 'Sleep'.",
      story: "A nostalgic metallic pocket audio player retrieved from beneath a weeping willow in Vondelpark in autumn 2025. When powered on, playlists illuminated with early ambient drone and indie tracks.",
      why: "Our digital pocket universes, curated track by track with intense devotion.",
      image: "assets/images/object-18.svg",
      isRealPhoto: false,
      span: "card-span-4"
    },
    {
      id: 19,
      code: "ARCHIVE / 019",
      number: "19",
      title: "AN EMBROIDERED LINEN TICKET POUCH",
      year: "2026",
      place: "Overhead Luggage Rack, Venice–Milan Express",
      category: "LOVE",
      caption: "Cream linen envelope with tiny blue forget-me-nots stitched into the flap. Held two ticket stubs and dried rosemary.",
      story: "A hand-stitched linen slipcase found behind an aluminum rail on the Venice–Milan regional train in January 2026. Inside: two stamped ticket stubs from Santa Lucia and a pressed sprig of rosemary.",
      why: "A container made with immense tenderness to shelter paper that would otherwise be thrown away.",
      image: "assets/images/object-19.svg",
      isRealPhoto: false,
      span: "card-span-6"
    },
    {
      id: 20,
      code: "ARCHIVE / 020",
      number: "20",
      title: "A BRASS CARABINER KEYCHAIN",
      year: "2026",
      place: "Rock Climbing Crag, Joshua Tree",
      category: "CHANGE",
      caption: "Heavy brass locking gate carabiner engraved with initials 'M.R.'. The latch is polished bright from pocket friction.",
      story: "Found wedged inside a granite fissure at Joshua Tree in February 2026. Holds three brass keys: an apartment latch, a bicycle padlock, and a post office box.",
      why: "Keys are the physical weight of having a place in the world to return to.",
      image: "assets/images/object-20.svg",
      isRealPhoto: false,
      span: "card-span-6"
    },
    {
      id: 21,
      code: "ARCHIVE / 021",
      number: "21",
      title: "AN INSTANT PHOTO OF AN EMPTY CHAIR",
      year: "2026",
      place: "Window Sill, Trastevere, Rome",
      category: "ABSENCE",
      caption: "Square instant print. A lone bentwood chair catches morning sunlight across terracotta tiles.",
      story: "An instant print discovered propped against a window frame in Rome in March 2026. Inscribed on the white margin: 'Lunedì mattina, prima che te ne andassi' (Monday morning, before you left).",
      why: "An empty chair is rarely about furniture; it is a portrait of the person who just stood up.",
      image: "assets/images/object-21.svg",
      isRealPhoto: false,
      span: "card-span-4"
    },
    {
      id: 22,
      code: "ARCHIVE / 022",
      number: "22",
      title: "A HOTEL DOORKNOB HANGER",
      year: "2026",
      place: "Luggage Carousel 3, Heathrow Airport, London",
      category: "GOODBYE",
      caption: "Cardstock sign reading 'DO NOT DISTURB'. Taken from a boutique hotel in Montmartre as a keepsake.",
      story: "Found discarded on a baggage carousel at Heathrow Terminal 4 in spring 2026. Visitor wrote in pencil on the edge: 'We stayed in bed until four in the afternoon while it rained over Paris.'",
      why: "A small theft from a hotel room to prove the hours really happened.",
      image: "assets/images/object-22.svg",
      isRealPhoto: false,
      span: "card-span-4"
    },
    {
      id: 23,
      code: "ARCHIVE / 023",
      number: "23",
      title: "A MATTE-BLACK WIRELESS EARBUD",
      year: "2026",
      place: "Night Market Puddle, Gangnam, Seoul",
      category: "ABSENCE",
      caption: "Right-ear Bluetooth pod dropped during monsoon rain in May 2026. The left earbud still exists somewhere in the city.",
      story: "A single wireless earbud retrieved from a reflective asphalt puddle in Seoul. Slipped out of an ear during a frantic dash for the subway. Its tiny silicone tip is still intact, carrying half of an untold phone conversation.",
      why: "A modern tragic symbol: one half of a pair wandering the city without the other.",
      image: "assets/images/object-23.svg",
      isRealPhoto: false,
      span: "card-span-4"
    },
    {
      id: 24,
      code: "ARCHIVE / 024",
      number: "24",
      title: "A 128GB MICROSD DRONE CARD",
      year: "2026",
      place: "Coffee Bar Counter, Mission District, San Francisco",
      category: "MYSTERY",
      caption: "Memory card containing 42 minutes of 4K aerial footage flying through Pacific fog over coastal cliffs.",
      story: "A MicroSD card found wedged between two ceramic saucers on a wooden counter in the Mission District in summer 2026. Forensic inspection reveals 42 minutes of drone footage gliding silently through golden sea-fog above Big Sur.",
      why: "A bird's-eye memory captured from the sky, lost on a kitchen counter.",
      image: "assets/images/object-24.svg",
      isRealPhoto: false,
      span: "card-span-12"
    }
  ];

  // =========================================================================
  // 2. TIMELINE EPOCHS (FOUNDED 2024 TO PRESENT 2026)
  // =========================================================================
  const TIMELINE_DATA = {
    "2024": {
      object: "RED HOTEL KEYCARD",
      quote: "Magnetic card for Room 314. Issued in October 2024 at The Standard Downtown LA. Documented with authentic high-res macro photograph.",
      place: "Downtown Los Angeles",
      objectId: 1,
      image: "assets/images/red_hotel_keycard_1791883988543.jpg"
    },
    "2024-AUTUMN": {
      object: "TOKYO METRO COMMUTER PASS",
      quote: "Transit smart card dropped near the Hachiko ticket gates in late 2024. Preserved with real steel-bench photography.",
      place: "Shibuya Station, Tokyo",
      objectId: 2,
      image: "assets/images/tokyo_transit_card_1791883989142.jpg"
    },
    "2024-WINTER": {
      object: "HAND-ENGRAVED SILVER RING",
      quote: "925 sterling silver band recovered from Thames silt. Photographed under wet river stones with authentic water droplets.",
      place: "South Bank, London",
      objectId: 8,
      image: "assets/images/silver_engraved_ring_1791883988004.jpg"
    },
    "2025-SPRING": {
      object: "VINTAGE TORTOISESHELL SUNGLASSES",
      quote: "Acetate frames forgotten on a marble bistro table in Paris. Authentic natural daylight photograph.",
      place: "Saint-Germain, Paris",
      objectId: 9,
      image: "assets/images/vintage_sunglasses_1791883989888.jpg"
    },
    "2025-SUMMER": {
      object: "DISPOSABLE 35MM CAMERA",
      quote: "Single-use camera with 14 unexposed frames remaining on a canal bench.",
      place: "Kreuzberg Canal, Berlin",
      objectId: 13,
      image: "assets/images/object-13.svg"
    },
    "2026-WINTER": {
      object: "MATTE-BLACK WIRELESS EARBUD",
      quote: "Right-ear pod dropped in a rain puddle in early 2026. Still searching for its left half.",
      place: "Gangnam, Seoul",
      objectId: 23,
      image: "assets/images/object-23.svg"
    },
    "2026-PRESENT": {
      object: "128GB MICROSD DRONE CARD",
      quote: "Contains 42 minutes of 4K aerial Pacific coast footage lost on a coffee counter in 2026.",
      place: "Mission District, San Francisco",
      objectId: 24,
      image: "assets/images/object-24.svg"
    }
  };

  // =========================================================================
  // 3. MAP LOCATIONS (2024–2026 TELEMETRY)
  // =========================================================================
  const MAP_LOCATIONS = {
    "TOKYO": {
      name: "SHIBUYA STATION, TOKYO",
      objectsCount: "05",
      mostCommon: "Transit Smart Cards & Purikura",
      lastRecorded: "2024",
      poetry: "Under neon umbrellas outside the Hachiko gates, thousands crossed paths every two minutes. What slipped from their pockets fell into tomorrow.",
      relatedId: 2
    },
    "NEW YORK": {
      name: "BROOKLYN BRIDGE WALKWAY, NYC",
      objectsCount: "06",
      mostCommon: "Contactless Passes & Instant Snaps",
      lastRecorded: "2024",
      poetry: "Suspended over the East River with the skyscrapers glowing behind. Where tickets to anywhere slipped between the wooden planks.",
      relatedId: 7
    },
    "LONDON": {
      name: "SOUTH BANK THAMES PIER, LONDON",
      objectsCount: "04",
      mostCommon: "Engraved Silver Rings & Passes",
      lastRecorded: "2024",
      poetry: "Mudlarkers search the riverbed at low tide. In the damp gravel, vows engraved on silver bands wait without rusting.",
      relatedId: 8
    },
    "BERLIN": {
      name: "KREUZBERG CANAL, BERLIN",
      objectsCount: "05",
      mostCommon: "35mm Cameras & Matchbooks",
      lastRecorded: "2025",
      poetry: "At dawn along Maybachufer, when bass tones still rattle inside people's ribs. A disposable camera left on a damp timber bench.",
      relatedId: 13
    },
    "SEOUL": {
      name: "GANGNAM NIGHT MARKET, SEOUL",
      objectsCount: "07",
      mostCommon: "Wireless Earbuds & Keychains",
      lastRecorded: "2025",
      poetry: "Under monsoon downpours reflecting pink and cyan neon, a solitary earbud popped free into a puddle, separated from its twin.",
      relatedId: 23
    },
    "SAN FRANCISCO": {
      name: "MISSION DISTRICT, SAN FRANCISCO",
      objectsCount: "03",
      mostCommon: "MicroSD Cards & Sketchbooks",
      lastRecorded: "2026",
      poetry: "Over pour-over coffee on Valencia Street. Fingernail-sized memory cards containing sunsets filmed from drone cameras high above the Pacific.",
      relatedId: 24
    }
  };

  // =========================================================================
  // 4. STORIES
  // =========================================================================
  const STORIES = [
    {
      index: "STORY 01 / 06",
      title: "THE HARBOR VIEW, ROOM 314",
      body: "A crimson magnetic keycard was found on an unmade bedside table in October 2024. The TV was still humming on static. When front desk checked the digital registry, Room 314 had been booked under a burner address that bounced. The carpet smelled of rain and clove cigarettes.",
      context: "DOWNTOWN LOS ANGELES · RECOVERED AUTUMN 2024"
    },
    {
      index: "STORY 02 / 06",
      title: "THE UNPLAYED FOURTEENTH SHOT",
      body: "On a wet timber bench beside Maybachufer canal in Berlin, someone left a single-use 35mm camera with 14 shots unexposed in 2025. When developed, frames showed four friends leaning over an iron railing into the fog. The fourteenth shot was never taken.",
      context: "KREUZBERG CANAL · RECOVERED AUTUMN 2025"
    },
    {
      index: "STORY 03 / 06",
      title: "THE LAST TRAIN FROM SHIBUYA",
      body: "A commuter pass slid between the steel slats of turnstile gate 3 in November 2024. On the reverse was a tiny sticker of two teenagers making peace signs in an arcade photo booth. The remaining balance was 1,840 yen—enough to ride clear across the city, but never used.",
      context: "SHIBUYA STATION · RECOVERED NOVEMBER 2024"
    },
    {
      index: "STORY 04 / 06",
      title: "GOLDEN HOURS IN BROOKLYN",
      body: "An instant photo print slipped between sofa cushions in a Williamsburg loft in late 2024. Showing warm afternoon sunlight catching a spontaneous laugh. Stamped with handwriting on the margin: 'Golden Hours'.",
      context: "BROOKLYN LOFT · RECOVERED DECEMBER 2024"
    },
    {
      index: "STORY 05 / 06",
      title: "THE LONE BLUETOOTH POD",
      body: "Dropped into a reflective street puddle in Seoul during the May 2026 rain. The phone it was paired with kept walking two kilometers north before the signal broke. The museum conservation team placed it in dry silica; it still searches for its matching left pod.",
      context: "GANGNAM DISTRICT · RECOVERED SPRING 2026"
    },
    {
      index: "STORY 06 / 06",
      title: "AN EMPTY CHAIR IN TRASTEVERE",
      body: "An instant print of a bentwood chair in morning sunlight in March 2026. On the white border, a ballpoint note in Italian: 'Monday morning, before you left'. No people are in the frame, yet the photo is entirely about the person who just walked out the door.",
      context: "ROME · RECOVERED SPRING 2026"
    }
  ];

  // =========================================================================
  // 5. CURATOR NOTES
  // =========================================================================
  const CURATOR_NOTES = [
    "“Objects are rarely important because of what they are. They become important because of what they remember.”",
    "“When we lose a key, we haven't lost a piece of brass. We've lost the guarantee of a threshold waiting for our return.”",
    "“Everything lost leaves something behind: a room that stays quiet, a question that was never answered, or a memory that outlives the thing itself.”",
    "“The digital world promised that nothing would ever be lost again. In truth, it only made our lost moments quieter.”"
  ];

  // =========================================================================
  // STATE & DOM
  // =========================================================================
  let currentInspectorIndex = 0;
  let currentStoryIndex = 0;
  let currentCuratorIndex = 0;

  const collectionGrid = document.getElementById('collection-grid');
  const searchInput = document.getElementById('search-input');
  const searchResultsGrid = document.getElementById('search-results-grid');
  const searchCountEl = document.getElementById('search-count');
  const searchEmptyState = document.getElementById('search-empty-state');
  const inspectorModal = document.getElementById('inspector-modal');
  const timelineYears = document.querySelectorAll('.timeline-year-btn');
  const timelineDisplayCard = document.getElementById('timeline-display-card');
  const storyStage = document.getElementById('story-stage');
  const storyPrevBtn = document.getElementById('story-prev-btn');
  const storyNextBtn = document.getElementById('story-next-btn');
  const storyProgress = document.getElementById('story-progress');
  const donationForm = document.getElementById('donation-form');
  const donationSuccess = document.getElementById('donation-success');
  const userArchiveList = document.getElementById('user-archive-list');
  const randomObjectModal = document.getElementById('random-object-modal');
  const curatorModal = document.getElementById('curator-modal');
  const curatorQuoteEl = document.getElementById('curator-quote');
  const museumNav = document.getElementById('museum-nav');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // =========================================================================
  // INITIALIZATION
  // =========================================================================
  function init() {
    loadUserObjectsIntoCollection();
    renderCollectionGrid(MUSEUM_OBJECTS);
    setupGalleryCategories();
    setupInspector();
    setupSearch();
    setupTimeline();
    setupRadarMap();
    setupStoryRoom();
    setupDonation();
    renderUserArchive();
    setupRandomObject();
    setupCuratorMode();
    setupNavigation();
  }

  function loadUserObjectsIntoCollection() {
    const userObjects = getUserObjects();
    userObjects.forEach(u => {
      // Check if already in array
      if (!MUSEUM_OBJECTS.some(o => o.id === u.id)) {
        MUSEUM_OBJECTS.unshift(u);
      }
    });
  }

  // =========================================================================
  // 1. COLLECTION GALLERY
  // =========================================================================
  function renderCollectionGrid(objects) {
    if (!collectionGrid) return;
    collectionGrid.innerHTML = '';

    objects.forEach((obj) => {
      const card = document.createElement('article');
      card.className = `object-card ${obj.span || 'card-span-6'}`;
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${obj.title}, ${obj.year}, ${obj.place}`);

      const realBadgeHtml = obj.isRealPhoto 
        ? `<span class="badge-real-photo">📷 REAL PHOTO</span>` 
        : '';

      const userBadgeHtml = obj.isUserAdded
        ? `<span style="font-family: var(--font-mono); font-size: 0.65rem; color: #10B981; font-weight: 700;">● COMMUNITY</span>`
        : '';

      card.innerHTML = `
        <div class="card-header-meta">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="card-num">${obj.number}</span>
            ${realBadgeHtml}
            ${userBadgeHtml}
          </div>
          <span class="card-cat-tag">${obj.category}</span>
        </div>

        <div class="card-visual-frame ${obj.isRealPhoto ? 'real-photo-frame' : ''}">
          <img src="${obj.image}" alt="${obj.title}" loading="lazy" referrerPolicy="no-referrer" />
        </div>

        <div class="card-body-content">
          <h3 class="card-title">${obj.title}</h3>
          <div class="card-provenance">${obj.year} · ${obj.place}</div>
          <p class="card-caption">“${obj.caption || obj.why}”</p>
        </div>

        <div class="card-footer-row">
          <span class="btn-card-inspect">
            <span>INSPECT</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted);">${obj.code || 'FOUND / ' + obj.year}</span>
        </div>
      `;

      const origIdx = MUSEUM_OBJECTS.findIndex(o => o.id === obj.id);
      card.addEventListener('click', () => openInspector(origIdx));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openInspector(origIdx);
        }
      });

      collectionGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 2. CATEGORY FILTERS
  // =========================================================================
  function setupGalleryCategories() {
    const filterBtns = document.querySelectorAll('.cat-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');

        const filtered = cat === 'ALL'
          ? MUSEUM_OBJECTS
          : MUSEUM_OBJECTS.filter(o => o.category === cat);

        renderCollectionGrid(filtered);
      });
    });
  }

  // =========================================================================
  // 3. OBJECT INSPECTOR (Modal Dossier with Real Photography Zoom)
  // =========================================================================
  function setupInspector() {
    if (!inspectorModal) return;

    const closeBtn = document.getElementById('btn-close-inspector');
    const prevBtn = document.getElementById('btn-inspector-prev');
    const nextBtn = document.getElementById('btn-inspector-next');

    if (closeBtn) closeBtn.addEventListener('click', closeInspector);
    if (prevBtn) prevBtn.addEventListener('click', () => navigateInspector(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateInspector(1));

    inspectorModal.addEventListener('click', (e) => {
      if (e.target === inspectorModal) closeInspector();
    });

    document.addEventListener('keydown', (e) => {
      if (!inspectorModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeInspector();
      else if (e.key === 'ArrowLeft') navigateInspector(-1);
      else if (e.key === 'ArrowRight') navigateInspector(1);
    });
  }

  function openInspector(index) {
    if (index < 0 || index >= MUSEUM_OBJECTS.length) return;
    currentInspectorIndex = index;
    const obj = MUSEUM_OBJECTS[index];

    document.getElementById('insp-accession').textContent = obj.code || `ARCHIVE / ${obj.number}`;
    document.getElementById('insp-num').textContent = `SPECIMEN ${obj.number}`;
    document.getElementById('insp-title').textContent = obj.title;
    document.getElementById('insp-year').textContent = obj.year;
    document.getElementById('insp-place').textContent = obj.place;
    document.getElementById('insp-category').textContent = obj.category;
    document.getElementById('insp-story').textContent = `“${obj.story || obj.why}”`;
    document.getElementById('insp-why').textContent = obj.why;

    const imgEl = document.getElementById('insp-image');
    if (imgEl) {
      imgEl.src = obj.image;
      imgEl.alt = `${obj.title} artifact`;
      imgEl.setAttribute('referrerPolicy', 'no-referrer');
    }

    inspectorModal.classList.add('active');
    inspectorModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('btn-close-inspector');
    if (closeBtn) closeBtn.focus();
  }

  function closeInspector() {
    if (!inspectorModal) return;
    inspectorModal.classList.remove('active');
    inspectorModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function navigateInspector(delta) {
    let nextIdx = currentInspectorIndex + delta;
    if (nextIdx < 0) nextIdx = MUSEUM_OBJECTS.length - 1;
    if (nextIdx >= MUSEUM_OBJECTS.length) nextIdx = 0;
    openInspector(nextIdx);
  }

  // =========================================================================
  // 4. ARCHIVE SEARCH
  // =========================================================================
  function setupSearch() {
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();

      if (!q) {
        renderSearchResults(MUSEUM_OBJECTS.slice(0, 6));
        searchCountEl.textContent = `RESULTS FOUND: ${String(MUSEUM_OBJECTS.length).padStart(2, '0')} (INDEX VIEW)`;
        searchEmptyState.style.display = 'none';
        return;
      }

      const matches = MUSEUM_OBJECTS.filter(obj => {
        return (
          obj.title.toLowerCase().includes(q) ||
          obj.category.toLowerCase().includes(q) ||
          obj.year.includes(q) ||
          obj.place.toLowerCase().includes(q) ||
          (obj.story && obj.story.toLowerCase().includes(q)) ||
          (obj.caption && obj.caption.toLowerCase().includes(q)) ||
          (obj.why && obj.why.toLowerCase().includes(q))
        );
      });

      searchCountEl.textContent = `RESULTS FOUND: ${String(matches.length).padStart(2, '0')}`;

      if (matches.length === 0) {
        searchResultsGrid.innerHTML = '';
        searchEmptyState.style.display = 'block';
      } else {
        searchEmptyState.style.display = 'none';
        renderSearchResults(matches);
      }
    });

    renderSearchResults(MUSEUM_OBJECTS.slice(0, 6));
  }

  function renderSearchResults(items) {
    if (!searchResultsGrid) return;
    searchResultsGrid.innerHTML = '';

    items.forEach(obj => {
      const card = document.createElement('div');
      card.className = 'object-card';
      card.setAttribute('tabindex', '0');
      card.innerHTML = `
        <div class="card-visual-frame" style="aspect-ratio: 4/3;">
          <img src="${obj.image}" alt="${obj.title}" loading="lazy" referrerPolicy="no-referrer" />
        </div>
        <div class="card-header-meta" style="margin-bottom: 0.5rem;">
          <span class="card-num">${obj.year}</span>
          <span class="card-cat-tag">${obj.category}</span>
        </div>
        <h4 style="font-size: 1.15rem; margin-bottom: 0.25rem;">${obj.title}</h4>
        <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted);">${obj.place}</div>
      `;

      const origIdx = MUSEUM_OBJECTS.findIndex(o => o.id === obj.id);
      card.addEventListener('click', () => openInspector(origIdx));
      searchResultsGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 5. TIMELINE (STARTED 2024 TO PRESENT 2026)
  // =========================================================================
  function setupTimeline() {
    timelineYears.forEach(btn => {
      btn.addEventListener('click', () => {
        timelineYears.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const year = btn.getAttribute('data-year');
        renderTimelineEpoch(year);
      });
    });

    renderTimelineEpoch('2024');
  }

  function renderTimelineEpoch(yearKey) {
    const data = TIMELINE_DATA[yearKey] || TIMELINE_DATA['2024'];
    if (!data || !timelineDisplayCard) return;

    timelineDisplayCard.innerHTML = `
      <div class="timeline-preview-frame">
        <img src="${data.image}" alt="${data.object}" referrerPolicy="no-referrer" />
      </div>
      <div class="timeline-data-content">
        <div class="time-year-badge">${yearKey}</div>
        <h3 class="timeline-obj-name">${data.object}</h3>
        <div class="section-meta" style="margin-bottom: 1rem;">LOCATION: ${data.place}</div>
        <p class="timeline-note-quote">“${data.quote}”</p>
        <button class="btn-enter" id="btn-timeline-inspect" style="padding: 1rem 2rem; font-size: 0.8rem;">
          INSPECT IN COLLECTION
        </button>
      </div>
    `;

    const inspectBtn = document.getElementById('btn-timeline-inspect');
    if (inspectBtn) {
      inspectBtn.addEventListener('click', () => {
        const idx = MUSEUM_OBJECTS.findIndex(o => o.id === data.objectId);
        if (idx !== -1) openInspector(idx);
      });
    }
  }

  // =========================================================================
  // 6. RADAR MAP
  // =========================================================================
  function setupRadarMap() {
    const locNameEl = document.getElementById('map-loc-name');
    const locCountEl = document.getElementById('map-loc-count');
    const locCommonEl = document.getElementById('map-loc-common');
    const locLastEl = document.getElementById('map-loc-last');
    const locPoetryEl = document.getElementById('map-loc-poetry');
    const locInspectBtn = document.getElementById('btn-map-inspect');
    const mapQuickButtons = document.querySelectorAll('.map-quick-btn');
    const radarBeacons = document.querySelectorAll('.radar-beacon');

    function selectRadarLocation(locKey) {
      const data = MAP_LOCATIONS[locKey] || MAP_LOCATIONS['TOKYO'];

      if (locNameEl) locNameEl.textContent = data.name;
      if (locCountEl) locCountEl.textContent = data.objectsCount;
      if (locCommonEl) locCommonEl.textContent = data.mostCommon;
      if (locLastEl) locLastEl.textContent = data.lastRecorded;
      if (locPoetryEl) locPoetryEl.textContent = `“${data.poetry}”`;

      mapQuickButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-location') === locKey);
      });

      radarBeacons.forEach(beacon => {
        beacon.classList.toggle('active', beacon.getAttribute('data-location') === locKey);
      });

      if (locInspectBtn) {
        locInspectBtn.onclick = () => {
          const idx = MUSEUM_OBJECTS.findIndex(o => o.id === data.relatedId);
          if (idx !== -1) openInspector(idx);
        };
      }
    }

    mapQuickButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const loc = btn.getAttribute('data-location');
        selectRadarLocation(loc);
      });
    });

    radarBeacons.forEach(beacon => {
      beacon.addEventListener('click', () => {
        const loc = beacon.getAttribute('data-location');
        selectRadarLocation(loc);
      });
    });

    selectRadarLocation('TOKYO');
  }

  // =========================================================================
  // 7. STORY ROOM
  // =========================================================================
  function setupStoryRoom() {
    if (storyPrevBtn) {
      storyPrevBtn.addEventListener('click', () => {
        currentStoryIndex = (currentStoryIndex - 1 + STORIES.length) % STORIES.length;
        renderStory(currentStoryIndex);
      });
    }

    if (storyNextBtn) {
      storyNextBtn.addEventListener('click', () => {
        currentStoryIndex = (currentStoryIndex + 1) % STORIES.length;
        renderStory(currentStoryIndex);
      });
    }

    renderStory(0);
  }

  function renderStory(index) {
    if (!storyStage) return;
    const s = STORIES[index];

    storyStage.innerHTML = `
      <div class="story-index-tag">${s.index}</div>
      <h3 class="story-headline">${s.title}</h3>
      <p class="story-body-text">${s.body}</p>
      <div class="story-context-meta">${s.context}</div>
    `;

    if (storyProgress) {
      storyProgress.textContent = `STORY ${String(index + 1).padStart(2, '0')} / ${String(STORIES.length).padStart(2, '0')}`;
    }
  }

  // =========================================================================
  // 8. DONATE A MEMORY & REAL PHOTO UPLOAD
  // =========================================================================
  function setupDonation() {
    let currentPhotoDataUrl = null;

    const photoFileInput = document.getElementById('donate-photo-file');
    const photoDropzone = document.getElementById('photo-dropzone');
    const uploadEmptyUI = document.getElementById('upload-empty-ui');
    const uploadPreviewUI = document.getElementById('upload-preview-ui');
    const uploadPreviewImg = document.getElementById('upload-preview-img');
    const removePhotoBtn = document.getElementById('btn-remove-photo');
    const presetBtns = document.querySelectorAll('.preset-photo-btn');

    const nameInput = document.getElementById('donate-name');
    const yearSelect = document.getElementById('donate-year');
    const placeInput = document.getElementById('donate-place');
    const categorySelect = document.getElementById('donate-category');
    const whyInput = document.getElementById('donate-why');

    const PRESETS = {
      keycard: 'assets/images/red_hotel_keycard_1791883988543.jpg',
      transit: 'assets/images/tokyo_transit_card_1791883989142.jpg',
      ring: 'assets/images/silver_engraved_ring_1791883988004.jpg',
      sunglasses: 'assets/images/vintage_sunglasses_1791883989888.jpg',
      polaroid: 'assets/images/instant_photo_print_1791883990182.jpg'
    };

    function setPreviewPhoto(url) {
      currentPhotoDataUrl = url;
      if (uploadPreviewImg) uploadPreviewImg.src = url;
      if (uploadEmptyUI) uploadEmptyUI.style.display = 'none';
      if (uploadPreviewUI) uploadPreviewUI.style.display = 'flex';
    }

    function clearPreviewPhoto() {
      currentPhotoDataUrl = null;
      if (photoFileInput) photoFileInput.value = '';
      if (uploadEmptyUI) uploadEmptyUI.style.display = 'flex';
      if (uploadPreviewUI) uploadPreviewUI.style.display = 'none';
    }

    if (photoFileInput) {
      photoFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            setPreviewPhoto(evt.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (photoDropzone) {
      photoDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        photoDropzone.classList.add('drag-over');
      });

      photoDropzone.addEventListener('dragleave', () => {
        photoDropzone.classList.remove('drag-over');
      });

      photoDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        photoDropzone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            setPreviewPhoto(evt.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (removePhotoBtn) {
      removePhotoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearPreviewPhoto();
      });
    }

    presetBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pKey = btn.getAttribute('data-preset');
        if (PRESETS[pKey]) {
          setPreviewPhoto(PRESETS[pKey]);
        }
      });
    });

    if (donationForm) {
      donationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const photoToUse = currentPhotoDataUrl || 'assets/images/red_hotel_keycard_1791883988543.jpg';

        const newObj = {
          id: 'user_' + Date.now(),
          number: 'USR',
          code: 'COMMUNITY / ' + String(Date.now()).slice(-4),
          title: nameInput.value.trim().toUpperCase(),
          year: yearSelect.value,
          place: placeInput.value.trim(),
          category: categorySelect.value,
          caption: whyInput.value.trim().slice(0, 110) + '...',
          story: whyInput.value.trim(),
          why: whyInput.value.trim(),
          image: photoToUse,
          isRealPhoto: true,
          isUserAdded: true,
          timestamp: new Date().toLocaleDateString(),
          span: 'card-span-6'
        };

        // Save in user objects localStorage
        const existing = getUserObjects();
        existing.unshift(newObj);
        localStorage.setItem('found_museum_user_objects', JSON.stringify(existing));

        // Add to live collection array immediately
        MUSEUM_OBJECTS.unshift(newObj);

        // Re-render gallery grid
        renderCollectionGrid(MUSEUM_OBJECTS);

        // Update UI
        if (donationSuccess) donationSuccess.style.display = 'block';
        donationForm.reset();
        clearPreviewPhoto();
        renderUserArchive();

        // Scroll smoothly to newly added item
        setTimeout(() => {
          const collectionSec = document.getElementById('collection');
          if (collectionSec) collectionSec.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
      });
    }
  }

  function getUserObjects() {
    try {
      return JSON.parse(localStorage.getItem('found_museum_user_objects')) || [];
    } catch {
      return [];
    }
  }

  function renderUserArchive() {
    if (!userArchiveList) return;
    const objects = getUserObjects();

    if (objects.length === 0) {
      userArchiveList.innerHTML = `
        <div class="empty-user-archive" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); line-height: 1.6; border: 1px dashed var(--border-fine); padding: 2rem; text-align: center;">
          No personal objects catalogued yet.<br>
          Use the form on the left with your real photo to register an artifact into the live exhibition.
        </div>
      `;
      return;
    }

    userArchiveList.innerHTML = '';
    objects.forEach(obj => {
      const card = document.createElement('div');
      card.className = 'user-archive-card';
      card.innerHTML = `
        <button class="btn-delete-user-obj" data-id="${obj.id}" title="Remove this object">✕</button>
        <div class="user-archive-card-with-photo">
          <div class="user-archive-thumb-wrap">
            <img src="${obj.image}" alt="${obj.title}" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.4rem;">
              <span class="card-cat-tag" style="padding: 0.15rem 0.4rem; font-size: 0.6rem;">${obj.category}</span>
              <span class="badge-real-photo" style="font-size: 0.6rem; padding: 0.15rem 0.4rem;">📷 REAL PHOTO</span>
            </div>
            <h4 style="font-size: 1.25rem; margin-bottom: 0.25rem; line-height: 1.2;">${obj.title}</h4>
            <div class="card-provenance" style="margin-bottom: 0.5rem;">${obj.year} · ${obj.place}</div>
            <p style="font-family: var(--font-serif); font-style: italic; font-size: 0.88rem; line-height: 1.4; color: var(--text-secondary); margin-bottom: 0.75rem;">
              “${obj.why}”
            </p>
            <div style="display: flex; gap: 1rem; align-items: center;">
              <button class="btn-enter btn-view-user-obj" style="padding: 0.4rem 0.8rem; font-size: 0.68rem;" data-id="${obj.id}">
                VIEW DOSSIER
              </button>
              <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">${obj.timestamp}</span>
            </div>
          </div>
        </div>
      `;

      const viewBtn = card.querySelector('.btn-view-user-obj');
      if (viewBtn) {
        viewBtn.addEventListener('click', () => {
          const idx = MUSEUM_OBJECTS.findIndex(o => o.id === obj.id);
          if (idx !== -1) openInspector(idx);
        });
      }

      const delBtn = card.querySelector('.btn-delete-user-obj');
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          const remaining = getUserObjects().filter(o => o.id !== obj.id);
          localStorage.setItem('found_museum_user_objects', JSON.stringify(remaining));

          // Also remove from MUSEUM_OBJECTS array
          const arrIdx = MUSEUM_OBJECTS.findIndex(o => o.id === obj.id);
          if (arrIdx !== -1) MUSEUM_OBJECTS.splice(arrIdx, 1);

          renderCollectionGrid(MUSEUM_OBJECTS);
          renderUserArchive();
        });
      }

      userArchiveList.appendChild(card);
    });
  }

  // =========================================================================
  // 9. RANDOM OBJECT ("SURPRISE ME")
  // =========================================================================
  function setupRandomObject() {
    let currentRandomObj = null;

    function rollRandomObject() {
      const randomIdx = Math.floor(Math.random() * MUSEUM_OBJECTS.length);
      currentRandomObj = MUSEUM_OBJECTS[randomIdx];

      const rTitle = document.getElementById('random-obj-title');
      const rMeta = document.getElementById('random-obj-meta');
      const rStory = document.getElementById('random-obj-story');
      const rImage = document.getElementById('random-obj-image');

      if (rTitle) rTitle.textContent = currentRandomObj.title;
      if (rMeta) rMeta.textContent = `${currentRandomObj.year} · ${currentRandomObj.place} [${currentRandomObj.category}]`;
      if (rStory) rStory.textContent = `“${currentRandomObj.story || currentRandomObj.why}”`;
      if (rImage) {
        rImage.src = currentRandomObj.image;
        rImage.setAttribute('referrerPolicy', 'no-referrer');
      }

      if (randomObjectModal) {
        randomObjectModal.classList.add('active');
      }
    }

    const randomLostBtn = document.querySelector('.btn-random-lost');
    if (randomLostBtn) randomLostBtn.addEventListener('click', rollRandomObject);

    const closeRandomBtn = document.getElementById('btn-close-random');
    if (closeRandomBtn) {
      closeRandomBtn.addEventListener('click', () => {
        if (randomObjectModal) randomObjectModal.classList.remove('active');
      });
    }

    const rerollBtn = document.getElementById('btn-reroll-random');
    if (rerollBtn) rerollBtn.addEventListener('click', rollRandomObject);

    const inspectRandomBtn = document.getElementById('btn-inspect-random');
    if (inspectRandomBtn) {
      inspectRandomBtn.addEventListener('click', () => {
        if (!currentRandomObj) return;
        if (randomObjectModal) randomObjectModal.classList.remove('active');
        const idx = MUSEUM_OBJECTS.findIndex(o => o.id === currentRandomObj.id);
        if (idx !== -1) openInspector(idx);
      });
    }

    if (randomObjectModal) {
      randomObjectModal.addEventListener('click', (e) => {
        if (e.target === randomObjectModal) randomObjectModal.classList.remove('active');
      });
    }
  }

  // =========================================================================
  // 10. CURATOR REFLECTION MODE
  // =========================================================================
  function setupCuratorMode() {
    const triggerLinks = document.querySelectorAll('.curator-trigger-link');
    if (!curatorModal) return;

    const closeBtn = document.getElementById('btn-close-curator');
    const nextBtn = document.getElementById('btn-next-curator');

    function showCuratorNote() {
      if (curatorQuoteEl) {
        curatorQuoteEl.textContent = CURATOR_NOTES[currentCuratorIndex];
      }
      curatorModal.classList.add('active');
    }

    triggerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showCuratorNote();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', () => curatorModal.classList.remove('active'));

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentCuratorIndex = (currentCuratorIndex + 1) % CURATOR_NOTES.length;
        if (curatorQuoteEl) {
          curatorQuoteEl.textContent = CURATOR_NOTES[currentCuratorIndex];
        }
      });
    }

    curatorModal.addEventListener('click', (e) => {
      if (e.target === curatorModal) curatorModal.classList.remove('active');
    });
  }

  // =========================================================================
  // 11. NAVIGATION & SCROLL TRACKING
  // =========================================================================
  function setupNavigation() {
    const enterBtn = document.getElementById('btn-enter-museum');
    if (enterBtn) {
      enterBtn.addEventListener('click', () => {
        const target = document.getElementById('collection');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const returnBtn = document.getElementById('btn-return-collection');
    if (returnBtn) {
      returnBtn.addEventListener('click', () => {
        const target = document.getElementById('collection');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      if (museumNav) {
        museumNav.classList.toggle('scrolled', window.scrollY > 40);
      }

      let currentSection = '';
      const scrollPos = window.scrollY + 180;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
      });
    }, { passive: true });

    if (mobileToggle && mobileDrawer) {
      function closeMobileMenu() {
        mobileDrawer.classList.remove('active');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      function openMobileMenu() {
        mobileDrawer.classList.add('active');
        mobileToggle.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('active');
        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      mobileDrawer.querySelectorAll('a').forEach(l => {
        l.addEventListener('click', () => {
          closeMobileMenu();
        });
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
          closeMobileMenu();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 850 && mobileDrawer.classList.contains('active')) {
          closeMobileMenu();
        }
      }, { passive: true });
    }
  }

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
