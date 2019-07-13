import { GameObject } from "../../GameEngine/Core/GameObject";
import { Component } from "../../GameEngine/Components/Component";
import { RectangleCollider } from "../../GameEngine/Components/RectangleCollider";
import { ComputerMotor } from "../Components/ComputerMotor";
import { RectangleRenderer } from "../../GameEngine/Components/RectangleRenderer";

export class Computer extends GameObject {

    public constructor(id: string) {
        super(id, 688, 175, 10, 50);

        let computerComponents: Component[] = [];
        
        computerComponents.push(new RectangleCollider(this));
        computerComponents.push(new ComputerMotor(this));
        computerComponents.push(new RectangleRenderer(this, "white"));

        this.setComponents(computerComponents);
    }
}