import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import routes from "@/routes/index";
import "@/styles/tailwind.css";
import "swiper/css";

const queryClient = new QueryClient({
  defaultOptions: { queries: { enabled: true, staleTime: Infinity } },
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>
);
