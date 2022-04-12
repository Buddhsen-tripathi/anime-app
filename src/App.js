
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
// import func from "./Api/FetchAPI";
import FetchAPI from './Api/FetchAPI';
function App() {
  return (
    <div className="App">
     <Nav/> 
     <FetchAPI/>
     <Footer/>
    </div>
  );
}

export default App;
