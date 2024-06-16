import React from 'react'
import { Link } from 'react-router-dom';

interface CardsCarsProps {
  car: {
    id: string;
    manufacture: string;
    model: string;
    type: string;
    year: number;
    capacity: number;
    rentPerDay: number;
    image: string;
  }
  deleteCar: (id: string) => void;
}

const CardsCars: React.FC<CardsCarsProps> = ({ car, deleteCar }) => {
  const formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', });

  return (
    <div className="flex flex-col justify-between rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {(car.image) ? (
        <Link className="block px-4 pt-4 overflow-hidden" to={`/carslist/detail/${car.id}`}>
          <div className='h-35'>
            {(car.image.includes('http')) ? (
              <img src={car.image} className='object-cover h-full w-full' alt="Cars Image" />
            ) : (
              <img src={`../${car.image}`} className='object-cover h-full w-full' alt="Cars Image" />
            )
            }
          </div>
        </Link>
      ) : (
        <Link className="block px-4 pt-4 overflow-hidden" to={`/carslist/detail/${car.id}`}>
          <div className='h-35'>
            <img src="/src/images/cover/cover-01.png" alt="Cover Image" className='object-cover h-full w-full' />
          </div>
        </Link>
      )
      }

      <div className="p-6">
        <h4 className="mb-3 text-l font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          <Link to={`/carslist/detail/${car.id}`}>
            {car.manufacture} {car.model} / {car.type}
          </Link>
        </h4>
        <h5 className="mb-3 text-xl font-semibold text-black dark:text-white">
          {formatter.format(car.rentPerDay)} / day
        </h5>
        <p>Capacity : {car.capacity}</p>
        <p>Year : {car.year}</p>
      </div>

      <div className='p-6 grid grid-cols-2 gap-4'>
        <Link
          to="#"
          onClick={() => deleteCar(car.id)}
          className="flex items-center justify-center gap-2.5 border border-danger py-3 px-10 text-center font-bold text-danger hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 4.5H4H16" stroke="#FA2C5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.25 4.5V3C6.25 2.60218 6.40804 2.22064 6.68934 1.93934C6.97064 1.65804 7.35218 1.5 7.75 1.5H10.75C11.1478 1.5 11.5294 1.65804 11.8107 1.93934C12.092 2.22064 12.25 2.60218 12.25 3V4.5M14.5 4.5V15C14.5 15.3978 14.342 15.7794 14.0607 16.0607C13.7794 16.342 13.3978 16.5 13 16.5H5.5C5.10218 16.5 4.72064 16.342 4.43934 16.0607C4.15804 15.7794 4 15.3978 4 15V4.5H14.5Z" stroke="#FA2C5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.75 8.25V12.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.75 8.25V12.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </span>
          Delete
        </Link>
        <Link
          to={`/carslist/update/${car.id}`}
          className="flex items-center justify-center gap-2.5 bg-meta-3 py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_97360_770)">
                <path d="M9 3H3.75C3.35218 3 2.97064 3.15804 2.68934 3.43934C2.40804 3.72064 2.25 4.10218 2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V9.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.625 1.875C14.9234 1.57663 15.328 1.40901 15.75 1.40901C16.172 1.40901 16.5766 1.57663 16.875 1.875C17.1734 2.17337 17.341 2.57805 17.341 3C17.341 3.42196 17.1734 3.82663 16.875 4.125L9.75 11.25L6.75 12L7.5 9L14.625 1.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_97360_770">
                  <rect width="18" height="18" fill="white" transform="translate(0.75)" />
                </clipPath>
              </defs>
            </svg>

          </span>
          Edit
        </Link>
      </div>
    </div>
  )
}

export default CardsCars;