import { render } from '@testing-library/react';
import HouseList from './house-list';

describe('House List Component', () => {
  it('Should Render House list Component', () => {
    const Component = render(<HouseList />);
    expect(Component.container.firstChild).toMatchSnapshot();
  });
});
