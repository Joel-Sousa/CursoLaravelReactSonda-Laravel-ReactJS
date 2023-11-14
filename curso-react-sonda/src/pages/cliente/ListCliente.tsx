import React, { useEffect, useState } from 'react';
// import clienteService from "../../services/cliente.service";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Auth from './services/Auth';
import Auth from '../../services/auth.service';
import Cookies from 'universal-cookie';
import { Button } from 'react-bootstrap';
import Cliente from './cliente.service';


function ListCliente() {
    const cookies = new Cookies();

    console.log("cookies user:", cookies.get('user'));
    
    const [clientes, setClientes] = useState([] as any);
    const [token, setToken] = useState(null);
    let navigate = useNavigate();


    useEffect(() => {
        listClientes();

        Auth.observable.onToken().subscribe((token: any) => {
            console.log("token:1", token);
            if (token) {
                // add message to local state if not empty
                console.log('TEM')
                // setToken(token);
            }
            if (token === null) {
                // clear messages when empty message received
                console.log('NAO TEM')
                // setToken(null);
                navigate('/');
            }
        });
        Auth.observable.setToken(Auth.getToken())
        
        // console.log("Auth.getToken():", Auth.getToken());
        // return unsubscribe method to execute when component unmounts

        // console.log("subscription:", subscription);
    }, []);
    
    // const listClientes = () => {
    //     clienteService.list().then(
    //         (response : any) => {
    //             setClientes(response);
    //             console.log("response:", response);
    //         }
    //     );
    // };

    const listClientes = async () => {
        const tst = await Cliente.list();
        setClientes(tst)
        console.log("tst:", tst);
    };


    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Lista de Clientes</h1>
                    {/* <Link className="btn btn-sm btn-outline-primary" to="/">Voltar</Link> */}
                    <div className="btn-toolbar mb-2 mb-md-0">

        <Link className="btn btn-sm btn-outline-primary" to="/login">Logar</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/cliente">Listar Cliente</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/cliente/cadastro">Criar Cliente</Link>

        <Button className="btn primary" onClick={() => Auth.logout()}>Sair</Button>
      </div>
                    
                    

                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link className="btn btn-sm btn-outline-primary" to="/cliente/cadastro">Criar Cliente</Link>
                    </div>
                </div>
                <h2>Section title</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">CPF</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {clientes.length > 0 && clientes.map((cliente : any, i: any) => 
                            <tr key={i}>
                                <td>{cliente.id}</td>
                                <td>{cliente.user.name}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.endereco}</td>
                                <td>{cliente.user.email}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
export default ListCliente;