import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { DataContext } from '../providers/data-context';
import ReportPage from '../pages/report-page';

const ReportRoute = ({ ...rest }) => {
  const context = useContext(DataContext);
  const valid = context.questionsData !== [];

  return <Route {...rest}>{valid ? ReportPage : <Redirect to="/" />}</Route>;
};

export default ReportRoute;
