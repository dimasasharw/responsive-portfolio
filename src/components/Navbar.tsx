import React from "react";

import { Text } from "./core-ui/Text";
import { MENUS } from "@/constants/menus";

export default function Navbar() {
  return (
    <div className="flex w-full h-[4rem] justify-center fixed top-0 border-b border-b-[#444444] bg-black/90">
      <div className="flex flex-row items-center gap-5">
        {MENUS.map((item, index) => (
          <Text key={index}>{item?.label}</Text>
        ))}
      </div>
    </div>
  );
}
