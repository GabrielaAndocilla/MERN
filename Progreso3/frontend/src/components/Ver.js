import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Fila from './Filas'


export class Ver extends Component {
  constructor(props) {
    super(props);


    this.state = {

      Trabajadores: []

    }
  }
  async componentDidMount() {

    const tra = await axios.get("http://localhost:4000/trabajador/");
    this.setState({ Trabajadores: tra.data });


  }

  crearfilas(){
    return this.state.Trabajadores.map((res,i) =>{
      return <Fila obj={res} key={i} />;
    } );
    
  }

  render() {
    return (
      <div className="container">
        <h1>
          Trabajadores

        </h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Departamento</th>
              <th>Sueldo</th>
            </tr>
          </thead>
          <tbody>
            {
              this.crearfilas()
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Ver
