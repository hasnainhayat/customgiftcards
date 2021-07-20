
import './App.css';
import React from 'react';
import {useState} from 'react'
import DomToImage from 'dom-to-image';

function App() {
  const[name,setName]=useState("His/Her Name");
  const[yourName,setYourName]=useState("Your Name");
  function getImage(){
    var node=document.getElementById("card");
    DomToImage.toPng(node).then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      var link = document.createElement('a');
      link.download = 'eid-mubarak.png';
      link.href = dataUrl;
      link.click();
  }).catch(function (error) {
      console.error('oops, something went wrong!', error);
  });
  }
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
      </header>
      <div className="card" id="card">
      <h3>By: <span>{yourName}</span></h3>
      <h2>{name}</h2>
      
      </div>
      <div className="form">
      <h1 className="form-heading">Get Custom Card</h1>
        <input type="text" placeholder="Enter His/Her name" id="name" onChange={()=>{
          var theirname=document.getElementById("name").value;
          if(theirname.length===0){
            setName("His/Her Name");
          }
          else{
          setName(theirname);
          }
        }}/>
        <input type="text" placeholder="enter Your name" id="yourName" onChange={()=>{
          var yourname=document.getElementById("yourName").value;
          if(yourname.length===0){
            setYourName("Your Name")
          }
          else{
            setYourName(yourname);
          }
          
        }}/>
        <button onClick={()=>{
          getImage();
        }}>Download</button>

      </div>
      </div>
    </div>
  );
}

export default App;
