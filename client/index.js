import App from './App.svelte';

const app = new App({
  target: document.getElementById('root'),
  props: {
    name: 'svelte 3 tes',
  },
});

export default app;
