<script>
	import Navbar from '../components/navigation/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';

	import { beforeUpdate, onMount } from 'svelte';
	import { activeStore } from '../stores';
	let savestore = false;
	$: if (savestore && $activeStore) {
		window.sessionStorage.setItem('activeStore', JSON.stringify($activeStore));
	}
	beforeUpdate(async () => {
		let ses = window.sessionStorage.getItem('activeStore');
		if (ses) {
			$activeStore = JSON.parse(ses);
		}
		savestore = true;
	});
</script>

<main>
	<div class="container">
		<Navbar />
		<div class="content">
			<div class="post">
				<slot />
			</div>
			<div class="sidebar">
				<Sidebar />
			</div>
		</div>
	</div>
</main>

<style>
	:root {
		font-family: Segoe UI, system-ui, -apple-system, sans-serif;
		line-height: 1.5;
		font-weight: 400;
		font-size: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);

		color-scheme: light dark;
		color: var(--white-color);
		background-color: var(--main-color);

		--var-direction: 'ltr';
		--var-writing-mode: 'horizontal-tb';

		--main-color: #202124;
		--white-color: #f8f9fa;
		--border-color: hsla(0, 0%, 63%, 0.3);
		--second-color: #303136;
		--hover-color: #c9d1d9;
	}
	:global(body) {
		margin: 0;
		overflow-y: auto
	}
	:global(small) {
		font-style: italic;
	}
	main {
		height: 100vh;
	}

	.content {
		grid-area: content;
		display: flex;
		flex-direction: row-reverse;
		padding: 4em 4em 0em 4em;
		margin-left: 4em;
		margin-right: 4em;
	}
	.post {
		flex: 70%;
		width: 100%;
	}
	.sidebar {
		flex: 30%;
		margin-right: 3em;
	}

	.container {
		display: grid;
		grid-template-areas:
			'head head head head'
			'content content content content';
		grid-auto-rows: minmax(100px, auto);
		grid-template-rows: 50px 1fr;
		grid-template-columns: 1fr 1fr;
		direction: var(--var-direction);
		writing-mode: var(--var-writing-mode);
	}

	@media only screen and (max-width: 1280px) {
		.content {
			margin-left: 0;
			margin-right: 0;
		}
	}
	@media only screen and (max-width: 980px) {
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.sidebar {
			margin: 0;
			margin-top: 3rem;
		}
	}

	@media only screen and (max-width: 736px) {
		.content {
			padding: 0;
			padding-top: 3rem;
		}
		:global(header) {
			padding: 1em !important;
		}
		:global(section) {
			padding: 1em !important;
		}
		:global(h1, h3){
			text-align: center;
		}
		:global(.small){
			text-align: center;
		}
	}

	:global(article) {
		
		border: 1px solid var(--border-color);
		background-color: var(--second-color);
		width: 100%;
	}
	:global(header) {
		border-bottom: 1px solid var(--border-color);
		padding: 3em;
	}
	:global(section) {
		padding: 3em;
	}
	:global(a) {
		text-decoration: none;
		color: inherit;
		border-bottom: 1px dotted var(--white-color);
	}
	:global(a:hover) {
		color: var(--hover-color);
		border-bottom: 1px dotted var(--hover-color);
	}
</style>
