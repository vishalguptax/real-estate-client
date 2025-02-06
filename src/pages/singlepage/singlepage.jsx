import React from 'react'
import Slider from "./pages/slide/Slider.jsx"


const singlepage = () => {
  return (
    <div classname='singlepage flex h-[100%]'>
        <div classname='details flex:3'>
            <div classname="wrapper p-[20px] ">
                <Slider/>
                <div classname="info">
                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>
            </div>
        </div>
        <div classname='features flex:2'>
          <div classname="wrapper"></div>
        </div>
    </div>
  )
}

export default singlepage