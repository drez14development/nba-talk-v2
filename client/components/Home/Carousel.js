import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/Home/Carousel.module.scss";
import Link from 'next/link';

export default function HomeCarrousel(props) {

  return (
    <Carousel controls={false} fade={true} interval={5000}>
      {props.posts.map((item, indx) => {
        let isActive = indx == 0 ? "active" : "";
          if (indx < 3) {
            return (
              <Carousel.Item key={indx} className={styles.item}>
                <Carousel.Caption className={styles.caption}>
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                  <Link href={`/${item.slug}`}>
                      <a className="btn btn-dark">Read more</a>
                  </Link>
                </Carousel.Caption>
                <div className={styles.imgWrapper}>
                  <img
                    className={styles.img}
                    src={item.imgUrl}
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
            );
          }
      })}
    </Carousel>
  );
}
