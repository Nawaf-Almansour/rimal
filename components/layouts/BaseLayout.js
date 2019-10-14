
import React from 'react'
import Header from "../shared/Header";
import "../../styles/styles.scss";

export default class BaseLayout extends React.Component {
    render() {
        return (
            <div className="lay">
                <Header/>
                {this.props.children}
            </div>
        )
    }
}
