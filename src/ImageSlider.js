import {useState, React} from 'react'
import './ImageSlider.css'
import { IoIosArrowBack } from "react-icons/io";
import {IoIosArrowForward} from 'react-icons/io'

function ImageSlider({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyle = {
      height: '100%',
      position: 'relative'
    }

    const slidesStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    

    const rightArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50)',
        right: '32px',
        fontSize: '15px',
        color: '#fff',
        zindex: 1,
        cursor: 'pointer',
        
    }

    const leftArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50)',
        right: '32px',
        fontSize: '15px',
        color: '#fff',
        zindex: 1,
        cursor: 'pointer',
        
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1 
        setCurrentIndex(newIndex)
    }


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }


  return (
    <div style={sliderStyle} className='ImageSlider'>
        <div className='left-arrow'  onClick={goToPrevious}>
        <IoIosArrowBack />
        </div>
        <div className='right-arrow' style={rightArrowStyle}>
        <IoIosArrowForward onClick={goToNext}/>
        </div>

        <div style={slidesStyles}></div>
            <div className='dot-Container'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className='dots' onClick={() => goToSlide(slideIndex)}>•</div>
                ))}
                <div className='pause'>||</div>
            </div>
        </div>
  )
}

export default ImageSlider