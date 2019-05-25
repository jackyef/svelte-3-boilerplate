<script>
  import { Router, Link, Route } from 'svelte-routing';
  import { Home, About } from './routes';

  export let url = '';
  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<!-- App.svelte -->

<h1>Hello {name}!</h1>
<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
  </nav>
  <div>
    <Route path="about" component={About} />
    <Route path="/" component={Home} />
  </div>
</Router>
