import { render } from '@testing-library/react';
import ReviewReport from '../review-report';

describe('Teste do componente ReviewReport', () => {
  test('Renderize sem problemas', () => {
    render(<ReviewReport />);
  });

  test('Testando texto do btn do componente quando existe relatório para mostrar', () => {
    const renderComponent = () => {
      localStorage.setItem('last-answers', JSON.stringify({ '01': 'ok' }));

      return render(<ReviewReport />);
    };
    const { getByTestId } = renderComponent();
    const txtCorrect = 'Rever último relatório';
    const txtBtn = getByTestId('btn-review-report').textContent;
    expect(txtBtn).toEqual(txtCorrect);
  });
});
