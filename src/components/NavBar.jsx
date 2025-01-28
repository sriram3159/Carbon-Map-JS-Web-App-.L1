import mapImg from "../assets/images/map.webp";
import FlyoutMenu from "../ReusableComponents/FlyoutMenu";

export default function Navbar() {
  return (
    <div as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <img alt="Your Company" src={mapImg} className="h-8 w-auto" />
              <div className=" pl-4 text-base font-semibold text-gray-900">Carbon Map JS Web App .L1</div>
              <FlyoutMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
