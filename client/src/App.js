import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsSreen from './screens/ProductsSreen';
import CartSreen from './screens/CartSreen';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/products' element={<ProductsSreen />} ></Route>
            <Route path='/cart' element={<CartSreen />} ></Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
