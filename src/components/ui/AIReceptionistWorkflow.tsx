"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneIncoming,
  Phone,
  BrainCircuit,
  Bot,
  CalendarCheck,
  Calendar,
  Clock,
  CheckCircle2,
  Check,
  Mail,
  MessageSquare,
  MapPin,
  Database,
  ChevronLeft,
  ChevronRight,
  Flame,
  User,
  Sparkles,
} from "lucide-react";

/* ── Constants ── */
const STEP_DURATION = 3800; // ms per step — slightly longer for readability
const STEP_COUNT = 5;

const STEPS = [
  { label: "Incoming Call", icon: PhoneIncoming },
  { label: "AI Qualifies Lead", icon: BrainCircuit },
  { label: "Books Appointment", icon: CalendarCheck },
  { label: "Sends Notifications", icon: Mail },
  { label: "CRM Updated", icon: Database },
] as const;

/* ── Shared transition helpers ── */
const directions = [
  { enter: { x: 0, y: 24 }, exit: { x: 0, y: -18 } },   // 0: up
  { enter: { x: 30, y: 0 }, exit: { x: -24, y: 0 } },    // 1: left
  { enter: { x: 0, y: 24 }, exit: { x: 0, y: -18 } },    // 2: up
  { enter: { x: -30, y: 0 }, exit: { x: 24, y: 0 } },    // 3: right
  { enter: { x: 0, y: 24 }, exit: { x: 0, y: -18 } },    // 4: up
];

function getStepVariants(step: number) {
  const dir = directions[step];
  return {
    enter: { opacity: 0, x: dir.enter.x, y: dir.enter.y, filter: "blur(6px)" },
    center: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      x: dir.exit.x,
      y: dir.exit.y,
      filter: "blur(4px)",
      transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] as const },
    },
  };
}

