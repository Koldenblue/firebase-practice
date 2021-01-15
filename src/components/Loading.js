import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Loading({ loading, db, ...rest }) {


  return loading ? (<h1>LOADING</h1>) : (<Route {...rest} />);
}