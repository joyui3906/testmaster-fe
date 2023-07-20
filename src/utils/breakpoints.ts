import { BREAK_POINT } from '@src/styles/CommonStyle';

export const getMinMediaQuery = (key: keyof typeof BREAK_POINT) => `(min-width: ${BREAK_POINT[key]}px)`;

export const getMaxMediaQuery = (key: keyof typeof BREAK_POINT) => `(max-width: ${BREAK_POINT[key]}px)`;
