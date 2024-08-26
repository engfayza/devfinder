import SearchImage from '../assets/icon-search.svg';

export default function Form({query, setQuery, handleSubmit, error}) {
  return (
    <form onSubmit={handleSubmit}>
      <img src={SearchImage} alt="Search Icon" />
      <input
        type="text"
        placeholder="Search Github username..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Search</button>
    </form>
  );
}
