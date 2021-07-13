import { render } from '@testing-library/react';
import BtnSendAnswers from '../btn-send-answers';

describe('Teste do componente BtnSendAnswers', () => {
  test('Renderize sem problemas', () => {
    render(<BtnSendAnswers />);
  });

  test('Testando texto do btn do componente', () => {
    const { getByTestId } = render(<BtnSendAnswers />);
    const txtCorrect = 'Enviar respostas';
    const txtBtn = getByTestId('btn-send-answers').textContent;
    expect(txtBtn).toEqual(txtCorrect);
  });
});
