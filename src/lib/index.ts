// place files you want to import through the `$lib` alias in this folder.
export function extractDomain(link: string): string {
	const url = new URL(link);

	return url.hostname;
}