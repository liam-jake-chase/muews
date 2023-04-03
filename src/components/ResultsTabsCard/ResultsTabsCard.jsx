import { React } from "react";
import "./ResultsTabsCard.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Profile from "../ResultsPage/Profile/Profile";

export default function ResultsTabsCard(props) {

  return (
    <div className="resultstabscard">
      <Tabs defaultIndex={[0]}> 
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Releases</Tab>
          <Tab>Events</Tab>
          <Tab>Media</Tab>
          <Tab>Social</Tab>
        </TabList>

        <TabPanel>
          <Profile 
          artistInfo={props.artistInfo}
          />
        </TabPanel>
        <TabPanel>Releases</TabPanel>
        <TabPanel>Events </TabPanel>
        <TabPanel>Pictures & Videos</TabPanel>
        <TabPanel>Social Media</TabPanel>
      </Tabs>
    </div>
  );
}
