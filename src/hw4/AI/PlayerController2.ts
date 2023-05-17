import StateMachineAI from "../../Wolfie2D/AI/StateMachineAI";
import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import OrthogonalTilemap from "../../Wolfie2D/Nodes/Tilemaps/OrthogonalTilemap";

import Fall from "./PlayerStates2/Fall";
import Idle from "./PlayerStates2/Idle";
import Jump from "./PlayerStates2/Jump";
import Run from "./PlayerStates2/Walk";

import Input from "../../Wolfie2D/Input/Input";

import { Controls } from "./Controls";
import AnimatedSprites from "./AnimatedSprites";
import MathUtils from "../../Wolfie2D/Utils/MathUtils";
import Timer from "../../Wolfie2D/Timing/Timer";
/**
 * Animation keys for the player spritesheet
 */

export const PlayerAnimations = {
    IDLE: "IDLE",
    WALK_RIGHT: "WALK_RIGHT",
    WALK_LEFT: "WALK_LEFT",
    JUMP: "JUMP",
} as const

/**
 * Keys for the states the PlayerController can be in.
 */
export const PlayerStates = {
    IDLE: "IDLE",
    RUN: "RUN",
	JUMP: "JUMP",
    FALL: "FALL"
} as const

/**
 * The controller that controls the player.
 */
export default class PlayerController2 extends StateMachineAI {
    public readonly MAX_SPEED: number = 200;
    public readonly MIN_SPEED: number = 100;

    /** The players game node */
    protected owner: AnimatedSprites;

    protected _velocity: Vec2;
	protected _speed: number;
    protected initTimer = new Timer(10);

    public get faceDir(): Vec2 { return this.owner.position.dirTo(Input.getGlobalMousePosition()); }

    public initializeAI(owner: AnimatedSprites, options: Record<string, any>){
        this.owner = owner;
        
        this.speed = 400;
        this.velocity = Vec2.ZERO;


        if(Input.isMousePressed){
            this.addState(PlayerStates.JUMP, new Jump(this, this.owner));
        }

        // Add the different states the player can be in to the PlayerController 
		this.addState(PlayerStates.IDLE, new Idle(this, this.owner));
		this.addState(PlayerStates.RUN, new Run(this, this.owner));
        this.addState(PlayerStates.JUMP, new Jump(this, this.owner));
        this.addState(PlayerStates.FALL, new Fall(this, this.owner));
        // Start the player in the Idle state
        this.initialize(PlayerStates.IDLE);
    }

    /** 
	 * Get the inputs from the keyboard, or Vec2.Zero if nothing is being pressed
	 */
    public get inputDir(): Vec2 {
        let direction = Vec2.ZERO;
		direction.x = (Input.isPressed(Controls.MOVE_LEFT) ? -1 : 0) + (Input.isPressed(Controls.MOVE_RIGHT) ? 1 : 0);
		direction.y = (Input.isJustPressed(Controls.JUMP) ? -1 : 0);
		return direction;
    }

    /** 
     * Gets the direction of the mouse from the player's position as a Vec2
     */
    

    

    public update(deltaT: number): void {
		super.update(deltaT);

	}

    public get velocity(): Vec2 { return this._velocity; }
    public set velocity(velocity: Vec2) { this._velocity = velocity; }

    public get speed(): number { return this._speed; }
    public set speed(speed: number) { this._speed = speed; }
}