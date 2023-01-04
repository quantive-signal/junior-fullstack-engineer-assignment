import './exportGlobals';

import {Config} from 'cliff/types';

import {renderMain} from './renderMain';
import {renderOnDomReady} from './renderOnDomReady';

export function initializeApp(config: Config) {
  // Used for operational metrics to determine that the application js
  // bundle was loaded by browser.
  renderOnDomReady(renderMain);
  // eslint-disable-next-line no-console
  console.log(config);
}
