import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export function PolicyButton() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        variant="text"
        className="font-montserrat"
        onClick={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        I read and accept the policy
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <DialogHeader
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Policy & Terms
        </DialogHeader>
        <DialogBody
          className="h-[33.5rem] overflow-scroll"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            className="font-normal"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Welcome to EvoGYM! These Policy & Terms ("Terms") govern your use of
            our website, services, and facilities. By accessing or using any
            part of EvoGYM, you agree to be bound by these Terms. If you do not
            agree with any part of these Terms, please do not use our services.
            <br />
            <br />
            Membership is available to individuals who are at least 18 years
            old. Minors aged 16-17 may join with parental consent and must be
            accompanied by a parent or legal guardian at all times. To become a
            member, you must complete the registration process, providing
            accurate and up-to-date information. You are responsible for
            maintaining the confidentiality of your membership account and
            password. Membership fees are due monthly or annually, as selected
            at the time of registration. All fees are non-refundable, except as
            specified in the cancellation policy below.
            <br /> <br />
            By using EvoGYM facilities, you declare that you are in good health
            and capable of participating in physical activities. If you have any
            medical conditions, please consult with a healthcare provider before
            using our services. EvoGYM is not liable for any injuries sustained
            while using our facilities. Members are encouraged to use equipment
            and participate in activities safely and responsibly.
            <br /> <br />
            EvoGYM is not liable for any injuries sustained while using our
            facilities. Members are encouraged to use equipment and participate
            in activities safely and responsibly. Your data will be used to
            manage your membership, process payments, and communicate with you
            about EvoGYM services and promotions. We will not share your
            information with third parties without your consent, except as
            required by law.
            <br /> <br />
            EvoGYM reserves the right to terminate memberships for violation of
            these Terms or for any behavior deemed detrimental to the safety and
            enjoyment of other members. Members may cancel their membership with
            30 days' notice. Cancellation requests must be submitted in writing.
            EvoGYM reserves the right to modify these Terms at any time. Changes
            will be effective immediately upon posting on our website. Members
            are encouraged to review these Terms periodically.
          </Typography>
        </DialogBody>
        <DialogFooter
          className="space-x-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Button
            variant="gradient"
            color="amber"
            onClick={handleOpen}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span className="font-montserrat">got it</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
