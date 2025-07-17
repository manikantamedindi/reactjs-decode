import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://via.placeholder.com/150",
        description: "Description for Product 1",
        rating: 4.5,
        likes: 100,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://via.placeholder.com/150",
        description: "Description for Product 2",
        rating: 4.0,
        likes: 200,
      },
    ],
  },
  reducers: {},
});

export default productsSlice.reducer;
