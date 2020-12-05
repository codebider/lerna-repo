import { error } from '../src';

describe('Test error', () => {
    it('should return error', () => {
        expect(error).toEqual({'a': 'Demo2'});
    });
});