import React from "react";
import TabsSection from "./_sections/tabs-section";

export default function LocationLayout({ children }) {
    return (
        <>
            <TabsSection />
            {children}
        </>
    );
}
