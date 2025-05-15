import Button from "@/app/_components/button";
import Input from "@/app/_components/input";
import Modal from "@/app/_components/modal";
import {
    create_categories_thunk,
    get_categories_thunk,
} from "@/app/redux/categories-thunk";
import store from "@/app/store/store";
import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function CreateCategorySection() {
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
            await store.dispatch(
                create_categories_thunk({
                    ...data,
                    category_id: `CGY${moment().format("MMDDYYYYHHmmss")}`,
                })
            );
            await store.dispatch(get_categories_thunk());
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
                Create Category
            </Button>

            <Modal
                onClose={() => setOpen(false)}
                isOpen={open}
                title="Create Category"
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-5"
                >
                    <Input
                        label="Category Name"
                        name="name"
                        register={register("name", {
                            required: "Category Name is required",
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
