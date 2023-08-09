import './App.css';
import ProductsItems from './components/ProductsItems';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ProductsItems/>}/>
          <Route path='/productDeatails/:id' element={<ProductDetails/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
