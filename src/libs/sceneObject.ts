export interface ISceneObjectParams {
	id: string
}

export default abstract class SceneObject {
	protected params: ISceneObjectParams;

	constructor(params: ISceneObjectParams) {
		this.params = params;
	}

	public abstract render(context: CanvasRenderingContext2D): void;
}
