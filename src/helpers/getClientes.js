
export const getClientes = async () => {
    try{
        const url = `http://localhost:5000/clientes/`;
        const resp = await fetch(url);
        const data = await resp?.json();
        return data
    }
    catch(error){
        console.log(error);
    }
}
export const getClientesId = async (id) => {
    try{
        const url = `http://localhost:5000/clientes/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    }
    catch(error){
        console.log(error);
    }
}

