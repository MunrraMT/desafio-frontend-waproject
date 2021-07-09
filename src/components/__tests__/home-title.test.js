import { render } from '@testing-library/react';
import HomeTitle from '../home-title';

describe('Teste do componente Home', () => {
  test('Renderize sem problemas', () => {
    render(<HomeTitle />);
  });

  test('Testando título do componente', () => {
    const { getByText } = render(<HomeTitle />);
    expect(getByText('Desafio Front End')).toBeTruthy();
  });
});
