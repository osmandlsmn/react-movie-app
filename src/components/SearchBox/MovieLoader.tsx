import * as React from "react";

const MovieLoader: React.FC = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((x, index) => (
        <div role="status" key={index} className="w-full py-2 px-3 flex space-x-2 animate-pulse">
          <div className="w-20 h-20 rounded-lg bg-gray-600"></div>
          <div className="flex flex-col space-y-1 flex-grow justify-center">
            <div className="h-4 bg-gray-600 mb-2"></div>
            <div className="h-2 bg-gray-600"></div>
            <div className="h-2 bg-gray-600"></div>
            <div className="h-2 bg-gray-600"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieLoader;
