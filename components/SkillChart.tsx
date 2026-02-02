
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
// Fix: Changed import to match the exported variable name in constants.tsx
import { SKILLS_LIST } from '../constants';

export const SkillChart: React.FC = () => {
  // Fix: Used SKILLS_LIST instead of SKILLS
  const data = SKILLS_LIST.map(s => ({ subject: s.name, A: s.level, fullMark: 100 }));

  return (
    <div className="w-full h-[400px] glass-panel rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-4 text-center">Technical Proficiency</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
