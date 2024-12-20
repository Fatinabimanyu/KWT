import React from "react";

export default function ArticleCardSkeleton() {
  return (
    <div className="animate-pulse flex flex-col space-y-4 p-4 bg-gray-200 rounded-md">
      <div className="h-40 bg-gray-300 rounded-md"></div>
      <div className="h-6 bg-gray-300 rounded-md"></div>
      <div className="h-4 bg-gray-300 rounded-md"></div>
      <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
    </div>
  );
}
