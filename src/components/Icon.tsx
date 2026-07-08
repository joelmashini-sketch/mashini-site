import {
  ShieldCheck,
  FileSpreadsheet,
  Landmark,
  ListChecks,
  Briefcase,
  TrendingUp,
  LineChart,
  SearchCheck,
  Award,
  Globe2,
  Building2,
  PieChart,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  FileSpreadsheet,
  Landmark,
  ListChecks,
  Briefcase,
  TrendingUp,
  LineChart,
  SearchCheck,
  Award,
  Globe2,
  Building2,
  PieChart,
};

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name] ?? ShieldCheck;
  return <Cmp {...props} />;
}
