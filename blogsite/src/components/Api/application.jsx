import React from 'react'

function Application ()   {
  return (
    <div>application
    <form action="http://localhost:4001/register" method="post" encType='multipart/form-data'>
  <label>Name:</label><br/>
  <input type="text" id="name" name="name"/><br/>
  <label>Email:</label><br/>
  <input type="email" id="email" name="email"/><br/>
  
  <label>Password:</label><br/>
  <input type="password" id="password" name="password"/><br/>
  <button type="submit" value="Submit">Submit</button>
  <input type="file" id="profileimage" name="profileimage"/>
</form> 
    
    </div>
  )
}

export default Application