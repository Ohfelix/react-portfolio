import React from 'react'
import './Tour.scss'

import TourIMage from '../Assets/surf.jpg'
import HobbieIMage from '../Assets/futebol.jpg'
import HobbieIMage2 from '../Assets/tecnologia.jpg'
import { AiFillStar } from 'react-icons/ai'

const Tour = () => {
    return (
        <div className='tours container section'>
            <div className="secContainer">
                <span className="secTitle">
                    My Hobbies
                </span>
                <div className="tourContainer">

                    <div className='singleTour grid'>
                        <div className="imgDiv">
                            <img src={TourIMage} alt="" />
                        </div>
                        <div className="tourInfo">
                            <span className="tourTitle">
                                LyfeStyle
                            </span>
                            <div className='stars_review flex'>
                                <div className="stars">
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                </div>
                            </div>
                            <div className='textReview'>
                                {/*    <small className='custReview'>
                                2 Custumer review
                            </small> */}
                                <small>
                                    A cultura surfstyle é bastante marcada pelo esporte do surf, que é uma paixão minha. Mas, para além disso, ele engloba todo um estilo de vida que valoriza a praia, o sol, o mar, o contato com a natureza, a música e a arte. Os praticantes do surfstyle são muitas vezes inspirados pela liberdade e pela leveza da vida ao ar livre, e buscam um estilo de vida mais descontraído e livre.
                                </small>

                            </div>
                            <button className='btn'>Buy this Tour</button>
                            {/*    <span className='price'>
                                R$799,99
                            </span> */}
                        </div>
                    </div>
                    <div className='singleTour grid'>
                        <div className="imgDiv">
                            <img src={HobbieIMage} alt="" />
                        </div>
                        <div className="tourInfo">
                            <span className="tourTitle">
                                Futebol de domingo
                            </span>
                            <div className='stars_review flex'>
                                <div className="stars">
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                </div>
                            </div>
                            <div className='textReview'>
                                {/*    <small className='custReview'>
                                2 Custumer review
                            </small> */}
                                <small >
                                    A cultura surfstyle é bastante marcada pelo esporte do surf, que é uma paixão minha. Mas, para além disso, ele engloba todo um estilo de vida que valoriza a praia, o sol, o mar, o contato com a natureza, a música e a arte. Os praticantes do surfstyle são muitas vezes inspirados pela liberdade e pela leveza da vida ao ar livre, e buscam um estilo de vida mais descontraído e livre.
                                </small>

                            </div>
                            <button className='btn'>Buy this Tour</button>
                            {/*    <span className='price'>
                                R$799,99
                            </span> */}
                        </div>
                    </div>
                    <div className='singleTour grid'>
                        <div className="imgDiv">
                            <img src={HobbieIMage2} alt="" />
                        </div>
                        <div className="tourInfo">
                            <span className="tourTitle">
                                Tecnologia e Empreendedorismo
                            </span>
                            <div className='stars_review flex'>
                                <div className="stars">
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                </div>
                            </div >
                            {/*    <small className='custReview'>
                                2 Custumer review
                            </small> */}
                            <div className='textReview'>
                                <small >
                                    A cultura surfstyle é bastante marcada pelo esporte do surf, que é uma paixão minha. Mas, para além disso, ele engloba todo um estilo de vida que valoriza a praia, o sol, o mar, o contato com a natureza, a música e a arte. Os praticantes do surfstyle são muitas vezes inspirados pela liberdade e pela leveza da vida ao ar livre, e buscam um estilo de vida mais descontraído e livre.
                                </small>

                            </div>
                            <button className='btn'>Buy this Tour</button>
                            {/*     <span className='price'>
                                R$799,99
                            </span> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tour