const { createBrowserRouter } = require("react-router-dom");
const { Main } = require("../Layout/Main");
const { Home } = require("../Pages/Home");


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        }
      ]
    },
  ]);