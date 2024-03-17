import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="card shadow-sm border-0 rounded-3 h-100">
      <div className="m-2">
        <div className="placeholder-glow w-100 h-100">
          <div className="placeholder py-5 w-100 h-100 rounded-3" />
        </div>
      </div>
      <div className="m-2">
        <div className="placeholder-glow">
          <div className="placeholder col-12 rounded-3" />
        </div>
        <div className="placeholder-glow mt-1">
          <div className="placeholder col-12 rounded-3" />
        </div>
        <div className="placeholder-glow mt-1">
          <div className="placeholder col-12 rounded-3" />
        </div>
      </div>
    </div>
  );
}
