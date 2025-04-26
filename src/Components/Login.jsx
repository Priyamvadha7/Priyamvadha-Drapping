import React from 'react'
import '../Css/Form.css'

 function Login() {
  return (
    <>
       <form action="">
    <h2>Login</h2>
    <label for="email">E-mail:</label><br/>
    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Enter the Email or Phonenumber</label>
</div> 
    
    <label for="password">Password:</label>                                                                                                                                                                                                                                                                                                                                                                              
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Enter the password</label>
</div>
<a href=''>forgotten password?</a><br></br>
    
    <button type="submit">login</button>
    <button type="submit">sign up</button>
</form>
    </>
  )
}
export default Login;