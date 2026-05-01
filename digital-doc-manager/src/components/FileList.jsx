import { useSelector, useDispatch } from "react-redux";
import { deleteFile } from "../features/fileSlice";

export default function FileList() {
  const files = useSelector((state) => state.files.items);
  const dispatch = useDispatch();

  return (
    <div className="grid">
      {files.map((file, i) => (
        <div className="card" key={i}>
          <p>{file.name}</p>
          <p>{file.date}</p>

          <div className="row">
            <a href={file.url} target="_blank">View</a>

            <button onClick={() => dispatch(deleteFile(file.url))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}