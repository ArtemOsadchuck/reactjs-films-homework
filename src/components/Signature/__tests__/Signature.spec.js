import React from 'react';
import { create } from 'react-test-renderer';
import Signature from '../Signature.tsx';

describe('Signature should:', () => {
    const nameResult = 'Webpack Artem';
    const testRenderSignature = create(<Signature name={nameResult} />);
    const testInstance = testRenderSignature.root;

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
