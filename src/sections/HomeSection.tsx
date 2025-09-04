import { Text } from "@/components/core-ui/Text";
import React from "react";

export default function HomeSection() {
  return (
    <div>
      <h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        // initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
      >
        <Text color="white">
          <span className="font-bold">Hello, I'm Dimas.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">almost 2 years</span> of experience in
          Frontend. I enjoy building{" "}
          <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </Text>
      </h1>
    </div>
  );
}
