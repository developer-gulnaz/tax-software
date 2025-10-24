//import node module libraries
import { Metadata } from "next";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

//import custom components
import DashboardStats from "components/dashboard/DashboardStats";
import TaskProgress from "components/dashboard/TaskProgress";

export const metadata: Metadata = {
  title: "Project Dashboard | Dasher - Responsive Bootstrap 5 Admin Dashboard",
  description: "Dasher - Responsive Bootstrap 5 Admin Dashboard",
};

const HomePage = () => {
  return (
    <Fragment>
      <Row className="g-6 mb-6">
        <DashboardStats />
      </Row>
      <Row className="g-6 mb-6">
        {/* <Col xl={8}>
          <TeamsTable />
          <ActivityLog />
          <TaskList />
        </Col> */}
        <Col xl={8}>
          <TaskProgress />
          {/* <AIBanner />
          <ProjectBudget />
          <UpcomingMeetingSlider /> */}
        </Col>
      </Row>
    </Fragment>
  );
};

export default HomePage;
