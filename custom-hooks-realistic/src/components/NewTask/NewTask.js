import { useState } from 'react';
import useRequest from '../../hooks/use-request';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  let error;
  const requestResponse = useRequest('POST');
  const [isLoading, setIsLoading] = useState(true);

  function enterTaskHandler(taskText) {
    if (requestResponse instanceof Error) {
      error = requestResponse.message || 'Something went wrong!';
    }

    const generatedId = requestResponse.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);

    setIsLoading(false);
  }

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const enterTaskHandler = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-http-6b4a6.firebaseio.com/tasks.json',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({ text: taskText }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const generatedId = data.name; // firebase-specific => "name" contains generated id
  //     const createdTask = { id: generatedId, text: taskText };

  //     props.onAddTask(createdTask);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
