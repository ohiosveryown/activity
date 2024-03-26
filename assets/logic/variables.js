import basketball from "assets/icons/basketball.svg"
import hike from "assets/icons/hike.svg"
import lift from "assets/icons/lift.svg"
import rest from "assets/icons/rest.svg"
import run from "assets/icons/run.svg"

const createSport = (icon, images) => {
  return { icon, ...images }
}

export const sport = {
  basketball: createSport(basketball, {
    baycreek1: "/tracking/img/Basketball/baycreek1@2x.jpg",
    central: "/tracking/img/Basketball/central@2x.jpg",
    meridian: "/tracking/img/Basketball/meridian@2x.jpg",
    piedmont1: "/tracking/img/Basketball/piedmont1@2x.jpg",
    piedmont2: "/tracking/img/Basketball/piedmont2@2x.jpg",
  }),
  hike: createSport(hike, {
    arabia: "/tracking/img/Hike/arabia1@2x.jpg",
    bubble: "/tracking/img/Hike/bubble1@2x.jpg",
    fp1: "/tracking/img/Hike/fp1@2x.jpg",
    gc1: "/tracking/img/Hike/gc1@2x.jpg",
    gc2: "/tracking/img/Hike/gc2@2x.jpg",
    pf1: "/tracking/img/Hike/pf1@2x.jpg",
    pf2: "/tracking/img/Hike/pf2@2x.jpg",
  }),
  lift: createSport(lift, {
    tonal1: "/tracking/img/Lift/tonal1@2x.jpg",
  }),
  rest: createSport(rest, {
    puppy: "/tracking/img/Rest/puppy@3x.png",
    puppy2: "/tracking/img/Rest/puppy2.gif",
    mila: "/tracking/img/Rest/mila@3x.png",
  }),
  run: createSport(run, {
    baycreek1: "/tracking/img/Run/baycreek1@2x.jpg",
    tribble1: "/tracking/img/Run/tribble1@2x.jpg",
    tribble2: "/tracking/img/Run/tribble2@2x.jpg",
    tribble3: "/tracking/img/Run/tribble3@2x.jpg",
  }),
  //... Other sports
}
