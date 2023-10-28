import { Dialog } from "@mui/material";
import React, { InputHTMLAttributes, useRef, useState } from "react";
import { dialogStyles } from "./styles";
import Button from "@components/common/button";
import Card from "@components/common/card";
import { createGoal } from "@services/add-goal";
import { Goal } from "@type/goals";
import { format } from "date-fns";

const CreateGoalForm = ({ open, toggleForm, addToColumn }: Props) => {
  return (
    <Dialog open={open} onClose={toggleForm} className={dialogStyles}>
      <Content toggleForm={toggleForm} addToColumn={addToColumn} />
    </Dialog>
  );
};

const Content = ({ toggleForm, addToColumn }: Omit<Props, "open">) => {
  const [data, setData] = useState(() => ({ name: "", startDate: "", endDate: "" }));
  const onCreate = async () => {
    const res = await createGoal(data);
    if (res) {
      res.days = [];
      addToColumn(res);
      toggleForm();
    }
  };

  const onInputChange = (key: string) => (value: any) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card>
      <div className="text-white flex flex-col gap-4 p-2">
        <div className="flex justify-end">
          <Button variant="danger" text="close" size="sm" onClick={toggleForm} />
        </div>
        <Input type="text" label="Name of the goal" value={data.name} onChange={onInputChange("name")} />
        <div className="flex gap-x-2">
          <Input
            type="date"
            label="Start date"
            value={data.startDate}
            onChange={onInputChange("startDate")}
            min={format(new Date(), "yyyy-MM-dd")}
          />
          <div className="self-end">
            <Button text="Today" variant="success" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            <small>Select Duration</small>
            <div className="flex gap-1">
              <div className="border text-xs px-2 py-1">
                <span>{1}</span>
                <span> Week</span>
              </div>
              <div className="border text-xs px-2 py-1 border-success-100 text-success-100">
                <span>{1}</span>
                <span> Month</span>
              </div>
              <div className="border text-xs px-2 py-1">
                <span>{1}</span>
                <span> Year</span>
              </div>
              <Button text="Custom" variant="action" />
            </div>
          </div>
          <div className="text-xs self-center mt-4">or</div>
          <Input type="date" label="End date" value={data.endDate} onChange={onInputChange("endDate")} />
        </div>
        <Button text="Add" variant="action" onClick={onCreate} />
      </div>
    </Card>
  );
};

type InputProps = {
  label?: string;
  onChange: (v: any) => void;
};

const Input = ({ label, type, value, min, onChange }: InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <small>{label}</small>
      <input
        type={type}
        value={value}
        className="bg-black border outline-none p-1 w-[300px] text-sm"
        onChange={(e) => onChange(e.target.value)}
        min={min}
      />
    </div>
  );
};

type Props = {
  open: boolean;
  toggleForm: () => void;
  addToColumn: (data: Goal) => void;
};

export default CreateGoalForm;
