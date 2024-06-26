import Footer from "./Footer";
import HomeHeader from "./HomeHeader";
import { ReactNode } from "react";

interface MainLayoutProps {
    children:ReactNode;
}


const HomeLayout = ({children}:MainLayoutProps) => {
    return(
        <div className="bg-lightPurple">
            <HomeHeader />
            <main>
                {children}
            </main>
            
            <Footer />
        </div>
        
    )
}

export default HomeLayout;