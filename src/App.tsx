import * as React from 'react';
import { Form } from './src/Form';
import { Todos } from './src/Todos';


export const App = () => {
  return (
    <div style={{ padding: '10px' }}>
      <Form />
      <Todos />
    </div>
  );
};
