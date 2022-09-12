import { atom } from 'recoil';

export const formInputState = atom({
	key: 'formInputState',
	default: {
		name: '',
		country: '',
		language: '',
		picId: [],
	},
});


