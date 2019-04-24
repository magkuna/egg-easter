import React from 'react';

import Painted from './Painting/Painted'
import NotPainted from './Painting/NotPainted'

import { connect } from 'react-redux'
import { paintActionCreator } from './state/egg'


const App = (props) => {
  return (
    <div
    onClick={props._paint}
    >
      {
        props._isPainted ?
        <Painted
        />
        :
        <NotPainted
        />
      }
    </div>
  )
}

const mapStateToProps = state => ({
  _isPainted: state.egg.isPainted
})

const mapDispatchToProps = dispatch => ({
  _paint: () => dispatch(paintActionCreator()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)




