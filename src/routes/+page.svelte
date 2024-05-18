<script lang="ts">
    import { ERippler } from "$lib/index.js";

    let ripplers: ERippler[] = [];

    const handleOnClick = (e: MouseEvent, ripplerIndex: number) => {
        if (!e.currentTarget) {
            return;
        }
        if (e instanceof UIEvent && e.currentTarget instanceof HTMLElement) {
            const triggeredByKeyboard = e.detail === 0;
            if (triggeredByKeyboard) {
                ripplers[ripplerIndex].spawnRipple(
                    e.currentTarget.offsetLeft +
                        e.currentTarget.offsetWidth / 2,
                    e.currentTarget.offsetTop +
                        e.currentTarget.offsetHeight / 2,
                );
            }
        }
    };

    const handleOnPointerDown = (e: PointerEvent, ripplerIndex: number) => {
        ripplers[ripplerIndex].spawnRipple(e.clientX, e.clientY);
    };
</script>

<div>
    <h1>ERippler Demo</h1>
    <div style="display: flex; flex-direction: row; justify-content: center; font-size: 2em;">
        <a
            href="https://github.com/egon-r/svelte-erippler"
            style="position: relative; padding: 12px 20px;"
            on:click={(e) => {
                handleOnClick(e, 9);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 9);
            }}
        >
            <ERippler bind:this={ripplers[9]} rippleOverflow={"visible"} rippleDurationMs={600} rippleColor={"#aaa"} />
            <span style="position: relative;">
                Github
            </span>
        </a>
        <a
            href="https://www.npmjs.com/package/@egonr/svelte-erippler"
            style="position: relative; padding: 12px 20px;"
            on:click={(e) => {
                handleOnClick(e, 8);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 8);
            }}
        >
            <ERippler bind:this={ripplers[8]} rippleOverflow={"visible"} rippleDurationMs={600} rippleColor={"red"} />
            <span style="position: relative;">
                NPM
            </span>
        </a>
    </div>
    <section>
        <h2>Default Ripple</h2>
        <button
            class="demo-button"
            on:click={(e) => {
                handleOnClick(e, 0);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 0);
            }}
        >
            <ERippler bind:this={ripplers[0]} rippleDurationMs={1000} />
            <span style="position: relative;">
                Button
            </span>
        </button>
    </section>
    <section>
        <h2>Ripple with Background</h2>
        <button
            class="demo-button"
            on:click={(e) => {
                handleOnClick(e, 1);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 1);
            }}
        >
            <ERippler bind:this={ripplers[1]} rippleDurationMs={1000} rippleZIndex={1} />
            <div style="background: darkblue; position: absolute; inset: 0;" />
            <span style="position: relative; z-index: 2;">
                Button
            </span>
        </button>
    </section>
    <section>
        <h2>Ripple above Text</h2>
        <button
            class="demo-button"
            on:click={(e) => {
                handleOnClick(e, 2);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 2);
            }}
        >
            <ERippler
                bind:this={ripplers[2]}
                rippleDurationMs={1000}
                rippleZIndex={1}
            />
            <span style="position: relative;">
                Button
            </span>
        </button>
    </section>
    <section>
        <h2>Custom Color</h2>
        <button
            class="demo-button"
            on:click={(e) => {
                handleOnClick(e, 3);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 3);
            }}
        >
            <ERippler
                bind:this={ripplers[3]}
                rippleDurationMs={1000}
                rippleColor={"red"}
            />
            <span style="position: relative;">
                Button
            </span>
        </button>
    </section>
    <section>
        <h2>Custom Ripples</h2>
        <button
            class="demo-button"
            on:click={(e) => {
                handleOnClick(e, 4);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 4);
            }}
        >
            <ERippler
                bind:this={ripplers[4]}
                rippleDurationMs={2000}
                rippleAbsoluteSize={100}
                rippleCustom={"radial-gradient(rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%)"}
            />
            <span style="position: relative;">
                Button
            </span>
        </button>
    </section>
    <section>
        <h2>Overflowing Ripple</h2>
        <button
            class="demo-button demo-button-overflow-visible"
            on:click={(e) => {
                handleOnClick(e, 5);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 5);
            }}
        >
            <ERippler
                bind:this={ripplers[5]}
                rippleDurationMs={3000}
                rippleOverflow={"visible"}
            />
            <span style="position: relative;">
                Button
            </span>
        </button>
    </section>
    <section>
        <h2>Max Ripples = 2</h2>
        <button
            class="demo-button"
            on:click={(e) => {
                handleOnClick(e, 6);
            }}
            on:pointerdown={(e) => {
                handleOnPointerDown(e, 6);
            }}
        >
            <ERippler
                bind:this={ripplers[6]}
                rippleDurationMs={3000}
                maxRipples={2}
            />
            <span style="position: relative;">
                Button
            </span>
        </button>
    </section>
</div>

<style>
    h1 {
        text-align: center;
        font-size: 3em;
    }

    .demo-button {
        font-family: "Courier New", Courier, monospace;
        font-weight: bold;
        background: none;
        position: relative;
        text-decoration: none;
        font-size: 2em;
        color: whitesmoke;
        border: 1px solid whitesmoke;
        padding: 4px 16px;
        border-radius: 12px;
        margin-left: 1em;
        cursor: pointer;
        overflow: hidden;
    }

    .demo-button-overflow-visible {
        overflow: visible !important;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    section {
        margin: 1em;
        padding: 0 0 2em 1em;
        border: 2px solid gray;
        overflow: hidden;
        background: #111;
    }

    section > h2 {
        font-size: 2em;
        margin-bottom: 0.5em;
        margin-top: 0.5em;
        padding: 0;
    }
</style>
