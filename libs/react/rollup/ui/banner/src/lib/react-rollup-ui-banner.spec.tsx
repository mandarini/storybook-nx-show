import { render } from '@testing-library/react';

import ReactRollupUiBanner from './react-rollup-ui-banner';

describe('ReactRollupUiBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRollupUiBanner />);
    expect(baseElement).toBeTruthy();
  });
});
