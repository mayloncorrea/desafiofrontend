import iconLoading from '../assets/icons/red/loading.png'
function Loading(props) {

    return (
      <>
        <div className="container-loading">
            <img className="loading" src={iconLoading}></img>
        </div>
      </>
    );
  }
  
  export default Loading;