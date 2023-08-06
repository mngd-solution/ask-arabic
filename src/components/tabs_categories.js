import React from "react";
import "./tabs_categories.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import WordResult from "./wordresult";
import AbyatResult from "./abyatresult";

function TabsCategories() {
  return (
    <>
      <Tabs isLazy>
        <TabList className="TabList">
          <Tab>كلمات</Tab>
          <Tab>البحور الشعرية</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <WordResult />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <AbyatResult />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default TabsCategories;
