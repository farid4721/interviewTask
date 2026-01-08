'use client';

export default function UserTable({ users }) {
    return (
        <>
            <h3 className="font-semibold mt-8 mb-2">
                User List
            </h3>

            <div className="w-full overflow-x-auto md:overflow-visible md:flex md:justify-center">

                <table className="w-[700px] md:w-[700px] border border-black border-collapse">
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
        </>
    );
}
