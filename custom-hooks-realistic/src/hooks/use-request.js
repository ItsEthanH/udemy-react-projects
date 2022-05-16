import { useState } from 'react';

async function useRequest(method, taskText) {
  const [error, setError] = useState(null);

  let data;
  let response;

  try {
    if (method === 'POST') {
      response = await fetch(
        'https://tasks-4fa32-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        {
          method: method,
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      data = response.json();
    }

    if (method === 'GET') {
      response = await fetch(
        'https://tasks-4fa32-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
      );
      data = response.json();
    }

    if (!response.ok) {
      throw new Error('Request failed!');
    }
  } catch (err) {
    setError(err.message || 'Something went wrong!');
    return error;
  }

  return data;
}

export default useRequest;
