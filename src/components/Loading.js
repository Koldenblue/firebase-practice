import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";

export default function Loading({ loading, db, ...rest }) {
  return loading ? (<h1>LOADING</h1>) : (<Route {...rest} />);
}