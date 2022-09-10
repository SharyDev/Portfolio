import React,{useEffect } from "react";
import './App.css';
import Header from "./Components/header";
import Part1 from "./Components/Part1";
import Part2 from "./Components/Part2";
import Part3 from "./Components/Part3";
import Part4 from "./Components/Part4";
import Footer from "./Components/Footer";
import AOS from 'aos';

function App() {
  useEffect(() => {
    document.title = 'Shahroz Abbas | Web and Design';
  });
  useEffect(() => {
    AOS.init();
  }, []);
  return(
    <>
    <Header></Header>
    <Part1></Part1>
    <Part2></Part2>
  
    </>
  );
  
}



export default App;
