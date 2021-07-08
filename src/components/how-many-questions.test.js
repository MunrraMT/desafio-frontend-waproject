import { render } from '@testing-library/react';
import HowManyQuestions from './how-many-questions';

describe('Teste do componente HowManyQuestions', () => {
  test('Renderize sem problemas', () => {
    render(<HowManyQuestions />);
  });

  test('Testando título do componente', () => {
    const { getByText } = render(<HowManyQuestions />);
    expect(getByText('Desafio Front End')).toBeTruthy();
  });

  test('Testando subtítulo do componente', () => {
    const { getByText } = render(<HowManyQuestions />);
    expect(getByText('Quantas perguntas deseja responder?')).toBeTruthy();
  });
});
