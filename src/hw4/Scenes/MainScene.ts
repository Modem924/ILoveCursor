import PositionGraph from "../../Wolfie2D/DataTypes/Graphs/PositionGraph";
import Actor from "../../Wolfie2D/DataTypes/Interfaces/Actor";
import AABB from "../../Wolfie2D/DataTypes/Shapes/AABB";
import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import GameEvent from "../../Wolfie2D/Events/GameEvent";
import GameNode from "../../Wolfie2D/Nodes/GameNode";
import { GraphicType } from "../../Wolfie2D/Nodes/Graphics/GraphicTypes";
import Line from "../../Wolfie2D/Nodes/Graphics/Line";
import OrthogonalTilemap from "../../Wolfie2D/Nodes/Tilemaps/OrthogonalTilemap";
import Navmesh from "../../Wolfie2D/Pathfinding/Navmesh";
import DirectStrategy from "../../Wolfie2D/Pathfinding/Strategies/DirectStrategy";
import RenderingManager from "../../Wolfie2D/Rendering/RenderingManager";
import SceneManager from "../../Wolfie2D/Scene/SceneManager";
import Viewport from "../../Wolfie2D/SceneGraph/Viewport";
import Timer from "../../Wolfie2D/Timing/Timer";
import Color from "../../Wolfie2D/Utils/Color";
import MathUtils from "../../Wolfie2D/Utils/MathUtils";
import Scene from "../../Wolfie2D/Scene/Scene";
import PlayerActor from "../Actors/PlayerActor";
import PlayerAI from "../AI/Player/PlayerAI";

export default class MainScene extends Scene{
    private walls: OrthogonalTilemap;

    public constructor(viewport: Viewport, sceneManager: SceneManager, renderingManager: RenderingManager, options: Record<string, any>) {
        super(viewport, sceneManager, renderingManager, options);

        
    }

    public override loadScene() {
        // Load the player and enemy spritesheets
        this.load.spritesheet("player", "assets/spritesheets/player.json");
        //this.load.spritesheet("crow", "assets/spritesheets/crow.json");

        this.load.tilemap("level", "assets/tilemaps/tilemap.json");
    }

    /**
     * @see Scene.startScene
    */
    public override startScene() {
        // Add in the tilemap
        let tilemapLayers = this.add.tilemap("level");

        this.walls = <OrthogonalTilemap>tilemapLayers[1].getItems()[0];

        // Set the viewport bounds to the tilemap
        let tilemapSize: Vec2 = this.walls.size;
        this.viewport.setBounds(0, 0, tilemapSize.x, tilemapSize.y);
        this.viewport.setZoomLevel(2);
        this.initLayers();
        this.initializePlayer();
    }   
    /**
     * @see Scene.updateScene
     */
    public override updateScene(deltaT: number): void {
    }
    protected initLayers(): void {
        this.addLayer("primary", 10);
    }

    protected initializePlayer(): void {
        let player = this.add.animatedSprite(PlayerActor, "player", "primary");
        player.position.set(40, 40);
        player.addPhysics(new AABB(Vec2.ZERO, new Vec2(10, 10)));
        player.addAI(PlayerAI);
        player.animation.play("IDLE");
        this.viewport.follow(player);
    }
}