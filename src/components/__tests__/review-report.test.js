import { render } from '@testing-library/react';
import ReviewReport from '../review-report';

describe('Teste do componente ReviewReport', () => {
  test('Renderize sem problemas', () => {
    render(<ReviewReport />);
  });

  test('Testando texto do btn do componente', () => {
    const { getByTestId } = render(<ReviewReport />);
    const txtCorrect = 'Rever último questionário';
    const txtBtn = getByTestId('btn-review-report').textContent;
    expect(txtBtn).toEqual(txtCorrect);
  });
});
