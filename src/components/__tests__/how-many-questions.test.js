import { fireEvent, render } from '@testing-library/react';
import HowManyQuestions from '../how-many-questions';

describe('Teste do componente HowManyQuestions', () => {
  test('Renderize sem problemas', () => {
    render(<HowManyQuestions />);
  });

  test('Testando título do componente', () => {
    const { getByText } = render(<HowManyQuestions />);
    expect(getByText('Quantas perguntas deseja responder?')).toBeTruthy();
  });

  test('Testando aumento do número de perguntas', () => {
    const { getByTestId } = render(<HowManyQuestions />);

    fireEvent.click(getByTestId('add-number-question'));

    expect(getByTestId('number-question').textContent).toEqual('6');
  });

  test('Testando diminuição do número de perguntas', () => {
    const { getByTestId } = render(<HowManyQuestions />);

    fireEvent.click(getByTestId('remove-number-question'));

    expect(getByTestId('number-question').textContent).toEqual('4');
  });
});