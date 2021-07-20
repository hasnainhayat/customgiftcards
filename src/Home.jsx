
import './App.css';
import React from 'react';
import {useState} from 'react'
import DomToImage from 'dom-to-image';
import Card from './card/Card';
import eidCards from './eid-card-temps';
import { connect } from "react-redux";
import EditCard  from './editCard/EditCard'
import {useSelector} from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
function Home() {
    return (
      <>
      <h1 style={{textAlign:'center'}}>Choose Design To Edit</h1>
        <div className="home">
        {eidCards.map((eidCard)=>{
        
          return <NavLink to="/customgiftcards/editcard"> <Card eidcard={eidCard} /></NavLink>
        })}
        </div>
        </>
    )
}

export default Home
