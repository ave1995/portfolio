<script lang="ts">
	import { activeStore } from '../../stores';

	const setHome = () => {
		$activeStore = 'Home';
	};
</script>

<a href="/" on:click={setHome}>
	<h2>A\Ve</h2>
</a>

<style>
	a {
		text-decoration: none;
		font-size: inherit;
		font-family: inherit;
		color: var(--white-color);
		padding-left: 2rem;
	}
	a:hover {
		cursor: pointer;
		color: var(--hover-color);
	}
	h2 {
		box-sizing: content-box;
	}
</style>
