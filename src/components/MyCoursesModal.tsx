import {
  useGetUserCoursesQuery,
  useDeleteUserEnrollmentMutation,
} from "../store/index.tsx";
import trashcan from "../assets/images/trashcan.svg";

interface ModalProps {
  onClose: () => void;
}

const MyCoursesModal: React.FC<ModalProps> = ({ onClose }) => {
  const { data, isLoading, isError } = useGetUserCoursesQuery();
  const [deleteEnrolledCourse] = useDeleteUserEnrollmentMutation();

  const handleDelete = async (courseId: string) => {
    try {
      await deleteEnrolledCourse(courseId).unwrap();
    } catch (error) {
      console.error("Failed to delete enrollment:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">My Enrolled Courses</h2>

        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong.</p>}

        {data && (
          <ul className="space-y-2">
            {data.map((course: any) => (
              <li
                key={course._id}
                className="border p-2 rounded bg-gray-100 flex flex-row justify-between"
              >
                <p>📖 {course.courseId.title} </p>
                <button
                  className="cursor-pointer"
                  onClick={() => handleDelete(course.courseId._id)}
                >
                  <img width="20" height="20" src={trashcan} alt="delete" />
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MyCoursesModal;
