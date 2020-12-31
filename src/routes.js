import { BrowserRouter as Router, Route} from "react-router-dom";
import { Home } from "./app";
// import PageNotFound from "./pageNotFound";

// ES6 Style function
let RouterHook = () => {

    let getNavigation = () => {
        return {
            home: 'Home',
            about: 'About',
            work: 'Work',
            education: 'Education',
            skill: 'Skills'
            // portfolio: 'Portfolio',
            // testimonials: 'References'
        };
    }

    let get = (config) => {
        return (
            <Router >

                <Route path="/">
                    <Home config={config} />
                </Route>


                {/* <Route path='*' >
                    <PageNotFound/>
                </Route> */}

            </Router>
        );
    };

    return (
        get({
            navigation: getNavigation()
        })
    )
}

export default RouterHook;
