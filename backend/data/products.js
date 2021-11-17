const products = [
    {
      name: "PlayStation 5",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 4999,
      countInStock: 15,
    },
    {
      name: "Iphone 12",
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 109999,
      countInStock: 10,
    },
    {
      name: "Cannon EOS-1D",
      imageUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 13000,
      countInStock: 5,
    },
    {
      name: "Amazon Alexa",
      imageUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 5000,
      countInStock: 25,
    },
    {
      name: "Audio Technica Headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      price: 5555,
      countInStock: 4,
    },
    {
      name: 'JBL FLIP 4',
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      price: 4000,
      countInStock: 10,
    },
    {
      name: "Apple iPhone SE (64GB, Black)",
      imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41ApDHxyOQL._SY445_SX342_QL70_FMwebp_.jpg",
      description:
        "4.7-inch Retina HD display Water and dust resistant (1 meter for up to 30 minutes, IP67)",
      price: 59000.52,
      countInStock: 15,
      
    },
    {
      name: "Nintendo Switch with Neon Blue",
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/41V5KQ500IL._SY300_SX300_QL70_FMwebp_.jpg',
      description:
        '3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode 6.2-inch, multi-touch capacitive touch screen',
      price: 3740.88,
      countInStock: 12,
      
    },
    {
      name: 'Ring Fit Adventure - Nintendo Switch',
      imageUrl: '/goods/81V7L6auixL._SL1500_.jpg',
      description:
        'An adventure game that’s also a workout! Explore a huge fantasy world and defeat enemies using real-life exercise Jog, sprint, and high knee through dozens of levels',
      price: 109.00,
    },
    {
      name: 'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080)',
      imageUrl: '/goods/81QpkIctqPL._AC_SL1500_.jpg',
      description:
        'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black',
      price: 89.99,
      countInStock: 9,
    },
    {
      name: 'ASUS VivoBook 15 Thin and Light Laptop',
      imageUrl: '/goods/81fstJkUlaL._AC_SL1500_.jpg',
      description:
        'ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34',
      price: 484.66,
      countInStock: 13,
    },
    {
      name: 'AmazonBasics Wireless Computer Keyboard and Mouse Combo',
      imageUrl: '/goods/71nmrSRQ3cL._AC_SL1500_.jpg',
      description:
        'AmazonBasics Wireless Computer Keyboard and Mouse Combo - Full Size - US Layout (QWERTY)',
      price: 39.49,
      countInStock: 15,
    },
    {
      name: 'Michael Kors Slim Runway Stainless Steel Watch',
      imageUrl: '/goods/71xe2bDZ0nL._AC_UX679_.jpg',
      description:
        'Made in USA or Imported Michael Kors Slim Runway 44mm watch features a black dial with gold-tone stick indexes, three hand movement and antique gold plating stainless steel bracelet and case.',
      price: 188.67,
      countInStock: 15,
    },
    {
      name: 'Acer Aspire TC-885-UA92 Desktop',
      imageUrl: '/goods/61UgXsi%2BmcL._AC_SL1500_.jpg',
      description:
        'Acer Aspire TC-885-UA92 Desktop, 9th Gen Intel Core i5-9400, 12GB DDR4, 512GB SSD, 8X DVD, 802.11AC Wifi, USB 3.1 Type C, Windows 10 Home, Black',
      price: 549.99,
      countInStock: 10,
    },
    {
      name: 'Acer Aspire 5 A515-55-56VK, 15.6" Full HD IPS Display',
      imageUrl: '/goods/71S-XwHaGzL._AC_SL1500_.jpg',
      description:
        'Acer Aspire 5 A515-55-56VK, 15.6" Full HD IPS Display, 10th Gen Intel Core i5-1035G1, 8GB DDR4, 256GB NVMe SSD, WiFi 6, HD Webcam, Fingerprint Reader, Backlit Keyboard, Windows 10 Home',
      price: 699.00,
      countInStock: 15,
    },
    {
      name: 'Moto G Stylus - 128Gb',
      imageUrl: '/goods/61xQRmY%2BRRL._AC_SL1500_.jpg',
      description:
        'Moto G Stylus | Unlocked | Made for US by Motorola | 4/128GB | 48MP Camera | 2020 | Indigo',
      price: 269.99,
      countInStock: 15,
    },
    {
      name: 'Xiaomi Redmi Note 8 Pro',
      imageUrl: '/goods/81UgYuadkpL._AC_SL1500_.jpg',
      description:
        'Xiaomi Redmi Note 8 Pro 64GB, 6GB RAM 6.53" LTE GSM 64MP Factory Unlocked Smartphone - Global Model (Mineral Grey)',
      price: 208.99,
      countInStock: 20,
    },
    {
      name: "Bluetooth Speakers, DOSS SoundBox Plus",
      imageUrl: '/goods/71VqtdDUzsL._AC_SL1500_.jpg',
      description:
        'Bluetooth Speakers, DOSS SoundBox Plus Portable Wireless Bluetooth Speaker with 16W HD Sound and Deep Bass, Wireless Stereo Pairing, 20H Playtime, Wireless Speaker for Home, Outdoor, Travel - Black',
      price: 39.99,
      countInStock:15,
    },
  ];
  
  module.exports = products;