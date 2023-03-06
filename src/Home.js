import React, { Component, useState, } from 'react'
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import ArrowOne from './img/arrow-1.png';
import Arrowtwo from './img/arrow-2.png';
import Laptop from './img/laptop.png';
import ChooseOne from './img/Choose-1.jpg';
import ChooseTwo from './img/Choose-2.jpg';
import ChooseThree from './img/Choose-3.jpg';
import ChooseFour from './img/Choose-4.jpg';
import ChooseFive from './img/Choose-5.jpg';
import Teamicon from './img/team-icon.png';
import ResultOne from './img/result-1.jpg';
import ResultLogoOne from './img/result-logo.jpg';
import ResultLogoTwo from './img/result-logo2.jpg';
import ResultLogoThree from './img/result-logo3.jpg';
import ResultLogoFour from './img/result-logo4.jpg';
import ResultLogoFive from './img/result-logo5.jpg';
import WhatwedoOne from './img/what-de-do-1.png';
import Whatwedotwo from './img/what-de-do-2.png';
import WhatwedoThree from './img/what-de-do-3.png';
import WhatwedoFour from './img/what-de-do-4.png';
import WhatwedoFive from './img/what-de-do-5.png';
import WhatwedoSix from './img/what-de-do-6.png';
import Doone from './img/do-1.png';
import DoTwo from './img/do-2.png';
import DoThree from './img/do-3.png';
import DoFour from './img/do-4.png';
import DoFive from './img/do-5.png';
import DoSix from './img/do-6.png';
import DoSeven from './img/do-7.png';
import DoEight from './img/do-8.png';
import HomeTeam from './img/home-team.jpg';
import Slider from './slider';
import CountOne from './Count/CountOne.js';
import CountTwo from './Count/CountTwo.js';
import CountThree from './Count/CountThree.js';
import Testimonials from './Testimonials';
import { Helmet } from "react-helmet";
import CountFour from './Count/CountFour';
import CountFive from './Count/CountFive.js';
import CountSix from './Count/CountSix.js';
import CountSeven from './Count/CountSeven.js';
import CountEight from './Count/CountEight.js';
import CountNine from './Count/CountNine.js';
import MapGif from './Count/MapGif.js';
import CountNone from './Count/CountNone.js';
import CountNTwo from './Count/CountNTwo.js';
import CountNThree from './Count/CountNThree.js';
import CountNFour from './Count/CountNFour.js';
import CountNfive from './Count/CountNfive.js';



export default class Home extends Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {

