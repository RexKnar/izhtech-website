import {
  Route,
  redirect,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./modules/home/pages";
import { ROUTES } from "./constants/routes";

export function Router() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index loader={() => redirect(`/home`)} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
