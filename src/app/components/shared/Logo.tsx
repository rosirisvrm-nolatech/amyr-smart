import Link from "next/link";
import { Typography, styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(({ theme }) => ({
  // height: "70px",
  // width: "180px",
  // overflow: "hidden",
  // display: "block",
  textDecoration: 'none',
  color: theme.palette.text.primary,
  textAlign: 'center',
  padding: theme.spacing(2),
}));

type Props = {
  isLogin?: boolean
}

const Logo = ({ isLogin = false }: Props) => {
  return (
    <LinkStyled href="/">
      {/* <Typography variant="h3">
        Amyr Smart
      </Typography> */}
      {!isLogin && <Image src="/images/logos/logo.png" alt="logo" height={50} width={150} priority />}
      {isLogin && <Image src="/images/logos/logo2.png" alt="logo" height={50} width={150} priority />}
    </LinkStyled>
  );
};

export default Logo;
