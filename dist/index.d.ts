import { AotRuntimeContext, CompilerArtifacts, Cursor, RenderResult } from '@glimmer/interfaces';
import { MacrosImpl, ProgramCompilationContext } from '@glimmer/opcode-compiler';
import { UpdatableReference } from '@glimmer/reference';
import FrameElement from './src/dom/native/FrameElement';
import DocumentNode from './src/dom/nodes/DocumentNode';
import ElementNode from './src/dom/nodes/ElementNode';
import { ResolverDelegate } from './src/glimmer/context';
import Resolver from './src/glimmer/resolver';
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
    static context: {
        program: ProgramCompilationContext;
        macros: MacrosImpl;
    };
    artifacts: CompilerArtifacts;
    aotRuntime: AotRuntimeContext;
    _scheduled: boolean;
    _rendering: boolean;
    resolver: Resolver;
    resolverDelegate: ResolverDelegate;
    main: any;
    static resolver: Resolver;
    static resolverDelegate: ResolverDelegate;
    static result: RenderResult;
    static _rendered: boolean;
    static aotRuntime: AotRuntimeContext;
    static outsideComponents: any;
    static listItems: any[];
    static renderedPage: any;
    static state: UpdatableReference<any>;
    static _scheduled: boolean;
    static _rendering: boolean;
    constructor(appFolder: any, components: any, helpers: any);
    static addListItem(viewNode: any): void;
    static renderPage(name: any, containerElement: any, nextSibling: any, state: any): ElementNode;
    static _renderPage(name: any, containerElement: any, nextSibling: any, compilable: any, data?: {}): ElementNode;
    static _renderComponent(name: string, cursor: Cursor, compilable: number, data: {}): ElementNode;
    parseTemplates(folder: any): void;
    registerHelpers(helpers: any): void;
    registerState(components: any): Promise<void>;
    registerNativeComponent(name: any, value: any): void;
    registerHelper(name: any, func: any): void;
    boot(name: any): Promise<unknown>;
    scheduleRerender(): void;
    static scheduleRerender(): Promise<void>;
    static rerenderForListView(): Promise<void>;
    static _rerender(): Promise<void>;
}
