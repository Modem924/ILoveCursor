import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Button from "../../Wolfie2D/Nodes/UIElements/Button";
import { UIElementType } from "../../Wolfie2D/Nodes/UIElements/UIElementTypes";
import Scene from "../../Wolfie2D/Scene/Scene";
import Color from "../../Wolfie2D/Utils/Color";
import Sprite from "../../Wolfie2D/Nodes/Sprites/Sprite";
import { MenuLayers } from "./MenuLayers";
import MainMenu from "./MainMenu";

export default class splash extends Scene {
    private splash: Sprite;

    loadScene(): void {
        this.load.image("splash", "assets/images/splash.png");
    }

    public startScene(): void {
        this.addLayer("splash");
        this.splash = this.add.sprite("splash", "splash");
        let center = this.viewport.getCenter();
        this.splash.position.set(center.x, center.y);
        this.addUILayer(MenuLayers.SPLASH);

        let size = this.viewport.getHalfSize();
        this.viewport.setFocus(size);
        this.viewport.setZoomLevel(1);

        let startBtn = <Button>this.add.uiElement(UIElementType.BUTTON, MenuLayers.SPLASH, {position: new Vec2(size.x, size.y + 110), text: "START"});
        startBtn.backgroundColor = Color.GREEN;
        startBtn.borderColor = Color.WHITE;
        startBtn.textColor = Color.BLACK;
        startBtn.borderRadius = 0;
        startBtn.setPadding(new Vec2(50, 10));
        startBtn.font = "PixelSimple";
        startBtn.size = new Vec2(200,70);

        startBtn.onClick = () => {
            this.sceneManager.changeToScene(MainMenu);
        }
    }

    unloadScene(): void {
        splash;
    }
}