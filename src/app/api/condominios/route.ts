import { getCondominios } from "@/services/condominio.service";
import { NextResponse } from "next/server";

// GET /api/condominios
export async function GET(){
    try{
        const data = await getCondominios();

        return NextResponse.json({
            success: true,
            count: data.length,
            data,
        }, {status: 200});

    } catch (e: any){
        return NextResponse.json({
            success: e.message ?? "Erro inesperado",
        }, {status: 400})
    }
}