import React from "react";
import { DatePicker, Space, TimePicker } from "antd";
import Select from "@/app/_components/select";
import Input from "@/app/_components/input";

const { RangePicker } = DatePicker;

export default function Section2({ register, errors }) {
    return (
        <div className=" w-full">
            <div className="flex gap-3 flex-col w-full">
                <div className="flex w-full gap-3 flex-col">
                    <div className="w-full gap-3 flex-row flex">
                        <Input
                            label="Sunday Start Time"
                            register={{
                                ...register("sunday_from", {
                                    required: "Sunday is required",
                                }),
                            }}
                            type="time"
                            name="sunday_from"
                            error={errors.sunday_from?.message}
                        />
                        <Input
                            label="Sunday End Time"
                            register={{
                                ...register("sunday_to", {
                                    required: "Sunday is required",
                                }),
                            }}
                            type="time"
                            error={errors.sunday_to?.message}
                            name="sunday_to"
                        />
                    </div>
                    <div className="w-full gap-3 flex-row flex">
                        <Input
                            label="Monday Start Time"
                            register={{
                                ...register("monday_from", {
                                    required: "Monday is required",
                                }),
                            }}
                            error={errors.monday_from?.message}
                            type="time"
                            name="monday_from"
                        />

                        <Input
                            label="Monday End Time"
                            register={{
                                ...register("monday_to", {
                                    required: "Monday is required",
                                }),
                            }}
                            error={errors.monday_to?.message}
                            type="time"
                            name="monday_to"
                        />
                    </div>
                    <div className="w-full gap-3 flex-row flex">
                        <Input
                            label="Tuesday Start Time"
                            register={{
                                ...register("tuesday_from", {
                                    required: "Tuesday is required",
                                }),
                            }}
                            error={errors.tuesday_from?.message}
                            type="time"
                            name="tuesday_from"
                        />
                        <Input
                            label="Tuesday End Time"
                            register={{
                                ...register("tuesday_to", {
                                    required: "Tuesday is required",
                                }),
                            }}
                            error={errors.tuesday_to?.message}
                            type="time"
                            name="tuesday_to"
                        />
                    </div>
                    <div className="w-full gap-3 flex-row flex">
                        <Input
                            label="Wednesday Start Time"
                            register={{
                                ...register("wednesday_from", {
                                    required: "Wednesday is required",
                                }),
                            }}
                            error={errors.wednesday_from?.message}
                            type="time"
                            name="wednesday_from"
                        />
                        <Input
                            label="Wednesday End Time"
                            register={{
                                ...register("wednesday_to", {
                                    required: "Wednesday is required",
                                }),
                            }}
                            error={errors.wednesday_to?.message}
                            type="time"
                            name="wednesday_to"
                        />
                    </div>
                    <div className="w-full gap-3 flex-row flex">
                        <Input
                            label="Thursday Start Time"
                            register={{
                                ...register("thursday_from", {
                                    required: "Thursday is required",
                                }),
                            }}
                            error={errors.thursday_from?.message}
                            type="time"
                            name="thursday_from"
                        />
                        <Input
                            label="Thursday End Time"
                            register={{
                                ...register("thursday_to", {
                                    required: "Thursday is required",
                                }),
                            }}
                            error={errors.thursday_to?.message}
                            type="time"
                            name="thursday_to"
                        />
                    </div>
                    <div className="w-full gap-3 flex-row flex">
                        <Input
                            label="Friday Start Time"
                            register={{
                                ...register("friday_from", {
                                    required: "Friday is required",
                                }),
                            }}
                            error={errors.friday_from?.message}
                            type="time"
                            name="friday_from"
                        />
                        <Input
                            label="Friday End Time"
                            register={{
                                ...register("friday_to", {
                                    required: "Friday is required",
                                }),
                            }}
                            error={errors.friday_to?.message}
                            type="time"
                            name="friday_to"
                        />
                    </div>
                    <div className="w-full gap-3 flex-row flex">
                        <Input
                            label="Saturday Start Time"
                            register={{
                                ...register("saturday_from", {
                                    required: "Saturday is required",
                                }),
                            }}
                            error={errors.saturday_from?.message}
                            type="time"
                            name="saturday_from"
                        />
                        <Input
                            label="Saturday End Time"
                            register={{
                                ...register("saturday_to", {
                                    required: "Saturday is required",
                                }),
                            }}
                            error={errors.saturday_to?.message}
                            type="time"
                            name="saturday_to"
                        />
                    </div>
                </div>
                <div className="flex w-full  flex-col py-1">
                    <Select
                        label="Select Duration"
                        name="duration"
                        register={{
                            ...register("duration", {
                                required: "Duration is required",
                            }),
                        }}
                        error={errors.duration?.message}
                        options={[
                            { label: "1 hour", value: "1h" },
                            { label: "1 hour 30 minutes", value: "1h30m" },
                            { label: "2 hours", value: "2h" },
                            { label: "2 hours 30 minutes", value: "2h30m" },
                            { label: "3 hours", value: "3h" },
                            { label: "3 hours 30 minutes", value: "3h30m" },
                            { label: "4 hours", value: "4h" },
                            { label: "4 hours 30 minutes", value: "4h30m" },
                            { label: "5 hours", value: "5h" },
                        ]}
                    />
                </div>
                <div className="flex w-full  flex-col py-1">
                    <Select
                        label="Buffer Time"
                        register={{
                            ...register("buffer_time", {
                                required: "Buffer Time is required",
                            }),
                        }}
                        error={errors.buffer_time?.message}
                        options={[
                            { label: "1 hour", value: "1h" },
                            { label: "1 hour 30 minutes", value: "1h30m" },
                            { label: "2 hours", value: "2h" },
                            { label: "2 hours 30 minutes", value: "2h30m" },
                            { label: "3 hours", value: "3h" },
                            { label: "3 hours 30 minutes", value: "3h30m" },
                            { label: "4 hours", value: "4h" },
                            { label: "4 hours 30 minutes", value: "4h30m" },
                            { label: "5 hours", value: "5h" },
                        ]}
                        name="buffer_time"
                    />
                </div>
                <div className="flex w-full  flex-col">
                    <div>Booking in advance</div>
                    <div className="flex gap-3 mt-3">
                        <Select
                            label="From"
                            register={{
                                ...register("advance_from", {
                                    required: "Advance From is required",
                                }),
                            }}
                            error={errors.advance_from?.message}
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
                        />

                        <Select
                            label="To"
                            name="advance_to"
                            register={{
                                ...register("advance_to", {
                                    required: "Advance To is required",
                                }),
                            }}
                            error={errors.advance_to?.message}
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
                        />
                    </div>
                </div>

                <div className="flex w-full  flex-col">
                    <div>Number of people booking</div>
                    <div className="flex gap-3 mt-3">
                        <Select
                            label="Age Group"
                            name="age_group"
                            error={errors.age_group?.message}
                            register={{
                                ...register("age_group", {
                                    required: "Age Group is required",
                                }),
                            }}
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
                        />
                        <Select
                            label="Minimum"
                            name="minimum"
                            error={errors.minimum?.message}
                            register={{
                                ...register("minimum", {
                                    required: "Minimum is required",
                                }),
                            }}
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
                        />

                        <Select
                            label="Maximum"
                            name="maximum"
                            error={errors.maximum?.message}
                            register={{
                                ...register("maximum", {
                                    required: "Maximum is required",
                                }),
                            }}
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
