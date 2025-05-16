import { get_activities_by_id_thunk } from "@/app/redux/activity-thunk";
import store from "@/app/store/store";
import { Calendar, theme } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

export default function CalendarComponent({ data }) {
    // const { token } = theme.useToken();
    const product_code = data.product_code;

    const { activity } = useSelector((store) => store.activities);
    // const wrapperStyle = {
    //     width: "100%",
    //     border: `1px solid ${token.colorBorderSecondary}`,
    //     borderRadius: token.borderRadiusLG,
    // };
    const onPanelChange = (value, mode) => {
        store.dispatch(
            get_activities_by_id_thunk(product_code, value.format("MM-DD-YYYY"))
        );
    };
    console.log("activity", activity);

    return (
        <div className="flex flex-col sm:flex-row gap-3 w-full items-start justify-evenly">
            <div className="flex-1">
                <Calendar fullscreen={true} onChange={onPanelChange} />
            </div>
            <div className="flex-1 flex gap-5 flex-col">
                <div>
                    <div className="text-4xl font-bold mb-4">
                        SETUP SCHEDULE
                    </div>
                    <div className="text-xl font-bold">
                        Buffer Time: {activity.buffer_time}min
                    </div>
                    <div className="text-2xl font-bold mb-4">Morning</div>
                    <div className="flex flex-wrap gap-3">
                        {activity?.morning?.map((res, i) => {
                            const startTime = res.split(" - ")[0]; // e.g., "08:00"
                            const startEnd = res.split(" - ")[1];
                            return (
                                <button
                                    key={i}
                                    className="bg-red-500 hover:bg-red-400 text-white text-md font-medium me-2 px-2.5 py-0.5 rounded-full"
                                >
                                    {moment(startTime, "HH:mm").format(
                                        "hh:mm A"
                                    )}{" "}
                                    -{" "}
                                    {moment(startEnd, "HH:mm").format(
                                        "hh:mm A"
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-2xl font-bold mb-4">Afternoon</div>
                    <div className="flex flex-wrap gap-3">
                        {activity?.afternoon?.map((res, i) => {
                            const startTime = res.split(" - ")[0]; // e.g., "08:00"
                            const startEnd = res.split(" - ")[1];
                            return (
                                <button
                                    key={i}
                                    className="bg-red-500 hover:bg-red-400 text-white text-md font-medium me-2 px-2.5 py-0.5 rounded-full"
                                >
                                    {moment(startTime, "HH:mm").format(
                                        "hh:mm A"
                                    )}{" "}
                                    -{" "}
                                    {moment(startEnd, "HH:mm").format(
                                        "hh:mm A"
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-2xl font-bold mb-4">Evening</div>
                    <div className="flex flex-wrap gap-3">
                        {activity?.evening?.map((res, i) => {
                            const startTime = res.split(" - ")[0]; // e.g., "08:00"
                            const startEnd = res.split(" - ")[1];
                            return (
                                <button
                                    key={i}
                                    className="bg-red-500 hover:bg-red-400 text-white text-md font-medium me-2 px-2.5 py-0.5 rounded-full"
                                >
                                    {moment(startTime, "HH:mm").format(
                                        "hh:mm A"
                                    )}{" "}
                                    -{" "}
                                    {moment(startEnd, "HH:mm").format(
                                        "hh:mm A"
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
