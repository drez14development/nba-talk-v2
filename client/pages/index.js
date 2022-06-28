import HeadComponent from "../components/HeadComponent";
import HomeCarrousel from "../components/Home/Carousel";
import styles from "../styles/Home.module.scss";
import {motion} from 'framer-motion';

export default function Home(props) {
  return (
    <motion.div className={styles.mainWrapper} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <HeadComponent
        title="NBA Talk"
        description="News and discussion on NBA topics"
      />
      <HomeCarrousel posts={props.posts} />
    </motion.div>
  );
}


export async function getStaticProps(){

  const res = await fetch('http:localhost:5000/posts');
  const posts = await res.json(); 

  return{
    props: {posts}
  }
}