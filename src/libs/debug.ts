const timeLoggers: Map<string, number> = new Map();

export function log(...messages: any[]): void {
	if (process.env.NODE_ENV) {
		console.debug(...messages);
	}
}

export function logTimeStart(id: string): void {
	if (process.env.NODE_ENV) {
		timeLoggers.set(id, Date.now());
	}
}

export function logTimeEnd(id: string): void {
	if (process.env.NODE_ENV) {
		const startTime = timeLoggers.get(id);
		const delta = Date.now() - startTime;
		console.debug(`${id} took ${delta}ms`);
	}
}
