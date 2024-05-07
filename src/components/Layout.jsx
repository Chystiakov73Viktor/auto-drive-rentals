import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "components/AppBar/AppBar";
import { Loader } from "components/Loader/Loader";

export const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
