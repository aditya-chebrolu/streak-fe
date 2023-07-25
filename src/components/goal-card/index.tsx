import { Goal } from "@actions/goals";
import Button from "@components/common/button";
import Card from "@components/common/card";
import { differenceInCalendarDays } from "date-fns";
import React from "react";

const StreakBox = ({ day }: { day: Goal["streak"][number] }) => {
  const checkedClass = (() => {
    if (day.checked) {
      return "bg-success";
    } else if (differenceInCalendarDays(new Date(), new Date(day.streakDate)) <= 0 && !day.checked) {
      return "bg-black";
    } else return "bg-danger";
  })();
  return <div className={`border h-[15px] w-[15px] flex-shrink-0 ${checkedClass}`} />;
};

const GoalCard = ({ goal }: { goal: Goal }) => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="uppercase text-lg font-mono tracking-widest">{goal.name}</div>
        <div className="flex gap-1 flex-wrap w-fit">
          {goal.streak.map((day, idx) => (
            <StreakBox day={day} key={idx} />
          ))}
        </div>
        <div className="flex">
          <Button text="Check In" styles="ml-auto grow" />
        </div>
      </div>
    </Card>
  );
};

export default GoalCard;
