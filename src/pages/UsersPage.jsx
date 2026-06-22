  import { useEffect, useState } from "react";
  import { usersAPI } from "../services/usersAPI";
  import {
    Users,
    Shield,
    User,
    UserPlus,
    Pencil,
    Trash2,
  } from "lucide-react";

  export default function UsersPage() {
    const [users, setUsers] = useState([]);

    const [form, setForm] = useState({
      fullname: "",
      email: "",
      password: "",
      role: "customer",
    });

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
      loadUsers();
    }, []);

    const loadUsers = async () => {
      try {
        const data = await usersAPI.getUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        if (editingId) {
          await usersAPI.updateUser(editingId, form);
          alert("User berhasil diupdate");
        } else {
          await usersAPI.createUser(form);
          alert("User berhasil ditambahkan");
        }

        setForm({
          fullname: "",
          email: "",
          password: "",
          role: "customer",
        });

        setEditingId(null);

        loadUsers();
      } catch (error) {
        console.log(error);
        alert("Terjadi error");
      }
    };

    const handleEdit = (user) => {
      setForm({
        fullname: user.fullname,
        email: user.email,
        password: user.password,
        role: user.role,
      });

      setEditingId(user.id);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const handleDelete = async (id) => {
      const confirmDelete = window.confirm(
        "Yakin ingin menghapus user?"
      );

      if (!confirmDelete) return;

      try {
        await usersAPI.deleteUser(id);

        alert("User berhasil dihapus");

        loadUsers();
      } catch (error) {
        console.log(error);
        alert("Gagal menghapus user");
      }
    };

    const totalUsers = users.length;

    const totalAdmin = users.filter(
      (u) => u.role === "admin"
    ).length;

    const totalCustomer = users.filter(
      (u) => u.role === "customer"
    ).length;

    return (
      <div className="p-8 bg-[#FBFCFE] min-h-screen">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A1D1F]">
            User Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage system users and access permissions
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <Users
              size={32}
              className="text-blue-500"
            />

            <h2 className="text-3xl font-bold mt-4">
              {totalUsers}
            </h2>

            <p className="text-gray-500">
              Total Users
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <Shield
              size={32}
              className="text-purple-500"
            />

            <h2 className="text-3xl font-bold mt-4">
              {totalAdmin}
            </h2>

            <p className="text-gray-500">
              Administrators
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <User
              size={32}
              className="text-green-500"
            />

            <h2 className="text-3xl font-bold mt-4">
              {totalCustomer}
            </h2>

            <p className="text-gray-500">
              Customers
            </p>
          </div>

        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">

          <div className="flex items-center gap-3 mb-5">
            <UserPlus className="text-orange-500" />

            <h2 className="text-xl font-bold">
              {editingId
                ? "Edit User"
                : "Add New User"}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-4"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.fullname}
              onChange={(e) =>
                setForm({
                  ...form,
                  fullname: e.target.value,
                })
              }
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              required
            />

            <select
              className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.role}
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value,
                })
              }
            >
              <option value="customer">
                Customer
              </option>

              <option value="admin">
                Admin
              </option>
            </select>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              {editingId
                ? "Update User"
                : "Add User"}
            </button>

          </form>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="p-5 border-b">
            <h2 className="font-bold text-lg">
              User List
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">

              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">
                    ID
                  </th>

                  <th className="p-4 text-left">
                    Full Name
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-left">
                    Role
                  </th>

                  <th className="p-4 text-left">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">
                      #{user.id}
                    </td>

                    <td className="p-4 font-medium">
                      {user.fullname}
                    </td>

                    <td className="p-4 text-gray-600">
                      {user.email}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            handleEdit(user)
                          }
                          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg"
                        >
                          <Pencil size={16} />
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(user.id)
                          }
                          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>

      </div>
    );
  }