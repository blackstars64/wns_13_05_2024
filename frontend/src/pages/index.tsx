import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { GetCountriesData } from "../graphql/type";
import { GET_COUNTRIES, ADD_COUNTRY } from "../graphql/queries";

function Home() {
  const [isPopupFormOpen, setIsPopupFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");

  const { data, loading, error } = useQuery<GetCountriesData>(GET_COUNTRIES);

  const handlePopupForm = () => {
    setIsPopupFormOpen(!isPopupFormOpen);
  };

  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation que tous les champs sont remplis
    if (name && code && emoji) {
      try {
        setName("");
        setCode("");
        setEmoji("");
        handlePopupForm();
      } catch (err) {
        console.error("Error adding country:", err);
        if (err instanceof ApolloError) {
          console.error("GraphQL Error:", err.graphQLErrors);
          console.error("Network Error:", err.networkError);
        }
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="Home">
      {isPopupFormOpen && (
        <div className="Home-form">
          <form onSubmit={handleSubmit} className="Home-form-container">
            <div className="Home-form-group-container">
              <div className="Home-form-group">
                <legend className="Home-form-legend">Name</legend>
                <input
                  className="Home-form-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="Home-form-group">
                <legend className="Home-form-legend">emoji</legend>
                <input
                  className="Home-form-input"
                  type="text"
                  value={emoji}
                  onChange={(e) => setEmoji(e.target.value)}
                  required
                />
              </div>
              <div className="Home-form-group">
                <legend className="Home-form-legend">code</legend>
                <input
                  className="Home-form-input"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>
            </div>
            <button className="Home-form-btn" type="submit">
              Add
            </button>
          </form>
        </div>
      )}
      {!isPopupFormOpen && (
        <main className="Home-main">
          <div className="Home-country">
            {data?.countries.map((country) => (
              <div className="Home-country-card" key={country.id}>
                <h3 className="Home-country-name">{country.name}</h3>
                <p className="Home-country-emoji">{country.emoji}</p>
              </div>
            ))}
          </div>
          <button
            className="Home-buttom-popup"
            type="button"
            onClick={handlePopupForm}
          >
            Add new
          </button>
        </main>
      )}
    </section>
  );
}

export default Home;
