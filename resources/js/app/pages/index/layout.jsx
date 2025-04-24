import React from "react";
import HomepageHeaderSection from "./_sections/header-section";

export default function Layout({ children }) {
    return (
        <>
            <div className="pb-24">
                <HomepageHeaderSection />
            </div>
            <div className="mb-24">{children}</div>
        </>
    );
}
