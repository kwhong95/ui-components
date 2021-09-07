import React from "react";

export interface kwhongProps {
  name: string;
}

const kwhong: React.FC<kwhongProps> = ({ name }) => {
  return <span>Hello, My name is, {name}</span>
}

export default kwhong;
