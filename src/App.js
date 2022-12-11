import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';


function App() {
  return (
    <div className=" container mx-auto font-serif p-4">
     <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
