"use client"

import { useEffect, useState } from "react"
import { ICondominio } from "@/services/api.condominios"

export default function ListaCondominios(){
    const [condominios, setCondominios] = useState<ICondominio[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const buscarCondominios = async () => {
            try {
                    const response = await fetch('/api/condominios', {cache: 'no-store'})
                    const {data, success, count, error} = await response.json()

                    if(!data) throw new Error(success ?? "Erro ao buscar condomínios");

                    setCondominios(data)
                    
                }
            catch (err : any){
                    setError(err.message ?? "Erro inesperado");
                }
            finally{
                setLoading(false);

            }
        }

        buscarCondominios()
    }, [])

    return(
        <div className="p-6 max-w-full">
            <div className="mb-4 flex items-center justify-between gap-4">
                <h1 className="text-xl font-semibold">Condomínios</h1>
            </div>

            <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
                <table className="min-w-full devide-y divide-gray-200 text-center">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-xs font-medium text-gray-500 tracking-winder w-12">#</th>
                            <th className="px-4 py-3 text-xs font-medium text-gray-500 tracking-winder w-12">Nome</th>
                            <th className="px-4 py-3 text-xs font-medium text-gray-500 tracking-winder w-12">Endereço</th>
                            <th className="px-4 py-3 text-xs font-medium text-gray-500 tracking-winder w-12">Cidade</th>
                            <th className="px-4 py-3 text-xs font-medium text-gray-500 tracking-winder w-12">UF</th>
                            <th className="px-4 py-3 text-xs font-medium text-gray-500 tracking-winder w-12">Tipo</th>
                            <th className="px-4 py-3 text-xs font-medium text-gray-500 tracking-winder w-12">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {
                            loading ? (
                                <tr>
                                    <td className="px-4 py-3 text-sm text-gray-700" colSpan={7}>
                                    Carregando...
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-3 text-sm text-red-900">
                                        {error}
                                    </td>
                                </tr>
                            ) : condominios.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-3 text-sm text-gray-700">
                                        Nenhum condomínio encontrado
                                    </td>
                                </tr>
                            ) :
                            (
                                condominios.map((condominio, index) => (
                                    <tr key={condominio.id_condominio} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{String(index + 1)}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{condominio.nome_condominio}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{condominio.cidade_condominio}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{condominio.uf_condominio}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{condominio.tipo_condominio}</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500"></td>
                                    </tr>
                                ))
                            )
                        }
                                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}