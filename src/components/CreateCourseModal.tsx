import { useState } from "react";
import { useCreateCourseMutation } from "../store";
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

  const [createCourse] = useCreateCourseMutation();

  const handleSubmit = async (e: React.FormEvent, credentials: NewCourse) => {
    e.preventDefault();

    try {
      await createCourse(credentials as NewCourse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/80 bg-opacity-50">
      <div className="relative w-full max-w-md p-6 rounded-xl bg-white border-2 border-amber-400">
        <form onSubmit={(e) => handleSubmit(e, { title, description })}>
          <input
            value={title}
            placeholder="عنوان"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={description}
            placeholder="توضیحات"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>ثبت دوره</button>
          <button onClick={onClose}>بستن</button>
        </form>
      </div>
    </div>
  );
};
