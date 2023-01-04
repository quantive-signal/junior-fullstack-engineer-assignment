// This is the element id where we render our React application to
export const ROOT_ELEMENT = 'blk_router';
export const NODE_ENV = process.env.NODE_ENV;
// Webpack configures EXPERIMENTAL_SPA.
export const EXPERIMENTAL_SPA = process.env.EXPERIMENTAL_SPA as unknown as
  | undefined
  | boolean;
