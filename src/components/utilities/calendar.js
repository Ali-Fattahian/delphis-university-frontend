import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  // create prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    const date = firstDateOfMonth.day(i);

    arrayOfDate.push({
      currentMonth: false,
      date,
    });
  }

  // generate current date
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const remaining = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.date(i),
    });
  }
  return arrayOfDate;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const events = [
  [2, 4, 1, 12],
  [5, 13, 16, 17],
  [18, 19, 20, 21],
  [22, 24, 26, 28],
  [2, 4, 1, 12],
  [10, 13, 16, 17],
  [18, 19, 20, 21],
  [22, 24, 26, 28],
  [2, 4, 1, 12],
  [12, 13, 16, 17],
  [18, 19, 20, 21],
  [22, 24, 26, 28],
];

export const eventsDescription = [
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
  [
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
    [
      {
        key: 1,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 08:30 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 2,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 10:15 AM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 3,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 01:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
      {
        key: 4,
        title: "Campus Bus and Walking Tour",
        date: "12/14/2023 03:00 PM",
        text: "Randall Welcome Center at Bryce Main",
      },
    ],
  ],
];
