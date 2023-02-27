import './carousel.scss'
import { useState,useEffect } from 'react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Carousel = (props) => {
    const {children} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }


    const [touchPosition, setTouchPosition] = useState(null)
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }
    return (
        <>
        {currentIndex >0 &&
            <div className='left-Arrow' onClick={prev}>

                <FontAwesomeIcon
                    icon={faArrowLeft}
                    color="#424342c"
                    className="anchor-icon"
                    />
            </div>
            }
            
        <div className="carousel-container">
            <div className="carousel-wrapper">
                    <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
            </div>
            </div>
            {currentIndex < (length - 1) &&
            <div className='right-Arrow' onClick={next}>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    color="#424342c"
                    className="anchor-icon"
                />
                </div>
            }
        </>
    )
}
export default Carousel