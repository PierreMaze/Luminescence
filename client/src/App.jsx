import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routes/index';

function App() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
