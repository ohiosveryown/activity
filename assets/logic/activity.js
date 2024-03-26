import { sport } from "assets/logic/variables.js"

export const activities = [
  {
    date: "Jan 1",
    icon: sport.hike.icon,
    background: sport.hike.gc1,
    primary: 62,
    unit: "min",
    secondary: "4.2mi",
  },
  {
    date: "Jan 2",
    icon: sport.hike.icon,
    background: sport.hike.bubble,
    primary: 115,
    unit: "min",
    secondary: "2.21mi",
  },
  {
    date: "Jan 3",
    icon: sport.run.icon,
    background: sport.run.tribble1,
    primary: 35,
    unit: "min",
    secondary: "3mi",
  },
  {
    date: "Jan 4",
    icon: sport.basketball.icon,
    background: sport.basketball.baycreek1,
    primary: 90,
    unit: "min",
    secondary: "515c",
  },
  {
    date: "Jan 5",
    icon: sport.hike.icon,
    background: sport.hike.arabia,
    primary: 120,
    unit: "min",
    secondary: "6.4mi",
  },
  {
    date: "Jan 6",
    icon: sport.run.icon,
    background: sport.run.tribble2,
    primary: 33,
    unit: "min",
    secondary: "1.2mi",
  },
  {
    date: "Jan 7",
    icon: sport.basketball.icon,
    background: sport.basketball.central,
    primary: 90,
    unit: "min",
    secondary: "515c",
  },
  {
    date: "Jan 8",
    icon: sport.hike.icon,
    background: sport.hike.fp1,
    primary: 43,
    unit: "min",
    secondary: "2.2mi",
  },
  {
    date: "Jan 9",
    icon: sport.rest.icon,
    background: sport.rest.mila,
    primary: "",
    unit: "",
    secondary: "Rest",
  },
  {
    date: "Jan 10",
    icon: sport.rest.icon,
    background: sport.rest.puppy2,
    primary: "",
    unit: "",
    secondary: "Rest",
  },
  {
    date: "Jan 11",
    icon: sport.basketball.icon,
    background: sport.basketball.piedmont1,
    primary: 90,
    unit: "min",
    secondary: "515c",
  },
  {
    date: "Jan 12",
    icon: sport.basketball.icon,
    background: sport.basketball.piedmont2,
    primary: 45,
    unit: "min",
    secondary: "515c",
  },
  {
    date: "Jan 13",
    icon: sport.run.icon,
    background: sport.hike.bubble,
    primary: 130,
    unit: "min",
    secondary: "6.4mi",
  },
  {
    date: "Jan 14",
    icon: sport.basketball.icon,
    background: sport.basketball.meridian,
    primary: 45,
    unit: "min",
    secondary: "1,125c",
  },
  {
    date: "Jan 15",
    icon: sport.hike.icon,
    background: sport.hike.gc2,
    primary: 125,
    unit: "min",
    secondary: "6.2mi",
  },
  {
    date: "Jan 16",
    icon: sport.rest.icon,
    background: sport.rest.puppy2,
    primary: "",
    unit: "",
    secondary: "Rest",
  },
  {
    date: "Jan 17",
    icon: sport.hike.icon,
    background: sport.hike.pf1,
    primary: 88,
    unit: "min",
    secondary: "3.3mi",
  },
  {
    date: "Jan 18",
    icon: sport.hike.icon,
    background: sport.hike.pf2,
    primary: 43,
    unit: "min",
    secondary: "2.4mi",
  },
  {
    date: "Jan 19",
    icon: sport.run.icon,
    background: sport.run.tribble3,
    primary: 33,
    unit: "min",
    secondary: "1.2mi",
  },
]

// loop through rest of year
let lastActivity = activities[activities.length - 1]
let lastActivityDate = new Date(lastActivity.date + ", 2024")
let lastMonth = lastActivityDate.getMonth()
let lastDay = lastActivityDate.getDate()
let startDate = new Date(2024, lastMonth, lastDay + 1)

while (startDate.getFullYear() === 2024) {
  activities.push({
    date: startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }), // format date to 'MMM d'
    icon: "",
    background: "",
    primary: "",
    unit: "",
    secondary: "",
  })
  startDate.setDate(startDate.getDate() + 1)
}
