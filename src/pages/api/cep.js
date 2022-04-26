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
  }
}


export const getAdressComplete = async (cepNumber) => {
  try {
    const adress = await cep(cepNumber, { timeout: 5000 })
    return adress
  }
  catch (error) {
    console.log(error)
  }
}