import { IDomainConfig, IOptions, IScriptAttributes, IState, IVersionConfig } from '../types';
import { DEFAULT_SCRIPT_ATTRS, DEFAULT_OPTIONS, DEFAULT_VERSION_CONFIG } from 'constants';

export class State implements IState {
  valid: boolean;

  // config derived from script tab.
  scriptAttrs: IScriptAttributes;

  // config got from config_active json.
  versionConfig: IVersionConfig;

  // options passed in initialize method. (P1)
  options: IOptions;

  // en.json config (P2)
  domainConfig: IDomainConfig;

  constructor() {
    this.valid = true;
    this.options = DEFAULT_OPTIONS;
    this.domainConfig = {};
    this.scriptAttrs = DEFAULT_SCRIPT_ATTRS;
    this.versionConfig = DEFAULT_VERSION_CONFIG;
  }

  // setOptions(opts: IOptions) {
  //   this.options = opts;
  // }

  // getOptions(): IOptions {
  //   return this.options;
  // }

  // setScriptAttrs(scriptAttrs: IScriptAttributes) {
  //   this.scriptAttrs = scriptAttrs;
  // }

  // getScriptAttrs() {
  //   return this.scriptAttrs;
  // }

  // setDomainConfig(domainConfig: IDomainConfig) {
  //   this.domainConfig = domainConfig;
  // }

  // getDomainConfig(): IDomainConfig {
  //   return this.domainConfig;
  // }
}
