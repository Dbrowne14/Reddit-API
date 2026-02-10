import { useAppDispatch } from "../../../app/hooks"
import { setBucket } from "./bucketSlice"
import { useGetSubQuery } from "./subSlice"
import "./bucket.css"
import greyPersonIcon from "../../../assets/grey-person-icon.png"
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { SerializedError } from "@reduxjs/toolkit"

const formatSubCount = (subcount: number) => {
  if (subcount >= 1_000_000) {
    return (subcount / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m"
  }
  if (subcount >= 1000) {
    return (subcount / 1000).toFixed(1).replace(/\.0$/, "") + "k"
  }
  return subcount.toString()
}

export const Bucket = ({ bucketName }: { bucketName: string }) => {
  const dispatch = useAppDispatch()
  console.log(bucketName)

  const { data, isLoading, error } = useGetSubQuery(bucketName)

  console.log(data)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    console.log("RTK Query Error:", error)
    let message = "Something went wrong"

    if ("status" in error) {
      const fetchError = error as FetchBaseQueryError

      if (typeof fetchError.data === "string") {
        message = fetchError.data
      } else if (
        typeof fetchError.data === "object" &&
        fetchError.data !== null &&
        "message" in fetchError.data
      ) {
        message = (fetchError.data as { message: string }).message
      }
    } else {
      const serialized = error as SerializedError
      message = serialized.message ?? message
    }

    return <p>{message}</p>
  }

  return (
    <div
      className="flex justify-between items-center hover:(cursor-pointer bg-white)"
      id={bucketName}
      onClick={() => dispatch(setBucket(bucketName))}
    >
      <div className="flex flex-col items-center">
        <img
          src={data?.image}
          width="40rem"
          height="40rem"
          alt={`${bucketName} icon`}
          className="rounded-full"
        />
        <div className="inline-flex items-center justify-center">
          <img src={greyPersonIcon} className="h-[0.8rem] w-[0.8rem]" /> 
          <p className="m-[0.5rem_0.3rem] text-[1.3rem]">{formatSubCount(data?.subCount ?? 0)} </p>
        </div>
      </div>
      <h2 className="text-[1.7rem]">{`r/${bucketName}`}</h2>
      <h2 className="text-[2rem] text-[rgba(240,173,244,0.907)]">&gt;</h2>
    </div>
  )
}

