import { GameObject } from '../../GameEngine/Core/GameObject';
import { Component } from '../../GameEngine/Components/Component';
import { RectangleCollider } from '../../GameEngine/Components/RectangleCollider';
import { BallMotor } from '../Components/BallMotor';
import { RectangleRenderer } from '../../GameEngine/Components/RectangleRenderer';
import { PrefabSettings } from '../../GameEngine/Core/Interfaces/PrefabSettings';
import { Layer } from '../../GameEngine/Core/Enums/Layer';
import { GameEngineAPIs } from '../../GameEngine/Core/Interfaces/GameEngineAPIs';

export class Ball extends GameObject {

    protected buildInitialComponents(gameEngineAPIs: GameEngineAPIs): Component[] {
        const ballComponents: Component[] = [];
        
        const collider =new RectangleCollider(this, null, 10, 10);
        ballComponents.push(collider);

        ballComponents.push(new BallMotor(this, gameEngineAPIs.gameCanvas, collider));
        ballComponents.push(new RectangleRenderer(this, 10, 10, 'white'));

        return ballComponents;
    }

    protected getPrefabSettings(): PrefabSettings {
        return {
            x: 345,
            y: 195,
            rotation: 0,
            id: 'ball',
            tag: 'ball',
            layer: Layer.Default
        };
    }
}