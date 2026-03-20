const packages = [
  // --- Adventure Packages ---
  {
    id: 'tungnath-trek',
    name: 'Tungnath Chandrashila Trek',
    destination: 'Uttarakhand',
    price: 12500,
    duration: '4 Days / 3 Nights',
    description: 'Trek to the world\'s highest Shiva temple. Experience the breathtaking panoramic views of the Himalayas from Chandrashila summit.',
    images: [
      'https://images.unsplash.com/photo-1595843469344-9c09cfa3d858',
      'https://images.unsplash.com/photo-1626127117180-6b6045bb6580'
    ],
    bestTimeToVisit: 'April to June, September to November',
    category: ['Adventure', 'Nature'],
    amenities: ['Camping Gear', 'Meals', 'Guide', 'Transport from Rishikesh'],
    itinerary: [
      { day: 1, title: 'Rishikesh to Chopta', description: 'Drive to Chopta base camp.' },
      { day: 2, title: 'Trek to Tungnath & Chandrashila', description: 'Summit trek and return to camp.' },
      { day: 3, title: 'Deoriatal Trek', description: 'Short trek to the emerald lake.' },
      { day: 4, title: 'Return', description: 'Drive back to Rishikesh.' }
    ]
  },
  {
    id: 'auli-skiing',
    name: 'Auli Skiing Adventure',
    destination: 'Uttarakhand',
    price: 18000,
    duration: '5 Days / 4 Nights',
    description: 'Learn to ski in the snow-covered slopes of Auli, offering majestic views of Nanda Devi.',
    images: [
      'https://images.unsplash.com/photo-1548575086-a647087612f0',
      'https://images.unsplash.com/photo-1605549027239-014c24578505'
    ],
    bestTimeToVisit: 'January to March',
    category: ['Adventure'],
    amenities: ['Ski Equipment', 'Instructor', 'Resort Stay', 'Cable Car Ride'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Reach Joshimath.' },
      { day: 2, title: 'Auli Skiing', description: 'Skiing lessons and practice.' },
      { day: 3, title: 'Advanced Skiing', description: 'Full day on the slopes.' },
      { day: 4, title: 'Gorson Bugyal', description: 'Trek to Gorson Bugyal.' },
      { day: 5, title: 'Departure', description: 'Return journey.' }
    ]
  },
  {
    id: 'manali-adventure',
    name: 'Manali Adventure Camp',
    destination: 'Himachal Pradesh',
    price: 15000,
    duration: '5 Days / 4 Nights',
    description: 'A mix of paragliding, river rafting, and trekking in the beautiful valleys of Manali.',
    images: [
      'https://images.unsplash.com/photo-1626621341346-bbf3d9990a23',
      'https://images.unsplash.com/photo-1589315570220-302381284d53'
    ],
    bestTimeToVisit: 'March to June',
    category: ['Adventure', 'Nature'],
    amenities: ['Adventure Gear', 'Hotel Stay', 'Transfers', 'All Meals'],
    itinerary: [
      { day: 1, title: 'Manali Arrival', description: 'Check-in and local sightseeing.' },
      { day: 2, title: 'Solang Valley', description: 'Paragliding and adventure sports.' },
      { day: 3, title: 'Kullu Rafting', description: 'White water rafting in Beas.' },
      { day: 4, title: 'Manikaran', description: 'Visit Manikaran Sahib.' },
      { day: 5, title: 'Departure', description: 'Transfer to bus stand.' }
    ]
  },

  // --- Beach Packages ---
  {
    id: 'goa-beach-paradise',
    name: 'Goa Beach Paradise',
    destination: 'Goa',
    price: 18000,
    duration: '4 Days / 3 Nights',
    description: 'Relax on golden beaches, explore Portuguese heritage, enjoy water sports, and experience Goa\'s vibrant nightlife.',
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19'
    ],
    bestTimeToVisit: 'November to February',
    category: ['Beach', 'Adventure'],
    amenities: ['Resort Stay', 'Transfers', 'Cruise', 'Water Sports'],
    itinerary: [
      { day: 1, title: 'North Goa', description: 'Beaches and markets.' },
      { day: 2, title: 'South Goa', description: 'Churches and quiet beaches.' },
      { day: 3, title: 'Water Sports', description: 'Adventure activities.' },
      { day: 4, title: 'Departure', description: 'Airport transfer.' }
    ]
  },
  {
    id: 'andaman-islands',
    name: 'Andaman Island Escape',
    destination: 'Andaman & Nicobar',
    price: 42000,
    duration: '6 Days / 5 Nights',
    description: 'Explore pristine beaches, historic cellular jail, and coral reefs in Havelock and Neil Island.',
    images: [
      'https://images.unsplash.com/photo-1589982464763-71d5b3060a63',
      'https://images.unsplash.com/photo-1544633758-a8d672722b9b'
    ],
    bestTimeToVisit: 'October to May',
    category: ['Beach', 'Nature'],
    amenities: ['Ferry Tickets', 'Hotel Stay', 'Snorkeling', 'Sightseeing'],
    itinerary: [
      { day: 1, title: 'Port Blair', description: 'Cellular Jail and Light & Sound show.' },
      { day: 2, title: 'Havelock Island', description: 'Radhanagar Beach.' },
      { day: 3, title: 'Elephant Beach', description: 'Water sports and coral viewing.' },
      { day: 4, title: 'Neil Island', description: 'Laxmanpur and Bharatpur beaches.' },
      { day: 5, title: 'Port Blair Return', description: 'Shopping and leisure.' },
      { day: 6, title: 'Departure', description: 'Airport drop.' }
    ]
  },
  {
    id: 'maldives-getaway',
    name: 'Maldives Luxury Getaway',
    destination: 'Maldives',
    price: 85000,
    duration: '4 Days / 3 Nights',
    description: 'Stay in overwater villas and enjoy the turquoise lagoons of the Maldives. Perfect for couples.',
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd'
    ],
    bestTimeToVisit: 'November to April',
    category: ['Beach', 'Nature'],
    amenities: ['Overwater Villa', 'All Meals', 'Speedboat Transfer', 'Snorkeling Gear'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Transfer to island resort.' },
      { day: 2, title: 'Water Activities', description: 'Snorkeling and kayaking.' },
      { day: 3, title: 'Leisure', description: 'Spa and sunset cruise.' },
      { day: 4, title: 'Departure', description: 'Speedboat to Male airport.' }
    ]
  },

  // --- Pilgrimage Packages ---
  {
    id: 'char-dham-yatra',
    name: 'Char Dham Yatra',
    destination: 'Uttarakhand',
    price: 20500,
    duration: '10 Days / 9 Nights',
    description: 'The ultimate spiritual journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    images: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
      'https://images.unsplash.com/photo-1609920658906-8223bd289001'
    ],
    bestTimeToVisit: 'May to October',
    category: ['Pilgrimage', 'Nature'],
    cluster: 'Char Dham',
    amenities: ['AC Vehicle', 'Hotels', 'Meals', 'Yatra Registration'],
    itinerary: [
      { day: 1, title: 'Haridwar', description: 'Arrival and Ganga Aarti.' },
      { day: 2, title: 'Barkot', description: 'Drive to Barkot.' },
      { day: 3, title: 'Yamunotri', description: 'Trek and Darshan.' },
      { day: 4, title: 'Uttarkashi', description: 'Drive and Vishwanath Temple.' },
      { day: 5, title: 'Gangotri', description: 'Darshan and holy dip.' },
      { day: 6, title: 'Guptkashi', description: 'Transfer for Kedarnath.' },
      { day: 7, title: 'Kedarnath', description: 'Trek/Helicopter and Darshan.' },
      { day: 8, title: 'Badrinath', description: 'Drive and Darshan.' },
      { day: 9, title: 'Rudraprayag', description: 'Return journey start.' },
      { day: 10, title: 'Haridwar', description: 'Drop at station.' }
    ]
  },

  {
    id: 'char-dham-yatra-haridwar',
    name: 'Char Dham Yatra from Haridwar',
    destination: 'Uttarakhand',
    price: 20500,
    duration: '10 Days / 9 Nights',
    description: 'The ultimate spiritual journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    images: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
      'https://images.unsplash.com/photo-1609920658906-8223bd289001'
    ],
    bestTimeToVisit: 'May to October',
    category: ['Pilgrimage', 'Nature'],
    cluster: 'Char Dham',
    amenities: ['AC Vehicle', 'Hotels', 'Meals', 'Yatra Registration'],
    itinerary: [
      { day: 1, title: 'Haridwar', description: 'Arrival and Ganga Aarti.' },
      { day: 2, title: 'Barkot', description: 'Drive to Barkot.' },
      { day: 3, title: 'Yamunotri', description: 'Trek and Darshan.' },
      { day: 4, title: 'Uttarkashi', description: 'Drive and Vishwanath Temple.' },
      { day: 5, title: 'Gangotri', description: 'Darshan and holy dip.' },
      { day: 6, title: 'Guptkashi', description: 'Transfer for Kedarnath.' },
      { day: 7, title: 'Kedarnath', description: 'Trek/Helicopter and Darshan.' },
      { day: 8, title: 'Badrinath', description: 'Drive and Darshan.' },
      { day: 9, title: 'Rudraprayag', description: 'Return journey start.' },
      { day: 10, title: 'Haridwar', description: 'Drop at station.' }
    ]
  },

  {
    id: 'char-dham-yatra-delhi',
    name: 'Char Dham Yatra Package from Delhi',
    destination: 'Uttarakhand',
    price: 22500,
    duration: '11 Days / 10 Nights',
    description: 'The ultimate spiritual journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    images: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
      'https://images.unsplash.com/photo-1609920658906-8223bd289001'
    ],
    bestTimeToVisit: 'May to October',
    category: ['Pilgrimage', 'Nature'],
    cluster: 'Char Dham',
    amenities: ['AC Vehicle', 'Hotels', 'Meals', 'Yatra Registration'],
    itinerary: [
      { day: 1, title: 'Haridwar', description: 'Arrival and Ganga Aarti.' },
      { day: 2, title: 'Barkot', description: 'Drive to Barkot.' },
      { day: 3, title: 'Yamunotri', description: 'Trek and Darshan.' },
      { day: 4, title: 'Uttarkashi', description: 'Drive and Vishwanath Temple.' },
      { day: 5, title: 'Gangotri', description: 'Darshan and holy dip.' },
      { day: 6, title: 'Guptkashi', description: 'Transfer for Kedarnath.' },
      { day: 7, title: 'Kedarnath', description: 'Trek/Helicopter and Darshan.' },
      { day: 8, title: 'Badrinath', description: 'Drive and Darshan.' },
      { day: 9, title: 'Rudraprayag', description: 'Return journey start.' },
      { day: 10, title: 'Haridwar', description: 'Drop at station.' }
    ]
  },

  {
    id: 'chardham-yatra',
    name: 'Char Dham Yatra 2026',
    destination: 'Uttarakhand',
    price: 21500,
    duration: '9 Days / 8 Nights',
    description: 'The ultimate spiritual journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    images: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
      'https://images.unsplash.com/photo-1609920658906-8223bd289001'
    ],
    bestTimeToVisit: 'May to October',
    category: ['Pilgrimage', 'Nature'],
    cluster: 'Char Dham',
    amenities: ['AC Vehicle', 'Hotels', 'Meals', 'Yatra Registration'],
    itinerary: [
      { day: 1, title: 'Haridwar', description: 'Arrive at Haridwar, have a warm welcome drink at your hotel. In the evening enjoy the cozy brezzes at ganga ghat while performing ganga arti Har Ki Pauri.' },
      { day: 2, title: 'Barkot', description: 'Drive to Barkot.' },
      { day: 3, title: 'Yamunotri', description: 'Trek and Darshan.' },
      { day: 4, title: 'Uttarkashi', description: 'Drive and Vishwanath Temple.' },
      { day: 5, title: 'Gangotri', description: 'Darshan and holy dip.' },
      { day: 6, title: 'Guptkashi', description: 'Transfer for Kedarnath.' },
      { day: 7, title: 'Kedarnath', description: 'Trek/Helicopter and Darshan.' },
      { day: 8, title: 'Badrinath', description: 'Drive and Darshan.' },
      { day: 9, title: 'Rudraprayag', description: 'Return journey start.' },
      { day: 10, title: 'Haridwar', description: 'Drop at station.' }
    ]
  },

  {
    id: 'brij-darshan',
    name: 'Brij Darshan',
    destination: 'Uttar Pradesh',
    price: 8000,
    duration: '2 Days / 1 Night',
    description: 'Explore the land of Lord Krishna - Mathura, Vrindavan, and Govardhan.',
    images: [
      'https://images.unsplash.com/photo-1609237748652-f27c0cae783f',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220'
    ],
    bestTimeToVisit: 'September to March',
    category: ['Pilgrimage', 'Historical'],
    amenities: ['AC Cab', 'Guide', 'Hotel', 'Prasad'],
    itinerary: [
      { day: 1, title: 'Mathura', description: 'Janmabhoomi and Dwarkadhish.' },
      { day: 2, title: 'Vrindavan', description: 'Banke Bihari and Prem Mandir.' }
    ]
  },
  {
    id: 'varanasi-spiritual',
    name: 'Varanasi Spiritual Tour',
    destination: 'Uttar Pradesh',
    price: 9500,
    duration: '3 Days / 2 Nights',
    description: 'Experience the oldest living city in the world, Ganga Aarti, and Sarnath.',
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
      'https://images.unsplash.com/photo-1596005553655-08e8b0b8c62c'
    ],
    bestTimeToVisit: 'October to March',
    category: ['Pilgrimage', 'Historical'],
    amenities: ['Boat Ride', 'Hotel', 'Airport Transfer', 'Guide'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Evening Ganga Aarti.' },
      { day: 2, title: 'Kashi Vishwanath', description: 'Temple visit and Sarnath tour.' },
      { day: 3, title: 'Departure', description: 'Morning boat ride and drop.' }
    ]
  },
  {
    id: 'kashi-vishwanath',
    name: 'Kashi Vishwanath Special',
    destination: 'Uttar Pradesh',
    price: 6000,
    duration: '2 Days / 1 Night',
    description: 'A focused tour for Darshan at the Kashi Vishwanath corridor and Kaal Bhairav.',
    images: [
      'https://images.unsplash.com/photo-1623153545620-6d45eb79e782',
      'https://images.unsplash.com/photo-1571597439433-8994f3050017'
    ],
    bestTimeToVisit: 'All year',
    category: ['Pilgrimage'],
    amenities: ['VIP Darshan Assistance', 'Hotel', 'Meals'],
    itinerary: [
      { day: 1, title: 'Darshan', description: 'Kashi Vishwanath and Annapurna temple.' },
      { day: 2, title: 'City Tour', description: 'Kaal Bhairav and departure.' }
    ]
  },

  // --- Wildlife Packages ---
  {
    id: 'ranthambore-safari',
    name: 'Ranthambore Tiger Safari',
    destination: 'Rajasthan',
    price: 14000,
    duration: '3 Days / 2 Nights',
    description: 'Spot the majestic Royal Bengal Tiger in the wild forests of Ranthambore.',
    images: [
      'https://images.unsplash.com/photo-1518882570168-933f20e40269',
      'https://images.unsplash.com/photo-1629814493390-252a1276226f'
    ],
    bestTimeToVisit: 'October to June',
    category: ['Wildlife', 'Adventure'],
    amenities: ['Jeep Safari', 'Resort Stay', 'All Meals', 'Naturalist'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Check-in and leisure.' },
      { day: 2, title: 'Safari', description: 'Morning and evening jungle safaris.' },
      { day: 3, title: 'Departure', description: 'Visit Ranthambore Fort and leave.' }
    ]
  },
  {
    id: 'kaziranga-national-park',
    name: 'Kaziranga Rhino Tour',
    destination: 'Assam',
    price: 16500,
    duration: '4 Days / 3 Nights',
    description: 'Home to the one-horned rhinoceros. Explore the biodiversity of Assam.',
    images: [
      'https://images.unsplash.com/photo-1596716075908-11f26a19280d',
      'https://images.unsplash.com/photo-1579603092287-2172772719a7'
    ],
    bestTimeToVisit: 'November to April',
    category: ['Wildlife', 'Nature'],
    amenities: ['Elephant Safari', 'Jeep Safari', 'Hotel', 'Meals'],
    itinerary: [
      { day: 1, title: 'Guwahati to Kaziranga', description: 'Drive and check-in.' },
      { day: 2, title: 'Jungle Activities', description: 'Elephant safari and orchid park.' },
      { day: 3, title: 'Deep Jungle', description: 'Jeep safari in central range.' },
      { day: 4, title: 'Departure', description: 'Drive back to Guwahati.' }
    ]
  },
  {
    id: 'jim-corbett-safari',
    name: 'Jim Corbett Wilderness',
    destination: 'Uttarakhand',
    price: 12000,
    duration: '3 Days / 2 Nights',
    description: 'India\'s oldest national park, famous for tigers, elephants, and bird watching.',
    images: [
      'https://images.unsplash.com/photo-1603576352877-c9179973686d',
      'https://images.unsplash.com/photo-1582239023533-5c82276c1a82'
    ],
    bestTimeToVisit: 'November to June',
    category: ['Wildlife', 'Adventure'],
    amenities: ['Jungle Safari', 'River Side Resort', 'Bonfire', 'Meals'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Drive from Delhi/Ramnagar.' },
      { day: 2, title: 'Safari', description: 'Morning jeep safari and river visit.' },
      { day: 3, title: 'Departure', description: 'Visit museum and return.' }
    ]
  },

  // --- Historical Packages ---
  {
    id: 'jaipur-heritage-tour',
    name: 'Jaipur Heritage Tour',
    destination: 'Rajasthan',
    price: 12000,
    duration: '3 Days / 2 Nights',
    description: 'Discover the Pink City\'s magnificent palaces, forts, and vibrant bazaars.',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245'
    ],
    bestTimeToVisit: 'October to March',
    category: ['Historical', 'Adventure'],
    amenities: ['AC Car', 'Guide', 'Heritage Hotel', 'Entry Tickets'],
    itinerary: [
      { day: 1, title: 'City Tour', description: 'City Palace and Hawa Mahal.' },
      { day: 2, title: 'Forts', description: 'Amber Fort and Nahargarh.' },
      { day: 3, title: 'Departure', description: 'Shopping and drop.' }
    ]
  },
  {
    id: 'taj-mahal-agra',
    name: 'Taj Mahal & Agra Fort',
    destination: 'Uttar Pradesh',
    price: 5000,
    duration: '1 Day',
    description: 'A same-day tour to witness the Taj Mahal and the grandeur of the Mughal Empire.',
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523',
      'https://images.unsplash.com/photo-1548013146-72479768bada'
    ],
    bestTimeToVisit: 'October to March',
    category: ['Historical'],
    amenities: ['AC Transport', 'Guide', 'Lunch', 'Entry Tickets'],
    itinerary: [
      { day: 1, title: 'Agra Tour', description: 'Taj Mahal, Agra Fort, and local markets.' }
    ]
  },
  {
    id: 'khajuraho-temples',
    name: 'Khajuraho Temple Tour',
    destination: 'Madhya Pradesh',
    price: 11000,
    duration: '3 Days / 2 Nights',
    description: 'Explore the UNESCO World Heritage site known for its stunning intricate sculptures.',
    images: [
      'https://images.unsplash.com/photo-1620658805391-7440332822a1',
      'https://images.unsplash.com/photo-1606293926075-69a00dbfde81'
    ],
    bestTimeToVisit: 'October to March',
    category: ['Historical', 'Pilgrimage'],
    amenities: ['Hotel', 'Guide', 'Light & Sound Show', 'Transport'],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Check-in and Light & Sound show.' },
      { day: 2, title: 'Temple Tour', description: 'Western and Eastern group of temples.' },
      { day: 3, title: 'Departure', description: 'Raneh Falls and airport drop.' }
    ]
  },
  {
    id: 'delhi-heritage',
    name: 'Delhi Heritage Walk',
    destination: 'Delhi',
    price: 3500,
    duration: '1 Day',
    description: 'Walk through history in Old and New Delhi, visiting Red Fort, Qutub Minar, and more.',
    images: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      'https://images.unsplash.com/photo-1595260894297-3c35b5a774c4'
    ],
    bestTimeToVisit: 'October to March',
    category: ['Historical'],
    amenities: ['Guide', 'Snacks', 'Metro/Rickshaw Ride', 'Entry Fees'],
    itinerary: [
      { day: 1, title: 'Full Day Tour', description: 'Red Fort, Jama Masjid, Chandni Chowk, India Gate, Qutub Minar.' }
    ]
  }
];

export default packages;
