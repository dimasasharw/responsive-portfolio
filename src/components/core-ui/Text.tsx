import React from "react";

type Props = {
  color?: "gray" | "white";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Text(props: Props) {
  const { children, color = "gray" } = props;
  return (
    <div className={`text-${FONT_COLOR[color]} font-mono`}>{children}</div>
  );
}

const FONT_COLOR = {
  gray: "[#7D7D7D]",
  white: "white",
};
