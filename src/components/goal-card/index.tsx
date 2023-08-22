import { Goal, checkIn } from "@actions/goals";
import Button from "@components/common/button";
import Card from "@components/common/card";
import React, { useMemo } from "react";
import { animClass } from "./styles";
import { isToday } from "date-fns";

const StreakBox = ({ day, pos }: { day: Goal["days"][number]; pos: number }) => {
  return (
    <div
      className={`h-[15px] w-[15px] flex-shrink-0 ${animClass(day.checked ? "#c0ff00" : "#FF004F")}`}
      style={day.noDelay ? {} : { animationDelay: `${pos * 100}ms` }}
    />
  );
};

const GoalCard = ({ goal, row, updateData, col }: { goal: Goal; updateData: (v: any) => void; col: number; row: number }) => {
  const onClick = async () => {
    const res = await checkIn(goal._id);
    if (res?.checked) {
      updateData({ data: res, row, col });
    } else {
    }
  };

  const isTodayChecked = goal.days.length > 0 ? isToday(new Date(goal.days.at(-1)!.date)) : false;

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
        <div className="flex justify-end">
          <Button
            text={isTodayChecked ? "Checked" : "Check In"}
            onClick={isTodayChecked ? () => null : onClick}
            variant={isTodayChecked ? "success" : "action"}
          />
        </div>
      </div>
    </Card>
  );
};

export default GoalCard;
