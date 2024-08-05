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
import SignUpButton from "./SignUpButton";
import { Link } from "react-router-dom";

export default function LoginButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Button
        onClick={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="text-black font-montserrat rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 
        hover:text-white transtion duration-700"
      >
        Login
      </Button>
      {/* POPUP */}
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {/* POPUP CARD */}
        <Card
          className="mx-auto w-full max-w-[24rem] bg-opacity-80 bg-primary-100"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardBody
            className="flex flex-col gap-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {/* POPUP LOGIN TEXT */}
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
              Your Username
            </Typography>
            {/* EMAIL INPUT BOX */}
            <Input
              label="Username"
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
          </CardBody>
          {/* POPUP FOOTER */}
          <CardFooter
            className="pt-0"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {/* FOOTER LOGIN BUTTON */}
            <Button
              variant="gradient"
              onClick={handleOpen}
              fullWidth
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="font-montserrat"
            >
              Login
            </Button>
            {/* FOOTER PARAGRAPH */}
            <Typography
              variant="small"
              className="mt-4 flex justify-center font-montserrat"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Don&apos;t have an account?
              {/* FOOTER SIGN UP BUTTON */}
              <Link
                to="/sign-up"
                className="text-red-900 font-montserrat hover:text-red-600"
              >
                Sign Up
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
