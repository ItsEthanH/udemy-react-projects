import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui';
import { cartActions } from './store/cart';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

const url =
  'https://redux-cart-c7adf-default-rtdb.europe-west1.firebasedatabase.app/cart.json';

let isInit = true;

function App() {
  const dispatch = useDispatch();
  const shown = useSelector((state) => state.ui.shown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // sends cart data to backend upon cart change
  useEffect(() => {
    async function sendCartData() {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );

      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed!');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sucessfully sent cart data!',
        })
      );
    }

    if (isInit) {
      isInit = false;
      return;
    }

    sendCartData().catch(() => {
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      });
    });
  }, [cart, dispatch]);

  //gets cart data when the app first loads
  useEffect(() => {
    async function getCartData() {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      await console.log(data);
      return data;
    }

    getCartData()
      .then((data) => {
        dispatch(cartActions.replaceCart(data));
      })
      .catch(() => {
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        });
      });
  }, [dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {shown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
