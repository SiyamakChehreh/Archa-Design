import React from "react";
import { useGetAllStudentsQuery } from "../store/index";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

interface Student {
  _id: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  courseId: string;
}

export const StudentsModal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,
}) => {
  if (!isModalOpen) return null;

  const { data: students, isLoading } = useGetAllStudentsQuery();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/80 bg-opacity-50">
      <div className="relative w-full max-w-md p-6 rounded-xl bg-white border-2 border-amber-400">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 font-bold hover:scale-[1.1] transitiona-all duration-500 text-gray-600 hover:text-gray-800 text-2xl"
        >
          ✕
        </button>
        {isLoading ? (
          <div className="text-center text-gray-700">...در حال بارگذاری</div>
        ) : (
          <div className="max-w-md w-full max-h-120 overflow-scroll">
            {students && students.length > 0 ? (
              students.map((student: Student) => (
                <div
                  key={student._id}
                  className="border-b border-gray-200 py-2"
                >
                  <p className="font-semibold">
                    {student.name} {student.lastName}
                  </p>
                  <p className="text-sm text-gray-600">{student.phoneNumber}</p>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                دانشجویی وجود ندارد
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
