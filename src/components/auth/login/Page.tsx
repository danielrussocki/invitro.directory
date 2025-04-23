/* lib */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
/* components */
import AppForm from "@/components/_core/form/AppForm";
import AppInput from "@/components/_core/form/AppInput";
import AppImage from "@/components/_core/media/AppImage";
import AppToast, {
  type AppToastRef,
} from "@/components/_core/messages/AppToast";
import AppButton from "@/components/_core/button/AppButton";
import AppDivider from "@/components/_core/panel/AppDivider";
import AppParagraph from "@/components/_core/text/AppParagraph";
import AppContainer from "@/components/_core/grid/AppContainer";
import AppHeadingOne from "@/components/_core/heading/AppHeading";
/* icons */
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
/* types */
import type { FormEvent } from "react";

type AuthLoginInputs = {
  email: string;
  password: string;
};

type AuthLoginInputErrors = {
  email: boolean;
  password: boolean;
};

export default function AppAuthLoginPage() {
  const [input, setInput] = useState<AuthLoginInputs>({
    email: "user@invitro.com",
    password: "12345678",
  });
  const [errors, setErrors] = useState<AuthLoginInputErrors>({
    email: false,
    password: false,
  });
  const toastRef = useRef<AppToastRef>(null);
  const navigate = useNavigate();

  /* handlers */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (Object.values(errors).some((v) => v === true)) return;
    navigate("/dashboard");
  }

  function externalLoginHandler() {
    if (toastRef.current != null) {
      toastRef.current.open();
    }
  }

  useEffect(() => {
    setErrors({
      email: input.email.trim() === "",
      password: input.password.trim() === "",
    });
  }, [input]);

  return (
    <>
      <AppContainer className="flex items-center py-5">
        <div className="w-full h-full grid lg:grid-cols-2 gap-12 lg:gap-5">
          <AppImage
            className="w-full h-60 sm:h-[40vw] lg:h-full lg:min-h-screen rounded-xl border border-gray-400"
            src="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            alt=""
          />
          <div className="w-full flex items-center px-10">
            <div className="w-full max-w-sm mx-auto">
              <div className="mb-5 flex flex-col gap-2.5">
                <AppHeadingOne>Welcome!</AppHeadingOne>
                <AppParagraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam laboriosam distinctio beatae a quas ducimus.
                </AppParagraph>
              </div>
              <AppForm onSubmit={handleSubmit}>
                <AppInput
                  label="Email"
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput((curr) => ({ ...curr, email: e.target.value }))
                  }
                  placeholder="john.doe@example.com"
                  match="valueMissing"
                  serverInvalid={errors.email}
                  forceMatch={errors.email}
                />
                <AppInput
                  label="Password"
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput((curr) => ({ ...curr, password: e.target.value }))
                  }
                  placeholder="********"
                  match="valueMissing"
                  type="password"
                  serverInvalid={errors.password}
                  forceMatch={errors.password}
                />
              </AppForm>
              <AppDivider className="mt-6 mb-5" label="or login with" />
              <div className="flex w-full justify-center items-center gap-2.5">
                <AppButton
                  aria-label="GitHub"
                  onClick={() => externalLoginHandler()}
                >
                  <GitHubLogoIcon width={18} height={18} />
                </AppButton>
                <AppButton
                  aria-label="Twitter"
                  onClick={() => externalLoginHandler()}
                >
                  <TwitterLogoIcon width={18} height={18} />
                </AppButton>
                <AppButton
                  aria-label="Discord"
                  onClick={() => externalLoginHandler()}
                >
                  <DiscordLogoIcon width={18} height={18} />
                </AppButton>
                <AppButton
                  aria-label="Instagram"
                  onClick={() => externalLoginHandler()}
                >
                  <InstagramLogoIcon width={18} height={18} />
                </AppButton>
                <AppButton
                  aria-label="LinkedIn"
                  onClick={() => externalLoginHandler()}
                >
                  <LinkedInLogoIcon width={18} height={18} />
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
      <AppToast
        ref={toastRef}
        title="Stay tuned!"
        duration={3000}
        className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[state=closed]:animate-hide data-[state=open]:animate-slide-in data-[swipe=end]:animate-swipe-out data-[swipe=cancel]:transition-transform"
      >
        This feature is currently under development
      </AppToast>
    </>
  );
}
