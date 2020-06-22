import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class Asignar extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onChangeDepartamento = this.onChangeDepartamento.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombre: '',
            apellido: '',
            departamento: '',
            departamentos:[],
            depId:'',
            horas:0

        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    async componentDidMount() {

        const locaciones = await axios.get("http://localhost:4000/departamento/");
        this.setState({ departamentos: locaciones.data });
        console.log(locaciones.data);


    }
    async onChangeDepartamento(event) {
       // this.setState({ dep: event.target.value });

        var data = this.state.departamentos.filter(item => item.nombre == event.target.value);
        if (data.length != 0) {
            console.log(event.target.value);
            this.setState({ depId: data[0]._id });
        }

    }
    async onSubmit(event) {
        const Pro = { nombre: this.state.nombre, apellido: this.state.apellido , horas: this.state.horas};
        event.preventDefault();
        console.log(Pro, this.state.depId)
        await axios.post('http://localhost:4000/trabajador/' + this.state.depId, Pro)
            .then(res => {
                this.props.history.push('/');
            })

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <Form.Label>Nombre</Form.Label>
                        <br></br>
                        <input type="text"
                            className="form-control"
                            value={this.state.nombre}
                            onChange={this.onChange}
                            id="nombre"
                            >

                            </input>
                        <Form.Label>Apellido</Form.Label>
                        <br></br>
                        <input type="text"
                            className="form-control"
                            value={this.state.apellido}
                            onChange={this.onChange}
                            id="apellido"

                            >

                            </input>
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control as="select"
                            onChange={this.onChangeDepartamento}

                        >
                            <option key="0">Choose...</option>
                            {
                                this.state.departamentos.map((loc) => (
                                    <option key={loc._id}> {loc.nombre}</option>))
                            }
                        </Form.Control>
                        <Form.Label>Horas mensuales a trabajar</Form.Label>
                        <br></br>
                        <input type="text"
                            className="form-control"
                            value={this.state.horas}
                            onChange={this.onChange}
                            id="horas"

                            >

                            </input>


                    </div>
                    <div className="form-group">
                        <input type="submit" value="Actualizar" className="btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }
}

export default Asignar
