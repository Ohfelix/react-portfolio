import React from 'react'
import './Review.scss'


import cardImage from '../Assets/dogs.jpg'
import cardImage1 from '../Assets/dogs1.jpg'
import cardImage2 from '../Assets/dogs2.jpg'

const Review = () => {
    return (
        <div className='review section'>
            <div className='secContainer'>
                <span className='secTitle'>
                    What People Say
                </span>
                <div className='cards'>
            <div className='cardContainer container grid'>
                <div className='singleCard'>
                    <div className='imgDiv'>
                        <img src={cardImage} alt="" />
                    </div>
                    <h4 className="textDiv"> Pluto</h4>
                </div>
                <div className='singleCard'>
                    <div className='imgDiv'>
                        <img src={cardImage1} alt="" />
                    </div>
                    <h4 className="textDiv">   Beatiful Dogs</h4>
                </div>
                <div className='singleCard'>
                    <div className='imgDiv'>
                        <img src={cardImage2} alt="" />
                    </div>
                    <h4 className="textDiv">  Beatiful Dogs</h4>
                </div>
            </div>
          {/*   <div className="spantext">
                Outers Services <AiOutlineSwapRight className='icon' />
            </div> */}
        </div>
            </div>
        </div>
    )
}

export default Review