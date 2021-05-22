import './App.css';
import ShopHome from './components/shop-home/ShopHome';
import ShopBasket from "./components/shop-basket/ShopBasket";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
    const {box} = useSelector(({product}) => (product))
    return (
        <Router>
            <div className="App">
                <div className={"header"}>
                    <div><Link to="/">Shop</Link></div>
                    <div className={"box-counter"}>
                        <Link to="/basket">basket</Link>
                        <div className={"counter"}>{box.length}</div>
                    </div>
                </div>
                <Switch>
                    <Route exact path={"/"} render={() => {
                        return <ShopHome/>
                    }}/>
                    <Route path={"/basket"} render={() => {
                        return <ShopBasket/>
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
