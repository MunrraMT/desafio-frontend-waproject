import { render } from '@testing-library/react';
import { DataProvider } from '../../providers/data-context';
import StartQuest from '../start-quest';

describe('Teste do componente StartQuest', () => {
  test('Renderize sem problemas', () => {
    render(
      <DataProvider>
        <StartQuest />
      </DataProvider>,
    );
  });

  test('Testando texto do btn Start do componente', () => {
    const { getByTestId } = render(
      <DataProvider>
        <StartQuest />
      </DataProvider>,
    );
    const txtCorrect = 'start';
    const txtBtn = getByTestId('btn-start-quest').textContent;
    expect(txtBtn).toEqual(txtCorrect);
  });

  test('Testando texto do btn Cancel do componente', () => {
    const { getByTestId } = render(
      <DataProvider>
        <StartQuest />
      </DataProvider>,
    );
    const txtCorrect = 'cancel';
    const txtBtn = getByTestId('btn-cancel-quest').textContent;
    expect(txtBtn).toEqual(txtCorrect);
  });
});
