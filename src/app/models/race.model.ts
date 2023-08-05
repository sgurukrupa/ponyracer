import PonyModel from './pony.model';

export default interface RaceModel {
  id: number;
  ponies: PonyModel[];
  name: string;
  startInstant: string;
}
