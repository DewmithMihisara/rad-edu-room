import { Component } from "react";
import { NavBar } from "../../common/NavBar/NavBar";
import { Footer } from "../../common/Footer/Footer";

export class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div>
                    <h1 className="text-tertiary text-center">This is Home</h1>
                </div>
                <Footer/>
            </>

        );
    }
}