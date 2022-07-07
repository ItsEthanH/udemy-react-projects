import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const shown = useSelector((state) => state.cart.shown);

  return (
    <Layout>
      {shown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
