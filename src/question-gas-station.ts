/**
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the minimum starting gas station’s index if you can travel around the circuit once, otherwise return -1.

You can only travel in one direction. i to i+1, i+2, ... n-1, 0, 1, 2..
Completing the circuit means starting at i and ending up at i again. 
 * https://www.interviewbit.com/problems/gas-station/
 */

export function  canCompleteCircuit(A, B){
  const gas = A;
  const cost = B;
  const stations = A.length;

  const distanceFromStartingStation = {};

  // test from one station to the next
  for (let startingStation = 0; startingStation < stations; startingStation++) {
    let distanceFromStation = 0;
    let currentStation = startingStation;
    let tank = gas[currentStation];
    let costToNextStation = cost[currentStation];

    if (tank < costToNextStation) {
      continue;
    }

    do {
      tank -= costToNextStation
      const nextStation = (currentStation + 1) % stations;
      distanceFromStation += 1;
      currentStation = nextStation;
      tank += gas[currentStation];
      costToNextStation = cost[currentStation];

      if (tank < costToNextStation) {
        break;
      }
    } while (currentStation !== startingStation);

    if (tank >= costToNextStation) {
      distanceFromStartingStation[startingStation] = distanceFromStation;
    }
  }

  const keys = Object.keys(distanceFromStartingStation);

  if (keys.length === 0) {
    return -1;
  }

  let smallestIndex = keys[0];
  let smallest = distanceFromStartingStation[smallestIndex];
  for (let i = 1; i < keys.length; i++) {
    const currentIndex = keys[i];
    if (distanceFromStartingStation[currentIndex] < smallest) {
      smallestIndex = currentIndex;
      smallest = distanceFromStartingStation[currentIndex];
    }
  }
  return parseInt(smallestIndex, 10);
};

