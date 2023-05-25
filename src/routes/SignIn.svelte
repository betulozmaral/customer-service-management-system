<script>
/* login logic here */

  import { Router, Link, Route } from 'svelte-navigator';


  let username = '';
  let password = '';
  let status = false;

  async function handleSubmit() {
    event.preventDefault();

    // Perform sign-in logic here
    console.log('Sign-in form submitted');
    console.log('Username:', username);
    console.log('Password:', password);    
    console.log('Remember me:', status);
  }





</script>






<div class="wrapper">
  <!-- Logoya tıklayınca ana sayfaya yönlendir-->
  <Link to="/" class="logo"><img src="src\assets\logo-gray-no-background.png" alt="Orion logo" height="50px" width="auto"></Link>



  <main>
    <div class="left-col">
      <div class="sign-in">
        <h2>Welcome!</h2>
        <h1>Sign in</h1>
        <p class="slogan">Manage customer feedback simply</p>

        <div class="form-area">
        <form on:submit={handleSubmit}>
          <!-- Your login form fields -->
          <div class="user-name">
            <label for="uname">User name</label>
            <input type="text" id="uname" bind:value={username} placeholder="Enter your user name" required/>
          </div>
          <div class="password">
            <label for="pswrd">Password</label>
            <input type="password" id="pswrd" bind:value={password} placeholder="Enter your password" required />
            <span class="show-password"></span>
          </div>
          <div class="remember-me">
            <input type="checkbox" id="remember" bind:value={status} />
            <label for="remember">Remember me</label>
          </div>
          <button type="submit">Login</button>
        </form>
        </div>

        <p class="register-btn">
          Don't have an account? 
          <Link class="register" to="/signup">
            <strong>Register</strong>
          </Link>
        </p>

      </div>
    </div>

    <div class="right-col">
      <img src="src\assets\Rectangle.svg" alt="Customer Service Representative illustration">
    </div>
  </main>
</div>



<style>
  :root {
    font-size: 62.5%;
    font-family: 'Poppins';
    margin: 0;
    background: linear-gradient(to bottom right, #a6c0fe, #f68080);
    height: 100vh;

  }
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  main {
    display: flex;
    gap: 15.6em;
    margin-top: 1.4em;
    
  }
  .left-col {
    
    border: 1px solid #878787;
    box-sizing: border-box;
    width: 505px;
    height: 701px;
    left: 111px;
    top: 114px;
    box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.sign-in {
    padding: 3.5em 4em;
}

/* welcome */
h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0;

}

/* Sign in */
h1 {
    font-size: 3.1rem;
    font-weight: 500;
    margin: 0.7em 0;
    position: relative;
}

.slogan{
    font-size: 1.6rem;
    font-weight: 400;
    position: absolute;
    margin-top:  -1.5em;
}

.form-area {
    margin-top: 7em;
}

.user-name, .password {
    font-size: 1.6rem;
    font-weight: 400;
}
.user-name{
  margin-bottom: 2em;
}

.user-name label, .password label {
    display: block;
    margin-bottom: 0.5em;
}

input[type=text], input[type=password] {
    width: 100%;
    padding: 1.2em 1.5em;
    border: 1px solid #878787;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 1.6rem;
    font-weight: 400;
}

input[type=checkbox] {
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  margin-right: 0.4em;
}

.remember-me {
    display: flex;
    align-items: center;
    margin-top: 1em;
    font-size: 1.3rem;
    font-weight: 300;
}

button {
    width: 100%;
    padding: 1.2em 1.5em;
    border: none;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 1.6rem;
    font-weight: 400;
    background: #f68080;
    color: white;
    cursor: pointer;
    margin-top: 2em;
}

.register-btn {
  text-decoration: none;
  color: black;
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: 3.5em;
    text-align: center;
    
}


.right-col img{
  border-radius: 10px;

}

.right-col {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
}

/*logo*/
.wrapper img {
  margin-top: 3em;
  margin-left: -220px;
  
}

</style>