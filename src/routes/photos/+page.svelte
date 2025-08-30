<script lang="ts">
	import Thumbnail from '$lib/components/Thumbnail.svelte';

	type Image = {
		id: string;
		title: string;
		date: string;
		caption: string;
	};

	import slugify from 'slugify';
	import { data } from '$lib/images/photos/_manifest.js';

	const getSlug = (image: Image) => {
		return `${image.date}-${slugify(image.title, { lower: true, strict: true })}`;
	};

	const getFilePath = (image: Image) => {
		return `/src/lib/images/photos/${getSlug(image)}.jpg`;
	};

	const thumbs: Record<string, { default: string }> = import.meta.glob('$lib/images/photos/*.jpg', {
		eager: true,
		query: { format: 'webp', w: 400, h: 400, enhanced: true }
	});
</script>

<svelte:head>
	<title>Nick Vincent → Photos</title>
	<meta name="description" content="Photography from around the world." />
</svelte:head>

<header>
	<h1>Photos</h1>
	<p>Photography from around the world.</p>
</header>

<div class="full">
	<ul class="grid-list gallery">
		{#each data as image}
			<li>
				<Thumbnail
					url={`/photos/${getSlug(image)}`}
					src={thumbs[getFilePath(image)].default}
					alt={image.title}
				></Thumbnail>
			</li>
		{/each}
	</ul>
</div>

<footer>
	<p class="breadcrumbs">
		<a href="/">Home</a> / <a href="/photos/">Photos</a>
	</p>
</footer>
