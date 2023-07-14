
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layouts
import { MainLayout } from './layouts/MainLayout';

// pages
import { Home } from './pages/Home';
import { DersNotu } from './pages/DersNotu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Notfound } from './pages/Notfound';

function App() {
 
   const router = createBrowserRouter([
    {
      path : "/", element : <MainLayout />, children : [
        {
          path : "/", element : <Home />
        },
        {
          path : "dersnotu", element : <DersNotu />
        },
        {
          path : "hakkinda", element : <About />
        },
        {
          path : "iletisim", element : <Contact />
        }
      ]
         },
     { 
        path : "*", element : <Notfound />
      } 
   ])

  return (
   
    <RouterProvider router= { router }>
     
    </RouterProvider>
  );
}

export default App;


