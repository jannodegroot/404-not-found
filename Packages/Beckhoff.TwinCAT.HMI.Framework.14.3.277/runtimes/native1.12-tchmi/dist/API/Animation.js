var __runInitializers=this&&this.__runInitializers||function(thisArg,initializers,value){for(var useValue=arguments.length>2,i=0;i<initializers.length;i++)value=useValue?initializers[i].call(thisArg,value):initializers[i].call(thisArg);return useValue?value:void 0},__esDecorate=this&&this.__esDecorate||function(ctor,descriptorIn,decorators,contextIn,initializers,extraInitializers){function accept(f){if(void 0!==f&&"function"!=typeof f)throw new TypeError("Function expected");return f}for(var _,kind=contextIn.kind,key="getter"===kind?"get":"setter"===kind?"set":"value",target=!descriptorIn&&ctor?contextIn.static?ctor:ctor.prototype:null,descriptor=descriptorIn||(target?Object.getOwnPropertyDescriptor(target,contextIn.name):{}),done=!1,i=decorators.length-1;i>=0;i--){var context={};for(var p in contextIn)context[p]="access"===p?{}:contextIn[p];for(var p in contextIn.access)context.access[p]=contextIn.access[p];context.addInitializer=function(f){if(done)throw new TypeError("Cannot add initializers after decoration has completed");extraInitializers.push(accept(f||null))};var result=(0,decorators[i])("accessor"===kind?{get:descriptor.get,set:descriptor.set}:descriptor[key],context);if("accessor"===kind){if(void 0===result)continue;if(null===result||"object"!=typeof result)throw new TypeError("Object expected");(_=accept(result.get))&&(descriptor.get=_),(_=accept(result.set))&&(descriptor.set=_),(_=accept(result.init))&&initializers.unshift(_)}else(_=accept(result))&&("field"===kind?initializers.unshift(_):descriptor[key]=_)}target&&Object.defineProperty(target,contextIn.name,descriptor),done=!0};import{animationProvider}from"../System/AnimationProvider.js";
/**
 * Deprecated. Please use new TcHmi.Animation()
 * Creates a new animation
 * @param controlName The name of the control for which the animation is intendend.
 * @param selector A CSS selector to identify the element inside the control to animate.
 * @preserve (Part of the public API)
 * @deprecated Please use new TcHmi.Animation()
 */TcHmi.AnimationProvider={create:function(controlName,selector=""){return new Animation(controlName,selector)}};export var Status;!function(Status){Status[Status.CONFIGURE=0]="CONFIGURE",Status[Status.INITIALIZED=1]="INITIALIZED",Status[Status.RUNNING=2]="RUNNING",Status[Status.PAUSED=3]="PAUSED",Status[Status.ENDED=4]="ENDED"}(Status||(Status={}));let Animation=(()=>{var _a;let ___updateState_decorators,_instanceExtraInitializers=[];return class{static{const _metadata="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;___updateState_decorators=[(_a=TcHmi).CallbackMethod.bind(_a)],__esDecorate(this,null,___updateState_decorators,{kind:"method",name:"__updateState",static:!1,private:!1,access:{has:obj=>"__updateState"in obj,get:obj=>obj.__updateState},metadata:_metadata},null,_instanceExtraInitializers),_metadata&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_metadata})}
/**
         * Creates a new animation
         * @param controlName The name of the control for which the animation is intendend.
         * @param selector A CSS selector to identify the element inside the control to animate.
         * @preserve (Part of the public API)
         */constructor(controlName,selector=""){this.__controlName=controlName,this.__selector=selector,this.__animationName=`anim-${tchmi_create_guid()}`}__controlName=__runInitializers(this,_instanceExtraInitializers);__selector;__animationName;__keyframes=[];__duration=0;__delay=0;__iterationCount=1;__direction="normal";__timingFunction="ease";__fillMode="none";__cleanup=!1;__useCss=!0;__eventHandlers=[];__state=Status.CONFIGURE;__updateState(status){this.__state=status}__animationController=null;
/**
         * Returns the name of the control the animation is intended for.
         * @returns The name of the control.
         * @preserve (Part of the public API)
         */
controlName(){return this.__controlName}
/**
         * Returns the selector of the element to animate.
         * @returns The selector.
         * @preserve (Part of the public API)
         */selector(){return this.__selector}
/**
         * Returns the name of the animation.
         * @returns The name of the animation.
         * @preserve (Part of the public API)
         */animationName(){return this.__animationName}
/**
         * Returns the state of the animation.
         * @returns The state.
         * @preserve (Part of the public API)
         */state(){return this.__state}
/**
         * Adds a keyframe.
         * This function throws an exception if the progressPoint of the keyframe is not between 0 and 1 inclusive.
         * @preserve (Part of the public API)
         */
addKeyframe(keyframeOrStylesOrProperty,valueOrProgressPoint,progressPoint){if(!this.__configAllowed())return this;if(1===arguments.length){if(keyframeOrStylesOrProperty.progressPoint<0||keyframeOrStylesOrProperty.progressPoint>1)throw new Error("Argument out of range: progressPoint must be between 0 and 1 inclusive.");this.__keyframes.push(keyframeOrStylesOrProperty)}else if(2===arguments.length&&"number"==typeof valueOrProgressPoint){if(valueOrProgressPoint<0||valueOrProgressPoint>1)throw new Error("Argument out of range: progressPoint must be between 0 and 1 inclusive.");let keyframe={styles:{},progressPoint:valueOrProgressPoint};for(const[key,value]of Object.entries(keyframeOrStylesOrProperty))keyframe.styles[key]="string"==typeof value?[value]:value;this.__keyframes.push(keyframe)}else if("string"==typeof keyframeOrStylesOrProperty&&("string"==typeof valueOrProgressPoint||Array.isArray(valueOrProgressPoint))){if(void 0===progressPoint||progressPoint<0||progressPoint>1)throw new Error("Argument out of range: progressPoint must be between 0 and 1 inclusive.");let keyframe={styles:{},progressPoint};keyframe.styles[keyframeOrStylesOrProperty]="string"==typeof valueOrProgressPoint?[valueOrProgressPoint]:valueOrProgressPoint,this.__keyframes.push(keyframe)}return this}
/**
         * Removes all keyframes.
         * @preserve (Part of the public API)
         */clearKeyframes(){return this.__configAllowed()?(this.__keyframes=[],this):this}
/**
         * Reverses the keyframes by subtracting the progressPoint from 1 and setting that as the new progressPoint.
         * @preserve (Part of the public API)
         */reverseKeyframes(){return this.__keyframes.forEach(keyframe=>{keyframe.progressPoint=1-keyframe.progressPoint}),this}
/**
         * Gets the keyframes of this animation.
         * @returns The keyframes.
         * @preserve (Part of the public API)
         */keyframes(){return this.__keyframes}
/**
         * Sets the duration for this animation. Default is 0.
         * @param valueNew The new duration.
         * @preserve (Part of the public API)
         */duration(valueNew){return void 0===valueNew?this.__duration:this.__configAllowed()?(this.__duration=null===valueNew?0:valueNew,this):this}
/**
         * Sets the delay before this animation starts. Default is 0.
         * @param valueNew {number} The new delay.
         * @preserve (Part of the public API)
         */delay(valueNew){return void 0===valueNew?this.__delay:this.__configAllowed()?(this.__delay=null===valueNew?0:valueNew,this):this}
/**
         * Sets the iteration count for this animation. Default is 1.
         * @param valueNew The new iteration count.
         * @preserve (Part of the public API)
         */iterationCount(valueNew){return void 0===valueNew?this.__iterationCount:this.__configAllowed()?(this.__iterationCount=null===valueNew?1:valueNew,this):this}
/**
         * Sets the order in which the keyframes are used. Default is 'normal'.
         * @param valueNew The new direction.
         * @preserve (Part of the public API)
         */direction(valueNew){return void 0===valueNew?this.__direction:this.__configAllowed()?(this.__direction=null===valueNew?"normal":valueNew,this):this}
/**
         * Sets the timing function for this animation. Default is 'ease'.
         * @param valueNew The new timing function. Possible values: "linear", "ease(-in/-out/-in-out)", "step-start/-end", "cubic-bezier(<number>, <number>, <number>, <number)", "steps(<number>, start/end)".
         * @preserve (Part of the public API)
         */timingFunction(valueNew){return void 0===valueNew?this.__timingFunction:this.__configAllowed()?(this.__timingFunction=null===valueNew?"ease":valueNew,this):this}
/**
         * Sets the fill mode. The fill mode determines whether the state of the first keyframe is applied to the element before the animation starts ('backwards'),
         * the state of the last keyframe is applied to the element after the animation ends ('forwards'), both or none. Default is 'none'.
         * @param valueNew The new fill mode.
         * @preserve (Part of the public API)
         */fillMode(valueNew){return void 0===valueNew?this.__fillMode:this.__configAllowed()?(this.__fillMode=null===valueNew?"none":valueNew,this):this}
/**
         * Set whether to schedule a cleanup after the animation has finished. A cleanup removes all animation specific CSS and, depending on fillMode, persists the properties of the last keyframe to the element CSS. Default is false.
         * @param valueNew {boolean} The cleanup value.
         * @preserve (Part of the public API)
         */cleanup(valueNew){return void 0===valueNew?this.__cleanup:(this.__cleanup=null!==valueNew&&valueNew,this.__state===Status.ENDED&&null!==this.__animationController&&this.__animationController.cleanup(),this)}
/**
         * Sets whether to render the animation via CSS or JavaScript. JavaScript may offer better performance if the animation is often changed and restarted.
         * If the animation has been configured with features unsupported by CSS, JavaScript will be used regardless of the value of useCss. Default is true.
         * @param valueNew {boolean} Whether to use CSS, when available.
         * @preserve (Part of the public API)
         */useCss(valueNew){return void 0===valueNew?this.__canUseCss()&&this.__useCss:this.__configAllowed()?(this.__useCss=null===valueNew||valueNew,this):this}
/**
         * Registers an event handler for one of the events animationstart, animationend or animationiteration.
         * @param name The name of the event.
         * @param callback The callback function.
         * @preserve (Part of the public API)
         */registerEventHandler(name,callback){return this.__eventHandlers.push({name,callback}),this}
/**
         * Unregisters a previously registered event handler.
         * @param name The name of the event.
         * @param callback The callback function to unregister.
         * @preserve (Part of the public API)
         */unregisterEventHandler(name,callback){return this.__eventHandlers=this.__eventHandlers.filter(handler=>!(handler.name===name&&(void 0===callback||handler.callback===callback))),this}
/**
         * Gets all event handlers
         * @returns The event handlers.
         * @preserve (Part of the public API)
         */eventHandlers(){return this.__eventHandlers}
/**
         * Run the animation.
         * @preserve (Part of the public API)
         */run(){return 0===this.__keyframes.length?(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Animation] This animation has no keyframes defined."),this):0===this.__keyframes.filter(keyframe=>0===keyframe.progressPoint).length?(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Animation] This animation has no start keyframe with progressPoint 0 defined."),this):0===this.__keyframes.filter(keyframe=>1===keyframe.progressPoint).length?(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Animation] This animation has no end keyframe with progressPoint 1 defined."),this):animationProvider?(null!==this.__animationController&&this.__animationController.isValid()||(this.__animationController=animationProvider.createAnimationController(this,this.__updateState)),this.__animationController.run(),this):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Animation] System not ready."),this)}
/**
         * Pause the animation.
         * @preserve (Part of the public API)
         */pause(){return null!==this.__animationController&&this.__animationController.pause(),this}
/**
         * Cancels the animation and writes the last keyframe styles into the element CSS.
         * @preserve (Part of the public API)
         */skip(){return null!==this.__animationController&&this.__animationController.skip(),this}
/**
         * Resets the animation. This is an asynchronous operation.
         * @param callback The function to call when the animation has been reset.
         * @preserve (Part of the public API)
         */reset(callback){return null!==this.__animationController&&this.__animationController.reset(callback),this}__canUseCss(){return"string"==typeof this.__timingFunction}__configAllowed(){return this.__state===Status.CONFIGURE||this.__state===Status.ENDED||(TcHmi.Log.warn("[Source=Framework, Module=TcHmi.Animation] Configuring an animation is only allowed when it has the state CONFIGURE or ENDED."),!1)}static Status=Status}})();export{Animation};TcHmi.Animation=Animation;