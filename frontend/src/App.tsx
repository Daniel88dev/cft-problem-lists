import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root.tsx";
import NotFound from "./pages/NotFound.tsx";
import MainPage from "./pages/MainPage.tsx";
import { lazy, Suspense } from "react";
const ProblemLists = lazy(() => import("./pages/ProblemLists.tsx"));
const VehicleLists = lazy(() => import("./pages/VehicleLists.tsx"));
const VehicleIssues = lazy(() => import("./pages/VehicleIssues.tsx"));
const ProblemSearch = lazy(() => import("./pages/ProblemSearch.tsx"));
const VehicleSearch = lazy(() => import("./pages/VehicleSearch.tsx"));
const UIComponents = lazy(() => import("./pages/UIComponents.tsx"));
const AdminPage = lazy(() => import("./pages/AdminPage.tsx"));

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
      {
        path: "vehicle-lists",
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <VehicleLists />
          </Suspense>
        ),
      },
      {
        path: "vehicle-issues",
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <VehicleIssues />
          </Suspense>
        ),
      },
      {
        path: "problem-search",
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <ProblemSearch />
          </Suspense>
        ),
        children: [
          {
            path: "problem/:problemId",
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <ProblemSearch />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "vehicle-search",
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <VehicleSearch />
          </Suspense>
        ),
        children: [
          {
            path: "vehicle/:vehicleId",
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <VehicleSearch />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <AdminPage />
          </Suspense>
        ),
        children: [
          {
            path: "projects",
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <AdminPage />
              </Suspense>
            ),
            children: [
              {
                path: ":projectId",
                element: (
                  <Suspense fallback={<p>loading...</p>}>
                    <AdminPage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "users",
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <AdminPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "ui-components",
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <UIComponents />
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
