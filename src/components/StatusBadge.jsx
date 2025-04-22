export default function StatusBadge({ status }) {
    const statusClass = {
      OPERATIONAL: 'text-green-500',
      STABLE: 'text-yellow-400',
      EXPERIMENTAL: 'text-red-500'
    }
  
    return (
      <span className={`ml-2 font-bold ${statusClass[status] || 'text-secondary'}`}>
        [{status}]
      </span>
    )
  }
  