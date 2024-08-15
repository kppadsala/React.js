import axios from "axios";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Radio,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";

const options = [
  { value: "platinam", label: "platinam" },
  { value: "chocolate", label: "chocolate" },
  { value: "18Karat", label: "18Karat" },
  { value: "vanilla", label: "Vanilla" },
];
const sizeData = ["1.5", "2", "3", "4"];

export default function UpdateProduct({
  openModal,
  setOpenModal,
  updateProduct,
  UpdateHandler
}) {
  let [product, setProduct] = useState("");
  const [refresh, setRefresh] = useState(true);
  const refetch = () => setRefresh(!refresh);

  const { control, handleSubmit, setValue, getValues, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      brand: "",
      gender: "",
      category: "",
      price: "",
      discount: "",
      thumbnail: "",
      size: [],
    },
  });

  useEffect(() => {
    console.log("--->updateProductupdateProduct")
    reset(updateProduct);
  }, [updateProduct]);
    console.log("🚀 ~ useEffect ~ updateProduct:", updateProduct)

  const submitHandler = (data) => {
    console.log("🚀 ~ submitHandler ~ data:", data);
    setProduct(data);
    axios({
      method: "post",
      url: "http://localhost:9999/product/create/",
      data: data,
    })
      .then((res) => {
        console.log("🚀 ~ AddHandler ~ res:", res.data.data);
        toast.success("Product Added Successfully");
      })
      .catch((err) => {
        toast.error("Product Not Added");
        console.log("Error:", err);
      });
    refetch();
    setOpenModal(false);
    reset();
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
                  <TextInput type="text" placeholder="Description" {...field} />
                )}
              />
              <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                  <TextInput type="text" placeholder="Brand" {...field} />
                )}
              />

              <span className="flex justify-start items-center gap-3">
                <Radio
                  id="male"
                  value="male"
                  name="gender"
                  onChange={() => setValue("gender", "male")}
                />
                <label>Male</label>
                <Radio
                  id="female"
                  value="female"
                  name="gender"
                  onChange={() => setValue("gender", "female")}
                />
                <label>Female</label>
                <Radio
                  id="other"
                  value="other"
                  name="gender"
                  onChange={() => setValue("gender", "other")}
                />
                <label>Other</label>
              </span>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    isMulti
                    options={options}
                    value={options.filter((option) =>
                      field.value.includes(option.value)
                    )}
                    onChange={(selectedOptions) => {
                      field.onChange(
                        selectedOptions.map((option) => option.value)
                      );
                    }}
                  />
                )}
              />
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <TextInput type="number" placeholder="Price" {...field} />
                )}
              />
              <Controller
                name="discount"
                control={control}
                render={({ field }) => (
                  <TextInput type="number" placeholder="Discount" {...field} />
                )}
              />
              <Controller
                name="thumbnail"
                control={control}
                render={({ field }) => (
                  <TextInput type="text" placeholder="Thumbnail" {...field} />
                )}
              />

              <label>Size</label>
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
              <Button onClick={()=>UpdateHandler()}>Update Product</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

// const AddHandler=(e)=>{
// e.preventDefault()
// axios({
//   method:"post",
//   url:"http://localhost:9999/product/create/",
//   data:product
// }).then((res) => {
//   console.log("🚀 ~ AddHandler ~ res:", res)
//   toast.success("Product Added Successfully");

// }).catch(()=>{
//   toast.error("Product Added Successfully");
//   console.log("Error:", err);

// })
