import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSelectedStaff: null,
            columDefault: "col-12 col-md-6 col-lg-4 mt-3"
          };
    }
    render() {
        const staffList = this.props.staffs.map((staff) => {
            return(
                <div className="columDefault">
                    <Card key={staff.id}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        })
        return(
            <div>
                {staffList}
            </div>
        );
    }
}

export default StaffList;