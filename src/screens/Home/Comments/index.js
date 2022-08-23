import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Comments.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import Favorite from "../../../components/Favorite";

const comments = [
  {
    title: "Ethel",
    login: "0x015...79ed",
    time: "1h",
    content: "On <strong>Otherside – Serum</strong>",
    comment: 'Great find! <span role="img" aria-label="smile">😊</span>',
    avatar: "/images/content/avatar-3.jpg",
  },
  {
    title: "Eric",
    login: "0xt77...m12q",
    time: "8h",
    content: "On <strong>Wallet Help</strong>",
    comment: "I need help to configure my metamask wallet.",
    avatar: "/images/content/avatar-1.jpg",
  },
  {
    title: "Tyler",
    login: "0x04g...90mx",
    time: "1d",
    content: "On <strong>Airdrops Support</strong>",
    comment: "How can I auction my airdrop",
    avatar: "/images/content/avatar-2.jpg",
  },
];

const Comments = ({ className }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Chat Support"
      classTitle="title-yellow"
    >
      <div className={styles.comments}>
        <div className={styles.list}>
          {comments.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.avatar}>
                <img src={x.avatar} alt="Avatar" />
              </div>
              <div className={styles.details}>
                <div className={styles.line}>
                  <div className={styles.user}>
                    <span className={styles.title}>{x.title}</span>{" "}
                    <span className={styles.login}>{x.login}</span>
                  </div>
                  <div className={styles.time}>{x.time}</div>
                </div>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: x.content }}
                ></div>
                <div
                  className={styles.comment}
                  dangerouslySetInnerHTML={{ __html: x.comment }}
                ></div>
                <div className={styles.control}>
                  <Link className={styles.link} to="/message-center">
                    <Icon name="message" size="20" />
                  </Link>
                  <Favorite className={cn(styles.favorite, styles.link)} />
                  <Link className={styles.link} to="/products/comments">
                    <Icon name="link" size="20" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          className={cn("button-stroke", styles.button)}
          to="/products/comments"
        >
          View all
        </Link>
      </div>
    </Card>
  );
};

export default Comments;
