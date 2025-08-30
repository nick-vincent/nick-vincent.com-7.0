<script lang="ts">
	import Thumbnail from '$lib/components/Thumbnail.svelte';

	type Image = {
		id: string;
		title: string;
		date: string;
		caption: string;
		buy: string;
	};

	import slugify from 'slugify';
	import { data } from '$lib/images/faces/_manifest.js';

	const getSlug = (image: Image) => {
		return `${image.date}-${slugify(image.title, { lower: true, strict: true })}`;
	};

	const getFilePath = (image: Image) => {
		return `/src/lib/images/faces/${getSlug(image)}.png`;
	};

	const thumbs: Record<string, { default: string }> = import.meta.glob('$lib/images/faces/*.png', {
		eager: true,
		query: { format: 'webp', w: 400, h: 400, enhanced: true }
	});
</script>

<svelte:head>
	<title>Nick Vincent → Faces</title>
	<meta name="description" content="Portraits of various famous folks." />
</svelte:head>

<header>
	<h1>Faces</h1>
	<p>Portraits of various famous folks.</p>
</header>

<div class="full">
	<ul class="grid-list gallery">
		{#each data as image}
			<li>
				<Thumbnail
					url={`/faces/${getSlug(image)}`}
					src={thumbs[getFilePath(image)].default}
					alt={image.title}
				></Thumbnail>
			</li>
		{/each}
	</ul>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a> / <a href="/faces/">Faces</a>
	</p>
</footer>
