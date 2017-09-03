export function createCanvas(id: string): HTMLCanvasElement {
	const canvas = document.createElement('canvas');
	canvas.setAttribute('id', id);

	return canvas;
}

export function getMountNode(): HTMLElement | null {
	return document.getElementById('mount');
}

export function mount(el: HTMLElement, mountNode: HTMLElement): void {
	mountNode.appendChild(el);
}

export function getViewportSize(): {width: number, height: number} {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	};
}
