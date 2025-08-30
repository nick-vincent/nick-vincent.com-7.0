<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';
	import dayjs from 'dayjs';

	const { data }: PageProps = $props();
	const { image, prevSlug, nextSlug, path, slug } = data;

	const allPath = '/photos/';
	const prevPath = `/photos/${prevSlug}/`;
	const nextPath = `/photos/${nextSlug}/`;

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

	const images: Record<string, { default: string }> = import.meta.glob('$lib/images/photos/*.jpg', {
		eager: true,
		query: {
			format: 'webp',
			w: 1200,
			quality: 100,
			enhanced: true
		}
	});
</script>

<svelte:head>
	<title>Nick Vincent → Photos → {image?.title}</title>
	<meta name="description" content={image?.caption} />
</svelte:head>

<svelte:window on:keyup={(e) => onKeyUp(e)} />

<header class="full">
	<h1>{image?.title}</h1>
	<p class="date">{dayjs(image?.date).format('MMM D, YYYY')}</p>
</header>

<div class="left">
	<div class="image">
		<enhanced:img alt="" src={images[path].default} />
	</div>
</div>

<div class="right">
	<h2>Locale</h2>
	<p>{image?.caption}</p>

	<h2>More</h2>
	<p class="breadcrumbs">
		<span class="tooltip-container">
			<a aria-label="View previous" aria-describedby="tooltip-prev" href={prevPath}>Prev</a>
			<span class="tooltip" id="tooltip-prev">Press ←</span>
		</span>
		/
		<span class="tooltip-container">
			<a href={allPath} aria-label="View all" aria-describedby="tooltip-all">All</a>
			<span class="tooltip" id="tooltip-all">Press ESC</span>
		</span>
		/
		<span class="tooltip-container">
			<a aria-label="View next" aria-describedby="tooltip-next" href={nextPath}>Next</a>
			<span class="tooltip" id="tooltip-next">Press →</span>
		</span>
	</p>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a> / <a href="/photos/">Photos</a> /
		<a href="/photos/{slug}/">{image?.title}</a>
	</p>
</footer>
