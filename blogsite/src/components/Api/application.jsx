import React from 'react'

function Application ()   {
  return (
    <div>application
    <form action="http://localhost:4001/register" method="post">
  <label>Name:</label><br/>
  <input type="text" id="name" name="name"/><br/>
  
  <label>Password:</label><br/>
  <input type="password" id="password" name="password"/><br/>
  <button type="submit" value="Submit">Submit</button>
</form> 
    
    </div>
  )
}

export default Application