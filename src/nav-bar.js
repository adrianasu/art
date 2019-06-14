import React from 'react';
import './nav-bar.css';

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
            <nav className={ this.state.scroll > this.state.top ? "fixed-pos" : "" }>
                <ul>
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#intro" >Intro</a></li>
                    <li><a href="#monet" >Monet</a></li>
                    <li><a href="#degas" >Degas</a></li>
                    <li><a href="#exhibitions" >Exhibitions</a></li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;