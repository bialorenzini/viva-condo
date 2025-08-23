"use client"

export default function ListaUsuarios(){
    return(
        <div className="p-6 max-w-full">
            <div className="mb-4 flex items-center justify-between gap-4">
                <h1 className="text-xl font-semibold">Usuários</h1>
            </div>

            <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
                <table className="min-w-full devide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-winder w-12">#</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-winder w-12">Nome</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-winder w-12">E-mail</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-winder w-12">Contato</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-winder w-12">Tipo</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-winder w-12">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-winder w-12">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td className="px-4 py-3 text-sm text-gray-700" colSpan={7}>
                            Nenhum usuário encontrado.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}