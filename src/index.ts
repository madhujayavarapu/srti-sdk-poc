import { IContext, ILogger } from './types';
import { bootstrap } from 'core/bootstrap';
import { DOM } from 'utils/dom';
import './scss/styles.scss';
import { State } from 'context/state';

class SDKLogger implements ILogger {
  info(...args): void {
    // eslint-disable-next-line no-console
    console.log('[SDK]:: ', ...args);
  }
  warn(...args): void {
    // eslint-disable-next-line no-console
    console.warn('[SDK]:: ', ...args);
  }
  fatal(...args): void {
    // eslint-disable-next-line no-console
    console.error('[SDK]:: ', ...args);
  }
  error(...args): void {
    // eslint-disable-next-line no-console
    console.error('[SDK]:: ', ...args);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initalize(opts: any) {
  // eslint-disable-next-line no-console
  console.log('options: ', opts);
  const sdkLogger = new SDKLogger();

  // build state obj with default configs.
  const state = new State();
  
  // ===== CONTEXT CREATION PHASE =======
  // const context = new Context();
  const context: IContext = {
    state,
    hooks: [],
    logger: sdkLogger
  };


  // ===== Banner Generation Phase ======                                                     

  // bootstrap sdk.
  // TODO: build context and return context.
  bootstrap();

  // Dummy node to test whether sdk is loaded without errors or not.
  // const div = document.createElement('div');

  // Create banner.
  DOM.createBanner();
} 


const sdk = {
  initalize
};

export  default sdk;