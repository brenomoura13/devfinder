import type { NextPage } from 'next'
import { useState } from 'react';
import { getAdressByCep } from '../../../pages/api/cep';

interface Props {
  email?: string | string[]
}

const RegisterInformations: NextPage<Props> = props => {
  let email = props.email
  const [dataAdress, setData] = useState({city: '', state: '', street: ''})
  console.log(dataAdress)
  return (
    <section className="is-white">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h1 className="title is-2 is-size-4-mobile has-text-centered has-text-primary is-underlined has-margin-bottom-50">
              Complete seu registro
            </h1>
            <form className="form">              
              <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                  <input className="input is-primary" type="text" placeholder="Nome" />
                </div>
              </div>
              <div className="field">
                <label className="label">E-mail</label>
                <div className="control">
                  <input className="input is-primary" type="email" defaultValue={email} />
                </div>
              </div>
              <div className="field">
                <label className="label">Senha</label>
                <div className="control">
                  <input className="input is-primary" type="password" placeholder="Senha" />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirmar senha</label>
                <div className="control">
                  <input className="input is-primary" type="password" placeholder="Confirmar senha" />
                </div>
              </div>
              <div className="field">
                <label className="label">Telefone</label>
                <div className="control">
                  <input className="input is-primary" type="text" placeholder="Telefone" />
                </div>
              </div>
              <div className="field">
                <label className="label">CEP</label>
                <div className="control">
                  <input className="input is-primary" maxLength={8} pattern="^\d{5}-\d{3}|^\d{2}.\d{3}-\d{3}|\d{8}" placeholder="CEP (somente numeros)" onBlurCapture={async event => setData(await getAdressByCep(event.target.value))}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Endereço</label>
                <div className="control">
                  <input className="input is-primary" type="text" placeholder="Endereço" value={dataAdress.street} readOnly />
                </div>
              </div>
              <div className="field">
                <label className="label">Cidade</label>
                <div className="control">
                  <input className="input is-primary" type="text" placeholder="Cidade" value={dataAdress.city} readOnly />
                </div>
              </div>
              <div className="field">
                <label className="label">Estado</label>
                <div className="control">
                  <input className="input is-primary" type="text" placeholder="Estado" value={dataAdress.state} readOnly />
                </div>
              </div>
              <div className="field">
                <label className="label">Link do perfil no GitHub</label>
                <div className="control">
                  <input className="input is-primary" type="text" defaultValue="https://github.com/"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Link do perfil no LinkedIn</label>
                <div className="control">
                  <input className="input is-primary" type="text" placeholder="Link do perfil no LinkedIn" defaultValue="https://www.linkedin.com/in/" />
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default RegisterInformations
