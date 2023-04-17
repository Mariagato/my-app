
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Photos } from './Components/Photos';
import { Gallery } from './Components/Gallery';
import { Subscribe } from './Components/Subscribe';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Photos />
     <Gallery />
     <Subscribe />
     <Footer />
    </div>
  );
}

export default App;
