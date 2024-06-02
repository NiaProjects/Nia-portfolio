import { icons } from "lucide-react";
interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number | string;
}
const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    // Handle the case where the icon name is not found
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
