import React from 'react'

import { LinearGauge } from 'nonlinear-canvas-gauges'

class ReactLinearGauge extends React.Component {
  componentDidMount() {
    const options = Object.assign({}, this.props, {
      renderTo: this.el
    })
    this.gauge = new LinearGauge(options).draw()
  }

  componentWillReceiveProps(nextProps) {
    this.gauge.value = nextProps.value
    this.gauge.update(nextProps)
  }

  render() {
    return (
      <canvas ref={canvas => {
        this.el = canvas
      }} />
    );
  }
}

export default ReactLinearGauge
