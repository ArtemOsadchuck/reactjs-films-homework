import React from 'react';
import { create } from 'react-test-renderer';
import Component1 from '../Component1.tsx';

describe('Component1 should:', () => {
    it('be Defined', () => {
        expect(Component1).toBeDefined();
    });

    const testRenderComponent1 = create(<Component1 />);
    const testInstance = testRenderComponent1.root;
    it('contains H1', () => {
        expect(testInstance.findByType('h1'));
    });
    it('contains H1 with text "Webpack Artem"', () => {
        expect(testInstance.findByType('h1').children[0]).toBe('Webpack Artem');
    });
    it('contains image', () => {
        expect(testInstance.findByType('img').children).toEqual([]);
    });
});
