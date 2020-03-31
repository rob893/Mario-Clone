import { CustomLiteEvent } from './CustomLiteEvent';
import { RectangleCollider } from '../../Components/RectangleCollider';
import { CollisionManifold } from '../Helpers/CollisionManifold';

export interface CollisionDetector {
    readonly onCollisionDetected: CustomLiteEvent<CollisionManifold>;
    readonly colliders: RectangleCollider[];
    detectCollisions(): void;
    addCollider(collider: RectangleCollider): void;
    removeCollider(collider: RectangleCollider): void;
    addColliders(colliders: RectangleCollider[]): void;
}
