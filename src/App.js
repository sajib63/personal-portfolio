import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className=" container mx-auto font-serif p-4">
     <RouterProvider router={router}></RouterProvider>
     <Toaster />
    
    </div>
  );
}

export default App;
