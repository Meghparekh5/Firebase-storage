import { useDispatch } from "react-redux";
import { uploadFile } from "../features/fileSlice";
import { useState, useRef } from "react";

export default function UploadFile() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleUpload = () => {
    if (file) {
      dispatch(uploadFile(file));
      setFile(null);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="card">
      <input
        ref={inputRef}
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}