import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
} from 'react-router-dom'

function RouteIndex () {
    return (
        <h2>App</h2>
    )
}

function RouteA () {
    return (
        <h4>routeA</h4>
    )
}

function RouteB () {
    let match = useRouteMatch()
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/712`}>712</Link>
                </li>
                <li>
                    <Link to={`${match.url}/2012`}>2012</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:des`}>
                    <RouteBb></RouteBb>
                </Route>
                <Route path={match.path}>
                    <span>select one</span>
                </Route>
            </Switch>
        </div>
    )
}

function RouteBb() {
    let { des } = useParams()
    return (
        <strong>the param: { des }</strong>
    )
}

function TodoRouter () {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">App</Link>
                    </li>
                    <li>
                        <Link to="/A">routeA</Link>
                    </li>
                    <li>
                        <Link to="/B">routeB</Link>
                    </li>
                    <li>
                        <Link to="/App">routeC</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/A">
                    <RouteA></RouteA>
                </Route>
                <Route path="/B">
                    <RouteB></RouteB>
                </Route>
                <Route path="/">
                    <RouteIndex></RouteIndex>
                </Route>
                <Redirect from="/*" to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default TodoRouter