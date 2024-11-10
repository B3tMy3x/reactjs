import React from "react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
}

export default function MetricCard({
  title,
  value,
  change,
  icon: Icon,
}: MetricCardProps) {
  return (
    <div className="bg-[#1c2a3a] p-4 rounded-lg">
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="text-[#5ebbf6]" size={20} />
        <span className="text-gray-400">{title}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      {change !== undefined && (
        <p
          className={`text-sm mt-1 ${
            change >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
        </p>
      )}
    </div>
  );
}
