import Unique from "../../../Wolfie2D/DataTypes/Interfaces/Unique";
import Vec2 from "../../../Wolfie2D/DataTypes/Vec2";
import Emitter from "../../../Wolfie2D/Events/Emitter";
import GameNode from "../../../Wolfie2D/Nodes/GameNode";
import Sprite from "../../../Wolfie2D/Nodes/Sprites/Sprite";
import Layer from "../../../Wolfie2D/Scene/Layer";
import Scene from "../../../Wolfie2D/Scene/Scene";

import HW4Scene from "../../Scenes/Scene2";
import Inventory from "./Inventory";


export default abstract class Item implements Unique {

    protected sprite: Sprite;
    protected emitter: Emitter;

    protected _inventory: Inventory | null;

    protected constructor(sprite: Sprite){ 
        this.sprite = sprite;
        this.emitter = new Emitter();

        this._inventory = null;
    }
    
    public get relativePosition(): Vec2 { return this.sprite.relativePosition; }

    public get id(): number { return this.sprite.id; }

    public get position(): Vec2 { return this.sprite.position; }

    public get visible(): boolean { return this.sprite.visible; }
    public set visible(value: boolean) { this.sprite.visible = value; }

    public get inventory(): Inventory | null { return this._inventory; }
    public set inventory(value: Inventory | null) { this._inventory = value; }

}