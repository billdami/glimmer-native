import FrameElement from './src/dom/native/FrameElement';
import DocumentNode from './src/dom/nodes/DocumentNode';
import ElementNode from './src/dom/nodes/ElementNode';
export { ResolverDelegate } from './src/glimmer/context';
export { registerElements } from './src/dom/setup-registry';
export { createElement } from './src/dom/element-registry';
export { action } from './src/glimmer/decorators/action';
export { default as Navigation } from './src/glimmer/navigation';
export { default as DocumentNode } from './src/dom/nodes/DocumentNode';
export { default as ElementNode } from './src/dom/nodes/ElementNode';
export { default as NativeElementNode } from './src/dom/native/NativeElementNode';
export { default as Resolver } from './src/glimmer/resolver';
export { default as NativeCapabilities } from './src/glimmer/native-capabilities';
export { NativeModifierConstructor, NativeModifier, NativeModifierDefinitionState, NativeModifierInstance } from './src/glimmer/native-modifier-manager';
export default class Application {
    static document: DocumentNode;
    static rootFrame: FrameElement;
    static context: any;
    artifacts: any;
    aotRuntime: any;
    _scheduled: boolean;
    _rendering: boolean;
    resolver: any;
    resolverDelegate: any;
    main: any;
    static resolver: any;
    static resolverDelegate: any;
    static result: any;
    static _rendered: boolean;
    static aotRuntime: any;
    static outsideComponents: any;
    constructor(appFolder: any, components: any, helpers: any);
    renderMain(name: any, containerElement?: any, nextSibling?: any): void;
    static renderComponent(name: any, containerElement: any, nextSibling: any, state: any): ElementNode;
    static _renderPage(name: any, containerElement: any, nextSibling: any, compilable: any, data?: {}): ElementNode;
    static _renderComponent(name: any, containerElement: any, nextSibling: any, compilable: any, data?: {}): ElementNode;
    parseTemplates(folder: any): void;
    registerHelpers(helpers: any): void;
    registerState(components: any): Promise<void>;
    registerNativeComponent(name: any, value: any): void;
    registerHelper(name: any, func: any): void;
    boot(name: any): Promise<unknown>;
    scheduleRerender(): void;
    static _rerender(): Promise<void>;
}
