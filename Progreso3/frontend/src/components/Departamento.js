import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class Departamento extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombre: '',
            salario:0

        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    async onSubmit(event) {
        const Pro = { nombre: this.state.nombre, salario: this.state.salario };
        event.preventDefault();
        console.log(Pro, this.state.depId)
        await axios.post('http://localhost:4000/departamento/', Pro)
            .then(res => {
                this.props.history.push('/');
            })

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                        <Form.Label>Nombre</Form.Label>
                        <br></br>
                        
                        <Form.Control        
                        type="text"
                         value={this.state.nombre}
                         onChange={this.onChange}
                         id="nombre"
                         />
                         <Form.Label>Salario</Form.Label>
                        <br></br>
                        <Form.Control        
                        type="text"
                         value={this.state.salario}
                         onChange={this.onChange}
                         id="salario"
                         />

                    <div className="form-group">
                        <input type="submit" value="Crear" className="btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }
}

export default Departamento

