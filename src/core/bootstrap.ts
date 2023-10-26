import { runConfigScraper } from './scriptConfigScrapper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Context {
  constructor() {}

  setOptions() {}
}

function bootstrap() {
  // Set context
  // const context = new Context();

  // Run script config scrapper.
  const scriptConfig = runConfigScraper();

  // eslint-disable-next-line no-console
  console.log('script config: ', scriptConfig);
}

export { bootstrap };
