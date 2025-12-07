import { Metadata } from "next"
import Header from "@/components/landing/Header"
import Footer from "@/components/layout/Footer"


export const metadata:Metadata = {
   title:{
     template:"SilkUI - Components",
     default:"SilkUI"
   }
}

export default function HomeLayout({children}:{children:React.ReactNode}){
    return (
        <>
        <Header/>
         <main className="relative w-full pt-0 md:pt-0">
             {children}
         </main>
          <Footer/>
            
        </>
    )
}