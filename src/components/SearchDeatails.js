import BackIcon from '../assets/icons/black/chevron_left.png';

function SearchDetails(props) {
  return (
    <>
      <div className="search-details">
          <img src={BackIcon}></img>
          <div className="details">
              <p className="light-down">Termo Pesquisado</p>
              <span className="dark-down">{props.term}</span>
          </div>
      </div>
    </>
  );
}

export default SearchDetails;