		return (
			<div>
				<Helmet>
					<title> Atena </title>
				</Helmet>
				<Slider />
				<section className='student-top-collage-section-us-uk'>
					<div className="container--">
						<div className='student-top-collage-section-us-uk-left'>
							<div className='why-choese-us-home-page-heading'>
								<h3>Who are we?</h3>
								<h2>All our students get<br /> into the top 20 colleges <br /> in the US & UK</h2>
							</div>
							<div className='student-top-collage-section-us-uk-left-tow'>
								<div className='student-top-collage-section-us-uk-left-tow-border'></div>
								<ul>
									<li>
										<div className='Personalizedstudent-top-collage'>
											<img src={WhatwedoFour} alt="" />
											<p>Personalized</p>
										</div>

									</li>
									<li>
										<div className='Personalizedstudent-top-collage'>
											<img src={WhatwedoFive} alt="" />
											<p>Process-driven</p>
										</div>
									</li>
									<li>
										<div className='Personalizedstudent-top-collage'>
											<img src={WhatwedoSix} alt="" />
											<p>Excellence-oriented</p>
										</div>
									</li>
								</ul>
							</div>
							<div className='student-top-collage-section-us-uk-lef-three'>
								<p>We are transforming the educational landscape through <span>holistic education consulting.</span> We help students smoothly navigate their journey to the top universities across the globe with almost 100% success rate.</p>
							</div>
						</div>
						<div className='student-top-collage-section-us-uk-right'>
							<div className='student-top-collage-section-us-uk-right-top'>
								<p>At Athena, our aim is to harness the full potential of students and make them <span>future-ready for admission</span> to their dream universities worldwide.</p>
							</div>
							<div className='student-top-collage-section-us-uk-right-middle'>
								<ul>
									<li>
										<h4>
											<CountOne />
										</h4>
										<p>Student</p>
									</li>
									<li>
										<h4>
											<CountTwo />
										</h4>
										<p>countries</p>
									</li>
									<li>
										<h4>
											<CountThree />
										</h4>
										<p>Acceptances</p>
									</li>
								</ul>
							</div>
							<div className='student-top-collage-section-us-uk-right-botton'>
								<img src={HomeTeam} alt="" />
							</div>
						</div>
					</div>
				</section >
				<section className='our-result-home'>
					<div className="container--">
						<div className='why-choese-us-home-page-heading'>
							<h3>OUR RESULTS</h3>
							<h2>Acceptances since 2015</h2>
						</div>
						<marquee direction="left" scrollamount="20">
							<div className='marquee-section'>

								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={ResultOne} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												03
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogoOne} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={ResultOne} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												09
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogoTwo} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={ResultOne} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												06
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogoThree} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={ResultOne} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												10
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogoFour} alt="" />
									</div>

								</div>
								<div className='marquee-section-inner-section-left'>
									<div className='marquee-section-inner-section'>
										<img src={ResultOne} alt="" />
										<div className='marquee-section-inner-section-back'></div>
										<div className='marquee-section-inner-section-back-inner'>
											<div className='marquee-section-inner-section-back-inner-cont'>
												19
											</div>

										</div>
									</div>
									<div className='marquee-section-inner-section-botton-img'>
										<img src={ResultLogoFive} alt="" />
									</div>

								</div>
							</div>
						</marquee>

					</div>
				</section>
				<section className='what-we-do-section-page'>

					<div className='what-we-do-section-page-left'>
						<ul>
							<li>
								<div className="flip-box">
									<div className="flip-box-inner One">
										<div className="flip-box-front">
											<img src={Doone} alt="" />
											<img src={DoTwo} alt="" />
											<img src={Doone} alt="" />
										</div>
										<div className="flip-box-back">
											<p><span>Innovative</span></p>
											<p><span>Innovative</span></p>
											<p><span>Innovative</span></p>

										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="flip-box">
									<div className="flip-box-inner One">
										<div className="flip-box-front">
											<img src={DoThree} alt="" />
											<img src={DoFive} alt="" />
											<img src={Doone} alt="" />
										</div>
										<div className="flip-box-back">
											<p><span>Trustworthy</span></p>
											<p><span>Trustworthy</span></p>
											<p><span>Trustworthy</span></p>

										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="flip-box">
									<div className="flip-box-inner One">
										<div className="flip-box-front">
											<img src={DoFour} alt="" />
											<img src={Doone} alt="" />
											<img src={DoSix} alt="" />
										</div>
										<div className="flip-box-back">
											<p><span>Exceptional</span></p>
											<p><span>Exceptional</span></p>
											<p><span>Exceptional</span></p>

										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="flip-box">
									<div className="flip-box-inner One">
										<div className="flip-box-front">
											<img src={DoSeven} alt="" />
											<img src={DoEight} alt="" />
											<img src={DoFive} alt="" />
										</div>
										<div className="flip-box-back">
											<p><span>Result Oriented</span></p>
											<p><span>Result Oriented</span></p>
											<p><span>Result Oriented</span></p>

										</div>
									</div>
								</div>
							</li>

						</ul>
					</div>
					<div className='what-we-do-section-page-right'>
						<div className='what-we-do-section-page-right-middle'>
							<div className='why-choese-us-home-page-heading'>
								<h3>What We Do?</h3>
								<h2>Pave a smoother path for<br /> your overseas education</h2>
							</div>
							<ul>
								<li>
									<div className='what-we-do-image-frame'>
										<img src={WhatwedoOne} alt="" />
										<p>Extracurricular<br /> profile development</p>
									</div>
								</li>
								<li>
									<div className='what-we-do-image-frame'>
										<img src={Whatwedotwo} alt="" />
										<p>College applications <br /> support</p>
									</div>
								</li>
								<li>
									<div className='what-we-do-image-frame'>
										<img src={WhatwedoThree} alt="" />
										<p>Essential life-skill <br />building</p>
									</div>
								</li>
							</ul>
							<div className='footer-top-map-img-button'>

								<a className='footer-top-map-img-button-link' href='#'> Know More <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
							</div>
						</div>
					</div>
				</section>
				<section className='why-choese-us-home-page'>
					<div className="container">
						<div className='why-choese-us-home-page-heading'>
							<h3>Why Choose Us</h3>
							<h2>Endless possibilities<br />
								with the right counseling begins here</h2>
						</div>
						<div className='why-choese-us-home-page-heading-middle'>
							<div className='why-choese-us-home-page-heading-middle-left'>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseOne} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountFour />
										</h4>
										<p>Served 500+ students<br /> from <span>15 countries</span></p>
									</div>
								</div>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseOne} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountFive />
										</h4>
										<p>elite university admissions</p>
									</div>
								</div>

							</div>
							<div className='why-choese-us-home-page-heading-middle-left'>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseTwo} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountSix />
										</h4>
										<p>Students got the university of their choice</p>
									</div>
								</div>


							</div>
							<div className='why-choese-us-home-page-heading-middle-left'>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseThree} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountSeven />
										</h4>
										<p>acceptances in 2022</p>
									</div>
								</div>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseFour} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountEight />
										</h4>
										<p>acceptances over 8 years</p>
									</div>
								</div>

							</div>
							<div className='why-choese-us-home-page-heading-middle-left'>
								<div className='why-choese-us-home-page-heading-middle-left-img'>
									<img src={ChooseFive} alt="" />
									<div className='why-choese-us-home-page-heading-middle-left-img-back'>

									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-icon'>
										<img src={Teamicon} alt="" />
									</div>
									<div className='why-choese-us-home-page-heading-middle-left-img-2'>
										<h4>
											<CountNine />
										</h4>
										<p>more likely to be accepted to elite universities in the US</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>
				<section className='track-your-college'>
					<div className="container">
						<div className='row'>
							<div className='col-md-5'>
								<div className='track-your-college-left'>
									<h3>Athena's proprietary tech platform</h3>
									<h2>Track your college &<br /> application process in <br />real time</h2>
									<p>Delphi is a world-class tech platform that has automated Athena's dynamic processes and caters to the specific, growing needs for all stakeholders, including students and team members.</p>
									<div className='track-your-college-left-link'>
										<a className='footer-top-map-img-button-link ' href='#'> Know more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
									</div>
								</div>
							</div>
							<div className='col-md-7'>
								<div className='track-your-college-right-img'>
									<img src={Laptop} alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='Testimonials-home-middle'>
					<div className='Testimonials-home-middle-left'>
						<Testimonials />
					</div>
					<div className='Testimonials-home-middle-right track-your-college'>
						<div className='track-your-college-left'>
							<h3>Testimonials</h3>
							<h2>What people are saying <br />about us!</h2>
							<p>We take pride in what we do to groom the future leaders of tomorrow. Here is what our happy parents, students, counsellors and others have to say about Athena Education and the milestones we have reached. </p>
							<div className='track-your-college-left-link'>
								<a className='footer-top-map-img-button-link ' href='#'> Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
							</div>
						</div>
					</div>
				</section>
				<section className='footer-top-map'>
					<div className="container">
						<div className='footer-top-map-img'>

							<MapGif />
							<h4>We are a leading education consulting firm with <span>students in more than 15 countries</span></h4>
						</div>
						<div className='footer-top-map-img-button'>
							<a className='footer-top-map-img-button-link ' href='#'> Book a consultation <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
						</div>

					</div>
				</section>




			</div >
		)
	}
}
