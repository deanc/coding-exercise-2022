import { Point } from "./point";

function getPower(reach: number, distance: number) {
  if (distance > reach) {
    return 0;
  }
  return Math.pow(reach - distance, 2).toFixed(2);
}

function getDistance(a: Point, b: Point) {
  return (Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2))).toFixed(2);
}

module.exports = {
  getPower: getPower,
  getDistance: getDistance
};
