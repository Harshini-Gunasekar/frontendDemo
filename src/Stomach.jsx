/* import React from 'react'
import {nameContext} from './App.jsx'
import { useContext } from 'react';

//const Stomach = ({need}) =>{
 //   return (
        //<div>
        //    <h1>Stomach:{need}</h1>
         //   <p>Need is received</p>
            
        //</div>

  //  )
//}

const Stomach =()=>{
    let dog=useContext(nameContext);
    return(
        <div>
            <h1>Stomach:{dog}</h1>

            
        </div>
    )

}
export default Stomach;
 */
const styles = {
    textBase: {
      padding: '10px 20px',
      fontSize: '16px',
      transition: '0.3s',
      backgroundColor: '#ffffff', // Initial background color (white)
      color: '#000000', // Initial text color (black)
    },
    backgroundBlack: {
      backgroundColor: '#8f00ff', // Black background
    },
    backgroundWhite: {
      backgroundColor: '#ffffff', // White background
    },
    textBlack: {
      color: '#8f00ff', // Black text
    },
    textWhite: {
      color: '#ffffff', // White text
    },
  };
  
  export default styles;