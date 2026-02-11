import { useAppDispatch } from "../../../app/hooks"
import { setBucket } from "./bucketSlice"
import { useGetSubQuery } from "./subSlice"
import greyPersonIcon from "../../../assets/grey-person-icon.png"
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { SerializedError } from "@reduxjs/toolkit"
import RedditLogo from "../../../assets/reddit-seeklogo.svg"
import { formatSubCount } from "../../../utils/utilityFns"
import { useAppSelector } from "../../../app/hooks"

const checkImg = (img: string | undefined) => {
  if (!img) {
    return RedditLogo
  }
  return img
}

export const Bucket = ({ bucketName }: { bucketName: string }) => {
  const dispatch = useAppDispatch()
  const selectedBucket = useAppSelector(state => state.bucket.selectedBucket)
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
      className={` flex flex-col sm:flex-row sm:justify-between justify-center w-full p-2 rounded-tr-2xl rounded-tl-2xl items-center transition-colors duration-300 hover:cursor-pointer hover:bg-custom  ${
        selectedBucket === bucketName
          ? "bg-(--bg-custom) border-[1.5px] border-b-4 border-b-(--bg-custom)"
          : "bg-(--bg-nav) border-b-[1.5px] border-b-white"
      }`}
      id={bucketName}
      onClick={() => {
        dispatch(setBucket(bucketName))
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      }}
    >
      <div className="flex flex-col items-center">
        <img
          src={checkImg(data?.image)}
          width="40rem"
          height="40rem"
          alt={`${bucketName} icon`}
          className="rounded-full"
        />
        <div
          className={`items-center justify-center inline-flex text-reSizing sm:block transition-opacity duration-300 ${
            selectedBucket === bucketName ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={greyPersonIcon} className="h-[0.8rem] w-[0.8rem]" />
          <p className="m-[0.5rem_0.3rem] text-[clamp(0.9rem, 2vw, 1.4rem)]">
            {formatSubCount(data?.subCount ?? 0)}{" "}
          </p>
        </div>
      </div>
      <h2
        className={`text-reSizing sm:block transition-opacity duration-300 ${
          selectedBucket === bucketName ? "opacity-100" : "opacity-0"
        }`}
      >{`r/${bucketName}`}</h2>
    </div>
  )
}

// <h2 className="text-[2rem] text-[rgba(240,173,244,0.907)]">&gt;</h2>
