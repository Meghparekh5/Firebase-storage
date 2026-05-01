import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";

export default function Dashboard() {
  return (
    <div className="container">
      <h2 className="title">DocuVault</h2>
      <UploadFile />
      <FileList />
    </div>
  );
}