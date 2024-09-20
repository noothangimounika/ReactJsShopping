import React,{useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collection from '../Components/Collections'

import Footer from '../Components/Footer'

import { Gents,Ladies } from '../data'
import WomenCollectiom from '../Components/WomenCollectiom'


const MainPage = () => {

    const [gentsFaction,setGentsFation]=useState(Gents)
    const [ladiesFaction,setLadiesFaction]=useState(Ladies)
   
    // console.log(Gents)
    //   console.log(Ladies)
  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFaction={gentsFaction}/>
      <WomenCollectiom ladiesFaction={ladiesFaction} />
      <Footer />

    </div>
  )
}

export default MainPage