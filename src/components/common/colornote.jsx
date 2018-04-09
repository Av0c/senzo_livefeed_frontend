import React from 'react';

export default class ColorNote extends React.Component {
    render() {
        var descs;
        switch (this.props.mode) {
            case "sensors":
                descs = ["Occupied", "Standby", "Unoccupied" , "Offline", "Unregistered"];
                break;

            case "heatmap":
                descs = ["Above average", "Average", "Below average"];
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
                    {(this.props.mode == "sensors") && [
                        <tr key="0"><td></td></tr>,
                        <tr key="1">
                            <td>
                                <span className="popup-color-note-td blue">{descs[3]}</span>
                            </td>
                        </tr>,
                        <tr key="2">
                            <td>
                                <span className="popup-color-note-td brown">{descs[4]}</span>
                            </td>
                        </tr>,
                    ]}
            </tbody></table>
        );
    }
}
