import React from 'react'

function Application ()   {
  return (
    <div><br/>Application Login
    <form action="http://localhost:4001/register" method="post" encType='multipart/form-data'>
  <label>Name:</label><br/>
  <input type="text" id="name" name="name"/><br/>
  <label>Email:</label><br/>
  <input type="email" id="email" name="email"/><br/>
  
  <label>Password:</label><br/>
  <input type="password" id="password" name="password"/><br/><br/>
  <input type="file" id="profileimage" name="profileimage"/><br/><br/>
  <button type="submit" value="Submit">Submit</button>

</form> 
    
    </div>
  )
}

export default Application