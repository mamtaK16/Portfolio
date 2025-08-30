import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubContributions } from '../utils/github';

const GitHubGraph = () => {
  const [contributions, setContributions] = useState({
    total: '0 contributions in 2024',
    data: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGitHubContributions();
      setContributions(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const getContributionColor = (count) => {
    if (count === 0) return 'bg-gray-100';
    if (count <= 2) return 'bg-secondary/30';
    if (count <= 4) return 'bg-secondary/50';
    if (count <= 6) return 'bg-secondary/70';
    return 'bg-secondary';
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-textPrimary">GitHub Contribution Graph</h2>
        {loading && (
          <div className="text-sm text-textSecondary animate-pulse">
            Loading contributions...
          </div>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Months header */}
          <div className="flex justify-between mb-2">
            {months.map((month) => (
              <div key={month} className="text-sm text-textSecondary">
                {month}
              </div>
            ))}
          </div>

          {/* Graph grid */}
          <div className="grid grid-cols-52 gap-1">
            {contributions.data.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (weekIndex + dayIndex) * 0.001 }}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)}`}
                    title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end mt-4 text-sm text-textSecondary gap-2">
            <span>Less</span>
            <div className="flex gap-1">
              {['bg-gray-100', 'bg-secondary/30', 'bg-secondary/50', 'bg-secondary/70', 'bg-secondary'].map((color, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
              ))}
            </div>
            <span>More</span>
          </div>

          <div className="mt-2 text-sm text-textSecondary">
            {contributions.total}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubGraph; 