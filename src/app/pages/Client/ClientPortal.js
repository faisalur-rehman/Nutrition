import React from "react";
import SVG from "react-inlinesvg";
// import objectPath from "object-path";
// import ApexCharts from "apexcharts";
// import { Dropdown } from "react-bootstrap";
// import { useHtmlClassService } from "../../../layout";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

import Profile from "./Profile";
import ProgressModal from "./Modal/ProgressModal";
import NutritionCarousel from "../Carousel/Carousel";
import "../Hello.css";

const ClientPortal = () => {
  const [profile, setProfile] = React.useState(false);
  const [progress, setProgress] = React.useState(false);
  return (
    <div className="col-sm-12">
      <div className="dash">
        <div
          className={`card card-custom bg-gray-100 card-stretch gutter-b`}
          style={{ width: "30%" }}
        >
          <div className="card-body p-0 position-relative overflow-hidden">
            {/* Chart */}

            <div className="card-spacer mt-5">
              <div className="row m-0">
                <div className="col bg-light-success px-6 py-8 rounded-xl m-3">
                  <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/icons/Communication/Urgent-mail.svg"
                      )}
                    ></SVG>
                  </span>
                  <p
                    style={{ cursor: "pointer" }}
                    className="text-success font-weight-bold font-size-h6 mt-2"
                    onClick={() => setProfile(true)}
                  >
                    Profile
                  </p>
                </div>
                <div className="col bg-light-success px-6 py-8 rounded-xl m-3">
                  <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/icons/Communication/Urgent-mail.svg"
                      )}
                    ></SVG>
                  </span>
                  <p
                    style={{ cursor: "pointer" }}
                    className="text-success font-weight-bold font-size-h6 mt-2"
                    onClick={() => setProgress(true)}
                  >
                    Add Progressive Photos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <NutritionCarousel />
        </div>
      </div>

      <Profile
        show={profile}
        onHide={() => setProfile(false)}
        title="Profile"
      />
      <ProgressModal
        show={progress}
        onHide={() => setProgress(false)}
        title="Add Progress Photos"
      />
    </div>
  );
};

export default ClientPortal;
