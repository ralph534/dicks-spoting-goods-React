import './App.css';
import Header from './Header'
import NavBar from './NavBar';
import ImageSlider from './ImageSlider';

function App() {

  const slides = [
    {url: 'http://localhost:3000/sportinggoodimageslider.png', title: 'athletes'},
    {url: 'http://localhost:3000/bluelockers.jpeg', title: 'lockers'}
  ]

   const containerStyles = {
      width: '100%',
      height: '520px',
   }


  return (
    <div className="app">
      <Header />
      <NavBar />
      <div style={containerStyles}>
         <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default App;
