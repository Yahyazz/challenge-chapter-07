const formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', });

const TableListCars = ({ cars }: any) => {

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Car List
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Car Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Car Type</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Year</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Capacity</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Rent/Day</p>
        </div>
      </div>

      {cars.map((car: any, key: any) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                {(car.image) ? (
                  (car.image.includes('http')) ? (
                    <img src={car.image} alt="Car Image" className="overflow-hidden h-full w-full object-cover" />
                  ) : (
                    <img src={`../../${car.image}`} alt="Car Image" className="overflow-hidden h-full w-full object-cover" />
                  )
                ) : (
                  <img src='/src/images/cover/cover-01.png' alt="Car Image" className="overflow-hidden h-full w-full object-cover" />
                )
                }

              </div>
              <p className="text-sm text-black dark:text-white">
                {car.manufacture} {car.model}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {car.type}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {car.year}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{car.capacity}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">{formatter.format(car.rentPerDay)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableListCars;
