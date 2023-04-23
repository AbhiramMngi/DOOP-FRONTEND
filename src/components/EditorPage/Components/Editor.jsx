import React from "react";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ToggleBlock from "editorjs-toggle-block";
import Alert from "editorjs-alert";
const SimpleImage = require("@editorjs/simple-image");
const Checklist = require("@editorjs/checklist");
const Quote = require("@editorjs/quote");
const CodeTool = require("@editorjs/code");
const Header = require("editorjs-header-with-alignment");
const RawTool = require("@editorjs/raw");
const Paragraph = require("editorjs-paragraph-with-alignment");

const changeToReadOnly = (event) => {
  if (!editor.readOnly.isEnabled === true) {
    editor.readOnly.toggle();
    console.log("Read");
  }
};

const changeToEditMode = () => {
  if (editor.readOnly.isEnabled === true) {
    editor.readOnly.toggle();
    console.log("Edit");
  }
};

const saveBlog = () => {
  editor
    .save()
    .then((outputData) => {
      console.log("Article data: ", outputData);
      /* if(blogid exists){
        /put(outputdata);
      }
        else{
          /post(outputdata); returns the new blog id
          redirect to view blog page with returned blog id;
        }
      } */
    })
    .catch((error) => {
      console.log("Saving failed: ", error);
    });
};

let editor = { isReady: false };
const Editor = (props) => {
    const content=JSON.stringify(props.blogContent);
    console.log('from editor.js'+JSON.stringify(props.blogContent));
  // const [editorData, setEditorData] = useState({});

  // const handlePostClick = async () => {
  // try {
  //   // const response = await axios.post("http://localhost:5000/edit", {
  //   //   bloggerId: 101,
  //   //   title: "Your Post Title Here",
  //   //   subtitle: "Your Post Subtitle Here",
  //   //   content: outputData,
  //   });
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // };
  if (!editor.isReady) {
    editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      placeholder: "Let`s write an awesome story!",
      tools: {
        header: Header,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        list: List,
        image: SimpleImage,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
            },
          },
        },
        toggle: {
          class: ToggleBlock,
          inlineToolbar: true,
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        quote: Quote,
        code: CodeTool,
        raw: RawTool,
        alert: {
          class: Alert,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+A",
          config: {
            defaultType: "primary",
            messagePlaceholder: "Enter something",
          },
        },
      },
      data:  JSON.parse(content),
      readOnly:true
      
    });
  }

  return (
    <div>           
        <div id="editorjs"></div>        
      {/* <button onClick={handlePostClick}>Post </button> */}
    </div>
  );
};

export default Editor;
