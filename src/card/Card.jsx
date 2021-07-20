import React from 'react'
import './card.css';
import { connect } from "react-redux";
import { editCard } from '../redux/login/editCardActions';
import {useSelector} from 'react-redux';
const Card=({eidcard, editCard})=>{
    const card=useSelector((state)=>state.editCard.card)
    
    return (
        <div className="card" style={{backgroundImage:`url(${eidcard.image})`}}  key={eidcard.id} onClick={()=>{
            editCard(eidcard);
            console.log(card);
          }}>
            <h2 className="theirName">Name</h2>
            {/* <img src={props.image}/> */}
           
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        editCard: (card) => dispatch(editCard(card)),
    };
  };
export default connect(null, mapDispatchToProps) (Card)
