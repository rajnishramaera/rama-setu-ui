import SelectToken from "./components/selectToken"

const Bridge = () => {
  return (
    <div className="flex items-center h-full">
      <div className="mx-auto lg:w-[30%] bg-gradient-to-tr from-violet-500 to-orange-300 dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] dark:from-sky-400 dark:to-indigo-900 p-4 rounded-medium">
        <SelectToken />
        <SelectToken />
        <SelectToken />
        <SelectToken />
        <SelectToken />
        <SelectToken />
      </div>
    </div>
  )
}
export default Bridge
