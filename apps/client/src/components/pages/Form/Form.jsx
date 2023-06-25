import { useState } from "react";
import styles from "./Form.module.scss";

const Form = () => {
  const [url, setUrl] = useState("");

  const handleForm = (event) => {
    console.log(JSON.stringify({"url": url}))
    event.preventDefault();
    handleDownload();
    // navigate('/article')
  };

  const handleDownload = async () => {
    fetch("/api/files/download", {
      method: "POST",
      body: JSON.stringify({"url": url}),
      headers: {
        'Content-Type': 'application/json',
      },
      // 👇 Set headers manually for single file upload
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `FileName.docx`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleForm} className={styles.form}>
          <h1>Link</h1>
          <input
            type="url"
            className={styles.link}
            value={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
            placeholder="place your link here"
          />
          <input type="submit" value="submit" className={styles.submit} />
        </form>
      </div>
    </div>
  );
};

export default Form;
