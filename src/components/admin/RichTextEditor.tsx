"use client";

import { useState, useEffect } from "react";
import "react-quill-new/dist/quill.snow.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ],
};

const RichTextEditor = ({ value, onChange, placeholder }: Props) => {
  const [QuillComponent, setQuillComponent] = useState<any>(null);

  useEffect(() => {
    // Dynamically import react-quill-new only on the client side
    import("react-quill-new").then((mod) => {
      setQuillComponent(() => mod.default);
    });
  }, []);

  if (!QuillComponent) {
    return (
      <div className="h-64 bg-muted animate-pulse rounded-md flex items-center justify-center text-muted-foreground font-body">
        Cargando editor...
      </div>
    );
  }

  return (
    <div className="rich-editor">
      <QuillComponent
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder}
      />
    </div>
  );
};

export default RichTextEditor;
