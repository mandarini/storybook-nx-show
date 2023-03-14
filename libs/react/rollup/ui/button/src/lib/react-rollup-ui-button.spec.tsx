import { render } from '@testing-library/react';

import ReactRollupUiButton from './react-rollup-ui-button';

describe('ReactRollupUiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRollupUiButton />);
    expect(baseElement).toBeTruthy();
  });
});
