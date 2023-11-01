import { Card, Skeleton } from "@nextui-org/react"

export default function BridgeCardSkeleton() {
  return (
    <Card
      className=" space-y-5  mx-auto border-2 dark:border-gray-600 border-gray-300 lg:w-[30%]  p-6 rounded-medium"
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="h-16 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <div className="h-16 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <div className="h-16 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <div className="h-16 rounded-lg bg-default-200"></div>
      </Skeleton>
    </Card>
  )
}
