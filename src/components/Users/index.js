import React from "react";
import cn from "classnames";
import styles from "./Users.module.sass";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const users = [
  {
    title: "Jordan",
    avatar: "/images/content/avatar-5.jpg",
    url: "/message-center",
  },
  {
    title: "Eric",
    avatar: "/images/content/avatar-1.jpg",
    url: "/message-center",
  },
  {
    title: "Joyce",
    avatar: "/images/content/avatar-4.jpg",
    url: "/message-center",
  },
];

const Users = ({ className }) => {
  return (
    <div className={cn(styles.users, className)}>
      <div className={styles.head}>
        <div className={styles.info}>
          Beam <strong> 1024 Users</strong> with an Alert{" "}
          {/* <span role="img" aria-label="smile">
            😎
          </span> */}
        </div>
        <Link
          className={cn("button-stroke", styles.button)}
          to="/message-center"
        >
          Send<span> Notification</span>
        </Link>
      </div>
      <div className={styles.list}>
        {users.map((x, index) => (
          <Link className={styles.item} key={index} to={x.url}>
            <div className={styles.avatar}>
              <img src={x.avatar} alt="Avatar" />
            </div>
            <div className={styles.title}>{x.title}</div>
          </Link>
        ))}
        <Link className={styles.all} to="/customers/customer-list">
          <div className={styles.icon}>
            <Icon name="arrow-right" size="24" />
          </div>
          <div className={styles.text}>View all</div>
        </Link>
      </div>
    </div>
  );
};

export default Users;
