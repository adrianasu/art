import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home.js';
import Renoir from './renoir.js';
import Monet from './monet.js';
import Degas from './degas.js';
import Exhibitions from './exhibitions.js';

export class NavBar extends React.Component{
    constructor(props){
        super( props );
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({
            scroll: window.scrollY
        });
    }

    componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({
            top: el.offsetTop, height: el.offsetHeight
        });
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${ this.state.height }px`
            : document.body.style.paddingTop = 0;
    }

    render(){
        return(
            <div>
                <Router>
                    <nav className={ this.state.scroll > this.state.top ? "fixed-pos" : "" }>
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/monet" >Monet</Link></li>
                            <li><Link to="/renoir" >Renoir</Link></li>
                            <li><Link to="/degas" >Degas</Link></li>
                            <li><Link to="/exhibitions" >Exhibitions</Link></li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <Route path="/monet"  exact component={Monet} />
                    <Route path="/renoir" exact component={Renoir} />
                    <Route path="/degas"  exact component={Degas} />
                    <Route path="/exhibitions"  exact component={Exhibitions} />
                </Router>
            </div>
        )
    }
}
export default NavBar;