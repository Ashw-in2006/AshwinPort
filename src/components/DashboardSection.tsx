import { motion } from "framer-motion";
import { Activity, GitCommit, Code2, Server } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const commitData = [
  { month: "Jan", commits: 24 },
  { month: "Feb", commits: 38 },
  { month: "Mar", commits: 45 },
  { month: "Apr", commits: 32 },
  { month: "May", commits: 56 },
  { month: "Jun", commits: 41 },
  { month: "Jul", commits: 63 },
];

const langData = [
  { name: "TypeScript", value: 35, color: "hsl(185, 80%, 55%)" },
  { name: "Python", value: 25, color: "hsl(260, 70%, 60%)" },
  { name: "JavaScript", value: 20, color: "hsl(215, 85%, 60%)" },
  { name: "Java", value: 12, color: "hsl(155, 75%, 50%)" },
  { name: "Other", value: 8, color: "hsl(215, 15%, 40%)" },
];

const stats = [
  { icon: GitCommit, label: "Total Commits", value: "299+" },
  { icon: Code2, label: "Repositories", value: "6+" },
  { icon: Server, label: "Deployments", value: "2 Live" },
  { icon: Activity, label: "Certifications", value: "8+" },
];

const DashboardSection = () => (
  <section id="dashboard" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl font-bold mb-2 text-gradient-multi">DevOps Monitoring</h2>
        <p className="text-muted-foreground mb-10 text-sm">Grafana-style overview of development activity</p>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <s.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass rounded-xl p-5">
            <h3 className="text-sm font-mono text-primary mb-4">// commit_frequency</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={commitData}>
                <XAxis dataKey="month" stroke="hsl(215, 15%, 40%)" fontSize={11} />
                <YAxis stroke="hsl(215, 15%, 40%)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220, 18%, 8%)",
                    border: "1px solid hsl(215, 20%, 20%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="commits" fill="hsl(185, 80%, 55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass rounded-xl p-5">
            <h3 className="text-sm font-mono text-primary mb-4">// language_distribution</h3>
            <div className="flex items-center">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie data={langData} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={70}>
                    {langData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2">
                {langData.map((l) => (
                  <div key={l.name} className="flex items-center gap-2 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                    <span className="text-muted-foreground">{l.name}</span>
                    <span className="font-mono text-foreground">{l.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DashboardSection;
