
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

export default function LandingPage({ children, auth }) {
    return (
        <main auth={auth} className="  bg-gradient-to-r from-violet-500 to-fuchsia-500">
          
                <Nav className=' sticky t-0 '></Nav>
           

            <article className="  ">{children}</article>

            <Footer className=' sticky b-0 '  ></Footer>
        </main>
    );
}
