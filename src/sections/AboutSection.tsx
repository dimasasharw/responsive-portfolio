import React from "react";
import Image from "next/image";

import { Text } from "@/components/core-ui/Text";

export function AboutSection() {
  return (
    <div id="about" className="flex flex-col items-center w-full">
      <Image
        src="assets/GIF/underConstruction.gif"
        alt="Coding animation"
        width={256}
        height={256}
        unoptimized
      />
      <h1 className="text-white text-2xl font-bold mt-4">
        <Text>
          After shifting my focus from a non-tech background, I discovered my
          passion for web development. I enjoy the balance between creativity
          and logic that comes with building applications. My main stack is
          React, TypeScript, and Tailwind CSS, and I often use Redux Toolkit for
          state management. I also love working with data visualization tools
          like ApexCharts. I’m always eager to learn new technologies and
          improve the way I build things. Outside of coding, I continuously seek
          to refine my workflow and stay updated with modern development
          practices. I value clean, maintainable code and enjoy collaborating on
          projects that emphasize both technical quality and user experience.
        </Text>
      </h1>
    </div>
  );
}
