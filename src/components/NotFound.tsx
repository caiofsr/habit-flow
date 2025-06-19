import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
			<header className="mb-10 text-center">
				<h1 className="text-6xl font-extrabold text-indigo-700 mb-4 drop-shadow-lg">
					404
				</h1>
				<p className="text-2xl text-gray-700 max-w-xl mx-auto mb-2">
					Oops! Page not found.
				</p>
				<p className="text-lg text-gray-500 max-w-xl mx-auto mb-6">
					The page you are looking for does not exist or has been moved.
				</p>
				<Button className="mt-4">
					<Link to="/">Go back to home</Link>
				</Button>
			</header>
			<footer className="text-gray-400 text-sm mt-auto">
				&copy; {new Date().getFullYear()} HabitFlow. All rights reserved.
			</footer>
		</div>
	);
}
