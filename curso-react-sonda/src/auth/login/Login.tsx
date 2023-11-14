import React, { useState } from 'react';
import authService from "../../services/auth.service";
import { cpf as cpfvalidator } from 'cpf-cnpj-validator';
import { Link, useNavigate } from 'react-router-dom';
import { cepMask, cpfMask, telefoneMask } from "../../utils/Utils"


function Login() {

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

    const loginUser = (e: any) => {
        e.preventDefault();
        let trataCpf = cpf.replaceAll("-", "").replaceAll(".", "");
        authService.login(email, password).then(
            () => {
                // navigate('/cliente');
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
        <div>
            {/* <Link className="btn btn-sm btn-outline-primary" to="/">Voltar</Link> */}
            <div className="btn-toolbar mb-2 mb-md-0">

        <Link className="btn btn-sm btn-outline-primary" to="/login">Logar</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/cliente">Listar Cliente</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/cliente/cadastro">Criar Cliente</Link>
      </div>

            <form onSubmit={loginUser}>

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
    )
}

export default Login;