import React from "react";
import Particles from 'react-particles-js';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      /> 
    </div>
  );
};

export default HomePage;
