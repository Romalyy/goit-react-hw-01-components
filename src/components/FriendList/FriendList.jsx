import React from 'react';
import propTypes from 'prop-types';
import s from './friendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={s.friend_list}>
        {friends.map(friend => (
            <li className={s.item} key={friend.id}>
                <span className={friend.isOnline ? s.statusOnline : s.statusOffline}></span>
                <img className={s.avatar} src={friend.avatar} alt={friend.avatar} width="48" />
                <p className={s.name}>{friend.name}</p>
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired,
        }),
    ),
};

export default FriendList;