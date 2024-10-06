// src/hooks/useFetchCategories.js

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseConfig';

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(db, 'categories');
        const categoriesSnapshot = await getDocs(categoriesCollection);
        const categoriesList = categoriesSnapshot.docs.map(doc => ({
          id: doc.id, // Asegurarse de que el ID del documento esté incluido
          ...doc.data(),
        }));
        setCategories(categoriesList);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useFetchCategories;
