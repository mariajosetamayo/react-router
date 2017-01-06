require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import ContactListContainer from './components/contact-list-container';
import App from './components/app';
import ContactContainer from './components/contact-container';
// the router component has to wrap all of your routes.
//It takes a history prop which is responsible for configuring how the browser history is handled
//(ie. what you want to happen whe you click back or forward buttons). hashHistory uses has-based routing(routes defined after the # in URL).
//In the route component, we say that when you visit the /contacts route, the ContactListContainer should display.
// const routes = (
//   <Router history={hashHistory}>
//     <Route path="/contacts" component={ContactListContainer} />
//   </Router>
// );
//
// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(routes, document.getElementById('app'))
// );

// In here the ContactListContainer route is nested within the App route inside the Router setup.
// This means that the ContactListContainer will render inside the App component.
// In ContactListContainer, IndexRoute is used. This should be used for any routes that don't alter the parent Route.
// The component should appeat at /contacts rather than /contacts/foo

// const routes = (
//     <Router history={hashHistory}>
//         <Route path="/contacts" component={App}>
//             <IndexRoute component={ContactListContainer} />
//         </Route>
//     </Router>
// );

// In here the ContactContainer component is added to get the information for a single contact and pass it to the Contact component.
// The route for this component has the variable path /contacts/:contactId
// Any variable parts of the route can be accesses using the props.params variable.
// To find a specific contact, ContactContainer uses props.params.contactId as an index into the CONTACTS constant.
const routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer} />
            <Route path=":contactId" component={ContactContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
