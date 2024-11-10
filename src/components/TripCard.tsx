import React from "react";
import { format } from "date-fns";
import { Plane, Train, Car } from "lucide-react";
import { Trip } from "../types";
import { Link } from "react-router-dom";

const icons = {
  plane: Plane,
  train: Train,
  other: Car,
};

export default function TripCard({ trip }: { trip: Trip }) {
  const Icon = icons[trip.transportType];

  return (
    <Link to={`/trip/${trip.id}`}>
      <div className="mb-[10px] bg-[#1c2a3a] rounded-lg p-4 hover:bg-[#2b3b4d] transition-colors">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Icon className="text-[#5ebbf6]" size={24} />
            <div>
              <h3 className="font-medium">
                {trip.origin} → {trip.destination}
              </h3>
              <p className="text-sm text-gray-400">#{trip.ticketNumber}</p>
            </div>
          </div>
          <span
            className={`px-2 py-1 rounded text-xs ${
              trip.status === "upcoming"
                ? "bg-blue-500/20 text-blue-300"
                : trip.status === "completed"
                ? "bg-green-500/20 text-green-300"
                : "bg-red-500/20 text-red-300"
            }`}
          >
            {trip.status}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{format(new Date(trip.departureDate), "MMM d, yyyy")}</span>
          <span>${trip.price}</span>
        </div>
      </div>
    </Link>
  );
}
