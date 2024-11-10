import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ErrorBoundary } from "@/components/ErrorBoundary.tsx";
import { routes } from "@/navigation/routes";
import { publicUrl } from "@/helpers/publicUrl.ts";
import { Layout } from "@/components/Layout";

function ErrorBoundaryError({ error }: { error: unknown }) {
  return (
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : typeof error === "string"
            ? error
            : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

export function Root() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.setHeaderColor("#17212b");
      window.Telegram.WebApp.setBackgroundColor("#17212b");
    }
  }, []);

  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <TonConnectUIProvider manifestUrl={publicUrl("tonconnect-manifest.json")}>
        <BrowserRouter basename="/reactjs-template">
          <Routes>
            <Route element={<Layout />}>
              {routes
                .filter(({ path }) => path !== "/ai-chat")
                .map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component />} />
                ))}
            </Route>

            {routes
              .filter(({ path }) => path === "/ai-chat")
              .map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
          </Routes>
        </BrowserRouter>
      </TonConnectUIProvider>
    </ErrorBoundary>
  );
}
