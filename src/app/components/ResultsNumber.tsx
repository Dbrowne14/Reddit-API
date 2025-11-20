export const ResultsNumber = () => {
  const options = [5, 10, 15, 20]

  return (
    <div className="select-banner">
      <p> How many results do you want?</p>
      <select className="select-options">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  )
}
