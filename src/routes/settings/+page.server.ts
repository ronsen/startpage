import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    const engine = cookies.get('engine') ?? 'DUCKDUCKGO';
    
    return { engine };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request, cookies }) => {
        const { engine } = Object.fromEntries(await request.formData()) as Record<string, string>;

        cookies.set('engine', String(engine), {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 30
		});

        redirect(302, '/');
    }
} satisfies Actions;