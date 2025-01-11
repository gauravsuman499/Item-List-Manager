import React, { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]); // State to manage the list of items
  const [inputValue, setInputValue] = useState(""); // State to manage input field value

  // Handle input field changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding items to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]); // Add the new item to the list
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{textAlign:"center"}}>Item List Manager</h1>
      <h2 style={{color:"#ffa500"}}>Item List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an item"
        style={{
          padding: "20px",
          width: "calc(100% - 22px)",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      />
      <button
        onClick={handleAddItem}
        style={{
          padding: "10px",
          width: "90%",
          backgroundColor: "#008000",
          color: "white",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
          marginLeft:"20px",
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: "20px", listStyleType: "none", padding: "0" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              backgroundColor: "#f4f4f4",
              marginBottom: "5px",
              borderRadius: "4px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;