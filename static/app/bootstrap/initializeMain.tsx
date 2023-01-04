import {Config} from 'cliff/types';

export async function initializeMain(config: Config) {
  // This is dynamically imported because we need to make sure locale is configured
  // before proceeding.
  const {initializeApp} = await import('./initializeApp');
  initializeApp(config);
}
