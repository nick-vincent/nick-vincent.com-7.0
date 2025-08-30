<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';
	import dayjs from 'dayjs';
	import Instagram from '$lib/components/icons/instagram.svelte';
	import Purchase from '$lib/components/icons/purchase.svelte';

	const { data }: PageProps = $props();
	const { image, prevSlug, nextSlug, path, slug } = data;

	const allPath = '/faces/';
	const prevPath = `/faces/${prevSlug}/`;
	const nextPath = `/faces/${nextSlug}/`;

	const images: Record<string, { default: string }> = import.meta.glob('$lib/images/faces/*.png', {
		eager: true,
		query: {
			format: 'webp',
			w: 1200,
			quality: 100,
			enhanced: true
		}
	});

	function onKeyUp(e: KeyboardEvent) {
		switch (e.key) {
			case 'Escape':
				goto(allPath);
				break;
			case 'ArrowLeft':
				goto(prevPath);
				break;
			case 'ArrowRight':
				goto(nextPath);
				break;
		}
	}
</script>

<svelte:head>
	<title>Nick Vincent → Faces → {image?.title}</title>
	<meta name="description" content={image?.caption} />
</svelte:head>

<svelte:window on:keyup={(e) => onKeyUp(e)} />

<header>
	<h1>{image?.title}</h1>
	<p class="date">{dayjs(image?.date).format('MMM D, YYYY')}</p>
</header>

<div class="left">
	<div class="image">
		<enhanced:img alt={image?.title} src={images[path].default} />
	</div>
</div>

<div class="right">
	<h2>As quoted</h2>
	<blockquote>
		<p>“ {image?.caption} ”</p>
	</blockquote>

	<h2>Links</h2>
	<ul class="icons">
		{#if image.buy}
			<li>
				<span class="tooltip-container">
					<a href={image?.buy} target="_blank" rel="external" aria-labelledby="tooltip-purchase"
						><Purchase /></a
					>
					<span class="tooltip" id="tooltip-purchase">Purchase a print</span>
				</span>
			</li>
		{/if}
		<li>
			<span class="tooltip-container">
				<a
					href={`https://instagram.com/p/${image?.id}`}
					target="_blank"
					rel="external"
					aria-labelledby="tooltip-instagram"><Instagram /></a
				>
				<span class="tooltip" id="tooltip-instagram">View on Instagram</span>
			</span>
		</li>
	</ul>

	<h2>More</h2>
	<p class="breadcrumbs">
		<span class="tooltip-container">
			<a aria-label="View previous" aria-describedby="tooltip-prev" href={prevPath}>Prev</a>
			<span class="tooltip" id="tooltip-prev">Press ←</span>
		</span>
		/
		<span class="tooltip-container">
			<a href={allPath} id="all" aria-label="View all" aria-describedby="tooltip-all">All</a>
			<span class="tooltip" id="tooltip-all">Press ESC</span>
		</span>
		/
		<span class="tooltip-container">
			<a aria-label="View next" id="next" aria-describedby="tooltip-next" href={nextPath}>Next</a>
			<span class="tooltip" id="tooltip-next">Press →</span>
		</span>
	</p>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a> / <a href="/faces/">Faces</a> /
		<a href="/faces/{slug}/">{image?.title}</a>
	</p>
</footer>
