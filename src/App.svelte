<script>
  import SignUp from './routes/SignUp.svelte';
  import SignIn from './routes/SignIn.svelte';
  import { Router, Link, Route } from 'svelte-navigator';
  
</script>

<style>
</style>


<Router>
  <Route path="/" component={SignIn} />
  <Route path="/signup" component={SignUp} />
</Router>

