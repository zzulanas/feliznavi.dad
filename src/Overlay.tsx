import styles from "./Overlay.module.css";

const Overlay = () => {
  return (
    <div className={styles.overlay}>
      <iframe
        className={styles.musicPlaylist}
        src="https://embed.music.apple.com/us/playlist/essential-christmas/pl.b0e04e25887741ea845e1d5c88397fd4"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay *; encrypted-media *;"
        style={{ width: "100%", height: "100%", border: "0" }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        title="Apple Music Playlist"
      ></iframe>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0Yxoavh5qJV?utm_source=generator"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="encrypted-media"
        title="Spotify Playlist"
        style={{ marginTop: "10px" }}
        className={styles.musicPlaylist}
      ></iframe>

      <div>
        <span className={styles.davidLink}>
          Made with ❤️ from{" "}
          <a
            style={{ color: "white", marginTop: "20px" }}
            href="https://www.zzulanas.dev/"
          >
            Zach Zulanas
          </a>
        </span>
      </div>
    </div>
  );
};

export default Overlay;
