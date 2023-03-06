import React from 'react'
import "../App.css"
import loginDiv from '../objects/loginedPlaylits';

export default function Logincontent({isSearch}) {
    const date = new Date().getHours();
    let greetings;
    if(date>=0 && date<12)
    {
        greetings = "Good Morning";
    }
    else if(date>=12 && date<18)
    {
        greetings = "Good Afternoon";
        
    }
    else
    {
        greetings = "Good Evening";
        
    }
  return (

    (isSearch===false)&&
    (<>
      <h1>{greetings}</h1>
      <div className='myplaylist-container'>
        {
          loginDiv.map((eachObj,index) => (
            <div className='myPlaylists'>
              <h4>{eachObj.des}</h4>
            </div>

          ))

        }
      </div>
      
    </>)

  )
}
