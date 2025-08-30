<script lang="ts">
	import Apple from '$lib/components/icons/apple.svelte';
	import Spotify from '$lib/components/icons/spotify.svelte';
	import Tidal from '$lib/components/icons/tidal.svelte';
	import Pandora from '$lib/components/icons/pandora.svelte';
	import Amazon from '$lib/components/icons/amazon.svelte';
	import YouTubeMusic from '$lib/components/icons/youtube-music.svelte';
	import SoundCloud from '$lib/components/icons/soundcloud.svelte';
</script>

<svelte:head>
	<title>Nick Vincent → Tunes → Gloombird</title>
	<meta name="description" content="" />
</svelte:head>

<header>
	<h1>Gloombird</h1>
	<p class="date">2024 – Present</p>
</header>

<div class="left">
	<div class="image">
		<enhanced:img class="hero" alt="Gloombird: Luminate" src="$lib/images/luminate.png?w=1200" />
	</div>
</div>

<div class="right">
	<h2>About</h2>
	<p>
		Songs by <a href="/">Nick Vincent</a><br />
		Produced by
		<a href="https://www.fredcharlesproductions.com" target="_blank" rel="external">Fred Charles</a
		><br />
		Artwork by
		<a href="https://www.midjourney.com" target="_blank" rel="external">Midjourney</a><br />
		Website at <a href="https://gloombird.com" target="_blank" rel="external">Gloombird.com</a>
	</p>

	<h2>Stream</h2>
	<ul class="icons">
		<li>
			<span class="tooltip-container">
				<a
					href="https://music.apple.com/us/artist/gloombird/1770815986"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-apple"><Apple /></a
				>
				<span class="tooltip" id="tooltip-apple">Apple</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://open.spotify.com/artist/4TIGLGdf4Yw3DpSW7XeABX"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-spotify"><Spotify /></a
				>
				<span class="tooltip" id="tooltip-spotify">Spotify</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://tidal.com/browse/artist/50723332"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-tidal"><Tidal /></a
				>
				<span class="tooltip" id="tooltip-tidal">Tidal</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://www.pandora.com/artist/gloombird/ARflg6PqlfjXqvw"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-pandora"><Pandora /></a
				>
				<span class="tooltip" id="tooltip-pandora">Pandora</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://music.amazon.com/artists/B0DJ1PPRFD/gloombird"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-amazon"><Amazon /></a
				>
				<span class="tooltip" id="tooltip-amazon">Amazon</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://music.youtube.com/channel/UCk4VUjuoAiA0nF32aiCEfcQ?si=9Br2MoXs_4VyFkhl"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-youtube"><YouTubeMusic /></a
				>
				<span class="tooltip" id="tooltip-youtube">YouTube</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://soundcloud.com/gloombird"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-soundcloud"><SoundCloud /></a
				>
				<span class="tooltip" id="tooltip-soundcloud">SoundCloud</span>
			</span>
		</li>
	</ul>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a> / <a href="/tunes/">Tunes</a> / <a href="/tunes/gloombird/">Gloombird</a>
	</p>
</footer>
