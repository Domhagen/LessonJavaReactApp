import React, { Component } from 'react';

class InvoiceList extends Component {
    state = {  }
    render() {
        return (
            <tbody>
                <tr>
                    <td>50014</td>
                    <td>David Grey</td>
                    <td>Italy</td>
                    <td className="font-weight-bold">$6300</td>
                    <td>$2100</td>
                    <td><div className="badge badge-success badge-fw">Progress</div></td>
                </tr>
                <tr>
                    <td>50015</td>
                    <td>Stella Johnson</td>
                    <td>Brazil</td>
                    <td className="font-weight-bold">$4500</td>
                    <td>$4300</td>
                    <td><div className="badge badge-warning badge-fw">Open</div></td>
                </tr>
                <tr>
                    <td>50016</td>
                    <td>Marina Michel</td>
                    <td>Japan</td>
                    <td className="font-weight-bold">$4300</td>
                    <td>$6440</td>
                    <td><div className="badge badge-danger badge-fw">On hold</div></td>
                </tr>
                <tr>
                    <td>50017</td>
                    <td>John Doe</td>
                    <td>India</td>
                    <td className="font-weight-bold">$6400</td>
                    <td>$2200</td>
                    <td><div className="badge badge-success badge-fw">Progress</div></td>
                </tr>
                <tr>
                    <td>50015</td>
                    <td>Stella Johnson</td>
                    <td>Brazil</td>
                    <td className="font-weight-bold">$4500</td>
                    <td>$4300</td>
                    <td><div className="badge badge-warning badge-fw">Open</div></td>
                </tr>
                <tr>
                    <td>50014</td>
                    <td>David Grey</td>
                    <td>Italy</td>
                    <td className="font-weight-bold">$6300</td>
                    <td>$2100</td>
                    <td><div className="badge badge-success badge-fw">Progress</div></td>
                </tr>
            </tbody>
        );
    }
}

export default InvoiceList;