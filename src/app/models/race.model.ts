import { PonyModel } from './pony.model';

export interface RaceModel {
  id: number;
  ponies: PonyModel[];
  name: string;
  startInstant: string;
}
