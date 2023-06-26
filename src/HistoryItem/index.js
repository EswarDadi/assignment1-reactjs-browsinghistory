import './index.css'

const HistoryItem = props => {
  const {itemsList, onDeleteItems} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemsList
  const onDeleteItem = () => {
    onDeleteItems(id)
  }
  const isEmpty = () => {
    if (itemsList.length === 0) {
      ;<p>There is no History to show </p>
    }
  }
  return (
    <li className="list-styling">
      <div className="history-item-container">
        <p className="time-item">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p>{title}</p>
        <p href={domainUrl} className="domain-url">
          {domainUrl}
        </p>
        <button
          type="button"
          className="button"
          onClick={onDeleteItem}
          id="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      {isEmpty()}
    </li>
  )
}
export default HistoryItem
