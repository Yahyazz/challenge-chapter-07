import useInput from '../../hooks/useInput'
import DefaultLayout from '../../layout/DefaultLayout'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCar = () => {
  const [manufacture, onManufactureChange] = useInput('')
  const [model, onModelChange] = useInput('')
  const [type, onTypeChange] = useInput('')
  const [image, onImageChange] = useInput('')
  const [year, onYearChange] = useInput(0)
  const [capacity, onCapacityChange] = useInput(0)
  const [rentPerDay, onRentPerDayChange] = useInput(0)

  const navigate = useNavigate();

  const addCars = async () => {
    console.log({ id: uuidv4(), manufacture, model, type, image, year, capacity, rentPerDay })
    const response = await fetch('http://localhost:8000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: uuidv4(), manufacture, model, type, image, year, capacity, rentPerDay }),
    })
    const data = await response.json()
    console.log(data)
  }

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    await addCars();
    navigate('/carslist/cars');
  }
  return (
    <DefaultLayout>
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
              Add Car
            </button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default AddCar