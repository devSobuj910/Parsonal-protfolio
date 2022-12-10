// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routs from './Routs/Router';
function App() {
  return (
    <div className="">
  <RouterProvider router={routs}></RouterProvider>

    </div>
  );
}

export default App;
