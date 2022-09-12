import { atom } from 'recoil';

export const myStepperState = atom({
    key: 'myStepperState',
    default: {
        page: 0,
        forward: false,
        backward: false,
        forwardText: 'Next',
        backwardText: 'Back',
    },
});
