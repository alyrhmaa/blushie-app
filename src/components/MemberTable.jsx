export default function MemberTable({ data }) {
  return (
    <table className="w-full bg-white border">
      <thead>
        <tr className="bg-gray-100">
          <th>ID</th>
          <th>Nama</th>
          <th>Tier</th>
          <th>Poin</th>
        </tr>
      </thead>
      <tbody>
        {data.map((m) => (
          <tr key={m.id}>
            <td>{m.id}</td>
            <td>{m.name}</td>
            <td>{m.tier}</td>
            <td>{m.point}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}