import React from "react";

const Progress = ({
  title,
  icon,
  subtitle,
  startTime,
  endTime,
  value,
  max,
  unit = "Hr",
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div
      className="
        w-full
        rounded-xl
        border border-white/15
        bg-white/5
        backdrop-blur-lg
        px-5 py-4
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      "
    >

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="opacity-90">{icon}</span>
          <span className="text-white">{title}</span>
        </div>
        <span className="text-white/40 text-sm">⟳</span>
      </div>

      <div className="text-white/70 text-sm mt-1">
        {subtitle}:{" "}
        <span className="text-white font-medium">{value}</span>
      </div>

      <div className="flex justify-between text-white/45 text-xs mt-2">
        <span>
          From {startTime} – To {endTime}
        </span>
        <span>
          {value.toFixed(2)} {unit} / {max} {unit}
        </span>
      </div>


      <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="
            h-full
            bg-gradient-to-r from-white/70 to-white/40
            transition-all duration-300
          "
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
