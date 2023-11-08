import { bootstrap } from 'core/bootstrap';
import { DOM } from 'utils/dom';
import './scss/styles.scss';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initalize(opts: any) {
  // eslint-disable-next-line no-console
  console.log('options: ', opts);
  
  // ===== CONTEXT CREATION PHASE =======


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