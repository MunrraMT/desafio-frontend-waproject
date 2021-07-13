import { fireEvent, render, waitFor } from '@testing-library/react';
import { DataContext } from '../../providers/data-context';
import Questions from '../questions-formik';

describe('Teste do componente Questions', () => {
  const renderComponent = () =>
    render(
      <DataContext.Provider
        value={{
          numberQuestions: 1,
          questionsData: [
            {
              category: 'Geral',
              type: 'multiple',
              difficulty: 'Fácil',
              question: 'Quantos anos vc tem?',
              correct_answer: '30',
              incorrect_answers: ['20', '40', '25'],
            },
          ],
        }}
      >
        <Questions />
      </DataContext.Provider>,
    );

  test('Renderize sem problemas', () => {
    renderComponent();
  });

  test('Deve conter "01" no Avatar do componente', async () => {
    const { getByTestId } = renderComponent();
    const txtAvatar = getByTestId('card-avatar-question-01').textContent;
    expect(txtAvatar).toEqual('01');
  });

  test('Deve conter "Difficulty: FÁCIL" no CardHeader do componente', () => {
    const { getByTestId } = renderComponent();
    const dificuldade = getByTestId('card-header-question-01').textContent;
    expect(dificuldade).toContain('Difficulty: FÁCIL');
  });

  test('Deve conter "Geral" no CardHeader do componente', () => {
    const { getByTestId } = renderComponent();
    const assunto = getByTestId('card-header-question-01').textContent;
    expect(assunto).toContain('Geral');
  });

  test('Deve conter pergunta no CardContent do componente', () => {
    const { getByTestId } = renderComponent();
    const pergunta = getByTestId('card-txt-question-01').textContent;
    expect(pergunta).toContain('Quantos anos vc tem?');
  });

  test('Deve conter resposta certa no CardActions do componente', () => {
    const { getByTestId } = renderComponent();
    const resposta = getByTestId('card-answer-question-01-03').textContent;
    expect(resposta).toContain('30');
  });

  test('Deve conter resposta errada "20" no CardActions do componente', () => {
    const { getByTestId } = renderComponent();
    const resposta = getByTestId('card-answer-question-01-01').textContent;
    expect(resposta).toContain('20');
  });

  test('Deve conter resposta errada "25" no CardActions do componente', () => {
    const { getByTestId } = renderComponent();
    const resposta = getByTestId('card-answer-question-01-02').textContent;
    expect(resposta).toContain('25');
  });

  test('Deve conter resposta errada "40" no CardActions do componente', () => {
    const { getByTestId } = renderComponent();
    const resposta = getByTestId('card-answer-question-01-04').textContent;
    expect(resposta).toContain('40');
  });

  test('Deve conter texto "Enviar respostas" do componente BtnSendAnswers', () => {
    const { getByTestId } = renderComponent();
    const btnSubmit = getByTestId('btn-send-answers').textContent;
    expect(btnSubmit).toEqual('Enviar respostas');
  });

  test('Deve mostrar mensagem de erro "Precisa ser respondido" quando formulário for enviado e tiver perguntas sem resposta', async () => {
    const { getByTestId } = renderComponent();

    await waitFor(() => {
      fireEvent.click(getByTestId('btn-send-answers'));
    });

    const txtAvatar = getByTestId('card-error-question-01').textContent;
    expect(txtAvatar).toEqual('Precisa ser respondido');
  });
});
