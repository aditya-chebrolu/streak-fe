import { BASE_URL } from "@constants";
import { Goal } from "@type/goals";
import axios from "axios";

const data = [
  {
    name: "Task",
    startDate: "2023-08-24T18:30:00.000Z",
    endDate: "2023-09-09T18:30:00.000Z",
    id: "64f024c059192ee420636647",
    days: [
      {
        checked: false,
        date: "2023-08-24T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-08-25T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-08-26T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-08-27T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-08-28T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-08-29T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-08-30T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-08-31T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-01T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-02T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-03T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-09-04T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-05T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-06T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-07T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-08T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-09T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-10T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-11T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-12T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-13T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-14T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-15T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-09-16T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-17T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-09-18T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-19T18:30:00.000Z"
      }
    ]
  },
  {
    name: "random",
    startDate: "2023-09-16T18:30:00.000Z",
    endDate: "2023-10-09T18:30:00.000Z",
    id: "6506be24fc018011332aed1d",
    days: [
      {
        checked: true,
        date: "2023-09-16T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-17T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-09-18T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-19T18:30:00.000Z"
      }
    ]
  },
  {
    name: "random",
    startDate: "2023-09-16T18:30:00.000Z",
    endDate: "2023-10-09T18:30:00.000Z",
    id: "6506c44f355a535393b5dd81",
    days: [
      {
        checked: false,
        date: "2023-09-16T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-17T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-09-18T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-19T18:30:00.000Z"
      }
    ]
  },
  {
    name: "random",
    startDate: "2023-09-16T18:30:00.000Z",
    endDate: "2023-10-09T18:30:00.000Z",
    id: "6506c46b355a535393b5dd83",
    days: [
      {
        checked: false,
        date: "2023-09-16T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-17T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-09-18T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-19T18:30:00.000Z"
      }
    ]
  },
  {
    name: "random",
    startDate: "2023-09-16T18:30:00.000Z",
    endDate: "2023-10-09T18:30:00.000Z",
    id: "6506c471355a535393b5dd85",
    days: [
      {
        checked: false,
        date: "2023-09-16T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-17T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-09-18T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-19T18:30:00.000Z"
      }
    ]
  },
  {
    name: "random",
    startDate: "2023-09-16T18:30:00.000Z",
    endDate: "2023-10-09T18:30:00.000Z",
    id: "6506c47e355a535393b5dd89",
    days: [
      {
        checked: false,
        date: "2023-09-16T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-17T18:30:00.000Z"
      },
      {
        checked: true,
        date: "2023-09-18T18:30:00.000Z"
      },
      {
        checked: false,
        date: "2023-09-19T18:30:00.000Z"
      }
    ]
  }
];

export const getAllGaols = async () => {
  try {
    // const res = await axios<Goal[]>(BASE_URL);
    // if (typeof res.data !== "object") throw "blah";
    return data;
  } catch (e) {
    return [];
  }
};
