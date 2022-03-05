import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    onSelected(staff) {
        this.setState({
            selected: staff
        });
    }
    
    showStaff(staff) {
        if (staff != null) {
          return (
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6">
                <Card>
                  <CardImg width="100%" src={staff.image} alt={staff.name} />
                  <CardBody>
                    <CardTitle>Họ và tên: {staff.name}</CardTitle>
                    <CardText>
                      Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                    </CardText>
                    <CardText>
                      Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                    </CardText>
                    <CardText>Phòng ban: {staff.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-3"></div>
            </div>
          );
        } else {
          return <div></div>;
        }
      }

    render() {
        const staffList = this.props.staffs.map((staff) => {
            return(
                <div className="col-12 col-md-6 col-lg-4 mt-3">
                    <Card key={staff.id} onClick={() => this.onSelected(staff)}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        })
        return(
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                <div className="row">
                    {this.showStaff(this.state.selected)}
                </div>
            </div>
        );
    }
}

export default StaffList;