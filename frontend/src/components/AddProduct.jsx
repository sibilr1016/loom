import { useState } from "react";
import { useAddProductMutation } from "../services/product";

function AddProduct() {
  const [thumbnail, setThumbnail] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [preview, setPreview] = useState(null);
  const [previews, setPreviews] = useState([]);
  const [productSize, setProductSize] = useState();
  const [productCount, setProductCount] = useState(0);
  const [variants, setVariants] = useState([]);
  const [category, setCategory] = useState("shirts");
  const [addProduct] = useAddProductMutation();

  const sizes = ["S", "M", "L", "XL", "2XL"];

  const handleVariant = (e) => {
    e.preventDefault();

    if (!productSize || productCount <= 0) return;

    setVariants((prev) => [
      ...prev,
      { size: productSize, count: productCount },
    ]);

    setProductCount(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("thumbnail", thumbnail);
    gallery.forEach((file) => formData.append("gallery", file));
    formData.append("productName", productName);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("variants", JSON.stringify(variants));
    await addProduct(formData);
  };

  const handleThumbnailChange = (e) => {
    const selectedFile = e.target.files[0];
    setThumbnail(selectedFile);

    // Create preview URL
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  };
  const handleGalleryChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setGallery(selectedFiles);

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 text-sm text-gray-600 p-5 bg-white rounded-lg shadow-2xl"
    >
      <h1 className=" text-center font-bold text-2xl text-gray-800">
        Add Product
      </h1>

      <div className="flex gap-10">
        <div>
          {preview && <img src={preview} alt="Preview" className="h-20 w-20" />}

          <input
            className="border p-2 rounded-lg"
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
          />
        </div>
        <div className="space-y-2">
          <div className="flex gap-3">
            {previews &&
              previews.map((preview) => (
                <img src={preview} alt="Preview" className="h-20 w-20" />
              ))}
          </div>
          <input
            onChange={handleGalleryChange}
            accept="image/*"
            className="border p-2 rounded-lg"
            type="file"
            multiple
          />
        </div>
      </div>
      <input
        type="text"
        className="border p-2 placeholder:text-gray-600"
        name="productName"
        value={productName}
        placeholder="Product Name"
        onChange={(e) => setProductName(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name="category"
        id=""
        className="border p-2"
      >
        <option value="shirts">shirts</option>
        <option value="jeans">Jeans</option>
      </select>
      <input
        className="border p-2"
        type="number"
        value={price}
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border placeholder:p-2 placeholder:text-gray-600"
        placeholder="Description"
      ></textarea>

      <div className="border p-2 ">
        <div>
          <ul className="flex gap-2 mb-3">
            {sizes.map((size) => (
              <li
                key={size}
                className="border cursor-pointer text-center h-7 w-7"
                onClick={(e) => setProductSize(e.target.outerText)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setProductCount((c) => c - 1)}
            className="px-2 border"
          >
            -
          </button>
          <p>{productCount}</p>
          <button
            type="button"
            onClick={() => setProductCount((c) => c + 1)}
            className="px-2 border"
          >
            +
          </button>
          <button type="button" onClick={handleVariant} className="px-2 border">
            Add
          </button>
        </div>
      </div>
      {variants.map((variant, index) => (
        <p key={index}>
          {variant.size} - {variant.count}
        </p>
      ))}
      <button
        className="border p-2 bg-gray-900 rounded-lg text-gray-200"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddProduct;
