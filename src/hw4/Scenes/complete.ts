import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Button from "../../Wolfie2D/Nodes/UIElements/Button";
import { UIElementType } from "../../Wolfie2D/Nodes/UIElements/UIElementTypes";
import Scene from "../../Wolfie2D/Scene/Scene";
import Color from "../../Wolfie2D/Utils/Color";
import Sprite from "../../Wolfie2D/Nodes/Sprites/Sprite";
import { MenuLayers } from "./MenuLayers";
import MainMenu from "./MainMenu";

export default class complete extends Scene {
    private complete: Sprite;

    loadScene(): void {
        this.load.image("complete", "assets/images/complete.png");
    }

    public startScene(): void {
        this.addLayer("complete");
        this.complete = this.add.sprite("complete", "complete");
        let center = this.viewport.getCenter();
        this.complete.position.set(center.x, center.y);
        this.addUILayer(MenuLayers.SPLASH);

        let size = this.viewport.getHalfSize();
        this.viewport.setFocus(size);
        this.viewport.setZoomLevel(1);

        let backBtn = <Button>this.add.uiElement(UIElementType.BUTTON, MenuLayers.SPLASH, {position: new Vec2(size.x, size.y + 220), text: "Back"});
        backBtn.backgroundColor = Color.GREEN;
        backBtn.borderColor = Color.WHITE;
        backBtn.textColor = Color.BLACK;
        backBtn.borderRadius = 0;
        backBtn.setPadding(new Vec2(50, 10));
        backBtn.font = "PixelSimple";
        backBtn.size = new Vec2(90,50);

        backBtn.onClick = () => {
            this.sceneManager.changeToScene(MainMenu);
        }
    }

    unloadScene(): void {
        complete;
    }
}