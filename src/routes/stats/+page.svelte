<script>
	let age = '';
	const tick = () => {
		const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
		const birthTime = new Date('1995-08-27T01:00:00');
		const timeDiff = Math.abs(Date.now() - birthTime.getTime());
		age = (timeDiff / divisor).toFixed(11);
	};
	setInterval(() => {
		tick();
	}, 25);
</script>

<article>
	<header>
		<h1>Stats</h1>
	</header>
	<section>
		<table>
			<tr>
				<td>Current age</td>
				<td>{age}</td>
			</tr>
		</table>
	</section>
</article>
