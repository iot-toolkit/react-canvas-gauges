import React from "react";

import { RadialGauge } from "nonlinear-canvas-gauges";

class ReactRadialGauge extends React.Component {
  componentDidMount() {
    const options = Object.assign({}, this.props, {
      renderTo: this.el
    });
    this.gauge = new RadialGauge(options).draw();
  }

  componentWillReceiveProps(nextProps) {
    this.gauge.value = nextProps.value;
    this.gauge.update(nextProps);
  }

  render() {
    return (
      <canvas ref={canvas => {
        this.el = canvas;
      }} />
    );
  }
}

export default ReactRadialGauge;
