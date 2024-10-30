import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="grid w-screen h-screen content-center font-nunito text-[#513838]">
      <h1 className="font-bold text-[#985151]">Oops!</h1>
      <p className="font-regular mt-10 text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="mt-10 text-black">
        {error.statusText || error.message}
      </p>
    </div>
  );
}