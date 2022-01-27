import "./App.css"
import { useState } from "react"

function App() {
  const [selectedFile, setSelecteFile] = useState(null)
  const onChangeHandler = event => {
    const files = event.target.files
    console.log(event.target.files)
    setSelecteFile(files[0])
  }

  const onClickHandler = async () => {
    const formData = new FormData()
    formData.append("avatar", selectedFile)
    await fetch("http://localhost:3001/files/uploadSingle", { method: "POST", body: formData })
  }

  return (
    <div className="App">
      <header>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      </header>
      <form method="post" action="#" id="#">
        <div className="form-group files">
          <label>Upload Your File </label>
          <input type="file" name="file" multiple onChange={onChangeHandler} />
          <button type="button" onClick={onClickHandler}>
            Send
          </button>
        </div>
      </form>
      <img src="http://localhost:3001/img/users/magic.gif" alt=""></img>
    </div>
  )
}

export default App
