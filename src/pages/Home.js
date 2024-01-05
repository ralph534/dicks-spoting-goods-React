import '../pages/Home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import ImageSlider from '../ImageSlider';

function Home() {

  const slides = [
    {url: 'http://localhost:3000/bluelockers.jpeg', title: 'lockers'},
    {url: 'http://localhost:3000/evansBuccs.jpeg', title: 'lockers'},
    {url: 'http://localhost:3000/SerenaWilliams.jpeg', title: 'lockers'},
    {url: 'http://localhost:3000/syracuse.jpg', title: 'lockers'}
    
  ]

   const containerStyles = {
      width: '100%',
      height: '780px',
   }


  return (
    <div className="home">
      <Header />
      <NavBar />
      <div style={containerStyles}>
         <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default Home;
