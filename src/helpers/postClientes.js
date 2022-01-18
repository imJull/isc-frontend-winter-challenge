

export const postClientes = async (addedClient) => {
  try{
    const url = 'http://localhost:5000/clientes';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(addedClient),
    });
    
    const data = await res.json()
    return data

  }catch(error){
    console.log(error)
  }

}