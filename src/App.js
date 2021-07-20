
import './App.css';
import React from 'react';
import {useState} from 'react'
import DomToImage from 'dom-to-image';
import Card from './card/Card';
import eidCards from './eid-card-temps';
import { connect } from "react-redux";
import EditCard  from './editCard/EditCard'
import {useSelector} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

function App(){

  return (
    <div className="App">
<Switch>
<Route exact path='/customgiftcards' component={Home} />
  <Route path='/customgiftcards/editcard' component={EditCard} />
  
</Switch>
      

    </div>
  );
}

export default  (App);
