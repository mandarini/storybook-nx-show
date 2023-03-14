import { render } from '@testing-library/react';

import ReactViteUiButton from './react-vite-ui-button';

describe('ReactViteUiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactViteUiButton />);
    expect(baseElement).toBeTruthy();
  });
});
