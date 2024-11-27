import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import '../CSS/Gallery.css'
import Footer from "./Footer";
import Navbar from "./Navbar";
const Gallery = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "paintings"));
        const paintingsList = [];
        querySnapshot.forEach((doc) => {
          paintingsList.push({ ...doc.data(), id: doc.id }); 
        });
        setPaintings(paintingsList);
      } catch (error) {
        console.error("Error fetching paintings: ", error);
      }
    };

    fetchPaintings();
  }, []);

  return (
    <div>
        <Navbar/>
      <div
        className="banner"
      >
        <div className="banner-text">Explore Our Gallery</div>
      </div>
    <div className="gallery-body">
      
      <div className="gallery-container">
        {paintings.map((painting, index) => (
          <div key={index} className="painting-card">
            <img
              src={painting.imageUrl}
              alt={painting.description}
              className="painting-image"
            />
            <p>{painting.description}</p>
            <p>Price: <strong>${painting.price}</strong></p>
            <p>Artist: <strong>{painting.artistName}</strong></p> 
            <button className="btn btn-primary">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Gallery;
