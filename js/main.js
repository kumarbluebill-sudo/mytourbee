/* ============================================
   MY TOURBEE — Main JavaScript
   Navigation, Modals, Form, Animations, Itineraries
   ============================================ */

// ========== ITINERARY DATA ==========
const itineraryData = {
    'golden-triangle': {
        title: 'Golden Triangle',
        route: 'Delhi → Agra → Jaipur',
        duration: '6 Days / 5 Nights',
        price: '₹24,999',
        priceDetail: 'Per person on twin sharing | Child (5-11): ₹18,999',
        days: [
            {
                day: 'Day 1 — Arrival in Delhi',
                desc: 'Arrive at Delhi Airport/Railway Station. Meet our representative and transfer to your hotel. Evening at leisure to explore Connaught Place and enjoy a welcome dinner at a local restaurant. Overnight stay in Delhi.',
                meals: '🍽️ Dinner'
            },
            {
                day: 'Day 2 — Delhi Sightseeing',
                desc: 'Full day guided tour of Old & New Delhi. Visit Red Fort, Jama Masjid, Chandni Chowk (rickshaw ride), Raj Ghat, India Gate, Parliament House, Rashtrapati Bhavan, Humayun\'s Tomb, and Qutub Minar. Evening visit to Akshardham Temple with fountain show.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 3 — Delhi to Agra (230 km, ~4 hrs)',
                desc: 'After breakfast, drive to Agra via the Yamuna Expressway. Visit the magnificent Taj Mahal during sunset for the most magical views. Explore Agra Fort and enjoy the Mehtab Bagh view of Taj Mahal. Overnight stay in Agra.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 4 — Agra to Jaipur (240 km, ~5 hrs)',
                desc: 'Early morning optional visit to Taj Mahal at sunrise. After breakfast, drive to Jaipur with a stop at Fatehpur Sikri — the deserted Mughal city. Arrive in Jaipur and check-in. Evening free to explore local bazaars and shop for handicrafts and jewellery.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 5 — Jaipur Sightseeing',
                desc: 'Full day tour of the Pink City. Visit Amber Fort (with elephant/jeep ride), Jal Mahal, City Palace, Jantar Mantar, Hawa Mahal, and Nahargarh Fort for sunset views. Evening enjoy a traditional Rajasthani dinner with folk dance at Chokhi Dhani.',
                meals: '🍽️ Breakfast, Dinner (Chokhi Dhani)'
            },
            {
                day: 'Day 6 — Departure',
                desc: 'After breakfast, free time for last-minute shopping. Transfer to Jaipur Airport/Railway Station or drive back to Delhi (280 km, ~5 hrs) for your onward journey. Tour ends with beautiful memories!',
                meals: '🍽️ Breakfast'
            }
        ],
        inclusions: [
            '5 Nights accommodation in 3-star/4-star hotels',
            'Daily breakfast + select meals as mentioned',
            'All transfers & sightseeing by AC vehicle',
            'Professional English-speaking guide',
            'All monument entry fees',
            'Elephant/Jeep ride at Amber Fort',
            'Chokhi Dhani dinner experience',
            'All applicable taxes'
        ],
        exclusions: [
            'Airfare / Train tickets to and from Delhi/Jaipur',
            'Camera & video charges at monuments',
            'Personal expenses (laundry, tips, etc.)',
            'Travel insurance',
            'Any meals not mentioned in itinerary',
            'Any activity not mentioned in inclusions'
        ]
    },

    'kerala': {
        title: 'Kerala Backwaters & Hills',
        route: 'Kochi → Munnar → Thekkady → Alleppey → Kovalam',
        duration: '7 Days / 6 Nights',
        price: '₹29,999',
        priceDetail: 'Per person on twin sharing | Child (5-11): ₹21,999',
        days: [
            {
                day: 'Day 1 — Arrival in Kochi',
                desc: 'Arrive at Cochin International Airport. Transfer to hotel. Evening visit Fort Kochi — Chinese Fishing Nets, St. Francis Church, Santa Cruz Basilica, and the Jewish Synagogue. Enjoy a Kathakali dance performance. Overnight in Kochi.',
                meals: '🍽️ Dinner'
            },
            {
                day: 'Day 2 — Kochi to Munnar (130 km, ~4 hrs)',
                desc: 'Drive through scenic Western Ghats to Munnar — the "Kashmir of South India." En route visit Cheeyappara & Valara Waterfalls. Arrive in Munnar and visit the Tea Museum. Evening walk through the tea gardens. Overnight in Munnar.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 3 — Munnar Sightseeing',
                desc: 'Full day exploring Munnar\'s beauty. Visit Eravikulam National Park (home of Nilgiri Tahr), Mattupetty Dam, Echo Point, Top Station for panoramic views, and the vast tea plantations. Photo stops at the flower gardens. Overnight in Munnar.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 4 — Munnar to Thekkady (110 km, ~4 hrs)',
                desc: 'Drive to Thekkady — home of the Periyar Wildlife Sanctuary. Afternoon bamboo rafting or boat ride on Periyar Lake to spot wild elephants and birds. Evening visit a spice plantation — cardamom, pepper, cinnamon, and vanilla. Overnight in Thekkady.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 5 — Thekkady to Alleppey (140 km, ~4 hrs)',
                desc: 'Drive to Alleppey — the "Venice of the East." Board your premium houseboat for a magical overnight cruise through the Kerala backwaters. Enjoy freshly cooked Kerala meals on board, watch the sunset over the lagoons, and sleep under the stars.',
                meals: '🍽️ Breakfast, Lunch, Dinner (on houseboat)'
            },
            {
                day: 'Day 6 — Alleppey to Kovalam Beach (170 km, ~4 hrs)',
                desc: 'Disembark from houseboat after breakfast. Drive to Kovalam Beach near Trivandrum. Check into beach resort. Relax on the crescent-shaped Lighthouse Beach. Optional Ayurvedic massage at the resort spa. Enjoy sunset on the beach. Overnight in Kovalam.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 7 — Departure from Trivandrum',
                desc: 'Morning at leisure on the beach. After breakfast, transfer to Trivandrum Airport/Railway Station for your onward journey. Tour ends with memories of God\'s Own Country!',
                meals: '🍽️ Breakfast'
            }
        ],
        inclusions: [
            '6 Nights accommodation (Hotels + 1 Night Houseboat)',
            'Daily breakfast + select meals as mentioned',
            'Premium AC houseboat with all meals',
            'All transfers & sightseeing by AC vehicle',
            'Periyar boat ride / bamboo rafting',
            'Spice plantation visit with guide',
            'Kathakali dance show in Kochi',
            'All applicable taxes'
        ],
        exclusions: [
            'Airfare / Train tickets',
            'Ayurvedic spa treatments',
            'Personal expenses and tips',
            'Travel insurance',
            'Camera charges at national parks',
            'Any activity not mentioned'
        ]
    },

    'goa': {
        title: 'Goa Beach Holiday',
        route: 'North Goa → South Goa → Old Goa',
        duration: '5 Days / 4 Nights',
        price: '₹18,999',
        priceDetail: 'Per person on twin sharing | Child (5-11): ₹13,999',
        days: [
            {
                day: 'Day 1 — Arrival in Goa',
                desc: 'Arrive at Goa Airport. Transfer to beach resort in North Goa. Check-in and relax. Evening explore Calangute/Baga Beach area — beach shacks, live music, and the vibrant Goan nightlife. Welcome dinner at a beachside restaurant.',
                meals: '🍽️ Dinner'
            },
            {
                day: 'Day 2 — North Goa Tour',
                desc: 'Visit Fort Aguada, Sinquerim Beach, Chapora Fort (the famous "Dil Chahta Hai" fort). Explore Anjuna Flea Market, Vagator Beach, and the Baga nightlife strip. Enjoy water sports — jet skiing, parasailing, banana boat ride. Evening beach party.',
                meals: '🍽️ Breakfast'
            },
            {
                day: 'Day 3 — Old Goa & Spice Plantation',
                desc: 'Morning visit Old Goa — the UNESCO World Heritage churches including Basilica of Bom Jesus (tomb of St. Francis Xavier) and Se Cathedral. Afternoon visit a spice plantation with traditional Goan lunch and guided tour. Evening cruise on the Mandovi River with live music and dance.',
                meals: '🍽️ Breakfast, Lunch (at Spice Plantation)'
            },
            {
                day: 'Day 4 — South Goa Exploration',
                desc: 'Day trip to serene South Goa beaches — Palolem, Colva, and Benaulim. Visit the Mangueshi Temple, explore Fontainhas (Latin Quarter) in Panaji. Shop at the Mapusa Friday Market for cashews, feni, and souvenirs. Farewell dinner at a premium beach restaurant.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 5 — Departure',
                desc: 'Morning at leisure — relax on the beach or enjoy the resort pool. After breakfast, transfer to Goa Airport/Railway Station for your onward journey.',
                meals: '🍽️ Breakfast'
            }
        ],
        inclusions: [
            '4 Nights in beach resort (3-star/4-star)',
            'Daily breakfast + select meals',
            'All transfers by AC vehicle',
            'North Goa & South Goa sightseeing',
            'Water sports package (Jet Ski + Parasailing + Banana Boat)',
            'Mandovi River cruise with entertainment',
            'Spice plantation visit with lunch',
            'All applicable taxes'
        ],
        exclusions: [
            'Airfare / Train tickets',
            'Drinks and alcoholic beverages',
            'Personal expenses and tips',
            'Travel insurance',
            'Additional water sports activities',
            'Casino entry fees'
        ]
    },

    'rajasthan': {
        title: 'Rajasthan Royal Heritage',
        route: 'Jaipur → Jodhpur → Jaisalmer → Udaipur',
        duration: '8 Days / 7 Nights',
        price: '₹34,999',
        priceDetail: 'Per person on twin sharing | Child (5-11): ₹25,999',
        days: [
            {
                day: 'Day 1 — Arrival in Jaipur',
                desc: 'Arrive in Jaipur — the Pink City. Check into heritage hotel. Evening explore the colourful bazaars of Jaipur for traditional textiles, gemstones, and blue pottery. Welcome dinner at a heritage restaurant.',
                meals: '🍽️ Dinner'
            },
            {
                day: 'Day 2 — Jaipur Sightseeing',
                desc: 'Visit Amber Fort with jeep ride, City Palace, Jantar Mantar (UNESCO), Hawa Mahal, and Nahargarh Fort for sunset. Evening enjoy Rajasthani cultural dinner with folk dance and puppet show at Chokhi Dhani.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 3 — Jaipur to Jodhpur (340 km, ~6 hrs)',
                desc: 'Drive to Jodhpur — the Blue City. En route visit Ajmer Sharif Dargah and Pushkar Lake. Arrive in Jodhpur and check into hotel. Evening walk through the blue streets of the old city. Overnight in Jodhpur.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 4 — Jodhpur Sightseeing',
                desc: 'Visit the magnificent Mehrangarh Fort (one of India\'s largest), Jaswant Thada, Umaid Bhawan Palace Museum, and the Mandore Gardens. Enjoy zip-lining across the fort walls (optional). Evening local food tour — mirchi vada, mawa kachori. Overnight in Jodhpur.',
                meals: '🍽️ Breakfast'
            },
            {
                day: 'Day 5 — Jodhpur to Jaisalmer (290 km, ~5 hrs)',
                desc: 'Drive to Jaisalmer — the Golden City in the heart of the Thar Desert. Check into haveli-style hotel. Visit Jaisalmer Fort (living fort), Patwon ki Haveli, and Gadisar Lake. Evening at leisure in the fort market.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 6 — Jaisalmer Desert Safari',
                desc: 'Morning visit Kuldhara Abandoned Village and Bada Bagh. Afternoon depart for Sam Sand Dunes — enjoy camel safari into the desert, watch the spectacular sunset over the dunes, and spend the evening at a desert camp with cultural performances, bonfire, and stargazing.',
                meals: '🍽️ Breakfast, Lunch, Dinner (at desert camp)'
            },
            {
                day: 'Day 7 — Jaisalmer to Udaipur (550 km, ~9 hrs / flight)',
                desc: 'Early morning sunrise over the sand dunes. Drive or fly to Udaipur — the City of Lakes. Check into lakeside hotel. Evening visit Jagdish Temple and boat ride on Lake Pichola with views of the City Palace and Jag Mandir. Farewell dinner at a rooftop restaurant overlooking the lake.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 8 — Udaipur & Departure',
                desc: 'Morning visit City Palace, Saheliyon ki Bari (Garden of Maidens), and Fateh Sagar Lake. After lunch, transfer to Udaipur Airport for your onward journey. Tour ends with royal memories!',
                meals: '🍽️ Breakfast, Lunch'
            }
        ],
        inclusions: [
            '7 Nights accommodation in heritage/boutique hotels',
            'Daily breakfast + select meals',
            'All transfers & sightseeing by AC vehicle',
            'Camel safari & desert camp experience',
            'Lake Pichola boat ride in Udaipur',
            'Jeep ride at Amber Fort',
            'Chokhi Dhani cultural dinner',
            'All monument entry fees',
            'Professional guide at all major sites'
        ],
        exclusions: [
            'Airfare / Train tickets',
            'Zip-lining at Mehrangarh Fort (optional)',
            'Personal expenses and tips',
            'Travel insurance',
            'Camera fees at palaces',
            'Any services not mentioned'
        ]
    },

    'thailand': {
        title: 'Thailand Explorer',
        route: 'Bangkok → Pattaya → Phuket',
        duration: '7 Days / 6 Nights',
        price: '₹49,999',
        priceDetail: 'Per person on twin sharing | Child (5-11): ₹39,999 | Visa on arrival included',
        days: [
            {
                day: 'Day 1 — Arrival in Bangkok',
                desc: 'Arrive at Suvarnabhumi Airport. Meet our Thai representative and transfer to hotel. Evening explore Khao San Road or Asiatique The Riverfront — Bangkok\'s famous night market on the Chao Phraya River. Welcome dinner with authentic Thai cuisine.',
                meals: '🍽️ Dinner'
            },
            {
                day: 'Day 2 — Bangkok City Tour',
                desc: 'Full day guided tour: Visit the Grand Palace & Wat Phra Kaew (Temple of the Emerald Buddha), Wat Pho (Reclining Buddha), and Wat Arun (Temple of Dawn). Afternoon visit the Floating Market at Damnoen Saduak. Evening enjoy a Chao Phraya dinner cruise with live entertainment.',
                meals: '🍽️ Breakfast, Dinner (Cruise)'
            },
            {
                day: 'Day 3 — Bangkok to Pattaya (150 km, ~2 hrs)',
                desc: 'Transfer to Pattaya — Thailand\'s beach playground. Check into beachfront hotel. Visit Nong Nooch Tropical Garden, Khao Chi Chan (Buddha Mountain), and Art in Paradise 3D Museum. Evening walk along Walking Street for vibrant nightlife.',
                meals: '🍽️ Breakfast'
            },
            {
                day: 'Day 4 — Coral Island & Water Activities',
                desc: 'Speedboat trip to Coral Island (Koh Larn). Enjoy crystal-clear waters with snorkeling, parasailing, sea walking, and glass-bottom boat ride. Lunch on the island. Return to Pattaya for Alcazar Cabaret Show in the evening.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 5 — Pattaya to Phuket (Flight)',
                desc: 'Fly to Phuket — Thailand\'s largest island. Transfer to beach resort. Relax on Patong Beach. Evening explore Bangla Road and enjoy authentic Thai street food. Optional Thai massage at a local spa.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 6 — Phi Phi Islands Day Trip',
                desc: 'Full day speedboat tour to the famous Phi Phi Islands. Visit Maya Bay (from "The Beach" movie), snorkel in crystal-clear turquoise waters, visit Monkey Beach, and enjoy a beachside lunch at Phi Phi Don. Sunset views on the return journey. Farewell dinner at a beachside restaurant.',
                meals: '🍽️ Breakfast, Lunch, Dinner'
            },
            {
                day: 'Day 7 — Departure from Phuket',
                desc: 'Morning at leisure — relax by the pool or the beach. Last-minute shopping at Jungceylon Mall. After breakfast, transfer to Phuket International Airport for your return flight to India.',
                meals: '🍽️ Breakfast'
            }
        ],
        inclusions: [
            '6 Nights accommodation in 3-star/4-star hotels',
            'Daily breakfast + select meals',
            'Airport transfers + all sightseeing',
            'Bangkok – Pattaya – Phuket transfers (including domestic flight)',
            'Coral Island speedboat trip with water sports',
            'Phi Phi Islands full-day tour',
            'Chao Phraya dinner cruise',
            'Alcazar Show tickets',
            'English-speaking Thai guide',
            'Thailand visa assistance',
            'All applicable taxes'
        ],
        exclusions: [
            'International airfare (India to Thailand)',
            'Thailand visa on arrival fee (~₹2,000)',
            'Travel insurance',
            'Optional Thai massage & spa',
            'Personal expenses, shopping, tips',
            'Any meals not mentioned'
        ]
    },

    'bali': {
        title: 'Bali Paradise',
        route: 'Seminyak → Ubud → Kintamani → Nusa Dua',
        duration: '6 Days / 5 Nights',
        price: '₹54,999',
        priceDetail: 'Per person on twin sharing | Child (5-11): ₹42,999 | Visa free for Indians',
        days: [
            {
                day: 'Day 1 — Arrival in Bali',
                desc: 'Arrive at Ngurah Rai International Airport. Welcome with traditional Balinese flower garland. Transfer to your villa/resort in Seminyak. Evening relax at a beach club — enjoy sunset cocktails overlooking the Indian Ocean. Welcome dinner at a Balinese restaurant.',
                meals: '🍽️ Dinner'
            },
            {
                day: 'Day 2 — Ubud Cultural Tour',
                desc: 'Full day exploring Ubud — the cultural heart of Bali. Visit the Sacred Monkey Forest Sanctuary, Ubud Royal Palace, Ubud Art Market, and Tegallalang Rice Terraces (iconic photo spot). Experience a traditional Balinese cooking class. Evening watch the mesmerizing Kecak Fire Dance at Uluwatu Temple perched on a cliff.',
                meals: '🍽️ Breakfast, Lunch (cooking class)'
            },
            {
                day: 'Day 3 — Kintamani Volcano & Water Temples',
                desc: 'Drive to Kintamani for breathtaking views of Mount Batur and its crater lake. Visit Tirta Empul — the holy water temple for a spiritual purification ceremony. Stop at Tegenungan Waterfall for a refreshing swim. Visit a coffee plantation for the famous Luwak coffee tasting.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 4 — Nusa Penida Island Day Trip',
                desc: 'Speedboat to Nusa Penida island. Visit the iconic Kelingking Beach (T-Rex cliff), Crystal Bay for snorkeling, Angel\'s Billabong natural pool, and Broken Beach rock arch. Lunch at a clifftop restaurant. Return to Bali by evening.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 5 — Beach Day & Tanah Lot Sunset',
                desc: 'Morning at leisure — enjoy the resort pool, spa, or beach. Afternoon visit the Garuda Wisnu Kencana cultural park. Evening visit Tanah Lot — the iconic sea temple perched on a rock — for one of Bali\'s most spectacular sunsets. Farewell dinner at a premium beachfront restaurant.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 6 — Departure',
                desc: 'Morning at leisure — last-minute shopping at Seminyak Square or Kuta Beachwalk. After breakfast, transfer to airport for your return flight. Selamat jalan — farewell from the Island of Gods!',
                meals: '🍽️ Breakfast'
            }
        ],
        inclusions: [
            '5 Nights in premium villa/resort with pool',
            'Daily breakfast + select meals',
            'Airport transfers + all sightseeing by AC vehicle',
            'Nusa Penida speedboat day trip',
            'Kecak Fire Dance show tickets',
            'Balinese cooking class',
            'Luwak coffee plantation visit',
            'English-speaking Balinese guide',
            'All temple entry fees & sarong rental',
            'All applicable taxes'
        ],
        exclusions: [
            'International airfare (India to Bali)',
            'Travel insurance',
            'Spa & wellness treatments',
            'Water sports at beaches',
            'Personal expenses, shopping, tips',
            'Any meals not mentioned'
        ]
    },

    'europe': {
        title: 'Europe Highlights',
        route: 'Paris → Zurich → Interlaken → Rome → Vatican',
        duration: '10 Days / 9 Nights',
        price: '₹1,49,999',
        priceDetail: 'Per person on twin sharing | Child (5-11): ₹1,19,999 | Schengen visa assistance included',
        days: [
            {
                day: 'Day 1 — Arrival in Paris',
                desc: 'Arrive at Charles de Gaulle Airport, Paris. Transfer to your hotel near the Champs-Élysées. Evening Seine River cruise with dinner — watch Paris light up including the Eiffel Tower\'s sparkling lights. Overnight in Paris.',
                meals: '🍽️ Dinner (Seine Cruise)'
            },
            {
                day: 'Day 2 — Paris City Tour',
                desc: 'Full day guided tour: Visit the Eiffel Tower (2nd level access), Louvre Museum (Mona Lisa!), Arc de Triomphe, Champs-Élysées, Notre-Dame Cathedral (exterior), and Montmartre. Afternoon free for shopping at Galeries Lafayette.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 3 — Paris Free Day & Disneyland Option',
                desc: 'Free day in Paris. Optional visit to Disneyland Paris or Palace of Versailles (at additional cost). Explore charming Parisian cafés, art galleries, and Le Marais district. Evening stroll along the Seine.',
                meals: '🍽️ Breakfast'
            },
            {
                day: 'Day 4 — Paris to Zurich (TGV Train, ~4 hrs)',
                desc: 'Morning TGV high-speed train to Zurich, Switzerland. Arrive and explore the Old Town — Lindenhof Hill, Bahnhofstrasse (luxury shopping street), Lake Zurich, and Grossmünster Church. Evening Swiss fondue dinner experience.',
                meals: '🍽️ Breakfast, Dinner (Fondue)'
            },
            {
                day: 'Day 5 — Interlaken & Jungfraujoch',
                desc: 'Day trip to Interlaken — the adventure capital of Switzerland. Take the scenic cogwheel train to Jungfraujoch — the "Top of Europe" (3,454m). Visit the Ice Palace, Sphinx Observatory, and enjoy the panoramic views of Aletsch Glacier. Breathtaking experience!',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 6 — Mt. Titlis & Lucerne',
                desc: 'Visit Mt. Titlis via the world\'s first revolving cable car. Experience the Titlis Cliff Walk (Europe\'s highest suspension bridge). Drive to Lucerne — visit Chapel Bridge, Lion Monument, and enjoy lakeside views. Evening at leisure.',
                meals: '🍽️ Breakfast'
            },
            {
                day: 'Day 7 — Zurich to Rome (Flight)',
                desc: 'Morning flight to Rome, Italy. Arrive and visit the ancient Colosseum (skip-the-line), Roman Forum, and Palatine Hill. Walk past the Trevi Fountain (toss a coin!) and the Spanish Steps. Evening dinner in the charming Trastevere neighbourhood.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 8 — Vatican City & Rome',
                desc: 'Morning visit Vatican City — St. Peter\'s Basilica (the world\'s largest church), Vatican Museums, and the breathtaking Sistine Chapel (Michelangelo\'s masterpiece). Afternoon visit Piazza Navona and the Pantheon. Evening gelato walk!',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 9 — Florence Day Trip (Optional) or Rome Free Day',
                desc: 'Optional day trip to Florence by high-speed train — visit the Duomo, Ponte Vecchio, Uffizi Gallery. Or free day in Rome for shopping at Via del Corso, explore neighbourhood markets, and enjoy Italian coffee culture. Farewell dinner at a rooftop restaurant with city views.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 10 — Departure from Rome',
                desc: 'Morning at leisure for last-minute shopping. Transfer to Rome Fiumicino Airport for your return flight to India. Arrivederci — until we meet again! Tour ends.',
                meals: '🍽️ Breakfast'
            }
        ],
        inclusions: [
            '9 Nights accommodation in 3-star/4-star hotels',
            'Daily breakfast + select meals as mentioned',
            'Paris to Zurich TGV train ticket',
            'Zurich to Rome flight ticket',
            'All transfers & sightseeing by coach/train',
            'Eiffel Tower 2nd level entry',
            'Louvre Museum skip-the-line ticket',
            'Jungfraujoch cogwheel train ticket',
            'Mt. Titlis cable car & Cliff Walk',
            'Colosseum skip-the-line entry',
            'Vatican Museums & Sistine Chapel entry',
            'Seine River dinner cruise',
            'Professional multilingual guide',
            'Schengen visa assistance',
            'Travel insurance (basic)',
            'All applicable taxes'
        ],
        exclusions: [
            'International airfare (India to Paris, Rome to India)',
            'Schengen visa fee (~₹7,000)',
            'Disneyland Paris / Versailles (optional, ~₹8,000)',
            'Florence day trip (optional, ~₹12,000)',
            'Personal expenses, shopping, tips',
            'City taxes at hotels (paid locally)',
            'Any meals not mentioned',
            'Forex & currency exchange charges'
        ]
    },

    'dubai': {
        title: 'Dubai & Abu Dhabi',
        route: 'Dubai → Abu Dhabi → Desert Safari',
        duration: '6 Days / 5 Nights',
        price: '₹59,999',
        priceDetail: 'Per person on twin sharing | Child (5-11): ₹44,999 | UAE visa included',
        days: [
            {
                day: 'Day 1 — Arrival in Dubai',
                desc: 'Arrive at Dubai International Airport. Meet our representative and transfer to your hotel. Evening enjoy a stunning Dhow Cruise on Dubai Creek — buffet dinner with live entertainment, passing through the illuminated city skyline. Overnight in Dubai.',
                meals: '🍽️ Dinner (Dhow Cruise)'
            },
            {
                day: 'Day 2 — Dubai City Tour & Burj Khalifa',
                desc: 'Half-day city tour: Visit Jumeirah Mosque, Dubai Museum, Gold Souk, Spice Souk, and photo stop at Burj Al Arab. Afternoon visit Dubai Mall — world\'s largest mall, Dubai Aquarium, and ascend the iconic Burj Khalifa (124th floor) for panoramic views. Evening watch the Dubai Fountain show.',
                meals: '🍽️ Breakfast'
            },
            {
                day: 'Day 3 — Desert Safari',
                desc: 'Morning free for shopping or leisure. Afternoon pickup for an exciting Desert Safari — dune bashing in 4x4 Land Cruiser, sandboarding, camel ride, quad biking (optional). Evening at a Bedouin-style desert camp with BBQ dinner, belly dancing, Tanoura show, henna painting, and stargazing.',
                meals: '🍽️ Breakfast, BBQ Dinner (desert camp)'
            },
            {
                day: 'Day 4 — Abu Dhabi Day Trip (150 km, ~2 hrs)',
                desc: 'Full day trip to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque (one of the world\'s largest and most beautiful mosques). Drive along the Corniche, visit Yas Island, and explore the Heritage Village. Photo stop at Emirates Palace. Return to Dubai by evening.',
                meals: '🍽️ Breakfast, Lunch'
            },
            {
                day: 'Day 5 — Dubai Attractions & Shopping',
                desc: 'Visit Palm Jumeirah — Atlantis The Palm photo stop. Enjoy the Aquaventure Waterpark or visit the Dubai Frame (optional). Afternoon shopping at Mall of the Emirates (with indoor ski slope). Evening at Global Village or Dubai Marina walk. Farewell dinner at a rooftop restaurant.',
                meals: '🍽️ Breakfast, Dinner'
            },
            {
                day: 'Day 6 — Departure',
                desc: 'Morning free for any last-minute shopping at duty-free. Transfer to Dubai International Airport for your return flight. Khuda Hafiz — Dubai memories forever!',
                meals: '🍽️ Breakfast'
            }
        ],
        inclusions: [
            '5 Nights accommodation in 4-star hotel',
            'Daily breakfast + select meals',
            'Airport transfers + all sightseeing by AC vehicle',
            'Burj Khalifa 124th floor ticket',
            'Desert Safari with BBQ dinner + entertainment',
            'Dhow Cruise with dinner',
            'Abu Dhabi full-day tour',
            'Dubai city tour',
            'UAE tourist visa processing',
            'English-speaking guide',
            'All applicable taxes'
        ],
        exclusions: [
            'International airfare (India to Dubai)',
            'Aquaventure Waterpark / Dubai Frame (optional)',
            'Quad biking in desert (optional, ~₹3,000)',
            'Global Village entry (optional)',
            'Personal expenses, shopping, tips',
            'Any meals not mentioned',
            'Travel insurance'
        ]
    }
};


