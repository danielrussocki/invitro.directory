/* components */
import AppForm from "@/components/_core/form/AppForm";
import AppInput from "@/components/_core/form/AppInput";
import AppImage from "@/components/_core/media/AppImage";

export default function AppAuthLoginPage() {
  return (
    <div className="bg-white">
      <main className="w-full flex items-center p-5">
        <div className="w-full h-full grid grid-cols-2 gap-5">
          <AppImage
            className="w-full h-full min-h-screen object-cover rounded-xl border-2 border-black"
            src="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
            alt=""
          />
          <div className="w-full flex items-center px-10">
            <div className="w-full">
              <AppForm>
                <AppInput
                  label="Email"
                  name="email"
                  placeholder="john.doe@example.com"
                />
                <AppInput
                  label="Password"
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
