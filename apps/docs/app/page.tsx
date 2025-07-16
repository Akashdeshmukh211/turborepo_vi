import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { UserDetails} from "@repo/ui/userDetails"
import {SignInForm } from "@repo/ui/sign_in"

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
    const handleLogin = (email: string, password: string) => {
    console.log('Login submitted:', { email, password });

    // You can call your shared @myorg/api here for auth
    // loginUser(email, password).then(...);
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserDetails/>

      </main>
   
    </div>
  );
}
