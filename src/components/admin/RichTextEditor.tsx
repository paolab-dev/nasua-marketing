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
  const [showHtml, setShowHtml] = useState(false);
  const [htmlValue, setHtmlValue] = useState(value);

  useEffect(() => {
    import("react-quill-new").then((mod) => {
      setQuillComponent(() => mod.default);
    });
  }, []);

  const handleToggleHtml = () => {
    if (!showHtml) {
      setHtmlValue(value);
    }
    setShowHtml(!showHtml);
  };

  if (!QuillComponent) {
    return (
      <div className="h-64 bg-muted animate-pulse rounded-md flex items-center justify-center text-muted-foreground font-body">
        Cargando editor...
      </div>
    );
  }

  return (
    <div className="rich-editor">
      <div className="flex justify-end mb-1">
        <button
          type="button"
          onClick={handleToggleHtml}
          className="text-xs px-2.5 py-1 rounded border border-border bg-muted hover:bg-accent text-muted-foreground font-mono transition-colors"
        >
          {showHtml ? "Visual" : "HTML"}
        </button>
      </div>
      {showHtml ? (
        <textarea
          value={htmlValue}
          onChange={(e) => {
            setHtmlValue(e.target.value);
            onChange(e.target.value);
          }}
          className="w-full min-h-[300px] font-mono text-xs p-3 rounded-md border border-border bg-muted text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring"
          spellCheck={false}
        />
      ) : (
        <QuillComponent
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default RichTextEditor;
