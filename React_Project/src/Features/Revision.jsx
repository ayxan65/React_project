import React from 'react'


const Revision = ({ height,img,color, head,title,desc}) => {
  return (
    <>
        <div style={{backgroundColor:color , height:height}}  className="question-container">
     
            <img src={img} alt="" />
     <div className="prob-left">
           <div style={{fontSize:'18px'}} className="first-prob">
            {head}
           </div>
           <div className="second-prob">
           {title}
           </div>
           <div className="third-prob">
            {desc}
           </div>

        </div>
        <div className="img-div-prob">
        </div>
 
    </div>

    </>
  )
}

export default Revision