import React, { Component } from 'react';
import Main from '../components/main';
import IndexPage from '../components/index-page';
import Disclaimer from '../components/disclaimer';

interface IndexProps {
  // isAcceptDisclaimer: boolean;
}

interface IndexState {
  isAcceptDisclaimer: boolean;
}

export default class extends Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      isAcceptDisclaimer: false as boolean,
    };
    this.setIsAcceptDisclaimer = this.setIsAcceptDisclaimer.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('omeganoteaccept')) {
      this.setIsAcceptDisclaimer(true);
    }
  }

  setIsAcceptDisclaimer(isAccepted: boolean) {
    this.setState({
      isAcceptDisclaimer: isAccepted,
    });
  }

  render() {
    return (
      <>
        <IndexPage />
        <Main />
        {!this.state.isAcceptDisclaimer && (
          <Disclaimer setIsAcceptDisclaimer={this.setIsAcceptDisclaimer} />
        )}
      </>
    );
  }
}
