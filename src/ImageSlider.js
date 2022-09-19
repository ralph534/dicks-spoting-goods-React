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

    const leftArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zindex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zindex: 1,
        cursor: 'pointer'
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


  return (
    <div style={sliderStyle} className='ImageSlider'>
        <div style={leftArrowStyle}>
        <IoIosArrowBack onClick={goToPrevious}/>
        </div>
        <div style={rightArrowStyle}>
        <IoIosArrowForward onClick={goToNext}/>
        </div>

        <div style={slidesStyles}>
            
        </div>
    </div>
  )
}

export default ImageSlider