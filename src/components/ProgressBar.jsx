import { useEffect, useState } from "react";

const ProgressBar = ({ value, total, leftLabel, rightLabel }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.min((value / total) * 100, 100));
  }, [value, total]);

  return (
    <div className="w-full">
      <div className="flex justify-between text-[12px] text-[#71717b] font-bold mb-2">
        <span>{leftLabel}</span>
       <span>
  {value}
  <span className="hidden md:inline"> {rightLabel}</span>
  /
  {total}
  <span className="hidden md:inline"> {rightLabel}</span>
</span>

      </div>
      <div className="w-full h-[6px] rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-white/30 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
