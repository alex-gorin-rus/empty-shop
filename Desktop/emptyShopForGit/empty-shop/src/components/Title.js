import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';

export default function Title({title}){
  return(
  <div className="row myRow">
    <div className="col-10 mx-auto my-3 text-center  myCol">
      <h1 className="font-weight-bold title myTitle text-title texDeepBlue">{title}</h1>
    </div>
  </div>
);
}
