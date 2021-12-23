import { ConstructionOutlined } from "@mui/icons-material";

export const getClientes = async () => {
    try{
        const url = 'http://localhost:5000/clientes';
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    }
    catch(error){
        console.log(error);
    }
}

