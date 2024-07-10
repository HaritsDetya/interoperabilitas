// pages/index.js

export default function LoginFix() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-second">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8355dad4d7585595df9e246ddd2f01abdbadaf18344fce68dee0f765745acdd?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
            alt="Logo"
            className="shrink-0 self-stretch max-w-full aspect-[2.22] w-[200px]"
          />
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="ms-admin"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a
              className="inline-block align-baseline font-bold text-sm text-teal-600 hover:text-teal-800"
              href="#"
            >
              I forgot my password
            </a>
          </div>
          <div className="mt-4">
            <button
              className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { render, fireEvent } from '@testing-library/react';
import LoginFix from './LoginFix';

describe('LoginFix', () => {
  it('renders without crashing', () => {
    render(<LoginFix />);
  });

  it('displays the logo', () => {
    const { getByAltText } = render(<LoginFix />);
    const logo = getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('displays the username input', () => {
    const { getByLabelText } = render(<LoginFix />);
    const usernameInput = getByLabelText('Username');
    expect(usernameInput).toBeInTheDocument();
  });

  it('displays the password input', () => {
    const { getByLabelText } = render(<LoginFix />);
    const passwordInput = getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('displays the "Remember Me" checkbox', () => {
    const { getByLabelText } = render(<LoginFix />);
    const rememberMeCheckbox = getByLabelText('Remember Me');
    expect(rememberMeCheckbox).toBeInTheDocument();
  });

  it('displays the "I forgot my password" link', () => {
    const { getByText } = render(<LoginFix />);
    const forgotPasswordLink = getByText('I forgot my password');
    expect(forgotPasswordLink).toBeInTheDocument();
  });

  it('displays the "Sign In" button', () => {
    const { getByText } = render(<LoginFix />);
    const signInButton = getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
  });

  it('calls the onSubmit function when the form is submitted', () => {
    const onSubmitMock = jest.fn();
    const { getByText } = render(<LoginFix onSubmit={onSubmitMock} />);
    const signInButton = getByText('Sign In');
    fireEvent.click(signInButton);
    expect(onSubmitMock).toHaveBeenCalled();
  });
});