import Spritesheet from "../../Wolfie2D/DataTypes/Spritesheet";
import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import AnimatedSprite from "../../Wolfie2D/Nodes/Sprites/AnimatedSprite"
import NavigationPath from "../../Wolfie2D/Pathfinding/NavigationPath";
import MainScene from "../Scenes/MainScene";
import BasicTargetable from "../GameSystems/Targeting/BasicTargetable";
import BasicTargeting from "../GameSystems/Targeting/BasicTargeting";

import { TargetableEntity } from "../GameSystems/Targeting/TargetableEntity";
import { TargetingEntity } from "../GameSystems/Targeting/TargetingEntity";

export default class NPCActor extends AnimatedSprite implements TargetingEntity {

    /** Override the type of the scene to be the HW3 scene */
    protected scene: MainScene

    // The key of the Navmesh to use to build paths for this NPCActor
    protected _navkey: string;

    protected _targeting: TargetingEntity

    public constructor(sheet: Spritesheet) {
        super(sheet);
        this._navkey = "navkey";
        this._targeting = new BasicTargeting(this);
    }

    /** The TargetingEntity interface */

    public clearTarget(): void { this._targeting.clearTarget(); }
    public setTarget(targetable: TargetableEntity): void { this._targeting.setTarget(targetable); }
    public hasTarget(): boolean { return this._targeting.hasTarget(); }
    public getTarget(): TargetableEntity { return this._targeting.getTarget(); }
    
    atTarget(): boolean {
        return this._targeting.getTarget().position.distanceSqTo(this.position) < 625;
    }

    public get speed(): number { return this.speed; }
    public set speed(speed: number) { this.speed = speed; }

    public override setScene(scene: MainScene): void { this.scene = scene; }
    public override getScene(): MainScene { return this.scene; }

    public get navkey(): string { return this._navkey; }
    public set navkey(navkey: string) { this._navkey = navkey; }

    getPath(to: Vec2, from: Vec2): NavigationPath { 
        return this.scene.getNavigationManager().getPath(this.navkey, to, from);
    }

    /** Protected getters for the different components */

    protected get targeting(): TargetingEntity { return this._targeting; }
}