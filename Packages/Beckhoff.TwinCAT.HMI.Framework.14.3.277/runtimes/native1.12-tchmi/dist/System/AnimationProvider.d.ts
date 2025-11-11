import type { Animation } from '../API/Animation.js';
import { Status } from '../API/Animation.js';
export declare class AnimationProvider {
    constructor();
    createAnimationController(animation: Animation, statusChangeCallback: (status: Status) => void): AnimationController;
}
export interface AnimationController {
    isValid: () => boolean;
    run: () => void;
    pause: () => void;
    skip: () => void;
    reset: (callback?: () => void) => void;
    cleanup: () => void;
}
/** Runtime Manager */
export declare const animationProvider: AnimationProvider;
//# sourceMappingURL=AnimationProvider.d.ts.map