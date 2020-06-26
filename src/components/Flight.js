import React, {Component} from 'react';
import RedSqd from './RedSqd';


 const Flight = props => {
    const mapFighters = props.chosenFighters.map((fighter, i) => (
      <RedSqd
        key={i}
        fighter={fighter}/>
    ))  

   return (
     <div>
       <h1>Your Squadron</h1>
       <div>
          {mapFighters}
       </div>
     </div>
   )
 }

export default Flight;