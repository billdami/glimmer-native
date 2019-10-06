import { precompile, PrecompileOptions } from '@glimmer/compiler';
import { Component } from '@glimmer/opcode-compiler';
import { ASTPlugin, ASTPluginEnvironment } from '@glimmer/syntax';
import { strip } from '@glimmer/util';

import { GlimmerRewriter } from './ast/rewriter';

// export interface ASTPluginBuilder {
//     (env: ASTPluginEnvironment): ASTPlugin;
// }

// export interface ASTPluginEnvironment {
//     meta?: any;
//     syntax: Syntax;
// }

// export interface ASTPlugin {
//     name: string;
//     visitor: NodeVisitor;
// }

// export interface Syntax {
//     parse: typeof preprocess;
//     builders: typeof builders;
//     print: typeof print;
//     traverse: typeof traverse;
//     Walker: typeof Walker;
// }

// /**
//  * Ideally we precompile all the templates through a
//  * through a plugin at build time. This is done just
//  * for demo purposes.
//  */
export function Compilable(source: any) {
    // const preprocessOptions: PreprocessOptions = {
    //     mode: 'codemod'
    // };
    // const ast = preprocess(source, preprocessOptions);
    const rewriter = function(env: ASTPluginEnvironment) {
        return new GlimmerRewriter(env.syntax) as ASTPlugin;
    };

    // const transform = AST(ast);
    // traverse(ast, rewriter.visitor);
    // const template = AST(template1);
    // const compiled = TemplateCompiler.compile(ast);

    // const template2 = templateCompileFunction(source);
    // console.log('In Compilable: ' + source);
    let options = {
        meta: {},
        plugins: {
            ast: [rewriter]
        }
    } as PrecompileOptions;

    const precompiled = precompile(source, options);
    // console.log('Precompiled');
    const component = Component(precompiled);
    // console.log(`Compiled Component: ${component}`);
    return component;
}

export class ResolverDelegate {
    public static components: any = {};
    public static helpers: any = {};
    public static modifiers: any = {};

    registerComponent(name, handle, source, capabilities) {
        // console.log(`addComponent: ${name}`);
        ResolverDelegate.components[name] = {
            source: strip`${source}`,
            handle,
            capabilities
        };
        // console.log(`ResolverDelegate Components ${ResolverDelegate.components}`);
    }

    registerHelper(name, handle) {
        ResolverDelegate.helpers[name] = handle;
        // console.log(ResolverDelegate.helpers);
    }

    registerModifier(name, handle) {
        ResolverDelegate.modifiers[name] = handle;
    }

    static lookupComponent(name: any) {
        // console.log(`lookupComponent: ${name}`);
        let component = ResolverDelegate.components[name];
        if (component === null) {
            return null;
        }
        // console.log(`component found: ${component}`);
        //source should now be compiled
        let { handle, source, capabilities } = component;
        return {
            handle,
            source,
            compilable: Component(source),
            capabilities
        };
    }

    static lookupModifier(name: any) {
        if (name in ResolverDelegate.modifiers) {
            return ResolverDelegate.modifiers[name];
        }
    }

    static lookupHelper(name: any) {
        // console.log('in lookup helper');
        if (name in ResolverDelegate.helpers) {
            return ResolverDelegate.helpers[name];
        }
    }
}

export default {
    lookupComponent: ResolverDelegate.lookupComponent,
    lookupHelper: ResolverDelegate.lookupHelper,
    lookupModifier: ResolverDelegate.lookupModifier
};
