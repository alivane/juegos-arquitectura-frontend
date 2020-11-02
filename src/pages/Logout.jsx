import React from 'react';

export default function Logout(props) {
  localStorage.removeItem('token');
  props.history.push('/');

  return <div></div>;
}
