<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { activeStore } from '../../stores';
	export let keyword: string;
	export let href: string;

	const setActive = () => {
		$activeStore = keyword;
	};
</script>

<a class:active={$activeStore == keyword} {href} on:click={setActive}>
	<span>{$_(`navbar.${keyword}`)}</span>
</a>

<style>
	a {
		border: none;
		background-color: inherit;
		text-decoration: none;
		color: var(--white-color);
		font-size: 1.1rem;
		font-family: inherit;
	}
	.active span {
		color: var(--white-color);
		border-bottom: solid 3px var(--white-color);
	}
	a:hover {
		color: var(--hover-color);
	}
</style>
