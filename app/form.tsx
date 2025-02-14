"use client";
import React, { useEffect, useState } from "react";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { useRouter, useSearchParams } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
interface FormData {
  name: string;
  email: string;
  request: string;
  avatar: string;
}
export default function Form() {
  const searchParams = useSearchParams();
  const ticketType = decodeURIComponent(
    searchParams.get("ticketType") || "free"
  );
  const ticketCount = decodeURIComponent(
    searchParams.get("ticketCount") || "!"
  );
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    request: "",
    avatar: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [avatar, setAvatar] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
      if (parsedData.avatar) {
        setAvatar(parsedData.avatar);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };
  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.avatar.trim()) {
      newErrors.avatar = "Please Upload an Image";
    }
    if (!formData.request) {
      newErrors.request = "Request is required";
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e) e.preventDefault();
    if (validateForm()) {
      router.push(
        `/Ticket?name=${encodeURIComponent(
          formData.name
        )}&email=${encodeURIComponent(
          formData.email
        )}&avatar=${encodeURIComponent(
          formData.avatar
        )}&request=${encodeURIComponent(
          formData.request
        )}&ticketCount=${encodeURIComponent(
          ticketCount
        )}&ticketType=${encodeURIComponent(ticketType)}`
      );

      localStorage.removeItem("formData");
      const updatedData = { ...formData, avatar: "" };
      localStorage.setItem("formData", JSON.stringify(updatedData));
      setFormData({ name: "", email: "", avatar: "", request: "" });
      setAvatar("");
    } else {
      setShake(true);
    }
  };
  const handleFileUpload = async (file: File) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/deltdoijc/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(`Upload failed with status ${res.status}`);
      }

      const data = await res.json();

      if (data.secure_url) {
        setAvatar(data.secure_url);
        setFormData((prev) => ({ ...prev, avatar: data.secure_url }));
        setErrors((prevErrors) => ({ ...prevErrors, avatar: "" }));
      } else {
        throw new Error("No secure URL returned from Cloudinary");
      }
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        avatar: "Failed to upload. Please check your network and try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) handleFileUpload(file);
  };
  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.currentTarget.classList.add("border-blue-500");
  };
  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.currentTarget.classList.remove("border-blue-500");
  };
  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove("border-blue-500");
    const file = event.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };
  return (
    <div className="w-full md:p-4 mt-8 md:px-32 font-jeju">
      <div className="bg-transparent rounded-3xl md:rounded-2xl border border-border w-full text-white py-[3.5rem] px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between w-full font-jeju relative pb-2">
          <p className="text-2xl text-customGray">Attendee Details</p>
          <p className="text-xs text-customGray font-bold">Step 2/3</p>
        </div>
        <div className="w-full h-[3px] bg-[#0E464F] rounded-b-xl overflow-hidden">
          <div className="h-full bg-underlineBorder w-2/3 transition-all duration-300"></div>
        </div>
        <div className="bg-foreground mt-6 rounded-3xl md:rounded-4xl text-center border border-border w-full text-white py-6 px-4 md:px-6">
          <div className="flex flex-col items-center gap-4">
            {}
            <div className="bg-foreground border border-border rounded-3xl p-5 w-full">
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm text-customGray my-5">
                  Upload Profile Photo
                </p>
                <div className="bg-black/20 w-full flex justify-center">
                  <div className="relative w-40 h-40">
                    <label
                      className="relative w-40 h-40 bg-[#0E464F] rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#0c3b43] transition-colors border border-dashed border-gray-500"
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                        aria-describedby={
                          errors.avatar ? "avatar-error" : undefined
                        }
                      />
                      {loading ? (
                        <div className="flex flex-col items-center">
                          <ImSpinner2 className="animate-spin text-white text-3xl" />
                          <p className="text-sm text-white mt-2">
                            Uploading...
                          </p>
                        </div>
                      ) : avatar ? (
                        <>
                          <img
                            src={avatar}
                            alt="Avatar"
                            className="w-full h-full object-cover aspect-square border-opacity-50 rounded-3xl"
                          />
                          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                            <RiDownloadCloud2Line className="text-3xl" />
                            <p className="text-sm text-center">
                              Drag & drop or click to change
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <RiDownloadCloud2Line className="text-3xl text-white" />
                          <p className="text-sm text-center text-gray-300 px-4">
                            Drag & drop or click to upload
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>
                {errors.avatar && (
                  <p className="text-red-500 text-sm">{errors.avatar}</p>
                )}
              </div>
            </div>
            <div className="w-full h-[3px] bg-[#0E464F] rounded-b-xl overflow-hidden my-6"></div>
            {}
            <form className="w-full space-y-8 mt-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-left text-sm text-customGray">
                  Enter your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border rounded-lg p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.name
                      ? "border-red-500 ring-red-500 animate-wobble"
                      : "border-border"
                  }`}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p className="text-red-500 text-left text-sm">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-left text-sm text-customGray">
                  Enter your email
                </label>
                <div className="relative flex items-center">
                  <MdOutlineEmail className="absolute left-3 text-white text-xl" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border rounded-lg p-2 pl-10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.email
                        ? "border-red-500 ring-red-500 animate-wobble"
                        : "border-border"
                    }`}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </div>

                {errors.email && (
                  <p className="text-red-500 text-left text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-left text-sm text-customGray">
                  Special Request?
                </label>
                <textarea
                  value={formData.request}
                  name="request"
                  onChange={handleChange}
                  className={`w-full bg-transparent border rounded-lg p-2 transition-all min-h-[100px] resize-none duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.request
                      ? "border-red-500 ring-red-500 animate-wobble"
                      : "border-border"
                  }`}
                />
                {errors.request && (
                  <p className="text-red-500 text-left text-sm">
                    {errors.request}
                  </p>
                )}
              </div>
            </form>
            {}
            <div className="flex flex-col md:flex-row  gap-4 mt-6 w-full ">
              <Link
                href="/"
                className="md:w-1/2 border border-underlineBorder text-underlineBorder rounded-lg py-2"
              >
                Back
              </Link>
              <button
                className={`md:w-1/2 bg-underlineBorder rounded-lg py-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Processing..." : "Get My Free Ticket"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
