import kaboom from "kaboom";
import { scale } from "./constants";

export const k = kaboom({
    // gameboy resolution that fits 16:9 ratio
    // multiply by scale as workaround to kaboom bug of pixels not being drawn right
    width: 256 * scale,
    height: 144 * scale,
    scale,
    letterbox: true,
    global: false,
});