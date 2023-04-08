import React from 'react'
import './Tour.scss'

import HobbieIMage from '../Assets/futebol.jpg'
import HobbieIMage1 from '../Assets/engenharia.jpg'
import HobbieIMage2 from '../Assets/chess.jpg'
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
                            <img src={HobbieIMage} alt="" />
                        </div>
                        <div className="tourInfo">
                            <span className="tourTitle">
                               Futebol de Domingo
                            </span>
                            <div className='stars_review flex'>
                                <div className="stars">
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='iconblack' />
                                  
                                </div>
                            </div>
                            <div className='textReview'>
                                {/*    <small className='custReview'>
                                2 Custumer review
                            </small> */}
                                <small>
                                    A chamada pelada. Um dos meus hobbies favoritos é jogar futebol com meus amigos de longa data aos domingos. Essa atividade não só me permite manter um estilo de vida ativo e saudável, mas também me dá a oportunidade de socializar e me divertir com pessoas que conheço há anos. Jogar futebol é uma paixão que me permite desconectar da rotina e me divertir com algo que amo fazer. 
                                </small>

                            </div>
                           {/*  <button className='btn'>Buy this Tour</button> */}
                            {/*    <span className='price'>
                                R$799,99
                            </span> */}
                        </div>
                    </div>
                    <div className='singleTour grid'>
                        <div className="imgDiv">
                            <img src={HobbieIMage1} alt="" />
                        </div>
                        <div className="tourInfo">
                            <span className="tourTitle">
                                Engenharia de Software
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
                                Como estudante de Engenharia de Software, estou imerso em um mundo de tecnologia, codificação e desenvolvimento de software. Essa disciplina me proporciona uma compreensão profunda e abrangente de como os sistemas de software são projetados, desenvolvidos, testados e mantidos. Estou sempre buscando aprender novas linguagens de programação e tecnologias emergentes para aprimorar minhas habilidades e me manter atualizado em um campo em constante evolução. Além disso, a Engenharia de Software também me permite desenvolver soluções criativas para resolver problemas complexos e melhorar a vida das pessoas por meio de aplicativos, sistemas e programas inovadores. Estou animado para explorar as possibilidades infinitas que esse campo tem a oferecer e contribuir para um futuro mais conectado e tecnologicamente avançado.
                                </small>

                            </div>
                         {/*    <button className='btn'>Buy this Tour</button> */}
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
                            Jogar Xadrez
                            </span>
                            <div className='stars_review flex'>
                                <div className="stars">
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='icon' />
                                    <AiFillStar className='iconblack' />
                                    <AiFillStar className='iconblack' />
                                </div>
                            </div >
                            {/*    <small className='custReview'>
                                2 Custumer review
                            </small> */}
                            <div className='textReview'>
                                <small >
                                Recentemente, descobri o xadrez e me apaixonei por esse jogo de tabuleiro desafiador. Embora eu ainda seja um iniciante, estou empolgado em aprender novas estratégias e táticas para melhorar meu jogo. O xadrez é um hobby fascinante que requer concentração, paciência e habilidades analíticas, e é incrivelmente gratificante quando você consegue antecipar e bloquear os movimentos do seu oponente. Estou ansioso para continuar praticando e melhorando minhas habilidades neste jogo intrigante e fascinante.
                                </small>

                            </div>
                            <button className='btn'>Jogue contra mim </button>
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