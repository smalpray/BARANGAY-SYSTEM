import TextArea from "@/app/_components/textarea";
import Wysiwyg from "@/app/_components/wysiwyg";
import { Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";

export default function Section4({ register, errors, control }) {
    return (
        <div className="flex flex-col w-full gap-3">
            <Controller
                name="cancellation"
                control={control}
                rules={{
                    required:
                        "Cancellation Fee (Mode: Rules and Policy) is required",
                }}
                render={({ field, fieldState }) => (
                    <Wysiwyg
                        label="Cancellation Fee (Mode: Rules and Policy)"
                        name="cancellation"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error?.message}
                    />
                )}
            />

            {/* FIXED: Controlled Select with Controller */}
          
            {errors.resources && (
                <span className="text-red-500 text-sm">
                    {errors.resources.message}
                </span>
            )}

            <Controller
                name="email_message"
                control={control}
                rules={{
                    required: "Message Received From Email is required",
                }}
                render={({ field, fieldState }) => (
                    <Wysiwyg
                        label="Message Received From Email (terms & conditions, confirmation message)"
                        name="email_message"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error?.message}
                    />
                )}
            />
        </div>
    );
}
