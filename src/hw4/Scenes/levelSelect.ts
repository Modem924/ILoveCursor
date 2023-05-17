import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Button from "../../Wolfie2D/Nodes/UIElements/Button";
import { UIElementType } from "../../Wolfie2D/Nodes/UIElements/UIElementTypes";
import Scene from "../../Wolfie2D/Scene/Scene";
import Color from "../../Wolfie2D/Utils/Color";
import Sprite from "../../Wolfie2D/Nodes/Sprites/Sprite";
import MainMenu from "./MainMenu";
import Level1 from "./Level1";


export const LevelLayers = {
    LEVEL1: "LEVEL1",
    LEVEL2: "LEVEL2",
    LEVEL3: "LEVEL3",
    LEVEL4: "LEVEL4",
    LEVEL5: "LEVEL5",
    LEVEL6: "LEVEL6"
} as const;


export default class levelSelect extends Scene {
    private background: Sprite;

    loadScene(): void {
        this.load.image("background", "assets/images/background.png");
    }


    public startScene(): void {
        let center = this.viewport.getCenter();
        let size = this.viewport.getHalfSize();
        this.viewport.setFocus(size);
        this.viewport.setZoomLevel(1);
        this.addLayer("primary");
        this.background = this.add.sprite("background", "primary");
        this.background.position.set(center.x, center.y);

        this.addUILayer(LevelLayers.LEVEL1);
        this.addUILayer(LevelLayers.LEVEL2);
        this.addUILayer(LevelLayers.LEVEL3);
        this.addUILayer(LevelLayers.LEVEL4);
        this.addUILayer(LevelLayers.LEVEL5);
        this.addUILayer(LevelLayers.LEVEL6);

        let lv1Btn = <Button>this.add.uiElement(UIElementType.BUTTON, LevelLayers.LEVEL1, {position: new Vec2(size.x - 100, size.y - 100), text: "Level 1"});
        lv1Btn.backgroundColor = Color.GREEN;
        lv1Btn.borderColor = Color.WHITE;
        lv1Btn.textColor = Color.BLACK;
        lv1Btn.borderRadius = 0;
        lv1Btn.setPadding(new Vec2(50, 10));
        lv1Btn.font = "PixelSimple";
        lv1Btn.size = new Vec2(150,50);

        let lv2Btn = <Button>this.add.uiElement(UIElementType.BUTTON, LevelLayers.LEVEL2, {position: new Vec2(size.x + 100, size.y - 100), text: "Level 2"});
        lv2Btn.backgroundColor = Color.GREEN;
        lv2Btn.borderColor = Color.WHITE;
        lv2Btn.textColor = Color.BLACK;
        lv2Btn.borderRadius = 0;
        lv2Btn.setPadding(new Vec2(50, 10));
        lv2Btn.font = "PixelSimple";
        lv2Btn.size = new Vec2(150,50);

        let lv3Btn = <Button>this.add.uiElement(UIElementType.BUTTON, LevelLayers.LEVEL3, {position: new Vec2(size.x - 100, size.y), text: "Level 3"});
        lv3Btn.backgroundColor = Color.GREEN;
        lv3Btn.borderColor = Color.WHITE;
        lv3Btn.textColor = Color.BLACK;
        lv3Btn.borderRadius = 0;
        lv3Btn.setPadding(new Vec2(50, 10));
        lv3Btn.font = "PixelSimple";
        lv3Btn.size = new Vec2(150,50);

        let lv4Btn = <Button>this.add.uiElement(UIElementType.BUTTON, LevelLayers.LEVEL4, {position: new Vec2(size.x + 100, size.y), text: "Level 4"});
        lv4Btn.backgroundColor = Color.GREEN;
        lv4Btn.borderColor = Color.WHITE;
        lv4Btn.textColor = Color.BLACK;
        lv4Btn.borderRadius = 0;
        lv4Btn.setPadding(new Vec2(50, 10));
        lv4Btn.font = "PixelSimple";
        lv4Btn.size = new Vec2(150,50);

        let lv5Btn = <Button>this.add.uiElement(UIElementType.BUTTON, LevelLayers.LEVEL5, {position: new Vec2(size.x - 100, size.y + 100), text: "Level 5"});
        lv5Btn.backgroundColor = Color.GREEN;
        lv5Btn.borderColor = Color.WHITE;
        lv5Btn.textColor = Color.BLACK;
        lv5Btn.borderRadius = 0;
        lv5Btn.setPadding(new Vec2(50, 10));
        lv5Btn.font = "PixelSimple";
        lv5Btn.size = new Vec2(150,50);

        let lv6Btn = <Button>this.add.uiElement(UIElementType.BUTTON, LevelLayers.LEVEL6, {position: new Vec2(size.x + 100, size.y + 100), text: "Level 6"});
        lv6Btn.backgroundColor = Color.GREEN;
        lv6Btn.borderColor = Color.WHITE;
        lv6Btn.textColor = Color.BLACK;
        lv6Btn.borderRadius = 0;
        lv6Btn.setPadding(new Vec2(50, 10));
        lv6Btn.font = "PixelSimple";
        lv6Btn.size = new Vec2(150,50);

        let backBtn = <Button>this.add.uiElement(UIElementType.BUTTON, LevelLayers.LEVEL1, {position: new Vec2(size.x, size.y + 200 ), text: "Back"});
        backBtn.backgroundColor = Color.GREEN;
        backBtn.borderColor = Color.WHITE;
        backBtn.textColor = Color.BLACK;
        backBtn.borderRadius = 0;
        backBtn.setPadding(new Vec2(50, 10));
        backBtn.font = "PixelSimple";
        backBtn.size = new Vec2(150,50);

        backBtn.onClick = () => {
            this.sceneManager.changeToScene(MainMenu);
        }

        lv1Btn.onClick = () => {
            this.sceneManager.changeToScene(Level1);
        }
        
        lv2Btn.onClick = () => {
            this.sceneManager.changeToScene(MainMenu);
        }

        lv3Btn.onClick = () => {
            this.sceneManager.changeToScene(MainMenu);
        }

        lv4Btn.onClick = () => {
            this.sceneManager.changeToScene(MainMenu);
        }

        lv5Btn.onClick = () => {
            this.sceneManager.changeToScene(MainMenu);
        }

        lv6Btn.onClick = () => {
            this.sceneManager.changeToScene(MainMenu);
        }

    }
    
}