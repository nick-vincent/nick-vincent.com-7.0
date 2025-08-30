<script lang="ts">
	import Bandcamp from '$lib/components/icons/bandcamp.svelte';
	import YouTubeMusic from '$lib/components/icons/youtube-music.svelte';
</script>

<svelte:head>
	<title>Nick Vincent → Tunes → Annum Ford</title>
	<meta name="description" content="" />
</svelte:head>

<header>
	<h1>Annum Ford</h1>
	<p class="date">2004 – 2007</p>
</header>

<div class="left">
	<div class="image">
		<enhanced:img class="hero" alt="Annum Ford: Of Analog." src="$lib/images/ofanalog.jpg?w=1200" />
	</div>
</div>

<div class="right">
	<h2>Video</h2>
	<p>Filmed at Freakin’ Frog in Las&nbsp;Vegas,&nbsp;Nevada</p>
	<p class="date">Dec 14, 2006</p>
	<div class="image">
		<iframe
			src="https://www.youtube.com/embed/videoseries?list=PLkCSJIvjbqhu3i1saWiZRxZefRkCqjoN_&modestbranding=1&color=white"
			title="Annum Ford: Live at Freakin’ Frog"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>

	<h2>Bio</h2>
	<p>
		Formed in the early aughts by life-long friends, Annum Ford blended punk, hardcore, grunge, &
		indie influences with haunting melodies about identity and alienation in the human condition.
	</p>

	<h2>Members</h2>
	<ul class="bullet">
		<li>
			<a href="/">Nick Vincent</a> – vocals &amp; rhythm guitar
		</li>
		<li>
			<a href="https://www.youtube.com/@hitwithacousticstick" target="_blank" rel="external">
				Nick Whalen</a
			> – lead guitar
		</li>
		<li>
			<a href="https://www.youtube.com/@JonLosey" target="_blank" rel="external">Jon Losey</a> – bass
		</li>
		<li>
			<a href="https://www.youtube.com/@yourmomcantspell" target="_blank" rel="external"
				>Mike Reilly</a
			> – drums
		</li>
	</ul>

	<h2>Stream</h2>
	<ul class="icons">
		<li>
			<span class="tooltip-container">
				<a
					href="https://annumford.bandcamp.com"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-bandcamp"><Bandcamp /></a
				>
				<span class="tooltip" id="tooltip-bandcamp">Bandcamp</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://www.youtube.com/@annumford"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-youtube"><YouTubeMusic /></a
				>
				<span class="tooltip" id="tooltip-youtube">YouTube</span>
			</span>
		</li>
	</ul>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a> / <a href="/tunes/">Tunes</a> / <a href="/tunes/annumford/">Annum Ford</a>
	</p>
</footer>
