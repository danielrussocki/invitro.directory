/* lib */
import { useNavigate } from "react-router";
/* components */
import AppForm from "@/components/_core/form/AppForm";
import AppInput from "@/components/_core/form/AppInput";
import AppImage from "@/components/_core/media/AppImage";
import AppButton from "@/components/_core/button/AppButton";
import AppDivider from "@/components/_core/panel/AppDivider";
import AppParagraph from "@/components/_core/text/AppParagraph";
import AppHeadingOne from "@/components/_core/heading/AppHeadingOne";
/* icons */
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { FormEvent } from "react";

export default function AppAuthLoginPage() {
  const navigate = useNavigate();

  /* handlers */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="bg-white">
      <main className="w-full flex items-center p-5">
        <div className="w-full h-full grid grid-cols-2 gap-5">
          <AppImage
            className="w-full h-full min-h-screen rounded-xl border-2 border-black"
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
                  value="user@invitro.com"
                  placeholder="john.doe@example.com"
                />
                <AppInput
                  label="Password"
                  name="password"
                  value="12345678"
                  placeholder="********"
                  type="password"
                />
              </AppForm>
              <AppDivider className="mt-6 mb-5" label="or login with" />
              <div className="flex w-full justify-center items-center gap-2.5">
                <AppButton aria-label="GitHub">
                  <GitHubLogoIcon width={18} height={18} />
                </AppButton>
                <AppButton aria-label="Twitter">
                  <TwitterLogoIcon width={18} height={18} />
                </AppButton>
                <AppButton aria-label="Discord">
                  <DiscordLogoIcon width={18} height={18} />
                </AppButton>
                <AppButton aria-label="Instagram">
                  <InstagramLogoIcon width={18} height={18} />
                </AppButton>
                <AppButton aria-label="LinkedIn">
                  <LinkedInLogoIcon width={18} height={18} />
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
