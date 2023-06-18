<script>
    import axios from "axios";
    let email = "", password = "";



    async function submitHandler(event) {
        
    try {
        const response = await fetch('http://localhost:9090/api/v1/auth/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'representative3@hotmail.com',
                password: 'representative123*'
            })
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Handle the response data
        const data = await response.json();
        const { access_token } = data;
        localStorage.setItem('access_token', access_token);

        console.log('Login successful');
        // Further processing or updating state in your Svelte component
        fetchConversations();

    } catch (error) {
        // Handle any error that occurs
        console.error(error);
        // Optionally show an error message to the user
    }
}

// Function to fetch conversations from the endpoint
async function fetchConversations() {
    try {
        const accessToken = localStorage.getItem('access_token');
        const response = await fetch('http://localhost:9090/representative/getallconversationsoftherepresentative', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Handle the response data
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Handle any error that occurs
        console.error(error);
        // Optionally show an error message to the user
    }
}



</script>

<button on:click|preventDefault={submitHandler}>Submit</button>