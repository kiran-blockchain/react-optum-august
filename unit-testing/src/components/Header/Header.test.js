// import { cleanup, render, screen } from "@testing-library/react";
// import Header from './Header';
// afterEach(cleanup);

// /**
//  * Component Testing
//  */
// describe('Header Component', () => {

//     /**
//      * getByLabelText()
//      */
//     test('should check the menu icon', () => {
//         render(<Header />);//render the header component into screen
//         console.log(screen.getByLabelText("menu"))
//         expect(screen.getByLabelText("menu")).toBeInTheDocument();
//     })

//     /**
//      * getByText()
//      */
//     test('should check the header component title', () => {
//         render(<Header />);
//         expect(screen.getAllByText(/React Unit Testing with Jest/i)).toBeInTheDocument();
//     })

//     /**
//      * toHaveStyle(): using Accessibility
//      */
//     test('should have a login button', () => {
//         render(<Header />);
//         const loginButton = screen.getByRole('button', {
//             name: 'Login'
//         });
        
//         expect(loginButton).toHaveStyle({ backgroundColor: 'transparent' });
//     })
// })
