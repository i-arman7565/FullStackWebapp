import { default as ModalProvider } from "react-modal";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { Button, Img, Input, Text } from "../../components";
import { CheckBox } from "../../components/CheckBox";

// export default function SignUp({ isOpen, ...props }) {
//   const [sliderState, setSliderState] = React.useState(0);
//   const sliderRef = React.useRef(null);
//   const navigate=useNavigate();
//   const navigation=()=>{
//       navigate("/login");
//   }

//   return (
//     <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={true} className="min-w-[1052px]">
//       <div className="flex flex-row justify-center w-full">
//         <div className="flex flex-row justify-center w-full px-14  md:p-5 bg-white-A700 rounded-[15px]">
//           <div className="flex flex-row justify-center w-[97%]">
//             <div className="flex flex-row justify-center w-full p-2">
//               <div className="flex flex-row justify-center w-full">
//                 <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">


//                   <div className="flex flex-col items-center justify-start w-[40%] md:w-full">
//                     <Button
//                       leftIcon={<Img src="images/img_googleplus_1_1.svg" alt="google-plus (1) 1" />}
//                       className="w-full gap-[23px] sm:px-5 !text-white-700_01 border-gray-300 border border-solid rounded-[10px]"
//                     >
//                       Sign in with google
//                     </Button>
//                     <div className="flex flex-row justify-center items-center w-full mt-5 gap-[11px] p-[3px]">
//                       <div className="h-px w-[6%] ml-[54px] md:ml-5 bg-gray-700_01" />
//                       <Link to="/login"> {/* Replace anchor tag with Link */}
//                         <Text as="p" className="!text-gray-700_01 text-center !font-medium">
//                           Or sign in with your email
//                         </Text>
//                       </Link>
//                       <div className="h-px w-[6%] mr-[54px] md:mr-5 bg-gray-700_01" />
//                     </div>
//                     <div className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]">
//                       <Text as="p" className="!text-gray-900 !font-medium">
//                         Full name
//                       </Text>
//                       <Input
//                         color="white_A700"
//                         size="xs"
//                         type="text"
//                         name="fullName"
//                         placeholder="Enter name"
//                         prefix={<Img src="images/img_account_24_outline.svg" alt="account / 24 / Outline" />}
//                         className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
//                       />
//                     </div>
//                     <SignUpInputfield className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]" />
//                     <div className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]">
//                       <Text as="p" className="!text-gray-900 !font-medium">
//                         Password
//                       </Text>
//                       <Input
//                         color="white_A700"
//                         size="xs"
//                         type="password"
//                         name="password"
//                         placeholder="*************"
//                         prefix={
//                           <Img
//                             src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
//                             alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
//                           />
//                         }
//                         suffix={
//                           <div className="flex justify-center items-center w-[15px] h-[11px]">
//                             <Img src="images/img_vector.svg" alt="Vector" />
//                           </div>
//                         }
//                         className="w-full sm:w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
//                       />
//                     </div>
//                     <Button className="w-full mt-[30px] sm:px-5 font-medium rounded-[10px]" onClick={navigation}>Sign up</Button>
//                     <CheckBox
//                       shape="square"
//                       name="checked24outlin"
//                       label="I agreed to the Terms & Conditions"
//                       id="checked24outlin"
//                       className="mt-6 gap-2.5 text-gray-700_01 text-left font-medium"
//                     />
//                     <div className="flex flex-row justify-center w-full mt-[27px] p-[3px]">
//                       <Link to="/login" className="ml-[65px] my-px md:ml-5"> {/* Replace anchor tag with Link */}
//                         <Text as="p" className="!text-gray-700_01">
//                           Already have an account?
//                         </Text>
//                       </Link>
//                       <Link to="/login" className="ml-1 mr-[65px] md:mr-5"> {/* Replace anchor tag with Link */}
//                         <Text as="p" className="!text-red-300_01 !font-medium">
//                           Sign in 
//                         </Text>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="h-[641px] w-px md:w-full md:h-px bg-gradient" />
//                   <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-[2px]">
//                     <Img
//                       src="images/login4.webp"
//                       alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
//                       className="w-50vw rounded-[15px]"
//                       style={{ height: "70vh", maxWidth: "calc(100% - 40px)" }}
//                     />
//                     <div className="flex justify-center w-[36px] h-[10px] sm:w-full" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ModalProvider>
//   );
// }


