// src/hooks/useFetchItems.jsx
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import db from '../firebaseConfig';

const useFetchItems = (type, param = null) => {
  const [items, setItems] = useState(type === 'single' ? null : []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let fetchedItems;
        if (type === 'all') {
          const itemsCollection = collection(db, 'items');
          const itemsSnapshot = await getDocs(itemsCollection);
          fetchedItems = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } else if (type === 'category') {
          const itemsCollection = collection(db, 'items');
          const q = query(itemsCollection, where('Category', '==', param));
          const itemsSnapshot = await getDocs(q);
          fetchedItems = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } else if (type === 'single') {
          if (param) {
            const itemDoc = doc(db, 'items', param);
            const itemSnapshot = await getDoc(itemDoc);
            if (itemSnapshot.exists()) {
              fetchedItems = { id: itemSnapshot.id, ...itemSnapshot.data() };
            } else {
              fetchedItems = null;
            }
          } else {
            fetchedItems = null;
          }
        }

        setItems(fetchedItems);
      } catch (error) {
        console.error('Error al obtener los items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [type, param]);

  return { items, loading };
};

export default useFetchItems;
