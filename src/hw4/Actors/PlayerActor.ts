import Spritesheet from "../../Wolfie2D/DataTypes/Spritesheet";
import AnimatedSprite from "../../Wolfie2D/Nodes/Sprites/AnimatedSprite";
import MainScene from "../Scenes/MainScene";


export default class PlayerActor extends AnimatedSprite {

    /** Override the type of the scene to be the HW3 scene */
    protected scene: MainScene
    /** Give the player a battler compoonent */

    constructor(sheet: Spritesheet) {
        super(sheet);
    }

    public override setScene(scene: MainScene): void { this.scene = scene; }
    public override getScene(): MainScene { return this.scene; }

    get speed(): number {
        return this.speed * 10;
    }
    set speed(value: number) {
        this.speed = value;
    }
}