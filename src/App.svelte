<script>
  import SignUp from './routes/SignUp.svelte';
  import SignIn from './routes/SignIn.svelte';
  import { Router, Link, Route } from 'svelte-navigator';
  import ChatPage from './routes/ChatPage.svelte';
  //import Router, {link} from 'svelte-spa-router';




  
</script>

<Router>
  <Route path="/" component={SignIn} />
  <Route path="/signup" component={SignUp} />
  <Route path="/chats" component={ChatPage} />
</Router>



