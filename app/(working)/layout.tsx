import Drawer from "./_components/drawer";
import { Toaster } from 'sonner';

const MarketingLayout = (
    {
        children
    }: {
        children : React.ReactNode
    })    => {
    return (
        <div className="">
            <Drawer/>
            <main>
                {children}
            </main>
            <Toaster/>
            {/* <Footer /> */}
        </div>
    )
};

export default MarketingLayout;