import { useDispatch } from "react-redux";
import { deleteFile } from "../features/fileSlice";

export default function FileCard({ file }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <p>{file.name}</p>
      <p>{file.date}</p>

      {file.type.includes("image") && (
        <img src={file.url} width="120" />
      )}

      <a href={file.url} target="_blank">View</a>

      <button onClick={() => dispatch(deleteFile(file.url))}>
        Delete
      </button>
    </div>
  );
}