import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Checkbox,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";

import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      <Typography
        variant="h4"
        className="font-montserrat text-primary-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Login
      </Typography>
      {/* POPUP PARAGRAPH */}
      <Typography
        className="mb-3 font-montserrat"
        variant="paragraph"
        color="gray"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Enter your email and password to Login.
      </Typography>
      {/* EMAIL HEADER */}
      <Typography
        className="-mb-2 font-montserrat"
        variant="h6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Your Email
      </Typography>
      {/* EMAIL INPUT BOX */}
      <Input
        label="Email"
        size="lg"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
        className="font-montserrat"
      />
      {/* PASSWORD HEADER */}
      <Typography
        className="-mb-2 font-montserrat"
        variant="h6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Your Password
      </Typography>
      {/* PASSWORD INPUT BOX */}
      <Input
        label="Password"
        size="lg"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
      <div className="-ml-2.5 -mt-3">
        {/* REMEMBER ME CHECKBOX */}
        <Checkbox
          label="Remember Me"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
      </div>
    </div>
  );
};

export default LoginPage;
