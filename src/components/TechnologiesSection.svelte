<section
	id="technologies"
	class="py-16 sm:py-20 border-t border-white/10 px-2 sm:px-0"
	aria-labelledby="technologies-title"
>
	<div class="max-w-3xl">
		<p id="technologies-title" class="section-label">Stack</p>

		<div class="space-y-4">
			<div class="stack-row">
				<span class="stack-category">Backend</span>
				<span class="stack-items">C# .NET, Node.js, Python</span>
			</div>
			<div class="stack-row">
				<span class="stack-category">Frontend</span>
				<span class="stack-items">Svelte, React, Tailwind CSS</span>
			</div>
			<div class="stack-row">
				<span class="stack-category">DevOps</span>
				<span class="stack-items">Docker, Kubernetes, Azure</span>
			</div>
			<div class="stack-row">
				<span class="stack-category">Data</span>
				<span class="stack-items">SQL Server, Elasticsearch, Redis</span>
			</div>
		</div>
	</div>
</section>

<style>
	.stack-row {
		@apply flex flex-col sm:flex-row gap-1 sm:gap-0;
	}

	.stack-category {
		@apply text-gray-300 text-sm sm:w-28 shrink-0;
	}

	.stack-items {
		@apply text-white text-sm;
	}
</style>
