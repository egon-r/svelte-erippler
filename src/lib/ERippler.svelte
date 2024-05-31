<!--
    @component
    
    # ERippler
    provides a ripple that can be invoked by using spawnRipple()

    ```ts
    const onPointerDown = (event: PointerEvent) => {
        rippler.spawnRipple(event.clientX, event.clientY);
    };
    ```

    Customization is possible via `rippleColor` and `rippleCustom`.
    
    The parent element should have `position: relative` and `overflow: hidden` set.

    # Example Usage
    ```
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
-->
<script lang="ts">
    export const name = "ERippler";

    type Props = {
        children?: Snippet,
        disabled?: boolean,
        rippleColor?: string,
        onRippleFinish?: () => void,
        rippleCustom?: string,
        rippleDurationMs?: number,
        rippleSizeMod?: number,
        rippleAbsoluteSize?: number,
        rippleZIndex?: number | "auto",
        rippleOverflow?: "hidden" | "visible",
        maxRipples?: number
    }

    let {
        children,
        disabled = false,
        rippleColor = "blue",
        rippleCustom = "radial-gradient(transparent 5%, var(--rippleColor) 50%, transparent 90%)",
        rippleDurationMs = 600,
        rippleSizeMod = 2.0,
        rippleAbsoluteSize,
        rippleZIndex = "auto",
        rippleOverflow = "hidden",
        maxRipples = 10, 
        onRippleFinish,
    }: Props = $props()

    let thisRoot: HTMLElement;
    let rippleClearTimeout: number | undefined;
    let activeRipples: HTMLElement[] = [];

    export function spawnRipple(clientX: number, clientY: number) {
        const thisParent = thisRoot.parentElement;
        if (!thisParent) {
            console.log("erippler has no parent :(");
            return;
        }
        while (activeRipples.length >= maxRipples) {
            activeRipples.shift()?.remove();
        }

        const diameter = Math.max(thisRoot.clientWidth, thisRoot.clientHeight);
        const rippleSize = rippleAbsoluteSize
            ? rippleAbsoluteSize
            : diameter * rippleSizeMod;

        const rippler = document.createElement("span");
        rippler.classList.add("rippler");
        rippler.style.width = rippleSize + "px";
        rippler.style.height = rippleSize + "px";
        rippler.style.left =
            clientX -
            (thisParent.offsetLeft - window.scrollX + rippleSize / 2) +
            "px";
        rippler.style.top =
            clientY -
            (thisParent.offsetTop - window.scrollY + rippleSize / 2) +
            "px";

        activeRipples.push(rippler);
        thisRoot.appendChild(rippler);

        if (rippleClearTimeout) {
            clearTimeout(rippleClearTimeout);
            rippleClearTimeout = undefined;
        }
        rippleClearTimeout = setTimeout(() => {
            while (activeRipples.length > 0) {
                activeRipples.pop()?.remove();
                if(onRippleFinish) {
                    onRippleFinish()
                }
            }
        }, rippleDurationMs);
    }

    export function getActiveRipples(): number {
        return activeRipples.length
    }
</script>

<div
    style="--rippleDuration: {rippleDurationMs}ms; --rippleColor: {rippleColor}; --rippleCustom: {rippleCustom}; --rippleZIndex: {rippleZIndex}; --rippleOverflow: {rippleOverflow}"
    bind:this={thisRoot}
    disabled={disabled || undefined}
>
    {#if children}
        {@render children()}
    {/if}
</div>

<style>
    div {
        position: absolute;
        overflow: var(--rippleOverflow);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    @keyframes rippler-anim {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    div:not([disabled]) > :global(.rippler) {
        position: absolute;
        z-index: var(--rippleZIndex);
        border-radius: 50%;
        transform: scale(0);
        animation: rippler-anim var(--rippleDuration) ease-in;
        background: var(--rippleCustom);
        pointer-events: none;
    }
</style>
