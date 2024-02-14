export default function Input() {
  return (
    <div className="relative">
      <input
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text bg-white bg-opacity-30"
        type="text"
      />
      <label className="absolute text-md text-zinc-400 duration-500 transform
      -translate-y-3
      scale-75
      top-4
      z-10

      ">
        Email
      </label>
    </div>
  );
}
