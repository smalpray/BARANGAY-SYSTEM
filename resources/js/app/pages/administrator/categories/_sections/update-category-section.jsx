import Button from "@/app/_components/button";
import Input from "@/app/_components/input";
import Modal from "@/app/_components/modal";
import { get_categories_thunk, update_categories_thunk } from "@/app/redux/categories-thunk";
import store from "@/app/store/store";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function UpdateCategorySection({ data }) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      category_id: data.category_id,
      name: data.name,
    },
  });

  const [open, setOpen] = useState(false);

  // When opening, re-populate with the latest data
  useEffect(() => {
    if (open) {
      reset({
        category_id: data.category_id,
        name: data.name,
      });
    }
  }, [open, data, reset]);

  const onSubmit = async (formValues) => {
    try {
      // include the record's id (or key) so the thunk knows which to update
      await store.dispatch(
        update_categories_thunk({ id: data.id, ...formValues })
      );
      
     await store.dispatch(get_categories_thunk())

      Swal.fire({
        icon: "success",
        title: "Category updated",
        showConfirmButton: false,
        timer: 1500,
      });

      // reset form and close modal
      reset();
      setOpen(false);
    } catch (error) {
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
        variant="outline"
        type="button"
        className="border-red-500 text-red-500"
      >
        Update
      </Button>

      <Modal
        onClose={() => {
          reset();    // clear errors and values
          setOpen(false);
        }}
        isOpen={open}
        title="Update Category"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          <Input
            label="Category ID"
            name="category_id"
            register={register("category_id", {
              required: "Category ID is required",
            })}
            type="text"
            error={errors.category_id?.message}
          />
          <Input
            label="Category Name"
            name="name"
            register={register("name", {
              required: "Category Name is required",
            })}
            type="text"
            error={errors.name?.message}
          />

          <Button loading={isSubmitting} variant="danger" type="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
}
