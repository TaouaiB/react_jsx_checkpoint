import React from 'react'

function Hello() {
    const firstName = prompt("enter your name");

  return (
    <>
        {/* test first name  */}
        <div>
            {firstName ? <p> Hello, {firstName}! </p> : <p> Hello there </p> }.
        </div>
        {/* test if add photo or not */}
        <div>
            {firstName ? <img src="https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg" alt="Hello Image" />: <p> </p> }
        </div>
        
    </>
  )
}

export default Hello