import {log} from './debug';
import {createCanvas, getMountNode, mount} from './dom';
import ObjectManager from './objectManager';

export interface ISceneParams {
	id: string,
	fullScreen?: boolean
}

export default class Scene extends ObjectManager {
	private domElem?: HTMLCanvasElement;
	private context?: CanvasRenderingContext2D;
	private mountNode?: HTMLElement;

	constructor(params: ISceneParams) {
		super(params);

		this.domElem = createCanvas(params.id);
		this.context = this.domElem.getContext('2d');

		this.mount();
		log('init', this);
	}

	public render(): void {
		super.render(this.context);

		log(`render Scene#${this.params.id}`);
	}

	private mount(): void {
		this.mountNode = getMountNode();

		if (!this.mountNode) {
			throw Error('Mount node not found');
		}

		mount(this.domElem, this.mountNode);
	}
}
