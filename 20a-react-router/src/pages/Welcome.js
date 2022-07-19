import { Route } from 'react-router-dom';

function Welcome() {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">Show on the new-user route!</Route>
    </section>
  );
}

export default Welcome;
