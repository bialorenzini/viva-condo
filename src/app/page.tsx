"use client"

type Morador = {
  primeiroNome: string;
  sobrenome: string
}

export default function Home () {
  const morador = {
    primeiroNome: 'Sim',
    sobrenome: '🤠'
  }

  function formatarNomeMorador(morador: Morador){
    return morador.primeiroNome + ' ' + morador.sobrenome;
  }

  function obterSaudacao(morador: null | Morador) {
    if (morador) {
      const moradorTratado = formatarNomeMorador(morador)
      return <span>Olá, {moradorTratado}</span>
    }
    return <span>Olá, Estranho!!!</span>
  }

  return (
    <div id="principal" className="min-h-screen flex items-center justify-center bg-black">
      <div id="componente-azul" className="card-azul">
        <h1 id="name" className="text-2xl font-bold text-center">
            {obterSaudacao(morador)}
        </h1>
      </div>
    </div>
  )
}