import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('<Greeting /> ...', () => {
  test('...renders "Hello World"', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('...renders "It\'s good to see you!" if the button was NOT clicked', () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText("It's good to see you!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test('...does not render "It\'s good to see you!" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText("It's good to see you!");
    expect(paragraphElement).toBeNull();
  });

  test('...renders "Text changed!" if the button WAS clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphElement = screen.getByText('Text changed!');
    expect(paragraphElement).toBeInTheDocument();
  });
});
