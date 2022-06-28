import fetch from "isomorphic-unfetch";
import styles from "../../styles/Post.module.scss";
import HeadComponent from "../../components/HeadComponent";
import { motion, AnimatePresence } from "framer-motion";

export default function Post(props) {
  const post = props.postData;

  return (
    <div className="post-container">
      <HeadComponent title={post.heading} description={post.description} />
        <AnimatePresence>
          <motion.div
            className="container pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="row">
              <div className="col-md-6 pe-5">
                <h1 className="mb-3">{post.heading}</h1>
                <p>{post.description}</p>
                <p className={styles.content}>{post.content}</p>
              </div>
              <div className="col-md-6 pt-3">
                <img src={post.imgUrl} className={styles.img} alt="" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: { postSlug: "2022-draft-board-rockets-land-smith-with-no-3-pick"} },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postSlug = params.postSlug;

  const res = await fetch(`http://localhost:5000/posts/${postSlug}`);
  const postData = await res.json();

  return { props: { postData } };
}
