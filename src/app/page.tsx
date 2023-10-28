"use client";
import { getAllGaols } from "@services/get-goals";
import Button from "@components/common/button";
import CreateGoalForm from "@components/create-goal-form";
import GoalCard from "@components/goal-card";
import { useEffect, useMemo, useRef, useState } from "react";
import { Goal } from "@type/goals";

export default function Home() {
  const [columns, setColumns] = useState<Array<Array<Goal>>>([[], [], [], []]);
  const goalCount = useRef(0);

  useEffect(() => {
    getAllGaols().then((res) => {
      goalCount.current = res.length;
      setColumns(() => {
        const temp: Array<Array<Goal>> = [[], [], [], []];
        for (let i = 0; i < res.length; i++) {
          temp[i % 4].push(res[i]);
        }
        return temp;
      });
    });
  }, []);

  const addGoalToColumn = (data: Goal) => {
    setColumns((prev) => {
      const temp = [...prev];
      temp[goalCount.current++ % 4].push(data);
      return temp;
    });
  };

  const addDaysToGoal = ({ data, col, goalIdx }: { data: Goal["days"][number]; col: number; goalIdx: number }) => {
    setColumns((prev) => {
      const temp = [...prev];
      temp[col][goalIdx].days.push({ ...data, noDelay: true });
      return temp;
    });
  };

  const removeGoalFromColumn = (objectId: string, col: number) => {
    setColumns((prev) => {
      const temp = [...prev];
      temp[col] = temp[col].filter((goal) => goal.id !== objectId);
      return temp;
    });
  };

  const [isFormVisible, setFormVisible] = useState(false);

  const [openForm, closeForm] = useMemo(() => [() => setFormVisible(true), () => setFormVisible(false)], []);

  return (
    <>
      <div className="h-screen p-5 flex flex-col gap-10">
        <div className="flex relative justify-end">
          <Button text="Add Goal" onClick={openForm} />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-4 mx-auto">
          {columns.map((goals, col) => (
            <div className="flex flex-col gap-4">
              {goals.map((goal, goalIdx) => (
                <GoalCard
                  goal={goal}
                  addDaysToGoal={addDaysToGoal}
                  col={col}
                  goalIdx={goalIdx}
                  removeGoalFromColumn={removeGoalFromColumn}
                  key={goalIdx}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <CreateGoalForm open={isFormVisible} toggleForm={closeForm} addToColumn={addGoalToColumn} />
    </>
  );
}
