import React from 'react';

export default class SearchBar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: ''
        };
        this.findMatchingArea = this.findMatchingArea.bind(this);
    }

    handleChange(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.props.dispatch(login(this.state))
        }
    }

    findMatchingArea(tree) {
        var self = this;
        if (tree.children) {
            tree.children.forEach(function (element) {
                self.findMatchingArea(element);
            });
        }
    }

    checkMatching(name, node) {
        return node.info.name.toLowerCase().includes(name.toLowerCase());
    }


    render() {

        this.findMatchingArea(this.props.tree);

        return (
            <div className="login-wrapper">
                <div className="login-card text-center">
                    <h2 className="welcome-message">Add Location!</h2>
                    <div className="login-box-wrapper">
                        <div className="login-box">
                            <form action="#">
                                <div className="user_email">
                                    <input type="username" id="name" placeholder="Area name" onChange={this.handleChange.bind(this)} required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}