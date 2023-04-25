import 'tailwindcss/tailwind.css';
import withAuth from '../withAuth'; // Import the withAuth HOC
import { useState, useEffect } from 'react';

function CarPark() {
  const [color, setColor] = useState('green');

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await fetch('/api/color');
        const data = await response.json();
        setColor(data.color);
      } catch (error) {
        console.error(error);
      }
    };

    fetchColor();
    const interval = setInterval(fetchColor, 1000); // Fetch the color every 1000 milliseconds (1 second)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-96 bg-opacity-30 bg-gray-100 p-12 rounded-xl transition-all duration-500 mx-auto">
        <div className="mx-auto max-w-sm p-20">
          <ul className="space-y-4">
            {['1A', '1B', '2A', '2B', '3A', '3B'].map((id) => (
              <li key={id} className="flex justify-center">
                <div className="relative p-4 w-1/2">
                  <label
                    className={`block w-full text-center font-bold text-sm leading-6 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out ${
                      id === '1A' && color === 'red' ? 'bg-red-600' : 'bg-green-600'
                    }`}
                  >
                    {id}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withAuth(CarPark); // Wrap the CarPark component with the withAuth HOC
