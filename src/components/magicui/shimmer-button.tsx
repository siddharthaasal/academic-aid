import React, { type CSSProperties, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "rgba(255,255,255,0.18)",
      shimmerSize = "180px", // width of the shimmer band
      shimmerDuration = "2.6s",
      borderRadius = "999px",
      background = "linear-gradient(90deg,#0b1220,#071026)", // dark brand background
      className,
      children,
      ...props
    },
    ref,
  ) => {
    // CSS variables exposed to the element via inline style
    const cssVars: CSSProperties = {
      "--shimmer-color": shimmerColor,
      "--shimmer-size": shimmerSize,
      "--speed": shimmerDuration,
      "--radius": borderRadius,
      "--bg": background,
    } as CSSProperties;

    return (
      <>
        {/* Keyframes / minimal styles for the shimmer effect.
            This is included inline so the component works without adding extra CSS files.
            If you'd prefer, move these into your global stylesheet. */}
        <style>{`
          @keyframes academic-shimmer {
            0% { transform: translateX(-120%); opacity: 0; }
            10% { opacity: 1; }
            50% { transform: translateX(0%); opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(120%); opacity: 0; }
          }

          /* small, subtle scale pulse to make the button feel alive when hovered */
          .academic-shimmer-hover:where(:hover, :focus-within) .shimmer-core {
            transform: scale(1.03);
          }
        `}</style>

        <button
          ref={ref}
          {...props}
          style={{
            ...cssVars,
            // allow user to override or extend via style prop
            ...(props.style || {}),
          }}
          className={cn(
            "relative z-0 inline-flex items-center justify-center overflow-hidden whitespace-nowrap border px-6 py-3 text-sm font-semibold transition-transform duration-200",
            // background uses CSS variable --bg so you can pass full gradients
            "text-white",
            "rounded-[var(--radius)]",
            // subtle border & shadow matching dark theme — change colors if you have brand tokens
            "border-[#18202a]/40 shadow-[0_6px_22px#03102280]",
            // focus ring for keyboard users
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2",
            // smooth press
            "active:translate-y-[1px] active:shadow-[inset_0_6px_12px_rgba(0,0,0,0.2)]",
            // small hover lift
            "hover:shadow-[0_10px_30px_rgba(2,6,23,0.6)]",
            // helper class to scale shimmer on hover
            "academic-shimmer-hover",
            className,
          )}
        >
          {/* background layer (solid / gradient) */}
          <div
            aria-hidden
            style={{
              background: "var(--bg)",
              borderRadius: "var(--radius)",
              inset: 0,
            }}
            className="absolute -z-20 inset-0"
          />

          {/* subtle glow behind the button */}
          <div
            aria-hidden
            className="absolute -z-10 inset-0 rounded-[var(--radius)]"
            style={{
              boxShadow: "0 10px 30px rgba(2,6,23,0.55), 0 2px 8px rgba(2,6,23,0.35)",
            }}
          />

          {/* shimmer layer (animated) */}
          <div
            aria-hidden
            className="absolute -z-5 inset-0 pointer-events-none overflow-hidden rounded-[var(--radius)]"
          >
            <div
              className="shimmer-core"
              style={{
                position: "absolute",
                top: 0,
                left: "-40%", // start off-canvas
                height: "100%",
                width: "var(--shimmer-size)",
                background: `linear-gradient(90deg, transparent 0%, var(--shimmer-color) 40%, var(--shimmer-color) 60%, transparent 100%)`,
                filter: "blur(10px)",
                transform: "translateX(-120%)",
                animation: `academic-shimmer var(--speed) linear infinite`,
                willChange: "transform, opacity",
              }}
            />
          </div>

          {/* content — sits above shimmer */}
          <span className="relative z-10 flex items-center gap-3">
            {children}
          </span>

          {/* subtle inner highlight (non-interactive) */}
          <div
            aria-hidden
            className="absolute inset-0 -z-0 rounded-[var(--radius)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              mixBlendMode: "overlay",
              pointerEvents: "none",
            }}
          />
        </button>
      </>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";
export default ShimmerButton;
