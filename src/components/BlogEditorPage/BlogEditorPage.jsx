import React, { useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Image from '@editorjs/image';
import Paragraph from '@editorjs/paragraph';

const BlogEditorPage = () => {
  const [editorInstance, setEditorInstance] = useState(null);

  const handleEditorReady = () => {
    const editor = new EditorJS({
      holder: 'editor-container',
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        embed: {
          class: Embed,
          inlineToolbar: true,
        },
        image: {
          class: Image,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile',
              byUrl: 'http://localhost:8008/fetchUrl',
            },
            additionalRequestHeaders: {
              Authorization: 'Bearer YOUR_AUTH_TOKEN',
            },
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
      },
      data: {
        blocks: [],
      },
      onReady: () => {
        setEditorInstance(editor);
      },
    });
  };

  const handlePreviewClick = () => {
    editorInstance
      .save()
      .then((outputData) => {
        console.log('Article data: ', outputData);
        // Show preview of the blog post
      })
      .catch((error) => {
        console.log('Error occurred: ', error);
      });
  };

  return (
    <div className="flex flex-row h-screen">
      <div id="editor-container" className="w-1/2 h-full"></div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-gray-100"></div>
    </div>
  );
};

export default BlogEditorPage;
