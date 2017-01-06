import React from 'react';

// the App component contains the <h1> elements that will be displayed on each page.
// Any active child routes will be passed to the components as its children and rendred inside the inner <div>

export default function App(props) {
  return (
    <div>
      <h1>
        Contacts App
      </h1>
      <div>
        {props.children}
      </div>
    </div>
  );
};
