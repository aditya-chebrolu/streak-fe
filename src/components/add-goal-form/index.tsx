import { createGoal } from "@actions/goals";
import Button from "@components/common/button";
import Card from "@components/common/card";
import React, { MutableRefObject, useRef } from "react";

const InputBar = ({
  type = "text",
  label,
  reff
}: {
  type?: "text" | "date";
  label: string;
  reff: MutableRefObject<HTMLInputElement | null>;
}) => {
  return (
    <div className="flex flex-col gap-1 uppercase">
      <label className="text-white text-xs">{label}</label>
      <input className="bg-black border focus:outline-none p-1 font-thin" type={type} ref={reff} />
    </div>
  );
};

const AddGoalForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const fromDateRef = useRef<HTMLInputElement | null>(null);
  const toDateRef = useRef<HTMLInputElement | null>(null);
  const onCreate = async () => {
    const [name, from, to] = [nameRef.current?.value, fromDateRef.current?.value, toDateRef.current?.value];
    if (!name || !from || !to) {
      return;
    }
    const startDate = new Date(from);
    const endDate = new Date(to);
    // console.log(">", to);
    await createGoal({ name, startDate, endDate });
  };
  return (
    <Card elevated containerStyles="absolute top-[calc(100%+10px)] right-0">
      <div className="flex flex-col gap-5 w-[400px] p-2">
        <InputBar label="Name of the goal :" reff={nameRef} />
        <InputBar type="date" label="Start Date" reff={fromDateRef} />
        <InputBar type="date" label="End Date" reff={toDateRef} />
        <Button text="Create" variant="success" onClick={onCreate} />
      </div>
    </Card>
  );
};

export default AddGoalForm;
