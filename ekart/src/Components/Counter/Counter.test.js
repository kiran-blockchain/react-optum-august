import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './index';
import * as service from '../../hooks/useApi';
import { mockProducts } from './mock';

describe('Unit testing Counter Component',()=>{
    const mockGetInfo = jest.spyOn(service,"apiGet")
    .mockImplementation(async()=>{
        return mockProducts
    })
    test('initial count to be 0',()=>{
        render(<Counter/>);
        const count = screen.getByText(/Count 0/i);
        const incrementButton = screen.getByRole('button');
        expect(count).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();
    })
    test('Increment button handler to be called',async()=>{
        render(<Counter/>);
        const incrementButton = screen.getByRole('button');
        await userEvent.click(incrementButton)
        const count1 = screen.getByText(/Count 1/i);
        expect(count1).toBeInTheDocument();
        await userEvent.click(incrementButton);
        const count2 = screen.getByText(/Count 2/i);
        expect(count2).toBeInTheDocument();

    })
    test('api to be called',()=>{
        render(<Counter/>);
        expect(mockGetInfo).toHaveBeenCalled();
    })
})