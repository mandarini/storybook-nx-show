import { render } from '@testing-library/react';

import NextUiButton from './next-ui-button';

describe('NextUiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextUiButton />);
    expect(baseElement).toBeTruthy();
  });
});
