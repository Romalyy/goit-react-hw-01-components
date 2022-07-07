import React from 'react';
import propTypes from 'prop-types';
import s from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={s.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody>{items.map(item => (
        <tr key={item.id}>
            <td>{ item.type }</td>
            <td>{ item.amount }</td>
            <td>{ item.currency }</td>
        </tr>
  ))}
    </tbody>
</table>
);

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            type: propTypes.string.isRequired,
            amount: propTypes.string.isRequired,
            currency: propTypes.string.isRequired,

        }),
    ),
};

export default TransactionHistory;