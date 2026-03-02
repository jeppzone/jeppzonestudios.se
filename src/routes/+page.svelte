<script lang="ts">
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
</script>

<SEOHead />

<div class="min-h-screen bg-gray-950 relative overflow-hidden">
	<AnimatedBackground />

	<main class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl lg:max-w-7xl">
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
