import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../common/Loader';

const UpdateCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [carData, setCarData] = useState({})
  const [manufacture, setManufacture] = useState('')
  const [model, setModel] = useState('')
  const [type, setType] = useState('')
  const [image, setImage] = useState('')
  const [year, setYear] = useState(0)
  const [capacity, setCapacity] = useState(0)
  const [rentPerDay, setRentPerDay] = useState(0)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function getCar() {
      const response = await fetch(`http://localhost:8000/cars/${id}`)
      const data = await response.json()
      setManufacture(data.manufacture)
      setModel(data.model)
      setType(data.type)
      setYear(data.year)
      setImage(data.image)
      setCapacity(data.capacity)
      setRentPerDay(data.rentPerDay)
      setCarData(data)
      setLoading(false)
    }

    getCar()
  }, []);

  function onManufactureChange(e: any) {
    setManufacture(e.target.value)
  }
  function onModelChange(e: any) {
    setModel(e.target.value)
  }
  function onTypeChange(e: any) {
    setType(e.target.value)
  }
  function onImageChange(e: any) {
    setImage(e.target.value)
  }
  function onCapacityChange(e: any) {
    setCapacity(e.target.value)
  }
  function onYearChange(e: any) {
    setYear(e.target.value)
  }
  function onRentPerDayChange(e: any) {
    setRentPerDay(e.target.value)
  }



  const updateCars = async () => {
    console.log(carData)
    console.log({ ...carData, manufacture, model, type, image, year, capacity, rentPerDay })
    const response = await fetch(`http://localhost:8000/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...carData, manufacture, model, type, image, year, capacity, rentPerDay }),
    })
    const data = await response.json()
    console.log(data)
  }

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    await updateCars();
    navigate('/carslist/cars');
  }
  return (
    <DefaultLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Add New Car
            </h3>
          </div>
          <form action="#" onSubmit={onSubmitHandler}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Car Manufacture
                </label>
                <input
                  value={manufacture}
                  onChange={onManufactureChange}
                  type="text"
                  placeholder="Enter car manufacture"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Car Model
                </label>
                <input
                  value={model}
                  onChange={onModelChange}
                  type="text"
                  placeholder="Enter car model"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Car Type
                </label>
                <input
                  value={type}
                  onChange={onTypeChange}
                  type="text"
                  placeholder="Enter car type"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Car Image
                </label>
                <input
                  value={image}
                  onChange={onImageChange}
                  type="text"
                  placeholder="Enter car image url"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Car Year
                </label>
                <input
                  value={year}
                  onChange={onYearChange}
                  type="number"
                  placeholder="Enter car year"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Car Capacity
                </label>
                <input
                  value={capacity}
                  onChange={onCapacityChange}
                  type="number"
                  placeholder="Enter car capacity"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Rent Per Day
                </label>
                <input
                  value={rentPerDay}
                  onChange={onRentPerDayChange}
                  type="number"
                  placeholder="Enter car rent per day"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Update Car
              </button>
            </div>
          </form>
        </div>
      )}
    </DefaultLayout>
  )
}

export default UpdateCar