import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import ResultBox from './ResultBox';


  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from ="PLN" to="USD" amount={100} />);
    });

    const testCases = [
        { amount: '100', from: 'PLN', to: 'USD', expected: 'PLN 100.00 = $28.57' },
        { amount: '20', from: 'USD', to: 'PLN', expected: '$20.00 = PLN 70.00' },
        { amount: '200', from: 'PLN', to: 'USD', expected: 'PLN 200.00 = $57.14' },
        { amount: '345', from: 'USD', to: 'PLN', expected: '$345.00 = PLN 1,207.50' },
        { amount: '100', from: 'PLN', to: 'PLN', expected: 'PLN 100.00 = PLN 100.00' },
        { amount: '20', from: 'USD', to: 'USD', expected: '$20.00 = $20.00' },
        { amount: '-1', from: 'USD', to: 'PLN', expected: 'Wrong value...'},
        { amount: '-1', from: 'PLN', to: 'USD', expected: 'Wrong value...'},
    ];

    for (let singleTest of testCases) {
        it('should render roper info about conversion when PLN -> USD', () => {
            render(<ResultBox from={singleTest.from} to={singleTest.to} amount={parseInt(singleTest.amount)} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(singleTest.expected);

            cleanup();
        });
    };
});