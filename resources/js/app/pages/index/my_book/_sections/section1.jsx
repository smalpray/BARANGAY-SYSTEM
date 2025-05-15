import { Collapse } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CalendarComponent from "../_components/calendar-component";

export default function Section1() {
    const { carts } = useSelector((store) => store.app);

    // Prepare items for Collapse
    const items = carts.map((res, index) => ({
        key: String(index),
        label: res.activity.name,
        children: (
            <>
                <CalendarComponent />
            </>
        ),
    }));

    return (
        <div className="mt-10 w-full my-5">
            <div className="text-2xl py-3 font-bold">Schedule Setup </div>
            <Collapse
                items={items}
                defaultActiveKey={["0"]} // make first panel open by default
            />
        </div>
    );
}