// ========== INITIALIZATION (Fault-Tolerant) ==========
function initApp() {
    document.documentElement.classList.add('js-loaded');

    // Remove preloader immediately if present
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        preloader.style.display = 'none';
    }

    try { initNavigation(); } catch (e) { console.warn('Navigation init warning:', e); }
    try { initParticles(); } catch (e) { console.warn('Particles init warning:', e); }
    try { initScrollReveal(); } catch (e) { console.warn('ScrollReveal init warning:', e); }
    try { initCounters(); } catch (e) { console.warn('Counters init warning:', e); }
    try { initTestimonials(); } catch (e) { console.warn('Testimonials init warning:', e); }
    try { initBookingForm(); } catch (e) { console.warn('BookingForm init warning:', e); }
    try { initSmoothScroll(); } catch (e) { console.warn('SmoothScroll init warning:', e); }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}


// ========== NAVIGATION ==========
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });
}


// ========== PARTICLES ==========
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${6 + Math.random() * 6}s`;
        particle.style.width = `${2 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}


// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px'
    });

    reveals.forEach(el => observer.observe(el));

    // Fallback: reveal all after 800ms so nothing is ever stuck hidden
    setTimeout(() => {
        reveals.forEach(el => el.classList.add('visible'));
    }, 800);
}


