import { Calendar, theme } from "antd";
import React from "react";

export default function CalendarComponent() {
    const { token } = theme.useToken();

    const wrapperStyle = {
        width: "100%",
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    const onPanelChange = (value, mode) => {
        // console.log(value.format("YYYY-MM-DD"), mode);
        console.log("dadwkjwalkdwjaldwa", value);
    };

    return (
        <div className="flex gap-3 w-full items-start justify-evenly">
            <div style={wrapperStyle}>
                <Calendar fullscreen={true} onChange={onPanelChange} />
            </div>
            <div style={wrapperStyle}>
            dadwa
            </div>
        </div>
    );
}
