import react from "react";
import { Controller, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Radio,
  TextInput,
} from "flowbite-react";



export function ProductModal({ openModal, setOpenModal ,addProduct}) {
  const sizeData = ["1.5", "2", "3", "4"];
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      title: "",
      description: "",
      brand: "",
      gender: "",
      category:"",
      price: "",
      discount:"",
      thumbnails: "",
      size: "",
    },
  });

  const addProductHandler = (data) => {
    addProduct(data);
    setOpenModal(false);
  };

 
    
  // const EditHandler = (data) => {
  //   console.log("🚀 ~ file: ProductModal.jsx:27 ~ EditHandler ~ data:", data);
  // };
    

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="capitalize  bg-[#DBC0C1] ">Upadate Data</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(addProductHandler)} className="px-4 ">
            <div className="flex flex-col gap-3">
            {/*===========TITLE===============*/}
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-medium" value="Title" />
              <Controller
                name="title"
                control={control}
                render={({ field }) => <TextInput type="text" {...field} />}
              />
            </div>

            {/*===========DESCRIPTION===============*/}
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-medium" value="Description" />
              <Controller
                name="description"
                control={control}
                render={({ field }) => <TextInput type="textarea" {...field} />}
              />
            </div>

            {/*===========BRAND===============*/}
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-medium" value="Brand" />
              <Controller
                name="brand"
                control={control}
                render={({ field }) => <TextInput type="text" {...field} />}
              />
            </div>

            {/*===========GENDER===============*/}
            <div className="flex flex-col gap-2">
              <legend className="text-lg font-medium">Gender</legend>
              <div className="flex items-center gap-2">
                <Radio
                  id="male"
                  value="MALE"
                  onChange={() => setValue("gender", "MALE")}
                />
                <Label >Male</Label>
                <Radio
                  id="female"
                  value="FEMALE"
                  onChange={() => setValue("gender", "FEMALE")}
                />
                <Label >Female</Label>
                <Radio
                  id="kids"
                  value="KIDS"
                  onChange={() => setValue("gender", "KIDS")}
                />
                <Label >Kids</Label>
              </div>
            </div>

            {/*===========category===============*/}
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-medium" value="Category" />
              <Controller
                name="ReactSelect"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    isMulti
                    {...field}
                    options={[
                      { value: "24karet", label: "24karet" },
                      { value: "wedding", label: "Wedding" },
                      { value: "diamond", label: "Diamond" },
                      { value: "dailywere", label: "Dailywere" },
                      { value: "18karet", label: "18karet" },
                      { value: "22karet", label: "22karet" },
                      { value: "silver", label: "Silver" },
                      { value: "gold", label: "Gold" },
                      { value: "platinam", label: "Platinam" },
                      { value: "silver", label: "Silver" },
                  


                    ]}
                  />
                )}
              />
            </div>

            {/*===========PRICE===============*/}
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-medium" value="Price" />
              <Controller
                name="price"
                control={control}
                render={({ field }) => <TextInput type="number" {...field} />}
              />
            </div>

            {/*===========DISCOUNT===============*/}
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-medium" value="Discount" />
              <Controller
                name="discount"
                control={control}
                render={({ field }) => <TextInput type="number" {...field} />}
              />
            </div>
            {/*===========THUMBNAILS===============*/}
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-medium" value="Thumbnails" />
              <Controller
                name="thumbnails"
                control={control}
                render={({ field }) => <TextInput type="text" {...field} />}
              />
            </div>
            {/*===========SIZE===============*/}
            <div className="flex flex-col ">
              <legend className="text-lg font-medium" >Size</legend>

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
                          currentValues.filter((s) => s !== size)
                        );
                      }
                    }}
                  />
                  <label>{size}</label>
                </div>
              ))}
            </div>

            <Button type="submit">Add Product</Button>

            <Button type="submit">Update Product</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

