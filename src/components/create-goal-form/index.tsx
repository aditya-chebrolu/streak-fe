import { css } from "@emotion/css";
import { Dialog } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { dialogStyles } from "./styles";
import Button from "@components/common/button";
import { Goal, createGoal } from "@actions/goals";

type InputProps = {
  label?: string;
  value: string;
  onChange: (v: any) => void;
  type: "text" | "date";
};

const Input = ({ label, type, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <small>{label}</small>
      <input
        type={type}
        value={value}
        className="bg-black border outline-none p-1 w-[300px] text-sm"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

type Props = {
  open: boolean;
  toggleForm: () => void;
  addToColumn: (data: Goal) => void;
};

const Content = ({ toggleForm, addToColumn }: Omit<Props, "open">) => {
  const [data, setData] = useState(() => ({ name: "", startDate: "", endDate: "" }));
  const onCreate = async () => {
    const res = await createGoal(data);
    if (res) {
      res.days = [];
      addToColumn(res);
      //   toggleForm();
    }
  };

  const onInputChange = (key: string) => (value: any) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className="text-white p-4 flex flex-col gap-4">
      <div className="flex justify-end">
        <Button variant="danger" text="close" size="sm" />
      </div>
      <Input type="text" label="Name of the goal" value={data.name} onChange={onInputChange("name")} />
      <Input type="date" label="Start date" value={data.startDate} onChange={onInputChange("startDate")} />
      <Input type="date" label="End date" value={data.endDate} onChange={onInputChange("endDate")} />
      <Button text="Add" variant="action" onClick={onCreate} />
    </div>
  );
};

const CreateGoalForm = ({ open, toggleForm, addToColumn }: Props) => {
  return (
    <Dialog open={open} onClose={toggleForm} className={dialogStyles}>
      <Content toggleForm={toggleForm} addToColumn={addToColumn} />
    </Dialog>
  );
};
export default CreateGoalForm;
