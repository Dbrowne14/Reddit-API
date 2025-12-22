import { useAppDispatch } from "../../../app/hooks"
import { setBucket } from "./bucketSlice"
import { useGetSubQuery } from "./subSlice"
import "./bucket.css"
import greyPersonIcon from '../../../assets/grey-person-icon.png'

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

  const { data, isLoading, error } = useGetSubQuery(bucketName)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error || !data) {
    return <p> Error</p>
  }

  return (
    <div
      className="bucket"
      id={bucketName}
      onClick={() => dispatch(setBucket(bucketName))}
    >
      <div className="image-and-information">
        <img
          src={data?.image}
          width="40rem"
          height="40rem"
          alt={`${bucketName} icon`}
          className="icon-image"
        />
        <div className="subBucket">
          <img src={greyPersonIcon} className="personIcon"/>
          <p className="subCount">{formatSubCount(data?.subCount ?? 0)} </p>
        </div>
      </div>
      <h2 className="bucketTitle">{`r/${bucketName}`}</h2>
      <h2 className="arrow">&gt;</h2>
    </div>
  )
}
