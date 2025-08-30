<script lang="ts">
	import '$lib/styles/index.css';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import MenuToggle from '$lib/components/MenuToggle.svelte';

	export let data;

	let windowWidth: number;
	let open = false;

	const pages = [
		{ text: 'Tunes', href: '/tunes/' },
		{ text: 'Faces', href: '/faces/' },
		{ text: 'Photos', href: '/photos/' },
		{ text: 'Work', href: '/work/' },
		{ text: 'Contact', href: '/contact/' }
	];

	$: if (windowWidth) {
		document.documentElement.classList.add('no-transitions');
		setTimeout(() => {
			document.documentElement.classList.remove('no-transitions');
		}, 50);
	}
</script>

<svelte:head>
	<title>Nick Vincent → Work</title>
	<meta name="description" content="Professional pixel pusher." />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<nav class:open>
	<div class="bar">
		<a href="/" class="home" on:click={() => (open = false)}>Nick Vincent</a>
		<MenuToggle bind:open />
		<ul id="navigation">
			{#each pages as { href, text }}
				<li>
					<a {href} on:click={() => (open = false)}>{text}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<PageTransition key={data.pathname}>
	<article class="content">
		<slot />
	</article>
</PageTransition>

<style>
	article {
		padding: 8rem 2rem 4rem;
	}

	nav {
		z-index: 1000;
		font-weight: 500;
		line-height: 1;
		top: 0;
		width: 100%;
		position: absolute;
		overflow: hidden;
		display: flex;
		max-width: 1280px;
		align-items: start;
		gap: 0.25rem;
		height: 5rem;
		padding: 0 2rem;
		transition-delay: 250ms;
		transition-duration: 250ms;
		transition-property: height backdrop-filter background-color;
	}

	nav.open {
		height: 100dvh;
		background-color: rgba(0, 0, 0, 0.5);
		transition-delay: 0ms;
		backdrop-filter: blur(2.5rem);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 1rem;
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		height: 5rem;
		justify-content: space-between;
	}

	.home {
		font-size: 1.5rem;
		line-height: 1;
		letter-spacing: -0.025em;
		white-space: nowrap;
		width: fit-content;
	}

	ul {
		display: none;
		opacity: 0;
		position: absolute;
		font-size: 1.5rem;
		list-style-type: none;
		padding: 1.5rem 2rem;
		width: 100%;
		left: 0;
		top: 5rem;
		justify-content: center;
		flex-direction: column;
		gap: 0.5rem;
		letter-spacing: -0.025em;
		transition-delay: 250ms;
		transition-duration: 250ms;
	}

	nav.open ul {
		display: flex;
		opacity: 1;
		transition-delay: 0ms;
	}

	@media (min-width: 640px) {
		article {
			padding: 12rem 2rem 4rem;
		}

		nav,
		nav.open {
			display: flex;
			height: 8rem;
			transition-delay: 0ms;
			backdrop-filter: blur(0);
			align-items: baseline;
			background-color: transparent;
		}

		.bar {
			height: 8rem;
			align-items: baseline;
			padding-top: 4.5rem;
		}

		ul {
			opacity: 1;
			display: flex;
			position: relative;
			flex-direction: row;
			top: auto;
			padding: 0;
			font-size: 1.25rem;
			width: 100%;
			margin-left: auto;
			letter-spacing: 0;
			gap: 1rem;
			transition-delay: 0ms;
			justify-content: end;
			align-items: baseline;
		}
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (hover: hover) {
		a:hover {
			color: #fff;
		}
	}
</style>
