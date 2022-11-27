import React from 'react';
import {
    ReportSectionLeft,
    ReportSectionRight,
    SampleReportContainer,
    SampleReportImg
} from "./SampleReportElements.jsx";

const SampleReport = () => {
    return (
        <SampleReportContainer>
            <ReportSectionLeft>
                {/*<SampleReportImg src={"src/assets/Services/demo-assessment.png"} alt={""}/>*/}
            </ReportSectionLeft>
            <ReportSectionRight>
                Sample Pentest Report <br/>
                See The Results We Can Deliver To You. No Email Required. <br/>
                <button>Download</button>
            </ReportSectionRight>

        </SampleReportContainer>
    );
};

export default SampleReport;