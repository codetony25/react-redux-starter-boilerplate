export { Lambda };
export { SimpleEventEmitter, ISimpleEventListener };
export { ITransitionEvent, IObserverTree, IDependencyTree };
export { IObservable, IDepTreeNode, untracked };
export { IDerivation };
export { asReference, asFlat, asStructure };
export { IObjectChange, isObservableObject };
export { IObservableArray, IArrayChange, IArraySplice, isObservableArray, fastArray };
export { IObservableMapChange, IKeyValueMap, ObservableMap, IMapEntries, isObservableMap, map };
export { IObservableValue, observable };
export { computed, IComputedValueOptions };
export { isObservable };
export { extendObservable };
export { observe };
export { autorun, autorunAsync, autorunUntil, when };
export { expr };
export { toJSON };
export { ITransformer, createTransformer };
export { transaction };
export { Reaction };
export { IAtom, Atom };
export declare const _: {
    quickDiff: <T>(current: T[], base: T[]) => [T[], T[]];
    resetGlobalState: () => void;
};
export declare const extras: {
    allowStateChanges: <T>(allowStateChanges: boolean, func: () => T) => T;
    getDependencyTree: (thing: any) => IDependencyTree;
    getObserverTree: (thing: any) => IObserverTree;
    isComputingDerivation: () => boolean;
    resetGlobalState: () => void;
    trackTransitions: (extensive?: boolean, onReport?: (lines: ITransitionEvent) => void) => Lambda;
};
declare function autorun(view: Lambda, scope?: any): Lambda & {
    $mosbservable: Reaction;
};
declare function when(predicate: () => boolean, effect: Lambda, scope?: any): Lambda & {
    $mosbservable: Reaction;
};
declare function autorunUntil(predicate: () => boolean, effect: Lambda, scope?: any): any;
declare function autorunAsync(func: Lambda, delay?: number, scope?: any): Lambda & {
    $mosbservable: Reaction;
};
interface IComputedValueOptions {
    asStructure: boolean;
}
declare function computed<T>(func: () => T, scope?: any): IObservableValue<T>;
declare function computed(opts: IComputedValueOptions): (target: Object, key: string, baseDescriptor?: PropertyDescriptor) => void;
declare function computed(target: Object, key: string | symbol, baseDescriptor?: PropertyDescriptor): void;
declare type ITransformer<A, B> = (object: A) => B;
declare function createTransformer<A, B>(transformer: ITransformer<A, B>, onCleanup?: (resultObject: B, sourceObject?: A) => void): ITransformer<A, B>;
declare function expr<T>(expr: () => T, scope?: any): T;
declare function extendObservable<A extends Object, B extends Object>(target: A, ...properties: B[]): A & B;
interface IDependencyTree {
    id: number;
    name: string;
    dependencies?: IDependencyTree[];
}
interface IObserverTree {
    id: number;
    name: string;
    observers?: IObserverTree[];
}
interface ITransitionEvent {
    id: number;
    name: string;
    state: string;
    changed: boolean;
    node: IDepTreeNode;
}
declare function isObservable(value: any, property?: string): boolean;
interface IObservableValue<T> {
    get(): T;
    set(value: T): void;
}
declare function observable(target: Object, key: string, baseDescriptor?: PropertyDescriptor): any;
declare function observable<T>(value: T[]): IObservableArray<T>;
declare function observable<T, S extends Object>(value: () => T, thisArg?: S): IObservableValue<T>;
declare function observable<T extends string | number | boolean | Date | RegExp | Function | void>(value: T): IObservableValue<T>;
declare function observable<T extends Object>(value: T): T;
declare function observe<T>(value: IObservableValue<T>, listener: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): Lambda;
declare function observe<T>(observableArray: IObservableArray<T>, listener: (change: IArrayChange<T> | IArraySplice<T>) => void, fireImmediately?: boolean): Lambda;
declare function observe<T>(observableMap: ObservableMap<T>, listener: (change: IObservableMapChange<T>) => void, fireImmediately?: boolean): Lambda;
declare function observe<T>(observableMap: ObservableMap<T>, property: string, listener: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): Lambda;
declare function observe<T extends Object>(object: T, listener: (change: IObjectChange<any, T>) => void, fireImmediately?: boolean): Lambda;
declare function observe<T extends Object>(object: T, property: string, listener: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): Lambda;
declare function toJSON(source: any, detectCycles?: boolean, __alreadySeen?: [any, any][]): any;
interface IAtom extends IObservable {
    isDirty: boolean;
}
declare class Atom implements IAtom {
    name: string;
    onBecomeObserved: () => void;
    onBecomeUnobserved: () => void;
    id: number;
    isDirty: boolean;
    staleObservers: any[];
    observers: any[];
    constructor(name?: string, onBecomeObserved?: () => void, onBecomeUnobserved?: () => void);
    reportObserved(): void;
    reportChanged(): void;
    private reportStale();
    private reportReady();
    toString(): string;
}
interface IDerivation extends IDepTreeNode, IObservable {
    observing: IObservable[];
    staleObservers: IDerivation[];
    observers: IDerivation[];
    dependencyStaleCount: number;
    dependencyChangeCount: number;
    onDependenciesReady(): boolean;
}
interface IDepTreeNode {
    id: number;
    name: string;
    observers?: IDerivation[];
    observing?: IObservable[];
}
interface IObservable extends IDepTreeNode {
    staleObservers: IDerivation[];
    observers: IDerivation[];
    onBecomeObserved(): any;
    onBecomeUnobserved(): any;
}
declare function untracked<T>(action: () => T): T;
declare class Reaction implements IDerivation {
    name: string;
    private onInvalidate;
    id: number;
    staleObservers: IDerivation[];
    observers: IDerivation[];
    observing: IObservable[];
    dependencyChangeCount: number;
    dependencyStaleCount: number;
    isDisposed: boolean;
    _isScheduled: boolean;
    constructor(name: string, onInvalidate: () => void);
    onBecomeObserved(): void;
    onBecomeUnobserved(): void;
    onDependenciesReady(): boolean;
    schedule(): void;
    isScheduled(): boolean;
    runReaction(): void;
    track(fn: () => void): void;
    dispose(): void;
    getDisposer(): Lambda & {
        $mosbservable: Reaction;
    };
    toString(): string;
}
declare function transaction<T>(action: () => T, thisArg?: any): T;
declare function asReference<T>(value: T): T;
declare function asStructure<T>(value: T): T;
declare function asFlat<T>(value: T): T;
interface IObservableArray<T> extends Array<T> {
    spliceWithArray(index: number, deleteCount?: number, newItems?: T[]): T[];
    observe(listener: (changeData: IArrayChange<T> | IArraySplice<T>) => void, fireImmediately?: boolean): Lambda;
    clear(): T[];
    peek(): T[];
    replace(newItems: T[]): T[];
    find(predicate: (item: T, index: number, array: IObservableArray<T>) => boolean, thisArg?: any, fromIndex?: number): T;
    remove(value: T): boolean;
}
interface IArrayChange<T> {
    type: string;
    object: IObservableArray<T>;
    index: number;
    oldValue: T;
}
interface IArraySplice<T> {
    type: string;
    object: IObservableArray<T>;
    index: number;
    removed: T[];
    addedCount: number;
}
declare function fastArray<V>(initialValues?: V[]): IObservableArray<V>;
declare function isObservableArray(thing: any): boolean;
interface IKeyValueMap<V> {
    [key: string]: V;
}
declare type IMapEntries<V> = [string, V][];
interface IObservableMapChange<T> extends IObjectChange<T, ObservableMap<T>> {
}
declare class ObservableMap<V> {
    $mobx: {};
    private _data;
    private _hasMap;
    private _valueMode;
    private _events;
    name: string;
    id: number;
    private _keys;
    constructor(initialData?: IMapEntries<V> | IKeyValueMap<V>, valueModeFunc?: Function);
    private _has(key);
    has(key: string): boolean;
    set(key: string, value: V): void;
    delete(key: string): void;
    private _updateHasMapEntry(key, value);
    get(key: string): V;
    keys(): string[];
    values(): V[];
    entries(): IMapEntries<V>;
    forEach(callback: (value: V, key: string, object: IKeyValueMap<V>) => void, thisArg?: any): void;
    merge(other: ObservableMap<V> | IKeyValueMap<V>): ObservableMap<V>;
    clear(): void;
    size: number;
    toJs(): IKeyValueMap<V>;
    private isValidKey(key);
    private assertValidKey(key);
    toString(): string;
    observe(callback: (changes: IObservableMapChange<V>) => void): Lambda;
}
declare function map<V>(initialValues?: IMapEntries<V> | IKeyValueMap<V>, valueModifier?: Function): ObservableMap<V>;
declare function isObservableMap(thing: any): boolean;
interface IObjectChange<T, R> {
    name: string;
    object: R;
    type: string;
    oldValue?: T;
}
declare function isObservableObject(thing: any): boolean;
declare type ISimpleEventListener = {
    (...data: any[]): void;
};
declare class SimpleEventEmitter {
    listeners: ISimpleEventListener[];
    emit(...data: any[]): any;
    on(listener: ISimpleEventListener): Lambda;
    once(listener: ISimpleEventListener): Lambda;
}
interface Lambda {
    (): void;
    name?: string;
}
