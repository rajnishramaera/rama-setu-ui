import SelectFromChain from "./components/selectFromChain"
import SelectToChain from "./components/selectToChain"
import SelectToken from "./components/selectToken"

const SlideOne = () => (
  <>
    <SelectToken />
    <SelectFromChain />
    <SelectToChain />
  </>
)

const BridgeCard = () => {
  return (
    <div className="flex items-center h-full">
      <div className="space-y-6 mx-auto border-2 dark:border-gray-600 border-gray-300 lg:w-[30%] bg-gradient-to-tr from-violet-500 to-orange-300 dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] dark:from-sky-400 dark:to-indigo-900 p-6 rounded-medium">
        <SlideOne />
      </div>
    </div>
  )
}
export default BridgeCard
