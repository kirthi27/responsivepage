import React from 'react'

const Contact = () => {
  return (
    <div id='contactus' className='contactus'>
    <h1 >CONTACT US</h1>
    
    <div className='contact'>  
    
        <div className='contactDetails ' style={{width:'80%'}}>
            <form>
                <input type="text" placeholder='First Name'/><br /><br />
                <input type="text" placeholder='Last Name'/><br /><br />
                <input type="tel" placeholder='Phone no'/><br /><br />
                <input type="email" placeholder='Email id'/><br /><br />
                <button>Submit</button>
            </form>
         </div>
        <div className='aboutImage' style={{width:'80%',height:'50%'}}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdfXTLd8hy6ahSrMQIcEtQwiDbzLDUchJOQ&usqp=CAU' alt='aboutimage' className='aboutimage'/>
        </div>
    </div>
    </div>
  )
}

export default Contact