// ========== ANIMATED COUNTERS ==========
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let counted = false;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counted) {
            counted = true;
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString();
                    }
                }, 16);
            });
        }
    }, { threshold: 0.5 });

    if (counters.length > 0) {
        observer.observe(counters[0].closest('.hero-stats'));
    }
}


// ========== TESTIMONIAL SLIDER ==========
function initTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll('.testimonial-card');
    let current = 0;
    const total = cards.length;

    // Create dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }

    function goTo(index) {
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
        dotsContainer.querySelectorAll('.testimonial-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    prevBtn.addEventListener('click', () => goTo((current - 1 + total) % total));
    nextBtn.addEventListener('click', () => goTo((current + 1) % total));

    // Auto-slide
    let autoSlide = setInterval(() => goTo((current + 1) % total), 5000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => goTo((current + 1) % total), 5000);
    });
}


// ========== ITINERARY MODAL ==========
function openItinerary(packageId) {
    const data = itineraryData[packageId];
    if (!data) return;

    const modal = document.getElementById('itineraryModal');
    const content = document.getElementById('modalContent');

    let daysHTML = data.days.map(d => `
        <div class="itinerary-day">
            <h4>${d.day}</h4>
            <p>${d.desc}</p>
            <div class="meals">${d.meals}</div>
        </div>
    `).join('');

    let inclusionsHTML = data.inclusions.map(i => `<li>${i}</li>`).join('');
    let exclusionsHTML = data.exclusions.map(e => `<li>${e}</li>`).join('');

    content.innerHTML = `
        <h2>${data.title}</h2>
        <p class="modal-route">📍 ${data.route} &nbsp;|&nbsp; 🕐 ${data.duration}</p>
        
        <div class="modal-price-bar">
            <span class="price-main">${data.price} per person</span>
            <span class="price-detail">${data.priceDetail}</span>
        </div>

        <h3 style="font-family: var(--font-heading); font-weight: 700; margin-bottom: 20px; color: var(--text-primary);">📋 Day-by-Day Itinerary</h3>
        ${daysHTML}

        <div class="incl-excl">
            <div class="inclusions">
                <h4>✅ Inclusions</h4>
                <ul>${inclusionsHTML}</ul>
            </div>
            <div class="exclusions">
                <h4>❌ Exclusions</h4>
                <ul>${exclusionsHTML}</ul>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
document.addEventListener('click', (e) => {
    const modal = document.getElementById('itineraryModal');
    if (e.target === modal || e.target.id === 'modalClose' || e.target.closest('#modalClose')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('itineraryModal').classList.remove('active');
        document.body.style.overflow = '';
    }
});


// ========== SELECT PACKAGE (from Book Now buttons) ==========
function selectPackage(packageName) {
    setTimeout(() => {
        const select = document.getElementById('tourPackage');
        if (select) {
            for (let option of select.options) {
                if (option.value === packageName) {
                    select.value = packageName;
                    break;
                }
            }
        }
    }, 500);
}


// ========== BOOKING FORM VALIDATION ==========
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('travelDate').setAttribute('min', today);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    // Clear errors on input
    form.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('input', () => {
            el.classList.remove('error');
            const errorEl = document.getElementById(el.id + 'Error');
            if (errorEl) errorEl.textContent = '';
        });
    });
}

function validateForm() {
    let valid = true;

    // Full Name
    const name = document.getElementById('fullName');
    if (!name.value.trim() || name.value.trim().length < 3) {
        showError('fullName', 'Please enter your full name (min 3 characters)');
        valid = false;
    }

    // Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError('email', 'Please enter a valid email address');
        valid = false;
    }

    // Phone
    const phone = document.getElementById('phone');
    const phoneVal = phone.value.replace(/\s+/g, '').replace(/[-()]/g, '');
    if (phoneVal.length < 10) {
        showError('phone', 'Please enter a valid phone number');
        valid = false;
    }

    // Tour Package
    const tourPackage = document.getElementById('tourPackage');
    if (!tourPackage.value) {
        showError('tourPackage', 'Please select a tour package');
        valid = false;
    }

    // Travel Date
    const travelDate = document.getElementById('travelDate');
    if (!travelDate.value) {
        showError('travelDate', 'Please select a travel date');
        valid = false;
    }

    // Adults
    const adults = document.getElementById('adults');
    if (!adults.value) {
        showError('adults', 'Please select number of adults');
        valid = false;
    }

    return valid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    if (field) field.classList.add('error');
    if (errorEl) errorEl.textContent = message;
}

function submitForm() {
    const btn = document.getElementById('submitBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnLoader = btn.querySelector('.btn-loader');

    // Show loading
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-flex';
    btn.disabled = true;

    // Simulate submission
    setTimeout(() => {
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        btn.disabled = false;

        // Show toast
        const toast = document.getElementById('successToast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 5000);

        // Reset form
        document.getElementById('bookingForm').reset();
    }, 2000);
}


// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            try {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } catch (err) {
                // Ignore invalid selector
            }
        });
    });
}
