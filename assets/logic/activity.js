import { sport } from "assets/logic/variables.js"

export const activities = [
  {
    date: "Jan 1",
    duration: 45,
    category: sport.basketball.icon,
    img: sport.basketball.piedmont,
    distance: "45 min",
  },
  {
    date: "Jan 2",
    duration: 120,
    category: sport.hike.icon,
    img: sport.hike.bubble,
    distance: "2.21 mi",
  },
  {
    date: "Jan 3",
    duration: 35,
    category: sport.run.icon,
    img: sport.run.tribble,
    distance: "3.12 mi",
    pace: "9:30",
  },
  {
    date: "Jan 4",
    duration: 60,
    category: sport.basketball.icon,
    img: sport.basketball.piedmont,
    distance: "60 min",
  },
  {
    date: "Jan 5",
    duration: 90,
    category: sport.hike.icon,
    img: sport.hike.bubble,
    distance: "6.4 mi",
  },
  {
    date: "Jan 6",
    duration: 33,
    category: sport.run.icon,
    img: sport.run.tribble,
    distance: "1.2 mi",
    pace: "9:01",
  },
  {
    date: "Jan 7",
    duration: 15,
    category: sport.rest.icon,
    img: sport.rest.empty,
    distance: "",
  },
  {
    date: "Jan 8",
    duration: 15,
    category: sport.rest.icon,
    img: sport.rest.empty,
    distance: "",
  },
  {
    date: "Jan 9",
    duration: 15,
    img: sport.rest.empty,
    distance: "",
  },
  {
    date: "Jan 10",
    duration: 15,
    category: sport.rest.icon,
    img: sport.rest.empty,
    distance: "",
  },
  {
    date: "Jan 11",
    duration: 15,
    category: sport.rest.icon,
    img: sport.rest.empty,
    distance: "",
  },
  {
    date: "Jan 12",
    duration: 15,
    category: sport.rest.icon,
    img: sport.rest.empty,
    distance: "",
  },
  {
    date: "Jan 13",
    duration: 200,
    distance: 6.4,
    category: sport.run.icon,
    img: sport.hike.bubble,
    distance: "6.4 mi",
    pace: "9:30",
  },
  {
    date: "Jan 14",
    duration: 150,
    distance: 63.2,
    category: sport.basketball.icon,
    img: sport.basketball.piedmont,
    distance: "63 min",
  },
]

let startDate = new Date() // current date
startDate.setMonth(0) // setting month to January
startDate.setDate(15) // setting day to 14

while (startDate.getFullYear() === new Date().getFullYear()) {
  // check if the current year is the same
  activities.push({
    date: startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }), // format date to 'MMM d'
    duration: 15,
    category: sport.rest.icon,
    img: sport.rest.empty,
    distance: "",
  })

  startDate.setDate(startDate.getDate() + 1)
}
