import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

// https://api.github.com/orgs/rocketseat/repos

interface Repository {
  id: string,
  name: string,
  description: string,
  html_url: string
}



export function RepositoryList() {
   
  const [repositories, setRepositories] = useState<Repository[]>([]);
  // deve passar sempre passar os 2 parametros
  // e não pode alterar os valores que é colocado
  // na dependencia, pois se não entra em loop eterno
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <ul>
        {repositories && repositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  );
}