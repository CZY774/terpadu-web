import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';

export const load: LayoutLoad = async ({ url }) => {
	if (browser) {
		const isAuthenticated = localStorage.getItem('isAuthenticated');
		const publicRoutes = ['/', '/login'];

		if (!isAuthenticated && !publicRoutes.includes(url.pathname)) {
			throw redirect(302, '/login');
		}

		if (isAuthenticated && url.pathname === '/login') {
			throw redirect(302, '/home');
		}
	}

	return {};
};
