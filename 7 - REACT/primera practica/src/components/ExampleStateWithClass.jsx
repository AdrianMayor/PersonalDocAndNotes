import React from "react";

class ExampleStateWithClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
    };
  }

  async cambiameDeValor() {
    const nuevoValor = this.setState.valor + 1;
    console.info(this.state.valor);
    await this.setState({
      valor: nuevoValor,
    });
  }

  render() {
    return (
      <h1 onClick={() => this.cambiameDeValor}> EXAMPLE {this.state.valor}</h1>
    );
  }
}

export default ExampleStateWithClass;
