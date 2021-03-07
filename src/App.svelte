<script lang="ts">
  import Test from "./Test.svelte";
  export let name: string;
  import { test } from "./cuttingEdge";
  const test2 = [1, 2, 3].includes(5);

  console.log("HELLO");
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps. {test}
    {test2}
  </p>
  <Test />
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    @media (min-width: 640px) {
      max-width: none;
    }
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
