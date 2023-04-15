import { atom, selector } from 'recoil';
import axios from 'axios';
import { signInRoute } from './apiRoutes';

export const userAtom = atom({
  key: 'userDetails',
  default: {
    userNameOrEmail: '',
    password: '',
  },
});

export const userDetailsSelector = selector({
  key: 'userDetailsFetch',
  get: async ({ get }) => {
    const userDetails = get('userDetails');
    const response = await axios.post({
      url: signInRoute,
      data: {
        ...userDetails,
      },
    });
    console.log(response);
  },
});
