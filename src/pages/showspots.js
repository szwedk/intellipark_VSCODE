import 'tailwindcss/tailwind.css';

export default function CarPark() {
  return (
    <div className="mx-auto max-w-sm p-20">
      <ul className="space-y-4">
        <li className="flex flex-wrap justify-center">
          {['1A', '1B'].map((id) => (
            <div key={id} className="relative p-4 w-1/2">
              <input
                type="checkbox"
                id={id}
                className="absolute opacity-0"
              />
              <label
                htmlFor={id}
                className="block w-full text-center font-bold text-sm leading-6 px-4 py-2 bg-red-600 rounded-md transition-colors duration-300 ease-in-out hover:bg-green-600"
              >
                {id}
              </label>
            </div>
          ))}
        </li>
        <li className="flex flex-wrap justify-center">
          {['2A', '2B'].map((id) => (
            <div key={id} className="relative p-4 w-1/2">
              <input
                type="checkbox"
                id={id}
                className="absolute opacity-0"
              />
              <label
                htmlFor={id}
                className="block w-full text-center font-bold text-sm leading-6 px-4 py-2 bg-red-600 rounded-md transition-colors duration-300 ease-in-out hover:bg-green-600"
              >
                {id}
              </label>
            </div>
          ))}
        </li>
        <li className="flex flex-wrap justify-center">
          {['3A', '3B'].map((id) => (
            <div key={id} className="relative p-4 w-1/2">
              <input
                type="checkbox"
                id={id}
                className="absolute opacity-0"
              />
              <label
                htmlFor={id}
                className="block w-full text-center font-bold text-sm leading-6 px-4 py-2 bg-red-600 rounded-md transition-colors duration-300 ease-in-out hover:bg-green-600"
              >
                {id}
              </label>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}
