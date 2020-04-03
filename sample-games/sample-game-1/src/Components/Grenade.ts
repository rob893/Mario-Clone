import { Component } from '@rherber/entropy-game-engine';
import { Explosion } from '../GameObjects/Explosion';

export class Grenade extends Component {
    public start(): void {
        this.destroy(this.gameObject, 5);
    }

    public onDestroy(): void {
        this.instantiate(Explosion, this.transform.position);
    }
}
