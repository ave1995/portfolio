<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';

	import { base } from "$app/paths";

	let opened: boolean = false;
</script>

<div class="header">
	<div class="logo">
		<Logo />
	</div>
	<nav class="navbar">
		<NavLink keyword="Home" href="{base}/" />
		<NavLink keyword="Stats" href="{base}/stats" />
		<NavLink keyword="About" href="{base}/about" />
	</nav>
	<div />
	<div class="burger">
		<Hamburger bind:open={opened} />
	</div>
	<aside class:opened>
		<div class="burgerItems">
			<NavLink keyword="Home" href="{base}/" />
			<NavLink keyword="Stats" href="{base}/stats" />
			<NavLink keyword="About" href="{base}/about" />
		</div>
	</aside>
</div>

<style>
	.header {
		grid-area: head;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--second-color);
		border-bottom: 1px solid var(--border-color);
	}
	.navbar {
		text-align: center;
		display: inline-flex;
		gap: 2em;
	}
	.logo {
		padding-left: 0.5em;
	}
	.burger {
		display: none;
		padding-right: 0.5em;
	}

	@media only screen and (max-width: 980px) {
		.navbar {
			display: none;
		}
		.burger {
			display: flex;
		}
	}

	@media only screen and (min-width: 980px) {
		aside {
			display: none;
		}
	}

	.opened {
		right: 0;
		top: 0;
	}

	.burgerItems {
		padding-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	aside {
		right: -100%;
		top: 0;
		position: fixed;
		transition: right 0.3s ease-in-out;
		width: 50vw;
		min-width: 300px;
		z-index: 10;
		height: 100%;
		background-color: var(--second-color);
		border-left: 1px solid var(--border-color);
	}

</style>
