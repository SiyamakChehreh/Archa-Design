import { ChangeEvent, useState } from "react";
import max from "../assets/images/3d max.svg";
import autocad from "../assets/images/autocad.svg";
import sketchup from "../assets/images/sketchup.svg";

interface user {
  name: string;
  lastName: string;
  phone: string;
}

export default function EducationalPage() {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [users, setUsers] = useState<user[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !lastName || !phone) return;

    const newUsers = { name, lastName, phone };

    setUsers((prevUsers) => [...prevUsers, newUsers]);

    setName("");
    setLastName("");
    setPhone("");
  };

  console.log(users);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <section id="educational" className="scroll-mt-30">
      <div className="h-auto w-screen basis-auto p-10 flex flex-col gap-5 lg:gap-12 bg-gray-200">
        <div className="flex-col place-items-center lg:flex lg:flex-row mx-auto lg:w-260 lg:justify-around">
          <div>
            <img
              className={`lg:h-50 lg:w-50 h-25 w-25 transitiona-all duration-700 ease-in-out ${
                isOpen1 ? "scale-[0.90]" : "scale-[1.3]"
              }`}
              onClick={() => {
                setIsOpen1(!isOpen1);
              }}
              src={max}
            />
          </div>
          <div
            className={`flex flex-col p-2 border-4 rounded-xl border-slate-300 transition-all duration-700 ease-in-out ${
              isOpen1
                ? "w-75 h-40 lg:w-170 lg:h-45 opacity-100"
                : "w-50 h-50 opacity-0"
            } `}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">
              <input
                className="border-2 rounded-xl border-fuchsia-200 focus:border-amber-300 p-1"
                type="text"
                value={name}
                placeholder="Name"
                onChange={handleChangeName}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-200 focus:border-amber-300 p-1"
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={handleChangeLastName}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-200 focus:border-amber-300 p-1"
                type="text"
                value={phone}
                placeholder="Phone Number"
                onChange={handleChangePhone}
              />
              <button
                className="border-2 border-gray-500 rounded-xl bg-sky-500 focus:bg-sky-700 mx-auto px-2 mt-2"
                type="submit"
              >
                add User
              </button>
            </form>
          </div>
        </div>
        <div className="flex-col place-items-center lg:flex mx-auto lg:w-260 lg:justify-around lg:flex-row-reverse">
          <div>
            <img
              className={`lg:h-50 lg:w-50 h-25 w-25 transitiona-all duration-700 ease-in-out ${
                isOpen2 ? "scale-[0.90]" : "scale-[1.3]"
              }`}
              onClick={() => {
                setIsOpen2(!isOpen2);
              }}
              src={autocad}
            />
          </div>
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen2
                ? "w-75 h-40 lg:w-170 lg:h-45 opacity-100"
                : "w-0 h-45 opacity-0"
            } bg-white border-2 border-black rounded`}
          ></div>
        </div>
        <div className="flex-col place-items-center lg:flex lg:flex-row mx-auto lg:w-260 lg:justify-around">
          <div>
            <img
              className={`lg:h-50 lg:w-50 h-25 w-25 transitiona-all duration-700 ease-in-out ${
                isOpen3 ? "scale-[0.90]" : "scale-[1.3]"
              }`}
              onClick={() => {
                setIsOpen3(!isOpen3);
              }}
              src={sketchup}
            />
          </div>
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen3
                ? "w-75 h-40 lg:w-170 lg:h-45 opacity-100"
                : "w-0 h-45 opacity-0"
            } bg-white border-2 border-black rounded`}
          ></div>
        </div>
      </div>
    </section>
  );
}
