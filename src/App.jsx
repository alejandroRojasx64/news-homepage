import Navbar from "./components/Navbar";
import styles from "./styles/app.module.css";
import RankingNews from "./components/RankingNews";
import MoreNews from "./components/MoreNews";

function App() {
  const rankOfNews = [
    {
      img: "/images/image-retro-pcs.jpg",
      rankPosition: "01",
      title: "Reviving Retro PCs",
      resumeOfNew: "What happens when old PCs are given modern upgrades?",
    },
    {
      img: "/images/image-top-laptops.jpg",
      rankPosition: "02",
      title: "Top 10 Laptops of 2022",
      resumeOfNew: "Our best picks for various needs and budgets.",
    },
    {
      img: "/images/image-gaming-growth.jpg",
      rankPosition: "03",
      title: "The Growth of Gaming",
      resumeOfNew: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <main>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.mainNew}>
          <img
            src="/images/image-web-3-desktop.jpg"
            className={styles.desktopMainImage}
          />
          <img
            src="/images/image-web-3-mobile.jpg"
            className={styles.movileMainImage}
          />
          <div className={styles.contentMainNew}>
            <h1 className={styles.titleMainNew}>
              The Bright Future of Web 3.0?
            </h1>
            <div className={styles.containerDescriptionMainNew}>
              <p className={styles.descriptonMainNew}>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </section>
        <MoreNews />
        <RankingNews news={rankOfNews} />
      </div>
    </main>
  );
}

export default App;
