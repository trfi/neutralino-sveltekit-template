<script lang='ts'>
  import Counter from "./Counter.svelte"
  import NeutralinoCheck from "./NeutralinoCheck.svelte"
  import { os } from "@neutralinojs/lib"
  import type { MouseEventHandler } from "svelte/elements"

  const openExternal: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    os.open(e.currentTarget!.href)
  }
</script>

<main>
  <div>
    <a
      href="https://neutralino.js.org"
      target="_blank"
      rel="noreferrer"
      onclick={openExternal}
    >
      <img
        src="/neutralino.png"
        class="logo neutralino"
        alt="Neutralino Logo"
      />
    </a>
    <a
      href="https://svelte.dev/docs/kit"
      target="_blank"
      rel="noreferrer"
      onclick={openExternal}
    >
      <img src="/svelte.svg" class="logo svelte" alt="Svelte Logo" />
    </a>
    <a
      href="https://www.typescriptlang.org"
      target="_blank"
      rel="noreferrer"
      onclick={openExternal}
    >
      <img
        src="/typescript.png"
        class="logo typescript"
        alt="TypeScript Logo"
      />
    </a>
  </div>
  <h1>Neutralino + SvelteKit</h1>

  <div class="card">
    <Counter />
  </div>
  <div class="card">
    <NeutralinoCheck />
  </div>

  <p class="read-the-docs">
    Click on the Neutralino, SvelteKit, and TypeScript logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo.neutralino:hover {
    filter: drop-shadow(0 0 2em #f89901aa);
  }
  .logo.typescript:hover {
    filter: drop-shadow(0 0 2em #3178c6aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
