// --------------------------------
// JavaScript

// privmitive -> number, string -> pass by value
// non privmitive -> obj, class, array, function -> pass by reference

// function vs return function
// return function is equal value which is it's return value
// example:
// const getName = () => {
//   return "me";
// };

// console.log(getName().toLowerCase());

// regular function and arrow function
// let obj = {
//   name: "me",
//   lname: "you",
//   getName1: function () {
//     console.log(this.name, this.lname);
//   },
//   getName2: () => {
//     console.log(this.name, this.lname);
//   },
// };

// obj.getName1(); // it can see this keyword
// obj.getName2(); // it cannot see this keyword, we can't use this in arrow function
// --------------------------------

// --------------------------------
// React

// Single page application
// we can change this to multiple page application with react-router-dom

// JSX
// Babel

// state and prop
// prop is connecter between parent and child for sending information
// state is (o'zgaruvchi) information in component, we can send state to parent or child as prop

// state vs variable
// state have setState function for rerendering

// key in list
// changed state is rendered and unchanged state is not changed with key. this happen helps to be faster for project

// useMemo and useCallback
// child in parent, parent has state. When parent is changed, all items in child are changed
// useMemo and useCallback is needed for prevent this happen which is re-rendering all items

// --------------------------------
// Router 6

// useHistory -> useNavigate
// useNavigate vs navigate \  navigate is used for component, useNavigate is function
// Redirect -> Navigate
// Switch -> Routes \ this is giving some components in only one component
// Route: Element vs Component
//        Student    <Student/>
// in router dom 5 we send prop component as child, in router 6 we send as element in single tag

// Navlink: activeStyle -> isActive - prop
// style={(prop) => prop.isActive}
// style={({isActive}) => {return {color: isActive ? "red" : "black"}}}
// cannot use isActive in styled-components

// Outlet

// controlled vs uncontrolled
// --------------------------------
