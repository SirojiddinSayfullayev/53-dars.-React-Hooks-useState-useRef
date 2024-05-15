import React, { useState } from "react";

function WhoAmI() {
  const [value, setValue] = useState("");

  const [content, setContent] = useState("");

//   if(content){
//     return content
//   }else{
//     return"Hech kim yo'q !!! "
//   }

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Ismingizni kirirting"
      />
      <br />
      <h1>{content ? content : "Hech kim yo'q !!!"}</h1>
      <button onClick={() => setContent(value)}>Kirish</button>
    </div>
  );
}

export default WhoAmI;
