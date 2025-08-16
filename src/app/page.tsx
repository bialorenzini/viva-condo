"use client"

import GreetingCard from "./components/card";

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
      return "Olá, " + moradorTratado
    }
    return "Olá, Estranho!!!"
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <GreetingCard  label={obterSaudacao(morador)}/>
    </div>
  )
}