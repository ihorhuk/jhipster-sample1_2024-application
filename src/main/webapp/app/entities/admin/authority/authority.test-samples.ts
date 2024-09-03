import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'be9cdf1e-e553-4bb8-a55d-da0f7b91a646',
};

export const sampleWithPartialData: IAuthority = {
  name: '536c0ad0-9f2c-4843-a8c5-591dbbf28b5d',
};

export const sampleWithFullData: IAuthority = {
  name: '0758f78e-b60a-45d7-9bd3-e5573d21e95e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
