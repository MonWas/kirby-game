import { k } from "./kaboomCtx";

// load assets and map data once from tiled to avoid refetching when player dies
async function gameSetup() {
    k.loadSprite("assets", "./kirby-like.png", {
        sliceX: 9,
        sliceY: 10,
        anims: {
            kirbyIdle: 0,
            kirbyInhaling: 1,
            kirbyFull: 2,
            kirbyInhaleEffect: { from: 3, to: 8, speed: 15, loop: true },
            shootingStar: 9,
            flame: { from: 36, to: 37, speed: 4, loop: true },
            guyIdle: 18,
            guyWalk: { from:18, to: 19, speed: 4, loop: true },
            bird: { from: 27, to: 28, speed: 4, loop: true },
        },
    });
}

gameSetup();