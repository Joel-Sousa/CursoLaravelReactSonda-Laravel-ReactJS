import React, { useState } from 'react';
import clienteService from "../../services/cliente.service";
import { Link, useNavigate } from 'react-router-dom';
import { cepMask, cpfMask, telefoneMask } from "../../utils/Utils"
import { cpf as cpfvalidator } from 'cpf-cnpj-validator';

function CreateCliente() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [endereco, setEndereco] = useState("");
    let navigate = useNavigate();

    const [erroCpf, setErroCpf] = useState(false);

    const handleChangeName = (e: any) => {
        if (e.target.value.match("^[a-zA-Z ]*$") != null) {
            setName(e.target.value);
        }
    }

    const handleChangeCpf = (e: any) => {
        if (cpfvalidator.isValid(e.target.value.replace(".", "").replace("-", ""))) {
            setErroCpf(false);
        } else {
            setErroCpf(true);
        }
        setCpf(cpfMask(e.target.value));
    }

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const handleChangeEndereco = (e: any) => {
        setEndereco(e.target.value);
    }

    const criarCliente = (e: any) => {
        e.preventDefault();
        let trataCpf = cpf.replaceAll("-", "").replaceAll(".", "");
        clienteService.create({ name, cpf, email, password, endereco }).then(
            () => {
                navigate('/cliente');
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

            }
        );
    };
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Criar Clientes</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary dropdown-toggle"
                        >
                            This week
                        </button>
                    </div>
                </div>
                <h2>Section title</h2>
                <Link className="btn btn-sm btn-outline-primary" to="/">Voltar</Link>
                <div className="row d-flex justify-content-center">
                    <div className='col-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <form onSubmit={criarCliente}>
                                    <h2>Dados de Cliente</h2>
                                    <div className='row mt-3'>
                                        <div className='col-3 mt-1'>
                                            <label>Name</label>
                                        </div>
                                        <div className='col-9'>
                                            <input className='form-control' name="name" value={name} onChange={handleChangeName} />
                                        </div>
                                    </div>
                                    <div className='row  mt-3'>
                                        <div className='col-3 mt-1'>
                                            <label>CPF</label>
                                        </div>
                                        <div className='col-9'>
                                            <input className='form-control' name="cpf" value={cpf} onChange={handleChangeCpf} />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-3 mt-1'>
                                            <label>Endereço</label>
                                        </div>
                                        <div className='col-9'>
                                            <input className='form-control' name="endereco" value={endereco} onChange={handleChangeEndereco} />
                                        </div>
                                    </div>
                                    <hr />
                                    <h2>Dados de Usuário</h2>
                                    <div className='row mt-3'>
                                        <div className='col-3 mt-1'>
                                            <label>Email</label>
                                        </div>
                                        <div className='col-9'>
                                            <input className='form-control' name="email" value={email} onChange={handleChangeEmail} />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-3 mt-1'>
                                            <label>Senha</label>
                                        </div>
                                        <div className='col-9'>
                                            <input className='form-control' name="password" type="password" value={password} onChange={handleChangePassword} />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-12'>
                                            <button className='btn btn-primary btn-xs btn-block'>Criar Cliente</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default CreateCliente;