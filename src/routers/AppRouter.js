import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FooterInfo } from "../components/ui/FooterInfo";
import { MainInfoScreen } from "../components/ui/MainInfoScreen";
import { SectionSkills } from "../components/ui/SectionSkills";
import { ContainerRoutes } from "./ContainerRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <MainInfoScreen />

        <Switch>
          <Route path="/" component={ContainerRoutes} />
        </Switch>
        <SectionSkills type={"logo"} />
        <FooterInfo />
      </div>
    </Router>
  );
};
