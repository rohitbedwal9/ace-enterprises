export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="animate-spin rounded-full h-20 w-20 sm:h-28 sm:w-28 border-t-2 border-b-2 border-gray-900"></div>
      <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-gray-900">Loading...</div>
    </div>
  );
}