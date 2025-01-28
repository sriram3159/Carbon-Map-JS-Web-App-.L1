import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useMyContext } from "../context/ContextApi";
import { locationData } from "../utils/constants";

export default function FlyoutMenu() {
  const { dispatch, state } = useMyContext();
  const location = state.location;

  const handleChange = (data) => {
    dispatch({ type: "SET_LOCATION", payload: data });
  };
  return (
    <Popover className="relative">
      <PopoverButton className="pl-7 inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <span>{location?.cityName}</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
          {locationData.map((loc) => (
            <div key={loc.id} onClick={() => handleChange(loc)} className="block p-2 hover:text-indigo-600 cursor-pointer">
              {loc?.cityName}
            </div>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}
