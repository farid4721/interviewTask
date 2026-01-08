'use client';

import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/db';
import { userValidationSchema } from '../components/userValidation';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';

export default function Home() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      phone: '',
      email: '',
    },
    validationSchema: userValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("values", values)
      try {
        setLoading(true);
        await addDoc(collection(db, 'users'), values);
        resetForm();
        fetchUsers();
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 text-black p-5">
      <UserForm formik={formik} loading={loading} />
      <UserTable users={users} />
    </div>
  );
}
