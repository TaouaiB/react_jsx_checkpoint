import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Price from './Components/Price';
import Description from './Components/Description';
import Url from './Components/Url';
import Name from './Components/Name';

function App() {
  const firstName = prompt("enter your name");
  return (
   <div>
      <Card style={{ width: '18rem' }}>
        <Url />
        <Card.Body>
            <Card.Title>{<Name />}</Card.Title>
            <Card.Title>{<Description />}</Card.Title>
            <Card.Text>{<Price />}</Card.Text>
        </Card.Body>
        </Card>

      {/* test first name  */}
        <div>
            {firstName ? 
              <div>
              <p> Hello, {firstName}! </p> 
              <img src="https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg" alt="Hello Image" /> 
              </div>: 
              <p> Hello there </p> }.
        </div>
        
        {/* test if add photo or not
        <div>
            {firstName ? <img src="https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg" alt="Hello Image" />: <p> </p> }
        </div> */}

   </div>
  );
}

export default App;
