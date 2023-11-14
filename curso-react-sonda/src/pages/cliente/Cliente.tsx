import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import CreateCliente  from './CreateCliente';
import ListCliente  from './ListCliente';
import ShowCliente  from './ShowCliente';
import Login  from '../../auth/login/Login';


function Cliente() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ListCliente />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="cadastro" element={<CreateCliente />} />
                <Route path=":id" element={<ShowCliente />} />
            </Routes>
        </>
    )
}
export default Cliente;