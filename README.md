# Svelte ERippler

[![ripple demo](https://raw.githubusercontent.com/egon-r/svelte-erippler/master/ripple-demo.gif)](https://egon-r.github.io/svelte-erippler/)

- Smooth CSS Animations
- Custom/Multiple Ripples
- Single file/zero dependencies
- [Demo Page](https://egon-r.github.io/svelte-erippler/)


## Install

> npm i @egonr/svelte-erippler

Since everything is contained in a single file you could also just copy `src/lib/ERippler.svelte` to your project. 

## Usage

```ts
<script lang="ts">
    let rippler: ERippler
</script>

<a
    href="#"
    style="position: relative; overflow: hidden;"
    on:pointerdown={(e) => rippler.spawnRipple(e.clientX, e.clientY)}
>
    <ERippler bind:this={rippler}>
        <div
            style="background: darkred; position: absolute; inset: 0; z-index: -1;"
        ></div>
    </ERippler>
    <h1>rippler test</h1>
</a>
```

For more examples see the demo page source code at `src/routes/+page.svelte`.