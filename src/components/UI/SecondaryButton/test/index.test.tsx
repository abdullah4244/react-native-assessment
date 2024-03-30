import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import SecondaryButton from '../index';

// Describing a test suite
describe('<Button />', () => {
  // Describing our test
  it('Calls onPress', async () => {
    // Mocking onPress method so we can check if its called or not
    const onPress = jest.fn();

    // test id to be applied on our button component
    const testID = 'secondaryButton';

    // Rendering Button component using react-native-test-renderer.
    const { getByTestId } = await render(
      <SecondaryButton  onPress={onPress} label="Button" />,
    );

    // Grabbing our button component to perform actions on it.
    const button = getByTestId(testID);

    /**
     * RNTL gives us API to fire events on node
     * Here we are firing on press event
     */
    fireEvent.press(button);

    // Asserting if given mock method is called or not.
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});