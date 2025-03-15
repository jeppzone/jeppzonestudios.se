<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let mounted = false;
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

<div class="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950 to-gray-950">
	<main class="container mx-auto px-4 py-4 sm:py-8 max-w-7xl" role="main">
		<!-- Hero Section -->
		{#if mounted}
			<section
				class="min-h-[90vh] flex flex-col justify-center items-center space-y-4 sm:space-y-6"
				in:fade={{ duration: 1000 }}
				aria-labelledby="hero-title"
			>
				<div class="relative">
					<h1
						id="hero-title"
						class="text-4xl sm:text-6xl md:text-8xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block tracking-tight"
					>
						Jeppzone Studios
					</h1>
					<div
						class="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 -z-10"
						aria-hidden="true"
					></div>
				</div>

				<h2
					class="text-xl sm:text-2xl md:text-3xl text-center text-gray-200 max-w-4xl font-medium tracking-tight px-2"
					in:fly={{ y: 20, duration: 1000, delay: 300 }}
				>
					Freelance software developer and content creator based in Gothenburg.
				</h2>

				<p
					class="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl text-center leading-relaxed mt-4 sm:mt-6 tracking-normal px-2"
					in:fly={{ y: 20, duration: 1000, delay: 600 }}
				>
					Hi! I'm Jesper Olsson Laine. I have <span
						class="text-xl sm:text-2xl font-bold text-blue-400">6</span
					>
					years of professional experience working with
					<span class="text-xl sm:text-2xl font-bold text-blue-400">software development</span>. I
					work with the entire software stack, everything from frontend development to hosting in
					the cloud. When I'm not programming, I love to create
					<span class="text-xl sm:text-2xl font-bold text-blue-400">video content</span> on topics that
					interest me.
				</p>
			</section>

			<!-- Technologies Section -->
			<section
				class="py-12 sm:py-20"
				in:fly={{ y: 20, duration: 1000, delay: 900 }}
				aria-labelledby="technologies-title"
			>
				<h2
					id="technologies-title"
					class="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block px-4 py-2 tracking-tight"
				>
					Technologies
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto px-2">
					<article
						class="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
					>
						<h3 class="text-2xl font-bold mb-4 tracking-tight">💻 Backend</h3>
						<p class="text-gray-300 text-lg leading-relaxed">C# .NET, NodeJS</p>
					</article>
					<article
						class="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
					>
						<h3 class="text-2xl font-bold mb-4 tracking-tight">🎨 Frontend</h3>
						<p class="text-gray-300 text-lg leading-relaxed">Svelte, React, Tailwind</p>
					</article>
					<article
						class="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
					>
						<h3 class="text-2xl font-bold mb-4 tracking-tight">⚙️ DevOps</h3>
						<p class="text-gray-300 text-lg leading-relaxed">
							Docker, Kubernetes, Azure, Azure Devops, Git
						</p>
					</article>
					<article
						class="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
					>
						<h3 class="text-2xl font-bold mb-4 tracking-tight">🛢️ Data</h3>
						<p class="text-gray-300 text-lg leading-relaxed">SQL Server, Elasticsearch, Redis</p>
					</article>
				</div>
			</section>

			<!-- Work Experience Section -->
			<section class="py-12 sm:py-20" aria-labelledby="experience-title">
				<h2
					id="experience-title"
					class="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block tracking-tight"
				>
					Work Experience
				</h2>
				<div class="space-y-4 sm:space-y-8 max-w-5xl mx-auto px-2">
					<article
						class="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300"
					>
						<h3 class="text-3xl font-bold mb-3 tracking-tight">Freelance software developer</h3>
						<h4 class="text-xl text-blue-400 mb-4 font-medium">Jeppzone Studios (2023-)</h4>
						<p class="text-gray-300 text-lg leading-relaxed">
							As a freelance software developer, I continue to work on the Stena Line project
							mentioned below.
						</p>
					</article>

					<article
						class="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300"
					>
						<h3 class="text-3xl font-bold mb-3 tracking-tight">
							Fullstack software developer consultant
						</h3>
						<h4 class="text-xl text-blue-400 mb-4 font-medium">Cygni (2018-2023)</h4>
						<p class="text-gray-300 text-lg leading-relaxed mb-6">
							At Cygni, I worked as an IT Consultant on-site for a couple of Gothenburg's largest
							companies.
						</p>
						<ul class="space-y-6" role="list">
							<li>
								<div class="flex flex-col space-y-1">
									<div class="flex items-center gap-2">
										<span class="font-bold text-blue-400 text-lg">Stena Line</span>
										<span class="text-gray-400">(2021-2023)</span>
									</div>
									<p class="text-gray-300 text-lg leading-relaxed">
										Developed a new payment platform using .NET and SQL Server, hosted on Openshift.
									</p>
								</div>
							</li>
							<li>
								<div class="flex flex-col space-y-1">
									<div class="flex items-center gap-2">
										<span class="font-bold text-blue-400 text-lg">Volvo Cars</span>
										<span class="text-gray-400">(2018-2021)</span>
									</div>
									<p class="text-gray-300 text-lg leading-relaxed">
										Built a search engine using .NET and ElasticSearch, hosted on AWS EKS.
									</p>
								</div>
							</li>
						</ul>
					</article>
				</div>
			</section>

			<!-- Education Section -->
			<section class="py-12 sm:py-20" aria-labelledby="education-title">
				<h2
					id="education-title"
					class="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block tracking-tight"
				>
					Education
				</h2>
				<div class="space-y-4 sm:space-y-8 max-w-5xl mx-auto px-2">
					<article
						class="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300"
					>
						<h3 class="text-3xl font-bold mb-3 tracking-tight">MSc. Interaction Design</h3>
						<h4 class="text-xl text-blue-400 font-medium">
							Chalmers University of Technology (2016-2018)
						</h4>
					</article>
					<article
						class="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300"
					>
						<h3 class="text-3xl font-bold mb-3 tracking-tight">BSc. Software Engineering</h3>
						<h4 class="text-xl text-blue-400 font-medium">
							Chalmers University of Technology (2013-2016)
						</h4>
					</article>
				</div>
			</section>

			<!-- Socials Section -->
			<section class="py-12 sm:py-20" aria-labelledby="connect-title">
				<h2
					id="connect-title"
					class="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block tracking-tight"
				>
					Connect With Me
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto px-2">
					<a
						href="https://github.com/jeppzone"
						class="group bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-4"
						aria-label="Visit my GitHub profile"
						rel="noopener noreferrer"
					>
						<svg
							class="w-8 h-8 text-gray-300"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
							><path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/></svg
						>
						<span class="text-xl font-semibold text-gray-300">Github</span>
					</a>
					<a
						href="https://www.linkedin.com/in/jesper-olsson-laine-86076a97/"
						class="group bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-4"
						aria-label="Connect with me on LinkedIn"
						rel="noopener noreferrer"
					>
						<svg
							class="w-8 h-8 text-gray-300"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
							><path
								d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
							/></svg
						>
						<span class="text-xl font-semibold text-gray-300">LinkedIn</span>
					</a>
				</div>
			</section>

			<!-- Content Section -->
			<section class="py-12 sm:py-20" aria-labelledby="content-title">
				<h2
					id="content-title"
					class="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block tracking-tight"
				>
					Content
				</h2>
				<div
					class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto px-2"
				>
					<a
						href="https://www.youtube.com/@jeppzonegaming"
						class="group bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
						aria-label="Visit my Gaming YouTube Channel"
						rel="noopener noreferrer"
					>
						<div class="flex items-center justify-center mb-4">
							<svg
								class="w-12 h-12 text-red-500"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
								><path
									d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
								/></svg
							>
						</div>
						<h3 class="text-xl font-bold text-center text-gray-300">Gaming Channel</h3>
					</a>
					<a
						href="https://www.youtube.com/@jeppzonelifestyle"
						class="group bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
						aria-label="Visit my Lifestyle YouTube Channel"
						rel="noopener noreferrer"
					>
						<div class="flex items-center justify-center mb-4">
							<svg
								class="w-12 h-12 text-red-500"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
								><path
									d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
								/></svg
							>
						</div>
						<h3 class="text-xl font-bold text-center text-gray-300">Lifestyle Channel</h3>
					</a>
					<a
						href="https://www.jeppzonelifestyle.com"
						class="group bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
						aria-label="Visit my Lifestyle Blog"
						rel="noopener noreferrer"
					>
						<div class="flex items-center justify-center mb-4">
							<svg
								class="w-12 h-12 text-blue-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path></svg
							>
						</div>
						<h3 class="text-xl font-bold text-center text-gray-300">Lifestyle Blog</h3>
					</a>
				</div>
			</section>
		{/if}
	</main>
</div>

<style>
	:global(body) {
		color: white;
	}
</style>
