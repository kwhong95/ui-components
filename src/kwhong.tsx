import React from "react";

export interface kwhongProps {
  name: string;
}

export const Kwhong: React.FC<kwhongProps> = ({ name }) => {
  return <span>Hello, My name is, {name}</span>
}
