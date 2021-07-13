import { render } from '@testing-library/react';
import { DataContext } from '../../providers/data-context';
import ReportQuestions from '../report-questions';

describe('Teste do componente ReportQuestions', () => {
  const renderComponent = () => {
    const questions = [
      {
        category: 'Geral',
        type: 'multiple',
        difficulty: 'Fácil',
        question: 'Quantos anos vc tem?',
        correct_answer: '30',
        incorrect_answers: ['20', '40', '25'],
      },
      {
        category: 'Geral',
        type: 'multiple',
        difficulty: 'Fácil',
        question: 'Qual seu nome?',
        correct_answer: 'André',
        incorrect_answers: ['Camila', 'Rodrigo', 'Charles'],
      },
    ];

    localStorage.setItem('last-questions', JSON.stringify(questions));
    localStorage.setItem(
      'last-answers',
      JSON.stringify({ '01': '30', '02': 'Charles' }),
    );

    return render(
      <DataContext.Provider
        value={{
          numberQuestions: 2,
          started: true,
          questionsData: questions,
        }}
      >
        <ReportQuestions />
      </DataContext.Provider>,
    );
  };

  test('Renderize sem problemas', () => {
    renderComponent();
  });

  test('Deve conter "01" no Avatar do componente da pergunta 01', async () => {
    const { getByTestId } = renderComponent();
    const txtAvatar = getByTestId('card-avatar-question-01').textContent;
    expect(txtAvatar).toEqual('01');
  });

  test('Deve conter "Difficulty: FÁCIL" no CardHeader do componente da pergunta 01', () => {
    const { getByTestId } = renderComponent();
    const difficulty = getByTestId('card-header-question-01').textContent;
    expect(difficulty).toContain('Difficulty: FÁCIL');
  });

  test('Deve conter "Geral" no CardHeader do componente da pergunta 01', () => {
    const { getByTestId } = renderComponent();
    const category = getByTestId('card-header-question-01').textContent;
    expect(category).toContain('Geral');
  });

  test('Deve conter pergunta no CardContent do componente da pergunta 01', () => {
    const { getByTestId } = renderComponent();
    const question = getByTestId('card-txt-question-01').textContent;
    expect(question).toContain('Quantos anos vc tem?');
  });

  test('Deve conter resposta certa no CardActions do componente da pergunta 01', () => {
    const { getByText } = renderComponent();
    const answer = getByText('30');
    expect(answer).toBeInTheDocument();
  });

  test('Deve conter resposta errada "20" no CardActions do componente da pergunta 01', () => {
    const { getByText } = renderComponent();
    const answer = getByText('20');
    expect(answer).toBeInTheDocument();
  });

  test('Deve conter resposta errada "25" no CardActions do componente da pergunta 01', () => {
    const { getByText } = renderComponent();
    const answer = getByText('25');
    expect(answer).toBeInTheDocument();
  });

  test('Deve conter resposta errada "40" no CardActions do componente da pergunta 01', () => {
    const { getByText } = renderComponent();
    const answer = getByText('40');
    expect(answer).toBeInTheDocument();
  });

  test('Deve mostrar que acertei ao responder a pergunta 01', () => {
    const { getByTestId } = renderComponent();
    const correctAnswer = getByTestId('correct-answer-01-03').textContent;
    const correctAnswerIcon = getByTestId('correct-icon-01-03').innerHTML;
    expect(correctAnswer).toEqual('30');
    expect(correctAnswerIcon).toEqual(
      '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>',
    );
  });

  test('Deve mostrar que errei ao responder a pergunta 02', () => {
    const { getByTestId } = renderComponent();
    const wrongAnswer = getByTestId('wrong-answer-02-03').textContent;
    const wrongAnswerIcon = getByTestId('wrong-icon-02-03').innerHTML;
    expect(wrongAnswer).toEqual('Charles');
    expect(wrongAnswerIcon).toEqual(
      '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>',
    );
  });

  test('Deve mostrar qual era a resposta certa da pergunta 02', () => {
    const { getByTestId } = renderComponent();
    const wrongAnswer = getByTestId(
      'correct-no-selected-answer-02-01',
    ).textContent;
    expect(wrongAnswer).toEqual('André');
  });
});
