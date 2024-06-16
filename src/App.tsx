import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
// import Calendar from './pages/Calendar';
// import Chart from './pages/Chart';
import DashboardAdmin from './pages/Dashboard/DashboardAdmin';
import CarsList from './pages/CarsList/CarsList';
import AddCar from './pages/CarsList/AddCar';
import UpdateCar from './pages/CarsList/UpdateCar';
import Cars from './pages/Cars';
import LandingPage from './pages/LandingPage';
// import FormElements from './pages/Form/FormElements';
// import FormLayout from './pages/Form/FormLayout';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Tables from './pages/Tables';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <PageTitle title="BCR | Home" />
              <LandingPage />
            </>
          }
        />
        <Route
          path='/cars'
          element={
            <>
              <PageTitle title="BCR | Cars" />
              <Cars />
            </>
          }
        />
        <Route
          path='/admin/dashboard'
          element={
            <>
              <PageTitle title="BCR | Admin Dashboard" />
              <DashboardAdmin />
            </>
          }
        />
        <Route
          path="/carslist/cars"
          element={
            <>
              <PageTitle title="BCR | Cars List" />
              <CarsList />
            </>
          }
        />
        <Route
          path="/carslist/add"
          element={
            <>
              <PageTitle title="BCR | Add New Cars" />
              <AddCar />
            </>
          }
        />
        <Route
          path="/carslist/update/:id"
          element={
            <>
              <PageTitle title="BCR | Update New Cars" />
              <UpdateCar />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="BCR | Sign in" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="BCR | Sign up" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
