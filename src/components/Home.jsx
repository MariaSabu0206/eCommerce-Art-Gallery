import React, { useState } from "react";
import { db } from "../Firebase"; 
import { collection, addDoc } from "firebase/firestore";
import "../CSS/Home.css"; 
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [artistName, setArtistName] = useState(""); 

  const handleSubmit = async () => {
    if (!image || !description || !price || !artistName) {
      alert("All fields are required!");
      return;
    }

    try {
      
      const formData = new FormData();
      formData.append("image", image);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=86f6f5834e6c6f0dfb4c040cbfe043ed`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (!data.success) {
        throw new Error("Failed to upload image");
      }

      const imageUrl = data.data.url; 
      await addDoc(collection(db, "paintings"), {
        imageUrl,
        description,
        price,
        artistName,
      });

      alert("Painting uploaded successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
        <Navbar/>
      <div className="home-container">
        
        <div className="home-card">
          <h1>Upload Your Painting</h1>
          <div className="input-fields">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            <input
              type="text"
              placeholder="Enter Artist's Name"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
