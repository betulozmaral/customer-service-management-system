<script>
  import SignUp from './routes/SignUp.svelte';
  import SignIn from './routes/SignIn.svelte';
  import { Router, Route } from 'svelte-navigator';
  import ChatPage from './routes/ChatPageOnur.svelte';
  import AdminLogin from './routes/AdminLogin.svelte';
  import AdminPanel from './routes/AdminPanel.svelte';




  
</script>

<Router primary={false}>
  <Route path="/" component={SignIn} />
  <Route path="/signup" component={SignUp} />
  <Route path="/chats" component={ChatPage} />
  <Route path="/adminlogin" component={AdminLogin}/>
  <Route path="/adminpanel" component={AdminPanel}/>
</Router>



