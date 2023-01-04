import {Config} from 'cliff/types';

const bootApplication = (data: Config) => {
  window.csrfCookieName = data.csrfCookieName;

  return data;
};

type fetchConfigFunction = () => Promise<Config>;

const fetchDummy: fetchConfigFunction = async () => {
  return await {
    lang: 'en',
    csrfCookieName: 'cliff',
    lastOrganization: 'quantive',
    demoMode: true,
    features: ['org:create'],
  };
};

/**
 * Load the client configuration data using the BOOTSTRAP_URL. Used when
 * running in standalone SPA mode.
 */
async function bootWithHydration() {
  const data: Config = await fetchDummy();

  window.__initialData = data;

  return bootApplication(data);
}

/**
 * Load client configuration bootstrap data. This will detect if the app is
 * running in SPA mode or being booted from the django-rendered layout.html
 * template.
 */
export async function bootstrap() {
  const bootstrapData = window.__initialData;

  // If __initialData is not already set on the window, we are likely running in
  // pure SPA mode, meaning django is not serving our frontend application and we
  // need to make an API request to hydrate the bootstrap data to boot the app.
  if (bootstrapData === undefined) {
    return await bootWithHydration();
  }

  return bootApplication(bootstrapData);
}
