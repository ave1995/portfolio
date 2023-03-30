<script lang="ts">
	import { onMount } from 'svelte';
	import { getCountWordsWithoutH3 } from './countWords';
	let words = 0;

	onMount(async () => {
		words = getCountWordsWithoutH3(document.getElementById('count'));
	});
</script>

<article>
	<header>
		<h1>A few words about me</h1>
		<div class="small">
			<small>Exactly {words} words</small>
		</div>
	</header>
	<section id="count">
		<h3>Intro</h3>
		<p>
			I am based in the Czech Republic and currently work remotely as a software developer for
			Dataprojekt. In the company I use technologies like ASP.NET Core, Razor Pages, Javascript,
			jQuery, Boostrap, SQL and so on. However, I tend to learn and use the best technologies and
			approaches that will best solve the problem at hand. That's why I'm now learning Svelte.js and
			would like to rewrite our client side.
		</p>
		<h3>Skills</h3>
		<ul>
			<li>
				<h4>Programming:</h4>
				<div class="list">
					<div>C#</div>
					<div>JavaScript</div>
					<div>TypeScript</div>
					<div>Svelte.js</div>
				</div>
			</li>
			<li>
				<h4>Databases:</h4>
				<div class="list">
					<div>MySQL</div>
					<div>Microsoft SQL Server</div>
					<div>PostgreSQL</div>
					<div>MariaDB</div>
					<div>Oracle Database</div>
				</div>
			</li>
			<li>
				<h4>Languages:</h4>
				<div class="list">
					<div>Czech</div>
					<div>English</div>
				</div>
			</li>
		</ul>
		<h3>I like</h3>
		<ul>
			<li>Cycling</li>
			<li>Running</li>
			<li>Animals</li>
			<li>Summer</li>
			<li>Board games</li>
			<li>Self Improvement</li>
			<li>Space</li>
		</ul>
		<h3>Goals</h3>
		<ul>
			<li>Get better at Svelte.js.</li>
			<li>Learn React Native and make my app idea in it.</li>
			<li>Get to the finish line of the IRONMAN race.</li>
		</ul>
		<h3>I dream of</h3>
		<ul>
			<li>Always finding motivation.</li>
			<li>Doing better.</li>
			<li>Enabling a brighter future.</li>
		</ul>
		<h3>Fun facts</h3>
		<ul>
			<li>I fall a lot on my mountain bike.</li>
			<li>I chase my dog around the fields quite often because he likes rabbits.</li>
			<li>I try to keep a more organized source code than my own desk.</li>
			<li>I can navigate better in the woods than in the city.</li>
		</ul>
		<h3>Some history</h3>
		<ul>
			<li>
				My family background wasn't the best. That's why I think I wasn't a responsible student, and
				after high school I didn't have a proper goal and went to work as a waiter.
			</li>
			<li>
				After a year of slacking off, something changed in me and I started to have a desire to do
				something fulfilling. I started looking for a job in IT. A friend of mine just started
				working as a tester and he praised it. I finally found a job as a tester and started working
				for T-Mobile.
			</li>
			<li>
				I've always liked computers. In high school I was always interested in programming and
				testing was honestly not satisfying. I started to refresh my programming skills and look for
				a new job.
			</li>
			<li>
				I managed to get a job in programming. My first projects were small plugins for Enterprise
				Architect. Eventually I got into web application development.
			</li>
			<li>
				Eventually I fall in love with software development and try to put all my free time into
				improving myself as a developer or as an athlete.
			</li>
		</ul>
	</section>
</article>

<style>
	.list {
		display: flex;
		flex-flow: row wrap;
		gap: 1rem;
	}
</style>
