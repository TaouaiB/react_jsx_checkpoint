import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './Components/product/product';
import Cards from './Components/Cards/Cards';
import Hello from './Components/Hello/Hello';

function App() {
  return (
   <div>
      <Hello />
      <Cards />
   </div>
  );
}

export default App;
