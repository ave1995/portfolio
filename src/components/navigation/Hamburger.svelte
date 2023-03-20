<script lang="ts">
	export let open: boolean = false;
</script>

<button
	aria-label="menu-burger-button"
	class:open
	on:click={() => (open = !open)}
>
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style>
    svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}
    button {
		color: var(--white-color);
		background: transparent;
		border: transparent;
		z-index: 20;
	}
    button:hover {
        color: var(--hover-color);
    }
</style>