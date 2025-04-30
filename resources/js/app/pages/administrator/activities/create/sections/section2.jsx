import React from "react";
import { DatePicker, Space, TimePicker } from "antd";
import Select from "@/app/_components/select";

const { RangePicker } = DatePicker;

export default function Section2() {
    return (
        <div className=" w-full">
            <div className="flex gap-3 flex-col w-full">
                <div className="flex w-full flex-col">
                    <div>Schedule Date & Time</div>
                    <RangePicker
                        size="large"
                        className="border border-gray-600"
                        renderExtraFooter={() => "extra footer"}
                        showTime
                    />
                </div>
                <div className="flex w-full  flex-col">
                    <div>Duration Hours & Minutes</div>
                    <TimePicker
                        className="border border-gray-600"
                        size="large"
                    />
                </div>
                <div className="flex w-full  flex-col">
                    <div>Buffer Time for Booking</div>
                    <TimePicker
                        className="border border-gray-600"
                        size="large"
                    />
                </div>
                <div className="flex w-full  flex-col">
                    <div>Booking in advance</div>
                    <div className="flex gap-3 mt-3">
                        <Select
                            label="From"
                            name="advance_from"
                            // value=""
                            options={[
                                { value: "1 Hour", label: "1 Hour" },
                                { value: "2 Hours", label: "2 Hours" },
                                { value: "3 Hours", label: "3 Hours" },
                                { value: "4 Hours", label: "4 Hours" },
                                { value: "5 Hours", label: "5 Hours" },
                                { value: "6 Hours", label: "6 Hours" },
                                { value: "7 Hours", label: "7 Hours" },
                                { value: "8 Hours", label: "8 Hours" },
                                { value: "9 Hours", label: "9 Hours" },
                                { value: "10 Hours", label: "10 Hours" },
                                { value: "11 Hours", label: "11 Hours" },
                                { value: "12 Hours", label: "12 Hours" },
                            ]}
                            required
                        />

                        <Select
                            label="To"
                            name="advance_to"
                            // value=""
                            options={[
                                { value: "1 Month", label: "1 Month" },
                                { value: "2 Months", label: "2 Months" },
                                { value: "3 Months", label: "3 Months" },
                                { value: "4 Months", label: "4 Months" },
                                { value: "5 Months", label: "5 Months" },
                                { value: "6 Months", label: "6 Months" },
                                { value: "7 Months", label: "7 Months" },
                                { value: "8 Months", label: "8 Months" },
                                { value: "9 Months", label: "9 Months" },
                                { value: "10 Months", label: "10 Months" },
                                { value: "11 Months", label: "11 Months" },
                                { value: "12 Months", label: "12 Months" },
                            ]}
                            required
                        />
                    </div>
                </div>

                <div className="flex w-full  flex-col">
                    <div>Number of people booking</div>
                    <div className="flex gap-3 mt-3">
                        <Select
                            label="Age Group"
                            name="age_group"
                            // value=""
                            options={[
                                { value: "adult", label: "adult" },
                                {
                                    value: "Small",
                                    label: "Small Children(5-7yrs)",
                                },
                                { value: "Child", label: "Child (8-12yrs)" },
                                {
                                    value: "teenagers",
                                    label: "teenagers (13 - 17 yrs)",
                                },
                            ]}
                            required
                        />
                        <Select
                            label="Minimum"
                            name="min"
                            // value=""
                            options={[
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "5", label: "5" },
                                { value: "6", label: "6" },
                                { value: "7", label: "7" },
                                { value: "8", label: "8" },
                                { value: "9", label: "9" },
                                { value: "10", label: "10" },
                                { value: "11", label: "11" },
                                { value: "12", label: "12" },
                                { value: "13", label: "13" },
                                { value: "14", label: "14" },
                                { value: "15", label: "15" },
                                { value: "16", label: "16" },
                                { value: "17", label: "17" },
                                { value: "18", label: "18" },
                                { value: "19", label: "19" },
                                { value: "20", label: "20" },
                            ]}
                            required
                        />

                        <Select
                            label="Maximum"
                            name="max"
                            // value=""
                            options={[
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "5", label: "5" },
                                { value: "6", label: "6" },
                                { value: "7", label: "7" },
                                { value: "8", label: "8" },
                                { value: "9", label: "9" },
                                { value: "10", label: "10" },
                                { value: "11", label: "11" },
                                { value: "12", label: "12" },
                                { value: "13", label: "13" },
                                { value: "14", label: "14" },
                                { value: "15", label: "15" },
                                { value: "16", label: "16" },
                                { value: "17", label: "17" },
                                { value: "18", label: "18" },
                                { value: "19", label: "19" },
                                { value: "20", label: "20" },
                            ]}
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
