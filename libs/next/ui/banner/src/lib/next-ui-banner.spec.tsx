import { render } from '@testing-library/react';

import NextUiBanner from './next-ui-banner';

describe('NextUiBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextUiBanner />);
    expect(baseElement).toBeTruthy();
  });
});
