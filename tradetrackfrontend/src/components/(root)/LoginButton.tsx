import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface LoginButtonProps {
  text: string;
  className?: string;
  onClick?: () => void; // Make onClick optional
}
export default function LoginButton({
  text,
  className,
  onClick,
}: LoginButtonProps) {
  return (
    <InteractiveHoverButton className={className} onClick={onClick}>
      {text}
    </InteractiveHoverButton>
  );
}
