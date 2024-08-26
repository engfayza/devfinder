import {useState, useEffect} from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Descriptions from './components/Descriptions';
import Description from './components/Description';
import Results from './components/Results';
import Form from './components/Form';
import Top from './components/Top';
import Statistics from './components/Statistics';
import Stat from './components/Stat';
import Infos from './components/Infos';
import Info from './components/Info';

import IconLocation from './assets/icon-location.svg';
import IconWebsite from './assets/icon-website.svg';
import IconTwitter from './assets/icon-twitter.svg';
import IconCompany from './assets/icon-company.svg';

const fetchUserData = async (username, setUser, setError) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.status === 404) {
      throw new Error('No Results');
    }
    const data = await response.json();
    setUser(data);
  } catch (error) {
    setError(error.message);
  }
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return (
    savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
};

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState(getInitialTheme);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchUserData('octocat', setUser, setError);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetchUserData(query, setUser, setError);
    setQuery('');
  }

  const {
    name,
    login: username,
    avatar_url: avatar,
    bio: description = '',
    created_at: date,
    public_repos: repos,
    followers,
    following,
    location,
    blog,
    twitter_username: twitter,
    company,
  } = user ?? {};

  return (
    <>
      <Header theme={theme} setTheme={setTheme} setUser={setUser} />
      <Main>
        <Form query={query} setQuery={setQuery} handleSubmit={handleSubmit} error={error} />
        <Results>
          <Descriptions>
            <Top avatar={avatar} name={name} username={username} date={date} />
            <Description desc={description} />
          </Descriptions>

          <Statistics>
            <Stat head="Repos" body={repos} />
            <Stat head="Followers" body={followers} />
            <Stat head="Following" body={following} />
          </Statistics>

          <Infos>
            <Info logo={IconLocation} info={location} />
            <Info logo={IconWebsite} info={blog} />
            <Info logo={IconTwitter} info={twitter} />
            <Info logo={IconCompany} info={company} />
          </Infos>
        </Results>
      </Main>
    </>
  );
}

export default App;
