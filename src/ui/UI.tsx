import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";

const Components = {
  profile: lazy(() => import("./Profile.tsx")),
};

type PageName = keyof typeof Components;

declare global {
  interface Window {
    CURRENT_PAGE?: PageName;
  }
}

const DefaultPage = () => {
  return <Home />;
};

function App() {
  const page: PageName | undefined = window.CURRENT_PAGE;
  const Page = (page && Components[page]) || DefaultPage;

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(<App />);
