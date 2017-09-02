export function log(...messages: any[]): void {
	if (process.env.DEBUG) {
		console.debug(...messages);
	}
}
