<script>
	import '../app.css';
</script>

<div class="app bg-gradient-to-r from-blue-600 to-violet-600">
	<main>
		<slot />
	</main>

	<footer>
		<p><b>jesper@jeppzonestudios.se</b></p>
		<p><b>559437-4000</b></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
