import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/PageHeaderContent";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { data } from "../Resume/utils";



const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={24} />}
      />
      <div className="timeline">
        <div className="timeline-Experience">
          <h3 className="timeline-ExperienceHeaderText">Experience</h3>
          <VerticalTimeline
          layout={'1=column'}
          lineColor="var(--yellow-theme-main-color)"
          >
            {
              data.experience.map((item, i)=>(
                <VerticalTimelineElement
                key={i}
                className="timelineExperience-Vertical-TimelineElement"
                >
                  <div className="vertical-timelineElement-titleWrapper">
                   <h3 className="vertical-timelineElement-title">
                    {item.title}
                   </h3>

                   <h4 className="vertical-timelineElement-subTitle">
                    {item.subtitle}
                   </h4>

                   <h5 className="vertical-timelineElement-place">
                    {item.place}
                   </h5>
                   <p>{item.description}</p>
                  </div>


                </VerticalTimelineElement>
              ))
            }
            
          </VerticalTimeline>
        </div>
        <div className="timeline-Education">
          <h3 className="timeline-EducationHeaderText">Education</h3>
        </div>

      </div>
    </section>
  );
};

export default Resume;
