import logo from "./logo.svg";
import "./App.css";
import app from "./components/lib/FirebaseConfig";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { UploadForm } from "./components/UploadForm";

const photos = [
    "http://picsum.photos/id/1001/200/200",
    "http://picsum.photos/id/1002/200/200",
    "http://picsum.photos/id/1003/200/200",
    "http://picsum.photos/id/1004/200/200",
    "http://picsum.photos/id/1005/200/200",
    "http://picsum.photos/id/1006/200/200",
];

function App() {
    const [count, setCount] = useState();
    const [input, setInput] = useState({ title: null, file: null, path: null });
    //const [input, setInput] = useState();
    const [items, setItems] = useState(photos);
    const [isCollapsed, Collapse] = useState(false);
    const toggle = () => Collapse(!isCollapsed);
    const handleOnChange = (e) => {
        if (e.target.name === "file") {
            setInput({
                ...input,
                title: e.target.value,
                file: e.target.files[0],
                path: URL.createObjectURL(e.target.files[0]),
            });
        } else {
            setInput({ ...input, title: e.target.value });
        }
    };
    //const handleOnChange = (e) => setInput({title: e.target.value,file:e.target.files[0],path:URL.createObjectURL(e.target.files[0])});
    //const handleOnChange = (e) => setInput(e.target.value);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setItems([input.path, ...items]);
        setInput({ title: null, file: null, path: null });
        Collapse(false);
    };
    useEffect(() => {
        setCount(
            `You have items ${items.length} image${items.length > 1 ? "s" : ""}`
        );
    }, [items]);
    useEffect(() => {
        app();
    }, []);
    return (
        <>
            <Navbar />
            <div class="container text-center mt-5">
                {/* <button type="button" className="btn btn-primary m-2" onClick={() => {setItems(["http://picsum.photos/id/1009/200/200",...items,]);}}> Add Photo+ </button> */}
                <button
                    type="button"
                    className="btn btn-warning float-end"
                    onClick={toggle}
                >
                    {" "}
                    {isCollapsed ? "Close" : "+Add"}
                </button>
                {/*  <button type="button" className="btn btn-warning float-end" onClick={toggle}> Collapse</button> */}
                <UploadForm
                    input={input}
                    isVisible={isCollapsed}
                    onChange={handleOnChange}
                    onSubmit={handleOnSubmit}
                />
                {count}
                <h1>Gallery</h1>

                <div class="row" key={"index"}>
                    {items.map((photo) => (
                        <Card taco={photo} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;

/*<div class="row">
            {photos.apply(null, { length: 9 }).map(() => <Card src={photos} />)} //photo placeholder
        </div> */

        
/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<h1>TEST MM</h1>
      </header>
    </div>
  );
}

export default App; */
