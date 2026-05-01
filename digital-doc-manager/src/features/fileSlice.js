import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const CLOUD_NAME = "dtguu8cqu";
const UPLOAD_PRESET = "CloudDocs Manager";

export const uploadFile = createAsyncThunk("files/uploadFile", async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
    {
      method: "POST",
      body: data
    }
  );

  const result = await res.json();

  return {
    name: file.name,
    url: result.secure_url,
    date: new Date().toLocaleString()
  };
});

const fileSlice = createSlice({
  name: "files",
  initialState: {
    items: []
  },
  reducers: {
    deleteFile: (state, action) => {
      state.items = state.items.filter((f) => f.url !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(uploadFile.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
  }
});

export const { deleteFile } = fileSlice.actions;
export default fileSlice.reducer;