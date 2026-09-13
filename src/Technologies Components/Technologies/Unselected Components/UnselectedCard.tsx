import React from "react";
import type { DataType } from "../../../DataType";

interface StackProps {
  stack: DataType;
}

const UnselectedCard = ({ stack }: StackProps) => {
  console.log(stack);

  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Top section */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={stack.icon}
            alt={stack.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
          {stack.badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-bold text-gray-900">{stack.name}</h2>

      {/* Description */}
      <p className="mt-2 min-h-[72px] text-sm leading-5 text-gray-500">
        {stack.description}
      </p>

      {/* Divider */}
      <div className="my-4 border-t border-gray-100" />

      {/* Information */}
      <div className="flex items-center justify-between">
        <span className="rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
          {stack.category}
        </span>

        <span className="text-xs text-gray-500">{stack.difficulty}</span>

        <span className="flex items-center gap-1 text-sm font-medium text-gray-700">
          <span className="text-yellow-400">★</span>
          {stack.rating}
        </span>
      </div>

      {/* Add button */}
      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-gray-950 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default UnselectedCard;
