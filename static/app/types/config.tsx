export interface Config {
  csrfCookieName: string;
  demoMode: boolean;
  features: Array<string>;
  lang: string;
  lastOrganization: string;
}

declare global {
  interface Window {
    /**
     * The config object provided by the backend.
     */
    __initialData: Config;
    /**
     * The CSRF cookie ised on the backend
     */
    csrfCookieName?: string;
  }
}
