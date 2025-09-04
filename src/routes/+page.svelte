<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import {
		SEOHead,
		AnimatedBackground,
		HeroSection,
		TechnologiesSection,
		WorkExperienceSection,
		EducationSection,
		SideProjectsSection,
		SocialLinksSection,
		ContentCreationSection,
		ContactCTASection
	} from '../components';

	let mounted = false;
	let particles: Array<{ id: number; x: number; y: number; delay: number; size: number }> = [];

	onMount(() => {
		mounted = true;
	});
</script>

<SEOHead />

<div
	class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
>
	<AnimatedBackground />

	<main class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl lg:max-w-7xl">
		<HeroSection />
		<TechnologiesSection />
		<WorkExperienceSection />
		<EducationSection />
		<SideProjectsSection />
		<ContentCreationSection />
		<SocialLinksSection />
		<ContactCTASection />
	</main>
</div>

<style>
	:global(body) {
		color: white;
	}
</style>
