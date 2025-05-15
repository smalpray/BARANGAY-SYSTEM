import React from "react";
import Layout from "../layout";
import StepperSection from "./_sections/stepper-section";

export default function Page() {
    return (
        <Layout>
            <div className="pt-20 px-10">
                <StepperSection />
            </div>
        </Layout>
    );
}
