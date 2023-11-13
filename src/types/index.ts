// TODO: UUID type
export type UUID = string;

// TODO: provide a url type.
export type URL = string;

export interface IOptions {
    overrideLocation: string;
    overrideLangauge: string;
    implicitFlow: boolean;
    container?: string;
    bannerTemplate?: string;
    preferenceCenterTemplate?: string;
    uuid?: UUID;
}

export interface IVersionConfig {
    version: string;
}

// TODO: set uuid and url types.
export interface IScriptAttributes {
    // tenantUUID: UUID;
    // domainUUID: UUID;
    // baseUrl: URL;
    // cdnBaseUrl: URL;
    tenantUUID: string | null;
    domainUUID: string | null;
    baseUrl: string;
    cdnBaseUrl: string;
    publishedVersion: string;
    skipCSS: boolean;
    stagingMode: boolean;
    loadUtils?: boolean;
}

export interface IDomainConfig {}


export interface IState {
    scriptAttrs: IScriptAttributes;
    versionConfig: IVersionConfig;
    domainConfig: IDomainConfig;
    options: IOptions;
}

export interface ILogger {
    log(): void;
    fatal(): void;
    error(): void;
}

export interface IContext {
    state: IState;
    hooks: string[]; // TODO: Need to think about how we can pass it in context/Is it required?
    logger: ILogger;
}


// FLOW:
// Create the context

// Run pre-register phases => Validation phases.

// register plugins

// register phases - canSkip, run/execute, canProceed

// execute phases one after another.




