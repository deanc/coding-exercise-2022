import { Point } from "./point";
import { Station } from "./station";

const misc = require("./misc");

/**
 * Finds the best link station for a given point [x,y]
 * @param  point the point to search against
 * @return       the best link station, or undefined
 */
function findBestStation(point: Point): Station | undefined {
  const stations = [
    new Station([0, 0], 10),
    new Station([20, 20], 5),
    new Station([10, 0], 12)
  ];

  const bestStation = stations
    .map(station => {
      const power = misc.getPower(
        station.getReach(),
        misc.getDistance(point, station.getCoordinates())
      );
      station.setPower(power);
      return station;
    })
    .filter(removeOutOfReachStations)
    .sort(highestPoweredStation)
    .pop();

  return bestStation;
}

/**
 * Utility function to remove stations whose power is not enough
 * Should be passed into Array.filter()
 * @param  station Station
 * @return
 */
function removeOutOfReachStations(station: Station): boolean {
  return station.getPower() > 0;
}

/**
 * Comparison function to find the highest powered link station
 * @param  a
 * @param  b
 * @return   [description]
 */
function highestPoweredStation(a: Station, b: Station): any {
  return a.getPower() < b.getPower();
}

module.exports = {
  findBestStation: findBestStation,
  removeOutOfReachStations: removeOutOfReachStations,
  highestPoweredStation: highestPoweredStation
};
