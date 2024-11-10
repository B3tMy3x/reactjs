import React from "react";
import { NavLink } from "react-router-dom";
import { Home, PlusCircle, BarChart } from "lucide-react";

export function Navigation() {
  const navItems = [
    { to: "/", icon: Home, label: "Главная" },
    { to: "/new", icon: PlusCircle, label: "Новая" },
    { to: "/stats", icon: BarChart, label: "Статистика" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1c2a3a] border-t border-[#2b3b4d]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-around py-3">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center space-y-1 ${
                  isActive ? "text-[#5ebbf6]" : "text-gray-400"
                }`
              }
            >
              <Icon size={24} />
              <span className="text-xs">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
