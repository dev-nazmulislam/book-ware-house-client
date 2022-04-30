import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
  const { itemid } = useParams();
  const [book, setBook] = useState([]);
  const { register, handleSubmit } = useForm();
  const {
    bookName,
    author,
    catagory,
    stockQuantity,
    publishar,
    subTitle,
    description,
    photo,
    price,
  } = book;

  useEffect(() => {
    fetch(`https://mighty-dusk-49836.herokuapp.com/book/${itemid}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [itemid]);

  const onSubmit = (newBook) => {
    const url = `https://mighty-dusk-49836.herokuapp.com/bookupdate/${itemid}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Updated successfully!!!");
        // setBook(data);
      });
  };
  return (
    <div>
      <form className="mx-3 shadow p-3 my-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-primary">Update Product</h1>
        <div className="my-3">
          <label htmlFor="bookname" className="form-label">
            Book Name
          </label>
          <input
            className="form-control"
            {...register("bookName")}
            placeholder={bookName}
            id="bookname"
          />
        </div>
        <div className="my-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            className="form-control"
            {...register("author")}
            placeholder={author}
            id="author"
          />
        </div>
        <div className="my-3">
          <label htmlFor="publishar" className="form-label">
            Publishar
          </label>
          <input
            className="form-control"
            {...register("publishar")}
            placeholder={publishar}
            id="publishar"
          />
        </div>
        <div className="my-3">
          <label htmlFor="subTitle" className="form-label">
            Sub Title
          </label>
          <input
            className="form-control"
            {...register("subTitle")}
            placeholder={subTitle}
            id="subTitle"
          />
        </div>
        <div className="my-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            {...register("description")}
            placeholder={description}
            id="description"
          />
        </div>
        <div className="d-flex">
          <div className="my-3 w-75">
            <label htmlFor="catagory" className="form-label">
              Catagory
            </label>
            <input
              className="form-control"
              {...register("catagory")}
              placeholder={catagory}
              id="catagory"
            />
          </div>
          <div className="my-3 w-25">
            <label htmlFor="stockQuantity" className="form-label">
              Stock Quantity
            </label>
            <input
              type="number"
              className="form-control"
              {...register("stockQuantity")}
              placeholder={stockQuantity}
              id="stockQuantity"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="my-3 w-75">
            <label htmlFor="photo" className="form-label">
              Plase Photo URL
            </label>
            <input
              className="form-control"
              {...register("photo")}
              placeholder={photo}
              id="photo"
            />
          </div>
          <div className="my-3 w-25">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              {...register("price")}
              placeholder={price}
              id="price"
            />
          </div>
        </div>
        <input type="submit" value="Update Items" />
      </form>
    </div>
  );
};

export default UpdateItem;
