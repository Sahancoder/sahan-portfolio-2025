"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Code2, TestTube2, Rocket, CheckCircle2 } from "lucide-react";

export default function AgileDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const stages = [
    { angle: -90, label: "Planning", Icon: FileText },
    { angle: -18, label: "Development", Icon: Code2 },
    { angle: 54, label: "Testing", Icon: TestTube2 },
    { angle: 126, label: "Deploy", Icon: Rocket },
    { angle: 198, label: "Review", Icon: CheckCircle2 },
  ];

  const radius = 120;
  const centerX = 200;
  const centerY = 200;

  // Calculate positions on circle
  const positions = stages.map((stage) => ({
    ...stage,
    x: centerX + radius * Math.cos((stage.angle * Math.PI) / 180),
    y: centerY + radius * Math.sin((stage.angle * Math.PI) / 180),
  }));

  // Create circular path through all points
  const createCirclePath = () => {
    return `M ${centerX + radius} ${centerY} 
            A ${radius} ${radius} 0 1 1 ${centerX + radius - 0.1} ${centerY}`;
  };

  return (
    <div ref={ref} className="relative w-full max-w-lg mx-auto">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="w-full h-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Circular flow path - self-drawing with thin particle-like line */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke="#E97319"
          strokeWidth="1"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={2 * Math.PI * radius}
          animate={
            isInView
              ? { strokeDashoffset: 0 }
              : { strokeDashoffset: 2 * Math.PI * radius }
          }
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
        />

        {/* Glow effect on the circle - very subtle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke="#E97319"
          strokeWidth="2"
          fill="transparent"
          opacity="0.15"
          filter="blur(2px)"
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={2 * Math.PI * radius}
          animate={
            isInView
              ? { strokeDashoffset: 0 }
              : { strokeDashoffset: 2 * Math.PI * radius }
          }
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
        />

        {/* Center text */}
        <text
          x={centerX}
          y={centerY - 5}
          textAnchor="middle"
          fill="#E97319"
          fontSize="16"
          fontWeight="700"
        >
          Agile
        </text>
        <text
          x={centerX}
          y={centerY + 15}
          textAnchor="middle"
          fill="#ffffff"
          fontSize="12"
          opacity="0.7"
        >
          Workflow
        </text>

        {/* Stage nodes with blinking animation */}
        {positions.map((stage, index) => (
          <g key={index}>
            {/* Outer blinking glow circle */}
            <motion.circle
              cx={stage.x}
              cy={stage.y}
              r="25"
              fill="#E97319"
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: [0, 0.3, 0],
                      scale: [1, 1.2, 1],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 2,
                delay: index * 0.4,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />

            {/* Main node circle - blinking */}
            <motion.circle
              cx={stage.x}
              cy={stage.y}
              r="18"
              fill="#E97319"
              initial={{ scale: 0 }}
              animate={
                isInView
                  ? {
                      scale: 1,
                      opacity: [1, 0.6, 1],
                    }
                  : { scale: 0 }
              }
              transition={{
                scale: { duration: 0.5, delay: 0.5 + index * 0.2, type: "spring" },
                opacity: {
                  duration: 2,
                  delay: index * 0.4,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                },
              }}
            />

            {/* Inner circle */}
            <motion.circle
              cx={stage.x}
              cy={stage.y}
              r="14"
              fill="#0b0b0b"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2, type: "spring" }}
            />

            {/* Label text */}
            <motion.text
              x={stage.x}
              y={stage.y > centerY ? stage.y + 45 : stage.y - 35}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="13"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
            >
              {stage.label}
            </motion.text>
          </g>
        ))}

        {/* Icons - rendered separately as foreignObject */}
        {positions.map((stage, index) => (
          <motion.foreignObject
            key={`icon-${index}`}
            x={stage.x - 10}
            y={stage.y - 10}
            width="20"
            height="20"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView
                ? {
                    opacity: [1, 0.6, 1],
                    scale: 1,
                  }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              scale: { duration: 0.5, delay: 0.8 + index * 0.2 },
              opacity: {
                duration: 2,
                delay: index * 0.4,
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
          >
            <stage.Icon className="w-5 h-5 text-[#E97319]" />
          </motion.foreignObject>
        ))}

        {/* Decorative particles moving in circle */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const particleRadius = radius + 30;
          return (
            <motion.circle
              key={`particle-${i}`}
              cx={centerX + particleRadius * Math.cos(angle)}
              cy={centerY + particleRadius * Math.sin(angle)}
              r="2"
              fill="#E97319"
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: [0.2, 0.8, 0.2],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          );
        })}
      </motion.svg>

      {/* Title above diagram */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-heading text-white/80">Agile Development Cycle</h3>
        <p className="text-sm text-white/50 mt-1">Continuous Iteration & Improvement</p>
      </motion.div>
    </div>
  );
}

