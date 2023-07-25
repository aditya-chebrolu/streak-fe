"use client";
import { Goal, getAllGaols } from "@actions/goals";
import AddGoalForm from "@components/add-goal-form";
import Button from "@components/common/button";
import GoalCard from "@components/goal-card";
import { useEffect, useState } from "react";

export default function Home() {
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    getAllGaols().then((res) => {
      setGoals(res);
    });
  }, []);

  return (
    <div className="h-screen p-5 flex flex-col gap-10">
      <div className="flex relative">
        <Button text="Add Goal" styles="ml-auto" variant="action" />
        {/* <AddGoalForm /> */}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
          {goals.map((goal) => (
            <GoalCard goal={goal} />
          ))}
        </div>
      </div>
    </div>
  );
}
