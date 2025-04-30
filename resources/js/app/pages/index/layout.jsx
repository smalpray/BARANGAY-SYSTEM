import React from "react";
import HomepageHeaderSection from "./_sections/header-section";

export default function Layout({ children }) {
    return (
        <>
            <div >
                <HomepageHeaderSection />
            </div>
            <div className="mb-24">{children}</div>
        </>
    );
}
