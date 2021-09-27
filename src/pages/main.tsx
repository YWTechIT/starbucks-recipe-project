import { BrowserRouter as Router, Route } from "react-router-dom";
import { Landing, Detail } from "./index";

const Main = () => {
    return (
        <>
            <Router>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/recipe/:id">
                    <Detail />
                </Route>
            </Router>
        </>
    );
};

export default Main;
