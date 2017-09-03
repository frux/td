import ObjectManager from './objectManager';
import Scene from './scene';
import SceneObject from './sceneObject';

export default class Game {
	private state: 'running' | 'stopped';
	private scenes: Set<Scene>;

	constructor() {
		this.state = 'stopped';

		this.scenes = new Set();
	}

	public start(): void {
		this.state = 'running';
		this.render();
	}

	public stop(): void {
		this.state = 'stopped';
	}

	public addScene(scene: Scene): void {
		this.scenes.add(scene);
	}

	public removeScene(scene: Scene): void {
		this.scenes.delete(scene);
	}

	public render(): void {
		this.scenes.forEach(scene => {
			scene.render();
		});
	}
}
