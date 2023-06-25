import styles from "./Header.module.scss";
import profile from "../../assets/images/profile.svg";

const Header = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer}>
            {/* <img src="" alt="Vid2Art" /> */}
            <h3>Vid2Art</h3>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.languageContainer}>
            <select
              name=""
              id=""
              value='English'
              className={styles.select}
            >
              <option value="English">English</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
          <div className={styles.settingsContainer}>
            <p className={styles.settings}>Settings</p>
          </div>
          <div className={styles.profileContainer}>
            <img src={profile} alt="" className={styles.profile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
