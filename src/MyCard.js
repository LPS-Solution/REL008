import React from "react";

function MyCard() {
  return (
    <div>
      <h2>Photo Card</h2>

      <div style={{width: "50%"}}>
        <img src="https://www.w3schools.com/w3css/img_snowtops.jpg" alt="Alps" style={{width: "100%"}}></img>
        <div>
          <p>The Italian / Austrian Alps</p>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
