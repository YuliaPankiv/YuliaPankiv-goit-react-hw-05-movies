import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { Header } from './Layout.styled';
import { Suspense } from 'react';
// import { Container } from 'components/App/App.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        {/* <Container> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        {/* </Container> */}
      </main>
    </>
  );
};

export default Layout;
