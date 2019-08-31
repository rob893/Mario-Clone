import { Component } from '../../GameEngine/Components/Component';
import { GameObject } from '../../GameEngine/Core/GameObject';
import { NavAgent } from '../../GameEngine/Components/NavAgent';
import { KeyCode } from '../../GameEngine/Core/Enums/KeyCode';
import { Vector2 } from '../../GameEngine/Core/Helpers/Vector2';
import { Input } from '../../GameEngine/Core/Helpers/Input';
import { CanvasMouseEvent } from '.../../GameEngine/Core/Interfaces/CanvasMouseEvent';
import { EventType } from '../../GameEngine/Core/Enums/EventType';
import { Animation } from '../../GameEngine/Core/Helpers/Animation';
import { Animator } from '../../GameEngine/Components/Animator';
import { SpriteSheet } from '../../GameEngine/Core/Helpers/SpriteSheet';
import { AssetPool } from '../../GameEngine/Core/Helpers/AssetPool';

export class NavTester extends Component {

    private readonly navAgent: NavAgent;
    private readonly animator: Animator;
    private readonly runRightAnimation: Animation;
    private readonly runLeftAnimation: Animation;
    private readonly runUpAnimation: Animation;
    private readonly runDownAnimation: Animation;
    private readonly idleAnimation: Animation;


    public constructor(gameObject: GameObject, navAgent: NavAgent, animator: Animator, input: Input, assetPool: AssetPool) {
        super(gameObject);

        this.navAgent = navAgent;
        this.animator = animator;

        this.navAgent.onDirectionChanged.add((newDirection) => this.changeAnimation(newDirection));
        this.navAgent.onPathCompleted.add(() => this.animator.setAnimation(this.idleAnimation));

        input.addMouseListener(EventType.Click, 0, (event) => this.onClick(event));
        input.addKeyListener(EventType.KeyDown, KeyCode.Backspace, (event) => this.onKeyDown(event));

        const trumpRunSpriteSheet = assetPool.getAsset<SpriteSheet>('trumpRunSpriteSheet');
        const trumpIdleSpriteSheet = assetPool.getAsset<SpriteSheet>('trumpIdleSpriteSheet');

        this.runRightAnimation = new Animation(trumpRunSpriteSheet.getFrames(2), 0.075);
        this.runLeftAnimation = new Animation(trumpRunSpriteSheet.getFrames(4), 0.075);
        this.runUpAnimation = new Animation(trumpRunSpriteSheet.getFrames(3), 0.075);
        this.runDownAnimation = new Animation(trumpRunSpriteSheet.getFrames(1), 0.075);
        this.idleAnimation = new Animation(trumpIdleSpriteSheet.getFrames(1), 0.1);
    }

    private onKeyDown(event: KeyboardEvent): void {
        if (event.keyCode === KeyCode.Space) {
            this.navAgent.setDestination(new Vector2(400, 300));
        }
        else if (event.keyCode === KeyCode.Backspace) {
            this.navAgent.resetPath();
            this.transform.setPosition(200, 300);
        }
    }

    private onClick(event: CanvasMouseEvent): void {
        this.navAgent.setDestination(event.cursorPositionOnCanvas);
    }

    private changeAnimation(newDirection: Vector2): void {
        if (Math.abs(newDirection.x) > Math.abs(newDirection.y)) {
            if (newDirection.x > 0.5) {
                this.animator.setAnimation(this.runRightAnimation);
            }
            else {
                this.animator.setAnimation(this.runLeftAnimation);
            }
        }
        else {
            if (newDirection.y > 0.5) {
                this.animator.setAnimation(this.runUpAnimation);
            }
            else {
                this.animator.setAnimation(this.runDownAnimation);
            }
        }
    }
}