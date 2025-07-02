
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const DashboardPage = () => {
  // Mock data for charts
  const yearlyData = [
    { year: "2022", admissions: 280, terminations: 45 },
    { year: "2023", admissions: 320, terminations: 38 },
    { year: "2024", admissions: 300, terminations: 42 },
    { year: "2025", admissions: 285, terminations: 20 }
  ];

  const monthlyData = [
    { month: "Jan", admissions: 25, terminations: 5 },
    { month: "Feb", admissions: 30, terminations: 3 },
    { month: "Mar", admissions: 35, terminations: 4 },
    { month: "Apr", admissions: 28, terminations: 2 },
    { month: "May", admissions: 32, terminations: 4 },
    { month: "Jun", admissions: 27, terminations: 2 }
  ];

  const turnoverData = [
    { name: "Without Cause", value: 14, color: "#FACC15" },
    { name: "With Cause", value: 6, color: "#10B981" }
  ];

  const MetricCard = ({ title, value, subtitle, className = "" }: {
    title: string;
    value: string | number;
    subtitle?: string;
    className?: string;
  }) => (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="text-sm font-semibold text-gray-600 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-[#1E3A8A] mb-1">{value}</div>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">DASHBOARD / TURNOVER</h1>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Active Employees */}
        <MetricCard
          title="Active Employees"
          value="20,000"
        />

        {/* Admissions */}
        <MetricCard
          title="Admissions"
          value="300"
        />

        {/* Terminations */}
        <MetricCard
          title="Terminations"
          value="20"
          subtitle="6% termination rate"
        />

        {/* Cumulative Turnover */}
        <MetricCard
          title="Cumulative Turnover"
          value="10%"
        />

        {/* Donut Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-600 mb-4">Total Terminations</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={turnoverData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  dataKey="value"
                >
                  {turnoverData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            {turnoverData.map((item) => (
              <div key={item.name} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Yearly Bar Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-600 mb-4">Yearly Overview</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Bar dataKey="admissions" fill="#1E3A8A" />
                <Bar dataKey="terminations" fill="#FF3B3B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Bar Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-600 mb-4">Monthly Overview</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Bar dataKey="admissions" fill="#1E3A8A" />
                <Bar dataKey="terminations" fill="#FF3B3B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Average Monthly Turnover */}
        <MetricCard
          title="Average Monthly Turnover"
          value="12%"
        />

        {/* Query Failed Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-600 mb-4">Turnover vs Time at Company</h3>
          <div className="h-40 flex items-center justify-center">
            <div className="text-center">
              <div className="text-red-500 text-sm font-medium">Query failed</div>
              <div className="text-gray-400 text-xs mt-1">No data available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-end">
        <div className="text-right">
          <div className="text-lg font-bold text-[#FF3B3B]">Grupo Jacto</div>
          <div className="text-sm text-gray-500">HR Analytics</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
