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
			<TableRow label="Current age" link="" value={$age} />
			{#await fetchGithubData then Githubdata}
				{#each Githubdata as data}
					{@debug data}
					<TableRow label={data['label']} link={data['link']} value={data['value']} />
				{/each}
			{/await}
		</table>
	</section>
</article>
