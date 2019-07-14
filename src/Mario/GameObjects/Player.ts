import { GameObject } from "../../GameEngine/Core/GameObject";
import { Component } from "../../GameEngine/Components/Component";
import { RectangleCollider } from "../../GameEngine/Components/RectangleCollider";
import { PlayerMotor } from "../Components/PlayerMotor";
import { Rigidbody } from "../../GameEngine/Components/Rigidbody";
import { Animator } from "../../GameEngine/Components/Animator";
import MarioSprite from "../../assets/mario.png";

export class Player extends GameObject {

    public constructor(id: string) {
        super(id, 2, 175, 10, 50);

        let playerComponents: Component[] = [];
        
        playerComponents.push(new RectangleCollider(this));
        playerComponents.push(new PlayerMotor(this));
        playerComponents.push(new Rigidbody(this));
        playerComponents.push(new Animator(this, MarioSprite, 4, 1));

        this.setComponents(playerComponents);
    }
}