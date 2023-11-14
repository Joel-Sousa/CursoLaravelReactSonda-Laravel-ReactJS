import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

function App() {

  const [count, setCount] = useState(0);
  const [pessoas, setPessoas] = useState([] as any);

  useEffect(() => {
    setPessoas([{ id: 1, nome: "Leo", idade: 25 }, { id: 2, nome: "Leo 2", idade: 26 }])
  }, []);

  function ListItem(props: any) {
    return <li>{props.pessoa.id}/{props.pessoa.nome}/{props.pessoa.idade}</li>;
  }

  const handleClick = () => {
    setCount(count + 1);
  }

  const listItems = pessoas.map((pessoa: any) =>
    <ListItem pessoa={pessoa} />
  );


  return (
    <>
      <div className="btn-toolbar mb-2 mb-md-0">

        <Link className="btn btn-sm btn-outline-primary" to="/login">Logar</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/cliente">Listar Cliente</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/cliente/cadastro">Criar Cliente</Link>
      </div>

    </>
  );
}

export default App;
