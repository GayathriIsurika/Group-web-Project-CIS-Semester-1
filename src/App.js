import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ImageDetail from './components/ImageDetail';





const App = () => {
  const [images, setImages] = useState([
    { url: '/images/sigiriya.jpg', alt: 'Sigiriya', caption: "Sigiriya, also known as the Lion Rock, is one of Sri Lanka's most famous and breathtaking travel destinations. This ancient rock fortress stands tall at nearly 200 meters, offering incredible views of the lush surroundings. Once the home of a royal palace, Sigiriya is now a UNESCO World Heritage Site, known for its beautiful frescoes, ancient ruins, and well-preserved gardens. Climbing to the top is an adventure that rewards you with a glimpse into history and a panoramic view of the Sri Lankan landscape. Whether you're a history enthusiast or a nature lover, Sigiriya is a must-visit on your Sri Lankan journey." },
    { url: '/images/9arch.jpg', alt: 'Nine Arch', caption: "The glorious Nine arch bridge between Ella and Demodara station is one of the engineering marvels in the early 20th century of Sri Lanka. This bridge, which is almost 100 years old, has been built with blocks of stone and cement without any strengthening iron or concrete. This is also known as ‘Bridge in the sky’ . With a small 30 minute walk through the jungle, you will reach this piece of beautiful architecture which is hidden between lush green tea fields. It is allowed to walk on the bridge and it’s one of the things you must do in Sri Lanka." },
    { url: '/images/trtemple.jpg', alt: 'The Temple of Tooth Relic', caption: "The Temple of the Tooth Relic (Sri Dalada Maligawa) in Kandy, Sri Lanka, is a revered Buddhist site, enshrining a sacred relic of Lord Buddha’s tooth. Nestled beside the tranquil Kandy Lake, this temple serves as both a spiritual and cultural hub, drawing pilgrims and tourists alike. Its exquisite architecture, the vibrant Esala Perahera festival, and the peaceful ambience make it a must-visit. Designated a UNESCO World Heritage site in 1988, the temple reflects Sri Lanka’s profound devotion and history. Visitors can marvel at its sacred halls, ornate art, and captivating architectural splendour." },
    { url: '/images/sinharaja.jpg', alt: 'Sinharaja Rain Forest', caption: "Sinharaja Forest Reserve is a forest reserve and a biodiversity hotspot in Sri Lanka. It is of international significance and has been designated a Biosphere Reserve and World Heritage Site by UNESCO. According to International Union for Conservation of Nature (IUCN), Sinharaja is the country's last viable area of primary tropical rainforest. Over 60% of the trees are endemic, many of them considered rare. 50% of Sri Lankan's endemics species of animals (especially butterfly, amphibians, birds, snakes and fish species)It is home to 95% endemic birds." },
    { url: '/images/hikkaduw.jpg', alt: 'Hikkaduwa', caption: "Hikkaduwa, a coastal gem on Sri Lanka's southwest coast, is renowned for its vibrant marine life and pristine beaches. Famous for its coral reefs, it offers excellent snorkeling and diving opportunities, allowing visitors to explore underwater beauty. The beach is lined with palm trees and dotted with charming cafes and restaurants, making it a perfect spot for relaxation. Hikkaduwa is also home to a lively market and cultural attractions, including the ancient Hikkaduwa Temple. With its warm waters, golden sands, and friendly atmosphere, Hikkaduwa is a must-visit destination for anyone seeking both adventure and tranquility." },
    { url: '/images/ruwanwalisaaya.jpg', alt: 'Ruwanwelisaya', caption: "Ruwanwelisaya situated in Anuradhapura is one of the most revered and famous stupas in Sri Lanka which was constructed by King Dutugemunu in 140 B. C this structure is 338 ft high symbolizing the primordial culture and religion of the country. This makes the stupa to be very special for Buddhists since it’s believed to house some relics of the Buddha. With amazing elephant carving and location at a breathtaking place its one of the major places that tourists who visit sri Lankan ancient architecture." },
    { url: '/images/pasikuda.jpg', alt: 'Pasikuda Beach', caption: "Pasikuda Beach is a peaceful spot on Sri Lanka's eastern coast, known for its clean white sands and bright turquoise waters. The calm waves make it perfect for swimming, snorkeling, and kite surfing. Visitors can go boating and fishing, eat fresh seafood at coastal cafes, and visit surrounding cultural attractions. Pasikuda Beach, with its peaceful environment and numerous activities, offers the ideal combination of leisure and exploration.Additionally, Pasikuda Beach is known for its stunning sunrise views and vibrant marine life, which enhance its appeal as a must-visit destination.Pasikuda Beach provides a perfect blend of relaxation and exploration." },
    { url: '/images/yapahuwa.jpg', alt: 'Yapahuwa', caption: "Yapahuwa is a 13th-century rock fortress in Sri Lanka, built by King Bhuvanekabahu I to protect the sacred Tooth Relic of the Buddha. The site, located on a 100-meter-high rock, served briefly as the capital and features a beautifully carved stone staircase, a moat, and remnants of palace buildings. The Tooth Relic was later taken by South Indian invaders, leading to the abandonment of Yapahuwa. Today, it is a significant archaeological site, attracting tourists with its rich history, intricate carvings, and panoramic views of the surrounding landscape." },
    { url: '/images/11.jpg', alt: 'Image 5', caption: 'Beautiful Scenery 9' },
    // Add more images as needed
  ]);

  return (
    <>
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image/:id" element={<ImageDetail images={images} />} /> {/* Pass images prop */}

        </Routes>
      </div>
    </Router>
    <Footer />
    </>
  );
};

export default App;
