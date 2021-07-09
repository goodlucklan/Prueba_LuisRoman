import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class Home extends Component {
  state = {
    redirect: false,
  };
  render() {
    const Login = () => {
      this.setState({ redirect: true });
    };
    if (this.state.redirect) {
      return <Redirect to="Login" />;
    }
    return (
      <div className="cajaprincipal">
        <div className="aside" />
        <div className="bside">
        <div className="container" id="new">
            <h3 className="red-text">¡Te damos la bienvenida!</h3>
            <h3 className="darken-text">
              Cuenta con nosotros para proteger tu vehículo
            </h3>
            <p className="start">
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking
              a tu correo:
            </p>
            <b>joel.sanchez@gmail.com</b>
            <br />
            <button className="btn-large red darken-1" onClick={Login}>
              cómo usar mi seguro
            </button>
          </div>
        </div>
      </div>
    );
  }
}
