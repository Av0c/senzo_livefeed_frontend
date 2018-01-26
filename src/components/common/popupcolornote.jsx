import React from 'react';

export default class ColorNote extends React.Component {
    render() {
        return (
            <table className="popup-color-note"><tbody>
                    <tr>
                        <td>
                            <span className="popup-color-note-td red">Occupied</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="popup-color-note-td yellow">Standby</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="popup-color-note-td green">Unoccupied</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {/* Spacing */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="popup-color-note-td blue">Offline</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="popup-color-note-td brown">Unregistered</span>
                        </td>
                    </tr>
            </tbody></table>
        );
    }
}
