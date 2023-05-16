import Vec2 from "../../../../Wolfie2D/DataTypes/Vec2";
import Sprite from "../../../../Wolfie2D/Nodes/Sprites/Sprite";
import MainScene from "../../../Scenes/MainScene";
import Item from "../Item";

export default class pumpkin extends Item {
    
    protected hp: number;

    public constructor(sprite: Sprite) {
        super(sprite);
        this.hp = 5;
    }

    public get health(): number { return this.hp; }
    public set health(hp: number) { this.hp = hp; }
}
