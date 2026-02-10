import { useAppDispatch } from "../../../app/hooks"
import { setBucket } from "./bucketSlice"
import { useGetSubQuery } from "./subSlice"
import greyPersonIcon from "../../../assets/grey-person-icon.png"
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { SerializedError } from "@reduxjs/toolkit"
import { useAppSelector } from "../../../app/hooks"
import RedditLogo from "../../../assets/reddit-seeklogo.svg"

const formatSubCount = (subcount: number) => {
  if (subcount >= 1_000_000) {
    return (subcount / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m"
  }
  if (subcount >= 1000) {
    return (subcount / 1000).toFixed(1).replace(/\.0$/, "") + "k"
  }
  return subcount.toString()
}

const checkImg = (img: string | undefined) => {
  if(!img) {
    return RedditLogo
  }

  return img

}

export const Bucket = ({ bucketName }: { bucketName: string }) => {
  const dispatch = useAppDispatch()

  const { data, isLoading, error } = useGetSubQuery(bucketName)

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
      className="flex sm:justify-between justify-center items-center hover:cursor-pointer hover:bg-white w-full"
      id={bucketName}
      onClick={() => dispatch(setBucket(bucketName))}
    >
      <div className="flex flex-col items-center">
        <img
          src={checkImg(data?.image)}
          width="40rem"
          height="40rem"
          alt={`${bucketName} icon`}
          className="rounded-full"
        />
        <div className="items-center justify-center hidden sm:inline-flex">
          <img src={greyPersonIcon} className="h-[0.8rem] w-[0.8rem]" /> 
          <p className="m-[0.5rem_0.3rem] text-[1.3rem]">{formatSubCount(data?.subCount ?? 0)} </p>
        </div>
      </div>
      <h2 className="text-[1.7rem] hidden sm:block">{`r/${bucketName}`}</h2>
    </div>
  )
}

// <h2 className="text-[2rem] text-[rgba(240,173,244,0.907)]">&gt;</h2>

