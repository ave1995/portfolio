<script lang="ts">
	import { onMount } from 'svelte';
	import { debug } from 'svelte/internal';
	import TableRow from '../../components/stats/TableRow.svelte';
	import type { JSONValue } from '../../scripts/JSONValue';
	import ageTick from './ageTick';
	import { loadJson, readJsonData } from './getGithubData';
	const age = ageTick();

	let githubdata: {
		label: string;
		key: string;
		link: string;
		format?: (x: string) => string;
		value: string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;
	}[] = [];

	onMount(async () => {
		const fetchGithubData = await loadJson('https://api.github.com/repos/ave1995/portfolio');
		githubdata = readJsonData(fetchGithubData);
	});
</script>

<article>
	<header>
		<h1>Stats</h1>
		<small>A few "interesting" stats</small>
	</header>
	<section>
		<h3>Some stats about me</h3>
		<table>
			<tbody>
				<TableRow label="Current age" link="" value={$age} format={(x) => x} />
				<TableRow
					label="Current city"
					link="https://www.mestobustehrad.cz/"
					value="Buštěhrad, CZ"
					format={(x) => x}
				/>
			</tbody>
		</table>
		<h3>Some stats about this site</h3>
		<table>
			<tbody>
				{#each githubdata as data}
					<TableRow
						label={data['label']}
						link={data['link']}
						value={data['value']}
						format={data.format ? data.format : (x) => x}
					/>
				{:else}
					<!-- this block renders when photos.length === 0 -->
					<p>loading...</p>
				{/each}
			</tbody>
		</table>
	</section>
</article>

<style>
	:global(tr td:first-child) {
		width: 70%;
	}
	:global(tr td:nth-child(2)) {
		width: 30%;
	}
	:global(td) {
		border-bottom: 1px solid var(--border-color);
		padding: 0.75rem;
	}
	:global(tr:nth-child(even)) {
		background-color: var(--main-color);
	}
	table {
		width: 100%;
		border-spacing: 0;
		border-collapse: collapse;
	}
</style>
