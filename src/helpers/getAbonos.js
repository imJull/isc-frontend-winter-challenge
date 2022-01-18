
export const getAbonos = async () => {
    try{
        const url = 'http://localhost:5000/abonos';
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    }
    catch(error){
        console.log(error);
    }
}

export const getAbonosId = async (id) => {
    try{
        const url = `http://localhost:5000/cuentas_por_cobrar/${id}/abonos`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    }
    catch(error){
        console.log(error);
    }
}