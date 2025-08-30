<script lang="ts">
	export let href: string;
	export let text: string = 'Close';
</script>

<a {href}><span class="visually-hidden">{text}</span></a>

<style>
	a {
		position: relative;
		display: block;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
		padding: 0;
		width: 2rem;
		height: 2rem;
		background-color: white;
		border-radius: 50%;
		rotate: 45deg;
		opacity: 0.25;
	}
	a:hover {
		opacity: 0.5;
	}
	a::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1rem;
		height: 3px;
		background-color: #333;
		transform: translate(-50%, -50%);
	}
	a::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 3px;
		height: 1rem;
		background-color: #333;
		transform: translate(-50%, -50%);
	}
</style>
