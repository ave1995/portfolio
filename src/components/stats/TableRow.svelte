<script lang="ts">
	import type { JSONValue } from '../../scripts/JSONValue';

	export let label: string;
	export let value:
		| string
		| number
		| boolean
		| {
				[x: string]: JSONValue;
		  }
		| JSONValue[];
	export let link: string;
	export let format: (x: string) => string;
</script>

<tr>
	<td>{label}</td>
	<td>
		{#if link}
			<a href={link}>{format(String(value))}</a>
		{:else}
			{format(String(value))}
		{/if}
	</td>
</tr>

