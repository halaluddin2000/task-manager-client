import React from "react";

function InfoCard({ label, value, color }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-5 md:w-2 h-3 md:h-5 ${color} rounded-full`} />
      <p className="text-xs gap-3 md:text-[14px] text-gray-500">
        <span className="text-xs md:text-[15px] text-black font-semibold mr-1">
          {value}
        </span>
        {label}
      </p>
    </div>
  );
}

export default InfoCard;
