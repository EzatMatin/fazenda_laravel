
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

export default function LandingPage({ children, auth }) {
    return (
        <main auth={auth} className=" bg-[#ECECEC] ">
          
                <Nav className=' sticky t-0 '></Nav>
           
            <article className=" flex justify-center items-center   ">{children}</article>
        </main>
    );
}
