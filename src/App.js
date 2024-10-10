import IssuePage from "./pages/IssuePage/IssuePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  var router = createBrowserRouter([
    {
      path: "/",
      element : <IssuePage />
    }
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
