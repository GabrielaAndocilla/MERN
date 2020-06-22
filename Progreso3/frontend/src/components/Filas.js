import React, { Component } from 'react'

export class Filas extends Component {

    constructor(props) {
        super(props);
    }
    salarios(horas,salario){
        return horas*salario
    }
    render() {
        return (

                <tr>

                    <td>{this.props.obj.nombre}</td>
                    <td>{this.props.obj.apellido}</td>
                    <td>{this.props.obj.departamento.nombre}</td>
                    <td>{this.salarios(this.props.obj.horas, this.props.obj.departamento.salario)}</td>
                </tr>
        )
    }
}

export default Filas
