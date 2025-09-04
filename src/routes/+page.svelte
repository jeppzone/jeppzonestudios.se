<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let mounted = false;
	let particles: Array<{ id: number; x: number; y: number; delay: number; size: number }> = [];

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Jesper Olsson Laine | Freelance Software Developer in Gothenburg | Jeppzone Studios</title>
	<meta
		name="title"
		content="Jesper Olsson Laine | Freelance Software Developer in Gothenburg | Jeppzone Studios"
	/>
	<meta
		name="description"
		content="Experienced freelance software developer in Gothenburg with 6+ years of expertise in C# .NET, Svelte, Kubernetes, and Azure. Full-stack development, cloud solutions, and modern web applications. Contact Jesper Olsson Laine for your software development needs."
	/>

	<!-- Keywords -->
	<meta
		name="keywords"
		content="freelance software developer, Gothenburg developer, C# .NET developer, Svelte developer, Kubernetes expert, Azure cloud solutions, full-stack developer, Jesper Olsson Laine, Jeppzone Studios, software consultant, software development Gothenburg, Swedish developer"
	/>

	<!-- Additional Meta Tags -->
	<meta name="author" content="Jesper Olsson Laine" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://jeppzonestudios.se" />

	<!-- Open Graph Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://jeppzonestudios.se" />
	<meta
		property="og:title"
		content="Jesper Olsson Laine | Freelance Software Developer in Gothenburg | Jeppzone Studios"
	/>
	<meta
		property="og:description"
		content="Experienced freelance software developer in Gothenburg with 6+ years of expertise in C# .NET, Svelte, Kubernetes, and Azure. Full-stack development, cloud solutions, and modern web applications."
	/>
	<meta property="og:site_name" content="Jeppzone Studios" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="https://jeppzonestudios.se/profile.jpg" />
	<meta property="og:image:alt" content="Jesper Olsson Laine - Freelance Software Developer" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://jeppzonestudios.se" />
	<meta
		name="twitter:title"
		content="Jesper Olsson Laine | Freelance Software Developer in Gothenburg | Jeppzone Studios"
	/>
	<meta
		name="twitter:description"
		content="Experienced freelance software developer in Gothenburg with 6+ years of expertise in C# .NET, Svelte, Kubernetes, and Azure. Full-stack development, cloud solutions, and modern web applications."
	/>
	<meta name="twitter:image" content="https://jeppzonestudios.se/profile.jpg" />
	<meta name="twitter:image:alt" content="Jesper Olsson Laine - Freelance Software Developer" />

	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Jesper Olsson Laine",
			"url": "https://jeppzonestudios.se",
			"image": "https://jeppzonestudios.se/profile.jpg",
			"jobTitle": "Freelance Software Developer",
			"worksFor": {
				"@type": "Organization",
				"name": "Jeppzone Studios",
				"url": "https://jeppzonestudios.se"
			},
			"alumniOf": {
				"@type": "CollegeOrUniversity",
				"name": "Chalmers University of Technology"
			},
			"sameAs": [
				"https://github.com/jeppzone",
				"https://www.linkedin.com/in/jesper-olsson-laine-86076a97/",
				"https://www.youtube.com/@jeppzonegaming",
				"https://www.youtube.com/@jeppzonelifestyle",
				"https://www.jeppzonelifestyle.com"
			],
			"knowsAbout": [
				"C# .NET",
				"Svelte",
				"React",
				"Kubernetes",
				"Azure",
				"Docker",
				"SQL Server",
				"Elasticsearch"
			],
			"description": "Experienced freelance software developer in Gothenburg with 6+ years of expertise in C# .NET, Svelte, Kubernetes, and Azure. Full-stack development, cloud solutions, and modern web applications."
		}
	</script>

	<!-- YouTube Channels Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			"itemListElement": [
				{
					"@type": "VideoObject",
					"@id": "https://www.youtube.com/@jeppzonegaming",
					"name": "Jeppzone Gaming",
					"description": "Gaming content and entertainment by Jesper Olsson Laine",
					"url": "https://www.youtube.com/@jeppzonegaming",
					"publisher": {
						"@type": "Organization",
						"name": "Jeppzone Studios",
						"url": "https://jeppzonestudios.se"
					}
				},
				{
					"@type": "VideoObject",
					"@id": "https://www.youtube.com/@jeppzonelifestyle",
					"name": "Jeppzone Lifestyle",
					"description": "Lifestyle content and personal development by Jesper Olsson Laine",
					"url": "https://www.youtube.com/@jeppzonelifestyle",
					"publisher": {
						"@type": "Organization",
						"name": "Jeppzone Studios",
						"url": "https://jeppzonestudios.se"
					}
				}
			]
		}
	</script>
