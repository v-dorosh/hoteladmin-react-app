import { render, screen, act, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import User from './components/User';
import UsersList from './components/UsersList';
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';


// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });


// const MockUsersList = () => {
//   return (
//     <BrowserRouter>
//       <UsersList />
//     </BrowserRouter>
//   )
// }


{/* <Provider>
  test("render UsersList component", async () => {
    render(<UsersList />);
  });
</Provider> */}

// describe("UsersList", () => {
//   it('should render users list item', async () => {
//     render(<MockUsersList />);
//     const headingElement = screen.getByText(/Hotel employees/i);
//     expect(headingElement).toBeInTheDocument();
//   });

//   it('should render multiple user items', async () => {
//     render(<MockUsersList />);
//     const userCardElements = await screen.findAllByTestId(/card-item/i);
//     expect(userCardElements.length).toBe(10);
//   });

// })

// describe("UsersList",() => {
//   it('should render same text passed into title group', async () => {
//     render(<UsersList />);
//     const inputElement = screen.getByPlaceholderText(/Select employee/i)
//     fireEvent.click(inputElement)
//     const divElement = screen.getByText(/Erwin/i)
//     expect(divElement).toBeInTheDocument()
//   });
// })


// jest.mock("axios");
// const fakeUsers = [
//   { user: "Vitaliy D.", username: "Vitaliy" },
//   { user: "Oleh M.", username: "Oleh" },
// ];

// it("fetches users from an API", async () => {
//   axios.get.mockImplementationOnce(() => Promise.resolve({ data: { fakeUsers } }));
//   render(<UsersList />);
//   userEvent.click(screen.getByRole("button"));
//   const userItems = await screen.findAllByRole("listOfUsers");
//   expect(userItems).toHaveLength(2);
//   // Additional
//   expect(axios.get).toHaveBeenCalledTimes(1);
//   expect(axios.get).toHaveBeenCalledWith(
//     "http://jsonplaceholder.typicode.com/users"
//   );
// });

// test("button should be rendered", () => {
//   render(<UsersList />);
//   const buttonEl = screen.getByRole("button");
//   expect(buttonEl).toBeInTheDocument();
// });

// test('renders header', () => {
//   render(<UsersList />);
//   const headerText = screen.getByText(/Hotel employees/i);
//   expect(headerText).toBeInTheDocument();
// });

// test("Render component available info", () => {
//   render(<UsersList />);
//   expect(screen.getByText("Hotel employees")).toBeInTheDocument();
// });

// test("user should be rendered after fetching", async () => {
//   render(<UsersList />);

//   const userItem = await screen.findByText("Erwin");

//   expect(userItem).toBeInTheDocument();
// });

// describe('The useCommentsManagement hook', () => {
//   describe('when the fetchComments function is called', () => {
//     it('should update the state after a successful request', async () => {
//       const { result, waitForNextUpdate } = renderHook(() => useCommentsManagement());
 
//       act(() => {
//         result.current.fetchComments();
//       });
//       await waitForNextUpdate();
 
//       return expect(result.current.comments.length).not.toBe(0);
//     });
//   })
// });