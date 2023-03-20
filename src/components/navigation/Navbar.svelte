<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';

	let opened: boolean = false;
</script>

<div class="header">
	<Logo />
	<nav class="navbar">
		<NavLink keyword="Home" href="/" />
		<NavLink keyword="Stats" href="/stats" />
		<NavLink keyword="About" href="/about" />
	</nav>
	<div />
	<div class="burger">
		<Hamburger bind:open={opened} />
	</div>
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
		gap: 2rem;
	}
	.burger {
		display: none;
	}
	@media only screen and (max-width: 980px) {
		.navbar {
			display: none;
		}
		.burger {
			display: flex;
		}
	}
</style>
