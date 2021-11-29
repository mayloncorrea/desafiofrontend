
function Search(props) {

    const newTerm = (e) => {
      if (e.key === 'Enter') {
        props.handleTerm(e.target.value)
      }
    }

    return (
      <>
        <div className="search">
            <input id="input-search" className="input-search" type="text" placeholder="Encontre um restaurante" 
            onKeyDown={event => newTerm(event)}></input>
        </div>      
      </>
    );
  }
  
  export default Search;