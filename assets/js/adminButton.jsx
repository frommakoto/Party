/**
 * adminButton.jsx
 *
 * Description:
 *   Button components for admin page
 *
 * Author:
 *   sota1235
 */
'use string';

import React from 'react';
import { Button } from 'react-bootstrap';

let Component = React.Component;

// 'クイズを作成' button
export class CreateQuestionButton extends Component {
  render() {
    return (
      <Button
        bsStyle='primary'
        onClick={this.props.handleClick}
      >
        クイズを作成
      </Button>
    );
  }
}

// '公開' button
export class OpenQuestionButton extends Component {
  render() {
    return (
      <Button
        bsStyle='info'
        onClick={this.props.handleClick}
      >
        {this.props.children}
      </Button>
    );
  }
}

// '削除' button
export class DeleteQuestionButton extends Component {
  render() {
    return (
      <Button
        bsStyle='danger'
        onClick={this.props.handleClick}
      >
        削除
      </Button>
    );
  }
}