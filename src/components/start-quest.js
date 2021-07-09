import axios from 'axios';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../providers/data-context';

const StartQuest = () => {
  const { userInfo, setUserInfo } = useContext(DataContext);
  const history = useHistory();

  const getDataApi = async () => {
    const url = `https://opentdb.com/api.php?amount=${userInfo.numberQuestions}`;
    const data = await axios
      .get(url)
      .then((res) => res.data)
      .then((data) => data.results)
      .catch((e) => console.log(e));

    localStorage.setItem('quests', JSON.stringify(data));
  };

  const saveInContext = () => {
    setUserInfo({
      authenticated: true,
    });
  };

  const startQuests = () => {
    getDataApi();
    saveInContext();
    history.push('/quest');
  };

  return <h3 onClick={startQuests}>Start {userInfo.numberQuestions}</h3>;
};

export default StartQuest;
