import React, { useState } from "react";

function Image() {
  const [inputValue, setInputValue] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  // Array of image URLs
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1H353EhNjMdSW4JyXaFs-rsJuImdFT5m8Mw&s.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwoNBDQ68bPaXaxkAnBLSc2fUuKo0-RBaeg&s.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJn4_6x3ulCCc57xbsUMWurtAKdN6sukxvwA&s.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3Be1ptx-JrKIMnY0d9q0N_eO2mXjLBBUZQ&s.jpg",
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.trim() !== "") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div>
      <h1>Dynamic Images on Input</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />
      {inputValue.trim() && (
        <div>
          <img
            src={images[imageIndex]}
            alt={`Dynamic ${imageIndex}`}
            style={{
              display: "block",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Image;