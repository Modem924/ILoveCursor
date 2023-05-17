import Spritesheet from "../../Wolfie2D/DataTypes/Spritesheet";
import AnimatedSprite from "../../Wolfie2D/Nodes/Sprites/AnimatedSprite";
import Scene1 from "../Scenes/Level";


export default class PlayerActor extends AnimatedSprite {

    /** Override the type of the scene to be the HW3 scene */
    protected scene: Scene1
    constructor(sheet: Spritesheet) {
        super(sheet);
    }
    public override setScene(scene: Scene1): void { this.scene = scene; }
    public override getScene(): Scene1 { return this.scene; }

}