// import axios from "axios";
// import { useState } from "react";
// import { default as ModalProvider } from "react-modal";
// import { Link, useNavigate } from "react-router-dom";
// import { Button, Img, Input, Text } from "../../components";
// import { CheckBox } from "../../components/CheckBox";

import { useState } from "react";
// import { default as ModalProvider } from "react-modal";
// import { Link, useNavigate } from "react-router-dom";
// import { Button, Img, Input, Text } from "../../components";
// import { CheckBox } from "../../components/CheckBox";
import axios from "axios";

export default function SignUp({ isOpen, ...props }) {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    // const { name, value } = e.target; // Destructure the name and value directly from e.target
    setUser((prevUser) => ({
      ...prevUser,
      fullName: e, // Use the name as the key to update the corresponding state property
    }));
  };
  const handleChange1 = (e) => {
    console.log(e);
    setUser((prevUser) => ({
      ...prevUser,
      email: e,
    }));
  };
  const handleChange2 = (e) => {
    console.log(e);
    setUser((prevUser) => ({
      ...prevUser,
      password: e,
    }));
  };
  const handleChange3 = (e) => {
    console.log(e);
    setUser((prevUser) => ({
      ...prevUser,
      phoneNo: e,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/addUsers", user);
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={true} className="min-w-[1052px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full px-14  md:p-5 bg-white-A700 rounded-[15px]">
          <div className="flex flex-row justify-center w-[97%]">
            <div className="flex flex-row justify-center w-full p-2">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                  <div className="flex flex-col items-center justify-start w-[40%] md:w-full">
                    <Button
                      leftIcon={<Img src="images/img_googleplus_1_1.svg" alt="google-plus (1) 1" />}
                      className="w-full gap-[23px] sm:px-5 !text-white-700_01 border-gray-300 border border-solid rounded-[10px]"
                    >
                      Sign in with google
                    </Button>
                    <div className="flex flex-row justify-center items-center w-full mt-5 gap-[11px] p-[3px]">
                      <div className="h-px w-[6%] ml-[54px] md:ml-5 bg-gray-700_01" />
                      <Link to="/login">
                        <Text as="p" className="!text-gray-700_01 text-center !font-medium">
                          Or sign in with your email
                        </Text>
                      </Link>
                      <div className="h-px w-[6%] mr-[54px] md:mr-5 bg-gray-700_01" />
                    </div>
                    <form onSubmit={handleSubmit} className="w-full">
                      <div className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Full name
                        </Text>
                        <Input
                          color="white_A700"
                          size="xs"
                          type="text"
                          name="fullName"
                          placeholder="Enter name"
                          value={user.fullName}
                          onChange={handleChange}
                          className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Email
                        </Text>
                        <Input
                          color="white_A700"
                          size="xs"
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          value={user.email}
                          onChange={handleChange1}
                          className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Phone no
                        </Text>
                        <Input
                          color="white_A700"
                          size="xs"
                          type="number"
                          name="phoneNo"
                          placeholder="Enter phone number"
                          value={user.phoneNo}
                          onChange={handleChange3}
                          className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          Password
                        </Text>
                        <Input
                          color="white_A700"
                          size="xs"
                          type="password"
                          name="password"
                          placeholder="*************"
                          value={user.password}
                          onChange={handleChange2}
                          className="w-full sm:w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                        />
                      </div>
                      <Button className="w-full mt-[30px] sm:px-5 font-medium rounded-[10px]" type="submit">
                        Sign up
                      </Button>
                    </form>
                    <CheckBox
                      shape="square"
                      name="checked24outlin"
                      label="I agreed to the Terms & Conditions"
                      id="checked24outlin"
                      className="mt-6 gap-2.5 text-gray-700_01 text-left font-medium"
                    />
                    <div className="flex flex-row justify-center w-full mt-[27px] p-[3px]">
                      <Link to="/login" className="ml-[65px] my-px md:ml-5">
                        <Text as="p" className="!text-gray-700_01">
                          Already have an account?
                        </Text>
                      </Link>
                      <Link to="/login" className="ml-1 mr-[65px] md:mr-5">
                        <Text as="p" className="!text-red-300_01 !font-medium">
                          Sign in
                        </Text>
                      </Link>
                    </div>
                  </div>
                  <div className="h-[641px] w-px md:w-full md:h-px bg-gradient" />
                  <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-[2px]">
                    <Img
                      src="images/login4.webp"
                      alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                      className="w-50vw rounded-[15px]"
                      style={{ height: "70vh", maxWidth: "calc(100% - 40px)" }}
                    />
                    <div className="flex justify-center w-[36px] h-[10px] sm:w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
