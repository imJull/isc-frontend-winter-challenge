
export const getAbonos = async () => {
    const url = 'http://localhost:5000/abonos';
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data
}

export const getAbonosId = async (id) => {
    const url = `http://localhost:5000/cuentas_por_cobrar/${id}/abonos`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data
}