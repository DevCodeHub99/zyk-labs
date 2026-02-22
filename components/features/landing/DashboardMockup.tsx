

import { BarChart3, TrendingUp, Users, Activity, Settings, Bell, Search, ChevronDown } from 'lucide-react'

export default function DashboardMockup() {
  return (
    <div className="relative w-full h-[550px] md:h-full hidden md:flex items-center justify-center perspective">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent/10 rounded-3xl blur-3xl" />

      {/* Browser frame */}
      <div className="relative w-full h-[460px] bg-white dark:bg-[#1a2332] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transform hover:scale-105 transition-transform duration-500">
        {/* Browser header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-[#232f3e] dark:to-[#1a2332] border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="ml-3 text-xs text-gray-500 dark:text-gray-400 font-medium">analytics.techbuild.dev</div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="flex h-full overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#1a2332] dark:to-[#151d2b] border-r border-gray-200 dark:border-gray-800 p-4 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white tracking-wide uppercase px-2 py-1">Menu</h3>
              <div className="space-y-1">
                {['Dashboard', 'Analytics', 'Projects', 'Users'].map((item) => (
                  <div
                    key={item}
                    className={`text-sm px-3 py-2 rounded-lg transition-colors ${item === 'Dashboard'
                      ? 'bg-accent text-white font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                      }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1 pt-4 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white tracking-wide uppercase px-2 py-1">Settings</h3>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <div className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer flex items-center gap-2">
                  <Settings size={14} />
                  <span>Config</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 p-4 bg-white dark:bg-[#0f1419] overflow-hidden space-y-3">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-gray-900 dark:text-white">Dashboard</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Jan 2024 - Present</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 bg-gray-100 dark:bg-[#1a2332] px-2 py-1 rounded-lg">
                  <Search size={14} className="text-gray-400" />
                  <input type="text" placeholder="Search..." className="bg-transparent text-xs outline-none text-gray-600 dark:text-gray-300 placeholder-gray-400 w-20" />
                </div>
                <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#1a2332] rounded-lg transition-colors">
                  <Bell size={16} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Revenue', value: '$24.5K', icon: TrendingUp, color: 'from-blue-400 to-blue-600' },
                { label: 'Users', value: '1,248', icon: Users, color: 'from-purple-400 to-purple-600' },
                { label: 'Growth', value: '+32%', icon: BarChart3, color: 'from-emerald-400 to-emerald-600' },
                { label: 'Active', value: '892', icon: Activity, color: 'from-orange-400 to-orange-600' },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1a2332] dark:to-[#151d2b] rounded-lg p-2.5 border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                      <div className={`bg-gradient-to-br ${stat.color} p-1.5 rounded-md`}>
                        <Icon size={12} className="text-white" />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                )
              })}
            </div>

            {/* Charts/Activity section */}
            <div className="grid grid-cols-2 gap-2">
              {/* Chart placeholder */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1a2332] dark:to-[#151d2b] rounded-lg p-2.5 border border-gray-200 dark:border-gray-800">
                <p className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Performance</p>
                <div className="h-16 flex items-end gap-1">
                  {[65, 78, 54, 82, 71, 88, 60].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-accent to-accent/60 rounded-sm" style={{ height: `${height * 0.75}px` }} />
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1a2332] dark:to-[#151d2b] rounded-lg p-2.5 border border-gray-200 dark:border-gray-800">
                <p className="text-xs font-semibold text-gray-900 dark:text-white mb-2">Activity</p>
                <div className="space-y-1.5 text-xs">
                  {['Payment processed', 'New user signup', 'Deploy completed'].map((activity, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 truncate">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span className="truncate">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D perspective effect - subtle shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
      </div>

      {/* Floating accent dots for depth */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent/10 rounded-full blur-3xl" />
    </div>
  )
}
