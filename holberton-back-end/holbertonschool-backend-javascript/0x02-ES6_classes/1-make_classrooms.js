import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const numbers = [19, 20, 34];
  const array = [];

  for (const number of numbers) {
    array.push(new ClassRoom(number));
  }
  return array;
}
