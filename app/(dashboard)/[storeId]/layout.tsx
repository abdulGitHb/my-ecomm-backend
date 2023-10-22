import Navbar from "@/components/navbar";
import { db } from "@/lib/kysely";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";

export default async function Dashboard({
    children,
    params
}:{
    children:React.ReactNode,
    params:{storeId:string}
}){
    const {userId} = auth();

    if(!userId){
        redirect('/sign-in');
    }
    
    const store = await prismadb.store.findFirst({
        where:{
            id: params.storeId,
            userId
        }
    });

    // const store = await db
    // .selectFrom('store')
    // .select('name')
    // .where('id', '=', params.storeId)
    // .execute()

    console.log('store is here', store);

    if(!store){
        redirect('/');
    }

    return (
        <>
        <Navbar/>
        {children}
        </>
    )
}