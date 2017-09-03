import {log} from './libs/debug';
import Scene from './libs/scene';
import SceneObject from './libs/sceneObject';

const mainScene = new Scene({
	id: 'main',
	fullSize: true
});

class FooBar extends SceneObject {
	public render(context: CanvasRenderingContext2D): void {
		context.fillRect(0, 0, 100, 100);
		log(`render FooBar`);
	}
}

const someObject = new FooBar({id: 'foo-bar'});

mainScene.addObject(someObject);

mainScene.render();
