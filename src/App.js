import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const removeclasses = () =>
  {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  const ToggleMode = (cls) => {
    removeclasses();
    document.body.classList.add("bg-"+cls)
    // if (mode === 'light') {
    //   setMode('dark');
    //   document.body.style.backgroundColor = 'grey';
    // }
    // else {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    // }

  }
  // const [modepicker, setmodepicker] = useState(mode);
  const Modepicker = (input) => {
    setMode(input);
    document.body.style.backgroundColor = mode;
  }

  return (

    <>
      {/* <Router> */}
        <Navbar mode={mode} ToggleMode={ToggleMode} Modepicker={Modepicker} />
        <TextForm mode={mode} Modepicker={Modepicker} ToggleMode={ToggleMode} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={}/> */}
        {/* </Routes>
      </Router> */}
    </>

  );
}

export default App;
