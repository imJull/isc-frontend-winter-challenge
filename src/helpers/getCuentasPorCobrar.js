

export const getCuentasPorCobrar = async () => {
    const url = 'http://localhost:5000/cuentas_por_cobrar';
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data
}

