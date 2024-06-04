import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

type Props = {
  backToContent: () => void;
};

export default function EditBlog(props: Props) {
  const [content, setContent] = useState<string>(
    `<h2>Oficina virtual tributaria de Mogán</h2> ...`
  );
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);

      const img = new window.Image();
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
      img.src = imageUrl;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("/api/updateBlog", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Blog updated successfully!");
        props.backToContent();
      } else {
        alert("Failed to update blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("An error occurred while updating the blog.");
    }
  };

  return (
    <div className="space-y-5 pb-5">
      <div className="flex justify-between flex-wrap gap-4 items-start">
        <div className="max-w-[400px] space-y-3">
          <div className="space-y-1">
            <label
              htmlFor="upload"
              className="text-base text-black font-medium"
            >
              Upload an Image
            </label>
            <input
              type="file"
              id="upload"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none bg-white focus:ring-0"
              onChange={handleImageChange}
            />
          </div>
          {imageUrl && imageDimensions && (
            <Image
              src={imageUrl}
              alt={`blog-img`}
              className="w-full object-center object-cover"
              width={imageDimensions.width}
              height={imageDimensions.height}
            />
          )}
        </div>
        <button
          type="button"
          onClick={props.backToContent}
          className="inline-block text-white bg-brand-blue px-8 py-2.5 rounded-md w-auto text-center hover:bg-opacity-85"
        >
          Back
        </button>
      </div>
      <form onSubmit={handleSubmit} className="w-full pb-14 pt-4 space-y-2">
        <label htmlFor="updatecontent" className="block font-medium">
          Description:
        </label>
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          className="w-full h-[400px] bg-white"
        />
        <button
          type="submit"
          className="inline-block text-white bg-brand-blue px-8 py-2.5 rounded-md w-auto text-center hover:bg-opacity-85"
        >
          Update
        </button>
      </form>
    </div>
  );
}
