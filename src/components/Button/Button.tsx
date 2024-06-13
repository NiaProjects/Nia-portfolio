import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { tailwindMarge } from "../utils";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
  children: ReactNode;
  // classes?:string;
  // type?:"location"|"curves";
  // width?:"";
}

export type ButtonProps = VariantProps<typeof buttonVariants>;
const buttonVariants = cva(
  [
    "text-white rounded-tl-[20px] rounded-br-[20px]  h-[3.13rem]  font-medium capitalize",
  ],
  {
    variants: {
      intent: {
        primary: [
          "w-[150px]  md:w-[190px] ",
          "bg-primary",
          "border-transparent ",
          "hover:rounded-tl-[0px]",
          "hover:rounded-br-[0px]",
          "hover:rounded-tr-[20px]",
          "hover:rounded-bl-[20px]",
        ],
        outline: [
          "border-solid ",
          "border-2",
          "border-primary",
          "mx-4",
          "bg-transparent",
          // "hover:bg-primary",
          "hover:text-white",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

const Button = ({ children, intent, ...rest }: IProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 250 } }}
      {...rest}
      className={`${tailwindMarge(buttonVariants({ intent }))}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
