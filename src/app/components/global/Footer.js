import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Company, Inc.</p>
            </footer>
        );
    }

}