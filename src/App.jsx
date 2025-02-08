/* eslint-disable no-unused-vars */
import React from 'react';
import Book from "../src/Components/Book/book";
import BgPatern from "../src/assets/bgPattern.mp4";

export const App = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-screen'>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={BgPatern} type="video/mp4" />
      </video>

      <Book />
    </div>
  );
};

export default App;
