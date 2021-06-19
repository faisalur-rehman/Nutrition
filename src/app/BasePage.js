import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import Trainer from "./pages/TrainerPortal";
import FormStepper from "./pages/FormStepper/FormStepper";
import ProgramDetails from "./pages/ProgramDetails/ProgramDetails";
import NutritionPlanDetail from "./pages/NutritionPlan/NutritionPlanDetail";
import WorkoutDetails from "./pages/WorkoutDetails/WorkoutDetails";
import ClientPortal from "./pages/Client/ClientPortal";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/trainer-portal" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/trainer-portal" component={Trainer} />
        <Route path="/client-portal" component={ClientPortal} />
        <Route path="/stepper" component={FormStepper} />
        <Route path="/program-detail" component={ProgramDetails} />
        <Route path="/nutrition-detail" component={NutritionPlanDetail} />
        <Route path="/workout-detail" component={WorkoutDetails} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
