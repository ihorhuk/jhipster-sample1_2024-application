import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23734,
  login: '8toyJD',
};

export const sampleWithPartialData: IUser = {
  id: 15322,
  login: 'X9P15',
};

export const sampleWithFullData: IUser = {
  id: 13288,
  login: 'Zew@9xx4j4\\XF\\mZYfX\\=B7K3\\xw\\DWldBfJ',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
