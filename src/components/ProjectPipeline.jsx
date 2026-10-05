// Animación del ciclo de vida de ML que siguen mis proyectos reales:
// datos -> entrenamiento -> validación -> registro -> despliegue -> monitoreo (y vuelta a reentrenar).
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FaBrain, FaCheckDouble, FaDatabase, FaRocket, FaSatelliteDish, FaTags, FaRedoAlt,
} from "react-icons/fa";

const STAGES = [
  { icon: FaDatabase, color: "#0ea5e9", es: "Datos", en: "Data", tools: "MINSA · Lending Club · Pandera · Delta Lake" },
  { icon: FaBrain, color: "#6366f1", es: "Entrenamiento", en: "Training", tools: "LightGBM · XGBoost · CatBoost · Optuna" },
  { icon: FaCheckDouble, color: "#8b5cf6", es: "Validación", en: "Validation", tools: "Out-of-time · Walk-forward · Bootstrap" },
  { icon: FaTags, color: "#ec4899", es: "Registro", en: "Registry", tools: "MLflow · Campeón/Retador · A/B", toolsEn: "MLflow · Champion/Challenger · A/B" },
  { icon: FaRocket, color: "#f59e0b", es: "Despliegue", en: "Serving", tools: "FastAPI · Docker · Cloud Run" },
  { icon: FaSatelliteDish, color: "#10b981", es: "Monitoreo", en: "Monitoring", tools: "PSI · DDM · Page-Hinkley · SHAP" },
];

const METRICS = [
  { value: "ROC-AUC 0.870", es: "Riesgo crediticio · 150K solicitantes", en: "Credit risk · 150K applicants" },
  { value: "2.26M", es: "préstamos · Databricks MLOps Nivel 2", en: "loans · Databricks Level 2 MLOps" },
  { value: "WAPE 0.41", es: "Malaria · 12% mejor que el baseline", en: "Malaria · 12% better than baseline" },
  { value: "3 agentes", valueEn: "3 agents", es: "Rumbo · Gemini + Google ADK", en: "Rumbo · Gemini + Google ADK" },
];

const STEP_MS = 1600;

const ProjectPipeline = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [metric, setMetric] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const stageTimer = setInterval(() => setActive((i) => (i + 1) % STAGES.length), STEP_MS);
    const metricTimer = setInterval(() => setMetric((i) => (i + 1) % METRICS.length), STEP_MS * 2);
    return () => {
      clearInterval(stageTimer);
      clearInterval(metricTimer);
    };
  }, [reduceMotion]);

  const m = METRICS[metric];
  const progress = (active / (STAGES.length - 1)) * 100;

  return (
    <div className="relative w-full min-h-[450px] bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-[2rem] border border-white overflow-hidden shadow-[0_10px_40px_rgba(0,180,216,0.1)] p-6 sm:p-8 flex flex-col">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <p className="relative font-poppins text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-600 mb-5">
        {isEn ? "How I build ML systems" : "Cómo construyo sistemas de ML"}
      </p>

      <div className="relative flex-1">
        {/* Línea base y progreso animado */}
        <div className="absolute left-[19px] top-5 bottom-5 w-[2px] bg-slate-200 rounded-full" />
        <motion.div
          className="absolute left-[19px] top-5 w-[2px] rounded-full bg-gradient-to-b from-sky-500 via-violet-500 to-emerald-500"
          animate={{ height: `calc((100% - 40px) * ${progress / 100})` }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeInOut" }}
        />

        <ol className="relative flex flex-col gap-3">
          {STAGES.map((stage, i) => {
            const isActive = i === active;
            const isDone = i < active;
            const Icon = stage.icon;
            return (
              <motion.li
                key={stage.es}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : i * 0.08, duration: 0.4 }}
              >
                <motion.span
                  className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white"
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    borderColor: isActive || isDone ? stage.color : "#e2e8f0",
                    color: isActive || isDone ? stage.color : "#94a3b8",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-[15px]" />
                  {isActive && !reduceMotion && (
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{ boxShadow: `0 0 0 0 ${stage.color}66` }}
                      animate={{ boxShadow: [`0 0 0 0 ${stage.color}66`, `0 0 0 10px ${stage.color}00`] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </motion.span>

                <motion.div
                  className="flex-1 rounded-xl px-4 py-2 border"
                  animate={{
                    backgroundColor: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                    borderColor: isActive ? `${stage.color}55` : "rgba(226,232,240,0.6)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-poppins font-semibold text-[13px] text-gray-800 leading-tight">
                    {isEn ? stage.en : stage.es}
                  </p>
                  <p className="font-poppins text-[11px] text-gray-500 leading-snug mt-0.5">{isEn && stage.toolsEn ? stage.toolsEn : stage.tools}</p>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* Bucle de reentrenamiento + métricas reales de proyectos */}
      <div className="relative mt-5 flex items-center justify-between gap-4 flex-wrap">
        <span className="inline-flex items-center gap-2 font-poppins text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
          <motion.span
            animate={reduceMotion ? {} : { rotate: active === STAGES.length - 1 ? -360 : 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex"
          >
            <FaRedoAlt />
          </motion.span>
          {isEn ? "Drift triggers retraining" : "El drift dispara el reentrenamiento"}
        </span>

        <div className="relative h-[44px] min-w-[210px] flex-1 text-right overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={metric}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex flex-col items-end justify-center"
            >
              <span className="font-poppins font-bold text-[18px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {isEn && m.valueEn ? m.valueEn : m.value}
              </span>
              <span className="font-poppins text-[11px] text-gray-500 mt-1">{isEn ? m.en : m.es}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectPipeline;
