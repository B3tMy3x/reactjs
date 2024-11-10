import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plane, Train, Car } from 'lucide-react';
import { Trip } from '@/types';

const mockTrip: Trip = {
  id: '1',
  ticketNumber: 'TK123456',
  transportType: 'plane',
  departureDate: '2024-03-20T10:00:00',
  arrivalDate: '2024-03-20T12:00:00',
  origin: 'New York',
  destination: 'London',
  price: 450,
  status: 'upcoming'
};

export function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(mockTrip);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/trip/${id}`);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this trip?')) {
      navigate('/');
    }
  };

  return (
    <div className="pb-20">
      <h1 className="text-2xl font-bold mb-6">Edit Trip</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-400 mb-2">Transport Type</label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { type: 'plane', icon: Plane },
              { type: 'train', icon: Train },
              { type: 'other', icon: Car }
            ].map(({ type, icon: Icon }) => (
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
                <span className="mt-2 capitalize">{type}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="ticketNumber" className="block text-gray-400 mb-2">
            Ticket Number
          </label>
          <input
            type="text"
            id="ticketNumber"
            value={trip.ticketNumber}
            onChange={(e) => setTrip({ ...trip, ticketNumber: e.target.value })}
            className="w-full bg-[#1c2a3a] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5ebbf6]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="origin" className="block text-gray-400 mb-2">
              From
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
              To
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
              Departure
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
              Price
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

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-[#5ebbf6] text-white py-3 rounded-lg font-medium hover:bg-[#4da8e4] transition-colors"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="flex-1 bg-red-500/20 text-red-300 py-3 rounded-lg font-medium hover:bg-red-500/30 transition-colors"
          >
            Delete Trip
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTrip;