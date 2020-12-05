import { error as demo } from '@libs/errors';
console.log(demo);
console.log(demo);
export interface AppError {
    a: string
}

export const error: AppError = {
    a: 'Demo4'
};