import Button from "@components/common/button";
import React from "react";
import { animClass } from "./styles";
import { isToday } from "date-fns";
import { deleteGoal } from "@services/delete-goal";
import { checkIn } from "@services/check-in";
import { Goal } from "@type/goals";

const StreakBox = ({ day, pos }: { day?: Goal["days"][number]; pos: number }) => {
  if (!day)
    return (
      <div
        className={`h-[15px] w-[15px] flex-shrink-0 border border-[#353839] ${animClass("black")}`}
        style={{ animationDelay: `${pos * 100}ms` }}
      />
    );
  return (
    <div
      className={`h-[15px] w-[15px] flex-shrink-0 ${animClass(day.checked ? "#c0ff00" : "#FF004F")}`}
      style={day.noDelay ? {} : { animationDelay: `${pos * 100}ms` }}
    />
  );
};

const GoalCard = ({
  goal,
  goalIdx,
  addDaysToGoal,
  col,
  removeGoalFromColumn
}: {
  goal: Goal;
  addDaysToGoal: (v: { goalIdx: number; col: number; data: Goal["days"][number] }) => void;
  removeGoalFromColumn: (goalId: string, col: number) => void;
  col: number;
  goalIdx: number;
}) => {
  const onCheckIn = async () => {
    const res = await checkIn(goal.id);
    if (res?.checked) {
      addDaysToGoal({ data: res, goalIdx, col });
    } else {
    }
  };

  const onDelete = async () => {
    const res = await deleteGoal(goal.id);
    if (res) {
      removeGoalFromColumn(goal.id, col);
    }
  };

  const isTodayChecked = goal.days.length > 0 ? isToday(new Date(goal.days.at(-1)!.date)) : false;

  return (
    <div className="flex flex-col gap-4 p-2 bg-black border border-1.5">
      <div className="flex justify-between items-center">
        <div className="uppercase text-lg font-mono tracking-widest ">{goal.name}</div>
        <Button text={"del"} variant="danger" size="sm" onClick={onDelete} />
      </div>
      <div className={`flex gap-[5px] flex-wrap w-[calc(14*15px+13*5px)]`}>
        {goal.days.map((day, idx) => (
          <StreakBox day={day} key={idx} pos={idx} />
        ))}
        {!isTodayChecked && <StreakBox key={goal.days.length} pos={goal.days.length} />}
      </div>
      <div className="flex justify-end">
        <Button
          text={isTodayChecked ? "Checked" : "Check In"}
          onClick={isTodayChecked ? () => null : onCheckIn}
          variant={isTodayChecked ? "success" : "action"}
        />
      </div>
    </div>
  );
};

export default GoalCard;
