import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    const engine = cookies.get('engine') ?? 'DUCKDUCKGO';

    return { engine };
}) satisfies PageServerLoad;