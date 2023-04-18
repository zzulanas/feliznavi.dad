import styles from "./Overlay.module.css";

const Overlay = () => {
  return (
    <div className={styles.overlay}>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0Yxoavh5qJV?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Overlay;
