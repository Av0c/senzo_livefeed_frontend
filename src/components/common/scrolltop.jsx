import React from 'react'

export default class ScrollTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.checkScroll = this.checkScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.checkScroll);
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

    scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        return (
            <div className={(this.state.show && "scroll-show") + " scroll-top-button"} onClick={( this.state.show && () => {this.scrollToTop()} )}>
                <i className="material-icons">keyboard_arrow_up</i>
            </div>
        );
    }
}
