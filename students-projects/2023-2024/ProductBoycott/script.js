const tableBody = document.getElementById("dataTable").querySelector("tbody");

const products = [
  //Malaysian products

  {
    name: "Marrybrown",
    type: "Malaysian",
    category: "fast food",
    address: "Johor Bahru, Johor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Marrybrown_Logo.png?v=1705440390584",
  },

  {
    name: "Big Apple",
    type: "Malaysian",
    category: "fast food",
    address: "The Curve, Damansara, Selangor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/big-apple-donuts-logo-2AC8EEF4DC-seeklogo.com.png?v=1705440170712",
  },

  {
    name: "Secret Recipe",
    type: "Malaysian",
    category: "fusion cuisine",
    address: "SS2 Petaling Jaya, Malaysia ",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Secret-Recipe-Logo.jpg?v=1705440634276",
  },

  {
    name: "Zus Coffee",
    type: "Malaysian",
    category: "coffee",
    address:
      "7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(4).jpeg?v=1705440715245",
  },

  {
    name: "Richiamo Coffee",
    type: "Malaysian",
    category: "coffee",
    address: "Lembah Sireh, Kelantan, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/lq-zdbEz_400x400.jpg?v=1705441009489",
  },

  {
    name: "Gigi Coffee",
    type: "Malaysian",
    category: "coffee",
    address: "Pavilion Kuala Lumpur Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(3).png?v=1705441267133",
  },

  {
    name: "Tealive",
    type: "Malaysian",
    category: "tea",
    address: "Johor Bahru, Johor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/tealive-fbshare.png?v=1705441395011",
  },

  {
    name: "Sushi King",
    type: "Malaysian",
    category: "sushi",
    address: "Johor Bahru, Johor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(4).png?v=1705441535404",
  },

  {
    name: "Pappa Rich",
    type: "Malaysian",
    category: "fusion cuisine",
    address: "Selayang Mall, Kuala Lumpur, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/unnamed%20(1).jpg?v=1705441795296",
  },

  {
    name: "Ramly Burger",
    type: "Malaysian",
    category: "fast food",
    address: "SME Industrial Park, Mukim Batu, Kuala Lumpur, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Ramly_Burger_Logo.png?v=1705442029917",
  },

  {
    name: "Kopi Saigon",
    type: "Malaysian",
    category: "coffee",
    address: "Taman Dato Harun46150 Petaling Jaya, Selangor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(5).jpeg?v=1705442423127",
  },

  {
    name: "Mokti",
    type: "Malaysian",
    category: "ice cream",
    address: "13, Lorong Satu, Kampung Sena, 01000 Kangar, Perlis, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(5).png?v=1705442607247",
  },

  {
    name: "bask bear coffee",
    type: "Malaysian",
    category: "coffee",
    address:
      "Lot 1, Lorong Teknologi 3/4A, Taman Sains Selangor, 47810 Petaling Jaya, Selangor",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(6).png?v=1705442842200",
  },

  {
    name: "Kenny Hill's Baker",
    type: "Malaysian",
    category: "bakery",
    address: "Bukit Tunku, Kuala Lumpur, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(7).png?v=1705443190361",
  },

  {
    name: "1901 hot dog",
    type: "Malaysian",
    category: "fast food",
    address: "Sunway Pyramid Shopping Centre, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/1901_logo___coloured_400x400.jpg?v=1705443361836",
  },

  {
    name: "Old town white coffee",
    type: "Malaysian",
    category: "coffee",
    address: "Ipoh Garden South, Perak, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/channels4_profile%20(1).jpg?v=1705443570387",
  },

  {
    name: "San Francisco Coffee",
    type: "Malaysian",
    category: "coffee",
    address: "Desa Serdang, Kuala Lumpur​, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/406482_318125274889087_113253122042971_1010721_380322495_n_400x400.jpg?v=1705443756078",
  },

  {
    name: "Mamee",
    type: "Malaysian",
    category: "snacks",
    address: "Ayer Keroh Industrial Estate, Ayer Keroh, Malacca, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Mamee.png?v=1705451714550",
  },

  {
    name: "Oriental Food Industries ",
    type: "Malaysian",
    category: "snacks",
    address:
      "No. 65, Jalan Usaha 7, Industrial Estate, 75450 Ayer Keroh, Melaka, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/oriental-logo.png?v=1705451824452",
  },

  {
    name: "Gardenia",
    type: "Malaysian",
    category: "bread",
    address:
      "Lot 3, Jalan Pelabur 23/1, 40300 Shah Alam, Selangor Darul Ehsan, Malaysia.",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Gardenia-logo-1-2.jpg?v=1705451958693",
  },

  {
    name: "Munchy's",
    type: "Malaysian",
    category: "snacks",
    address:
      "PLO 370, Jalan Perak 3, Kawasan Perindustrian Pasir Gudang, 81700 Pasir Gudang, Johor",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(9).png?v=1705452239792",
  },

  {
    name: "Beryl's",
    type: "Malaysian",
    category: "chocolate",
    address:
      "2, Jalan Raya 7/1, Kawasan Perindustrian Seri Kembangan, Selangor, Malaysia         ",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/ido0ilhOyW.jpeg?v=1705452361608",
  },

  {
    name: "Dutch Lady",
    type: "Malaysian",
    category: "milk",
    address:
      "	Level 5, Quill 9, 112, Jalan Semangat, 46300, Petaling Jaya, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Dutch_Lady_Logo.svg.png?v=1705452768338",
  },

  {
    name: "100 plus",
    type: "Malaysian",
    category: "soft drinks",
    address: "Petaling Jaya, Selangor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(10).png?v=1705452907049",
  },

  {
    name: "Farm Fresh",
    type: "Malaysian",
    category: "milk",
    address:
      "No. 11-1, Jalan Petaling, Kawasan Perindustrian Larkin, 80530 Johor Bahru, Johor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(11).png?v=1705453024053",
  },



  {
    name: "Maestro swiss",
    type: "Malaysian",
    category: "chocolate drinks",
    address:
      "5893, Lorong Mak Mandin 6,Kawasan Perindustrian Mak Mandin, 13400 Butterworth,Pulau Pinang, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/images.jpeg?v=1705453651514",
  },

  {
    name: "Spritzer",
    type: "Malaysian",
    category: "mineral water",
    address:
      "Lot 85 Jalan Portland, Tasek Industrial Estate, Ipoh, 31400, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/15water_NSTfield_image_socialmedia.webp?v=1705453942865",
  },

  {
    name: "Haus boom",
    type: "Malaysian",
    category: "soft drinks",
    address:
      "A-06-18 & A-06-19, KOMPLEKS PERINDUSTRIAN EMHUB, PERSIARAN SURIAN,TAMAN SAINS SELANGOR, KOTA DAMANSARA, 47810 PETALING JAYA, SELANGOR, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/c4ca18_0a19054ee4404699ac249ceb0b056047~mv2.png?v=1705453945732",
  },
  
  {
    name: "Perodua",
    type: "Malaysian",
    category: "cars",
    address:
      "Rawang, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Perodua_logo_2008.png?v=1705569956104",
  },
  
  {
    name: "Proton",
    type: "Malaysian",
    category: "cars",
    address:
      "Shah Alam, Selangor , Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/PROTON_Holdings_logo_(2019%E2%80%93present).png?v=1705570120809",
  },
  
   {
    name: "99 speedmart",
    type: "Malaysian",
    category: "convenience store",
    address: "Klang, Selangor.",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(19).png?v=1705570362753",
  },
  
  
   {
    name: "KK super mart",
    type: "Malaysian",
    category: "convenience store",
    address: "Menara KK, Tower 6, Maju Link, Jalan Lingkaran Tengah 2, Bandar Tasik Selatan, Kuala Lumpur, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(20).png?v=1705570430011",
  },
  
  
   {
    name: "Mydin",
    type: "Malaysian",
    category: "hypermarkets",
    address: "Subang Jaya, Selangor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(21).png?v=1705570542680",
  },
  
    {
    name: "Giant",
    type: "Malaysian",
    category: "hypermarkets",
    address: "Shah Alam, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Giant_logo.png?v=1705570716550",
  },
  
    {
    name: "Petronas",
    type: "Malaysian",
    category: "oil and gas",
    address: "Tower 1, Petronas Towers, 50088 Kuala Lumpur, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Petronas_2013_logo.svg.png?v=1705570850013",
  },
  
    {
    name: "Bilo",
    type: "Malaysian",
    category: "cleaning products",
    address: "A21, Kawasan Industri MARA, KM13 Off Jalan Batu Caves, Kuala Lumpur, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(12).jpeg?v=1705571081355",
  },
  
    {
    name: "Anakku",
    type: "Malaysian",
    category: "baby products",
    address: "Lot 10449,Jalan Nenas, Batu 4 ½,Kampung Jawa,41000 Klang,Selangor",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(22).png?v=1705571325582",
  },
  
    {
    name: "Fiffy",
    type: "Malaysian",
    category: "baby products",
    address: "8, Jalan Bukit 5,Kawasan Perindustrian MIEL,Bandar Seri Alam, 81750 Masai, Johor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(23).png?v=1705571355750",
  }, 
    
  
  {
    name: "Kikilala",
    type: "Malaysian",
    category: "baby products",
    address: "No. 10-12, Jalan 6/91, Taman Shamelin Perkasa, Batu 3½, Cheras, 56100 Kuala Lumpur",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(24).png?v=1705571385475",
  },
  
    {
    name: "Boh",
    type: "Malaysian",
    category: "tea",
    address: " Batu 6, Jalan, Kampung Seri Cheeding, 42700 Banting, Selangor, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(25).png?v=1705572211091",
  },
  
    {
    name: "Astro",
    type: "Malaysian",
    category: "entertaiment",
    address: "Astro Productions Sdn Bhd, All Asia Broadcast Centre, Technology Park Malaysia, Bukit Jalil, 57000 Kuala Lumpur, Malaysia.",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/astro_share_1.png?v=1705573445872",
  },
  
    {
    name: "Aik cheong",
    type: "Malaysian",
    category: "coffee",
    address: "Lot 1-1, Jalan TTC-1, Kawasan Perindustrian, Bandar Malaysia, 75250 Cheng, Malacca, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(26).png?v=1705573413685",
  },
  
   {
    name: "Vico",
    type: "Malaysian",
    category: "chocolate drinks",
    address: "N5893, Lorong Mak Mandin 6,Kawasan Perindustrian Mak Mandin, 13400 Butterworth, Pulau Pinang, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(13).jpeg?v=1705572418442",
  }, 
  
     {
    name: "Raiya",
    type: "Malaysian",
    category: "toothpaste",
    address: "969, Lorong Perindustrian Bukit Minyak 16, Kawasan Perindustrian Bukit Minyak, 14100 Simpang Ampat, Pulau Pinang, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/9c3dc6acfdebcde16006f529f4d59fad.jpeg?v=1705574011205",
  }, 
  
    {
    name: "JacknJill",
    type: "Malaysian",
    category: "snacks",
    address: "Centro Building, 23rd Floor, 8, Jalan Batu Tiga Lama, 41300 Klang, Selangor Darul Ehsan, Malaysia.",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(30).png?v=1705574815361",
  },
  
    {
    name: "Mister potato",
    type: "Malaysian",
    category: "snacks",
    address: "Ayer Keroh Industrial Estate, Ayer Keroh, Malacca, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Mister_potato2.webp?v=1705574728747",
  },
  
   {
    name: "Corntoz",
    type: "Malaysian",
    category: "snacks",
    address: "Ayer Keroh Industrial Estate, Ayer Keroh, Malacca, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(28).png?v=1705574751103",
  }, 
  
     {
    name: "Double decker",
    type: "Malaysian",
    category: "snacks",
    address: "Ayer Keroh Industrial Estate, Ayer Keroh, Malacca, Malaysia",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(29).png?v=1705574779147",
  }, 
  
  
  
  
  
  
  

  //boycotted products

  {
    name: "Mcdonalds",
    type: "Boycotted",
    category: "fast food",
    address:
      "1398 North E Street at West 14th Street in San Bernardino, California",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/McDonald's_logo.svg.png?v=1705440312141",
  },

  {
    name: "Coca cola",
    type: "Boycotted",
    category: "soft drinks",
    address: "Atlanta, Georgia, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/unnamed%20(2).jpg?v=1705511944261",
  },

  {
    name: "Puma",
    type: "Boycotted",
    category: "sportswear",
    address: "Herzogenaurach, Germany",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Puma_complete_logo.svg?v=1705512762053",
  },

  {
    name: "Carrefour",
    type: "Boycotted",
    category: "hypermarkets",
    address: "Massy, France",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Carrefour_logo.svg?v=1705512903804",
  },

  {
    name: "Siemens",
    type: "Boycotted",
    category: "industrial automation",
    address: " Munich, Germany",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/channels4_profile%20(2).jpg?v=1705513090629",
  },

  {
    name: "HP",
    type: "Boycotted",
    category: "laptop",
    address: "Palo Alto, California, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(12).png?v=1705513218192",
  },

  {
    name: "Google",
    type: "Boycotted",
    category: "search engines",
    address: "Menlo Park, California, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Google_2015_logo.svg.png?v=1705513305305",
  },

  {
    name: "Amazon",
    type: "Boycotted",
    category: "e-commerce",
    address: "Bellevue, Washington, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/a_generic_10_uk_noto_email_v2016_uk-main._CB647744966_%20(1).png?v=1705513416081",
  },

  {
    name: "Disney",
    type: "Boycotted",
    category: "entertaiment",
    address: "Burbank, California, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/ab6761610000e5ebc698d53b77db34027b00f853.jpeg?v=1705513546927",
  },

  {
    name: "Domino Pizza",
    type: "Boycotted",
    category: "fast food",
    address: "Ypsilanti, Michigan, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(13).png?v=1705513792026",
  },

  {
    name: "Burger King",
    type: "Boycotted",
    category: "fast food",
    address: "Miami, Florida, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Burger-King.png?v=1705513911171",
  },

  {
    name: "Papa john",
    type: "Boycotted",
    category: "fast food",
    address: "Jeffersonville, Indiana, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/unnamed.png?v=1705514001295",
  },

  {
    name: "Pizza hut",
    type: "Boycotted",
    category: "fast food",
    address: "Wichita, Kansas, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Pizza-Hut-logo.png?v=1705514102249",
  },

  {
    name: "Volvo",
    type: "Boycotted",
    category: "cars",
    address: "Gothenburg, Sweden",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(6).jpeg?v=1705514209915",
  },

  {
    name: "Barclays",
    type: "Boycotted",
    category: "banking",
    address: "1 Churchill Place, London E14 5HP",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Barclays-Liverpool-ONE.jpg?v=1705514391826",
  },

  {
    name: "Nestle",
    type: "Boycotted",
    category: "snacks",
    address: "Vevey, Vaud, Switzerland",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Nestl%C3%A9.svg.png?v=1705514496944",
  },

  {
    name: "Dasani",
    type: "Boycotted",
    category: "mineral water",
    address: "Atlanta, Georgia, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(7).jpeg?v=1705514597313",
  },

  {
    name: "Starbucks Coffee",
    type: "Boycotted",
    category: "coffee",
    address: "Pike Place Market, Seattle, Washington, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Starbucks_Coffee_Logo.svg.png?v=1705514697563",
  },

  {
    name: "Nescafe",
    type: "Boycotted",
    category: "coffee",
    address: "Vevey, Vaud, Switzerland",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Nescafe-logo.jpg?v=1705514818462",
  },

  {
    name: "KFC",
    type: "Boycotted",
    category: "fast food",
    address: "Salt Lake City, Utah, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/KFC_logo-image.svg?v=1705514919378",
  },

  {
    name: "Mondelez international",
    type: "Boycotted",
    category: "snacks",
    address: "Chicago, Illinois, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/2560px-Mondelez_international_2012_logo.svg.png?v=1705515027160",
  },

  {
    name: "Dunkin Donuts",
    type: "Boycotted",
    category: "fast food",
    address: "Quincy, Massachusetts, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/1.jpeg?v=1705515156530",
  },

  {
    name: "Pepsi",
    type: "Boycotted",
    category: "soft drinks",
    address: "New Bern, North Carolina",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Pepsi_logo_2014.svg.png?v=1705515343569",
  },

  {
    name: "Procter and Gamble",
    type: "Boycotted",
    category: "cleaning products",
    address: "Cincinnati, Ohio, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Procter_%26_Gamble_logo.svg.png?v=1705515578669",
  },

  {
    name: "BP",
    type: "Boycotted",
    category: "oil and gas",
    address: "1 St James's Square, Westminster, London",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/BP_Helios_logo.svg.png?v=1705515810514",
  },

  {
    name: "Dell",
    type: "Boycotted",
    category: "laptop",
    address: "Austin, Texas, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Dell_logo_2016.svg.webp?v=1705515965249",
  },

  {
    name: "Louis Vuitton",
    type: "Boycotted",
    category: "luxury fashion",
    address: "Paris, France",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Louis_Vuitton-logo-FF97E85825-seeklogo.com.png?v=1705516115019",
  },

  {
    name: "Dior",
    type: "Boycotted",
    category: "luxury fashion",
    address: "Avenue Montaigne, Paris, France",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Dior_Logo.svg.png?v=1705516246417",
  },

  {
    name: "Unilever",
    type: "Boycotted",
    category: "cleaning products",
    address: "Unilever House, London, United Kingdom",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/7c1c60e9afaaaa3cce61e5101717796d21b7f914-1426x1080.svg?v=1705516449157",
  },

  {
    name: "Caltex",
    type: "Boycotted",
    category: "oil and gas",
    address: "Singapore",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/unnamed%20(1).png?v=1705516597904",
  },

  {
    name: "7-Eleven",
    type: "Boycotted",
    category: "convenience store",
    address: "Irving, Texas, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/7-eleven_logo.svg.png?v=1705516829691",
  },

  {
    name: "Marks & Spencer",
    type: "Boycotted",
    category: "hypermarkets",
    address: "Waterside House, 35 N Wharf Rd, London W2 1NW",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/m-s-logo.png?v=1705516939722",
  },

  {
    name: "Febreze",
    type: "Boycotted",
    category: "cleaning products",
    address: "Cincinnati, Ohio, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(14).png?v=1705517106198",
  },

  {
    name: "Colgate",
    type: "Boycotted",
    category: "toothpaste",
    address: "New York, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(15).png?v=1705517256619",
  },

  {
    name: "Intel",
    type: "Boycotted",
    category: "semi-conductor chips",
    address: "Santa Clara, California, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/intel-logo-56a6fa195f9b58b7d0e5ce3a.png?v=1705517400848",
  },

  {
    name: "Maggi",
    type: "Boycotted",
    category: "instant noodle",
    address: "Vevey, Vaud, Switzerland",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(16).png?v=1705517639991",
  },

  {
    name: "Cadbury",
    type: "Boycotted",
    category: "chocolate",
    address: "Chicago, Illinois, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(8).jpeg?v=1705517787918",
  },

  {
    name: "Persil",
    type: "Boycotted",
    category: "cleaning products",
    address: " Düsseldorf, Germany",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/1200px-Persil-Logo.svg.png?v=1705518088839",
  },

  {
    name: "Milo",
    type: "Boycotted",
    category: "chocolate drinks",
    address: "Vevey, Vaud, Switzerland",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/9782396475_4f75b6b62c_h.jpg?v=1705519379399",
  },

  {
    name: "Sprite",
    type: "Boycotted",
    category: "soft drinks",
    address: "Atlanta, Georgia, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/sprite-logo-0FD1748C65-seeklogo.com.png?v=1705519550752",
  },

  {
    name: "Givenchy",
    type: "Boycotted",
    category: "luxury fashion",
    address: "Paris, France",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Givenchy-Logo.jpg?v=1705519599243",
  },

  {
    name: "Fanta",
    type: "Boycotted",
    category: "soft drinks",
    address: "Atlanta, Georgia, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(17).png?v=1705519686958",
  },

  {
    name: "Airbnb",
    type: "Boycotted",
    category: "e-commerce",
    address: "San Francisco, California, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/unnamed%20(2).jpg?v=1705511944261",
  },

  {
    name: "Booking.com",
    type: "Boycotted",
    category: "e-commerce",
    address: "Amsterdam,Netherlands",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(18).png?v=1705519826288",
  },

  {
    name: "Pampers",
    type: "Boycotted",
    category: "baby products",
    address: "Cincinnati, Ohio, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Pampers_logo.svg.png?v=1705519872904",
  },

  {
    name: "Mars",
    type: "Boycotted",
    category: "chocolate",
    address: "6885 Elm Street McLean, Virginia, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/336bb507-3a49-47eb-bb6c-8851ba34eee0_rw_1920.jpg?v=1705519988643",
  },

  {
    name: "Twix",
    type: "Boycotted",
    category: "chocolate",
    address: "6885 Elm Street McLean, Virginia, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(9).jpeg?v=1705520220025",
  },

  {
    name: "Oral B",
    type: "Boycotted",
    category: "toothpaste",
    address: "Cincinnati, Ohio, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Oral-B_logo.svg.png?v=1705520322477",
  },

  {
    name: "Kitkat",
    type: "Boycotted",
    category: "chocolate",
    address: "York, United Kingdom",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/KitKat_logo.svg.png?v=1705520452606",
  },

  {
    name: "Oreo",
    type: "Boycotted",
    category: "snacks",
    address: "Atlanta, Georgia, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Oreo_Logo_Design_History_Evolution_0_1024x1024.webp?v=1705520489162",
  },

  {
    name: "Pringles",
    type: "Boycotted",
    category: "snacks",
    address: "Cincinnati, Ohio, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Pringles-logo.jpg?v=1705520585664",
  },

  {
    name: "Fair and lovely",
    type: "Boycotted",
    category: "skin lightening cream",
    address: "Andheri, Mumbai, India",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Fair_%26_Lovely_logo_(2010).svg?v=1705520705111",
  },

  {
    name: "Lux",
    type: "Boycotted",
    category: "soap",
    address: "Unilever House, London, United Kingdom",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(10).jpeg?v=1705520711389",
  },

  {
    name: "Dove",
    type: "Boycotted",
    category: "soap",
    address: "Unilever House, London, United Kingdom",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/Dove-logo.png?v=1705520708329",
  },

  {
    name: "Baskin Robbins",
    type: "Boycotted",
    category: "ice cream",
    address: "Canton, Massachusetts, United States",
    image:
      "https://cdn.glitch.global/5ca7372f-a4b0-42b2-8f8e-2f036261965e/download%20(27).png?v=1705574250732",
  },



];

