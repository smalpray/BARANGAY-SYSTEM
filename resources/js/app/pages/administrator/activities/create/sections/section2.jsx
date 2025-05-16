import React from "react";
import { DatePicker, Space, TimePicker } from "antd";
import Select from "@/app/_components/select";
import Input from "@/app/_components/input";

import dayjs from "dayjs";
import { Controller } from "react-hook-form";
const { RangePicker } = DatePicker;

export default function Section2({ register, errors, control }) {
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
                            { label: "1 hour", value: "60" },
                            { label: "1 hour 30 minutes", value: "90" },
                            { label: "2 hours", value: "120" },
                            { label: "2 hours 30 minutes", value: "150" },
                            { label: "3 hours", value: "180" },
                            { label: "3 hours 30 minutes", value: "210" },
                            { label: "4 hours", value: "240" },
                            { label: "4 hours 30 minutes", value: "270" },
                            { label: "5 hours", value: "300" },
                        ]}
                        
                    />
                </div>
                <div>Buffer Time</div>
                <div className="flex w-full  flex-row gap-3">
                    <Controller
                        name="buffer_time_from"
                        control={control}
                        rules={{
                            required: "Buffer Time From is required",
                        }}
                        render={({ field, fieldState }) => (
                            <TimePicker
                                {...field}
                                size="large"
                                className="w-full border-gray-600"
                                format="HH:mm:ss"
                                use12Hours={false}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                                status={fieldState.invalid ? "error" : ""}
                            />
                        )}
                    />

                    <Controller
                        name="buffer_time_to"
                        control={control}
                        rules={{
                            required: "Buffer Time To is required",
                        }}
                        render={({ field, fieldState }) => (
                            <TimePicker
                                {...field}
                                size="large"
                                className="w-full border-gray-600"
                                format="HH:mm:ss"
                                use12Hours={false}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                                status={fieldState.invalid ? "error" : ""}
                            />
                        )}
                    />

                    {/* <Input
                        register={{
                            ...register("buffer_time_to", {
                                required: "Buffer Time To is required",
                            }),
                        }}
                        label="Buffer Time"
                        name="buffer_time_to"
                        type="time"
                        error={errors.buffer_time_to?.message}
                    /> */}
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
                    <div className="flex flex-col gap-3 mt-3">
                        {[
                            { value: "adult", label: "Adult" },
                            {
                                value: "small",
                                label: "Small Children (5-7yrs)",
                            },
                            { value: "child", label: "Child (8-12yrs)" },
                            {
                                value: "teenagers",
                                label: "Teenagers (13-17 yrs)",
                            },
                        ].map((group, idx) => (
                            <div key={group.value} className="flex gap-3">
                                <Input
                                    label={group.label}
                                    register={register(
                                        `age_groups.${idx}.name`,
                                        {
                                            required: "Group name is required",
                                        }
                                    )}
                                    value={group.value}
                                    readOnly
                                    type="text"
                                    error={
                                        errors?.age_groups?.[idx]?.name?.message
                                    }
                                    name={`age_groups.${idx}.name`}
                                />
                                <Select
                                    label="Minimum"
                                    name={`age_groups.${idx}.min`}
                                    error={
                                        errors?.age_groups?.[idx]?.min?.message
                                    }
                                    register={register(
                                        `age_groups.${idx}.min`,
                                        {
                                            required: "Minimum is required",
                                        }
                                    )}
                                    options={Array.from(
                                        { length: 20 },
                                        (_, i) => ({
                                            value: `${i + 1}`,
                                            label: `${i + 1}`,
                                        })
                                    )}
                                />
                                <Select
                                    label="Maximum"
                                    name={`age_groups.${idx}.max`}
                                    error={
                                        errors?.age_groups?.[idx]?.max?.message
                                    }
                                    register={register(
                                        `age_groups.${idx}.max`,
                                        {
                                            required: "Maximum is required",
                                        }
                                    )}
                                    options={Array.from(
                                        { length: 20 },
                                        (_, i) => ({
                                            value: `${i + 1}`,
                                            label: `${i + 1}`,
                                        })
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
