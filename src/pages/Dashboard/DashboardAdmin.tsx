import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TableListCars from '../../components/Tables/TableListCars';
import { useEffect, useState } from "react";
import Loader from '../../common/Loader';

const DashboardAdmin: React.FC = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8000/cars')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCars(data);
      })
      .catch((err) => {
        if (err || err.name === 'AbortError') {
          console.log('fetch aborted.' + err);
        }
      });
    setLoading(false)
  }, []);

  return (
    <DefaultLayout>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne /> */}
        {/* <ChartTwo /> */}
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-12">

          {loading ? (
            <Loader />
          ) : (
            <TableListCars cars={cars} />
          )}
        </div>
        {/* <ChatCard /> */}
      </div>
    </DefaultLayout>
  );

};

export default DashboardAdmin;
