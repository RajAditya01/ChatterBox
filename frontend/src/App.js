import './App.css';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import SignUp from './components/SignUp';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/register",
    element:<SignUp/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
