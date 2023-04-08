import React from 'react'
import '../Footer/Footer.scss'
import { HiPhone } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { CiYoutube } from 'react-icons/ci'

const Footer = () => {
	return (
		<div className='footer'>
			<div className="secContainer container">
				<div className="content grid">

					<div className="row">
						<div className="spanText">
							Contact Us
						</div>
						<div className="contacDiv">
							<div className="flex">
								<HiPhone className='icon' />
								<span>11 951393052</span>
							</div>
							<div className="flex">
								<MdEmail className='icon' />
								<span>leandroofelix90@gmail.com</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="spanText">
							POPULAR NEWS
						</div>
						<div className="singleNews">
							<span className="text">
								"Construindo o futuro através da tecnologia: eu sou um estudante de Engenharia de Software."
							</span>
							<p>
								Abril 08, 2023
							</p>
						</div>
					</div>
					<div className="row">
						<div className="spanText">
							Quik Links
						</div>
						<div className="footerLinks">
							<ul>
								<li>About Us</li>
								<li>Our Team</li>
								<li>Gallery</li>
								<li>Blog</li>
								<li>Carrers</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="bottomDiv flex">
					<small>
						Copyright 2023 LeandroFelix - All rights reserved

					</small>

					<div className="socials">
						<AiOutlineLinkedin className='icon' />
						<BsInstagram className='icon' />
						<CiYoutube className='icon' />

					</div>
					<small>Privacy Policy</small>
				</div>
			</div>

		</div>
	)
}

export default Footer