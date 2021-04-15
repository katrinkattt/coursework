import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getId, getTickets } from '../../store/actions/tickets';
import { Btn } from '../../components/btn';

const FinderTicket = () => {
  const dispatch = useDispatch();
  const { searchId, tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getId());
  }, []);

  const getTicket = () => {
    console.log(searchId, 'searchId');
    dispatch(getTickets(searchId));
  };

  return (
    <div>
      {tickets.length === 0 ? (
        <div>
          <p>Aviasales</p>
          <div>
            <Btn text="Найти билеты" heigh={30} onPress={() => getTicket()} />
          </div>
        </div>
      ) : (
        <div>
          {tickets.map((ticket) => (
            <div key={`${ticket}`}>
              <p>{ticket.price}</p>
              <Btn text={`${ticket.price} ₽`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FinderTicket;
