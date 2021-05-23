import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import TagEdit from 'views/TagEdit';
import styled from "styled-components";

const AppWrapper = styled.div`
  color: #333;
`;

const App = ()=> {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags/:id">
            <TagEdit />
          </Route>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/money">
            <Money />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App