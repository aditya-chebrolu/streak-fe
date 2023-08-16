"use client";
import { Goal, getAllGaols } from "@actions/goals";
import Button from "@components/common/button";
import GoalCard from "@components/goal-card";
import { useEffect, useState } from "react";

export default function Home() {
  const [buckets, setBuckets] = useState<Array<Array<Goal>>>([[], [], [], []]);

  useEffect(() => {
    getAllGaols().then((res) => {
      setBuckets(() => {
        const temp: Array<Array<Goal>> = [[], [], [], []];
        for (let i = 0; i < res.length; i++) {
          temp[i % 4].push(res[i]);
        }
        return temp;
      });
    });
  }, []);

  return (
    <div className="h-screen p-5 flex flex-col gap-10">
      <div className="flex relative">
        <Button text="Add Goal" />
      </div>
      <div className="grid tablet:grid-cols-4 gap-2 tablet:gap-4 tablet:mx-auto">
        {buckets.map((goals) => (
          <div className="flex flex-col gap-4">
            {goals.map((goal) => (
              <GoalCard goal={goal} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
