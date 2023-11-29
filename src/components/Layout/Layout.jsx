import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Header } from './Layout.styled';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      </main>
    </>
  );
};

export default Layout;
