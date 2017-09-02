export interface ISceneObjectParams {
	id: string
}

export default abstract class SceneObject {
	public id: string;
	protected params: ISceneObjectParams;

	constructor(params: ISceneObjectParams) {
		this.id = params.id;
		this.params = params;
	}

	public abstract render(context: CanvasRenderingContext2D): void;
}
