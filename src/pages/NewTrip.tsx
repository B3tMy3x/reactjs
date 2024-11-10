import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Train, Car } from 'lucide-react';
import axios from 'axios';
import type { Trip } from '@/types';

export function NewTrip() {
  const navigate = useNavigate();
  const [trip, setTrip] = React.useState<Partial<Trip>>({
    transportType: 'airplane',
    ticketNumber: '',
    origin: '',
    destination: '',
    departureDate: '',
    price: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    const requestData = {
      init_data: "string",
      flight_number: trip.ticketNumber,
      type: trip.transportType,
      price: trip.price,
      where: trip.origin,
      from_where: trip.destination
    };
  
    try {
      axios.post('https://prod.bijouterieshop.ru/api/trip', requestData, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
  
      .then(response => {
        console.log(response.data);
      })
      navigate('/');
    } catch (error) {
      console.error('Error during request:', error);
    }
  };

  const transportTypes = [
    { type: 'airplane', icon: Plane, label: 'Самолет' },
    { type: 'train', icon: Train, label: 'Поезд' },
    { type: 'other', icon: Car, label: 'Другое' }
  ];

  return (
    <div className="pb-20">
      <h1 className="text-2xl font-bold mb-6">Новая поездка</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-400 mb-2">Тип транспорта</label>
          <div className="grid grid-cols-3 gap-4">
            {transportTypes.map(({ type, icon: Icon, label }) => (
              <button
                key={type}
                type="button"
                onClick={() => setTrip({ ...trip, transportType: type as Trip['transportType'] })}
                className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 ${
                  trip.transportType === type
                    ? 'border-[#5ebbf6] bg-[#5ebbf6]/10'
                    : 'border-[#2b3b4d] bg-[#1c2a3a]'
                }`}
              >
                <Icon size={24} />
                <span className="mt-2">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {trip.transportType === 'airplane' && (
          <div>
            <label htmlFor="ticketNumber" className="block text-gray-400 mb-2">
              Номер рейса
            </label>
            <input
              type="text"
              id="ticketNumber"
              value={trip.ticketNumber}
              onChange={(e) => setTrip({ ...trip, ticketNumber: e.target.value })}
              className="w-full bg-[#1c2a3a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5ebbf6]"
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="origin" className="block text-gray-400 mb-2">
              Откуда
            </label>
            <input
              type="text"
              id="origin"
              value={trip.origin}
              onChange={(e) => setTrip({ ...trip, origin: e.target.value })}
              className="w-full bg-[#1c2a3a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5ebbf6]"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-gray-400 mb-2">
              Куда
            </label>
            <input
              type="text"
              id="destination"
              value={trip.destination}
              onChange={(e) => setTrip({ ...trip, destination: e.target.value })}
              className="w-full bg-[#1c2a3a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5ebbf6]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="departureDate" className="block text-gray-400 mb-2">
              Отправление
            </label>
            <input
              type="datetime-local"
              id="departureDate"
              value={trip.departureDate}
              onChange={(e) => setTrip({ ...trip, departureDate: e.target.value })}
              className="w-full bg-[#1c2a3a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5ebbf6]"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-gray-400 mb-2">
              Цена
            </label>
            <input
              type="number"
              id="price"
              value={trip.price}
              onChange={(e) => setTrip({ ...trip, price: Number(e.target.value) })}
              className="w-full bg-[#1c2a3a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5ebbf6]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#5ebbf6] text-white py-3 rounded-lg font-medium hover:bg-[#4da8e4] transition-colors"
        >
          Создать поездку
        </button>
      </form>
    </div>
  );
}

export default NewTrip;
