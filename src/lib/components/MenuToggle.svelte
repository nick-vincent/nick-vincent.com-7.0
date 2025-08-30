<script>
	export let open = false;

	const onClick = () => {
		window.scrollTo(0, 0);
		open = !open;
	};
</script>

<button
	aria-haspopup="true"
	aria-controls="navigation"
	aria-expanded={open ? 'true' : 'false'}
	on:click={onClick}
>
	<span class="visually-hidden">
		{#if open}
			Close navigation menu
		{:else}
			Open navigation menu
		{/if}
	</span>
	<span class="hamburger" aria-hidden="true">
		<span class="top"></span>
		<span class="bottom"></span>
		<span class="clockwise"></span>
		<span class="counterwise"></span>
	</span>
</button>

<style>
	button {
		overflow: hidden;
		cursor: pointer;
		display: block;
		position: relative;
		flex-shrink: 0;
		width: 1.5rem;
		height: 1.5rem;
		border: none;
		border-radius: 0.25rem;
		background: transparent;
		/* outline: none; */
		opacity: 0.75;
		z-index: 1001;
	}

	button:focus {
		opacity: 1;
	}

	@media (hover: hover) {
		button:hover {
			opacity: 1;
		}
	}

	.hamburger {
		display: block;
		position: absolute;
		inset: 0rem;
	}

	.top,
	.bottom,
	.clockwise,
	.counterwise {
		position: absolute;
		display: block;
		height: 1px;
		width: 100%;
		left: 0;
		top: calc(50% - 1px);
		background-color: white;
	}

	.top {
		transform: translateY(-8px);
	}
	.bottom {
		transform: translateY(8px);
	}

	[aria-expanded='true'] .top,
	[aria-expanded='true'] .bottom {
		opacity: 0;
		transform: translateY(0);
	}

	.clockwise {
		opacity: 0;
	}
	[aria-expanded='true'] .clockwise,
	[aria-expanded='true'] .counterwise {
		opacity: 1;
	}
	[aria-expanded='true'] .clockwise {
		transform: rotate(45deg);
	}
	[aria-expanded='true'] .counterwise {
		transform: rotate(-45deg);
	}

	@media (min-width: 640px) {
		button {
			display: none;
		}
	}
</style>
