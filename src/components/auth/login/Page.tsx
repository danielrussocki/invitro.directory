/* components */
import AppForm from "@/components/_core/form/AppForm";
import AppInput from "@/components/_core/form/AppInput";
import AppImage from "@/components/_core/media/AppImage";

export default function AppAuthLoginPage() {
  return (
    <div className="bg-sky-950">
      <main className="container min-h-screen flex items-center mx-auto p-5">
        <div className="w-full h-full grid grid-cols-2 gap-5">
          <AppImage
            className="w-full h-full object-cover rounded-xl"
            src="https://cdn.midjourney.com/b7896738-826d-4b15-9131-f19946363717/0_3.png"
            alt=""
          />
          <div className="w-full flex items-center px-10">
            <div className="w-full">
              <AppForm>
                <AppInput name="email" placeholder="john.doe@example.com" />
                <AppInput
                  name="password"
                  placeholder="********"
                  type="password"
                />
              </AppForm>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
