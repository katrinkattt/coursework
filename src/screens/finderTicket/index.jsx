import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';
import { getId, getTickets } from '../../store/actions/tickets';
import { Item } from '../../components/item';
import { Btn } from '../../components/btn';
import {
  primaryColor,
  componentColor,
  fontTitleColor,
} from '../../style/const';

const FinderTicket = () => {
  const dispatch = useDispatch();
  const { searchId, tickets } = useSelector((state) => state.tickets);
  const [count, setCount] = useState(10);
  const sortList = ['cheap', 'fast', 'optimal'];
  const [sort, setSort] = useState(sortList[0]);

  useEffect(() => {
    dispatch(getId());
  }, []);

  const getTicket = () => {
    console.log(searchId, 'searchId');
    dispatch(getTickets(searchId));
  };
  const sortFunc = (arr, typeSort) => {
    switch (typeSort) {
      case 'fast':
        return arr.sort((a, b) =>
          a.segments[0].duration > b.segments[0].duration ? 1 : -1,
        );
      case 'optimal':
        return arr.sort((a, b) =>
          a.segments[0].stops.length > b.segments[0].stops.length ? 1 : -1,
        );
      default:
        return arr.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
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
        <div style={{ padding: 20 }}>
          <ButtonGroup
            size="large"
            variant="contained"
            aria-label="contained primary button group"
            style={{ marginBottom: 24 }}
          >
            <Button
              style={{
                backgroundColor:
                  sort === 'cheap' ? primaryColor : componentColor,
                color: sort === 'cheap' ? componentColor : fontTitleColor,
              }}
              onClick={() => {
                setSort(sortList[0]);
              }}
            >
              Самый дешевый
            </Button>
            <Button
              style={{
                backgroundColor:
                  sort === 'fast' ? primaryColor : componentColor,
                color: sort === 'fast' ? componentColor : fontTitleColor,
              }}
              onClick={() => setSort(sortList[1])}
            >
              Самый быстрый
            </Button>
            <Button
              style={{
                backgroundColor:
                  sort === 'optimal' ? primaryColor : componentColor,
                color: sort === 'optimal' ? componentColor : fontTitleColor,
              }}
              onClick={() => setSort(sortList[2])}
            >
              Оптимальный
            </Button>
          </ButtonGroup>
          {sortFunc(tickets, sort)
            .slice(0, count)
            .map((ticket) => (
              <Item
                ticket={ticket}
                key={`${ticket.price}tk${ticket.carrier}`}
              />
            ))}
          <Btn
            text="Показать еще 5 билетов!"
            heigh={30}
            onPress={() => setCount((count) => count + 5)}
          />
        </div>
      )}
    </div>
  );
};
export default FinderTicket;
