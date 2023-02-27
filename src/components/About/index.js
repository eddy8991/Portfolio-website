import { useEffect, useState } from 'react'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className=" about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          My love for web development started 7 years back when a friend
              showed me how he "hacked" instagram and replaced the logo with his
            name,not at all impressive but to a guy who had just started
              learning about all the wounders you could do with a computer,it
              was mind blowing and so my web development journey grew from
              manipulating a few texts using the devtools to building what i
              could only describe as art.
       
          </p>
       

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className=" faces face1">
              <FontAwesomeIcon icon={faVuejs} color="#DD0031" />
            </div>
            <div className="faces face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="faces face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="faces face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="faces face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="faces face6">
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
