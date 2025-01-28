import { useMyContext } from "../context/ContextApi";

  export default function Stats() {
  const { state } = useMyContext();
  const {carbonData} =state
  
    return (
      <div className="bg-white py-10 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Location</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {carbonData?.dnoregion}
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Intensity Forcast</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {carbonData?.data?.[0]?.intensity?.forecast}
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Intensity Index</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {carbonData?.data?.[0]?.intensity?.index}
                </dd>
              </div>
          </dl>
        </div>
      </div>
    )
  }
  