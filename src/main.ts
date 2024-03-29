import Game from "./Wolfie2D/Loop/Game";
import splash from "./hw4/Scenes/splash";
import { Controls } from "./hw4/AI/Controls";


// The main function is your entrypoint into Wolfie2D. Specify your first scene and any options here.
(function main(){
    // Run any tests
    runTests();

    // Set up options for our game
    let options = {
        canvasSize: {x: 1024, y: 1024},          // The size of the game
        clearColor: {r: 0.1, g: 0.1, b: 0.1},   // The color the game clears to
        inputs: [
            //{name: Controls.CHEAT_CODE, keys: ["c"]},
            //{name: Controls.MOVE_LEFT, keys: ["a"]},
            //{name: Controls.MOVE_RIGHT, keys: ["d"]},
            {name: Controls.JUMP, keys: ["w", "space"]},
        ],
        useWebGL: false,                        // Tell the game we want to use webgl
        showDebug: false                      // Whether to show debug messages. You can change this to true if you want
    }

    // Set up custom registries

    // Create a game with the options specified
    const game = new Game(options);

    // Start our game
    game.start(splash, {});

})();

function runTests(){};