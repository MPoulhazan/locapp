import { User } from './../../models/user';
import { useState } from 'react';
import { Service } from '../../models/service';
import { Basket, BasketStatus, OrderContent } from '../../models/Basket';
import { getMaxListeners } from 'cluster';
import { UserRole } from '../../models/user';
import { CollectCenter } from '../../models/CollectCenter';



const BasketService = () => {
  const [service, setService] = useState<Service<any>>({
    status: 'init'
  });

  const getAllBaskets = () => {
    setService({ status: 'loading' });

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return new Promise((resolve, reject) => {
      fetch('https://api-url', {
        method: 'GET',
        body: '',
        headers
      })
        .then(response => response.json())
        .then(response => {
          setService({ status: 'loaded', payload: response });
          // resolve(mockBasket());
          resolve(response);
        })
        .catch(error => {
          setService({ status: 'error', error });
          reject(error);
        });
    });
  };


  const mockUser = (): User => {
    return {
        id: '123',
        firstName: 'Michel',
        lastName: 'Drucker',
        email: 'mich@getMaxListeners.com',
        role: UserRole.Seller,
        orders: [],
        score: 4,
    } as User;
  }

  const mockCollectCenter = (): CollectCenter => {
    return {
        id: 123,
        name: "Ferme de Coueron",
        description: 'Ferme indépendante bio',
        owner: mockUser(),
        openDate: 1587002508,
        long: 123456,
        lat: 123456,
    } as CollectCenter;
  }

  const mockBasket = (): Basket => {
    return {
        id: 123,
        title: 'Panier de légumes',
        decription: "Ce panier contient 2 poireaux et 3 kg de tomates",
        seller: mockUser(),
        price: 12,
        creationDate: 1587902508,
        collectStartDate: 1598443308,
        collectEndDate: 1598453308,
        collectCenter: mockCollectCenter(),
        isOrganic: true,
        isVeggie: true,
        status: BasketStatus.available,
        content: [OrderContent.vegetable, OrderContent.fruit]
    } as Basket;
  }

  return {
    service,
    getAllBaskets
  };
};

export default BasketService;
