import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type * as TcHmiDatagrid from '../TcHmiDatagrid/TcHmiDatagrid.esm.js';
import { Menubar } from './Menubar.js';
export declare enum MouseMode {
    None = 0,
    ZoomX = 1,
    ZoomXY = 2,
    PanX = 3,
    PanXY = 4
}
export declare enum MenuBarPosition {
    Bottom = 0,
    Top = 1
}
export declare enum Datatype {
    Datetime = 0,
    Timespan = 1,
    Keyword = 2
}
export declare enum Position {
    Left = 0,
    Right = 1
}
export declare enum LineStyle {
    Dotted = 0,
    Dashed = 1,
    Solid = 2
}
export declare enum AxisLabeling {
    Number = 0,
    Scientific = 1,
    Auto = 2
}
export declare enum Orientation {
    Horizontal = 0,
    Vertical = 1
}
export declare enum FillMode {
    None = 0,
    HorizontalZero = 1,
    Bottom = 2,
    Top = 3,
    Center = 4,
    Source = 5
}
export declare enum ValueUnit {
    Value = "Value",
    '%' = "%"
}
declare class TcHmiTrendLineChart extends TcHmiControl.Control {
    #private;
    /** cached defaults from Types.schema.json */
    protected static yAxisDefaultValueInternals: {
        readonly position: Position;
        readonly logarithmicScale: boolean;
        readonly axisLabeling: AxisLabeling;
        readonly mainTickMinValue: number;
        readonly mainTickMaxValue: number;
        readonly autoScaling: boolean;
        readonly decimalPlaces: number;
        readonly showAxis: boolean;
        readonly showLabels: boolean;
        readonly showAxisName: boolean;
        readonly axisName: string;
        readonly axisNameFontFamily: TcHmi.FontFamily;
        readonly axisNameFontSize: number;
        readonly axisNameFontSizeUnit: 'px';
        readonly axisNameFontWeight: TcHmi.FontWeight;
        readonly unit: string;
        readonly showAxisIfNoData: boolean;
    };
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** member variables */
    /** Reference to the root dom element of the current control template as  jquery object. */
    protected __elementTemplateRoot: JQuery;
    /** Reference to the div element used as chart container as jquery object. */
    protected __elementChart: JQuery;
    /** Reference to the div element used as menu-bar as jquery object. */
    protected __elementMenuBar: JQuery;
    /** Reference to the div element used as tooltip as jquery object. */
    protected __elementTooltip: JQuery;
    /** Reference to the div element used as tooltip as jquery object. */
    protected __elementTooltipText: JQuery;
    /** Reference to the div element used as tooltip arrow as jquery object. */
    protected __elementTooltipArrow: JQuery;
    /** Reference to the div element used loading element as jquery object. */
    protected __elementLoading: JQuery;
    /** Reference to the div element used as legend as jquery object. */
    protected __elementLegend: JQuery;
    /** Reference to the div element used as statistical data parent div as jquery object. */
    protected __elementStatisticalData: JQuery;
    /** Linechart element' */
    protected __lineChart: TcHmiCharting.LineAreaChart | null;
    /** Internal reference to the attribute 'data-tchmi-start' */
    __start: string | null | undefined;
    /** Saved the internal start value */
    protected __internalStart: string | null;
    /** Saved the internal start value */
    protected __internalStartServer: number | null;
    /** The actual start time in milliseconds */
    protected __actualStartTime: number | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-start-presets' */
    __startPresets: TimeOrTimespanPreset[] | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-end' */
    __end: string | null | undefined;
    /** Saved the internal end value */
    protected __internalEnd: string | null;
    /** Saved the internal end value */
    protected __internalEndServer: number | null;
    /** The actual end time in milliseconds */
    protected __actualEndTime: number | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-end-presets' */
    __endPresets: TimeOrTimespanPreset[] | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-sections-background-color' */
    protected __sectionsBackgroundColor: TcHmi.Color | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-y-axis-width' */
    protected __yAxisWidth: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-y-label-font-family' */
    protected __yLabelFontFamily: TcHmi.FontFamily | undefined;
    /** Internal reference to the attribute 'data-tchmi-y-label-font-size' */
    protected __yLabelFontSize: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-y-label-font-weight' */
    protected __yLabelFontWeight: TcHmi.FontWeight | undefined;
    /** Internal reference to the attribute 'data-tchmi-y-main-tick-steps' */
    protected __yMainTickSteps: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-show-y-sub-ticks' */
    protected __showYSubTicks: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-y-sub-tick-steps' */
    protected __ySubTickSteps: number | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-show-x-axis' */
    protected __showXAxis: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-show-labels' */
    protected __xShowLabels: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-main-tick-steps' */
    protected __xMainTickSteps: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-show-x-sub-ticks' */
    protected __showXSubTicks: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-sub-tick-steps' */
    protected __xSubTickSteps: number | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-label-font-family' */
    protected __xLabelFontFamily: TcHmi.FontFamily | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-label-font-size' */
    protected __xLabelFontSize: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-label-font-weight' */
    protected __xLabelFontWeight: TcHmi.FontWeight | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-label-font-color' */
    protected __xLabelFontColor: TcHmi.SolidColor | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-axis-width' */
    protected __xAxisWidth: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-axis-color' */
    protected __xAxisColor: TcHmi.SolidColor | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-show-x-axis-name' */
    protected __showXAxisName: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-axis-name' */
    protected __xAxisName: string | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-axis-font-family' */
    protected __xAxisNameFontFamily: TcHmi.FontFamily | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-axis-font-size' */
    protected __xAxisNameFontSize: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-axis-font-weight' */
    protected __xAxisNameFontWeight: TcHmi.FontWeight | undefined;
    /** Internal reference to the attribute 'data-tchmi-x-axis-font-color' */
    protected __xAxisNameFontColor: TcHmi.SolidColor | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-value-format' */
    protected __xAxisFormat: TcHmi.IFunction<string> | null | undefined;
    /**  Internal reference to the attribute 'data-tchmi-y-axis' */
    protected __yAxis: YAxis[] | null | undefined;
    /** Internal using of yAxis */
    protected __yAxisInternal: YAxisInternal[];
    /**  Internal reference to the attribute 'data-tchmi-line-graph-descriptions' */
    protected __lineGraphDescriptions: LineGraphDescription[] | null | undefined;
    /** The lineGraphDescription created from settingsDialog as LineGraphDescriptionInternal or null */
    __lineGraphDescriptionsOverride: LineGraphDescription[] | null;
    /** The internal lineGraphDescription created from __lineGraphDescriptions and themedRessources as LineGraphDescriptionInternal or null */
    protected __lineGraphDescriptionsInternal: LineGraphDescriptionInternal[] | null;
    /** Internal reference to the attribute 'data-tchmi-show-grid' */
    protected __showGrid: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-grid-background-color' */
    protected __gridBackgroundColor: TcHmi.SolidColor | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-grid-show-horizontal-lines' */
    protected __gridShowHorizontalLines: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-grid-show-vertical-lines' */
    protected __gridShowVerticalLines: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-grid-line-width' */
    protected __gridLineWidth: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-grid-line-style' */
    protected __gridLineStyle: keyof typeof LineStyle | undefined;
    /** Internal reference to the attribute 'data-tchmi-grid-line-color' */
    protected __gridLineColor: TcHmi.SolidColor | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-subgrid-show-horizontal-lines' */
    protected __subgridShowHorizontalLines: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-subgrid-show-vertical-lines' */
    protected __subgridShowVerticalLines: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-subgrid-line-width' */
    protected __subgridLineWidth: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-subgrid-line-style' */
    protected __subgridLineStyle: keyof typeof LineStyle | undefined;
    /** Internal reference to the attribute 'data-tchmi-subgrid-line-color' */
    protected __subgridLineColor: TcHmi.SolidColor | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-show-menu-bar' */
    protected __showMenuBar: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-menu-bar-position' */
    protected __menuBarPosition: keyof typeof MenuBarPosition | undefined;
    /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-family' */
    protected __menuBarLabelFontFamily: TcHmi.FontFamily | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-size' */
    protected __menuBarLabelFontSize: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-weight' */
    protected __menuBarLabelFontWeight: TcHmi.FontWeight | undefined;
    /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-style' */
    protected __menuBarLabelFontStyle: TcHmi.FontStyle | undefined;
    /** Internal reference to the attribute 'data-tchmi-menu-bar-label-font-color' */
    protected __menuBarLabelFontColor: TcHmi.SolidColor | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-show-tooltip' */
    protected __showTooltip: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-tooltip-format' */
    protected __tooltipFormat: TcHmi.IFunction<string> | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-tooltip-font-family' */
    protected __tooltipFontFamily: TcHmi.FontFamily | undefined;
    /** Internal reference to the attribute 'data-tchmi-tooltip-font-size' */
    protected __tooltipFontSize: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-tooltip-font-weight' */
    protected __tooltipFontWeight: TcHmi.FontWeight | undefined;
    /** Internal reference to the attribute 'data-tchmi-tooltip-font-color' */
    protected __tooltipFontColor: TcHmi.SolidColor | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-tooltip-background-color' */
    protected __tooltipBackgroundColor: TcHmi.Color | null | undefined;
    /**  Internal reference to the attribute 'data-tchmi-reference-lines'*/
    protected __referenceLines: ReferenceLine[] | null | undefined;
    /** Internal reference to the attribute 'data-tchmi-reference-lines-position' */
    protected __referenceLinesPosition: string | undefined;
    /** Internal reference to the attribute 'data-tchmi-interval */
    protected __interval: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-legend-font-family' */
    protected __legendFontFamily: TcHmi.FontFamily | undefined;
    /** Internal reference to the attribute 'data-tchmi-legend-font-size' */
    protected __legendFontSize: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-legend-font-style' */
    protected __legendFontStyle: TcHmi.FontStyle | undefined;
    /** Internal reference to the attribute 'data-tchmi-legend-font-weight' */
    protected __legendFontWeight: TcHmi.FontWeight | undefined;
    /** Internal variable for legend */
    protected __showLegend: boolean | undefined;
    /** Internal variable for serverDomain */
    protected __serverDomain: string | undefined | null;
    /** Resolved server domain from autodetection (undefined if unknown) */
    protected __intServerDomain: string | undefined;
    /** Watchdefaultdomain returned the first response */
    protected __watchDomainFirstTick: boolean;
    /** Domain currently used for the data request */
    protected __actServerDomain: string | undefined | null;
    /** Internal variable for showStatisticalData */
    protected __showStatisticalData: boolean | undefined;
    /** Internal variable for statisticalDataConfiguration */
    protected __statisticalDataConfiguration: StatisticalDataConfiguration | null | undefined;
    /** Internal variable for statisticalDataType */
    protected __analyticsType: Array<'average' | 'minimum' | 'maximum'>;
    /** Internal variable for srcCoulmn */
    protected __statisticalDataSrcColumn: {
        symbol: TcHmiDatagrid.Column;
        min: TcHmiDatagrid.Column;
        max: TcHmiDatagrid.Column;
        average: TcHmiDatagrid.Column;
    };
    /** Internal line graph data from historize-extension (fill in getDataCallback) */
    protected __lineGraphData: Point[][] | null;
    /** Internal line graph data from historize-extension (fill in getDataCallback) */
    protected __lineGraphRawData: ServerPoint[][] | null;
    /** Saved the start before the last manipulation */
    protected __startBeforeManipulation: string | null;
    /** Saved the end before the last manipulation */
    protected __endBeforeManipulation: string | null;
    /** Mouse mode for zooming or panning as TcHmiTrendLineChart.MouseMode */
    protected __mouseMode: MouseMode;
    /** Internal variable to save the manipulation infos */
    protected __manipulationInfo: {
        isStopped: boolean;
        isManipulating: boolean;
        multitouchMode: boolean;
        click: boolean;
        beginXAxisStart: number | null;
        beginXAxisEnd: number | null;
        beginData: Point[][];
        beginYAxis: YAxisInternal[];
        actualXAxisStart: number | null;
        actualXAxisEnd: number | null;
        actualYAxis: YAxisInternal[];
        mousePositionStart: {
            x: number;
            y: number;
        };
        mousePositionEnd: {
            x: number;
            y: number;
        };
        offset: {
            left: number;
            top: number;
        };
        scale: {
            x: number;
            y: number;
        };
        transform: {
            x: number;
            y: number;
        };
        first: {
            identifier: number | null;
        };
        second: {
            identifier: null | number;
        };
        distance: number;
        isWheeling: boolean;
        wheelSteps: number;
        wheelTimeout: number;
        moveReferenceLine: boolean;
        referenceLine: TcHmiCharting.ReferenceLine | null;
    };
    /** The context from the TcHmi_Controls_Beckhoff_TcHmiTrendLineChart-canvas-zooming canvas */
    protected __zoomingCanvasContext: CanvasRenderingContext2D | null;
    /** Saved if the last update comes from an interaction (multitouch, touch, mouse or wheeling) */
    protected __lastInteraction: boolean;
    /** The start and end values before zooming */
    protected __startEndBeforeZoom: {
        end: string | null;
        start: string | null;
    };
    /** Subscription ID for GetTrendLineData and GetTrendLineWindow as number (null if no subscription is created) */
    protected __subscriptionId: number | null;
    /** Subscription ID for GetTrendLineData as number (null if no subscription is created) */
    protected __requestId: number | null;
    /** Internal counter of calling getTrendLineData */
    private __getDataCounter;
    /** Internal tooltip information */
    protected __tooltipInformation: {
        show: boolean;
        isActive: boolean;
        time: number;
        points: TooltipInformationObject[];
        errors: TooltipErrorInformationObject[];
        referenceLine: TcHmiCharting.ReferenceLine | undefined;
    };
    /** Internal start datatype */
    __startDatatype: Datatype | null;
    /** Internal end datatype */
    __endDatatype: Datatype | null;
    /** millisecond offset from the current (not browser) timeZone to utc */
    protected __utcOffset: number;
    /** onValueChanged now */
    __nowIsValueChanged: boolean;
    /** LoadingSpinner */
    protected __loadingSpinner: Element;
    /** Touch and hold timer */
    protected __holdTimer: number;
    protected __holdTimerDuration: number;
    /** Reconnect timer */
    protected __reconnectTimer: number;
    protected __reconnectTime: number;
    /** Localization */
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    __storage: TcHmi.LocalStorage<{
        activeLegendElements: number[];
        lineGraphDescriptions: LineGraphDescription[];
    }, {
        activeLegendElements: number;
        lineGraphDescriptions: number;
    }> | undefined;
    protected __activeLegendElements: number[] | undefined;
    /** Menubar object just not undefined if it was or is active as TcHmiTrendLineChartHelper.Menubar */
    protected __menubar: undefined | Menubar;
    protected __statisticalDataDatagrid: undefined | TcHmiDatagrid.Control;
    __virtualMappingForControlRecord: TcHmi.VirtualControlRightMapping[];
    /**  Internal reference lines, values can be adjusted */
    protected __internalReferenceLines: ReferenceLine[] | null | undefined;
    /**  Internal control width */
    protected __controlWidthInSubscription: number | undefined;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by the system after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /**
     * Add an element to be localized.
     * @param element The element.
     * @param key The localization key.
     * @param parameters Optional parameters to pass to tchmi_format_string.
     */
    __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
    /**
     * Remove a localized element.
     * @param element The element to remove.
     */
    __removeLocalizedElement(element: HTMLElement): void;
    /** Is raised if the control should be redrawn. */
    protected __rebuild(_event: TcHmi.EventProvider.Event, _ctrl?: TcHmi.Controls.System.TcHmiControl): void;
    /** Is called if timespan or startTime changed. */
    protected __openWebsocket(): void;
    /** Is called from __onWebSocketOpen and called getTrendLineData from Historize-Extension. */
    protected __getData(): void;
    /** Is raised if the requestDisplay callback is raised. */
    protected __getDataCallback(result: TcHmi.Server.IResultObject): void;
    /** Reset the linechart before the last manipulation was made */
    protected __resetBeforeLastManipulation(): void;
    /** Is called initial and and if size changed. */
    protected __drawLineChart(): void;
    /** Calculated width and height of charting element. */
    protected __calcSizes(): {
        top: number;
        width: number;
        height: number;
    };
    /** Reset the linechart */
    protected __reset(): void;
    /** Created legend */
    __createLegend(): void;
    /** Returns the current value of the member variable legend. */
    protected getCurrentGraphLength(): number;
    /** Create internalLineGraphDescription and internalYAxis */
    private __createInternals;
    /** Set the positions of menubar and legend */
    setSectionsPositions(): void;
    /**
     * Is raised if mouseDown on legend.
     * @param event The event of mouseDown.
     */
    protected __onCheckboxMouseDown(event: MouseEvent): void;
    /**
     * Is raised if touchstart on legend.
     * @param event The event of touchstart.
     */
    protected __onCheckboxTouchStart(event: TouchEvent): void;
    /**
     * Create a tooltip if the offsetX and offsetY value is on a point.
     * @param offsetX The x coordinate of the mouse or touch.
     * @param offsetY The y coordinate of the mouse or touch.
     * @param activate The value if the tooltip should be activated.
     * @param fromTouch The call comes from mouse or touch interactions.
     */
    protected __createTooltip(offsetX: number, offsetY: number, activate: boolean, fromTouch: boolean): void;
    /**
     * Create a tooltip design.
     * @param tooltipHtml The tooltip html.
     * @param offsetX The x coordinate of the mouse or touch.
     * @param offsetY The y coordinate of the mouse or touch.
     * @param offsetLeft The offsetLeft of xAxis (xAxis.getXAxisLeftWidth()).
     * @param offsetTop The offsetTop of the elementChart (this.__elementChart[0].offsetTop).
     */
    private __designTooltip;
    /** Returns the html string with information to reference lines from __tooltipInformation object. */
    private __referenceLineTooltipInformation;
    /** Hightlight the data points */
    private __highlightDataPoints;
    /**
     * Is raised if mouseMove on canvasDrawing.
     * @param event The event of mouseMove.
     */
    protected __onMouseMoveTooltip(event: MouseEvent): void;
    /**
     * Is raised if click on canvasDrawing.
     * @param event The event of click.
     */
    protected __onClick(event: MouseEvent): void;
    /**
     * Is raised if mouseDown on canvasDrawing.
     * @param event The event of mouseDown.
     */
    protected __onMouseDown(event: MouseEvent): void;
    /**
     * Is raised if mouseMove on document.
     * @param event The event of mouseMove.
     */
    protected __onMouseMove(event: MouseEvent): void;
    /**
     * Is raised if mouseUp on document.
     * @param event The event of mouseDown.
     */
    protected __onMouseUp(event: MouseEvent): void;
    /**
     * Is raised if touchStart on canvasDrawing.
     * @param event The event of touchStart.
     */
    protected __onTouchStart(event: TouchEvent): void;
    /**
     * Is raised if touchMove on document.
     * @param event The event of touchMove.
     */
    protected __onTouchMove(event: TouchEvent): void;
    /**
     * Is raised if touchEnd on document.
     * @param event The event of touchEnd.
     */
    protected __onTouchEnd(event: TouchEvent): void;
    /**
     * Transforms client coordinates of mouse and touch events into the coordinate system of the target element.
     * Respects translation and sscaling.
     * @param clientX The x coordinate.
     * @param clientY The y coodinate.
     * @param targetElement The target element.
     */
    protected __transformEventCoords(clientX: number, clientY: number, targetElement?: Element): {
        x: number;
        y: number;
    };
    /**
     * Is called from onTouchStart and onMouseDown.
     * @param x The x coordinate of the mouse or touch.
     * @param y The y coordinate of the mouse or touch.
     */
    protected __userInteractionStart(x: number, y: number): void;
    /**
     * Is called from onTouchMove and onMouseMove.
     * @param x The x coordinate of the mouse or touch.
     * @param y The y coordinate of the mouse or touch.
     */
    protected __userInteractionMove(x: number, y: number): void;
    /**
     * Is called from onTouchEnd and onMouseUp.
     * Resets this.__drawing on canvas.
     * Zoom mode:    Clears the canvas.
     * Pan mode:     resets this.__drawing.
     */
    protected __userInteractionEnd(): void;
    /**
     * MultitouchStarting.
     * @param event The touch event if more than one finger is touched.
     */
    protected __userMultitouchStart(event: TouchEvent): void;
    /**
     * MultitouchMoving.
     * @param event The touch event if more than one finger is touched.
     */
    protected __userMultitouchMove(event: TouchEvent): void;
    /**
     * MultitouchEnd.
     * @param event The touch event if more than one finger is touched.
     */
    protected __userMultitouchEnd(event: TouchEvent): void;
    /**
     * Is raised if mouseDown on canvasDrawing.
     * @param event The event of mouseDown.
     */
    protected __onMouseWheel(event: WheelEvent): void;
    /**
     * Sets the xAxis of the xAxisFormat order attribute.
     * @param xAxis The new xAxisFormat method.
     */
    setXAxisFormat(valueNew: TcHmi.IFunction<string> | null): void;
    /** The watch callback for the xAxisFormat object resolver. */
    protected __onResolverForXAxisFormatWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.IFunction<string>>): void;
    /** Gets the current xAxisFormat method. */
    getXAxisFormat(): TcHmi.IFunction<string> | null | undefined;
    /** Processes the current xAxisFormat method*/
    protected __processXAxisFormat(): void;
    /**
     * Is raised if the x axis label is drawing.
     */
    protected __xAxisCallbackFunction(result: number): string | null;
    /** Helper fuction to set stopMode to default */
    protected resetManipulation(): void;
    /**
     * Stop getting new data. Get only the actually data clipping. Sets new values for __internalStart and __internalEnd.
     * Alias for pause
     */
    stop(): void;
    /**
     * Stop getting new data. Get only the actually data clipping. Sets new values for __internalStart and __internalEnd.
     * Has an alias named stop()
     */
    pause(): void;
    /** Reset the timespan before zooming. */
    resetZoom(): void;
    /**
     * Reset the zoom and set actualStart and actualEnd to start and end value.
     * Alias for play.
     */
    reset(): void;
    /**
     * Reset the zoom and set actualStart and actualEnd to start and end value.
     * Has an alias named reset()
     */
    play(): void;
    /** Set the isEnable attribute to false at start, panx, panxy, zoomx, zoomxy and to true at stop menuButton. */
    /**
     * Sets the background value and calls the associated process function (processSectionsBackground).
     * @param valueNew The new value for the background attribute as object.
     */
    setSectionsBackgroundColor(valueNew: TcHmi.Color | null): void;
    /** The watch callback for the sectionsBackgroundColor object resolver. */
    protected __onResolverForSectionsBackgroundColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.Color>): void;
    /** Returns the current background value. */
    getSectionsBackgroundColor(): TcHmi.Color | null | undefined;
    /** Processes the current border-color attribute. */
    protected __processSectionsBackgroundColor(): void;
    /**
     * Sets the value of yAxisWidth
     * @param valueNew The new value for yAxisWidth
     */
    setYAxisWidth(valueNew: number | null): void;
    /** Gets the value of yAxisWidth */
    getYAxisWidth(): number | undefined;
    /** Processes yAxisWidth */
    protected __processYAxisWidth(): void;
    /**
     * Sets the value of yLabelFontFamily
     * @param valueNew The new value for yLabelFontFamily
     */
    setYLabelFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /** Gets the value of yLabelFontFamily */
    getYLabelFontFamily(): string | undefined;
    /** Processes yLabelFontFamily */
    protected __processYLabelFontFamily(): void;
    /**
     * Sets the value of yLabelFontSize
     * @param valueNew The new value for yLabelFontSize
     */
    setYLabelFontSize(valueNew: number | null): void;
    /** Gets the value of yLabelFontSize */
    getYLabelFontSize(): number | undefined;
    /** Processes yLabelFontSize */
    protected __processYLabelFontSize(): void;
    /**
     * DEPRECATED! yLabelFontSizeUnit is always 'px'. This function exists purely to avoid errors in existing projects.
     * @deprecated yLabelFontSizeUnit is always 'px'.
     */
    setYLabelFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /** Gets the value of yLabelFontSizeUnit */
    getYLabelFontSizeUnit(): string;
    /**
     * Sets the value of yLabelFontWeight
     * @param valueNew The new value for yLabelFontWeight
     */
    setYLabelFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /** Gets the value of yLabelFontWeight */
    getYLabelFontWeight(): TcHmi.FontWeight | undefined;
    /** Processes yLabelFontWeight */
    protected __processYLabelFontWeight(): void;
    /**
     * Sets the value of yMainTickSteps
     * @param valueNew The new value for yMainTickSteps
     */
    setYMainTickSteps(valueNew: number | null): void;
    /** Gets the value of yMainTickSteps */
    getYMainTickSteps(): number | undefined;
    /** Processes yMainTickSteps */
    protected __processYMainTickSteps(): void;
    /**
     * Sets the value of showYSubTicks
     * @param valueNew The new value for showYSubTicks
     */
    setShowYSubTicks(valueNew: boolean | null): void;
    /** Gets the value of showYSubTicks */
    getShowYSubTicks(): boolean | undefined;
    /** Processes showYSubTicks */
    protected __processShowYSubTicks(): void;
    /**
     * Sets the value of ySubTickSteps
     * @param valueNew The new value for ySubTickSteps
     */
    setYSubTickSteps(valueNew: number | null): void;
    /** Gets the value of ySubTickSteps */
    getYSubTickSteps(): number | null | undefined;
    /** Processes ySubTickSteps */
    protected __processYSubTickSteps(): void;
    /**
     * Sets the value of showXAxis
     * @param valueNew The new value for showXAxis
     */
    setShowXAxis(valueNew: boolean | null): void;
    /** Gets the value of showXAxis */
    getShowXAxis(): boolean | undefined;
    /** Processes showXAxis */
    protected __processShowXAxis(): void;
    /**
     * Sets the value of xShowLabels
     * @param valueNew The new value for xShowLabels
     */
    setXShowLabels(valueNew: boolean | null): void;
    /** Gets the value of xShowLabels */
    getXShowLabels(): boolean | undefined;
    /** Processes xShowLabels */
    protected __processXShowLabels(): void;
    /**
     * Sets the value of xMainTickSteps
     * @param valueNew The new value for xMainTickSteps
     */
    setXMainTickSteps(valueNew: number | null): void;
    /** Gets the value of xMainTickSteps */
    getXMainTickSteps(): number | undefined;
    /** Processes xMainTickSteps */
    protected __processXMainTickSteps(): void;
    /**
     * Sets the value of showXSubTicks
     * @param valueNew The new value for showXSubTicks
     */
    setShowXSubTicks(valueNew: boolean | null): void;
    /** Gets the value of showXSubTicks */
    getShowXSubTicks(): boolean | undefined;
    /** Processes showXSubTicks */
    protected __processShowXSubTicks(): void;
    /**
     * Sets the value of xSubTickSteps
     * @param valueNew The new value for xSubTickSteps
     */
    setXSubTickSteps(valueNew: number | null): void;
    /** Gets the value of xSubTickSteps */
    getXSubTickSteps(): number | null | undefined;
    /** Processes xSubTickSteps */
    protected __processXSubTickSteps(): void;
    /**
     * Sets the value of xLabelFontFamily
     * @param valueNew The new value for xLabelFontFamily
     */
    setXLabelFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /** Gets the value of xLabelFontFamily */
    getXLabelFontFamily(): string | undefined;
    /** Processes xLabelFontFamily */
    protected __processXLabelFontFamily(): void;
    /**
     * Sets the value of xLabelFontSize
     * @param valueNew The new value for xLabelFontSize
     */
    setXLabelFontSize(valueNew: number | null): void;
    /** Gets the value of xLabelFontSize */
    getXLabelFontSize(): number | undefined;
    /** Processes xLabelFontSize */
    protected __processXLabelFontSize(): void;
    /**
     * DEPRECATED! xLabelFontSizeUnit is always 'px'. This function exists purely to avoid errors in existing projects.
     */
    setXLabelFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /** Gets the value of xLabelFontSizeUnit */
    getXLabelFontSizeUnit(): string;
    /**
     * Sets the value of xLabelFontWeight
     * @param valueNew The new value for xLabelFontWeight
     */
    setXLabelFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /** Gets the value of xLabelFontWeight */
    getXLabelFontWeight(): TcHmi.FontWeight | undefined;
    /** Processes xLabelFontWeight */
    protected __processXLabelFontWeight(): void;
    /**
     * Sets the xLabelFontColor value and calls the associated process function (processXLabelFontColor).
     * @param valueNew The new value for the xLabelFontColor attribute as object.
     */
    setXLabelFontColor(valueNew: TcHmi.SolidColor | null): void;
    /** The watch callback for the xLabelFontColor object resolver. */
    protected __onResolverForXLabelFontColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /** Returns the current xLabelFontColor value. */
    getXLabelFontColor(): TcHmi.SolidColor | null | undefined;
    /** Processes the current xLabelFontColor attribute. */
    protected __processXLabelFontColor(): void;
    /**
     * Sets the value of xAxisWidth
     * @param valueNew The new value for xAxisWidth
     */
    setXAxisWidth(valueNew: number | null): void;
    /** Gets the value of xAxisWidth */
    getXAxisWidth(): number | undefined;
    /** Processes xAxisWidth */
    protected __processXAxisWidth(): void;
    /**
     * Sets the xAxisColor value and calls the associated process function (processXAxisColor).
     * @param valueNew The new value for the xAxisColor attribute as object.
     */
    setXAxisColor(valueNew: TcHmi.SolidColor | null): void;
    /** The watch callback for the xAxisColor object resolver. */
    protected __onResolverForXAxisColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /** Returns the current xAxisColor value. */
    getXAxisColor(): TcHmi.SolidColor | null | undefined;
    /** Processes the current xAxisColor attribute. */
    protected __processXAxisColor(): void;
    /**
     * Sets the value of showXAxisName
     * @param valueNew The new value for showXAxisName
     */
    setShowXAxisName(valueNew: boolean | null): void;
    /** Gets the value of showXAxisName */
    getShowXAxisName(): boolean | undefined;
    /** Processes showXAxisName */
    protected __processShowXAxisName(): void;
    /**
     * Sets the value of xAxisName
     * @param valueNew The new value for xAxisName
     */
    setXAxisName(valueNew: string | null): void;
    /** Gets the value of xAxisName */
    getXAxisName(): string | null | undefined;
    /** Processes xAxisName */
    protected __processXAxisName(): void;
    /**
     * Sets the value of xAxisNameFontFamily
     * @param valueNew The new value for xAxisNameFontFamily
     */
    setXAxisNameFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /** Gets the value of xAxisNameFontFamily */
    getXAxisNameFontFamily(): string | undefined;
    /** Processes xAxisNameFontFamily */
    protected __processXAxisNameFontFamily(): void;
    /**
     * Sets the value of xAxisNameFontSize
     * @param valueNew The new value for xAxisNameFontSize
     */
    setXAxisNameFontSize(valueNew: number | null): void;
    /** Gets the value of xAxisNameFontSize */
    getXAxisNameFontSize(): number | undefined;
    /** Processes xAxisNameFontSize */
    protected __processXAxisNameFontSize(): void;
    /**
     * DEPRECATED! xAxisNameFontSizeUnit is always 'px'. This function exists purely to avoid errors in existing projects.
     */
    setXAxisNameFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /** Gets the value of xAxisNameFontSizeUnit */
    getXAxisNameFontSizeUnit(): string;
    /**
     * Sets the value of xAxisNameFontWeight
     * @param valueNew The new value for xAxisNameFontWeight
     */
    setXAxisNameFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /** Gets the value of xAxisNameFontWeight */
    getXAxisNameFontWeight(): TcHmi.FontWeight | undefined;
    /** Processes xAxisNameFontWeight */
    protected __processXAxisNameFontWeight(): void;
    /**
     * Sets the xAxisNameFontColor value and calls the associated process function (processXAxisNameFontColor).
     * @param valueNew The new value for the xAxisNameFontColor attribute as object.
     */
    setXAxisNameFontColor(valueNew: TcHmi.SolidColor | null): void;
    /** The watch callback for the xAxisNameFontColor object resolver. */
    protected __onResolverForXAxisNameFontColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /** Returns the current xAxisNameFontColor value. */
    getXAxisNameFontColor(): TcHmi.SolidColor | null | undefined;
    /** Processes the current xAxisNameFontColor attribute. */
    protected __processXAxisNameFontColor(): void;
    /**
     * Sets the value of the member variable 'yAxis' if the new value is not equal to the current value
     * and calls the associated process function (processYAxis) after that.
     * @param valueNew The new value for yAxis.
     */
    setYAxis(valueNew: YAxis[] | null): void;
    /** The watch callback for the yAxis object resolver. */
    protected __onResolverForYAxisWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<YAxis[]>): void;
    /** Returns the current value of the member variable yAxis. */
    getYAxis(): YAxis[] | null | undefined;
    /** Processes the current value of yAxis. */
    protected __processYAxis(): void;
    /**
     * Sets the value of the member variable 'lineGraphDescriptions' if the new value is not equal to the current value
     * and calls the associated process function (processlineGraphDescriptions) after that.
     * @param valueNew The new value for lineGraphDescriptions.
     */
    setLineGraphDescriptions(valueNew: LineGraphDescription[] | null): void;
    /** The watch callback for the lineGraphDescriptions object resolver. */
    protected __onResolverForLineGraphDescriptionsWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<LineGraphDescription[]>): void;
    /** Returns the current value of the member variable lineGraphDescriptions. */
    getLineGraphDescriptions(): LineGraphDescription[] | null | undefined;
    /** Processes the current value of lineGraphDescriptions. */
    __processLineGraphDescriptions(): void;
    /**
     * Sets the value of showGrid
     * @param valueNew The new value for showGrid
     */
    setShowGrid(valueNew: boolean | null): void;
    /** Gets the value of showGrid */
    getShowGrid(): boolean | undefined;
    /** Processes showGrid */
    protected __processShowGrid(): void;
    /**
     * Sets the gridBackgroundColor value and calls the associated process function (processGridBackgroundColor).
     * @param valueNew The new value for the gridBackgroundColor attribute as object.
     */
    setGridBackgroundColor(valueNew: TcHmi.SolidColor | null): void;
    /** The watch callback for the gridBackgroundColor object resolver. */
    protected __onResolverForGridBackgroundColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /** Returns the current gridBackgroundColor value. */
    getGridBackgroundColor(): TcHmi.SolidColor | null | undefined;
    /** Processes the current gridBackgroundColor attribute. */
    protected __processGridBackgroundColor(): void;
    /**
     * Sets the value of gridShowHorizontalLines
     * @param valueNew The new value for gridShowHorizontalLines
     */
    setGridShowHorizontalLines(valueNew: boolean | null): void;
    /** Gets the value of gridShowHorizontalLines */
    getGridShowHorizontalLines(): boolean | undefined;
    /** Processes gridShowHorizontalLines */
    protected __processGridShowHorizontalLines(): void;
    /**
     * Sets the value of gridShowVerticalLines
     * @param valueNew The new value for gridShowVerticalLines
     */
    setGridShowVerticalLines(valueNew: boolean | null): void;
    /** Gets the value of gridShowVerticalLines */
    getGridShowVerticalLines(): boolean | undefined;
    /** Processes gridShowVerticalLines */
    protected __processGridShowVerticalLines(): void;
    /**
     * Sets the value of gridLineWidth
     * @param valueNew The new value for gridLineWidth
     */
    setGridLineWidth(valueNew: number | null): void;
    /** Gets the value of gridLineWidth */
    getGridLineWidth(): number | undefined;
    /** Processes gridLineWidth */
    protected __processGridLineWidth(): void;
    /**
     * Sets the value of gridLineStyle
     * @param valueNew The new value for gridLineStyle
     */
    setGridLineStyle(valueNew: keyof typeof LineStyle | null): void;
    /** Gets the value of gridLineStyle */
    getGridLineStyle(): "Dotted" | "Dashed" | "Solid" | undefined;
    /** Processes gridLineStyle */
    protected __processGridLineStyle(): void;
    /**
     * Sets the gridLineColor value and calls the associated process function (processGridLineColor).
     * @param valueNew The new value for the gridLineColor attribute as object.
     */
    setGridLineColor(valueNew: TcHmi.SolidColor | null): void;
    /** The watch callback for the gridLineColor object resolver. */
    protected __onResolverForGridLineColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /** Returns the current gridLineColor value. */
    getGridLineColor(): TcHmi.SolidColor | null | undefined;
    /** Processes the current gridLineColor attribute. */
    protected __processGridLineColor(): void;
    /**
     * Sets the value of subgridShowHorizontalLines
     * @param valueNew The new value for subgridShowHorizontalLines
     */
    setSubgridShowHorizontalLines(valueNew: boolean | null): void;
    /** Gets the value of subgridShowHorizontalLines */
    getSubgridShowHorizontalLines(): boolean | undefined;
    /** Processes subgridShowHorizontalLines */
    protected __processSubgridShowHorizontalLines(): void;
    /**
     * Sets the value of subgridShowVerticalLines
     * @param valueNew The new value for subgridShowVerticalLines
     */
    setSubgridShowVerticalLines(valueNew: boolean | null): void;
    /** Gets the value of subgridShowVerticalLines */
    getSubgridShowVerticalLines(): boolean | undefined;
    /** Processes subgridShowVerticalLines */
    protected __processSubgridShowVerticalLines(): void;
    /**
     * Sets the value of subgridLineWidth
     * @param valueNew The new value for subgridLineWidth
     */
    setSubgridLineWidth(valueNew: number | null): void;
    /** Gets the value of subgridLineWidth */
    getSubgridLineWidth(): number | undefined;
    /** Processes subgridLineWidth */
    protected __processSubgridLineWidth(): void;
    /**
     * Sets the value of subgridLineStyle
     * @param valueNew The new value for subgridLineStyle
     */
    setSubgridLineStyle(valueNew: keyof typeof LineStyle | null): void;
    /** Gets the value of subgridLineStyle */
    getSubgridLineStyle(): "Dotted" | "Dashed" | "Solid" | undefined;
    /** Processes subgridLineStyle */
    protected __processSubgridLineStyle(): void;
    /**
     * Sets the subgridLineColor value and calls the associated process function (processSubgridLineColor).
     * @param valueNew The new value for the subgridLineColor attribute as object.
     */
    setSubgridLineColor(valueNew: TcHmi.SolidColor | null): void;
    /** The watch callback for the subgridLineColor object resolver. */
    protected __onResolverForSubgridLineColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /** Returns the current subgridLineColor value. */
    getSubgridLineColor(): TcHmi.SolidColor | null | undefined;
    /** Processes the current subgridLineColor attribute. */
    protected __processSubgridLineColor(): void;
    /**
     * Sets the value of showMenuBar
     * @param valueNew The new value for showMenuBar
     */
    setShowMenuBar(valueNew: boolean | null): void;
    /** Gets the value of showMenuBar */
    getShowMenuBar(): boolean | undefined;
    /** Processes showMenuBar */
    protected __processShowMenuBar(): void;
    /**
     * Sets the value of menuBarPosition
     * @param valueNew The new value for menuBarPosition
     */
    setMenuBarPosition(valueNew: keyof typeof MenuBarPosition | null): void;
    /** Gets the value of menuBarPosition */
    getMenuBarPosition(): "Top" | "Bottom" | undefined;
    /** Processes menuBarPosition. */
    protected __processMenuBarPosition(): void;
    /**
     * Sets the font size and calls the associated process function (processMenuBarLabelFontSize).
     * @param valueNew The new value for menuBarLabelFontSize.
     */
    setMenuBarLabelFontSize(valueNew: number | null): void;
    /** Returns the current value of menuBarLabelFontSize.  */
    getMenuBarLabelFontSize(): number | undefined;
    /** Processes the current menuBarLabelFontSize attribute value. */
    protected __processMenuBarLabelFontSize(calcButtons?: boolean): void;
    /**
     * DEPRECATED! menuBarLabelFontSizeUnit is always 'px'. This function exists purely to avoid errors in existing projects.
     * @deprecated menuBarLabelFontSizeUnit is always 'px'.
     */
    setMenuBarLabelFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /** Returns the current value of menuBarLabelFontSizeUnit. */
    getMenuBarLabelFontSizeUnit(): string;
    /**
     * Sets the font family and calls the associated process function (processMenuBarLabelFontFamily).
     * @param valueNew The new value for menuBarLabelFontFamily.
     */
    setMenuBarLabelFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /** Returns the current value of menuBarLabelFontFamily. */
    getMenuBarLabelFontFamily(): string | null | undefined;
    /** Processes the current menuBarLabelFontFamily attribute value. */
    protected __processMenuBarLabelFontFamily(calcButtons?: boolean): void;
    /**
     * Sets the font style and calls the associated process function (processMenuBarLabelFontStyle).
     * @param valueNew The new value for menuBarLabelFontStyle.
     */
    setMenuBarLabelFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /** Returns the current value of menuBarLabelFontStyle. */
    getMenuBarLabelFontStyle(): TcHmi.FontStyle | undefined;
    /** Processes the current menuBarLabelFontStyle attribute value. */
    protected __processMenuBarLabelFontStyle(calcButtons?: boolean): void;
    /**
     * Sets the font weight and calls the associated process function (processMenuBarLabelFontWeight).
     * @param valueNew The new value for menuBarLabelFontWeight.
     */
    setMenuBarLabelFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /** Returns the current value of menuBarLabelFontWeight. */
    getMenuBarLabelFontWeight(): TcHmi.FontWeight | undefined;
    /** Processes the current menuBarLabelFontWeight attribute value. */
    protected __processMenuBarLabelFontWeight(calcButtons?: boolean): void;
    /**
     * Sets the menuBarLabelFont color and calls the associated process function (processMenuBarLabelFontColor).
     * @param valueNew The new value for menuBarLabelFontFColor.
     */
    setMenuBarLabelFontColor(valueNew: TcHmi.SolidColor | null): void;
    /** The watch callback for the menuBarLabelFontColor object resolver. */
    protected __onResolverForMenuBarLabelFontColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /** Returns the current value of menuBarLabelFontColor. */
    getMenuBarLabelFontColor(): TcHmi.SolidColor | null | undefined;
    /** Processes the current menuBarLabelFontColor attribute value. */
    protected __processMenuBarLabelFontColor(calcButtons?: boolean): void;
    /**
     * Sets the value of showTooltip
     * @param valueNew The new value for showTooltip
     */
    setShowTooltip(valueNew: boolean | null): void;
    /** Gets the value of showTooltip */
    getShowTooltip(): boolean | undefined;
    /** Processes showTooltip */
    protected __processShowTooltip(): void;
    /**
     * Sets the value of the tooltipFormat order attribute.
     * @param value The new tooltipFormat method.
     */
    setTooltipFormat(valueNew: TcHmi.IFunction<string> | null): void;
    /** The watch callback for the tooltipFormat object resolver. */
    protected __onResolverForTooltipFormatWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.IFunction<string>>): void;
    /** Gets the current tooltipFormat method. */
    getTooltipFormat(): TcHmi.IFunction<string> | null | undefined;
    /** Processes the current tooltipFormat method */
    protected __processTooltipFormat(): void;
    /**
     * Executes the current tooltipErrorFormat function.
     * @param time The current time of the mouse.
     * @param points The array of points at the current mouse position.
     * @param errors The array of errors at the current mouse position.
     */
    private __executeTooltipFormatFunction;
    /**
     * Sets the value of tooltipFontFamily
     * @param valueNew The new value for tooltipFontFamily
     */
    setTooltipFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /** Gets the value of tooltipFontFamily */
    getTooltipFontFamily(): string | undefined;
    /** Processes tooltipFontFamily */
    protected __processTooltipFontFamily(): void;
    /**
     * Sets the value of tooltipFontSize
     * @param valueNew The new value for tooltipFontSize
     */
    setTooltipFontSize(valueNew: number | null): void;
    /** Gets the value of tooltipFontSize */
    getTooltipFontSize(): number | undefined;
    /** Processes tooltipFontSize */
    protected __processTooltipFontSize(): void;
    /**
     * DEPRECATED! tooltipFontSizeUnit is always 'px'. This function exists purely to avoid errors in existing projects.
     * @deprecated tooltipFontSizeUnit is always 'px'.
     */
    setTooltipFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /** Gets the value of tooltipFontSizeUnit */
    getTooltipFontSizeUnit(): string;
    /**
     * Sets the value of tooltipFontWeight
     * @param valueNew The new value for tooltipFontWeight
     */
    setTooltipFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /** Gets the value of tooltipFontWeight */
    getTooltipFontWeight(): TcHmi.FontWeight | undefined;
    /** Processes tooltipFontWeight */
    protected __processTooltipFontWeight(): void;
    /**
     * Sets the tooltipFontColor value and calls the associated process function (processTooltipFontColor).
     * @param valueNew The new value for the tooltipFontColor attribute as object.
     */
    setTooltipFontColor(valueNew: TcHmi.SolidColor | null): void;
    /** The watch callback for the tooltipFontColor object resolver. */
    protected __onResolverForTooltipFontColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /** Returns the current tooltipFontColor value. */
    getTooltipFontColor(): TcHmi.SolidColor | null | undefined;
    /** Processes the current tooltipFontColor attribute. */
    protected __processTooltipFontColor(): void;
    /**
     * Sets the background value and calls the associated process function.
     * @param valueNew The new value for the background attribute as object.
     */
    setTooltipBackgroundColor(valueNew: TcHmi.Color | null): void;
    /** The watch callback for the tooltipBackgroundColor object resolver.*/
    protected __onResolverForTooltipBackgroundColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.Color>): void;
    /** Returns the current background value. */
    getTooltipBackgroundColor(): TcHmi.Color | null | undefined;
    /** Processes the current border-color attribute. */
    protected __processTooltipBackgroundColor(): void;
    /**
     * Sets the interval and calls the associated process function (processInterval).
     * @param valueNew The new value for interval.
     */
    setInterval(valueNew: number | null): void;
    /** Returns the current value of interval. */
    getInterval(): number | undefined;
    /** Processes the current interval attribute value. */
    protected __processInterval(): void;
    /**
     * Sets the value of start
     * @param valueNew The new value for start
     */
    setStart(valueNew: string | null | undefined): void;
    /** Gets the value of start */
    getStart(): string | null | undefined;
    /** Returns the actual StatTime. */
    getActualStartTime(): string | null;
    /** Processes start */
    protected __processStart(): void;
    /**
     * Sets the value of startPresets
     * @param valueNew The new value for startPresets
     */
    setStartPresets(valueNew: TimeOrTimespanPreset[] | null | undefined): void;
    /** The watch callback for the startPresets object resolver. */
    protected __onResolverForStartPresetsWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TimeOrTimespanPreset[]>): void;
    /** Gets the value of startPresets */
    getStartPresets(): TimeOrTimespanPreset[] | null | undefined;
    /** Processes startPresets */
    protected __processStartPresets(): void;
    /**
     * Sets the value of end
     * @param valueNew The new value for end
     */
    setEnd(valueNew: string | null | undefined): void;
    /** Gets the value of end */
    getEnd(): string | null | undefined;
    /** Returns the actual endTime. */
    getActualEndTime(): string | null;
    /**
     * Sets the value of endPresets
     * @param valueNew The new value for endPresets
     */
    setEndPresets(valueNew: TimeOrTimespanPreset[] | null | undefined): void;
    /** The watch callback for the endPresets object resolver. */
    protected __onResolverForEndPresetsWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TimeOrTimespanPreset[]>): void;
    /** Gets the value of endPresets */
    getEndPresets(): TimeOrTimespanPreset[] | null | undefined;
    /** Processes endPresets */
    protected __processEndPresets(): void;
    __moveUtcToTimeZone(isoString: string): string;
    __moveTimeZoneToUtc(timeZoneIsoString: string): string | null;
    /** Processes end */
    protected __processEnd(): void;
    /**
     * Sets the value of the member variable 'referenceLines' if the new value is not equal to the current value
     * and calls the associated process function (processReferenceLines) after that.
     * @param valueNew The new value for referenceLines.
     */
    setReferenceLines(valueNew: ReferenceLine[] | null): void;
    /** The watch callback for the referenceLines object resolver. */
    protected __onResolverForReferenceLinesWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<ReferenceLine[]>): void;
    /** Returns the current value of the member variable referenceLines. */
    getReferenceLines(): ReferenceLine[] | null | undefined;
    /** Processes the current value of referenceLines. */
    protected __processReferenceLines(): void;
    /**
     * Sets the value of referenceLinesPosition
     * @param valueNew The new value for referenceLinesPosition
     * Possible Values: Left, Right
     */
    setReferenceLinesPosition(valueNew: string | null): void;
    /** Gets the value of referenceLinesPosition */
    getReferenceLinesPosition(): string | undefined;
    /** Processes referenceLinesPosition */
    protected __processReferenceLinesPosition(): void;
    /** Gets the jquery element of menubar */
    getMenuBarElement(): JQuery<HTMLElement>;
    /** Gets the jquery element of template root */
    getTemplateRootElement(): JQuery<HTMLElement>;
    /**
     * Sets the mouseMode to zooming or panning
     * @param valueNew The new value for mouseMode
     */
    setMouseMode(valueNew: MouseMode | keyof typeof MouseMode | null): void;
    /** Gets the value of mouseMode */
    getMouseMode(): "None" | "ZoomX" | "ZoomXY" | "PanX" | "PanXY" | undefined;
    /** Processes the current value of attribute symbolList. */
    protected __processMouseMode(): void;
    /**
     * Sets the ServerDomain
     * @param valueNew The new value for mouseMode
     */
    setServerDomain(valueNew: string | null): void;
    /** Gets the value of ServerDomain as configured */
    getServerDomain(): string | null | undefined;
    /** Processes the current value of attribute ServerDomain. */
    protected __processServerDomain(): void;
    /** Gets the value of ServerDomain as resolved (after autodetection) */
    getResolvedServerDomain(): string | undefined;
    /** Processes the current enabled state. */
    __processIsEnabled(): void;
    /**
     * Sets the value of showLegend
     * @param valueNew The new value for showLegend
     */
    setShowLegend(valueNew: boolean | null): void;
    /** Gets the value of showLegend */
    getShowLegend(): boolean | undefined;
    /** Processes showLegend */
    protected __processShowLegend(openWebsocket?: boolean): void;
    /**
     * Sets the value of legendFontFamily
     * @param valueNew The new value for legendFontFamily
     */
    setLegendFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /** Gets the value of legendFontFamily */
    getLegendFontFamily(): string | undefined;
    /** Processes legendFontFamily */
    protected __processLegendFontFamily(): void;
    /**
     * Sets the value of legendFontSize
     * @param valueNew The new value for legendFontSize
     */
    setLegendFontSize(valueNew: number | null): void;
    /** Gets the value of legendFontSize */
    getLegendFontSize(): number | undefined;
    /** Processes legendFontSize */
    protected __processLegendFontSize(): void;
    /** Gets the value of legendFontSizeUnit */
    getLegendFontSizeUnit(): string;
    /**
     * Sets the legend font style and calls the associated process function.
     * @param valueNew The new value for legendFontStyle
     */
    setLegendFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /** Returns the current value of legendFontStyle. */
    getLegendFontStyle(): TcHmi.FontStyle | undefined;
    /** Processes the current legendFontStyle. */
    protected __processLegendFontStyle(): void;
    /**
     * Sets the value of legendFontWeight
     * @param valueNew The new value for legendFontWeight
     */
    setLegendFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /** Gets the value of legendFontWeight */
    getLegendFontWeight(): TcHmi.FontWeight | undefined;
    /** Processes legendFontWeight */
    protected __processLegendFontWeight(): void;
    /**
     * Sets the value of showStatisticalData
     * @param valueNew The new value for showStatisticalData
     */
    setShowStatisticalData(valueNew: boolean | null): void;
    /** Gets the value of showStatisticalData */
    getShowStatisticalData(): boolean | undefined;
    /** Processes showStatisticalData */
    protected __processShowStatisticalData(): void;
    /**
     * Sets the value of the member variable 'statisticalDataConfiguration' if the new value is not equal to the current value
     * and calls the associated process function (processStatisticalDataConfiguration) after that.
     * @param valueNew The new value for statisticalDataConfiguration.
     */
    setStatisticalDataConfiguration(valueNew: StatisticalDataConfiguration | null): void;
    /** The watch callback for the statisticalDataConfiguration object resolver. */
    protected __onResolverForStatisticalDataConfigurationWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<StatisticalDataConfiguration>): void;
    /** Returns the current value of the member variable statisticalDataConfiguration. */
    getStatisticalDataConfiguration(): StatisticalDataConfiguration | null | undefined;
    /** Processes the current value of statisticalDataConfiguration. */
    __processStatisticalDataConfiguration(): void;
    static MouseMode: typeof MouseMode;
    static MenuBarPosition: typeof MenuBarPosition;
    static Datatype: typeof Datatype;
    static Position: typeof Position;
    static LineStyle: typeof LineStyle;
    static AxisLabeling: typeof AxisLabeling;
    static Orientation: typeof Orientation;
    static FillMode: typeof FillMode;
    static ValueUnit: typeof ValueUnit;
}
export interface YAxis {
    id: number;
    showAxis: boolean;
    position: Position;
    logarithmicScale: boolean;
    axisLabeling: AxisLabeling;
    mainTickMinValue?: number;
    mainTickMaxValue?: number;
    showLabels?: boolean;
    labelFontColor?: TcHmi.SolidColor;
    axisColor?: TcHmi.SolidColor;
    showAxisName?: boolean;
    axisName?: string;
    axisNameFontFamily?: TcHmi.FontFamily | null;
    axisNameFontSize?: number;
    axisNameFontSizeUnit?: TcHmi.FontSizeUnit;
    axisNameFontWeight?: TcHmi.FontWeight;
    axisNameFontColor?: TcHmi.SolidColor;
    decimalPlaces?: number;
    unit?: string;
    autoScaling?: boolean;
    showAxisIfNoData?: boolean;
}
export interface YAxisInternal extends YAxis {
    isSelected: boolean;
}
export interface LineGraphDescription {
    symbol: string;
    yAxisId?: number;
    lineWidth?: number;
    legendName?: string;
    lineColor?: TcHmi.SolidColor;
    pointDot?: boolean;
    pointDotInStopMode?: boolean;
    pointDotRadius?: number;
    pointDotFillColor?: TcHmi.SolidColor;
    pointDotStrokeWidth?: number;
    pointDotStrokeColor?: TcHmi.SolidColor;
    scaleFactor?: number;
    fillMode?: FillMode;
    fillColor?: TcHmi.SolidColor;
    /** Fill transparency for the fill area (0-255) */
    fillTransparency?: number;
    colorRanges?: ColorRangesEngineering[];
    defaultVisibility?: boolean;
}
export interface LineGraphDescriptionInternal extends LineGraphDescription {
    colorRanges?: ColorRanges[];
    isSelected: boolean;
}
export interface Point {
    x: number;
    y?: number;
    isArea: boolean;
    bindPoints: boolean;
}
export interface ServerPoint {
    x: number;
    y?: number;
    error?: number;
}
export interface TooltipInformationObject {
    point: {
        x: number;
        y: number;
    };
    symbolname: string;
    yAxis: YAxis;
}
export interface TooltipErrorInformationObject {
    yAxis: null | YAxis;
    beginTime: number;
    endTime: number;
    errorCode: number | undefined | null;
    symbolname: string;
}
export interface ReferenceLine {
    name: string;
    show: boolean;
    yAxisId?: number;
    value: number;
    valueUnit?: ValueUnit;
    orientation: Orientation;
    locked?: boolean;
    showTooltip?: boolean;
    highlightDataPoints?: boolean;
    color?: TcHmi.SolidColor;
    lineWidth?: number;
    showLabel?: boolean;
    labelHorizontalAlignment?: TcHmi.HorizontalAlignment;
    labelVerticalAlignment?: TcHmi.VerticalAlignment;
    labelFontFamily?: TcHmi.FontFamily;
    labelFontSize?: number;
    labelFontSizeUnit?: TcHmi.FontSizeUnit;
    labelFontWeight?: TcHmi.FontWeight;
}
export interface ColorRangesEngineering {
    color: TcHmi.SolidColor;
    expression: TcHmi.Filter | null | undefined;
}
export interface ColorRanges extends ColorRangesEngineering {
    filterInstance?: TcHmi.FilterInstance;
}
export interface TimeOrTimespanPreset {
    name: string;
    value: string;
}
export interface StatisticalDataConfiguration {
    minimum: StatisticalDataField;
    maximum: StatisticalDataField;
    average: StatisticalDataField;
}
export interface StatisticalDataField {
    showColumn: boolean;
    decimalPlaces?: number;
    unit?: string;
}
export { TcHmiTrendLineChart as Control };
declare const _TcHmiTrendLineChart: typeof TcHmiTrendLineChart;
type tTcHmiTrendLineChart = TcHmiTrendLineChart;
type tMouseMode = MouseMode;
type tMenuBarPosition = MenuBarPosition;
type tDatatype = Datatype;
type tPosition = Position;
type tLineStyle = LineStyle;
type tAxisLabeling = AxisLabeling;
type tOrientation = Orientation;
type tFillMode = FillMode;
type tValueUnit = ValueUnit;
type tYAxis = YAxis;
type tLineGraphDescription = LineGraphDescription;
type tPoint = Point;
type tServerPoint = ServerPoint;
type tTooltipInformationObject = TooltipInformationObject;
type tTooltipErrorInformationObject = TooltipErrorInformationObject;
type tReferenceLine = ReferenceLine;
type tColorRangesEngineering = ColorRangesEngineering;
type tColorRanges = ColorRanges;
type tTimeOrTimespanPreset = TimeOrTimespanPreset;
type tStatisticalDataConfiguration = StatisticalDataConfiguration;
type tStatisticalDataField = StatisticalDataField;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiTrendLineChart: typeof _TcHmiTrendLineChart;
        type TcHmiTrendLineChart = tTcHmiTrendLineChart;
        namespace TcHmiTrendLineChart {
            type MouseMode = tMouseMode;
            type MenuBarPosition = tMenuBarPosition;
            type Datatype = tDatatype;
            type Position = tPosition;
            type LineStyle = tLineStyle;
            type AxisLabeling = tAxisLabeling;
            type Orientation = tOrientation;
            type FillMode = tFillMode;
            type ValueUnit = tValueUnit;
            type YAxis = tYAxis;
            type LineGraphDescription = tLineGraphDescription;
            type Point = tPoint;
            type ServerPoint = tServerPoint;
            type TooltipInformationObject = tTooltipInformationObject;
            type TooltipErrorInformationObject = tTooltipErrorInformationObject;
            type ReferenceLine = tReferenceLine;
            type ColorRangesEngineering = tColorRangesEngineering;
            type ColorRanges = tColorRanges;
            type TimeOrTimespanPreset = tTimeOrTimespanPreset;
            type StatisticalDataConfiguration = tStatisticalDataConfiguration;
            type StatisticalDataField = tStatisticalDataField;
        }
    }
}
//# sourceMappingURL=TcHmiTrendLineChart.esm.d.ts.map