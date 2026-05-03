import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent/30 shadow-lg shadow-accent/20",
  secondary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/30 shadow-lg shadow-primary/10",
  ghost:
    "bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/30 backdrop-blur",
  outline:
    "border border-primary/15 bg-white text-primary hover:border-primary hover:bg-primary/5 focus-visible:ring-primary/20",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm sm:text-base",
  lg: "h-14 px-6 text-base",
};

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = SharedProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

type LinkButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
  };

export function Button(props: LinkButtonProps): JSX.Element;
export function Button(props: ButtonProps): JSX.Element;
export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonProps | LinkButtonProps) {
  const buttonClassName = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-4",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const linkProps = props as Omit<LinkButtonProps, keyof SharedProps | "href" | "children">;

    return (
      <Link className={buttonClassName} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<ButtonProps, keyof SharedProps | "children">;

  return (
    <button className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
