<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-navigator';
    let username = '';
    let email = '';
    let password = '';
    let passwordConfirm = '';

    /*
    The handleSubmit function is triggered when the form is submitted. 
    Inside this function, you can perform the sign-up logic, 
    such as sending an HTTP request to the server or validating the form data. 
    In this example, we simply log the form values to the console and reset the form fields.
    */
  
    function handleSubmit(event) {
      event.preventDefault();
  
      // Perform sign-up logic here
      console.log('Sign-up form submitted');
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
  
      // Reset form fields
      /*
      username = '';
      email = '';
      password = '';
      passwordConfirm = '';
      */

     // Redirect to the sign-in page
  }
    
  </script>

    
    <div class="wrapper">
      <!-- Logoya tıklayınca ana sayfaya yönlendir-->
      <a href="http://127.0.0.1:5173/" class="logo">
        <img src="src\assets\logo-gray-no-background.png" alt="Orion logo" height="50px" width="auto">
      </a>
    
    
      <main>
        <div class="left-col">
          <div class="sign-up">
            <h1>Sign up</h1>
            <p class="slogan">Manage customer feedback simply</p>
    
            <div class="form-area">
            <form on:submit={handleSubmit}>
              <!-- Your login form fields -->
              <div class="email">
                <label for="email">Email</label>
                <input type="email" id="email" bind:value={email} placeholder="Enter your email" required/>
              </div>
              <div class="user-name">
                <label for="uname">User name</label>
                <input type="text" id="uname" bind:value={username} placeholder="Enter your user name" required/>
              </div>
              <div class="password">
                <label for="pswrd">Password</label>
                <input type="password" id="pswrd" bind:value={password} placeholder="Enter your password" required />
                <span class="show-password"></span>
              </div>
              <div class="password-again">
                <label for="pswrd-a">Confirm password</label>
                <input type="password" id="pswrd-a" bind:value={passwordConfirm} placeholder="Confirm your password" required />
                <span class="show-password"></span>
              </div>
              <button type="submit">Register</button>
            </form>
            </div>
    
            <p class="signin-btn">
              Already have an account? 
              <a href="http://127.0.0.1:5173/">
                <strong>Sign in</strong>
              </a>
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
    
      .wrapper a {
        text-decoration: none;
        color: black;
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
    
    .sign-up {
        padding: 3.5em 4em;
    }
    

    
    /* Sign up */
    h1 {
        font-size: 3.1rem;
        font-weight: 500;
        margin: 0 0;
        position: relative;
    }
    
    .slogan{
        font-size: 1.6rem;
        font-weight: 400;
        position: absolute;
        margin-top: -0.2em;
    }
    
    .form-area {
        margin-top: 6em;
    }
    
    .user-name, .password, .password-again, .email {
        font-size: 1.6rem;
        font-weight: 400;
    }
   
    
    .user-name label, .password label, .password-again label, .email label {
        display: block;
        margin-bottom: 0.3em;
    }
    
    input[type=text], input[type=password], input[type=email] {
        width: 100%;
        padding: 1.2em 1.5em;
        border: 1px solid #878787;
        box-sizing: border-box;
        border-radius: 6px;
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 1em;
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
        margin-top: 1em;
    }
    
    .signin-btn {
        font-size: 1.6rem;
        font-weight: 300;
        margin-top: 1.5em;
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

