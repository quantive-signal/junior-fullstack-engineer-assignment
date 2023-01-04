// import React from 'react'
// import  { createRoot }  from 'react-dom/client';
// import App from 'cliff/App'

// const container = document.querySelector('#blk_router');
// const root = createRoot(container);
// root.render(<App/>);
async function app() {
  // We won't need initalizeMainImport until we complete bootstrapping.
  // Initaite the fetch, just don't await it until we need it.
  const initalizeMainImport = import('cliff/bootstrap/initializeMain');
  const bootstrapImport = import('cliff/bootstrap');

  // first check if config is loaded in windows.__initialData
  // if not, make an api call and store it in this variable
  const {bootstrap} = await bootstrapImport;
  const config = await bootstrap();
  const {initializeMain} = await initalizeMainImport;
  initializeMain(config);
}

app();
