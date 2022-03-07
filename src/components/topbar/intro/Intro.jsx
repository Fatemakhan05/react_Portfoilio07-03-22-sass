import React, { useEffect,useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'


export default function Intro() {
  const textRef = useRef(null);

  useEffect(()=>{
      init(textRef.current, 
       {
          showCursor: true,
        backDelay:1500,
        backSpeed:60,
        showCursor:true,
         strings: ['Front-End-Developer', 'Software Test Engineer','Teacher' ],
         });
     
  },[]);
  return (
    <div className='intro'id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src='me.jpg' alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm</h2>
          <h1>Fatima Khan</h1>
          <h3> Freelance  <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src="down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
