import React from 'react';
import { Users, Plane, Train, Car, Activity, UserCheck } from 'lucide-react';

const stats = {
  totalTrips: 156,
  transportDistribution: {
    plane: 89,
    train: 42,
    other: 25
  },
  metrics: {
    dau: 234,
    mau: 3150,
    retention: {
      day7: 68,
      day30: 42
    }
  },
  popularRoutes: [
    { origin: 'Нью-Йорк', destination: 'Лондон', count: 28 },
    { origin: 'Париж', destination: 'Берлин', count: 22 },
    { origin: 'Токио', destination: 'Сеул', count: 19 },
  ]
};

export function Stats() {
  return (
    <div className="pb-20">
     
      <div className="bg-[#1c2a3a] rounded-lg p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">Активных клиентов</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#243447] rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="shrink-0 text-[#5ebbf6]" size={30} />
                
              </div>
              <span className="text-2xl">{stats.metrics.dau} <span className="text-gray-400 text-base">в день</span></span>
              
            </div>
            <div className="bg-[#243447] rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="shrink-0 text-[#5ebbf6]" size={30} />
              </div>
              <span className="text-2xl">{stats.metrics.mau} <span className="text-gray-400 text-base">в месяц</span></span>
            
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <UserCheck className="shrink-0 text-[#5ebbf6]" size={30} />
              <span className='w-[50px]'>Удержание клиентов</span>
            </div>

            <div className="shrink-0 text-right">
              <div className="space-y-1">
                <p>
                  <span className="text-gray-400">7 дней:</span>{' '}
                  <span className="font-bold">{stats.metrics.retention.day7}%</span>
                </p>
                <p>
                  <span className="text-gray-400">30 дней:</span>{' '}
                  <span className="font-bold">{stats.metrics.retention.day30}%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1c2a3a] rounded-lg p-6 mb-6">
        <h2 className="text-lg font-medium mb-4">Обзор транспорта</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            <Plane className="shrink-0 text-[#5ebbf6]" size={30} />
            <div>
              <p className="text-xl">{stats.transportDistribution.plane}</p>
              <p className="text-lg text-gray-400">Полеты</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Train className="shrink-0 text-[#5ebbf6]" size={30} />
            <div>
              <p className="text-xl">{stats.transportDistribution.train}</p>
              <p className="text-lg text-gray-400">Поездки на поезде</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Car className="shrink-0 text-[#5ebbf6]" size={30} />
            <div>
              <p className="text-xl">{stats.transportDistribution.other}</p>
              <p className="text-lg text-gray-400">Другой транспорт</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1c2a3a] rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Популярные маршруты</h2>
        <div className="space-y-4">
          {stats.popularRoutes.map((route, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Plane className="shrink-0 text-[#5ebbf6]" size={30} />
                <span className='text'>{route.origin} → {route.destination}</span>
              </div>
              <span className="text-gray-400">{route.count} поездок</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;