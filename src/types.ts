export interface Trip {
    id: string;
    ticketNumber: string;
    transportType: 'airplane' | 'train' | 'other';
    departureDate: string;
    arrivalDate: string;
    origin: string;
    destination: string;
    price: number;
    status: 'upcoming' | 'completed' | 'cancelled';
  }