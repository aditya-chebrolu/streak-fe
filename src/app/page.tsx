"use client";
import { Goal, getAllGaols } from "@actions/goals";
import Button from "@components/common/button";
import CreateGoalForm from "@components/create-goal-form";
import GoalCard from "@components/goal-card";
import { useEffect, useRef, useState } from "react";

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

  const addToColumn = (data: Goal) => {
    setColumns((prev) => {
      const temp = [...prev];
      temp[goalCount.current++ % 4].push(data);
      return temp;
    });
  };
  const updateData = ({ data, col, row }: { data: Goal["days"][number]; col: number; row: number }) => {
    setColumns((prev) => {
      const temp = [...prev];
      temp[col][row].days.push({ ...data, noDelay: true });
      return temp;
    });
  };

  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((p) => !p);
  };

  return (
    <>
      <div className="h-screen p-5 flex flex-col gap-10">
        <div className="flex relative justify-end">
          <Button text="Add Goal" onClick={toggleForm} />
        </div>
        <div className="grid tablet:grid-cols-4 gap-2 tablet:gap-4 tablet:mx-auto">
          {columns.map((goals, col) => (
            <div className="flex flex-col gap-4">
              {goals.map((goal, row) => (
                <GoalCard goal={goal} updateData={updateData} col={col} row={row} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <CreateGoalForm open={isFormVisible} toggleForm={toggleForm} addToColumn={addToColumn} />
    </>
  );
}
