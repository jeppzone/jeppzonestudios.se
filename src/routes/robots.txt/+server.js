/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://jeppzonestudios.se/sitemap.xml
`.trim();

	const response = new Response(robotsTxt);
	response.headers.set('Content-Type', 'text/plain');
	return response;
}
