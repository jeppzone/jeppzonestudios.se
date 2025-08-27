<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="fixed top-0 left-0 right-0 z-50">
	<nav class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-2 group">
				<div
					class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform"
				>
					<img src="/favicon.ico" alt="Jeppzone Studios Logo" class="w-10 h-10 rounded-xl" />
				</div>
				<span class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
					Jeppzone Studios
				</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center space-x-8">
				<a href="#about" class="nav-link">About</a>
				<a href="#technologies" class="nav-link">Tech</a>
				<a href="#experience" class="nav-link">Experience</a>
				<a href="#contact" class="nav-link">Contact</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
				on:click={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div
				class="lg:hidden mt-4 bg-black/30 rounded-2xl border border-white/10 overflow-hidden"
				in:slide={{ duration: 300 }}
			>
				<div class="p-6 space-y-4">
					<a href="#about" class="mobile-nav-link" on:click={closeMobileMenu}>About</a>
					<a href="#technologies" class="mobile-nav-link" on:click={closeMobileMenu}>Tech</a>
					<a href="#experience" class="mobile-nav-link" on:click={closeMobileMenu}>Experience</a>
					<a href="#contact" class="mobile-nav-link" on:click={closeMobileMenu}>Contact</a>
					<button class="btn-primary w-full mt-4"> 🚀 Get Started </button>
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
		@apply text-gray-300 hover:text-white transition-colors duration-300 font-medium relative;
	}

	.nav-link::after {
		content: '';
		@apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300;
	}

	.nav-link:hover::after {
		@apply w-full;
	}

	.mobile-nav-link {
		@apply block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10;
	}

	.btn-primary {
		@apply bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105;
	}
</style>
