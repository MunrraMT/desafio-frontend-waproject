import { render } from '@testing-library/react';
import ShowPonctuations from '../show-ponctuations';

describe('Teste do componente BtnSendAnswers', () => {
  const renderComponent = () => {
    localStorage.setItem('correct-punctuation', JSON.stringify(1));
    localStorage.setItem('wrong-punctuation', JSON.stringify(3));

    return render(<ShowPonctuations />);
  };

  test('Renderize sem problemas', () => {
    renderComponent();
  });

  test('Deve mostras o número de acertos igual a "1" no componente', () => {
    const { getByTestId } = renderComponent();
    const correct = getByTestId('max-correct-questions').textContent;
    expect(correct).toEqual('Acertos: 1');
  });

  test('Deve mostras o número de erros igual a "3" no componente', () => {
    const { getByTestId } = renderComponent();
    const correct = getByTestId('max-wrong-questions').textContent;
    expect(correct).toEqual('Erros: 3');
  });
});
