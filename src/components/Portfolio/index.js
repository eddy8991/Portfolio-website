import './index.scss'
import Carousel from './carousel'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import  sliderItems  from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faExternalLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    return (
    <>
        <div className='portfolio-page'>
        <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i','o']}
                        idx={15}
                    />
                </h1>
          </div>
      <Carousel>
          {sliderItems.map((item,i)=> (
            <div className="project" key={i} >
                <div className="image-cont">
                    <img className="project-image" src={item.image} alt="Project-img" />
                </div>
                <div className="text-d">
                  <p className="title">{item.subHeading}</p>
                  <h3 className="project-name">{item.title}</h3>
                  <div className="project-description">
                      <p className="paragraph-text">
                        {item.description}
                      </p>
                  </div>
                  <ul className='technologies-used' >
                      {item.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      )
                    )
                  }
                  </ul>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer">
                  <FontAwesomeIcon
                    icon={item.url === 'https://github.com/eddy8991?tab=repositories' ? faGithub : faExternalLink}
                    color="#424342c"
                    className="anchor-icon" />
                  </a>
                </div>
            </div> 
              ))}   
      </Carousel>
          <div className='rightArrow'>
            <span className='scroll-direction'>Scroll Right</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              color="#424342c"
              className="scroll-icon"
            />
          </div>
    </div>
    </>
     )
}



export default Portfolio