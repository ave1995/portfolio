<script lang="ts">
	import Icons from './Icons.svelte';
	import { activeStore } from '../stores';

	import { base } from '$app/paths';

	const setHome = () => {
		$activeStore = 'Home';
	};
</script>

<aside>
	<a href="{base}/" on:click={setHome}>
		<img src="./me.jpg" alt="" />
	</a>
	<h2>Aleš Veselý</h2>
	<Icons />
	<section class="blurb">
		<h3>About</h3>
		<p>
			Hi, I'm Aleš. I like learning & building things. I am C# Backend Developer who is learning
			Frontend development. I'm trying to expand my knowledge.
		</p>
	</section>
</aside>

<style>
	aside {
		grid-area: side;
		display: flex;
		flex-direction: column;
	}
	img {
		border-radius: 50%;
		display: block;
		width: 10em;
		margin-bottom: 1em;
	}
	h2 {
		letter-spacing: 0.1em;
		line-height: 1.65;
		margin: 0 0 1em;
		font-size: 1.5em;
		font-weight: 700;
	}
	.blurb {
		border-top: 1px solid var(--border-color);
		margin: 3em 0 0;
		padding: 3em 0 0;
	}

	a {
		border: 0;
	}
	
	a:hover {
		border: 0;
	}

	@media only screen and (max-width: 980px) {
		aside {
			align-items: center;
			justify-content: center;
		}
	}
</style>
