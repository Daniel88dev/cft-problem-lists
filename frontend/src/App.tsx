import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root.tsx";
import NotFound from "./pages/NotFound.tsx";
import MainPage from "./pages/MainPage.tsx";
import { lazy, Suspense } from "react";
const ProblemLists = lazy(() => import("./pages/ProblemLists.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    id: "root",
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "problem-lists",
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <ProblemLists />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
