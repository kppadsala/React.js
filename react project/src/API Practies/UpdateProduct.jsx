import {
  Button,
  Checkbox,
  Label,
  Modal,
  Radio,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const sizeData = ["1.5", "2", "3", "4"];

export default function UpdateProduct({ openModal, setOpenModal }) {
  const { control, handleSubmit,setValue ,reset} = useForm({
    defaultValues: {
      title: "",
      description: "",
      brand: "",
      gender: "",
      category:""
    },
  });
  const submitHandler = (data) => {
    console.log(data);
    setOpenModal(false);
    reset()
  };
  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Add Product</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Edit Page</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex justify-center flex-col gap-3"
            >
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextInput type="text" placeholder="Title" {...field} />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextInput type="text" placeholder="description" {...field} />
                )}
              />
              <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                  <TextInput type="text" placeholder="brand" {...field} />
                )}
              />

              <span className="flex justify-start items-center gap-3">
                <Radio
                  id="male"
                  value="male"
                  name="gender"
                  onChange={() => setValue("gender", "male")}
                />
                <label >Male</label>
                <Radio
                  id="male"
                  value="female"
                  name="gender"
                  onChange={() => setValue("gender", "female")}
                />
                <label >FeMale</label>

                <Radio
                  id="male"
                  value="other"
                  name="gender"
                  onChange={() => setValue("gender", "other")}
                />
                <label >Other</label>

              </span>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    isMulti
                    options={options}
                    value={options.filter(option =>
                      field.value.includes(option.value)
                    )}
                    onChange={(selectedOptions) => {
                      field.onChange(selectedOptions.map(option => option.value));
                    }}
                  />
                )}
              />
              
              <TextInput id="email1" type="number" placeholder="Price" />
              <TextInput id="email1" type="number" placeholder="Discount" />
              <TextInput id="email1" type="text" placeholder="Thumnails" />

              <label>size</label>
              <div className="flex justify-start gap-3">
                {sizeData.map((size) => (
                  <div className="flex gap-2 items-center" key={size}>
                    <Checkbox
                      id={size}
                      value={size}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const currentValues = getValues("size");
                        if (checked) {
                          setValue("size", [...currentValues, size]);
                        } else {
                          setValue(
                            "size",
                            currentValues.filter((e) => e !== size)
                          );
                        }
                      }}
                    />
                    <label>{size}</label>
                  </div>
                ))}
              </div>
              <Button type="submit">Add Product</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
