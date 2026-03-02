<section
	id="experience"
	class="py-16 sm:py-20 border-t border-white/10 px-2 sm:px-0"
	aria-labelledby="experience-title"
>
	<div class="max-w-3xl">
		<p id="experience-title" class="section-label">Experience</p>

		<div class="space-y-10">
			<div class="experience-row">
				<span class="experience-date">2023–Present</span>
				<div>
					<h3 class="text-white font-medium">Jeppzone Studios</h3>
					<p class="text-gray-400 text-sm">Freelance</p>
					<p class="text-gray-300 text-sm mt-2 leading-relaxed">
						Building and maintaining software for clients across various industries.
					</p>
				</div>
			</div>

			<div class="experience-row">
				<span class="experience-date">2021–2023</span>
				<div>
					<h3 class="text-white font-medium">
						Stena Line <span class="text-gray-400 font-normal text-sm">via Cygni</span>
					</h3>
					<p class="text-gray-400 text-sm">Fullstack Developer Consultant</p>
					<p class="text-gray-300 text-sm mt-2 leading-relaxed">
						Architected and built a modern payment platform using .NET, React and SQL Server,
						deployed on OpenShift with a microservices architecture.
					</p>
				</div>
			</div>

			<div class="experience-row">
				<span class="experience-date">2018–2021</span>
				<div>
					<h3 class="text-white font-medium">
						Volvo Cars <span class="text-gray-400 font-normal text-sm">via Cygni</span>
					</h3>
					<p class="text-gray-400 text-sm">Fullstack Developer Consultant</p>
					<p class="text-gray-300 text-sm mt-2 leading-relaxed">
						Built a high-performance internal search engine using .NET and Elasticsearch,
						hosted on AWS EKS.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.experience-row {
		@apply flex flex-col sm:flex-row gap-2 sm:gap-8;
	}

	.experience-date {
		@apply text-gray-500 text-sm shrink-0 sm:w-28 pt-0.5;
	}
</style>
