import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AlertCircle, CheckCircle, Clock, Users, TrendingUp, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import DashboardNav from '../components/DashboardNav';

const AdminDashboardSummary = () => {
  const navigate = useNavigate();
  
  // Sample data - you'd get this from your API
  const ticketStatusData = [
    { name: 'Completed', value: 45, color: '#10b981' },
    { name: 'In Progress', value: 28, color: '#f59e0b' },
    { name: 'Open', value: 18, color: '#3b82f6' },
    { name: 'On Hold', value: 9, color: '#6b7280' }
  ];

  const priorityData = [
    { name: 'Low', count: 35, color: '#10b981' },
    { name: 'Medium', count: 42, color: '#f59e0b' },
    { name: 'High', count: 18, color: '#ef4444' },
    { name: 'Critical', count: 5, color: '#dc2626' }
  ];

  const weeklyTrend = [
    { day: 'Mon', created: 12, resolved: 8 },
    { day: 'Tue', created: 19, resolved: 15 },
    { day: 'Wed', created: 15, resolved: 12 },
    { day: 'Thu', created: 22, resolved: 18 },
    { day: 'Fri', created: 18, resolved: 20 },
    { day: 'Sat', created: 8, resolved: 10 },
    { day: 'Sun', created: 6, resolved: 7 }
  ];

  const categoryData = [
    { category: 'IT System', count: 28 },
    { category: 'Equipment', count: 22 },
    { category: 'Software', count: 18 },
    { category: 'Network', count: 15 },
    { category: 'Hardware', count: 12 },
    { category: 'Other', count: 5 }
  ];

  const totalTickets = ticketStatusData.reduce((sum, item) => sum + item.value, 0);
  const completedTickets = ticketStatusData.find(item => item.name === 'Completed')?.value || 0;
  const completionRate = Math.round((completedTickets / totalTickets) * 100);

  const navOptions = [
    {
      option: "Summary",
      func: () => {}
    },
    {
      option: "All Tickets",
      func: () => navigate('/admin')
    },
    {
      option: "In Progress",
      func: () => navigate('/admin')
    },
    {
      option: "Completed",
      func: () => navigate('/admin')
    },
    {
      option: "Ticket History",
      func: () => navigate('/admin')
    },
  ];

  const StatCard = ({ icon: Icon, title, value, subtitle, color = 'blue' }) => {
    const colorClasses = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      gray: 'bg-gray-50 text-gray-600 border-gray-200'
    };

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
          <div className={`p-3 rounded-full ${colorClasses[color]}`}>
            <Icon size={24} />
          </div>
        </div>
      </div>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <DashboardHeader isAdmin={true} />
      <DashboardNav navs={navOptions} />
      <div className="max-w-7xl mx-auto p-4 pt-0 sm:p-6 min-h-screen">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Monitor your helpdesk performance and ticket metrics</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <StatCard
            icon={Calendar}
            title="Total Tickets"
            value={totalTickets}
            subtitle="This month"
            color="blue"
          />
          <StatCard
            icon={CheckCircle}
            title="Completed"
            value={completedTickets}
            subtitle={`${completionRate}% completion rate`}
            color="green"
          />
          <StatCard
            icon={Clock}
            title="In Progress"
            value={ticketStatusData.find(item => item.name === 'In Progress')?.value || 0}
            subtitle="Active tickets"
            color="yellow"
          />
          <StatCard
            icon={AlertCircle}
            title="High Priority"
            value={priorityData.find(item => item.name === 'High')?.count + priorityData.find(item => item.name === 'Critical')?.count || 0}
            subtitle="Needs attention"
            color="red"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Ticket Status Pie Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="mr-2" size={20} />
              Ticket Status Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ticketStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {ticketStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Priority Distribution Bar Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="mr-2" size={20} />
              Priority Levels
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={priorityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {priorityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Weekly Trend and Category Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Trend Line Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="mr-2" size={20} />
              Weekly Trend
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="created" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    name="Created"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="resolved" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="Resolved"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="mr-2" size={20} />
              Categories
            </h2>
            <div className="space-y-4">
              {categoryData.map((category, index) => {
                const percentage = Math.round((category.count / totalTickets) * 100);
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{category.category}</span>
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-left">
              <h3 className="font-semibold text-blue-900 mb-1">Create New Ticket</h3>
              <p className="text-sm text-blue-600">Start a new support request</p>
            </button>
            <button className="p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors text-left">
              <h3 className="font-semibold text-green-900 mb-1">View All Tickets</h3>
              <p className="text-sm text-green-600">Browse and manage tickets</p>
            </button>
            <button className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-left">
              <h3 className="font-semibold text-purple-900 mb-1">Generate Report</h3>
              <p className="text-sm text-purple-600">Export analytics data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardSummary; 