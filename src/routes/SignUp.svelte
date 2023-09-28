<script>
    import {Link, Route, navigate} from 'svelte-navigator';
    import axios from 'axios';


    let registerFields = {
        email: "",
        username: "",
        password: "",
        passwordConfirm: ""
    };

    let errors = { email: "", username: "", password: ""};
    let valid = false;
    let form = false;


    async function registerHandler(event) {
          // Function to handle register request
            try {
              const response = await axios.post('http://localhost:9090/api/v1/auth/register', {
                email: registerFields.email,
                password: registerFields.password,
                firstname: registerFields.username,
                role: "REPRESENTATIVE"
            });


            console.log('Sign up successful');
            navigate('/');
            } catch (error) {
            console.error(error);
            }
      }
      

</script>

<div class="wrapper">
    <main>
    <!-- Logoya tıklayınca ana sayfaya yönlendir-->
        <Link to="/"><img
        src="../images/logo-no-background.png"
        alt="Orion logo"
        height="50px"
        width="auto"
        /></Link>
  
    <div class="container">
      <div class="left-col">
        <div class="column-box">
        <div class="sign-up">
          <h1>Sign up</h1>
          <p class="slogan">Manage customer feedback simply</p>
  
          <div class="form-area">
          <form on:submit|preventDefault={registerHandler}>

            <!-- login form fields -->
            <div class="form-field">
              <label for="email">Email</label>
              <input type="email" id="email" bind:value={registerFields.email} placeholder="Enter your email"/>
              <div class="error">{errors.email}</div>

            </div>
            <div class="form-field">
              <label for="uname">User name</label>
              <input type="text" id="uname" bind:value={registerFields.username} placeholder="Enter your user name"/>
              <div class="error">{errors.username}</div>

            </div>
            <div class="form-field">
              <label for="pswrd">Password</label>
              <input type="password" id="pswrd" bind:value={registerFields.password} placeholder="Enter your password"  />
              <span class="show-password"></span>
              <div class="error">{errors.password}</div>

            </div>
            <div class="form-field">
              <label for="pswrd-a">Confirm password</label>
              <input type="password" id="pswrd-a" bind:value={registerFields.passwordConfirm} placeholder="Confirm your password"  />
              <span class="show-password"></span>
            </div>
            <button type="submit">Register</button>
          </form>
          </div>
  
          <div class="signin-btn">
            Already have an account? 
            <Link to="/">
              <strong>Sign in</strong>
            </Link>
          </div>
  
        </div>
      </div>
        </div>
  
      <div class="right-col">
        <img
        src="../images/login-illustration.svg"
        alt="Customer Service Representative Illustration"
        width="400px"
        height="auto"
        />
      </div>
      </div>
    </main>
  </div>
  
  
  <style>
    .wrapper {
      max-width: 1200px;
      margin: 20px auto;

    }
  
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px; 
    }



    .left-col{
      width: 50%;
      height: 600px;
    }

    
    .right-col {
      width: 50%;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right-col img{
        border-radius: 10px;
    }

    .column-box{
    width: 500px;
    max-height: 600px; 
    text-align: left;
    margin: 40px auto;
    border: 1px solid #878787;
    box-sizing: border-box;
    box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 20px 20px;
}
  
  .sign-up {
      margin:0;
      position: relative;
    }
  

  
  /* Sign up */
  h1 {
    font-size: 31px;
    font-weight: 500;
    margin: 7px 0;
    position: relative;
  }
  
  .slogan{
    font-size: 16px;
    font-weight: 400;
    position: absolute;
    margin-top:  -15px;
  }
  
  .form-area {
    margin: 50px 0;
    position: relative;
  }
  .form-field {
    margin-top: 20px;
    }

  
  input[type=text], input[type=password], input[type=email] {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #878787;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 400;
  }
  
  
  button {
    width: 100%;
    padding: 12px 15px;
    border: none;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 400;
    background: #f68080;
    color: white;
    cursor: pointer;
    margin:  20px 0; 
  }
  
  .signin-btn {
    font-size: 16px;
    font-weight: 300;
    margin: 20px auto;
    position: absolute;
    bottom: -50px;
    left:20%;
    text-align: center;

  }
  
  .error{
    font-weight: 400;
    font-size: 12px;
    color: #d91e18;

}
  
  </style>