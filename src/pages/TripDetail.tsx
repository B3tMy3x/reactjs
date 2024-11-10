import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Plane,
  Train,
  Car,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Edit2,
} from "lucide-react";
import { format } from "date-fns";
import { Trip } from "@/types";

const mockTrip: Trip = {
  id: "1",
  ticketNumber: "TK123456",
  transportType: "plane",
  departureDate: "2024-03-20T10:00:00",
  arrivalDate: "2024-03-20T12:00:00",
  origin: "New York",
  destination: "London",
  price: 450,
  status: "upcoming",
};

const icons = {
  plane: Plane,
  train: Train,
  other: Car,
};

export function TripDetail() {
  const { id } = useParams();
  const trip = mockTrip;
  const Icon = icons[trip.transportType];

  return (
    <div className="pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Trip Details</h1>
        <Link
          to={`/trip/${id}/edit`}
          className="flex items-center space-x-2 bg-[#5ebbf6] text-white px-4 py-2 rounded-lg hover:bg-[#4da8e4] transition-colors"
        >
          <Edit2 size={18} />
          <span>Edit</span>
        </Link>
      </div>

      <div className="bg-[#1c2a3a] rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <Icon size={32} className="text-[#5ebbf6]" />
          <div>
            <h2 className="text-xl font-bold">
              {trip.origin} → {trip.destination}
            </h2>
            <p className="text-gray-400">#{trip.ticketNumber}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="text-[#5ebbf6]" size={20} />
            <span>{format(new Date(trip.departureDate), "MMMM d, yyyy")}</span>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="text-[#5ebbf6]" size={20} />
            <span>
              {format(new Date(trip.departureDate), "HH:mm")} -{" "}
              {format(new Date(trip.arrivalDate), "HH:mm")}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-[#5ebbf6]" size={20} />
            <div>
              <p className="font-medium">{trip.origin}</p>
              <p className="text-gray-400">to</p>
              <p className="font-medium">{trip.destination}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <DollarSign className="text-[#5ebbf6]" size={20} />
            <span>${trip.price}</span>
          </div>
        </div>
      </div>

      <div className="bg-[#1c2a3a] rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Ticket Information</h2>
        <div className="space-y-2">
          <p>
            <span className="text-gray-400">Carrier:</span>{" "}
            {trip.transportType === "plane"
              ? "Airlines"
              : trip.transportType === "train"
              ? "Railways"
              : "Transport Services"}
          </p>
          <p>
            <span className="text-gray-400">Class:</span> Economy
          </p>
          <p>
            <span className="text-gray-400">Seat:</span> 12A
          </p>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
