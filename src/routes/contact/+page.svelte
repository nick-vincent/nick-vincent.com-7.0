<script lang="ts">
	import LinkedIn from '$lib/components/icons/linkedin.svelte';
	import Instagram from '$lib/components/icons/instagram.svelte';
	import GitHub from '$lib/components/icons/github.svelte';
</script>

<svelte:head>
	<title>Nick Vincent → Contact</title>
	<meta name="description" content="Connect or get in touch." />
</svelte:head>

<header>
	<h1>Contact</h1>
	<p>Connect or get in touch.</p>
</header>

<div class="left">
	<div class="image">
		<enhanced:img class="contact" alt="Phone booth relic" src="$lib/images/contact.jpg?w=1200" />
	</div>
</div>

<div class="right">
	<h2>Email</h2>
	<a href="mailto:the.nick.vincent@gmail.com" target="_blank">the.nick.vincent@gmail.com</a>

	<h2>Social</h2>
	<ul class="icons">
		<li>
			<span class="tooltip-container">
				<a
					href="https://github.com/nick-vincent"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-github"><GitHub /></a
				>
				<span class="tooltip" id="tooltip-github">GitHub</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://www.linkedin.com/in/nickvincent/"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-linkedin"><LinkedIn /></a
				>
				<span class="tooltip" id="tooltip-linkedin">LinkedIn</span>
			</span>
		</li>
		<li>
			<span class="tooltip-container">
				<a
					href="https://www.instagram.com/the.nick.vincent/"
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-instagram"><Instagram /></a
				>
				<span class="tooltip" id="tooltip-instagram">Instagram</span>
			</span>
		</li>
	</ul>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a> / <a href="/contact/">Contact</a>
	</p>
</footer>
