import { Goal } from "@actions/goals";
import Button from "@components/common/button";
import Card from "@components/common/card";
import React, { useMemo } from "react";
import { animClass } from "./styles";

const StreakBox = ({ day, pos }: { day: Goal["days"][number]; pos: number }) => {
  const checkedClass = (() => {
    if (day.checked) return "bg-success";
    return "bg-danger";
  })();

  return (
    <div
      className={`h-[15px] w-[15px] flex-shrink-0 ${animClass(day.checked ? "#c0ff00" : "#FF004F")}`}
      style={{ animationDelay: `${pos * 100}ms` }}
    />
  );
};

const GoalCard = ({ goal }: { goal: Goal }) => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="uppercase text-lg font-mono tracking-widest ">{goal.name}</div>
          <Button text={"del"} variant="danger" size="sm" />
        </div>
        <div className="flex gap-[5px] flex-wrap w-[275px]">
          {goal.days.map((day, idx) => (
            <StreakBox day={day} key={idx} pos={idx} />
          ))}
        </div>
        <div className="flex">
          <Button text="Check In" />
        </div>
      </div>
    </Card>
  );
};

export default GoalCard;
