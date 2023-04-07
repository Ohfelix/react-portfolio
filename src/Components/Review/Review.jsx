import React from 'react'
import './Review.scss'

import user1 from '../Assets/persons.jpg'


const Review = () => {
    return (
        <div className='review section'>
            <div className='secContainer'>
                <span className='secTitle'>
                    What People Say
                </span>
                <div className='reviewContainer container grid'>
                    <div className="singleReview">
                        <div className='imgDiv'>
                            <img src={user1} />
                        </div>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos officiis tempora accusamus fuga ratione vel suscipit, tempore dolor, vitae dolorem eaque sit? Quos, libero iste! Est tempore facere totam omnis.
                        </p>
                        <div className='name'>
                            Name Person
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review