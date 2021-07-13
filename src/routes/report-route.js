import { Redirect, Route } from 'react-router';
import ReportPage from '../pages/report-page';

const ReportRoute = ({ ...rest }) => {
  const answers = JSON.parse(localStorage.getItem('last-answers'));
  const questions = JSON.parse(localStorage.getItem('last-questions'));
  const valid = answers !== [] && questions !== {};

  return <Route {...rest}>{valid ? ReportPage : <Redirect to="/" />}</Route>;
};

export default ReportRoute;
