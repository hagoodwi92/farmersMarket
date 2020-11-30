import React from 'react';
// import { WeekList, FullWeekList } from './WeekList';
// import { SeasonList } from './SeasonList';
import ProduceList from './ProduceList.js';
import MarketList from './MarketList.js';

class FarmersControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketVisibleOnPage: true,
      produceVisibleOnPage: false
    };
  }

  handleMarketClick = () => {
    this.setState({ marketVisibleOnPage: true, produceVisibleOnPage: false})
  }

  handleProduceClick = () => {
    this.setState({ marketVisibleOnPage: false, produceVisibleOnPage: true})
  }

  render() {
    let currentVisibleState = null;
    if (this.state.produceVisibleOnPage){
      currentVisibleState = <ProduceList />;
    } else {
      currentVisibleState = <MarketList />;
    }

    return (
      <React.Fragment>
        <button onClick={this.handleMarketClick}>Market Schedule</button>
        <button onClick={this.handleProduceClick}>Produce Schedule</button>
        {currentVisibleState}
      </React.Fragment>
    );
  }


}

export default FarmersControl;