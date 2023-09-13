import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div
                className="bg-dark text-white display-2"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2,
                }}
            >
                TRY GLASS APP ONLINE
            </div>
        );
    }
}
