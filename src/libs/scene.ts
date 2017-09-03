import {log} from './debug';
import {createCanvas, getMountNode, getViewportSize, mount} from './dom';
import ObjectManager, {IObjectManagerParams} from './objectManager';

export interface ISceneParams extends IObjectManagerParams {
	id: string,
	fullSize?: boolean
}

export default class Scene extends ObjectManager {
	protected params: ISceneParams;
	private domElem?: HTMLCanvasElement;
	private context?: CanvasRenderingContext2D;
	private mountNode?: HTMLElement;

	constructor(params: ISceneParams) {
		super(params);

		this.domElem = createCanvas(params.id);
		this.context = this.domElem.getContext('2d');

		this.setSize();

		this.mount();
		log('init', this);
	}

	public render(): void {
		super.render(this.context);

		log(`render Scene#${this.params.id}`);
	}

	private setSize(): void {
		const {fullSize} = this.params;

		if (fullSize) {
			const {width, height} = getViewportSize();
			this.domElem.setAttribute('width', String(width));
			this.domElem.setAttribute('height', String(height));
		}
	}

	private mount(): void {
		this.mountNode = getMountNode();

		if (!this.mountNode) {
			throw Error('Mount node not found');
		}

		mount(this.domElem, this.mountNode);
	}
}
