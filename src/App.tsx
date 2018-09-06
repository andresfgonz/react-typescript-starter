import * as React from 'react';
import { HelloWord } from '@shared/components';
import './App.scss';

export default class App extends React.Component{
  render() {
    return (
      <div>
        <HelloWord/>
      </div>
    );
  }
}
