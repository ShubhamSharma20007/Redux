import React from 'react'
import Home from '../components/Home'
import {addToCard} from "../Services/Actions/Action"
import {connect} from "react-redux"

const mapStateTopProps= state=>({

  cardData : state.payload
 
})


const mapDisptachToProps =dispatch=>({
  addToCardHandler:data=>dispatch(addToCard(data))
})
export default connect(mapStateTopProps,mapDisptachToProps)(Home)