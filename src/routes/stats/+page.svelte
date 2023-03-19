<script>
	import TableRow from '../../components/stats/TableRow.svelte';
	import ageTick from './ageTick';
	import { loadJson, readJsonData } from './getGithubData';
	const age = ageTick();

	const fetchGithubData = loadJson('https://api.github.com/repos/ave1995/portfolio').then((data) =>
		readJsonData(data)
	);
</script>

<article>
	<header>
		<h1>Stats</h1>
	</header>
	<section>
		<table>
			<h3>Some stats about me</h3>
			<TableRow label="Current age" link="" value={$age} />
		</table>
		<table>
			<h3>Some stats about this site</h3>
			{#await fetchGithubData then Githubdata}
				{#each Githubdata as data}
					<TableRow label={data['label']} link={data['link']} value={data['value']} />
				{/each}
			{/await}
		</table>
	</section>
</article>

<style>
	:global(tr td:first-child) {
		width: 70%;
	} 
	:global(td) {
		border-bottom: 1px solid var(--border-color);
		padding: 0.75em;
	}
	:global(tr:nth-child(even)){background-color: var(--main-color)}
	table {
		width: 100%;
		border-spacing: 0;
	}
</style>
