import cep from "cep-promise"

export const getAdressByCep = async (cepNumber) => {
  try {
    const adress = await cep(cepNumber, { timeout: 5000 }).then(data => {
      return data
    })
    return adress
  }
  catch (error) {
    console.log(error)
    return {city: '', state: '', street: ''}
  }
}