/* ── Step 0: Incoming Call ── */
function IncomingCallStep() {
  const [connected, setConnected] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setConnected(true), 1800);
    return () => clearTimeout(t);
  }, []);

  // Call duration counter after connect
  useEffect(() => {
    if (!connected) return;
    const iv = setInterval(() => setTimer((p) => p + 1), 1000);
    return () => clearInterval(iv);
  }, [connected]);

  const timerStr = `0:${String(timer).padStart(2, "0")}`;

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      {/* "Incoming Call" / "Connected" label */}
      <AnimatePresence mode="wait">
        {!connected ? (
          <motion.p
            key="ringing"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            exit={{ opacity: 0, y: -6 }}
            className="text-[9px] font-semibold uppercase tracking-widest text-emerald-400/70"
          >
            Incoming Call...
          </motion.p>
        ) : (
          <motion.p
            key="live"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[9px] font-semibold uppercase tracking-widest text-emerald-400"
          >
            Call Connected
          </motion.p>
        )}
      </AnimatePresence>

      {/* Caller info */}
      <div className="flex items-center gap-3">
        <div className="relative flex size-11 items-center justify-center rounded-full bg-amber/15 font-heading text-sm font-bold text-amber">
          JM
          {!connected && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-amber/40"
                animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" as const }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-amber/25"
                animate={{ scale: [1, 1.9], opacity: [0.4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0.25, ease: "easeOut" as const }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border border-amber/15"
                animate={{ scale: [1, 2.3], opacity: [0.3, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0.5, ease: "easeOut" as const }}
              />
            </>
          )}
          {connected && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30"
            >
              <Check className="size-2.5 text-white" />
            </motion.span>
          )}
        </div>
        <div>
          <p className="text-xs font-semibold text-white">John Mitchell</p>
          <p className="text-[10px] text-white/35">(555) 867-5309</p>
        </div>
      </div>

      {/* Phone icon area */}
      <div className="relative flex size-14 items-center justify-center">
        <AnimatePresence mode="wait">
          {!connected ? (
            <motion.div
              key="ringing-icon"
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Green glow behind ringing phone */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-md" />
              <motion.div
                animate={{ rotate: [0, -14, 14, -14, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.7 }}
                className="relative flex size-11 items-center justify-center rounded-full bg-emerald-500/20"
              >
                <Phone className="size-5 text-emerald-400" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="connected-icon"
              initial={{ scale: 1.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {/* Green flash on connect */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-full bg-emerald-400/20"
              />
              <div className="relative flex size-11 items-center justify-center rounded-full bg-emerald-500/20">
                <CheckCircle2 className="size-5 text-emerald-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Buttons / timer */}
      <AnimatePresence mode="wait">
        {!connected ? (
          <motion.div
            key="buttons"
            exit={{ opacity: 0, scale: 0.9, y: 4 }}
            transition={{ duration: 0.2 }}
            className="flex gap-3"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 0 0 rgba(16,185,129,0)", "0 0 0 6px rgba(16,185,129,0.15)", "0 0 0 0 rgba(16,185,129,0)"] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="rounded-full bg-emerald-500/20 px-4 py-1.5 text-[10px] font-semibold text-emerald-400"
            >
              Accept
            </motion.div>
            <div className="rounded-full bg-white/[0.05] px-4 py-1.5 text-[10px] font-semibold text-white/25">
              Decline
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="timer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            {/* Mini waveform */}
            <div className="flex items-center gap-[2px]">
              {[
                { h: "10px", dur: 0.45 },
                { h: "14px", dur: 0.55 },
                { h: "8px", dur: 0.5 },
                { h: "12px", dur: 0.6 },
                { h: "9px", dur: 0.48 },
              ].map((bar, d) => (
                <motion.span
                  key={d}
                  className="w-[2px] rounded-full bg-emerald-400/60"
                  animate={{ height: ["4px", bar.h, "4px"] }}
                  transition={{ duration: bar.dur, repeat: Infinity, delay: d * 0.08 }}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium tabular-nums text-emerald-400">
              {timerStr}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Step 1: AI Qualifies Lead ── */
function QualifyLeadStep() {
  const messages = [
    { from: "ai", text: "Hi! This is Summit Air Systems. How can I help you today?", delay: 0.15 },
    { from: "customer", text: "My AC stopped cooling. Need someone out ASAP!", delay: 0.8 },
    { from: "ai", text: "I can help! Let me find the earliest available slot.", delay: 1.5 },
  ];

  return (
    <div className="py-1">
      {/* Chat window wrapper */}
      <div className="rounded-lg border border-white/[0.05] bg-white/[0.02]">
        {/* Chat header */}
        <div className="flex items-center gap-2 border-b border-white/[0.04] px-3 py-1.5">
          <div className="flex size-4 items-center justify-center rounded-full bg-amber/20">
            <Bot className="size-2.5 text-amber" />
          </div>
          <span className="text-[9px] font-semibold text-white/50">AI Assistant</span>
          <span className="relative ml-auto flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[8px] text-emerald-400/70">Online</span>
        </div>

        {/* Messages */}
        <div className="space-y-2 p-2.5">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: msg.delay, duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
              className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`flex max-w-[85%] items-start gap-1.5 px-2.5 py-1.5 ${
                  msg.from === "ai"
                    ? "rounded-tr-xl rounded-br-xl rounded-bl-xl bg-amber/[0.08]"
                    : "rounded-tl-xl rounded-bl-xl rounded-br-xl bg-white/[0.06]"
                }`}
              >
                {msg.from === "ai" && (
                  <div className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-amber/20">
                    <Bot className="size-2 text-amber" />
                  </div>
                )}
                <span
                  className={`text-[10px] leading-relaxed ${
                    msg.from === "ai" ? "text-amber/90" : "text-white/60"
                  }`}
                >
                  {msg.text}
                </span>
                {msg.from === "customer" && (
                  <div className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                    <User className="size-2 text-white/40" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex justify-start"
          >
            <div className="flex items-center gap-1.5 rounded-tr-xl rounded-br-xl rounded-bl-xl bg-amber/[0.08] px-2.5 py-1.5">
              <div className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-amber/20">
                <Bot className="size-2 text-amber" />
              </div>
              <div className="flex gap-[3px]">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="size-[5px] rounded-full bg-amber/40"
                    animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: d * 0.15 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Step 2: Books Appointment ── */
function BookAppointmentStep() {
  const dayHeaders = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const week1 = [14, 15, 16, 17, 18, 19, 20];
  const week2 = [21, 22, 23, 24, 25, 26, 27];
  const selectedDay = 16; // Wednesday
  const today = 14; // Monday

  return (
    <div className="space-y-2.5 py-1">
      {/* Mini calendar */}
      <div className="rounded-lg border border-white/[0.05] bg-white/[0.03] p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <ChevronLeft className="size-3 text-white/20" />
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3 text-amber/50" />
            <span className="text-[10px] font-semibold text-white/50">July 2025</span>
          </div>
          <ChevronRight className="size-3 text-white/20" />
        </div>
        <div className="grid grid-cols-7 gap-x-1 gap-y-0.5">
          {/* Day headers */}
          {dayHeaders.map((d) => (
            <div key={d} className="py-0.5 text-center text-[7px] font-medium uppercase tracking-wider text-white/20">
              {d}
            </div>
          ))}
          {/* Week 1 */}
          {week1.map((d, i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08 + i * 0.04 }}
              className="relative flex flex-col items-center justify-center py-1"
            >
              {d === selectedDay && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 350, damping: 20 }}
                  className="absolute inset-x-1 inset-y-0 rounded bg-amber/20 ring-1 ring-amber/30"
                />
              )}
              <span className={`relative text-[10px] ${d === selectedDay ? "font-bold text-amber" : d === today ? "font-medium text-white/50" : "text-white/35"}`}>
                {d}
              </span>
              {d === today && (
                <span className="relative mt-px size-[3px] rounded-full bg-white/30" />
              )}
            </motion.div>
          ))}
          {/* Week 2 — dimmer */}
          {week2.map((d, i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.04 }}
              className="py-1 text-center text-[10px] text-white/20"
            >
              {d}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Time slots */}
      <div className="flex gap-1.5">
        {[
          { time: "9:00 AM", selected: false },
          { time: "11:30 AM", selected: true },
          { time: "2:00 PM", selected: false },
        ].map(({ time, selected }, i) => (
          <motion.div
            key={time}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] transition-colors ${
              selected
                ? "bg-amber/15 font-semibold text-amber ring-1 ring-amber/25"
                : "bg-white/[0.04] text-white/30"
            }`}
          >
            <Clock className="size-2.5" />
            {time}
            {selected && <Check className="size-2.5" />}
          </motion.div>
        ))}
      </div>

      {/* Confirmation card */}
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.0, type: "spring", stiffness: 280, damping: 22 }}
        className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-2.5"
      >
        <div className="flex items-start gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.15, type: "spring", stiffness: 400, damping: 15 }}
            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20"
          >
            <Check className="size-3 text-emerald-400" />
          </motion.div>
          <div>
            <p className="text-[10px] font-semibold text-emerald-400">Appointment Confirmed</p>
            <p className="mt-0.5 text-[9px] text-emerald-400/50">Wed, Jul 16 at 11:30 AM</p>
            <p className="text-[9px] text-emerald-400/50">AC Repair — Emergency Service</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Step 3: Sends Notifications ── */
function NotificationsStep() {
  const notifications = [
    {
      icon: MessageSquare,
      iconBg: "bg-sky-500/15",
      iconColor: "text-sky-400",
      type: "SMS to Customer",
      to: "(555) 867-5309",
      message: "Hi John! Your AC repair is confirmed for Wed Jul 16, 11:30 AM.",
      badge: "Delivered",
      barColor: "bg-sky-400/60",
      timestamp: "Just now",
      delay: 0.15,
    },
    {
      icon: Mail,
      iconBg: "bg-violet-500/15",
      iconColor: "text-violet-400",
      type: "Email to Owner",
      to: "owner@summitair.com",
      message: "New hot lead: John Mitchell — Emergency AC repair, Wed Jul 16.",
      badge: "Sent",
      barColor: "bg-violet-400/60",
      timestamp: "Just now",
      delay: 0.6,
    },
  ];

  return (
    <div className="space-y-2.5 py-1">
      {notifications.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i === 0 ? -20 : 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: n.delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className={`overflow-hidden rounded-lg border border-white/[0.05] bg-white/[0.03] ${
            i === 0 ? "border-l-sky-500/30 border-l-2" : "border-l-violet-500/30 border-l-2"
          }`}
        >
          <div className="p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className={`flex size-5 items-center justify-center rounded-md ${n.iconBg}`}>
                  <n.icon className={`size-3 ${n.iconColor}`} />
                </div>
                <span className="text-[10px] font-semibold text-white/60">{n.type}</span>
              </div>
              <span className="text-[8px] text-white/20">{n.timestamp}</span>
            </div>
            <p className="mb-1 text-[8px] text-white/20">To: {n.to}</p>
            <p className="mb-2 text-[9px] leading-relaxed text-white/35">{n.message}</p>
            {/* Delivery progress bar */}
            <div className="flex items-center gap-2">
              <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/[0.04]">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: n.delay + 0.2, duration: 0.5, ease: "easeOut" as const }}
                  className={`h-full rounded-full ${n.barColor}`}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: n.delay + 0.7 }}
                className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5"
              >
                <Check className="size-2 text-emerald-400" />
                <span className="text-[8px] font-semibold text-emerald-400">{n.badge}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Step 4: CRM Updated ── */
function AnimatedCount({ value, delay }: { value: number; delay: number }) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    const t = setTimeout(() => {
      let start = 0;
      const step = Math.ceil(value / 12);
      intervalRef.current = setInterval(() => {
        start = Math.min(start + step, value);
        setCount(start);
        if (start >= value) clearInterval(intervalRef.current);
      }, 50);
    }, delay * 1000);
    return () => {
      clearTimeout(t);
      clearInterval(intervalRef.current);
    };
  }, [value, delay]);

  return <>{count}</>;
}

function CRMUpdatedStep() {
  return (
    <div className="py-1">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        className="rounded-lg border border-white/[0.05] bg-white/[0.03] p-3"
      >
        {/* Header row */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative flex size-8 items-center justify-center rounded-full bg-amber/15 font-heading text-[10px] font-bold text-amber">
              JM
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 15 }}
                className="absolute -right-1 -top-1 flex size-3.5 items-center justify-center rounded-full bg-emerald-500 shadow-md shadow-emerald-500/30"
              >
                <Sparkles className="size-2 text-white" />
              </motion.span>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-white">John Mitchell</p>
              <p className="text-[9px] text-white/30">(555) 867-5309</p>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              boxShadow: [
                "0 0 0 0 rgba(249,115,22,0)",
                "0 0 0 4px rgba(249,115,22,0.1)",
                "0 0 0 0 rgba(249,115,22,0)",
              ],
            }}
            transition={{
              opacity: { delay: 0.4 },
              scale: { delay: 0.4 },
              boxShadow: { delay: 0.8, duration: 2, repeat: Infinity },
            }}
            className="flex items-center gap-1 rounded-full bg-orange-500/15 px-2 py-0.5"
          >
            <Flame className="size-2.5 text-orange-400" />
            <span className="text-[8px] font-bold text-orange-400">Hot Lead</span>
          </motion.span>
        </div>

        {/* Timestamp */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-2 text-[8px] text-white/20"
        >
          Added just now via AI Receptionist
        </motion.p>

        {/* Details */}
        <div className="mb-3 space-y-1.5 rounded-md bg-white/[0.02] px-2.5 py-2">
          {[
            { icon: MapPin, label: "Address", text: "123 Oak Street, Springfield" },
            { icon: Database, label: "Service", text: "AC Repair — Emergency" },
            { icon: CalendarCheck, label: "Appt", text: "Wed Jul 16, 11:30 AM" },
            { icon: BrainCircuit, label: "Source", text: "AI Receptionist" },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.12 }}
              className="flex items-center gap-2"
            >
              <row.icon className="size-2.5 shrink-0 text-white/20" />
              <span className="text-[8px] font-medium text-white/25">{row.label}:</span>
              <span className="text-[9px] text-white/45">{row.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Lead score bar */}
        <div className="mb-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[8px] font-medium text-white/25">Lead Score</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-[9px] font-bold text-amber"
            >
              92/100
            </motion.span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/[0.05]">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "92%" }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" as const }}
              className="h-full rounded-full bg-gradient-to-r from-amber/60 to-amber"
            />
          </div>
        </div>

        {/* Stats bar with animated counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-between border-t border-white/[0.05] pt-2"
        >
          {[
            { label: "Total Calls", value: 143, color: "text-white" },
            { label: "Leads", value: 68, color: "text-amber" },
            { label: "Booked", value: 49, color: "text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className={`font-heading text-sm font-bold ${s.color}`}>
                <AnimatedCount value={s.value} delay={0.8} />
              </p>
              <p className="text-[7px] font-medium uppercase tracking-wider text-white/20">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Progress Indicator ── */
function ProgressIndicator({ activeStep }: { activeStep: number }) {
  return (
    <div className="flex items-center justify-center">
      {STEPS.map((step, i) => {
        const isCompleted = i < activeStep;
        const isActive = i === activeStep;
        return (
          <div key={i} className="flex items-center">
            <div className="relative flex flex-col items-center">
              {/* Dot / Number */}
              <motion.div
                className={`relative flex size-5 items-center justify-center rounded-full text-[8px] font-bold transition-colors duration-300 ${
                  isCompleted
                    ? "bg-emerald-500/25 text-emerald-400"
                    : isActive
                      ? "bg-amber/20 text-amber"
                      : "bg-white/[0.06] text-white/20"
                }`}
                animate={
                  isActive
                    ? { boxShadow: ["0 0 0 0 rgba(194,113,12,0)", "0 0 0 4px rgba(194,113,12,0.15)", "0 0 0 0 rgba(194,113,12,0)"] }
                    : {}
                }
                transition={isActive ? { duration: 2, repeat: Infinity } : {}}
              >
                {isCompleted ? <Check className="size-2.5" /> : i + 1}
              </motion.div>
            </div>
            {/* Connecting line */}
            {i < STEP_COUNT - 1 && (
              <div className="relative mx-0.5 h-[2px] w-5 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-emerald-400/50"
                  initial={{ width: "0%" }}
                  animate={{ width: i < activeStep ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Main Component ── */
const STEP_COMPONENTS = [
  IncomingCallStep,
  QualifyLeadStep,
  BookAppointmentStep,
  NotificationsStep,
  CRMUpdatedStep,
];

export function AIReceptionistWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % STEP_COUNT;
        if (next === 0) setCallCount((c) => c + 1);
        return next;
      });
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, [reducedMotion, paused]);

  const ActiveComponent = STEP_COMPONENTS[activeStep];
  const activeLabel = STEPS[activeStep].label;
  const ActiveIcon = STEPS[activeStep].icon;
  const variants = getStepVariants(activeStep);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      {/* Glow behind card */}
      <div className="absolute -inset-10 rounded-3xl bg-amber/[0.05] blur-[80px]" />
      <div className="absolute -inset-4 rounded-3xl bg-amber/[0.03] blur-[30px]" />

      {/* Main glass card */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-sm"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

        {/* Scanning line — ambient sweep */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-amber/15 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
        />

        <div className="p-5">
          {/* Window chrome */}
          <div className="mb-4 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-red-400/60" />
              <div className="size-2.5 rounded-full bg-amber/60" />
              <div className="size-2.5 rounded-full bg-emerald-400/60" />
            </div>
            <div className="ml-3 flex-1 rounded-md bg-white/[0.04] px-3 py-1">
              <span className="text-[10px] text-white/30">
                <span className="mr-1 text-emerald-400/50">&#128274;</span>
                ai.lexumsoft.com
              </span>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mb-3">
            <ProgressIndicator activeStep={activeStep} />
          </div>

          {/* Active step label */}
          <div className="mb-3 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1.5"
              >
                <ActiveIcon className="size-3 text-amber" />
                <span className="text-[10px] font-semibold text-amber">{activeLabel}</span>
                <span className="text-[8px] text-white/20">({activeStep + 1}/{STEP_COUNT})</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Separator */}
          <div className="mb-3 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* Step content area */}
          <div className="min-h-[220px] rounded-lg bg-white/[0.01] px-0.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Step progress bar */}
          <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-white/[0.04]">
            <motion.div
              key={`progress-${activeStep}`}
              initial={{ width: "0%" }}
              animate={{ width: paused ? undefined : "100%" }}
              transition={{ duration: STEP_DURATION / 1000, ease: "linear" as const }}
              className="h-full rounded-full bg-gradient-to-r from-amber/20 to-amber/40"
            />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

      {/* Floating card — bottom-left: AI Receptionist Active */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: [0, -3, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.6 },
          x: { duration: 0.5, delay: 1.6 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 2 },
        }}
        className="absolute -bottom-5 -left-5 rounded-xl border border-white/[0.08] bg-warm-dark/95 px-3.5 py-2.5 shadow-2xl shadow-black/30 backdrop-blur-md"
      >
        <div className="flex items-center gap-2.5">
          <div className="relative flex size-8 items-center justify-center rounded-lg bg-emerald-500/15">
            <Phone className="size-4 text-emerald-400" />
            <span className="absolute -right-0.5 -top-0.5 flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">AI Receptionist Active</p>
            <p className="text-[9px] text-white/35">Answering calls 24/7</p>
          </div>
        </div>
      </motion.div>

      {/* Floating card — top-right: Call counter (increments each cycle) */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.9 },
          x: { duration: 0.5, delay: 1.9 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 2.5 },
        }}
        className="absolute -right-4 -top-4 rounded-xl border border-white/[0.08] bg-warm-dark/95 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-md bg-amber/15">
            <PhoneIncoming className="size-3 text-amber" />
          </div>
          <div>
            <p className="text-[11px] font-bold tabular-nums text-white">{142 + callCount}</p>
            <p className="text-[8px] text-white/30">calls today</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
