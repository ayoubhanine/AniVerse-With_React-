import React from "react";

export default function StatsCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full ${color}`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}