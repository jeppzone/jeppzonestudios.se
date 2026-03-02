<script>
	import '../app.pcss';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
	<nav class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl lg:max-w-7xl py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center gap-2.5 group">
				<img src="/favicon.ico" alt="" class="w-7 h-7 rounded-lg" />
				<span class="text-white text-sm font-medium group-hover:text-gray-300 transition-colors">
					Jeppzone Studios
				</span>
			</a>

			<div class="hidden lg:flex items-center gap-8">
				<a href="#about" class="nav-link">About</a>
				<a href="#technologies" class="nav-link">Tech</a>
				<a href="#experience" class="nav-link">Experience</a>
				<a href="#contact" class="nav-link">Contact</a>
			</div>

			<button
				class="lg:hidden w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>

		{#if mobileMenuOpen}
			<div class="lg:hidden mt-3 py-3 border-t border-white/10">
				<div class="flex flex-col gap-1">
					<a href="#about" class="mobile-nav-link" on:click={closeMobileMenu}>About</a>
					<a href="#technologies" class="mobile-nav-link" on:click={closeMobileMenu}>Tech</a>
					<a href="#experience" class="mobile-nav-link" on:click={closeMobileMenu}>Experience</a>
					<a href="#contact" class="mobile-nav-link" on:click={closeMobileMenu}>Contact</a>
				</div>
			</div>
		{/if}
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	.nav-link {
		@apply text-gray-400 hover:text-white transition-colors text-sm;
	}

	.mobile-nav-link {
		@apply block text-gray-400 hover:text-white transition-colors py-2 px-1 text-sm;
	}
</style>
