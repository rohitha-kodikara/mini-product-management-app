import React from "react";

const Loader = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[50vh] gap-3"
      role="status"
      aria-label="Loading content"
    >
      <div className="relative w-12 h-12">
        {/* Outer ring */}
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full dark:border-slate-700"></div>
        {/* Inner spinning arc */}
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Loading...</span>
    </div>
  );
};

export default Loader;
