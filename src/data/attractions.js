const attractions = [
  // Char Dham Yatra
  {
    id: 'rishikesh-rafting',
    destinationId: 'char-dham-yatra',
    name: 'River Rafting in Rishikesh',
    description: 'Experience the thrill of white water rafting on the holy Ganges.',
    location: 'Rishikesh',
    estimatedTime: 4,
    additionalCost: 2500,
    category: 'Adventure Activities',
    image: 'https://images.unsplash.com/photo-1596484552993-9c5950d60677'
  },
  {
    id: 'ganga-aarti-vip',
    destinationId: 'char-dham-yatra',
    name: 'VIP Ganga Aarti Darshan',
    description: 'Special seating arrangement for the evening Aarti at Har Ki Pauri.',
    location: 'Haridwar',
    estimatedTime: 2,
    additionalCost: 1100,
    category: 'Religious Sites',
    image: 'https://images.unsplash.com/photo-1570535940527-319985223e7b'
  },
  {
    id: 'auli-ropeway',
    destinationId: 'char-dham-yatra',
    name: 'Auli Ropeway & Skiing',
    description: 'Visit the ski resort of Auli via Asia\'s longest ropeway.',
    location: 'Joshimath',
    estimatedTime: 5,
    additionalCost: 3500,
    category: 'Natural Attractions',
    image: 'https://images.unsplash.com/photo-1626780004739-c146d2f38d38'
  },

  // Jaipur
  {
    id: 'chokhi-dhani',
    destinationId: 'jaipur-heritage-tour',
    name: 'Chokhi Dhani Village',
    description: 'Evening cultural experience with Rajasthani dining and folk dance.',
    location: 'Jaipur Outskirts',
    estimatedTime: 4,
    additionalCost: 1500,
    category: 'Cultural Experiences',
    image: 'https://images.unsplash.com/photo-1629217333649-74dc77519965'
  },
  {
    id: 'hot-air-balloon',
    destinationId: 'jaipur-heritage-tour',
    name: 'Hot Air Balloon Ride',
    description: 'Float over the Pink City and forts at sunrise.',
    location: 'Amber Fort',
    estimatedTime: 3,
    additionalCost: 12000,
    category: 'Adventure Activities',
    image: 'https://images.unsplash.com/photo-1543787723-41c37b83f06c'
  },

  // Brij Darshan
  {
    id: 'prem-mandir-show',
    destinationId: 'brij-darshan',
    name: 'Prem Mandir Light Show',
    description: 'Evening musical fountain and light show at the magnificent temple.',
    location: 'Vrindavan',
    estimatedTime: 2,
    additionalCost: 500,
    category: 'Religious Sites',
    image: 'https://images.unsplash.com/photo-1595133602525-4c03b8782068'
  },
  {
    id: 'govardhan-parikrama',
    destinationId: 'brij-darshan',
    name: 'Govardhan Hill Parikrama',
    description: 'Guided 21km parikrama of the sacred Govardhan Hill by e-rickshaw.',
    location: 'Govardhan',
    estimatedTime: 4,
    additionalCost: 1200,
    category: 'Religious Sites',
    image: 'https://images.unsplash.com/photo-1623835639130-1b7774136608'
  },

  // Kerala
  {
    id: 'kathakali-show',
    destinationId: 'kerala-backwaters',
    name: 'Kathakali Dance Performance',
    description: 'Witness the classical dance drama of Kerala with makeup demonstration.',
    location: 'Kochi',
    estimatedTime: 3,
    additionalCost: 800,
    category: 'Cultural Experiences',
    image: 'https://images.unsplash.com/photo-1627916607164-7b998399e55d'
  },
  {
    id: 'ayurvedic-massage',
    destinationId: 'kerala-backwaters',
    name: 'Premium Ayurvedic Spa',
    description: 'Full body rejuvenation massage with herbal oils.',
    location: 'Munnar/Alleppey',
    estimatedTime: 2,
    additionalCost: 2500,
    category: 'Natural Attractions',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2'
  },

  // Taj Mahal
  {
    id: 'mohabbat-the-taj',
    destinationId: 'taj-mahal-agra',
    name: 'Mohabbat The Taj Show',
    description: 'Live theatrical performance depicting the love story behind the Taj Mahal.',
    location: 'Kalakriti Cultural Centre',
    estimatedTime: 2,
    additionalCost: 1500,
    category: 'Cultural Experiences',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523'
  },
  {
    id: 'fatehpur-sikri',
    destinationId: 'taj-mahal-agra',
    name: 'Fatehpur Sikri Excursion',
    description: 'Visit the abandoned Mughal capital city nearby.',
    location: 'Agra Outskirts',
    estimatedTime: 4,
    additionalCost: 1800,
    category: 'Historical Monuments',
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450'
  },

  // Goa
  {
    id: 'dudhsagar-falls',
    destinationId: 'goa-beach-paradise',
    name: 'Dudhsagar Waterfalls Trek',
    description: 'Jeep safari and trek to the majestic 4-tiered waterfall.',
    location: 'Mollem National Park',
    estimatedTime: 6,
    additionalCost: 2800,
    category: 'Adventure Activities',
    image: 'https://images.unsplash.com/photo-1579769363023-1d07b5391e6b'
  },
  {
    id: 'scuba-diving',
    destinationId: 'goa-beach-paradise',
    name: 'Scuba Diving at Grande Island',
    description: 'Underwater exploration with certified instructors.',
    location: 'Grande Island',
    estimatedTime: 5,
    additionalCost: 4500,
    category: 'Adventure Activities',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5'
  }
];

export default attractions;