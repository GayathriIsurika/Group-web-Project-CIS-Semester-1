import React, { useState } from 'react';



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message submitted:', { name, email, message });
  };

  return (
    <div className="row">
        <div className="col-12">

        <br></br><br></br>
        <h1>You can join with us</h1>
        
        <br></br><br></br>


      <h2><i className="bi bi-telephone-fill"></i>  Call us</h2>
      <p>0703232322</p><br></br>
      <h2><i className="bi bi-envelope-fill"></i>  E-mail</h2>
      <p>abc@gmail.com</p><br></br>
      <h2><i className="bi bi-geo-alt-fill"></i>  Address</h2>
      <p>420/2,highwayroad,moon.</p><br></br>
      <h2>Social media</h2>
      <p><i className="bi bi-instagram"></i></p>
      <p><i className="bi bi-facebook"></i></p>
      
      
    </div>
    
    </div>
    
  );
};

export default Contact;
