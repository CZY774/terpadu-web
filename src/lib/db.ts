import { v4 as uuidv4 } from 'uuid';

export interface Category {
	id: string;
	name: string;
	icon: string;
}

export interface Schedule {
	id: string;
	title: string;
	date: string;
	time: string;
	category: string;
	completed: boolean;
}

export interface Task {
	id: string;
	title: string;
	dueDate: string;
	category: string;
	completed: boolean;
}

const STORAGE_KEYS = {
	CATEGORIES: 'terpadu_categories',
	SCHEDULES: 'terpadu_schedules',
	TASKS: 'terpadu_tasks',
	STREAK: 'terpadu_streak'
};

export function getCategories(): Category[] {
	if (typeof window === 'undefined') return [];
	const categories = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
	return categories ? JSON.parse(categories) : [];
}

export function getSchedules(): Schedule[] {
	if (typeof window === 'undefined') return [];
	const schedules = localStorage.getItem(STORAGE_KEYS.SCHEDULES);
	return schedules ? JSON.parse(schedules) : [];
}

export function saveSchedules(schedules: Schedule[]): void {
	if (typeof window === 'undefined') return;
	localStorage.setItem(STORAGE_KEYS.SCHEDULES, JSON.stringify(schedules));
}

export function addSchedule(title: string, description: string, date: string, time: string, category: string): Schedule {
	const schedules = getSchedules();
	const newSchedule: Schedule = { id: uuidv4(), title, date, time, category, completed: false };
	schedules.push(newSchedule);
	saveSchedules(schedules);
	return newSchedule;
}

export function getTasks(): Task[] {
	if (typeof window === 'undefined') return [];
	const tasks = localStorage.getItem(STORAGE_KEYS.TASKS);
	return tasks ? JSON.parse(tasks) : [];
}

export function saveTasks(tasks: Task[]): void {
	if (typeof window === 'undefined') return;
	localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

export function addTask(title: string, description: string, dueDate: string, category: string): Task {
	const tasks = getTasks();
	const newTask: Task = { id: uuidv4(), title, dueDate, category, completed: false };
	tasks.push(newTask);
	saveTasks(tasks);
	return newTask;
}

export function updateTask(id: string, updatedFields: Partial<Omit<Task, 'id'>>): Task | undefined {
	const tasks = getTasks();
	const index = tasks.findIndex((t) => t.id === id);
	if (index > -1) {
		tasks[index] = { ...tasks[index], ...updatedFields };
		saveTasks(tasks);
		return tasks[index];
	}
	return undefined;
}

export function getStreak(): number {
	if (typeof window === 'undefined') return 0;
	return parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '1');
}

export function updateStreak(): void {
	if (typeof window === 'undefined') return;
	const current = getStreak();
	localStorage.setItem(STORAGE_KEYS.STREAK, (current + 1).toString());
}
