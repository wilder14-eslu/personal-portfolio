import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  // CI/CD
  { id: '1', position: { x: 50, y: 50 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Source Code (Git)' }, style: { background: '#050505', color: '#00f6ff', border: '1px solid #00f6ff', borderRadius: '4px', fontFamily: 'monospace' } },
  { id: '2', position: { x: 250, y: 50 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'CI/CD Pipeline' }, style: { background: '#050505', color: '#00f6ff', border: '1px solid #00f6ff', borderRadius: '4px', fontFamily: 'monospace' } },
  
  // CT Pipeline (MLOps Level 1/2)
  { id: '3', position: { x: 50, y: 200 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Data Extraction' }, style: { background: '#050505', color: '#39ff14', border: '1px solid #39ff14', borderRadius: '4px', fontFamily: 'monospace' } },
  { id: '4', position: { x: 250, y: 200 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Data Validation' }, style: { background: '#050505', color: '#39ff14', border: '1px solid #39ff14', borderRadius: '4px', fontFamily: 'monospace' } },
  { id: '5', position: { x: 450, y: 200 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Data Preparation' }, style: { background: '#050505', color: '#39ff14', border: '1px solid #39ff14', borderRadius: '4px', fontFamily: 'monospace' } },
  { id: '6', position: { x: 650, y: 200 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Model Training' }, style: { background: '#050505', color: '#e5ff00', border: '1px solid #e5ff00', borderRadius: '4px', fontFamily: 'monospace' } },
  { id: '7', position: { x: 850, y: 200 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Model Evaluation' }, style: { background: '#050505', color: '#e5ff00', border: '1px solid #e5ff00', borderRadius: '4px', fontFamily: 'monospace' } },
  { id: '8', position: { x: 1050, y: 200 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Model Validation' }, style: { background: '#050505', color: '#e5ff00', border: '1px solid #e5ff00', borderRadius: '4px', fontFamily: 'monospace' } },
  
  // Model Registry & Serving
  { id: '9', position: { x: 1250, y: 125 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Model Registry' }, style: { background: '#050505', color: '#00f6ff', border: '1px solid #00f6ff', borderRadius: '4px', fontFamily: 'monospace' } },
  { id: '10', position: { x: 1450, y: 125 }, sourcePosition: 'right', targetPosition: 'left', data: { label: 'Model Serving' }, style: { background: '#050505', color: '#39ff14', border: '1px solid #39ff14', borderRadius: '4px', boxShadow: '0 0 10px #39ff14', fontFamily: 'monospace' } },
];

const initialEdges = [
  // CI to CT
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#00f6ff' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#00f6ff', strokeDasharray: '5,5' }, label: 'Triggers Pipeline', labelStyle: { fill: '#00f6ff', fontFamily: 'monospace' } },
  
  // CT Pipeline flow
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#39ff14' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#39ff14' } },
  { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: '#39ff14' } },
  { id: 'e6-7', source: '6', target: '7', animated: true, style: { stroke: '#e5ff00' } },
  { id: 'e7-8', source: '7', target: '8', animated: true, style: { stroke: '#e5ff00' } },
  
  // To Registry and Serving
  { id: 'e8-9', source: '8', target: '9', animated: true, style: { stroke: '#e5ff00' } },
  { id: 'e9-10', source: '9', target: '10', animated: true, style: { stroke: '#00f6ff' } },
  
  // CI directly to Serving (for application code updates)
  { id: 'e2-10', source: '2', target: '10', animated: true, style: { stroke: '#00f6ff', strokeDasharray: '5,5' }, label: 'Deploys Service', labelStyle: { fill: '#00f6ff', fontFamily: 'monospace' } },
];

export default function MLArchitecture() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-[400px] border border-[#39ff14]/30 rounded-xl overflow-hidden shadow-fission bg-[#050505] mt-10">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background color="#39ff14" gap={16} size={1} />
      </ReactFlow>
    </div>
  );
}