function populateTable() {
  tableBody.innerHTML = ""; // Clear existing rows before populating
  products.forEach((product) => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = product.name;
    cell2.innerHTML = product.type;
    cell3.innerHTML = product.category;
    cell4.innerHTML = product.address;
    cell5.innerHTML = `<img src ="${product.image}" alt="${product.name}" class="product-image"/>`;
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  populateTable();
});

// Function to filter table based on selected criteria
function filterTable() {
  const typeFilterValues = Array.from(
    document.querySelectorAll('input[name="style"]:checked')
  ).map((cb) => cb.value);
  const categoryFilterValues = Array.from(
    document.querySelectorAll('input[name="size"]:checked')
  ).map((cb) => cb.value);

  // Filtering logic
  let filteredProducts = products.filter((product) => {
    return (
      (typeFilterValues.length === 0 ||
        typeFilterValues.includes(product.type)) &&
      (categoryFilterValues.length === 0 ||
        categoryFilterValues.includes(product.category))
    );
  });

  populateTableWithFilteredData(filteredProducts);
}

// Function to repopulate table with filtered data
function populateTableWithFilteredData(filteredProducts) {
  const tableBody = document.getElementById("dataTable").querySelector("tbody");
  if (!tableBody) {
    console.error("Table body not found!");
    return;
  }

  tableBody.innerHTML = ""; // Clear existing rows
  filteredProducts.forEach((product) => {
    let row = tableBody.insertRow();
    row.insertCell(0).innerHTML = product.name;
    row.insertCell(1).innerHTML = product.type;
    row.insertCell(2).innerHTML = product.category;
    row.insertCell(3).innerHTML = product.address;
    row.insertCell(
      4
    ).innerHTML = `<img src="${product.image}" alt="${product.name}" class="product-image"/>`;
  });
}
