import {log} from './debug';
import SceneObject, {ISceneObjectParams} from './sceneObject';

export default class ObjectManager extends SceneObject {
	protected objects: Set<SceneObject>;

	constructor(params: ISceneObjectParams) {
		super(params);

		this.objects = new Set();
	}

	public render(context: CanvasRenderingContext2D): void {
		this.objects.forEach((obj) => {
			obj.render(context);
		});

		log(`render ObjectManager#${this.params.id}`);
	}

	public addObject(obj: SceneObject): void {
		this.objects.add(obj);
	}

	public removeObject(obj: SceneObject): boolean {
		return this.objects.delete(obj);
	}
}
