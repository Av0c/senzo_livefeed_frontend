import React from 'react'

export default class ScrollTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.checkScroll = this.checkScroll.bind(this);
        this.scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(this.scrollToTop);
                window.scrollTo(0, c - c / 8);
            }
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.checkScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.checkScroll);
    }

    checkScroll() {
        var show;
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            show = true;
        } else {
            show = false;
        }
        this.setState({
            show: show,
        });
    }

    render() {
        return (
            <div className={(this.state.show && "scroll-show") + " scroll-top-button"} onClick={( this.state.show && () => {this.scrollToTop()} )}>
                <i className="material-icons">keyboard_arrow_up</i>
            </div>
        );
    }
}
