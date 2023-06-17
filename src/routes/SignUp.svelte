<script>
    import { createEventDispatcher } from "svelte";
    import {Link, navigate} from 'svelte-navigator';

    let dispatch = createEventDispatcher();

    let registerFields = {
        email: "",
        username: "",
        password: "",
        passwordConfirm: ""
    };

    let errors = { email: "", username: "", password: ""};
    let valid = false;

    const registerHandler = () => {
        valid = true;
        if (registerFields.email.trim() === "") {
            errors.email = "Email is required";
            valid = false;
        } else {
            errors.email = "";
        }

        if (registerFields.username.trim() === "") {
            errors.username = "Username is required";
            valid = false;
        } else {
            errors.username = "";
        }

        if (registerFields.password === "") {
            errors.password = "Password is required";
            valid = false;
        } else {
            errors.password = "";
        }

        if (registerFields.passwordConfirm === "") {
            errors.passwordConfirm = "Please enter your password again";
            valid = false;
        } else if(registerFields.passwordConfirm !== registerFields.password) {
            errors.password = "Passwords do not match";
            valid = false;
        }
        else {
            errors.password = "";
        }

        if (valid) {
            // Burada kayıt yapılacak. 
            alert("Signed up");
            dispatch("signUp", { ...registerFields });
            navigate('/');//sign in sayfasına git. 
        }
    };
    

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
          <form on:submit={registerHandler}>
            <!-- Your login form fields -->
            <div class="form-field">
              <label for="email">Email</label>
              <input type="email" id="email" bind:value={registerFields.email} placeholder="Enter your email" required/>
              <div class="error">{errors.email}</div>

            </div>
            <div class="form-field">
              <label for="uname">User name</label>
              <input type="text" id="uname" bind:value={registerFields.username} placeholder="Enter your user name" required/>
              <div class="error">{errors.username}</div>

            </div>
            <div class="form-field">
              <label for="pswrd">Password</label>
              <input type="password" id="pswrd" bind:value={registerFields.password} placeholder="Enter your password" required />
              <span class="show-password"></span>
              <div class="error">{errors.password}</div>

            </div>
            <div class="form-field">
              <label for="pswrd-a">Confirm password</label>
              <input type="password" id="pswrd-a" bind:value={registerFields.passwordConfirm} placeholder="Confirm your password" required />
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
  
      /* Şu an nesneler iki sütunlu. nesneleri ortala*/
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* margin: 20px auto; */
        gap: 20px; /*iki sütun arasında ne kadar boşluk olsun istiyorsan.*/
    }



    .left-col{
      width: 50%;
      height: 600px;
    }

    
    /* resmi ortala div içerisinde  */
    .right-col {
      width: 50%;
        height: 600px; /*ekran boyutu kadar yapabilirim ileride. */
        display: flex;
        justify-content: center;
        align-items: center;
        /*text-align: center; /*bu yatay olarak ortaladı. */
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
/*
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
  */
  
  .sign-up {
      /* padding: 3.5px 4px; */
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

  /*
  .user-name, .password, .password-again, .email {
      font-size: 16px;
      font-weight: 400;
  }
 
  
  .user-name label, .password label, .password-again label, .email label {
      display: block;
      margin-bottom: 3px;
  }
  */
  
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
 
  
  /*logo*/
  /*
  .wrapper img {
    margin-top: 30px;
    margin-left: -220px;
    
  }
  */
  
  </style>