
'use client';

import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/db';

export default function Home() {

  const [users, setUsers] = useState([]);

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
    onSubmit: async (values, { resetForm }) => {
      await addDoc(collection(db, 'users'), values);
      resetForm();
      fetchUsers(); 
    },
  });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 text-black">

      <form
        onSubmit={formik.handleSubmit}
        className="w-[500px] border border-black p-6 text-center rounded-xl"
      >
        <h1 className="text-2xl font-bold mb-4">User Registration</h1>

        <input
          name="name"
          placeholder="Enter Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-3/4 border border-black px-2 py-1 mb-2 rounded-md"
        />

        <input
          name="city"
          placeholder="Enter City"
          onChange={formik.handleChange}
          value={formik.values.city}
          className="w-3/4 border border-black px-2 py-1 mb-2 rounded-md"
        />

        <input
          name="phone"
          placeholder="Enter Phone number"
          onChange={formik.handleChange}
          value={formik.values.phone}
          className="w-3/4 border border-black px-2 py-1 mb-2 rounded-md"
        />

        <input
          name="email"
          placeholder="Enter Email id"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-3/4 border border-black px-2 py-1 mb-4 rounded-md"
        />

        <div>
          <button
            type="submit"
            className="border border-black px-6 py-1 rounded-xl"
          >
            Save
          </button>
        </div>
      </form>

      <h3 className="font-semibold mt-8 mb-2">User List</h3>

      <table className="w-[700px] border border-black border-collapse ">
        <thead>
          <tr>
            <th className="border border-black px-2 py-1">Sr no</th>
            <th className="border border-black px-2 py-1">Name</th>
            <th className="border border-black px-2 py-1">Phone</th>
            <th className="border border-black px-2 py-1">Email</th>
            <th className="border border-black px-2 py-1">City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.id}>
              <td className="border border-black text-center">{i + 1}</td>
              <td className="border border-black px-2">{u.name}</td>
              <td className="border border-black px-2">{u.phone}</td>
              <td className="border border-black px-2">{u.email}</td>
              <td className="border border-black px-2">{u.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}