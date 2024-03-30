import 'react-native';
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import LoginScreen from '../screens/LoginScreen';
import { AuthProvider } from '../context/AuthContext';

describe('<EmailPasswordForm />', () => {
  it('Expect to show email required', async () => {
    // Grabbing our parent component
    const { getByTestId } = render(
      <AuthProvider>
        <LoginScreen />
      </AuthProvider>
    );

    // Grabbing our input & button components
    const button = getByTestId('primaryButton');

    /**
     * We are changing text in inputs here; that requires a state change
     * Since setState is async in react we have to execute this tests
     * in async way. RNTL give waitFor API for this.
     */
    await waitFor(() => {
      fireEvent.press(button);

      // We have passwordInput_ERROR component that only renders when error is there
      expect(getByTestId('inputError').props.children).toEqual('Email is required');
    });
  });

  it('Expect to show Bottom Sheet with invalid credentials', async () => {
    const email = 'email@email.com';
    const password = 'qwerty1234';

    // Rendering our component & grabbing required nodes.
    const { getByTestId } = render(
      <AuthProvider>
        <LoginScreen />
      </AuthProvider>
    );
    const button = getByTestId('primaryButton');
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');

    // Testing behaviors
    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      expect(emailInput.props.value).toBe(email);

      fireEvent.changeText(passwordInput, password);
      expect(passwordInput.props.value).toBe(password);

      /**
       * Here we are asserting that onSubmit is not just called
       * but it is called with expected output.
       */
      fireEvent.press(button);
    });
    await waitFor(
      () => {
        const bottomSheet = getByTestId('bottomModal');
        expect(bottomSheet.props.visible).toEqual(true);
      },
      { timeout: 3000 }
    );
  });
});
