import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import styles from '../style';

const generateData = () => {
  const data = [];
  let loss = 2.5;
  let accuracy = 0.5;
  for (let i = 0; i < 20; i++) {
    loss = loss * 0.85 + (Math.random() * 0.1);
    accuracy = accuracy + (1 - accuracy) * 0.15 + (Math.random() * 0.05 - 0.025);
    data.push({ epoch: i, loss: loss.toFixed(3), accuracy: (accuracy * 100).toFixed(1) });
  }
  return data;
};

const MLOpsMonitoring = () => {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)];
        const last = prevData[prevData.length - 1];
        let newLoss = last.loss * 0.95 + (Math.random() * 0.05);
        let newAcc = parseFloat(last.accuracy) + (100 - last.accuracy) * 0.05 + (Math.random() * 0.5 - 0.25);
        if (newAcc > 99.9) newAcc = 99.9;
        
        newData.push({
          epoch: last.epoch + 1,
          loss: newLoss.toFixed(3),
          accuracy: newAcc.toFixed(1)
        });
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050505] p-6 rounded-xl border border-[#39ff14]/30 shadow-fission">
      <h3 className="font-fission text-[#00f6ff] text-xl mb-4">{'>> LIVE_MODEL_METRICS'}</h3>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="epoch" stroke="#39ff14" tick={{fontFamily: 'monospace', fontSize: 12}} />
            <YAxis stroke="#39ff14" tick={{fontFamily: 'monospace', fontSize: 12}} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#050505', border: '1px solid #39ff14', fontFamily: 'monospace' }}
              itemStyle={{ color: '#00f6ff' }}
            />
            <Area type="monotone" dataKey="loss" stroke="#39ff14" fill="#39ff14" fillOpacity={0.2} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MLOpsMonitoring;
