import React from 'react'
import './Discount.scss'

import video from '../Assets/surfVideo.mp4'

const Discount = () => {
    return (
        <div className='discount section'>
            <div className="secContainer">
                <video src={video} autoPlay loop muted typeof='mp4'></video>
                <div className="textDiv">
                    <span className="title">
                     Meu proximo objetivo é apreder a surfar !
                    </span>
                   {/*  <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo non numquam distinctio quisquam saepe. Quo eveniet consequatur perspiciatis mollitia distinctio pariatur. Perferendis quod iure dicta saepe tenetur aspernatur sunt!
                    </p> */}
                    <div className='input_btn flex'>
                      {/*   <input type="text" placeholder='Enter your Email' />
                        <button className='btn'>Subscribe</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount