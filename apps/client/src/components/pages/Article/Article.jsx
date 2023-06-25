import File from '../../File/File';
import styles from './Article.module.scss';

const Article = () => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.container}>
        <File text='12312312' link='https://www.youtube.com' />
      </div>
    </div>
  );
};

export default Article;