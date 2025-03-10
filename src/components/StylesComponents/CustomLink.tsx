import Link, { LinkProps } from "next/link";
import { styled } from "@mui/material/styles";
import { Typography, TypographyProps } from "@mui/material";

const StyledLink = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary, // Default to body text color
  textDecoration: "none", // Remove default underline
  fontWeight: 500,
  cursor: "pointer",
  "&:hover": {
    fontWeight: 1000,
  },
  "&:focus, &:active": {
    textDecoration: "none", // Prevent focus/active states from adding underline
  },
}));

interface CustomNextLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // Optional custom color
}

const CustomNextLink: React.FC<CustomNextLinkProps> = ({
  children,
  className,
  color,
  ...props
}) => {
  return (
    <Link {...props} passHref legacyBehavior>
      <StyledLink
        component="a"
        className={className}
        sx={{ color: color || "inherit" }}
      >
        {children}
      </StyledLink>
    </Link>
  );
};

export default CustomNextLink;
