import React from 'react'

function Application ()   {
  return (
    <div>application
    <form action="http://localhost:4000/register" method="post">
  <label>Email:</label><br/>
  <input type="email" id="email" name="email"/><br/>
  <label>Password:</label><br/>
  <input type="password" id="password" name="password"/><br/>
  <button type="submit" value="Submit"/>
</form> 
    
    </div>
  )
}

export default Application