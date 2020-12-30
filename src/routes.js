
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Home } from "./app";
import PageNotFound from "./pageNotFound";

// ES6 Style function
let RouterHook = () => {

    let getResumePath = () => {
        if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
            return '/public/resume.json';
        }
        return '/public/resume.example.json';
    }

    let getNavigation = () => {
        return {
            home: 'Home',
            about: 'About',
            work: 'Work',
            education: 'Education',
            skill: 'Skills',
            portfolio: 'Portfolio',
            testimonials: 'References'
        };
    }

    let get = (config) => {
        console.log("Console resumePath " + config.resumePath)
        console.log("Console navigation " + config.navigation)
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
            resumePath: getResumePath(),
            navigation: getNavigation()
        })
    )
}

export default RouterHook;
