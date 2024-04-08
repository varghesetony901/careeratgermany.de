import React from "react";
import { Skeleton } from "./ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="w-full h-96">
      <Skeleton className="fixed top-0 left-0 z-50 w-full h-1 bg-gradient-to-t from-green-400 to-green-300"></Skeleton>
    </div>
  );
};

export default LoadingSkeleton;
