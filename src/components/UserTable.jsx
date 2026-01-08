'use client';

export default function UserTable({ users, loading }) {
  return (
    <>
      <h3 className="font-semibold mt-8 mb-2">
        User List
      </h3>

      {/* 🔄 Loading state */}
      {loading ? (
        <div className="w-full flex justify-center items-center py-10">
          <span className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
          <span className="ml-2 text-gray-600">Loading users...</span>
        </div>
      ) : (
        <div className="w-full overflow-x-auto md:overflow-visible md:flex md:justify-center">
          <table className="w-[700px] border border-black border-collapse">
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
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="border border-black text-center py-4 text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((u, i) => (
                  <tr key={u.id}>
                    <td className="border border-black text-center">{i + 1}</td>
                    <td className="border border-black px-2">{u.name}</td>
                    <td className="border border-black px-2">{u.phone}</td>
                    <td className="border border-black px-2">{u.email}</td>
                    <td className="border border-black px-2">{u.city}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}