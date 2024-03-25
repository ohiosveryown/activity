import { sport } from "assets/logic/variables.js"

const months = ["Jan", "Feb"]

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
    month: 1,
    day: 19,
    // month: months[0],
    // day: 20,
    //
    date: "Jan 19",
    icon: sport.run.icon,
    background: sport.run.tribble3,
    primary: 33,
    unit: "min",
    secondary: "1.2mi",
  },
]

// duration total
// let totalDuration = activities.reduce(
//   (total, activity) => total + activity.primary,
//   0
// )
// console.log(totalDuration)

// const mostRecentActivity = activities.sort(
//   (a, b) => new Date(b.date) - new Date(a.date)
// )[0]
// console.log(mostRecentActivity.date) // Output: Most recent date

// last day
let lastActivity = activities[activities.length - 1]
let lastMonth = lastActivity.month
let lastDay = lastActivity.day
let startDate = new Date()

startDate.setMonth(lastMonth - 1)
startDate.setDate(lastDay + 1)

while (startDate.getFullYear() === new Date().getFullYear()) {
  // check if the current year is the same
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

  // Increment by one day
  startDate.setDate(startDate.getDate() + 1)
}
