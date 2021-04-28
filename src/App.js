import React from 'react';
import ListColors from './components/ListColors/ListColors';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

function App ()
{
  return (
    <div class="main-container">
      <Header />
      <Form />
      <ListColors />
    </div>
  );
}

export default App;
