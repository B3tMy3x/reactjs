import type { ComponentType, JSX } from 'react';
import { Dashboard } from '@/pages/Dashboard';
import { NewTrip } from '@/pages/NewTrip.tsx';
import { Stats } from '@/pages/Stats.tsx';
import { TripDetail } from '@/pages/TripDetail';
import { EditTrip } from '@/pages/EditTrip';
import { AiChat } from '@/pages/AiChat';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: Dashboard, title: 'Dashboard' },
  { path: '/new', Component: NewTrip, title: 'New Trip' },
  { path: '/stats', Component: Stats, title: 'Statistics' },
  { path: '/trip/:id', Component: TripDetail, title: 'Trip Detail' },
  { path: '/trip/:id/edit', Component: EditTrip, title: 'Edit Trip' },
  { path: '/ai-chat', Component: AiChat, title: 'AI Chat' },
];

  