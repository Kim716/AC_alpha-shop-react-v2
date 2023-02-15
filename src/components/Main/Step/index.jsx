import React from "react";
import Progress from "./Progress";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Controller from "./Controller";

function Step() {
  return (
    <>
      <Progress />
      <Part1 />
      <Part2 />
      <Part3 />
      <Controller />
    </>
  );
}

export default Step;
