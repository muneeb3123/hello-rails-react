import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/messageSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.message.greeting);
  const isLoading = useSelector((state) => state.message.isLoading); 

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) { 
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Greetings</h1>
      <h4>Every time you reload the page, you'll see a new greeting!</h4>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
