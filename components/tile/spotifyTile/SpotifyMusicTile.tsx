import clsx from "clsx";
import styles from "./spotifyMusicTile.module.scss";
import restyles from "./resumeTile.module.scss";


export const SpotifyMusicTile = () => {

  return (
    <div className={clsx(styles.wrapper, styles.dataWrapper)}>
<iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZyonhntyFxW?utm_source=generator" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
</div>
 );
};


export const ResumeTile = () => {
  return (
    <div className={clsx(restyles.wrapper, restyles.dataWrapper)}>
<iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZyonhntyFxW?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
</div>
 );
};
