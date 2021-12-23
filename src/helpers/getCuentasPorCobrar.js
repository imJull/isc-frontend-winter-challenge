

export const getCuentasPorCobrar = async () => {
    const url = 'http://localhost:5000/cuentasPorCobrar';
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data
}

