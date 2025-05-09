import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-xl border border-slate-600 transition-all duration-200 hover:scale-105"
          >
            Logout
          </button>
        </header>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          {/* Welcome card */}
          <div className="bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 p-8 mb-8">
            <div className="text-center">
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              
              {/* Welcome message */}
              <h2 className="text-4xl font-bold text-white mb-4">
                Welcome back, {user?.name || 'User'}!
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                You have successfully logged into your account
              </p>

              {/* User info grid */}
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Name</h3>
                  <p className="text-white text-xl">{user?.name || 'N/A'}</p>
                </div>
                <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Email</h3>
                  <p className="text-white text-xl">{user?.email || 'N/A'}</p>
                </div>
                <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Role</h3>
                  <p className="text-white text-xl capitalize">{user?.role || 'user'}</p>
                </div>
                <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Member Since</h3>
                  <p className="text-white text-xl">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
