import React from 'react'

const WomenCollectiom = (props) => {
    const{title,image1,image2,image3,image4,image5,image6,}=props.ladiesFaction;
  return (

    <div  className='collectionSection'>
         <h2>{title}</h2>
         
         <div className="borderBox">
         <img src="assets/LadiesBanner.gif" alt="" /> 
        </div>
         <div className="menIamges">
         <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />  
        <img src={image5} alt="" />
        <img src={image6} alt="" />
         </div>
      
        
        </div>
  )
}

export default WomenCollectiom