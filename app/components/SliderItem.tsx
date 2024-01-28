"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SliderItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="h-[400px] w-full overflow-hidden relative group">
      <div className={`min-w-full min-h-full relative ${className} mt-5 bg-[#833ca3] scale-bg`}>
        {children}
      </div>
    </div>
  );
};

export default SliderItem;
