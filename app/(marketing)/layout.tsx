import Footer from "./_components/footer";
import { Header } from "./_components/header";
import { Toaster } from 'sonner';

const MarketingLayout = (
    {
        children
    }: {
        children : React.ReactNode
    })    => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Toaster/>
            <Footer />
        </div>
    )
};

export default MarketingLayout;