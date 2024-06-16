import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import CardsCars from '../../components/Cards/CardsCars';
import Loader from '../../common/Loader';

const CarsList: React.FC = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCars();
    setLoading(false)
  }, []);

  const fetchCars = async () => {
    try {
      const res = await fetch('http://localhost:8000/cars');
      const data = await res.json();
      setCars(data);
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }

  const deleteCar = async (id: string) => {
    setLoading(true)
    const response = await fetch(`http://localhost:8000/cars/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log(data)
    await fetchCars()
    setLoading(false)
  }

  return (
    <DefaultLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-6">
          {cars.map((car: any) => (
            <CardsCars car={car} deleteCar={deleteCar} key={car.id} />
          ))}
        </div>
      )}
    </DefaultLayout>
  );
};

export default CarsList;
