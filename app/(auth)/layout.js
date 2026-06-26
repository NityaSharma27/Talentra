// import React from "react";

// const AuthLayout = ({children}) => {
//     return <div className="flex justify-center pt-40">{children}</div>;
// };

// export default AuthLayout;

import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground ">
      {children}
    </div>
  );
};

export default AuthLayout;


