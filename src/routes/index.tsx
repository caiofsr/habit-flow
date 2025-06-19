import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
			<header className="mb-10 text-center">
				<h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 mb-4 drop-shadow-lg">HabitFlow</h1>
				<p className="text-lg md:text-2xl text-gray-700 max-w-xl mx-auto">
					Track your habits, jot down notes for work, and organize your life—all in one beautiful, simple app.
				</p>
			</header>
			<div className="flex flex-col md:flex-row gap-6 mb-12">
				<div className="bg-white rounded-xl shadow-lg p-6 w-80 border border-indigo-100">
					<h2 className="text-xl font-semibold text-indigo-600 mb-2">📅 Habit Tracker</h2>
					<p className="text-gray-600 mb-4">Build routines, visualize your progress, and stay motivated with daily, weekly, or custom habits.</p>
					<Button className="w-full">Start Tracking</Button>
				</div>
				<div className="bg-white rounded-xl shadow-lg p-6 w-80 border border-indigo-100">
					<h2 className="text-xl font-semibold text-indigo-600 mb-2">📝 Notes & Jobs</h2>
					<p className="text-gray-600 mb-4">Take quick notes for your job, projects, or anything else. Keep everything organized and searchable.</p>
					<Button className="w-full">Take a Note</Button>
				</div>
			</div>
			<footer className="text-gray-400 text-sm mt-auto">
				&copy; {new Date().getFullYear()} HabitFlow. All rights reserved.
			</footer>
		</div>
	);
}
