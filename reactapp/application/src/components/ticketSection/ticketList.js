import React, { Component } from 'react';

class TicketList extends Component {
    state = {  }
    render() {
        return (
            <tbody>
                <tr>
                    <td className="pl-0">
                        <div className="icon-rounded-primary icon-rounded-md">
                            <h4 className="font-weight-medium">AL</h4>
                        </div>
                    </td>
                    <td>
                        <p className="mb-0">Alta Lucas</p>
                        <p className="text-muted mb-0">Connecticut</p>
                    </td>
                    <td>
                        <p className="mb-0">31 Aug 2018</p>
                        <p className="text-muted mb-0">9:30 am</p>
                    </td>
                    <td>
                        <p className="mb-0">6770 Verner Burgs</p>
                        <p className="text-muted mb-0">View on map</p>
                    </td>
                    <td className="pr-0">
                        <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                    </td>
                </tr>
                <tr>
                    <td className="pl-0">
                        <div className="icon-rounded-info icon-rounded-md">
                            <h4 className="font-weight-medium">TS</h4>
                        </div>
                    </td>
                    <td>
                        <p className="mb-0">Teresa Shaw</p>
                        <p className="text-muted mb-0">Florida</p>
                    </td>
                    <td>
                        <p className="mb-0">13 May 2018</p>
                        <p className="text-muted mb-0">10:30 am</p>
                    </td>
                    <td>
                        <p className="mb-0">1300 Gideon Divide Apt. 400</p>
                        <p className="text-muted mb-0">Start session</p>
                    </td>
                    <td className="pr-0">
                        <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                    </td>
                </tr>
                <tr>
                    <td className="pl-0">
                        <div className="icon-rounded-danger icon-rounded-md">
                            <h4 className="font-weight-medium">RU</h4>
                        </div>
                    </td>
                    <td>
                        <p className="mb-0">Rosa Underwood</p>
                        <p className="text-muted mb-0">North Dakota</p>
                    </td>
                    <td>
                        <p className="mb-0">02 Jan 2018</p>
                        <p className="text-muted mb-0">11:00 am</p>
                    </td>
                    <td>
                        <p className="mb-0">9576 Rempel Extension</p>
                        <p className="text-muted mb-0">End session</p>
                    </td>
                    <td className="pr-0">
                        <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                    </td>
                </tr>
                <tr>
                    <td className="pl-0">
                        <div className="icon-rounded-warning icon-rounded-md">
                            <h4 className="font-weight-medium">VR</h4>
                        </div>
                    </td>
                    <td>
                        <p className="mb-0">Vilson Rowa</p>
                        <p className="text-muted mb-0">Densar</p>
                    </td>
                    <td>
                        <p className="mb-0">05 Nov 2018</p>
                        <p className="text-muted mb-0">02:30 am</p>
                    </td>
                    <td>
                        <p className="mb-0">1072 Orion Expansion</p>
                        <p className="text-muted mb-0">On Way</p>
                    </td>
                    <td className="pr-0">
                        <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                    </td>
                </tr>
                <tr>
                    <td className="pl-0">
                        <div className="icon-rounded-info icon-rounded-md">
                            <h4 className="font-weight-medium">TS</h4>
                        </div>
                    </td>
                    <td>
                        <p className="mb-0">Teresa Shaw</p>
                        <p className="text-muted mb-0">Florida</p>
                    </td>
                    <td>
                        <p className="mb-0">13 May 2018</p>
                        <p className="text-muted mb-0">10:30 am</p>
                    </td>
                    <td>
                        <p className="mb-0">1300 Gideon Divide Apt. 400</p>
                        <p className="text-muted mb-0">Start session</p>
                    </td>
                    <td className="pr-0">
                        <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default TicketList;