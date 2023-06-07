function UserRepositories({ repositories }) {
  return (
    <div className="user-repositories">
      <h2>Repositories</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserRepositories;
