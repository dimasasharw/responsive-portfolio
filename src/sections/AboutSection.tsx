import React from "react";
import Image from "next/image";

import { Text } from "@/components/core-ui/Text";

export function AboutSection() {
  return (
    <div className="flex flex-col items-center w-full">
      <Image
        src="assets/GIF/underConstruction.gif"
        alt="Coding animation"
        width={256}
        height={256}
        unoptimized
      />
      <h1 className="text-white text-2xl font-bold mt-4">
        <Text>This Section is Under Construction</Text>
      </h1>
    </div>
  );
}