</svelte:head>

<div
	class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
>
	<!-- Animated Background Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div
			class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
		></div>
		<div
			class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
			style="animation-delay: 2s;"
		></div>
		<div
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"
			style="animation-delay: 4s;"
		></div>
	</div>

	<main class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl lg:max-w-7xl">
		<!-- Hero Section -->
		<section
			id="about"
			class="min-h-[90vh] flex flex-col justify-center items-center space-y-6 sm:space-y-8 relative px-2 sm:px-0"
			aria-labelledby="hero-title"
		>
			<div>
				<!-- Main Title with Glow Effect -->
				<div class="relative text-center mb-8 sm:mb-12">
					<div>
						<h1
							id="hero-title"
							class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
						>
							Jeppzone
						</h1>
						<h1
							class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none mt-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
						>
							Studios
						</h1>
					</div>
				</div>

				<!-- Subtitle with Typewriter Effect -->
				<div class="text-center max-w-4xl px-4 sm:px-0">
					<h2
						class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light mb-4 sm:mb-6 leading-relaxed"
					>
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold"
							>Freelance Software Developer</span
						>
						<br />
						<span class="text-gray-300">Crafting Digital Experiences in Gothenburg</span>
					</h2>

					<p
						class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
					>
						Hi! I'm <span class="text-cyan-400 font-semibold">Jesper Olsson Laine</span>. With
						<span class="text-cyan-400 font-bold text-lg sm:text-xl md:text-2xl">7+ years</span>
						of professional experience, I transform ideas into
						<span class="text-blue-400 font-semibold">scalable software solutions</span>.
					</p>
				</div>
			</div>
		</section>

		<!-- Technologies Section -->
		<section
			id="technologies"
			class="py-12 sm:py-16 lg:py-20 relative px-2 sm:px-0"
			aria-labelledby="technologies-title"
		>
			<div>
				<div class="text-center mb-12 sm:mb-16">
					<h2
						id="technologies-title"
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
					>
						Tech Stack
					</h2>
					<p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
						A little bit of everything.
					</p>
				</div>

				<div
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl lg:max-w-7xl mx-auto"
				>
					<!-- Backend Card -->
					<div
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-blue-500/25"
					>
						<div
							class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl"
						>
							💻
						</div>
						<h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Backend</h3>
						<div class="space-y-2 sm:space-y-3">
							<div
								class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-5 py-2 text-sm font-medium text-blue-300 hover:scale-105 transition-transform duration-300"
							>
								C# .NET
							</div>
							<div
								class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-5 py-2 text-sm font-medium text-blue-300 hover:scale-105 transition-transform duration-300"
							>
								Node.js
							</div>
							<div
								class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-5 py-2 text-sm font-medium text-blue-300 hover:scale-105 transition-transform duration-300"
							>
								Python
							</div>
						</div>
					</div>

					<!-- Frontend Card -->
					<div
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-pink-500/25"
					>
						<div
							class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl"
						>
							🎨
						</div>
						<h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Frontend</h3>
						<div class="space-y-2 sm:space-y-3">
							<div
								class="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-full px-5 py-2 text-sm font-medium text-pink-300 hover:scale-105 transition-transform duration-300"
							>
								Svelte
							</div>
							<div
								class="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-full px-5 py-2 text-sm font-medium text-pink-300 hover:scale-105 transition-transform duration-300"
							>
								React
							</div>
							<div
								class="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-full px-5 py-2 text-sm font-medium text-pink-300 hover:scale-105 transition-transform duration-300"
							>
								Tailwind CSS
							</div>
						</div>
					</div>

					<!-- DevOps Card -->
					<div
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-green-500/25"
					>
						<div
							class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl"
						>
							⚙️
						</div>
						<h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">DevOps</h3>
						<div class="space-y-2 sm:space-y-3">
							<div
								class="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full px-5 py-2 text-sm font-medium text-green-300 hover:scale-105 transition-transform duration-300"
							>
								Docker
							</div>
							<div
								class="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full px-5 py-2 text-sm font-medium text-green-300 hover:scale-105 transition-transform duration-300"
							>
								Kubernetes
							</div>
							<div
								class="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full px-5 py-2 text-sm font-medium text-green-300 hover:scale-105 transition-transform duration-300"
							>
								Azure
							</div>
						</div>
					</div>

					<!-- Data Card -->
					<div
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-yellow-500/25"
					>
						<div
							class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl"
						>
							🛢️
						</div>
						<h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Data</h3>
						<div class="space-y-2 sm:space-y-3">
							<div
								class="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-5 py-2 text-sm font-medium text-yellow-300 hover:scale-105 transition-transform duration-300"
							>
								SQL Server
							</div>
							<div
								class="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-5 py-2 text-sm font-medium text-yellow-300 hover:scale-105 transition-transform duration-300"
							>
								Elasticsearch
							</div>
							<div
								class="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-5 py-2 text-sm font-medium text-yellow-300 hover:scale-105 transition-transform duration-300"
							>
								Redis
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Work Experience Section -->
		<section
			id="experience"
			class="py-12 sm:py-16 lg:py-20 relative px-2 sm:px-0"
			aria-labelledby="experience-title"
		>
			<div>
				<div class="text-center mb-12 sm:mb-16">
					<h2
						id="experience-title"
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
					>
						Work experience
					</h2>
					<p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
						Consulting, building and maintaining software solutions.
					</p>
				</div>

				<div class="max-w-5xl lg:max-w-6xl mx-auto space-y-8 sm:space-y-12">
					<!-- Current Role -->
					<div
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-cyan-500/25"
					>
						<div class="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6">
							<div class="flex-shrink-0">
								<div
									class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
								>
									🚀
								</div>
							</div>
							<div class="flex-1">
								<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
									<h3 class="text-2xl sm:text-3xl font-bold text-white">
										Freelance Software Developer
									</h3>
									<span
										class="bg-gradient-to-r from-green-400 to-blue-500 text-black px-3 py-1 rounded-full text-sm font-bold w-fit"
									>
										Current
									</span>
								</div>
								<h4 class="text-lg sm:text-xl text-cyan-400 mb-3 sm:mb-4 font-semibold">
									Jeppzone Studios (2023-Present)
								</h4>
								<p class="text-gray-300 text-base sm:text-lg leading-relaxed">
									Developing and maintaining modern software solutions as a freelance developer.
								</p>
							</div>
						</div>
					</div>

					<!-- Cygni Experience -->
					<div
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-purple-500/25"
					>
						<div class="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6">
							<div class="flex-shrink-0">
								<div
									class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
								>
									🏢
								</div>
							</div>
							<div class="flex-1">
								<h3 class="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
									Fullstack Software Developer Consultant
								</h3>
								<h4 class="text-lg sm:text-xl text-cyan-400 mb-4 sm:mb-6 font-semibold">
									Cygni (2018-2023)
								</h4>

								<div class="space-y-6 sm:space-y-8">
									<!-- Stena Line -->
									<div class="relative pl-8">
										<div
											class="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
										></div>
										<div
											class="absolute -left-1 top-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50"
										></div>
										<div
											class="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4 sm:p-6 border border-blue-500/20"
										>
											<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
												<span class="text-xl sm:text-2xl">🚢</span>
												<span class="text-lg sm:text-xl font-bold text-blue-400">Stena Line</span>
												<span class="text-gray-400 text-sm sm:text-base">(2021-2023)</span>
											</div>
											<p class="text-gray-300 text-base sm:text-lg leading-relaxed">
												Architected and developed a modern payment platform using .NET, SQL Server
												and React, deployed on OpenShift with a microservices architecture.
											</p>
										</div>
									</div>

									<!-- Volvo Cars -->
									<div class="relative pl-8">
										<div
											class="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
										></div>
										<div
											class="absolute -left-1 top-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50"
										></div>
										<div
											class="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4 sm:p-6 border border-blue-500/20"
										>
											<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
												<span class="text-xl sm:text-2xl">🚗</span>
												<span class="text-lg sm:text-xl font-bold text-blue-400">Volvo Cars</span>
												<span class="text-gray-400 text-sm sm:text-base">(2018-2021)</span>
											</div>
											<p class="text-gray-300 text-base sm:text-lg leading-relaxed">
												Built a high-performance search engine using .NET and Elasticsearch, hosted
												on AWS EKS.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Education Section -->
		<section
			class="py-12 sm:py-16 lg:py-20 relative px-2 sm:px-0"
			aria-labelledby="education-title"
		>
			<div>
				<div class="text-center mb-12 sm:mb-16">
					<h2
						id="education-title"
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
					>
						Education
					</h2>
					<p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
						A strong academic foundation.
					</p>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl lg:max-w-6xl mx-auto">
					<div
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-green-500/25"
					>
						<div
							class="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl"
						>
							🎓
						</div>
						<h3 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
							MSc. Interaction Design
						</h3>
						<h4 class="text-lg sm:text-xl text-cyan-400 font-semibold mb-3 sm:mb-4">
							Chalmers University of Technology
						</h4>
						<p class="text-gray-300 text-base sm:text-lg">2016-2018</p>
					</div>

					<div
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-blue-500/25"
					>
						<div
							class="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl"
						>
							⚡
						</div>
						<h3 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
							BSc. Software Engineering
						</h3>
						<h4 class="text-lg sm:text-xl text-cyan-400 font-semibold mb-3 sm:mb-4">
							Chalmers University of Technology
						</h4>
						<p class="text-gray-300 text-base sm:text-lg">2013-2016</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Side Projects Section -->
		<section class="py-12 sm:py-16 lg:py-20 relative px-2 sm:px-0" aria-labelledby="projects-title">
			<div>
				<div class="text-center mb-12 sm:mb-16">
					<h2
						id="projects-title"
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
					>
						Side Projects
					</h2>
					<p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
						Personal projects and experiments.
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl lg:max-w-6xl mx-auto">
					<a
						href="https://pickemszn.com"
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-orange-500/25 group"
						aria-label="Visit Pickemszn - Sports Pick'em Platform"
						rel="noopener noreferrer"
					>
						<div
							class="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300"
						>
							🏈
						</div>
						<h3 class="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Pickemszn</h3>
						<p class="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4">NFL Pick'em Platform</p>
						<p class="text-gray-400 text-sm sm:text-base">
							A platform for sports enthusiasts to compete in pick'em contests
						</p>
					</a>

					<a
						href="https://quizter.jeppzonestudios.se"
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-purple-500/25 group"
						aria-label="Visit Quizter - Quiz Application"
						rel="noopener noreferrer"
					>
						<div
							class="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300"
						>
							🧠
						</div>
						<h3 class="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Quizter</h3>
						<p class="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4">Quiz Application</p>
						<p class="text-gray-400 text-sm sm:text-base">
							An interactive quiz platform for learning and entertainment
						</p>
					</a>
				</div>
			</div>
		</section>

		<!-- Socials Section -->
		<section
			id="contact"
			class="py-12 sm:py-16 lg:py-20 relative px-2 sm:px-0"
			aria-labelledby="connect-title"
		>
			<div>
				<div class="text-center mb-12 sm:mb-16">
					<h2
						id="connect-title"
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
					>
						Let's Connect
					</h2>
					<p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
						Ready to start a conversation? Let's build something amazing together.
					</p>
				</div>

				<div class="flex justify-center gap-6 sm:gap-8 max-w-4xl mx-auto">
					<a
						href="https://github.com/jeppzone"
						class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:-translate-y-2 hover:scale-110 hover:bg-blue-500/30 transition-all duration-300 ease-out shadow-lg hover:shadow-blue-500/50 group"
						aria-label="Visit my GitHub profile"
						rel="noopener noreferrer"
					>
						<svg
							class="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/>
						</svg>
					</a>

					<a
						href="https://www.linkedin.com/in/jesper-olsson-laine-86076a97/"
						class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:-translate-y-2 hover:scale-110 hover:bg-blue-500/30 transition-all duration-300 ease-out shadow-lg hover:shadow-blue-500/50 group"
						aria-label="Connect with me on LinkedIn"
						rel="noopener noreferrer"
					>
						<svg
							class="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>

		<!-- Content Section -->
		<section class="py-12 sm:py-16 lg:py-20 relative px-2 sm:px-0" aria-labelledby="content-title">
			<div>
				<div class="text-center mb-12 sm:mb-16">
					<h2
						id="content-title"
						class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
					>
						Content Creation
					</h2>
					<p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
						Sharing knowledge and experiences across multiple platforms
					</p>
				</div>

				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl lg:max-w-6xl mx-auto"
				>
					<a
						href="https://www.youtube.com/@jeppzonegaming"
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-red-500/25 group"
						aria-label="Visit my Gaming YouTube Channel"
						rel="noopener noreferrer"
					>
						<div
							class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300"
						>
							<svg
								class="w-10 h-10 sm:w-12 sm:h-12 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
								/>
							</svg>
						</div>
						<h3 class="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Gaming Channel</h3>
						<p class="text-gray-300 text-sm sm:text-base">
							Playing difficult games and beating impossible bosses
						</p>
					</a>

					<a
						href="https://www.youtube.com/@jeppzonelifestyle"
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-green-500/25 group"
						aria-label="Visit my Lifestyle YouTube Channel"
						rel="noopener noreferrer"
					>
						<div
							class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300"
						>
							<svg
								class="w-10 h-10 sm:w-12 sm:h-12 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
								/>
							</svg>
						</div>
						<h3 class="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Lifestyle Channel</h3>
						<p class="text-gray-300 text-sm sm:text-base">
							Talking about health in general through my own experiences
						</p>
					</a>

					<a
						href="https://www.jeppzonelifestyle.com"
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-blue-500/25 group"
						aria-label="Visit my Lifestyle Blog"
						rel="noopener noreferrer"
					>
						<div
							class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300"
						>
							<svg
								class="w-10 h-10 sm:w-12 sm:h-12 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
								/>
							</svg>
						</div>
						<h3 class="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Lifestyle Blog</h3>
						<p class="text-gray-300 text-sm sm:text-base">
							Writing about my own experiences and thoughts about health in general. Useful tools &
							calculators for daily life.
						</p>
					</a>

					<a
						href="https://open.spotify.com/show/5iiHXMOXwuy58vApu7RZh5"
						class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-green-500/25 group"
						aria-label="Listen to Första och Tio - NFL Podcast"
						rel="noopener noreferrer"
					>
						<div
							class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300"
						>
							<svg
								class="w-10 h-10 sm:w-12 sm:h-12 text-white"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"
								/>
							</svg>
						</div>
						<h3 class="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">NFL Podcast</h3>
						<p class="text-gray-300 text-sm sm:text-base">
							Första och Tio - A podcast about the NFL in Swedish
						</p>
					</a>
				</div>
			</div>
		</section>

		<!-- Contact CTA Section -->
		<section class="py-12 sm:py-16 lg:py-20 relative px-2 sm:px-0">
			<div>
				<div
					class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 ease-out shadow-2xl hover:shadow-pink-500/25"
				>
					<h2
						class="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
					>
						Ready to Build Something Amazing?
					</h2>
					<p class="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
						Let's discuss your project and turn your vision into reality. I'm here to help you
						create something extraordinary.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="mailto:jesper@jeppzonestudios.se"
							class="bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-block text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 ease-out"
						>
							💬 Let's Talk
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	:global(body) {
		color: white;
	}
</style>
