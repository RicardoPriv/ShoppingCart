import "/src/styles/pages/home.css"


function HomePage() {
  return (
    <section id="home-page-container">
      <div id="categories-container">
        <ul>
          <li>Board Games</li>
          <li>TCG</li>
          <li>Controllers</li>
          <li>Collectibles</li>
        </ul>
      </div>
      <h1 id="title">Your collection starts here</h1>
      <div id="browse-container">
        <button id="browse-shop-button">Browse the Shop -&gt;</button>
        <span id="browse-description">6 items - free shipping</span>
      </div>

    </section>
  )
}

export default HomePage;
