
import TextArea from "@/app/_components/textarea";
import { Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

export default function Section4({ register, errors, control }) {
    
    const { resources } = useSelector((store) => store.resources);
    return (
        <div className="flex flex-col w-full gap-3">
            <TextArea
                label="Cancellation Fee (Mode: Rules and Policy)"
                name="cancellation"
                register={register("cancellation", {
                    required: "Rules and Policy is required",
                })}
                placeholder="Write a cancellation"
                error={errors.cancellation?.message}
            />

            {/* FIXED: Controlled Select with Controller */}
            <Controller
                name="resources"
                control={control}
                rules={{ required: "Please select at least one resource" }}
                render={({ field }) => (
                    <Select
                        {...field}
                        mode="multiple"
                        allowClear
                        size="large"
                        placeholder="Please select resources"
                        options={resources.map((res) => ({
                            value: res.resource_id,
                            label: res.name,
                        }))}
                        className={`border rounded-lg ${errors.resources ? "border-red-500" : "border-gray-900"}`}
                    />
                )}
            />
            {errors.resources && (
                <span className="text-red-500 text-sm">{errors.resources.message}</span>
            )}

            <TextArea
                label="Message Received From Email (terms & conditions, confirmation message)"
                name="email_message"
                register={register("email_message", {
                    required: "Message Received From Email is required",
                })}
                error={errors.email_message?.message}
                placeholder="Write Message Received From Email"
            />
        </div>
    );
}
