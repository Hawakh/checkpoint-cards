import ReactStars from "react-stars";


const SearchMovie = ({ setNameSearch, setRatingSearch,search}) => {
  const handleSearch = () => {
    search();
  };

  return (
    <div className="search-container">
     
      <input type="text" onChange={(e) => setNameSearch(e.target.value)} />

      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        edit={true}
        onChange={(newRating) => setRatingSearch(newRating)}
      />
      <button onClick={handleSearch} style={{marginTop:"5px",marginLeft:"80px"}}>Search</button>
    </div>
  );
};
export default SearchMovie;