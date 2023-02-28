import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { useEffect} from 'react';
import LogoS from '../../assets/images/logo-s.png'



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  
    const nameArray = ['d','w','i','n']
    const jobArray=[   'w','e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',]
    
        useEffect(() => {
            setTimeout(() => {
              setLetterClass('text-animate-hover')
            }, 4000)
        }, [])
    


    
    return (

        <div className=" home-page">
          
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img className='starting-letter' src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />       
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend Developer/UI.UX Designer/Javascript</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
            <div className="img-container" >
                <img
                    className="solid-logo"
                    src={LogoS}
                    alt="JavaScript,  Developer"
                />
          </div>
          
        </div>
    )
}
export default Home