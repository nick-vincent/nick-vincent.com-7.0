<script lang="ts">
	import Thumbnail from '$lib/components/Thumbnail.svelte';
	import gloombird from '$lib/images/luminate.png?w=400&enhanced';
	import annumford from '$lib/images/annumford.png?w=400&enhanced';
	import youtube from '$lib/images/youtube.png?w=400&enhanced';
</script>

<svelte:head>
	<title>Nick Vincent → Tunes</title>
	<meta name="description" content="Assorted musical endeavors." />
</svelte:head>

<header>
	<h1>Tunes</h1>
	<p>Assorted musical endeavors.</p>
</header>

<div class="left">
	<div class="image">
		<enhanced:img class="tunes" alt="Acoustic guitar." src="$lib/images/tunes.jpg?w=1200" />
	</div>
</div>

<div class="right">
	<ul class="grid-list tunes">
		<li>
			<Thumbnail
				url="/tunes/gloombird/"
				src={gloombird}
				alt="Gloombird"
				text="Gloombird"
				imgClass="gloombird"
			></Thumbnail>
		</li>
		<li>
			<Thumbnail
				url="/tunes/annumford/"
				src={annumford}
				alt="Annum Ford"
				text="Annum Ford"
				imgClass="annumford"
			></Thumbnail>
		</li>
		<li>
			<Thumbnail url="/tunes/youtube/" src={youtube} alt="YouTube" text="YouTube" imgClass="youtube"
			></Thumbnail>
		</li>
	</ul>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a> / <a href="/tunes/">Tunes</a>
	</p>
</footer>
