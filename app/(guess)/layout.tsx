import  Header    from "@/components/common/Header";
import  Footer   from "@/components/common/Footer";

export default function GuessLayout({ children }: Readonly<{ children: React.ReactNode}>) {
    return(
        <main className="flex flex-col h-screen">
            <Header/>
            <div className="flex-1 container mx-auto px-6" >
                {children}
            </div>
            <Footer/>
        </main>
    )
}