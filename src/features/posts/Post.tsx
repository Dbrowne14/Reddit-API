type PostProps = {
    data: number
} // set as this for now will eventually be returned redit data and moved to types

export const Post = ({ data }: PostProps) => {
  return (
    <>
      <p>Returned Data: {data}</p>
    </>
  )
}
