import { Animation } from '@rherber/typescript-game-engine';

export interface CharacterAnimations {
    rightAttackAnimations: Animation[];
    leftAttackAnimations: Animation[];
    runRightAnimation: Animation;
    runLeftAnimation: Animation;
    idleRightAnimation: Animation;
    idleLeftAnimation: Animation;
    jumpRightAnimation: Animation;
    jumpLeftAnimation: Animation;
    dieRightAnimation: Animation;
    dieLeftAnimation: Animation;
}
