import { useState } from "react"

export default function Home() {
  let [ nome, setNome ] = useState("")
  let [ email, setEmail ] = useState("")

  function cadastrarUsuario(event) {
    event.preventDefault()

    console.log(`cadastrando ${nome} ${email}`)

    fetch("https://63442914dcae733e8fd8e3e5.mockapi.io/usuarios", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
      })
      .then(function(response) {
          if (!response.ok) {
              throw "Requisição chegou no servidor, mas servidor retornou com erro: " + response.statusText
          }
          return response.json()
      })
      .then(function(usuario) {
          console.log(usuario)
          setNome("")
          setEmail("")
      })
      .catch(function(error) {
          console.log(error)
      })
  }

  return (
    <>
      <main className="container" style={{maxWidth: "800px"}}>
        <div className="d-flex align-items-center justify-content-center gap-2">
            <img src="user.png" alt="Imagem de usuário" />
            <h1 className="my-5">Cadastro de usuários</h1>
        </div>
        <form className="d-flex flex-column flex-md-row gap-2">
            <div className="flex-md-grow-1 mt-1">
                <label for="nome" className="form-label">Nome</label>
                <input type="nome" className="form-control" id="nome" value={nome} onChange={event => setNome(event.target.value)} />
            </div>
            <div className="flex-md-grow-1 mt-1">
                <label for="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <div className="mt-1 align-self-md-end">
                <button type="submit" className="btn btn-primary" onClick={cadastrarUsuario}>Cadastrar</button>
            </div>            
        </form>
        <table className="table table-hover mt-5">
            <thead>
            <tr className="d-fex align-middle">
                <th>#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th className="text-center">Acões</th>
            </tr>
            </thead>
            <tbody>
            <tr className="align-middle">
                <th>1</th>
                <td>Mark</td>
                <td>mark@gmail.com</td>
                <td className="text-center">
                    <button className="btn btn-outline-secondary ms-2"><i className="bi bi-pencil"></i></button>
                    <button className="btn btn-outline-danger ms-2"><i className="bi bi-trash"></i></button>
                </td>
            </tr>
            <tr className="align-middle">
                <th>2</th>
                <td>Jacob</td>
                <td>jacob@email.com</td>
                <td className="text-center">
                    <button className="btn btn-outline-secondary ms-2"><i className="bi bi-pencil"></i></button>
                    <button className="btn btn-outline-danger ms-2"><i className="bi bi-trash"></i></button>
                </td>
            </tr>
            <tr className="align-middle">
                <th>3</th>
                <td>Larry the Bird</td>
                <td>larry@gmail.com</td>
                <td className="text-center">
                    <button className="btn btn-outline-secondary ms-2"><i className="bi bi-pencil"></i></button>
                    <button className="btn btn-outline-danger ms-2"><i className="bi bi-trash"></i></button>
                </td>
            </tr>
            </tbody>
        </table>
    </main>
    </>
  )
}
