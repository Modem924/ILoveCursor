import Vec2 from "../../../../Wolfie2D/DataTypes/Vec2";
import Sprite from "../../../../Wolfie2D/Nodes/Sprites/Sprite";
import HW4Scene from "../../../Scenes/Scene2";
import Item from "../Item";

export default class Pumpkin extends Item {
    
    protected grav: number;

    public constructor(sprite: Sprite) {
        super(sprite);
        this.grav = -400;
    }

    public get gravity(): number { return this.grav; }
    public set gravity(grav: number) { this.grav = grav;  }


}