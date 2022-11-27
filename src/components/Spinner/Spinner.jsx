import React from "react";
import { ScaleLoader } from "react-spinners";
import { SpinnerSection } from "./SpinnerElements";
const Spinner = ({ loading, key }) => {
    return (
        <div>
            <SpinnerSection>
                <ScaleLoader color={"#009eff"} loading={loading} size={50} key={key} />
            </SpinnerSection>
        </div>
    );
};

export default Spinner;
