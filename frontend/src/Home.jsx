// rafce !!!
import React from 'react'
import './Home.scss'
import Carousel from './pages/carousel.jsx'// zasto trazi malo c
import './pages/embla.scss'

const OPTIONS = { loop: true }
const SLIDES = [
  '/slike/slike_za_galeriju/eksterijer/IMG_4619.JPG',
  '/slike/slike_za_galeriju/eksterijer/IMG_4628.JPG',
  '/slike/slike_za_galeriju/eksterijer/IMG_4648.JPG',
  '/slike/slike_za_galeriju/eksterijer/IMG_4652.JPG',
  '/slike/slike_za_galeriju/eksterijer/IMG_4654.JPG'
]

const Home = () => {
  return (
    <>
        <div className='wrapper'>
            <div className="nav-bar">
                <ul>
                    <li><a href="">prva</a></li>
                    <li><a href="">druga</a></li>
                    <li><a href="">treca</a></li>
                </ul>
            </div>
            <div className="hero">
                <h1>Olive garden</h1>
            </div>
            <div className="about-us">
                <h1>About us</h1>
                <div className="about-us-wrapper">
                    <div className="about-image">
                        <img src="/slike/slike_za_galeriju/eksterijer/IMG_4671.JPG" alt="about-us-image" width={'450px'} height={'400px'}/>
                    </div>
                    <div className="about-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quisquam eum sunt voluptates officia! Dicta officiis ab iure illo consequuntur ipsa? Porro nostrum ut est provident. Voluptates culpa maiores assumenda commodi. Reiciendis perferendis laboriosam similique repellat nihil, explicabo eaque minima magnam <br />eligendi modi tempora maiores doloribus nesciunt rerum ratione porro ullam id odit corrupti voluptates deserunt possimus quasi cum. <br /><br /> Quis quisquam cumque nemo hic cum obcaecati alias, ipsam fuga dolorem aliquam, rerum, sunt commodi libero cupiditate iure minima id quas?
                        </p>
                    </div>
                </div>

            </div>
            <div className="carousel-pages">
                <Carousel slides={SLIDES} options={OPTIONS} />
            </div>


        </div>
    </>
  )
}

export default Home