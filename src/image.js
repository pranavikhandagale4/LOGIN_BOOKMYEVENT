import React from 'react';
// import "./image.css"

const imageStyles = {
    width: '700px',
    height: '585px',  
    border: '1px solid white',
    marginLeft: '-580px',
    position: 'absolute', 
    top: '-12px',
  };
  
function LogoRIT() {
  return (
    
    
      <div>
      <img src={"R.jpg"} alt="Example" style={imageStyles} />
    </div>
   
  );
}

export default LogoRIT;
