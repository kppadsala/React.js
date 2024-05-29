import React, {  useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Select from "react-select";
import { toast } from "react-toastify";
import { useEffect } from "react";

const colourOptions = [
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "silver", label: "Silver" },
];

const categoryOptions = [
  { value: "smartphones", label: "Smartphones" },
  { value: "3g", label: "3G" },
  { value: "4g", label: "4G" },
  { value: "cotton", label: "Cotton" },
  { value: "banarashi", label: "Banarashi" },
  { value: "wedding", label: "Wedding" },
  { value: "shoes", label: "Shoes" },
  { value: "lightweight", label: "Lightweight" },
  { value: "cloth", label: "Cloth" },
  { value: "durable", label: "Durable" },
  { value: "t-shirt", label: "Shirt" },
  { value: "hoodi", label: "Hoodi" },
  { value: "denim", label: "Denim" },
  { value: "shirt", label: "Shirt" },
  { value: "kurti", label: "Kurti" },
  { value: "jecket", label: "Jecket" },
];

export default function ProductModal({ modal,toggle,refetch,defaultData,updateMode}) {

  // ===============STORE INPUT DATA=========
  let [productData,setProductData]=useState({});
  
  // ========FOR OPEN/CLOSE TOGGLE=============
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  useEffect(() => {
    console.log("========")
    setProductData(defaultData);
  }, [defaultData]);

  const addProduct=(e)=>{
    e.preventDefault();
axios({
  method: "post",
  url: "http://localhost:9999/product/create",
  data:productData
})
  .then((res) => {
    console.log("==>res:", res.data);
    refetch()
    toggle();
    setProductData({});
    toast.success("Product Data Is Adddd")
  })
  .catch((err) => {
    console.log("==>err:", err);
  }) }
 
  
  const checkHandler = (ele) => {
    if (productData?.size?.includes(ele)) {
      let filter = productData?.size((e) => e !== ele);
      setProductData({ ...productData, size: filter });
    } else {
      setProductData({ ...productData, size: [...productData.size, ele] });
    }
  };

  let selectHandler = (e, type) => {
    if (type === "color") {
      let color = e.map((e) => e.value);
      setProductData({ ...productData, color });
    }
  };

  let selectCategoryHandler = (e, type) => {
    if (type === "category") {
      let category = e.map((e) => e.value);
      setProductData({ ...productData, category });
    }
  };

  const submitHandler=()=>{
    let addProductdata = { ...productData };
    console.log("addProduct data:", addProductdata);

  }

  const updaProduct=(e)=>{

  }
  return (
    <div>
    
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} >Add Product</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => submitHandler(e)}>

{/*===========TITLE===============*/}
            <FormGroup>
              <Label for="title" className="fw-bold  text-danger-emphasis ">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter Product Title"
                type="text"
                value={productData?.title}
                onChange={(e) =>
                  setProductData({ ...productData, title: e?.target?.value })
                }

              />
            </FormGroup>

{/*===========DESCRIPTION===============*/}
            <FormGroup>
              <Label for="description"  className="fw-bold  text-danger-emphasis ">Description</Label>
              <Input id="description" name="description" type="textarea" 
              value={productData?.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e?.target?.value })
              }/>
            </FormGroup>

{/*===========BRAND===============*/}
            <FormGroup>
              <Label for="brand"  className="fw-bold  text-danger-emphasis ">Brand</Label>
              <Input
                id="brand"
                name="brand"
                placeholder="Enter Product Brand / Company Name"
                type="text"
                value={productData?.brand}
                onChange={(e) =>
                  setProductData({ ...productData, brand: e?.target?.value })
                }
              />
            </FormGroup>

{/*===========GENDER===============*/}
            <FormGroup tag="fieldset">
              <lable  className="fw-bold  text-danger-emphasis ">Gender</lable>
              <div className="d-flex justify-content-start gap-3">
                <FormGroup check>
                  <Input name="gender" type="radio" checked={productData.gender === "male"}
                    onChange={() => setProductData({ ...productData, gender: "male" })}/>
                  <Label check>Male</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="gender" type="radio" value="female" checked={productData.gender === "female"}
                    onChange={() => setProductData({ ...productData, gender: "female" })}/>
                  <Label check>Female</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="gender" type="radio" value="kids" checked={productData.gender === "kids"}
                    onChange={() => setProductData({ ...productData, gender: "kids" })}/>
                  <Label check>Kids</Label>
                </FormGroup>
              </div>
            </FormGroup>

{/*===========category===============*/}
            <FormGroup>
              <Label for="exampleSelectMulti"  className="fw-bold  text-danger-emphasis ">category</Label>
              <Select
                isMulti
                name="category"
                options={categoryOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                value={productData?.category?.map((category) => {
                  return { value: category, label: category };
                })}
                onChange={(e) => selectCategoryHandler(e, "category")}
              />
            </FormGroup>


{/*===========COLOR===============*/}
<FormGroup>
              <Label for="exampleSelectMulti"  className="fw-bold  text-danger-emphasis ">Color</Label>
              <Select
                isMulti
                name="colors"
                options={colourOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                value={productData?.color?.map((color) => {
                  return { value: color, label: color };
                })}
                onChange={(e) => selectHandler(e, "color")}

              />
            </FormGroup>
{/*===========PRICE===============*/}
            <FormGroup>
              <Label for="brand"  className="fw-bold  text-danger-emphasis ">Price</Label>
              <Input
                id="price"
                name="Price"
                placeholder="Enter Product Price "
                type="text"
                value={productData?.price}
                onChange={(e) =>
                  setProductData({ ...productData, price: e?.target?.value })
                }
              />
            </FormGroup>

{/*===========DISCOUNT===============*/}
            <FormGroup>
              <Label for="brand"  className="fw-bold  text-danger-emphasis ">Discount</Label>
              <Input
                id="discount"
                name="Discount"
                placeholder="Enter Product Discount"
                type="text"
                value={productData?.discount}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    discount: e?.target?.value,
                  })
                }
              />
            </FormGroup>

{/*===========THUMBNAILS===============*/}
            <FormGroup>
              <Label for="brand"  className="fw-bold  text-danger-emphasis ">Thumbnail</Label>
              <Input
                id="thumbnail"
                name="Thumbnail"
                placeholder="Enter Product Thumbnail / Product Image"
                type="text"
                value={productData?.thumbnail}
                onChange={(e) =>
                  setProductData({ ...productData, thumbnail: e.target.value })
                }
              />
            </FormGroup>

{/*===========SIZE===============*/}
            <label  className="fw-bold  text-danger-emphasis ">Size</label> 
            <FormGroup className="d-flex gap-2">
              {["41", "42", "43", "44", "45"]?.map?.((e, i) => {
                return (
                  <div key={i}>
                    <Input
                      id="checkBox40"
                      type="checkbox"
                      value={productData?.size}
                      checked={productData?.size?.includes?.(e)}
                      onChange={() => checkHandler(e)}
                      className="me-2"
                    />
                    <Label for="checkBox40">{e}</Label>
                  </div>
                );
              })}
            </FormGroup>
          </Form>

        </ModalBody>
        <ModalFooter>
          {
            updateMode ? (
              <Button className="bg-primary w-100 fw-bold " onClick={(e)=>updaProduct(e)} >
              Update
            </Button>
            ):(
              <Button className="bg-primary w-100 fw-bold " onClick={(e)=>addProduct(e)} >
              SUBMIT
            </Button>
            )
          }
         
        </ModalFooter>
      </Modal>
    </div>
  );
}
