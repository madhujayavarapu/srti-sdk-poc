import { bootstrap } from 'core/bootstrap';
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
} 


const sdk = {
  initalize
};

export  default sdk;