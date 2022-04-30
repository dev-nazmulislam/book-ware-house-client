import React from "react";
import { useForm } from "react-hook-form";
import useBook from "../../../Hooks/useBook";

const AddItems = () => {
  const [books, setBooks] = useBook();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        const newBook = [...books, data];
        setBooks(newBook);
        alert("user Added successfully");
      });
  };

  return (
    <div>
      <form className="mx-3 shadow p-3 my-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-primary">Add Books</h1>
        <div className="my-3">
          <label htmlFor="bookname" className="form-label">
            Book Name
          </label>
          <input
            className="form-control"
            {...register("bookName")}
            placeholder="Book Name"
            id="bookname"
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            className="form-control"
            {...register("author")}
            placeholder="Author"
            id="author"
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="publishar" className="form-label">
            Publishar
          </label>
          <input
            className="form-control"
            {...register("publishar")}
            placeholder="Publishar"
            id="publishar"
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="subTitle" className="form-label">
            Sub Title
          </label>
          <input
            className="form-control"
            {...register("subTitle")}
            placeholder="Sub Title"
            id="subTitle"
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            {...register("description")}
            placeholder="Description"
            id="description"
            required
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
              placeholder="Catagory"
              id="catagory"
              required
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
              placeholder="Stock Quantity"
              id="stockQuantity"
              required
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
              placeholder="Photo URL"
              id="photo"
              required
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
              placeholder="Price"
              id="price"
              required
            />
          </div>
        </div>
        <input type="submit" value="Add Items" />
      </form>
    </div>
  );
};

export default AddItems;
