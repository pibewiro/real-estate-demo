import { render } from '@testing-library/react';
import LoginForm from '.';

describe('House List Component', () => {
  it('Should Render House list Component', () => {
    const Component = render(
      <LoginForm
        email="email"
        setEmail={() => console.log()}
        password="password"
        setPassword={() => console.log()}
        handleLogin={() => console.log()}
      />
    );
    expect(Component.container.firstChild).toMatchSnapshot();
  });
});
