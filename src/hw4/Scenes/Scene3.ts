import AABB from "../../Wolfie2D/DataTypes/Shapes/AABB";
import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Scene2 from "./Scene2";
import RenderingManager from "../../Wolfie2D/Rendering/RenderingManager";
import SceneManager from "../../Wolfie2D/Scene/SceneManager";
import Viewport from "../../Wolfie2D/SceneGraph/Viewport";

export default class Scene3 extends Scene2 {

    public static readonly PLAYER_SPAWN = new Vec2(50, 50);
    public static readonly PLAYER_SPRITE_KEY = "PLAYER_SPRITE_KEY";
    public static readonly PLAYER_SPRITE_PATH = "assets/spritesheets/player1.json";

    public static readonly TILEMAP_KEY = "LEVEL1";
    public static readonly TILEMAP_PATH = "assets/tilemaps/tilemap.json";
    public static readonly TILEMAP_SCALE = new Vec2(1, 1);
    public static readonly WALLS_LAYER_KEY = "Main";

    public static readonly LEVEL_END = new AABB(new Vec2(194, 197), new Vec2(24, 16));

    public constructor(viewport: Viewport, sceneManager: SceneManager, renderingManager: RenderingManager, options: Record<string, any>) {
        super(viewport, sceneManager, renderingManager, options);
        // Set the keys for the different layers of the tilemap
        this.tilemapKey = Scene3.TILEMAP_KEY;
        this.tilemapScale = Scene3.TILEMAP_SCALE;
        this.wallsLayerKey = Scene3.WALLS_LAYER_KEY;

        // Set the key for the player's sprite
        this.playerSpriteKey = Scene3.PLAYER_SPRITE_KEY;
        // Set the player's spawn
        this.playerSpawn = Scene3.PLAYER_SPAWN;


        // Level end size and position
        this.levelEndPosition = new Vec2(194, 197).mult(this.tilemapScale);
        this.levelEndHalfSize = new Vec2(32, 32).mult(this.tilemapScale);
    }

    /**
     * Load in our resources for level 1
     */
    public loadScene(): void {
        // Load in the tilemap
        this.load.tilemap(this.tilemapKey, Scene3.TILEMAP_PATH);
        // Load in the player's sprite
        this.load.spritesheet(this.playerSpriteKey, Scene3.PLAYER_SPRITE_PATH);
    }

    /**
     * Unload resources for level 1 - decide what to keep
     */
    public unloadScene(): void {
        this.load.keepSpritesheet(this.playerSpriteKey);
    }

    public startScene(): void {
        super.startScene();
        // Set the next level to be Level2
    }

    /**
     * I had to override this method to adjust the viewport for the first level. I screwed up 
     * when I was making the tilemap for the first level is what it boils down to.
     * 
     * - Peter
     */
    protected initializeViewport(): void {

        super.initializeViewport();
        this.viewport.setZoomLevel(6);
        this.viewport.setBounds(0, 0, 512, 512);
    }

}