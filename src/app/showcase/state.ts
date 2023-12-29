import { atom } from 'jotai';
import { Filters } from '../constants';
export const filterAtom = atom<(typeof Filters)[number][]>(['All']);
