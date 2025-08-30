<script lang="ts">
	export let alt: string;
	export let src: string;
	export let url: string;
	export let text: string | undefined = undefined;
	export let imgClass: string | undefined = undefined;

	let link: HTMLAnchorElement;
	let mouseX = 0;
	let mouseY = 0;

	function onMouseMove(e: MouseEvent) {
		mouseX = e.offsetX - link.clientWidth / 2;
		mouseY = link.clientHeight / 2 - e.offsetY;
	}

	function onMouseLeave() {
		mouseX = 0;
		mouseY = 0;
	}
</script>

<a
	href={url}
	aria-label={alt}
	bind:this={link}
	on:mousemove={(e) => onMouseMove(e)}
	on:mouseleave={onMouseLeave}
	style:--mouseX={mouseX}
	style:--mouseY={mouseY}
>
	<span class="image">
		<enhanced:img class={imgClass} loading="lazy" {src} {alt} />
		{#if text}
			<span class="text">{text}</span>
		{/if}
		<span class="shine"></span>
	</span>
</a>

<style>
	a {
		z-index: 1;
		position: relative;
		display: block;
		width: 100%;
		height: auto;
		border-radius: 1rem;
		overflow: hidden;
	}
	a:active {
		scale: 0.95;
	}
	@media (hover: hover) {
		a:hover {
			scale: 1.025;
		}
		a:active {
			scale: 0.975;
		}
	}

	.text {
		pointer-events: none;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		line-height: 1.25;
		padding: 1rem;
		background-image: linear-gradient(
			to bottom,
			rgba(24, 24, 24, 0) 0%,
			rgba(24, 24, 24, 0.95) 100%
		);
		color: white;
		text-shadow: 0 0 2rem rgba(0, 0, 0, 1);
		transition: background-color 0.3s ease-in-out;
	}

	.shine {
		pointer-events: none;
		display: block;
		position: absolute;
		inset: -50%;
		opacity: 0;
		background-image: radial-gradient(circle closest-side, white, transparent);
		background-repeat: no-repeat;
		transition-duration: 250ms;
		transform: translateX(calc(var(--mouseX) * 1px)) translateY(calc(var(--mouseY) * -1px));
	}
	@media (hover: hover) {
		a:hover .shine {
			opacity: 0.2;
			transition-duration: 100ms;
			transition-timing-function: linear;
		}
	}
</style>
