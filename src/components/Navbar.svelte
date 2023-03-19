<script lang="ts">
	import { activeStore } from '../stores';
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
</script>

<div class="header">
	<Logo />
	<nav class="navbar">
		<NavLink keyword="Home" href="/" />
		<NavLink keyword="Stats" href="/stats" />
		<NavLink keyword="About" href="/about" />
	</nav>
	<div />
</div>

<style>
	.header {
		grid-area: head;
		display: inline-flex;
		align-items: center;
		background-color: var(--second-color);
		justify-content: space-between;
		border-bottom: 1px solid var(--border-color);
	}
	.navbar {
		text-align: center;
		display: inline-flex;
        gap: 2rem;
	}
</style>
