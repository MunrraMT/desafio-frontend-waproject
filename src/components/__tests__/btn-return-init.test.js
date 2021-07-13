import { render } from '@testing-library/react';
import BtnReturnInit from '../btn-return-init';

describe('Teste do componente BtnSendAnswers', () => {
  test('Renderize sem problemas', () => {
    render(<BtnReturnInit />);
  });

  test('Testando texto do btn do componente', () => {
    const { getByTestId } = render(<BtnReturnInit />);
    const txtCorrect = 'Retornar ao começo';
    const txtBtn = getByTestId('btn-send-answers').textContent;
    expect(txtBtn).toEqual(txtCorrect);
  });
});
