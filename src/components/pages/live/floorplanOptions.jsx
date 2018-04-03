import React from 'react';

export default class FloorplanOptions extends React.Component {
    render() {
        var descs;
        switch (this.props.mode) {
            case "sensors":
                descs = ["Occupied", "Standby", "Unoccupied" , "Offline", "Unregistered"];
                break;

            case "heatmap":
                descs = ["Above avg.", "Average", "Below avg."];
                break;

            default:

        }

        return (
            <table className="popup-color-note"><tbody>
                    <tr>
                        <td>
                            <span className="popup-color-note-td red">{descs[0]}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="popup-color-note-td yellow">{descs[1]}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="popup-color-note-td green">{descs[2]}</span>
                        </td>
                    </tr>
                    {(this.props.mode == "sensors") &&
                    <tbody>
                        <tr><td></td></tr>
                        <tr>
                            <td>
                                <span className="popup-color-note-td blue">{descs[3]}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="popup-color-note-td brown">{descs[4]}</span>
                            </td>
                        </tr>
                    </tbody>}
            </tbody></table>
        );
    }
}
