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
        <div className="min-h-screen bg-gradient-to-b from-white via-lime-50/20 to-cyan-50/30 dark:from-black dark:via-neutral-950 dark:to-cyan-950/30 text-foreground">
          <Header/>
          <main className="relative w-full pt-0 md:pt-0">
            {children}
          </main>
          <Footer/>
        </div>
    )
}