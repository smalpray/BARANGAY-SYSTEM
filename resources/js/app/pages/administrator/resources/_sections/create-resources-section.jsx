import Button from "@/app/_components/button";
import Input from "@/app/_components/input";
import Modal from "@/app/_components/modal";
import {
    create_resources_thunk,
    get_resources_thunk,
} from "@/app/redux/resources-thunk";
import store from "@/app/store/store";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function CreateResourcesSection() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [open, setOpen] = useState(false);

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        try {
            await store.dispatch(create_resources_thunk(data));
            await store.dispatch(get_resources_thunk());
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
            reset();
            setOpen(false); // optionally close modal
        } catch (error) {
            // Laravel validation error structure: error.response.data.errors
            if (error?.response?.data?.errors) {
                const serverErrors = error.response.data.errors;
                Object.entries(serverErrors).forEach(([field, messages]) => {
                    setError(field, {
                        type: "manual",
                        message: messages[0],
                    });
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Unexpected Error",
                    text: error?.message || "Something went wrong",
                });
            }
        }
    };

    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                variant="danger"
                type="button"
            >
                Create Resources
            </Button>

            <Modal
                onClose={() => setOpen(false)}
                isOpen={open}
                title="Create Resources"
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-5"
                >
                    <Input
                        label="Resources ID"
                        name="resource_id"
                        register={register("resource_id", {
                            required: "Resource ID is required",
                        })}
                        type="text"
                        error={errors.resource_id?.message}
                    />
                    <Input
                        label="Resources Name"
                        name="name"
                        register={register("name", {
                            required: "Resource Name is required",
                        })}
                        type="text"
                        error={errors.name?.message}
                    />

                    <Button
                        loading={isSubmitting}
                        variant="danger"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Modal>
        </div>
    );
}
