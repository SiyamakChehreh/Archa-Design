import { useState } from "react";
import { useCreateCourseMutation, useGetAllCoursesQuery } from "../store";
import type { NewCourse } from "../store/apis/adminApi";

interface ModalProps {
  isCreateCourseOpen: boolean;
  onClose: () => void;
}

export const CreateCourseModal: React.FC<ModalProps> = ({
  isCreateCourseOpen,
  onClose,
}) => {
  if (!isCreateCourseOpen) return null;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const [createCourse, { isLoading, error }] = useCreateCourseMutation();
  const { refetch } = useGetAllCoursesQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const credentials: NewCourse = { title, description, image };

    try {
      await createCourse(credentials).unwrap();
      setTitle("");
      setDescription("");
      setImage(null);
      refetch();
      onClose();
    } catch (err) {
      console.error("Failed to create course:", err);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/80 bg-opacity-50">
      <div className="relative w-full max-w-md p-6 rounded-xl bg-white border-2 border-amber-400">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="font-lalezar font-bold mx-auto mb-2 text-2xl">
            :اضافه کردن دوره‌ی جدید
          </label>
          <input
            className="border-2 border-gray-500 rounded-xl font-lalezar pl-1 py-2"
            value={title}
            placeholder="عنوان"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border-2 border-gray-500 rounded-xl font-lalezar pl-1 py-2 h-50"
            value={description}
            placeholder="توضیحات"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border-2 border-gray-500 rounded-xl font-lalezar pl-1 py-2"
          />
          <div className="flex flex-row gap-3 mx-auto">
            <button
              disabled={isLoading}
              className="border-2 border-gray-600 rounded-md bg-sky-500 hover:bg-sky-600 hover:scale-[1.1] px-2 py-1 cursor-pointer font-lalezar transition-all duration-700"
            >
              {isLoading ? "در حال ارسال..." : "ثبت دوره"}
            </button>
            <button
              type="button"
              className="border-2 border-gray-600 rounded-md bg-amber-300 hover:bg-amber-400 hover:scale-[1.1] px-2 py-1 cursor-pointer font-lalezar transition-all duration-700"
              onClick={onClose}
            >
              بستن
            </button>
          </div>
          {error && (
            <p className="text-red-600 font-lalezar mt-2">
              خطا در ثبت دوره. لطفاً دوباره تلاش کنید.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
