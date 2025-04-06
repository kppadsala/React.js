import  { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, } from "../Redux/sessionSlice"; // Import actions
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface LoginFormInputs {
  username: string;
  password: string;
}

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const sessionUser = useSelector((state: any) => state.session.username);
  const navigate = useNavigate(); // ✅ Navigate function initialized

  // On Submit, Store Session in Redux and localStorage
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    dispatch(setUsername(data.username));
    localStorage.setItem("user", data.username); // Store in localStorage
    navigate("/"); // ✅ Navigate to home page after login
    reset(); // Reset form fields
    toast.success("Login Successful!")
  };

 

  // Check if User Already Logged In
  useEffect(() => {
    if (!sessionUser) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        dispatch(setUsername(storedUser));
      }
    }
  }, [sessionUser, dispatch]);

  return (
    <div className="flex justify-center items-center bg-gray-100 w-full ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {sessionUser ? `Welcome, ${sessionUser}` : "Login"}
        </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700">User Name</label>
              <Controller
                name="username"
                control={control}
                rules={{ required: "User Name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <input
                    type="password"
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
      </div>
    </div>
  );
}


