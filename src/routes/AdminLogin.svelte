<script>
    import {Link, navigate} from 'svelte-navigator';
    import axios from 'axios';


    let email = "", password = "";
    let status = false;

    let errors = { username: "", password: "" };
    let valid = false;

  
// Function to handle login request
    async function submitHandler(event) {
        try {
            const response = await axios.post('http://localhost:9090/api/v1/auth/authenticate', {
                // email: 'admin@hotmail.com',
                // password: 'admin123*',
                email: email,
                password: password
            });

            // Handle the response data
            const { access_token } = response.data;
            localStorage.setItem('access_token', access_token);

            console.log('Login successful');
            // Further processing or updating state in your Svelte component
            navigate('/adminpanel');

        } catch (error) {
            // Handle any error that occurs
            console.error(error);
            // Optionally show an error message to the user
        }
    }


</script>


<div class="wrapper">
    <main>
        <Link to="/"><img
            src="../images/logo-no-background.png"
            alt="Orion logo"
            height="50px"
            width="auto"
        /></Link>
        <div class="container">
            <div class="left-col">
                <!-- Buraya form kutucuğu gelecek -->
                <div class="column-box">
                    <h2>Admin</h2>
                    <h1>Sign in</h1>
                    <p class="slogan">Manage customer feedback simply</p>
                    <div class="form-area">
                        <form on:submit|preventDefault={submitHandler}>
                            <div class="form-field">
                                <label for="username">Email</label>
                                <input type="text" id="username" bind:value={email} />
                                <div class="error">{errors.username}</div>
                            </div>
                            <div class="form-field">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    bind:value={password}
                                />
                                <div class="error">{errors.password}</div>
                            </div>
                            <div class="remember-me">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    bind:value={status}
                                />
                                <label for="remember">Remember me</label>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>

                </div>
                <!-- default olarak login. registera basılırsa register. -->
            </div>
            <div class="right-col">
                <!-- iki sütun olsun. illüstrasyon sağa yerleşsin. -->
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

/* main kullanılabilir miydi bunun yerine */
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
    /* eşit boyutta divler.  */
    .left-col,.right-col {
        width: 50%;
        height: 600px; /*ekran boyutu kadar yapabilirim ileride. */
    }

    
    /* resmi ortala div içerisinde  */
    .right-col {
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
    height: 550px;
    text-align: left;
    margin: 40px auto;
    border: 1px solid #878787;
    box-sizing: border-box;
    box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 20px 20px;
}

/* welcome */
h2 {
    font-size: 25px;
    font-weight: 500;
    margin: 0;
}

/* Sign in */
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

.remember-me {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 13px;
    font-weight: 300;
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
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #878787;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 400;
}

input[type=checkbox] {
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  margin-right: 4px;
  margin-top: 5px;
}

.error{
    font-weight: 400;
    font-size: 12px;
    color: #d91e18;

}

</style>

