import React from "react";

function MyCard(props) {
  return (
    <div>
      <h2>Photo Card</h2>

      <div style={{width: "50%"}}>
        <img src={props.coverimage} alt={props.name} style={{width: "100%"}}></img>
        <div>
          <p>{props.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
