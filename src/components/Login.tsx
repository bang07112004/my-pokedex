import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch } from "../app/hooks";
import { setUserStatus } from "../app/slices/AppSlice";
import { firebaseAuth, firebaseDB, usersRef } from "../utils/FirebaseConfig";
type Props = {};

function Login({}: Props) {
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      const firestoreQuery = query(usersRef, where("uid", "==", uid));
      const fetchedUser = await getDocs(firestoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(usersRef, {
          uid,
          email,
        });
      }
      dispatch(setUserStatus({ email }));
    }
  };
  return (
    <div className="login flex justify-center items-center w-[100%] h-[100%]">
      <button
        className="login-btn bg-transparent flex items-center uppercase text-[1.2rem] px-6 py-3 border-[5px] border-white justify-center gap-[1rem] hover:border-t-red-500 group  hover:bg-white/95 hover:border-b-green-500 hover:border-l-yellow-500 hover:border-r-blue-500 hover:scale-105 rounded-full transition-all duration-300 ease-in-out"
        onClick={handleLogin}
      >
        <FcGoogle className="text-[3rem] group-hover:scale-105 transition-all duration-300" />
        <p className="text-lg font-bold group-hover:scale-105 group-hover:text-black transition-all duration-300">
          Login with Google
        </p>
      </button>
    </div>
  );
}

export default Login;
