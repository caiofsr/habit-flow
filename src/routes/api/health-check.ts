import { createServerFileRoute } from '@tanstack/react-start/server';

export const ServerRoute = createServerFileRoute('/api/health-check').methods({
	GET: async () => {
		console.log('health checked');
		return new Response(JSON.stringify({ status: 'ok' }), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	},
});
